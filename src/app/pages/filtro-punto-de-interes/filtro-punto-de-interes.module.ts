import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltroPuntoDeInteresPageRoutingModule } from './filtro-punto-de-interes-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';
import { FiltroPuntoDeInteresPage } from './filtro-punto-de-interes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule ,
    FiltroPuntoDeInteresPageRoutingModule
  ],
  declarations: [FiltroPuntoDeInteresPage]
})
export class FiltroPuntoDeInteresPageModule {}
