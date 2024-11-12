import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleServicioEmpresaPage } from './detalle-servicio-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleServicioEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleServicioEmpresaPageRoutingModule {}
