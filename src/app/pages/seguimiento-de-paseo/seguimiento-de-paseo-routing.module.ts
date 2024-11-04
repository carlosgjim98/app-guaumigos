import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeguimientoDePaseoPage } from './seguimiento-de-paseo.page';

const routes: Routes = [
  {
    path: '',
    component: SeguimientoDePaseoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguimientoDePaseoPageRoutingModule {}
