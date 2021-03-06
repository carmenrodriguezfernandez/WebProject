import { Component, OnInit } from '@angular/core';
import{ GamesService } from'../servicio/games.servicio';
import{ Games } from'../modelo/games';

@Component({
  selector: 'app-juegos',
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {
  
  gamess:Games[];
  constructor(private Gamesservicio:GamesService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.Gamesservicio.getAll().subscribe(games=>this.gamess=games);
  }

}

