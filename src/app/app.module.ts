import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GeneracionMasivaExtractoModule } from './generacion-masiva-extracto/generacion-masiva-extracto.module';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LibreriaPrimeNgModule } from './generacion-masiva-extracto/libreria-prime-ng/libreria-prime-ng.module';
import { SharedModule } from './shared/shared.module';






@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GeneracionMasivaExtractoModule,
    NgbModule,
    SharedModule
    
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
