import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarGaleriaEmpresaPage } from './editar-galeria-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: EditarGaleriaEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarGaleriaEmpresaPageRoutingModule {}
