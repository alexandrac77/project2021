import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CactusPageRoutingModule } from './cactus-routing.module';

import { CactusPage } from './cactus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CactusPageRoutingModule
  ],
  declarations: [CactusPage]
})
export class CactusPageModule {}
