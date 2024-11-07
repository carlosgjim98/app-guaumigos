import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompletarPerfilPageRoutingModule } from './completar-perfil-routing.module';

import { CompletarPerfilPage } from './completar-perfil.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompletarPerfilPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CompletarPerfilPage]
})
export class CompletarPerfilPageModule {}
