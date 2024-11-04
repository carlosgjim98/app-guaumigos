import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EulaDesdeAjustesPageRoutingModule } from './eula-desde-ajustes-routing.module';

import { EulaDesdeAjustesPage } from './eula-desde-ajustes.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EulaDesdeAjustesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EulaDesdeAjustesPage]
})
export class EulaDesdeAjustesPageModule {}
