import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioEmpresaPage } from './calendario-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarioEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioEmpresaPageRoutingModule {}
