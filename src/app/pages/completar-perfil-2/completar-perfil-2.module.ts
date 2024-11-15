import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletarPerfil2PageRoutingModule } from './completar-perfil-2-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { CompletarPerfil2Page } from './completar-perfil-2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    CompletarPerfil2PageRoutingModule
  ],
  declarations: [CompletarPerfil2Page]
})
export class CompletarPerfil2PageModule {}
