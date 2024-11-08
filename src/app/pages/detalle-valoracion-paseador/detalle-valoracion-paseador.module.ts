import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicModule } from '@ionic/angular';

import { DetalleValoracionPaseadorPageRoutingModule } from './detalle-valoracion-paseador-routing.module';

import { DetalleValoracionPaseadorPage } from './detalle-valoracion-paseador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    DetalleValoracionPaseadorPageRoutingModule
  ],
  declarations: [DetalleValoracionPaseadorPage]
})
export class DetalleValoracionPaseadorPageModule {}
