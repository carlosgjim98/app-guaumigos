import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FacturasPaseadorPageRoutingModule } from './facturas-paseador-routing.module';

import { FacturasPaseadorPage } from './facturas-paseador.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FacturasPaseadorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FacturasPaseadorPage]
})
export class FacturasPaseadorPageModule {}
