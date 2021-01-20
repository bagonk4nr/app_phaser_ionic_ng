import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Lvl1Page } from './lvl1.page';

const routes: Routes = [
  {
    path: '',
    component: Lvl1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Lvl1PageRoutingModule {}
