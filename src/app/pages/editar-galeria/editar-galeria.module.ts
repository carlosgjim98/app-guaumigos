import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarGaleriaPageRoutingModule } from './editar-galeria-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { EditarGaleriaPage } from './editar-galeria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarGaleriaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditarGaleriaPage]
})
export class EditarGaleriaPageModule {}
