import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadirValoracionDesdeDetalleDeSolicitudPageRoutingModule } from './anadir-valoracion-desde-detalle-de-solicitud-routing.module';

import { AnadirValoracionDesdeDetalleDeSolicitudPage } from './anadir-valoracion-desde-detalle-de-solicitud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnadirValoracionDesdeDetalleDeSolicitudPageRoutingModule
  ],
  declarations: [AnadirValoracionDesdeDetalleDeSolicitudPage]
})
export class AnadirValoracionDesdeDetalleDeSolicitudPageModule {}
