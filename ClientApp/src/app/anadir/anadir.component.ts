import { Component, OnInit } from '@angular/core';
import { GamesService } from '../servicio/games.servicio';
import { Games } from '../modelo/games';


@Component({
  selector: 'app-anadir',
  templateUrl: './anadir.component.html',
  styleUrls: ['./anadir.component.css']
})
export class AnadirComponent implements OnInit {

  constructor(private taskService: GamesService) { }
  games: Games;
  
  ngOnInit() {
  this.games = { id: 0, nombre: '', descripcion: '', precio: 0 };
  }
  
  add() {
    this.taskService.addTask(this.games)
    .subscribe(socio => {
    alert('Se agrego un nuevo articulo')
    });
    }
  
  }