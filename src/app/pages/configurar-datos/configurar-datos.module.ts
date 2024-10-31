import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicModule } from '@ionic/angular';

import { ConfigurarDatosPageRoutingModule } from './configurar-datos-routing.module';

import { ConfigurarDatosPage } from './configurar-datos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule ,
    ConfigurarDatosPageRoutingModule
  ],
  declarations: [ConfigurarDatosPage]
})
export class ConfigurarDatosPageModule {}
