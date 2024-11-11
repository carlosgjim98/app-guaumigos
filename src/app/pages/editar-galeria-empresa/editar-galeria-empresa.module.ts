import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarGaleriaEmpresaPageRoutingModule } from './editar-galeria-empresa-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { EditarGaleriaEmpresaPage } from './editar-galeria-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule ,
    EditarGaleriaEmpresaPageRoutingModule
  ],
  declarations: [EditarGaleriaEmpresaPage]
})
export class EditarGaleriaEmpresaPageModule {}
