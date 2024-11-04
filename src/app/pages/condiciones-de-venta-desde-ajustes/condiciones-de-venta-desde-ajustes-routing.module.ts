import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CondicionesDeVentaDesdeAjustesPage } from './condiciones-de-venta-desde-ajustes.page';

const routes: Routes = [
  {
    path: '',
    component: CondicionesDeVentaDesdeAjustesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CondicionesDeVentaDesdeAjustesPageRoutingModule {}
