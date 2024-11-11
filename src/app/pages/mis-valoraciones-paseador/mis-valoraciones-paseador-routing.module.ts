import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisValoracionesPaseadorPage } from './mis-valoraciones-paseador.page';

const routes: Routes = [
  {
    path: '',
    component: MisValoracionesPaseadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisValoracionesPaseadorPageRoutingModule {}
