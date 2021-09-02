import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  generarExtracto:string = 'generarExtracto'


  
  constructor(private router: Router,
    private route: ActivatedRoute) {


     }

  ngOnInit(): void {

 

  }

  cerrar(){
   
    this.router.navigate([''])
  }

  atras(){

  if(this.router.parseUrl(this.router.url)){

  }
   
       
  }

}
