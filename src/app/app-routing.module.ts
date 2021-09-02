import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";



import { FormularioExtractosComponent } from "./generacion-masiva-extracto/pages/formulario-extracto/formulario-extractos.component";
import { InicioSesionComponent } from './generacion-masiva-extracto/pages/inicio-sesion/inicio-sesion.component';
import { CargarExtractoComponent } from './generacion-masiva-extracto/pages/cargar-extracto/cargar-extracto.component';
import { GenerarExtractoComponent } from './generacion-masiva-extracto/pages/generar-extracto/generar-extracto.component';

const routes: Routes = [
    {path: '', component: InicioSesionComponent, pathMatch: 'full'},
    {path: 'formulario', component: FormularioExtractosComponent},
    {path: 'cargarExtracto', component: CargarExtractoComponent},
    {path: 'generarExtracto', component: GenerarExtractoComponent},

    {path: '**', redirectTo: ''}
    
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)

    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{}