import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPaseoPageRoutingModule } from './editar-paseo-routing.module';

import { EditarPaseoPage } from './editar-paseo.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPaseoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditarPaseoPage]
})
export class EditarPaseoPageModule {}
