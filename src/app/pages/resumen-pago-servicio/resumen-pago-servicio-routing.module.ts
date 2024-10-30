import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumenPagoServicioPage } from './resumen-pago-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: ResumenPagoServicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumenPagoServicioPageRoutingModule {}
