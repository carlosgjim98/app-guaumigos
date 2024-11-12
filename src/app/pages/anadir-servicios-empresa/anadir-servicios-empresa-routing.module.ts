import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnadirServiciosEmpresaPage } from './anadir-servicios-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: AnadirServiciosEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnadirServiciosEmpresaPageRoutingModule {}
