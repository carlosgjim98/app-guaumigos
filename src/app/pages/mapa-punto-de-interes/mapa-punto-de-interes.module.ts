import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicModule } from '@ionic/angular';

import { MapaPuntoDeInteresPageRoutingModule } from './mapa-punto-de-interes-routing.module';

import { MapaPuntoDeInteresPage } from './mapa-punto-de-interes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapaPuntoDeInteresPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MapaPuntoDeInteresPage]
})
export class MapaPuntoDeInteresPageModule {}
