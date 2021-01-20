import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainstartPage } from './mainstart.page';

const routes: Routes = [
  {
    path: '',
    component: MainstartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainstartPageRoutingModule {}
