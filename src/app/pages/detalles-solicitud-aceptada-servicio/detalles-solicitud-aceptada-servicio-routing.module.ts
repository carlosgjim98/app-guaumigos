import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallesSolicitudAceptadaServicioPage } from './detalles-solicitud-aceptada-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: DetallesSolicitudAceptadaServicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallesSolicitudAceptadaServicioPageRoutingModule {}
