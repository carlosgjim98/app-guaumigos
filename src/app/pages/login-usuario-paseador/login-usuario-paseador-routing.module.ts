import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginUsuarioPaseadorPage } from './login-usuario-paseador.page';

const routes: Routes = [
  {
    path: '',
    component: LoginUsuarioPaseadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginUsuarioPaseadorPageRoutingModule {}
