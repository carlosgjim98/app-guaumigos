import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilEmpresaGaleriaPage } from './perfil-empresa-galeria.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilEmpresaGaleriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilEmpresaGaleriaPageRoutingModule {}
