import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleSolicitudAceptadaPageRoutingModule } from './detalle-solicitud-aceptada-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { DetalleSolicitudAceptadaPage } from './detalle-solicitud-aceptada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleSolicitudAceptadaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetalleSolicitudAceptadaPage]
})
export class DetalleSolicitudAceptadaPageModule {}
