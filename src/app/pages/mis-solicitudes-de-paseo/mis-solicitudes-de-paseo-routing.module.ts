import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisSolicitudesDePaseoPage } from './mis-solicitudes-de-paseo.page';

const routes: Routes = [
  {
    path: '',
    component: MisSolicitudesDePaseoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisSolicitudesDePaseoPageRoutingModule {}
