import { Component, OnInit } from '@angular/core';
import{ GamesService } from'../servicio/games.servicio';
import{ Games } from'../modelo/games';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  gamess:Games[];
  constructor(private Gamesservicio:GamesService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.Gamesservicio.getAll().subscribe(games=>this.gamess=games);
  }

}

