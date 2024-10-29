import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapaPuntoDeInteresPage } from './mapa-punto-de-interes.page';

const routes: Routes = [
  {
    path: '',
    component: MapaPuntoDeInteresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapaPuntoDeInteresPageRoutingModule {}
