import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPerfilEmpresaPageRoutingModule } from './editar-perfil-empresa-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { EditarPerfilEmpresaPage } from './editar-perfil-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EditarPerfilEmpresaPageRoutingModule
  ],
  declarations: [EditarPerfilEmpresaPage]
})
export class EditarPerfilEmpresaPageModule {}
