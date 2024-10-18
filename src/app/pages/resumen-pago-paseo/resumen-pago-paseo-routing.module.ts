import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResumenPagoPaseoPage } from './resumen-pago-paseo.page';

const routes: Routes = [
  {
    path: '',
    component: ResumenPagoPaseoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResumenPagoPaseoPageRoutingModule {}
