import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario-extractos',
  templateUrl: './formulario-extractos.component.html',
  styleUrls: ['./formulario-extractos.component.css']
})
export class FormularioExtractosComponent implements OnInit {

    
    estado: boolean = false;
    textoBtn: string = 'Guardar';


    formGeneracionMasiva:  FormGroup  = this.fb.group({
      /* Fondo */
      desdeFondo: ['', Validators.required],
      hastaFondo: ['', Validators.required],
 
      /* Encargo */      
  // Tipo de encargo
      activo: [false],
      inactivo: [false],
      cancelado: [false],
      bloqueo: [false],
      pendConf: [false],
      
      // Estado de encargo
      fideicomisos: [false],
      inmobiliario: [false],
      consolidado: [false],
      inversionistas: [false],
      individual: [false], 



      /* ----------------------------- */
      diasSinMvtos: ['', Validators.required],
      periodo: ['', Validators.required],
      grupoDeImpresion: ['', Validators.required],
      proyecto: ['', Validators.required],
      desdeEncargo: ['', Validators.required],
      hastaEncargo: ['', Validators.required],

      /* Clientes */
      desdeCliente: ['', Validators.required],
      hastaCliente: ['', Validators.required],
      ciudad: ['', Validators.required],
    })

  constructor(private router: Router,
      private route: ActivatedRoute,
      private fb: FormBuilder
    ) { }

  ngOnInit(): void {
  }

  generarPlano(){
  //  this.router.navigate(['/cargarExtracto'])
  if(this.formGeneracionMasiva.valid){
    console.log(this.formGeneracionMasiva.value);

    }else{
    

    }

  }




  /* Eliminar - Guardar */

  eliminarForm(){
    this.formGeneracionMasiva.reset()
  }

  ejecutar(){
    if(this.estado == false){
      this.guardar()
    }else{
      this.cargarDatos()
    }
  }

  guardar(){
    if(this.formGeneracionMasiva.invalid){
      this.formGeneracionMasiva.markAllAsTouched()
      return;
    }


      this.estado = true;
      this.textoBtn = "Guardar";
      const dato: any = this.formGeneracionMasiva.value;
      localStorage.setItem('data', JSON.stringify(dato))
      this.formGeneracionMasiva.reset()


  }

  cargarDatos(){
    this.estado = false;
    this.textoBtn = "Cargar";
    const data: any = JSON.parse(localStorage.getItem('data')!);
    localStorage.removeItem('data');
    this.formGeneracionMasiva.setValue(data);
  }


}
