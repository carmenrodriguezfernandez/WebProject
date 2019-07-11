import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from'@angular/router';
import { TecService } from '../services/tec.service';
import { Tec } from '../models/tec';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  tec:Tec;
  stask:string;
  constructor
  (
  private route: ActivatedRoute,
  private taskService: TecService,
  private location: Location
  ) { }
  ngOnInit() {
  this.get();
  }
  get(): void {
    const id =
    +this.route.snapshot.paramMap.get('id');
    this.taskService.get(id)
    .subscribe(hero => this.tec = hero);
    }

    update(): void {
    this.taskService.update(this.tec)
    .subscribe(() => this.goBack());
    }

    delete(): void {
    this.taskService.delete(this.tec)
    .subscribe(() => this.goBack());
    }
    
    goBack(): void {
    this.location.back();
    }
}
