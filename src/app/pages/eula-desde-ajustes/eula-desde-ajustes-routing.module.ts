import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EulaDesdeAjustesPage } from './eula-desde-ajustes.page';

const routes: Routes = [
  {
    path: '',
    component: EulaDesdeAjustesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EulaDesdeAjustesPageRoutingModule {}
