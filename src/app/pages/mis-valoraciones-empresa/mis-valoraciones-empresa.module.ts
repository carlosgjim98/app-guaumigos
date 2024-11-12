import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisValoracionesEmpresaPageRoutingModule } from './mis-valoraciones-empresa-routing.module';

import { MisValoracionesEmpresaPage } from './mis-valoraciones-empresa.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisValoracionesEmpresaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MisValoracionesEmpresaPage]
})
export class MisValoracionesEmpresaPageModule {}
