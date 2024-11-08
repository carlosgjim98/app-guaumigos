import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicModule } from '@ionic/angular';

import { ClienteIniciarPaseoPageRoutingModule } from './cliente-iniciar-paseo-routing.module';

import { ClienteIniciarPaseoPage } from './cliente-iniciar-paseo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    ClienteIniciarPaseoPageRoutingModule
  ],
  declarations: [ClienteIniciarPaseoPage]
})
export class ClienteIniciarPaseoPageModule {}
