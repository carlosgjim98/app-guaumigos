import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteIniciarPaseoPage } from './cliente-iniciar-paseo.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteIniciarPaseoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteIniciarPaseoPageRoutingModule {}
