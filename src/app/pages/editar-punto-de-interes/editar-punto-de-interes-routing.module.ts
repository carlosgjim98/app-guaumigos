import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarPuntoDeInteresPage } from './editar-punto-de-interes.page';

const routes: Routes = [
  {
    path: '',
    component: EditarPuntoDeInteresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarPuntoDeInteresPageRoutingModule {}
