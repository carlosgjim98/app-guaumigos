import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisServiciosReservadosPage } from './mis-servicios-reservados.page';

const routes: Routes = [
  {
    path: '',
    component: MisServiciosReservadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisServiciosReservadosPageRoutingModule {}
