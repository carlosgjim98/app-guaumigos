import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadirValoracionPageRoutingModule } from './anadir-valoracion-routing.module';

import { AnadirValoracionPage } from './anadir-valoracion.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnadirValoracionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AnadirValoracionPage]
})
export class AnadirValoracionPageModule {}
