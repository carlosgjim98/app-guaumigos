import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjustesPaseadorPage } from './ajustes-paseador.page';

const routes: Routes = [
  {
    path: '',
    component: AjustesPaseadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjustesPaseadorPageRoutingModule {}
