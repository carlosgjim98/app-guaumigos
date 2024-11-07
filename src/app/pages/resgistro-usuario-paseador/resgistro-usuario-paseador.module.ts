import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResgistroUsuarioPaseadorPageRoutingModule } from './resgistro-usuario-paseador-routing.module';

import { ResgistroUsuarioPaseadorPage } from './resgistro-usuario-paseador.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    ResgistroUsuarioPaseadorPageRoutingModule,
    TranslateModule.forChild()
  ],
  declarations: [ResgistroUsuarioPaseadorPage]
})
export class ResgistroUsuarioPaseadorPageModule {}
