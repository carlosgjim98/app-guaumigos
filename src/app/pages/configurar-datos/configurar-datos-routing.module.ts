import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigurarDatosPage } from './configurar-datos.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigurarDatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurarDatosPageRoutingModule {}
