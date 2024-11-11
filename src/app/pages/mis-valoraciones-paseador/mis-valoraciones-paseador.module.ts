import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisValoracionesPaseadorPageRoutingModule } from './mis-valoraciones-paseador-routing.module';

import { MisValoracionesPaseadorPage } from './mis-valoraciones-paseador.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisValoracionesPaseadorPageRoutingModule
  ],
  declarations: [MisValoracionesPaseadorPage]
})
export class MisValoracionesPaseadorPageModule {}
