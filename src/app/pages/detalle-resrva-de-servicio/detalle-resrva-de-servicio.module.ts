import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleResrvaDeServicioPageRoutingModule } from './detalle-resrva-de-servicio-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { DetalleResrvaDeServicioPage } from './detalle-resrva-de-servicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleResrvaDeServicioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetalleResrvaDeServicioPage]
})
export class DetalleResrvaDeServicioPageModule {}
