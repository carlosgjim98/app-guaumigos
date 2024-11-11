import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjustesEmpresaPage } from './ajustes-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: AjustesEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjustesEmpresaPageRoutingModule {}
