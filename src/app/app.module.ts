import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CursosComponent } from './components/cursos/cursos.component';
import { OnlineComponent } from './components/cursos/online/online.component';
import { PresencialComponent } from './components/cursos/presencial/presencial.component';
import { HomeComponent } from './components/home/home.component';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angularx-social-login";


/**Material Imports */
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
/**Social*/

/* Mis servicios*/

import { IdemAlumnosService } from '../services/api/idemAlumnos.service';
import { IdemApartadosService } from '../services/api/idemApartados.service';
import { IdemCargosService } from '../services/api/idemCargos.service';
import { IdemCategoriasService } from '../services/api/idemCategorias.service';
import { IdemCursosService } from '../services/api/idemCursos.service';
import { IdemDocentesService } from '../services/api/idemDocentes.service';
import { IdemEstadosService } from '../services/api/idemEstados.service';
import { IdemMatriculasService } from '../services/api/idemMatriculas.service';
import { IdemModulosService } from '../services/api/idemModulos.service';
import { IdemModulosComentariosService } from '../services/api/idemModulosComentarios.service';
import { IdemPagosService } from '../services/api/idemPagos.service';
import { IdemPermisosService } from '../services/api/idemPermisos.service';
import { IdemPersonasService } from '../services/api/idemPersonas.service';
import { IdemRelCursosModulosService } from '../services/api/idemRelCursosModulos.service';
import { IdemUsuariosService } from '../services/api/idemUsuarios.service';
import { IntrospectionService } from '../services/api/introspection.service';
import { ItemTipocursosService } from '../services/api/itemTipocursos.service';
import { RegisterComponent } from './components/register/register.component';


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("871082404913-ve78njuutnpnp6ktkupqv6agu652r7b7.apps.googleusercontent.com")
  }
]);
 
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    OnlineComponent,
    PresencialComponent,
    HomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatTooltipModule,
    SocialLoginModule

  ],
  providers: [ IdemAlumnosService,
    IdemApartadosService,
    IdemCargosService,
    IdemCategoriasService,
    IdemCursosService,
    IdemDocentesService,
    IdemEstadosService,
    IdemMatriculasService,
    IdemModulosService,
    IdemModulosComentariosService,
    IdemPagosService,
    IdemPermisosService,
    IdemPersonasService,
    IdemRelCursosModulosService,
    IdemUsuariosService,
    IntrospectionService,
    ItemTipocursosService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
