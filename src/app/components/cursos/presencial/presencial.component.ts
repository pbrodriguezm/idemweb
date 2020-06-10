


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IdemCursosService } from '../../../../services/api/idemCursos.service';
import { IdemRelCursosModulosService } from '../../../../services/api/idemRelCursosModulos.service';

import { IdemCursos } from '../../../../services/model/idemCursos';

import {MatDialog} from '@angular/material/dialog';

import { RegisterComponent } from '../../register/register.component';


@Component({
  selector: 'app-presencial',
  templateUrl: './presencial.component.html',
  styleUrls: ['./presencial.component.css']
})
export class PresencialComponent implements OnInit {
    
  constructor(private route: ActivatedRoute,
    protected ademRelCursosModulosService:IdemRelCursosModulosService,
    public dialog: MatDialog,
    protected idemCursosService:IdemCursosService) { }

    

  idcurso;
  curso:any;
  profesores:any[]=[];
  modulos:any;
  mes:any[]=['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

  precios:any=[];
  items:any=[];

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idcurso= params.get('cursoId');
     this.cargarCurso();
    });
  }


  cargarCurso(){
    this.idemCursosService.idemCursosGet('eq.'+this.idcurso,null,null,null,null,null,null,null,null,null,null,null,null,'*,idem_curso_items(idtipoitem,nombre,imagen),idem_modulos(*,idem_docentes(titulo_profesional,descripcion,idem_personas(dni,nombres,apellido_pa,apellido_ma,foto)))').subscribe(data =>{
      this.curso=data[0];
      this.modulos= this.curso.idem_modulos;
      this.cargarProfesores();
      this.cargarPrecios();
    })
  }

  cargarProfesores(){

      for (const idem_docentes of this.modulos) {
        this.profesores.push(idem_docentes.idem_docentes);
        console.log(idem_docentes);
      }
    
  }

  cargarPrecios(){
    for (let index = 0; index < this.curso.idem_curso_items.length || index<3; index++) {
      if(this.curso.idem_curso_items[index].idtipoitem=='P'){
        this.precios.push(this.curso.idem_curso_items[index]);
      }else{
        this.items.push(this.curso.idem_curso_items[index]);
        
      }
      
      
    }
  }

  mesdeinicio(){
    let fecha = new Date(this.curso.fechahora_inicio );
    return this.mes[fecha.getMonth()];
  }



  openRegistro() {
    const dialogRef = this.dialog.open(RegisterComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  

/*** ESTRUCTURA
   *  {
        "idcurso": 10,
        "nombre": "Curso de derecho Concursal",
        "descripcion": "El curso de Derecho Concursal abordará en 6 módulos los siguientes temas: una aproximación al Derecho Concursal, el inicio del Procedimiento Concursal Ordinario, reconocimiento y verficación de créditos, junta de acreedores, administración del régimen sancionador, destino del deudor y los procedimientos pre-concursales y distressed M&A.",
        "descripcion2": null,
        "imagen": "http://200.60.62.54:911/ConnectorAppLab.svc?singleWsdl",
        "costo": 1800,
        "moneda": "S",
        "idtipocurso": 2,
        "fechahora_inicio": "2020-05-04T12:00:00",
        "fechahora_fin": "2020-05-26T12:00:00",
        "lugar": "av los angeles de cayma 3.1",
        "fecharegistro": "2020-05-22T19:13:30.500198",
        "idcategoria": 1,
        "idem_curso_items": [
            {
              "idtipoitem":'P',
                "nombre": "Auditorio Felipe perez Av  mariscacal caceres 238 cercado",
                "imagen": "https://image.flaticon.com/icons/png/512/2991/2991231.png"
            }
        ],
        "idem_modulos": [
            {
                "idmodulo": 1,
                "nombre": "modulo 1",
                "dni_profesor": "44383912",
                "imagen": null,
                "video": null,
                "descripcion": "Lleve a cabo el tiempo de convenios",
                "idestado": 1,
                "fecharegistro": "2020-05-27T23:40:45.900678",
                "idem_docentes": {
                  titulo_profesional:''
                  descripcion:''
                    "idem_personas": {
                        "dni": "44383912",
                        "nombres": "Patrick",
                        "apellido_pa": "Rodriguez",
                        "apellido_ma": "Marquez",
                        "foto": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRO7cpS20HP6Qc9to9eu2BBMnORjlQ959rJHQQ2nAzcI39qsaGP&usqp=CAU"
                    }
                }
            },
   * 
   * 
   * 
   * ***/

}
