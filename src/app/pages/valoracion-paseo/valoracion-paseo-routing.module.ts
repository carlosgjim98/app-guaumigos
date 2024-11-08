import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValoracionPaseoPage } from './valoracion-paseo.page';

const routes: Routes = [
  {
    path: '',
    component: ValoracionPaseoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValoracionPaseoPageRoutingModule {}
