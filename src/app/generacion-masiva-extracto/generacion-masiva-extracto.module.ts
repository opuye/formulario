import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioSesionComponent } from './pages/inicio-sesion/inicio-sesion.component';
import { FormularioExtractosComponent } from './pages/formulario-extracto/formulario-extractos.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CargarExtractoComponent } from './pages/cargar-extracto/cargar-extracto.component';
import { GenerarExtractoComponent } from './pages/generar-extracto/generar-extracto.component';
import { AppRoutingModule } from '../app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LibreriaPrimeNgModule } from './libreria-prime-ng/libreria-prime-ng.module';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [
    InicioSesionComponent,
    FormularioExtractosComponent,
    CargarExtractoComponent,
    GenerarExtractoComponent
  ],
  exports:[
    InicioSesionComponent,
    FormularioExtractosComponent,
    CargarExtractoComponent,
    GenerarExtractoComponent
  ],
 
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    NgbModule,
    LibreriaPrimeNgModule,
    ReactiveFormsModule

  ],
  providers: [MessageService]
})
export class GeneracionMasivaExtractoModule { }
