import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigurarCalendarioPageRoutingModule } from './configurar-calendario-routing.module';

import { ConfigurarCalendarioPage } from './configurar-calendario.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigurarCalendarioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ConfigurarCalendarioPage]
})
export class ConfigurarCalendarioPageModule {}
