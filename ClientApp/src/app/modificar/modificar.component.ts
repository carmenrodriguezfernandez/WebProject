import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from'@angular/router';
import { GamesService } from '../servicio/games.servicio';
import { Games } from '../modelo/games';
import { Location } from '@angular/common';


@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
  games:Games;
  stask:string;
  constructor
  (
  private route: ActivatedRoute,
  private taskService: GamesService,
  private location: Location
  ) { }
  ngOnInit() {
  this.get();
  }
  get(): void {
    const id =
    +this.route.snapshot.paramMap.get('id');
    this.taskService.get(id)
    .subscribe(hero => this.games = hero);
    }

    update(): void {
    this.taskService.update(this.games)
    .subscribe(() => this.goBack());
    }

    delete(): void {
    this.taskService.delete(this.games)
    .subscribe(() => this.goBack());
    }
    
    goBack(): void {
    this.location.back();
    }
}
