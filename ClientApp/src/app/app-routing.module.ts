import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { AgregarComponent } from './agregar/agregar.component'; 
import { EditarComponent } from './editar/editar.component';

const routes: Routes = [
  { path:'lista', component:ListaComponent },
  { path:'agregar', component:AgregarComponent }, 
  { path:'editar/:id', component:EditarComponent } 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
