import { Component, OnInit } from '@angular/core';
import { TecService } from '../services/tec.service'
import { Tec } from '../models/tec';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private taskService: TecService) { }
  tec: Tec;
  
  ngOnInit() {
  this.tec = { id: 0, nombre: '', descripcion: '', precioventa: 0 };
  }
  
  add() {
    this.taskService.addTask(this.tec)
    .subscribe(socio => {
    alert('Se agrego un nuevo articulo')
    });
    }
  
  }
  