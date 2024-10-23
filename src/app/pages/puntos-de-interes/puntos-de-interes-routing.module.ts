import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuntosDeInteresPage } from './puntos-de-interes.page';

const routes: Routes = [
  {
    path: '',
    component: PuntosDeInteresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuntosDeInteresPageRoutingModule {}
