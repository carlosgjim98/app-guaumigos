import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResumenPagoServicioPageRoutingModule } from './resumen-pago-servicio-routing.module';

import { ResumenPagoServicioPage } from './resumen-pago-servicio.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResumenPagoServicioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ResumenPagoServicioPage]
})
export class ResumenPagoServicioPageModule {}
