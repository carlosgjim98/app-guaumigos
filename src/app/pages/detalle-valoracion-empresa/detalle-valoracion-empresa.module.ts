import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleValoracionEmpresaPageRoutingModule } from './detalle-valoracion-empresa-routing.module';

import { DetalleValoracionEmpresaPage } from './detalle-valoracion-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleValoracionEmpresaPageRoutingModule
  ],
  declarations: [DetalleValoracionEmpresaPage]
})
export class DetalleValoracionEmpresaPageModule {}
