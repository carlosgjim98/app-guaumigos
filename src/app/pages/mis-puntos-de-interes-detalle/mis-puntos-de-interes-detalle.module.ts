import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisPuntosDeInteresDetallePageRoutingModule } from './mis-puntos-de-interes-detalle-routing.module';

import { MisPuntosDeInteresDetallePage } from './mis-puntos-de-interes-detalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisPuntosDeInteresDetallePageRoutingModule
  ],
  declarations: [MisPuntosDeInteresDetallePage]
})
export class MisPuntosDeInteresDetallePageModule {}
