import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RgpdDesdeAjustesPageRoutingModule } from './rgpd-desde-ajustes-routing.module';

import { RgpdDesdeAjustesPage } from './rgpd-desde-ajustes.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RgpdDesdeAjustesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RgpdDesdeAjustesPage]
})
export class RgpdDesdeAjustesPageModule {}
