import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CactusPage } from './cactus.page';

const routes: Routes = [
  {
    path: '',
    component: CactusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CactusPageRoutingModule {}
