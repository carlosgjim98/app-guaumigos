import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleValoracionEmpresaPageRoutingModule } from './detalle-valoracion-empresa-routing.module';

import { DetalleValoracionEmpresaPage } from './detalle-valoracion-empresa.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleValoracionEmpresaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetalleValoracionEmpresaPage]
})
export class DetalleValoracionEmpresaPageModule {}
