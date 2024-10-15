import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetallePaseoPage } from './detalle-paseo.page';

const routes: Routes = [
  {
    path: '',
    component: DetallePaseoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetallePaseoPageRoutingModule {}
