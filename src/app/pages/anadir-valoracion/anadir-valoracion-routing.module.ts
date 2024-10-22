import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnadirValoracionPage } from './anadir-valoracion.page';

const routes: Routes = [
  {
    path: '',
    component: AnadirValoracionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnadirValoracionPageRoutingModule {}
