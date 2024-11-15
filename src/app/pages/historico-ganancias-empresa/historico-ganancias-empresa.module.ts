import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoricoGananciasEmpresaPageRoutingModule } from './historico-ganancias-empresa-routing.module';

import { HistoricoGananciasEmpresaPage } from './historico-ganancias-empresa.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoricoGananciasEmpresaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HistoricoGananciasEmpresaPage]
})
export class HistoricoGananciasEmpresaPageModule {}
