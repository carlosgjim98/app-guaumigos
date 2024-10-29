import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { IonicModule } from '@ionic/angular';

import { EditarPuntoDeInteresPageRoutingModule } from './editar-punto-de-interes-routing.module';

import { EditarPuntoDeInteresPage } from './editar-punto-de-interes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    EditarPuntoDeInteresPageRoutingModule
  ],
  declarations: [EditarPuntoDeInteresPage]
})
export class EditarPuntoDeInteresPageModule {}
