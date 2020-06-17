import { Component } from '@angular/core';
import { RegisterComponent } from './components/register/register.component';
import {MatDialog} from '@angular/material/dialog';

import { AuthService } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'idemweb';

  user: SocialUser;
  loggedIn: boolean;
  
  constructor( 
    private authService: AuthService,
    public dialog: MatDialog
    ){

      this.authService.authState.subscribe((user) => {
        this.user = user;
        this.loggedIn = (user != null);
      });
  }
  openRegistro() {
    const dialogRef = this.dialog.open(RegisterComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openMiPerfil(){
    const dialogRef = this.dialog.open(RegisterComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
