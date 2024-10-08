import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoPaseadoresPageRoutingModule } from './listado-paseadores-routing.module';

import { ListadoPaseadoresPage } from './listado-paseadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoPaseadoresPageRoutingModule
  ],
  declarations: [ListadoPaseadoresPage]
})
export class ListadoPaseadoresPageModule {}
