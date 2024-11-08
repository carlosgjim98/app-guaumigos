import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPerfilPaseadorPageRoutingModule } from './editar-perfil-paseador-routing.module';

import { EditarPerfilPaseadorPage } from './editar-perfil-paseador.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPerfilPaseadorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditarPerfilPaseadorPage]
})
export class EditarPerfilPaseadorPageModule {}
