import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AjustesPaseadorPageRoutingModule } from './ajustes-paseador-routing.module';

import { AjustesPaseadorPage } from './ajustes-paseador.page';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjustesPaseadorPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AjustesPaseadorPage]
})
export class AjustesPaseadorPageModule {}
