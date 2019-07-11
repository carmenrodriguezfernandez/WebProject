import { Component, OnInit } from '@angular/core';
import{TecService} from'../services/tec.service';
import{ Tec } from'../models/tec';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  tecs:Tec[];

  constructor(private tecservice:TecService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.tecservice.getAll().subscribe(tecs=>this.tecs=tecs);
  }

}
