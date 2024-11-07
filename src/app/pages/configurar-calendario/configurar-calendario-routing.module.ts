import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigurarCalendarioPage } from './configurar-calendario.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigurarCalendarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurarCalendarioPageRoutingModule {}
