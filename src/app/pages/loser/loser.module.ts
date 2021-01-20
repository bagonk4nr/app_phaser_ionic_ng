import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoserPageRoutingModule } from './loser-routing.module';

import { LoserPage } from './loser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoserPageRoutingModule
  ],
  declarations: [LoserPage]
})
export class LoserPageModule {}
