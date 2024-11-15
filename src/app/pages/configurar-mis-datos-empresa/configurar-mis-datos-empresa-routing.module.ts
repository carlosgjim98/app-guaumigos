import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigurarMisDatosEmpresaPage } from './configurar-mis-datos-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigurarMisDatosEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurarMisDatosEmpresaPageRoutingModule {}
