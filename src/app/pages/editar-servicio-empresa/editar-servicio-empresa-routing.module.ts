import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarServicioEmpresaPage } from './editar-servicio-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: EditarServicioEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarServicioEmpresaPageRoutingModule {}
