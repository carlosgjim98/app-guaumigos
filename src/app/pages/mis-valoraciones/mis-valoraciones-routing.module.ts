import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisValoracionesPage } from './mis-valoraciones.page';

const routes: Routes = [
  {
    path: '',
    component: MisValoracionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisValoracionesPageRoutingModule {}
