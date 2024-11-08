import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarServiciosPaseosPage } from './editar-servicios-paseos.page';

const routes: Routes = [
  {
    path: '',
    component: EditarServiciosPaseosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarServiciosPaseosPageRoutingModule {}
