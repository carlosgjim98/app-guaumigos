import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleSolicitudAceptadaPaseoFinalizadoAnadirValoracionPage } from './detalle-solicitud-aceptada-paseo-finalizado-anadir-valoracion.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleSolicitudAceptadaPaseoFinalizadoAnadirValoracionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleSolicitudAceptadaPaseoFinalizadoAnadirValoracionPageRoutingModule {}
