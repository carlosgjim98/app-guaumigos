import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuntoDeInteresDetallePageRoutingModule } from './punto-de-interes-detalle-routing.module';

import { PuntoDeInteresDetallePage } from './punto-de-interes-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuntoDeInteresDetallePageRoutingModule
  ],
  declarations: [PuntoDeInteresDetallePage]
})
export class PuntoDeInteresDetallePageModule {}
