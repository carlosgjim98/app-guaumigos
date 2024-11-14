import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleSolicitudAceptadaPaseoFinalizadoAnadirValoracionPageRoutingModule } from './detalle-solicitud-aceptada-paseo-finalizado-anadir-valoracion-routing.module';

import { DetalleSolicitudAceptadaPaseoFinalizadoAnadirValoracionPage } from './detalle-solicitud-aceptada-paseo-finalizado-anadir-valoracion.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleSolicitudAceptadaPaseoFinalizadoAnadirValoracionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetalleSolicitudAceptadaPaseoFinalizadoAnadirValoracionPage]
})
export class DetalleSolicitudAceptadaPaseoFinalizadoAnadirValoracionPageModule {}
