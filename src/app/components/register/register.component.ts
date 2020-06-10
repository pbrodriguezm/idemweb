import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  logueado=0;
  ngOnInit(): void {

  }

  loguear(valor){
    this.logueado=valor;
  }

}
