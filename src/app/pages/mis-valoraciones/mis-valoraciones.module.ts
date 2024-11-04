import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicModule } from '@ionic/angular';

import { MisValoracionesPageRoutingModule } from './mis-valoraciones-routing.module';

import { MisValoracionesPage } from './mis-valoraciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisValoracionesPageRoutingModule,
    ComponentsModule 
  ],
  declarations: [MisValoracionesPage]
})
export class MisValoracionesPageModule {}
