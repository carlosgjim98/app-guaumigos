import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalendarioPaseadorPage } from './calendario-paseador.page';

const routes: Routes = [
  {
    path: '',
    component: CalendarioPaseadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalendarioPaseadorPageRoutingModule {}
