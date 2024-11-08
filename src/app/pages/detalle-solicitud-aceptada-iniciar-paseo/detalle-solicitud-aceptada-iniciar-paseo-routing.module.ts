import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleSolicitudAceptadaIniciarPaseoPage } from './detalle-solicitud-aceptada-iniciar-paseo.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleSolicitudAceptadaIniciarPaseoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleSolicitudAceptadaIniciarPaseoPageRoutingModule {}
