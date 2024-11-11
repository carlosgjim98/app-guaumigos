import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatosServicioPage } from './datos-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: DatosServicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DatosServicioPageRoutingModule {}
