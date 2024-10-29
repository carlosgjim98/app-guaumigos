import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiltroPuntoDeInteresPage } from './filtro-punto-de-interes.page';

const routes: Routes = [
  {
    path: '',
    component: FiltroPuntoDeInteresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiltroPuntoDeInteresPageRoutingModule {}
