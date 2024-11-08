import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisPuntosDeInteresPaseadorPageRoutingModule } from './mis-puntos-de-interes-paseador-routing.module';

import { MisPuntosDeInteresPaseadorPage } from './mis-puntos-de-interes-paseador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisPuntosDeInteresPaseadorPageRoutingModule
  ],
  declarations: [MisPuntosDeInteresPaseadorPage]
})
export class MisPuntosDeInteresPaseadorPageModule {}
