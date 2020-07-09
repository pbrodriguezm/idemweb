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
    protected idemRelCursosModulosService:IdemRelCursosModulosService,
    protected idemCursosService:IdemCursosService) { }
  idcurso;
  curso:any={};
  modulos:any[]=[];
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idcurso= params.get('cursoId');
     this.cargarCurso();
     this.cargarModulos();
    });
  }

  cargarCurso(){
    this.idemCursosService.idemCursosGet('eq.'+this.idcurso,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,'*,idem_curso_docentes(idem_docentes(*, idem_personas(nombres, apellido_pa, foto)))').subscribe(data =>{
      this.curso=data[0];
      

 
      
      //this.cargarPrecios();
    })
  }

  cargarModulos(){
    this.idemRelCursosModulosService.idemRelCursosModulosGet('eq.'+this.idcurso,null,null,null,null,null,'*,idem_modulos(*,idem_docentes(titulo_profesional, idem_personas(*)))').subscribe(data => {
      this.modulos= data;
      console.log(this.modulos);
    })
  }


  docentenext;
  getRandomDocente(idem_docentes){

    let numrandom=Math.floor(this.getRandomArbitrary(0,this.curso.idem_curso_docentes.length));
    
    this.docentenext=this.curso.idem_curso_docentes[numrandom].idem_docentes;;
      return this.curso.idem_curso_docentes[numrandom].idem_docentes;
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }



}
