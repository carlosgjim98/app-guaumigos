import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisSolicitudesDePaseoPageRoutingModule } from './mis-solicitudes-de-paseo-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { MisSolicitudesDePaseoPage } from './mis-solicitudes-de-paseo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisSolicitudesDePaseoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MisSolicitudesDePaseoPage]
})
export class MisSolicitudesDePaseoPageModule {}
