import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from 'src/app/components/components.module';
import { CompletarPerfilEmpresaPageRoutingModule } from './completar-perfil-empresa-routing.module';

import { CompletarPerfilEmpresaPage } from './completar-perfil-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CompletarPerfilEmpresaPageRoutingModule
  ],
  declarations: [CompletarPerfilEmpresaPage]
})
export class CompletarPerfilEmpresaPageModule {}
