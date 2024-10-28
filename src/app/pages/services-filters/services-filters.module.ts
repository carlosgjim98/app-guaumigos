import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicesFiltersPageRoutingModule } from './services-filters-routing.module';

import { ServicesFiltersPage } from './services-filters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicesFiltersPageRoutingModule
  ],
  declarations: [ServicesFiltersPage]
})
export class ServicesFiltersPageModule {}
