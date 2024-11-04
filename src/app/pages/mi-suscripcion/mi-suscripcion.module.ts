import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiSuscripcionPageRoutingModule } from './mi-suscripcion-routing.module';

import { MiSuscripcionPage } from './mi-suscripcion.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiSuscripcionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MiSuscripcionPage]
})
export class MiSuscripcionPageModule {}
