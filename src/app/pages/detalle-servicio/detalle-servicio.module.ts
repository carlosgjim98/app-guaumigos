import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleServicioPageRoutingModule } from './detalle-servicio-routing.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { DetalleServicioPage } from './detalle-servicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FullCalendarModule,
    DetalleServicioPageRoutingModule
  ],
  declarations: [DetalleServicioPage]
})
export class DetalleServicioPageModule {}
