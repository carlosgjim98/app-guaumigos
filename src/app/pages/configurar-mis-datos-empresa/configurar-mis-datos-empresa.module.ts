import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigurarMisDatosEmpresaPageRoutingModule } from './configurar-mis-datos-empresa-routing.module';

import { ConfigurarMisDatosEmpresaPage } from './configurar-mis-datos-empresa.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigurarMisDatosEmpresaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ConfigurarMisDatosEmpresaPage]
})
export class ConfigurarMisDatosEmpresaPageModule {}
