import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CondicionesDeVentaDesdeAjustesPageRoutingModule } from './condiciones-de-venta-desde-ajustes-routing.module';

import { CondicionesDeVentaDesdeAjustesPage } from './condiciones-de-venta-desde-ajustes.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CondicionesDeVentaDesdeAjustesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CondicionesDeVentaDesdeAjustesPage]
})
export class CondicionesDeVentaDesdeAjustesPageModule {}
