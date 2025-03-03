import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigurationPageRoutingModule } from './configuration-routing.module';

import { ConfigurationPage } from './configuration.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigurationPageRoutingModule,
    TranslateModule.forChild(),
  ],
  declarations: [ConfigurationPage]
})
export class ConfigurationPageModule {}
