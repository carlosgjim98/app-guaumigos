import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicModule } from '@ionic/angular';

import { ValoracionPaseoPageRoutingModule } from './valoracion-paseo-routing.module';

import { ValoracionPaseoPage } from './valoracion-paseo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule ,
    IonicModule,
    ValoracionPaseoPageRoutingModule
  ],
  declarations: [ValoracionPaseoPage]
})
export class ValoracionPaseoPageModule {}
