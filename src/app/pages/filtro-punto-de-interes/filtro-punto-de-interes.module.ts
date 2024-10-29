import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltroPuntoDeInteresPageRoutingModule } from './filtro-punto-de-interes-routing.module';

import { FiltroPuntoDeInteresPage } from './filtro-punto-de-interes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltroPuntoDeInteresPageRoutingModule
  ],
  declarations: [FiltroPuntoDeInteresPage]
})
export class FiltroPuntoDeInteresPageModule {}
