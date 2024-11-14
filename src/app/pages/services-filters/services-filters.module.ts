import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicesFiltersPageRoutingModule } from './services-filters-routing.module';

import { ServicesFiltersPage } from './services-filters.page';
import { ComponentsModule } from 'src/app/components/components.module';
// import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicesFiltersPageRoutingModule,
    ComponentsModule,
    ReactiveFormsModule,
    // FullCalendarModule
  ],
  declarations: [ServicesFiltersPage]
})
export class ServicesFiltersPageModule {}
