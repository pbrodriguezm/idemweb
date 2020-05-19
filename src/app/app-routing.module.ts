import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CursosComponent } from './components/cursos/cursos.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'cursos',
    component: CursosComponent,
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
