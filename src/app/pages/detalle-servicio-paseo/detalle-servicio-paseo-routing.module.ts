import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleServicioPaseoPage } from './detalle-servicio-paseo.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleServicioPaseoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleServicioPaseoPageRoutingModule {}
