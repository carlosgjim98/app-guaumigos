import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisValoracionesEmpresaPage } from './mis-valoraciones-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: MisValoracionesEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisValoracionesEmpresaPageRoutingModule {}
