import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuntoDeInteresDetallePage } from './punto-de-interes-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDeInteresDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuntoDeInteresDetallePageRoutingModule {}
