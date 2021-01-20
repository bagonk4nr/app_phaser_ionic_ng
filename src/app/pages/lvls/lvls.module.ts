import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LvlsPageRoutingModule } from './lvls-routing.module';

import { LvlsPage } from './lvls.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LvlsPageRoutingModule
  ],
  declarations: [LvlsPage]
})
export class LvlsPageModule {}
