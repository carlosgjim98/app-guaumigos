import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FacturasPaseadorPage } from './facturas-paseador.page';

const routes: Routes = [
  {
    path: '',
    component: FacturasPaseadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FacturasPaseadorPageRoutingModule {}
