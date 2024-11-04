import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisPuntosDeInteresDetallePage } from './mis-puntos-de-interes-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: MisPuntosDeInteresDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisPuntosDeInteresDetallePageRoutingModule {}
