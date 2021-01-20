import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Lvl1PageRoutingModule } from './lvl1-routing.module';

import { Lvl1Page } from './lvl1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Lvl1PageRoutingModule
  ],
  declarations: [Lvl1Page]
})
export class Lvl1PageModule {}
