import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { MisPuntosDeInteresPageRoutingModule } from './mis-puntos-de-interes-routing.module';

import { MisPuntosDeInteresPage } from './mis-puntos-de-interes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisPuntosDeInteresPageRoutingModule,
    ComponentsModule 
  ],
  declarations: [MisPuntosDeInteresPage]
})
export class MisPuntosDeInteresPageModule {}
