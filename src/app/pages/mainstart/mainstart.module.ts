import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainstartPageRoutingModule } from './mainstart-routing.module';

import { MainstartPage } from './mainstart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainstartPageRoutingModule
  ],
  declarations: [MainstartPage]
})
export class MainstartPageModule {}
