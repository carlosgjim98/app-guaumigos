import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallePaseoPageRoutingModule } from './detalle-paseo-routing.module';

import { DetallePaseoPage } from './detalle-paseo.page';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePaseoPageRoutingModule
  ],
  declarations: [DetallePaseoPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DetallePaseoPageModule {}
