import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { IdemCursosService } from '../../../services/api/idemCursos.service';
import { IdemCursos } from '../../../services/model/idemCursos';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {




  idemcursoList:any[];
  idemcursoListPresencial: any[] = [];
  fechahoy:Date = new Date(Date.now());
  anuncioFecha='Proximamente';




  constructor(protected idemCursosService:IdemCursosService, config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  

  


  ngOnInit(): void {
    this.cargarCursos();
  }

  esproximamente(fechain){
    
    if(moment(new Date(fechain)).diff(moment(this.fechahoy), 'days')<2){
      
      return false;
    }

    if(new Date(fechain) > this.fechahoy) {
      return true;
    }else{
      return false;
    }
    
    
    
  }
  cargarCursos(){

    this.idemCursosService.idemCursosGet(null,null,null,null,null,null,null,null,'gte.'+this.fechahoy.getFullYear()+'-'+this.fechahoy.getMonth()+'-'+this.fechahoy.getDate(),null,null,null,null,'*,idem_curso_docentes(idem_docentes(*, idem_personas(nombres, apellido_pa, foto)))').subscribe(data=>{
      this.idemcursoList=data;
      console.log(data);
      this.filterCurso();
    }, error => {
      console.log(error);
    })
  }
  

  filterCurso() {
    for (const item of this.idemcursoList) {
      if(item.idtipocurso==1){
        this.idemcursoListPresencial.push(item)
      }
    }
  }


  index=0; 
  getCursos(cantidad){
    console.log('no entra');
    let arrayselect;
    if(cantidad > this.idemcursoList.length){
      cantidad=this.idemcursoList.length;
    }
    if(this.index>=this.idemcursoList.length){
      this.index=0;
    }
    for (; this.index < cantidad; this.index++) {
      arrayselect.push(this.idemcursoList[this.index]);
      
    }
    console.log(arrayselect);
    return arrayselect;

  }

}
