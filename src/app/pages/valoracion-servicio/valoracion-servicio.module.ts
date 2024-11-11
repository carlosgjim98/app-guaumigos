import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicModule } from '@ionic/angular';

import { ValoracionServicioPageRoutingModule } from './valoracion-servicio-routing.module';

import { ValoracionServicioPage } from './valoracion-servicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule ,
    IonicModule,
    ValoracionServicioPageRoutingModule
  ],
  declarations: [ValoracionServicioPage]
})
export class ValoracionServicioPageModule {}
