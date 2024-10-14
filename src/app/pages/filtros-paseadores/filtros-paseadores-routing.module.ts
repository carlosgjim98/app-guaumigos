import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiltrosPaseadoresPage } from './filtros-paseadores.page';

const routes: Routes = [
  {
    path: '',
    component: FiltrosPaseadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiltrosPaseadoresPageRoutingModule {}
