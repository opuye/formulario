import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit {



    miLogin: FormGroup = this.fb.group({
    usuario: ['', Validators.required],
    password: ['',[Validators.required, Validators.minLength(3)]]
  })

  
  constructor(private router: Router,
      private route: ActivatedRoute,
      private fb: FormBuilder
      ) {
        this.inicioSesion();
       }


/*  campoEsValido(campo: string){
   return this.miLogin.controls[campo]  && this.miLogin.controls[campo].touched;
 }

 */

  ngOnInit(): void {

    
  }

 
  inicioSesion(){
    if(this.miLogin.valid){
      this.router.navigate(['/formulario'])
      console.log(this.miLogin.value);
    }else{
      return;
    }
  
  }



 

}
