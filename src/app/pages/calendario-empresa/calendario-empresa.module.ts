import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalendarioEmpresaPageRoutingModule } from './calendario-empresa-routing.module';

import { CalendarioEmpresaPage } from './calendario-empresa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarioEmpresaPageRoutingModule
  ],
  declarations: [CalendarioEmpresaPage]
})
export class CalendarioEmpresaPageModule {}
