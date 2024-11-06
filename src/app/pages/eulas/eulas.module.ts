import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EulasPageRoutingModule } from './eulas-routing.module';

import { EulasPage } from './eulas.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EulasPageRoutingModule,
    ComponentsModule
  ],
  declarations: [EulasPage]
})
export class EulasPageModule {}
