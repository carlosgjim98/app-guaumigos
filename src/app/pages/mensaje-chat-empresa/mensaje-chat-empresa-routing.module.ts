import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajeChatEmpresaPage } from './mensaje-chat-empresa.page';

const routes: Routes = [
  {
    path: '',
    component: MensajeChatEmpresaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajeChatEmpresaPageRoutingModule {}
