import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesChatPageRoutingModule } from './mensajes-chat-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { MensajesChatPage } from './mensajes-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesChatPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MensajesChatPage]
})
export class MensajesChatPageModule {}
