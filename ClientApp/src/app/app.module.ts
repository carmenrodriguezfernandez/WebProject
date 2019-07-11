import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ListaComponent } from './lista/lista.component';
import { EditarComponent } from './editar/editar.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../app/services/in-memory-data.service';
import { AppRoutingModule } from './app-routing.module';
import { IngresaComponent } from './ingresa/ingresa.component';
import { JuegosComponent } from './juegos/juegos.component';
import { ServidoresComponent } from './servidores/servidores.component';
//import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CursosComponent,
    AgregarComponent,
    ListaComponent,
    EditarComponent,
    IngresaComponent,
    JuegosComponent,
    ServidoresComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'cursos', component: CursosComponent },
      { path: 'ingresa', component: IngresaComponent },
      { path: 'juegos', component: JuegosComponent },
      { path: 'servidores', component: ServidoresComponent },
    ]),HttpClientModule,
 //HttpClientInMemoryWebApiModule.forRoot(
  //InMemoryDataService, { dataEncapsulation: false } ),
 AppRoutingModule,

],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }
