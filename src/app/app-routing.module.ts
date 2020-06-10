import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { PresencialComponent } from './components/cursos/presencial/presencial.component';
import { OnlineComponent } from './components/cursos/online/online.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {path: 'curso/:cursoId',component: CursosComponent },
  {path: 'presenciales/:cursoId',component: PresencialComponent },
  {path: 'cursos/online',component: OnlineComponent }

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
