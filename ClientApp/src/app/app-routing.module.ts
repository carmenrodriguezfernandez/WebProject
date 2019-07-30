import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ListaComponent } from './lista/lista.component';
import { AgregarComponent } from './agregar/agregar.component'; 
import { EditarComponent } from './editar/editar.component';
import { ListarComponent } from './listar/listar.component';
import { AnadirComponent } from './anadir/anadir.component'; 
import { ModificarComponent } from './modificar/modificar.component';

const routes: Routes = [
  { path:'lista', component:ListaComponent },
  { path:'agregar', component:AgregarComponent }, 
  { path:'editar/:id', component:EditarComponent },
  { path:'listar', component:ListarComponent },
  { path:'anadir', component:AnadirComponent }, 
  { path:'modificar/:id', component:ModificarComponent } 
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
