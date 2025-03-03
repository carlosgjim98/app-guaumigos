import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjustesPageRoutingModule } from './ajustes-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { AjustesPage } from './ajustes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ComponentsModule,
    IonicModule,
    AjustesPageRoutingModule
  ],
  declarations: [AjustesPage]
})
export class AjustesPageModule {}
