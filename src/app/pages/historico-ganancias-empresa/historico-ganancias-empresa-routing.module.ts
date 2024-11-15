import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoricoGananciasEmpresaPage } from './historico-ganancias-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: HistoricoGananciasEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoricoGananciasEmpresaPageRoutingModule {}
