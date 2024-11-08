import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleValoracionPaseadorPage } from './detalle-valoracion-paseador.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleValoracionPaseadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleValoracionPaseadorPageRoutingModule {}
