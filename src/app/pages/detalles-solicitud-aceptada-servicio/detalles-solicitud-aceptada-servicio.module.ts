import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { DetallesSolicitudAceptadaServicioPageRoutingModule } from './detalles-solicitud-aceptada-servicio-routing.module';

import { DetallesSolicitudAceptadaServicioPage } from './detalles-solicitud-aceptada-servicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    DetallesSolicitudAceptadaServicioPageRoutingModule
  ],
  declarations: [DetallesSolicitudAceptadaServicioPage]
})
export class DetallesSolicitudAceptadaServicioPageModule {}
