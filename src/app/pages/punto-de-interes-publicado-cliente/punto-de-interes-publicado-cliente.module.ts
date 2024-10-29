import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuntoDeInteresPublicadoClientePageRoutingModule } from './punto-de-interes-publicado-cliente-routing.module';

import { PuntoDeInteresPublicadoClientePage } from './punto-de-interes-publicado-cliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuntoDeInteresPublicadoClientePageRoutingModule
  ],
  declarations: [PuntoDeInteresPublicadoClientePage]
})
export class PuntoDeInteresPublicadoClientePageModule {}
