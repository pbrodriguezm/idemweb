


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IdemCursosService } from '../../../../services/api/idemCursos.service';
import { IdemRelCursosModulosService } from '../../../../services/api/idemRelCursosModulos.service';
import { IdemCursoInformesService } from '../../../../services/api/idemCursoInformes.service'

import { IdemCursos } from '../../../../services/model/idemCursos';

import { IdemCursoInformes } from '../../../../services/model/idemCursoInformes';

import {MatDialog} from '@angular/material/dialog';

import { RegisterComponent } from '../../register/register.component';


@Component({
  selector: 'app-presencial',
  templateUrl: './presencial.component.html',
  styleUrls: ['./presencial.component.css']
})
export class PresencialComponent implements OnInit {
    
  constructor(private route: ActivatedRoute,
    protected idemCursoInformesService:IdemCursoInformesService,
    
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
  informes:IdemCursoInformes={};
  
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.idcurso= params.get('cursoId');
     this.cargarCurso();
    });
  }

  cargarCurso(){
    this.idemCursosService.idemCursosGet('eq.'+this.idcurso,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,'*,idem_curso_docentes(idem_docentes(*, idem_personas(nombres, apellido_pa, foto))), idem_curso_prese(programa,fecha, descripcion,afiche)').subscribe(data =>{
      this.curso=data[0];
      console.log(this.curso);
      this.precios=this.curso.costodescripcion.split(',');
      
      this.modulos= this.curso.idem_modulos;
      
      //this.cargarPrecios();
    })
  }
  docentenext;
  getRandomDocente(idem_docentes){

    let numrandom=Math.floor(this.getRandomArbitrary(0,this.curso.idem_curso_docentes.length));
    
    this.docentenext=this.curso.idem_curso_docentes[numrandom].idem_docentes;;
      return this.curso.idem_curso_docentes[numrandom].idem_docentes;
  }

  mesdeinicio(fechainicio: Date){
    let fecha = new Date(fechainicio);
    return this.mes[fecha.getMonth()];
  }


  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }


  openRegistro() {
    const dialogRef = this.dialog.open(RegisterComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  

  guardarInformes() {
    this.informes.idcurso=this.idcurso;
    this.idemCursoInformesService.idemCursoInformesPost(this.informes).subscribe(data => {
      alert('Muy pronto nos estaremos comunicando con usted.')
    })

  }

/*** ESTRUCTURA
 * 
 * 
 * FALTA CAMBIAR PARA HOY 27:
 * 1.- cambiar boton inscribirse es blanco = LISTO
 * 2.- agregar hora en administardor para inicio y fin =PNDTE
 * 3.- isncribirse cambiar diseño  =
 * 4.- descargar programa al costado de isncribirme
 * 5.- link isncribirme
 * 6.- cambiar el "Deseas mayor información diseño"
 * 
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
