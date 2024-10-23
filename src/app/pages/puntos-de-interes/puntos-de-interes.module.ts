import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuntosDeInteresPageRoutingModule } from './puntos-de-interes-routing.module';

import { PuntosDeInteresPage } from './puntos-de-interes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuntosDeInteresPageRoutingModule
  ],
  declarations: [PuntosDeInteresPage]
})
export class PuntosDeInteresPageModule {}
