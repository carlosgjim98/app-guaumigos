import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjustesEmpresaPageRoutingModule } from './ajustes-empresa-routing.module';

import { AjustesEmpresaPage } from './ajustes-empresa.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjustesEmpresaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AjustesEmpresaPage]
})
export class AjustesEmpresaPageModule {}
