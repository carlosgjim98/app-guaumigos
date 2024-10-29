import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuntoDeInteresPublicadoClientePage } from './punto-de-interes-publicado-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: PuntoDeInteresPublicadoClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuntoDeInteresPublicadoClientePageRoutingModule {}
