import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarGaleriaPage } from './editar-galeria.page';

const routes: Routes = [
  {
    path: '',
    component: EditarGaleriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarGaleriaPageRoutingModule {}
