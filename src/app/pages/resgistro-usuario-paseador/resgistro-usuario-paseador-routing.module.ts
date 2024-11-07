import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResgistroUsuarioPaseadorPage } from './resgistro-usuario-paseador.page';

const routes: Routes = [
  {
    path: '',
    component: ResgistroUsuarioPaseadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResgistroUsuarioPaseadorPageRoutingModule {}
