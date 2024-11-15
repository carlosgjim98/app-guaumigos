import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoGananciasPaseadorPageRoutingModule } from './historico-ganancias-paseador-routing.module';

import { HistoricoGananciasPaseadorPage } from './historico-ganancias-paseador.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoGananciasPaseadorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HistoricoGananciasPaseadorPage]
})
export class HistoricoGananciasPaseadorPageModule {}
