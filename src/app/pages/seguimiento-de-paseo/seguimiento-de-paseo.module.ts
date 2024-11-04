import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeguimientoDePaseoPageRoutingModule } from './seguimiento-de-paseo-routing.module';

import { SeguimientoDePaseoPage } from './seguimiento-de-paseo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeguimientoDePaseoPageRoutingModule
  ],
  declarations: [SeguimientoDePaseoPage]
})
export class SeguimientoDePaseoPageModule {}
