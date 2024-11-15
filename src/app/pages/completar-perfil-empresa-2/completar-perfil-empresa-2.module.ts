import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletarPerfilEmpresa2PageRoutingModule } from './completar-perfil-empresa-2-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { CompletarPerfilEmpresa2Page } from './completar-perfil-empresa-2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule ,
    CompletarPerfilEmpresa2PageRoutingModule
  ],
  declarations: [CompletarPerfilEmpresa2Page]
})
export class CompletarPerfilEmpresa2PageModule {}
