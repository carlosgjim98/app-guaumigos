import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoPuntoDeInteresPage } from './nuevo-punto-de-interes.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoPuntoDeInteresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoPuntoDeInteresPageRoutingModule {}
