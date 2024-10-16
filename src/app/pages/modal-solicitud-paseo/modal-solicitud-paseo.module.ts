import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSolicitudPaseoPageRoutingModule } from './modal-solicitud-paseo-routing.module';

import { ModalSolicitudPaseoPage } from './modal-solicitud-paseo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSolicitudPaseoPageRoutingModule
  ],
  declarations: [ModalSolicitudPaseoPage]
})
export class ModalSolicitudPaseoPageModule {}
