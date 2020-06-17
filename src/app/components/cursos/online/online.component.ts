import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { IdemCursosService } from '../../../../services/api/idemCursos.service';
import { IdemCursos } from '../../../../services/model/idemCursos';
import { RegisterComponent } from '../../register/register.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css']
})
export class OnlineComponent implements OnInit {
  idemcursoList:IdemCursos[]=[];

  constructor(protected idemCursosService:IdemCursosService, config: NgbCarouselConfig, public dialog: MatDialog) { }

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

  openRegistro() {
    const dialogRef = this.dialog.open(RegisterComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
