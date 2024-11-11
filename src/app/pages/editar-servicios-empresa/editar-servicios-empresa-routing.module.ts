import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarServiciosEmpresaPage } from './editar-servicios-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: EditarServiciosEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarServiciosEmpresaPageRoutingModule {}
