import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { IdemCursosService } from '../../../../services/api/idemCursos.service';
import { IdemCursos } from '../../../../services/model/idemCursos';
import { RegisterComponent } from '../../register/register.component';
import {MatDialog} from '@angular/material/dialog';
import { IdemDocentesService } from 'src/services/api/api';

@Component({
  selector: 'app-online',
  templateUrl: './online.component.html',
  styleUrls: ['./online.component.css']
})
export class OnlineComponent implements OnInit {
  idemcursoList:IdemCursos[]=[];
  docenteList:any[]=[];

  constructor(protected idemCursosService:IdemCursosService, 
    config: NgbCarouselConfig,
    protected idemDocentesService:IdemDocentesService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.cargarDocentes();
    this.cargarCursos();

  }

  cargarDocentes(){
    this.idemDocentesService.idemDocentesGet(null,null,null,null,'eq.1',null,'*, idem_personas(*)').subscribe(data => {
    this.docenteList=data;
    })
    
  }

  cargarCursos(){
    this.idemCursosService.idemCursosGet().subscribe(data=>{
      this.idemcursoList=data;
    })
  }

  index=0; 
  getCursos(cantidad){
    
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
