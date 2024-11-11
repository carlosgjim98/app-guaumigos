import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnadirPaseoPage } from './anadir-paseo.page';

const routes: Routes = [
  {
    path: '',
    component: AnadirPaseoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnadirPaseoPageRoutingModule {}
