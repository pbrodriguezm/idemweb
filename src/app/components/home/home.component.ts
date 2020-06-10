import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { IdemCursosService } from '../../../services/api/idemCursos.service';
import { IdemCursos } from '../../../services/model/idemCursos';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(protected idemCursosService:IdemCursosService, config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  

  
  idemcursoList:IdemCursos[];
  ngOnInit(): void {
    this.cargarCursos();
  }

  cargarCursos(){
    this.idemCursosService.idemCursosGet().subscribe(data=>{
      this.idemcursoList=data;
    })
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
