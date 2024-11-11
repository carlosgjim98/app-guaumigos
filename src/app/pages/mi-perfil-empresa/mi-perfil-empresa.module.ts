import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiPerfilEmpresaPageRoutingModule } from './mi-perfil-empresa-routing.module';

import { MiPerfilEmpresaPage } from './mi-perfil-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiPerfilEmpresaPageRoutingModule
  ],
  declarations: [MiPerfilEmpresaPage]
})
export class MiPerfilEmpresaPageModule {}
