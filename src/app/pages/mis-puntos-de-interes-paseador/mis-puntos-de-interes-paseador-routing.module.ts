import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisPuntosDeInteresPaseadorPage } from './mis-puntos-de-interes-paseador.page';

const routes: Routes = [
  {
    path: '',
    component: MisPuntosDeInteresPaseadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisPuntosDeInteresPaseadorPageRoutingModule {}
