import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarPaseoPage } from './editar-paseo.page';

const routes: Routes = [
  {
    path: '',
    component: EditarPaseoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarPaseoPageRoutingModule {}
