import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicModule } from '@ionic/angular';

import { MensajeChatEmpresaPageRoutingModule } from './mensaje-chat-empresa-routing.module';

import { MensajeChatEmpresaPage } from './mensaje-chat-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    MensajeChatEmpresaPageRoutingModule
  ],
  declarations: [MensajeChatEmpresaPage]
})
export class MensajeChatEmpresaPageModule {}
