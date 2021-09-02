import { NgModule }      from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {ProgressBarModule} from 'primeng/progressbar';




@NgModule({

  exports:[
    BrowserAnimationsModule,
    ProgressBarModule,
   
  ]
})
export class LibreriaPrimeNgModule { }
