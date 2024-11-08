import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleSolicitudAceptadaIniciarPaseoPageRoutingModule } from './detalle-solicitud-aceptada-iniciar-paseo-routing.module';

import { DetalleSolicitudAceptadaIniciarPaseoPage } from './detalle-solicitud-aceptada-iniciar-paseo.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleSolicitudAceptadaIniciarPaseoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetalleSolicitudAceptadaIniciarPaseoPage]
})
export class DetalleSolicitudAceptadaIniciarPaseoPageModule {}
