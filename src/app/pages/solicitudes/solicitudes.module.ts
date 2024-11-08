import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicModule } from '@ionic/angular';

import { SolicitudesPageRoutingModule } from './solicitudes-routing.module';

import { SolicitudesPage } from './solicitudes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    SolicitudesPageRoutingModule
  ],
  declarations: [SolicitudesPage]
})
export class SolicitudesPageModule {}
