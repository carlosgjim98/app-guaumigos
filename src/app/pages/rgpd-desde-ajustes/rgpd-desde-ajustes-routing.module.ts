import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RgpdDesdeAjustesPage } from './rgpd-desde-ajustes.page';

const routes: Routes = [
  {
    path: '',
    component: RgpdDesdeAjustesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RgpdDesdeAjustesPageRoutingModule {}
