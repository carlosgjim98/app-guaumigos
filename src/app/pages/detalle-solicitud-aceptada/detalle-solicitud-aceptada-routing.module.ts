import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleSolicitudAceptadaPage } from './detalle-solicitud-aceptada.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleSolicitudAceptadaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleSolicitudAceptadaPageRoutingModule {}
