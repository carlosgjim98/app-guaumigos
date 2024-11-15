import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigurarMisDatosPaseadorPage } from './configurar-mis-datos-paseador.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigurarMisDatosPaseadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurarMisDatosPaseadorPageRoutingModule {}
