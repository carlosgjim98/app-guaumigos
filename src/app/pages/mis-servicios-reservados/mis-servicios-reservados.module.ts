import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisServiciosReservadosPageRoutingModule } from './mis-servicios-reservados-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { MisServiciosReservadosPage } from './mis-servicios-reservados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisServiciosReservadosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MisServiciosReservadosPage]
})
export class MisServiciosReservadosPageModule {}
