import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSolicitudPaseoPage } from './modal-solicitud-paseo.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSolicitudPaseoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSolicitudPaseoPageRoutingModule {}
