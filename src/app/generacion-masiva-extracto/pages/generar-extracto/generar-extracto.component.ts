import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generar-extracto',
  templateUrl: './generar-extracto.component.html',
  styleUrls: ['./generar-extracto.component.css']
})
export class GenerarExtractoComponent implements OnInit {

  alertaTxt: boolean = false

  constructor() { }

  ngOnInit(): void {
  }
  generarTxt(){
    this.alertaTxt = true
  }

}
