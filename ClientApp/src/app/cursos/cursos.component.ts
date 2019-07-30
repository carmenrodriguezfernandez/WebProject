import { Component, OnInit } from '@angular/core';
import{TecService} from'../services/tec.service';
import{ Tec } from'../models/tec';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  tecs:Tec[];

  constructor(private tecservice:TecService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.tecservice.getAll().subscribe(tecs=>this.tecs=tecs);
  }

}
