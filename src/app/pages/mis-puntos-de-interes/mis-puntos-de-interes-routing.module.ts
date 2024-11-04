import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisPuntosDeInteresPage } from './mis-puntos-de-interes.page';

const routes: Routes = [
  {
    path: '',
    component: MisPuntosDeInteresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisPuntosDeInteresPageRoutingModule {}
