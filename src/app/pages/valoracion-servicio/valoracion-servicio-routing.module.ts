import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValoracionServicioPage } from './valoracion-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: ValoracionServicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValoracionServicioPageRoutingModule {}
