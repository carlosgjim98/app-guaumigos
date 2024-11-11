import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { DatosServicioPageRoutingModule } from './datos-servicio-routing.module';

import { DatosServicioPage } from './datos-servicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule ,
    DatosServicioPageRoutingModule
  ],
  declarations: [DatosServicioPage]
})
export class DatosServicioPageModule {}
