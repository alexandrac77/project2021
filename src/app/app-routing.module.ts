import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'aloevera',
    loadChildren: () => import('./aloevera/aloevera.module').then( m => m.AloeveraPageModule)
  },
  {
    path: 'cactus',
    loadChildren: () => import('./cactus/cactus.module').then( m => m.CactusPageModule)
  },
  {
    path: 'jade',
    loadChildren: () => import('./jade/jade.module').then( m => m.JadePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
