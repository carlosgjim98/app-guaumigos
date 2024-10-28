import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicModule } from '@ionic/angular';

import { NuevoPuntoDeInteresPageRoutingModule } from './nuevo-punto-de-interes-routing.module';

import { NuevoPuntoDeInteresPage } from './nuevo-punto-de-interes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    NuevoPuntoDeInteresPageRoutingModule
  ],
  declarations: [NuevoPuntoDeInteresPage]
})
export class NuevoPuntoDeInteresPageModule {}
