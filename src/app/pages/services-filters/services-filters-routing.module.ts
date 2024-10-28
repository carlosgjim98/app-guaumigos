import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesFiltersPage } from './services-filters.page';

const routes: Routes = [
  {
    path: '',
    component: ServicesFiltersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesFiltersPageRoutingModule {}
