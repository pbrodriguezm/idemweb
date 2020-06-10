import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IdemCursosService } from '../../../services/api/idemCursos.service';
import { IdemRelCursosModulosService } from '../../../services/api/idemRelCursosModulos.service';

import { IdemCursos } from '../../../services/model/idemCursos';



@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  
  constructor(private route: ActivatedRoute,
    protected ademRelCursosModulosService:IdemRelCursosModulosService,
    protected idemCursosService:IdemCursosService) { }
  idcurso;
  curso:any;
  modulos:any;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idcurso= params.get('cursoId');
     this.cargarCurso();
    });
  }

  cargarCurso(){
    this.idemCursosService.idemCursosGet('eq.'+this.idcurso,null,null,null,null,null,null,null,null,null,null,null,null,'*,idem_curso_items(nombre,imagen),idem_modulos(*)').subscribe(data =>{
      this.curso=data[0];
      this.modulos= this.curso.idem_modulos;
    })
  }



}
