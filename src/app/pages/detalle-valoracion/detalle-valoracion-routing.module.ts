import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleValoracionPage } from './detalle-valoracion.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleValoracionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleValoracionPageRoutingModule {}
