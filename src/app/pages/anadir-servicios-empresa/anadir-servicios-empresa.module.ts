import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadirServiciosEmpresaPageRoutingModule } from './anadir-servicios-empresa-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { AnadirServiciosEmpresaPage } from './anadir-servicios-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule ,
    AnadirServiciosEmpresaPageRoutingModule
  ],
  declarations: [AnadirServiciosEmpresaPage]
})
export class AnadirServiciosEmpresaPageModule {}
