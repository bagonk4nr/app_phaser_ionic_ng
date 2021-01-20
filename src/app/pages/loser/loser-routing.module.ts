import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoserPage } from './loser.page';

const routes: Routes = [
  {
    path: '',
    component: LoserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoserPageRoutingModule {}
