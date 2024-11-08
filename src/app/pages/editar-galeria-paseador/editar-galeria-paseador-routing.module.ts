import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarGaleriaPaseadorPage } from './editar-galeria-paseador.page';

const routes: Routes = [
  {
    path: '',
    component: EditarGaleriaPaseadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarGaleriaPaseadorPageRoutingModule {}
