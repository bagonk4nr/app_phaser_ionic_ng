
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  // {
  //   path: '',
  //   redirectTo: 'lvls',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'mainstart',
  //   loadChildren: () => import('./pages/mainstart/mainstart.module').then( m => m.MainstartPageModule)
  // },
  // {
  //   path: 'lvl1',
  //   loadChildren: () => import('./pages/lvl1/lvl1.module').then( m => m.Lvl1PageModule),
  //   // pathMatch: 'full'
  // },
  // {
  //   path: '',
  //   loadChildren: () => import('./pages/lvls/lvls.module').then( m => m.LvlsPageModule),
  //   // pathMatch: 'full'
  // },
  // {
  //   path: 'loading',
  //   loadChildren: () => import('./pages/loading/loading.module').then( m => m.LoadingPageModule)
  // },
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule),
    pathMatch: 'full'
  },
  // {
  //   path: 'settings',
  //   loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  // },
  // {
  //   path: 'loser',
  //   loadChildren: () => import('./pages/loser/loser.module').then( m => m.LoserPageModule)
  // },
  // {
  //   path: 'win',
  //   loadChildren: () => import('./pages/win/win.module').then( m => m.WinPageModule)
  // },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
