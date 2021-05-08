import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AloeveraPage } from './aloevera.page';

const routes: Routes = [
  {
    path: '',
    component: AloeveraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AloeveraPageRoutingModule {}
