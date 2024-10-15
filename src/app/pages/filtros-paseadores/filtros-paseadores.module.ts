import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltrosPaseadoresPageRoutingModule } from './filtros-paseadores-routing.module';

import { FiltrosPaseadoresPage } from './filtros-paseadores.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltrosPaseadoresPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    FullCalendarModule
  ],
  declarations: [FiltrosPaseadoresPage]
})
export class FiltrosPaseadoresPageModule {}
