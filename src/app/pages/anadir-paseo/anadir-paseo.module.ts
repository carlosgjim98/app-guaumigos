import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadirPaseoPageRoutingModule } from './anadir-paseo-routing.module';

import { AnadirPaseoPage } from './anadir-paseo.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnadirPaseoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AnadirPaseoPage]
})
export class AnadirPaseoPageModule {}
