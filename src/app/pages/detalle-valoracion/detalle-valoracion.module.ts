import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';

import { DetalleValoracionPageRoutingModule } from './detalle-valoracion-routing.module';

import { DetalleValoracionPage } from './detalle-valoracion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    DetalleValoracionPageRoutingModule
  ],
  declarations: [DetalleValoracionPage]
})
export class DetalleValoracionPageModule {}
