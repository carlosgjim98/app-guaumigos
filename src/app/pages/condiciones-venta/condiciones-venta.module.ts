import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CondicionesVentaPageRoutingModule } from './condiciones-venta-routing.module';

import { CondicionesVentaPage } from './condiciones-venta.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CondicionesVentaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CondicionesVentaPage]
})
export class CondicionesVentaPageModule {}
