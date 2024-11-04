import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { SeguimientoDePaseoPageRoutingModule } from './seguimiento-de-paseo-routing.module';

import { SeguimientoDePaseoPage } from './seguimiento-de-paseo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeguimientoDePaseoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SeguimientoDePaseoPage]
})
export class SeguimientoDePaseoPageModule {}
