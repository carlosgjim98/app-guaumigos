import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleServicioPaseoPageRoutingModule } from './detalle-servicio-paseo-routing.module';

import { DetalleServicioPaseoPage } from './detalle-servicio-paseo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleServicioPaseoPageRoutingModule
  ],
  declarations: [DetalleServicioPaseoPage]
})
export class DetalleServicioPaseoPageModule {}
