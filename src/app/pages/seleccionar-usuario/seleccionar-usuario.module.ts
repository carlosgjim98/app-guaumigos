import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionarUsuarioPageRoutingModule } from './seleccionar-usuario-routing.module';

import { SeleccionarUsuarioPage } from './seleccionar-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionarUsuarioPageRoutingModule
  ],
  declarations: [SeleccionarUsuarioPage]
})
export class SeleccionarUsuarioPageModule {}
