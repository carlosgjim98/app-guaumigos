import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeguimientoDePaseosPage } from './seguimiento-de-paseos.page';

const routes: Routes = [
  {
    path: '',
    component: SeguimientoDePaseosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguimientoDePaseosPageRoutingModule {}
