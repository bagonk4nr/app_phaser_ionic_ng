import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LvlsPage } from './lvls.page';

const routes: Routes = [
  {
    path: '',
    component: LvlsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LvlsPageRoutingModule {}
