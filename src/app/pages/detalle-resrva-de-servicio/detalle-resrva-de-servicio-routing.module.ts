import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleResrvaDeServicioPage } from './detalle-resrva-de-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleResrvaDeServicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleResrvaDeServicioPageRoutingModule {}
