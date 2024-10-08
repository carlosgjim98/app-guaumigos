import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoPaseadoresPage } from './listado-paseadores.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoPaseadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoPaseadoresPageRoutingModule {}
