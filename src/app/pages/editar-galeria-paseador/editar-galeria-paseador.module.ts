import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarGaleriaPaseadorPageRoutingModule } from './editar-galeria-paseador-routing.module';

import { EditarGaleriaPaseadorPage } from './editar-galeria-paseador.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarGaleriaPaseadorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EditarGaleriaPaseadorPage]
})
export class EditarGaleriaPaseadorPageModule {}
