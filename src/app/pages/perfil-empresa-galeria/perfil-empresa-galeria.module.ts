import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilEmpresaGaleriaPageRoutingModule } from './perfil-empresa-galeria-routing.module';

import { PerfilEmpresaGaleriaPage } from './perfil-empresa-galeria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilEmpresaGaleriaPageRoutingModule
  ],
  declarations: [PerfilEmpresaGaleriaPage]
})
export class PerfilEmpresaGaleriaPageModule {}
