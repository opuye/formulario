import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-cargar-extracto',
  templateUrl: './cargar-extracto.component.html',
  styleUrls: ['./cargar-extracto.component.css']

})
export class CargarExtractoComponent implements OnInit {
  value: number = 0;


  constructor(

    private router: Router,
    private route: ActivatedRoute,
    private messageService: MessageService
   ) { }


   ngOnInit() {
    let interval = setInterval(() => {
      this.value = this.value + Math.floor(Math.random() * 10) + 1;
      if (this.value >= 100) {
          this.value = 100;
          this.messageService.add({severity: 'info', summary: 'Success', detail: 'Process Completed'});
          clearInterval(interval);
          this.router.navigate(['/generarExtracto'])
      }
  }, 2000);
  
   }
   
}
