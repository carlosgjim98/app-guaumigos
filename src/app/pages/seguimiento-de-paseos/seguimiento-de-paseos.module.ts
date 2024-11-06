import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeguimientoDePaseosPageRoutingModule } from './seguimiento-de-paseos-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { SeguimientoDePaseosPage } from './seguimiento-de-paseos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeguimientoDePaseosPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  declarations: [SeguimientoDePaseosPage]
})
export class SeguimientoDePaseosPageModule {}
