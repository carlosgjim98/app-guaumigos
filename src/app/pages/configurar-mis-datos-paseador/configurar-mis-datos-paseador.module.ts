import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigurarMisDatosPaseadorPageRoutingModule } from './configurar-mis-datos-paseador-routing.module';

import { ConfigurarMisDatosPaseadorPage } from './configurar-mis-datos-paseador.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigurarMisDatosPaseadorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ConfigurarMisDatosPaseadorPage]
})
export class ConfigurarMisDatosPaseadorPageModule {}
