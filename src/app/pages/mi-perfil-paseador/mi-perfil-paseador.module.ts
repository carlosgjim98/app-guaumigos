import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiPerfilPaseadorPageRoutingModule } from './mi-perfil-paseador-routing.module';

import { MiPerfilPaseadorPage } from './mi-perfil-paseador.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiPerfilPaseadorPageRoutingModule
  ],
  declarations: [MiPerfilPaseadorPage]
})
export class MiPerfilPaseadorPageModule {}
