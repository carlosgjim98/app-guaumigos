import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricoGananciasPaseadorPage } from './historico-ganancias-paseador.page';

const routes: Routes = [
  {
    path: '',
    component: HistoricoGananciasPaseadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricoGananciasPaseadorPageRoutingModule {}
