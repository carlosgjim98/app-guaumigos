import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnadirValoracionDesdeDetalleDeSolicitudPage } from './anadir-valoracion-desde-detalle-de-solicitud.page';

const routes: Routes = [
  {
    path: '',
    component: AnadirValoracionDesdeDetalleDeSolicitudPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnadirValoracionDesdeDetalleDeSolicitudPageRoutingModule {}
