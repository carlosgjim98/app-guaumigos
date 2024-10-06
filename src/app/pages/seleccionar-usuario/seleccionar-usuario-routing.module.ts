import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionarUsuarioPage } from './seleccionar-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionarUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionarUsuarioPageRoutingModule {}
