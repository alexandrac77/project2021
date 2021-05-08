import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AloeveraPageRoutingModule } from './aloevera-routing.module';

import { AloeveraPage } from './aloevera.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AloeveraPageRoutingModule
  ],
  exports:[AloeveraPage], //
  declarations: [AloeveraPage]
})
export class AloeveraPageModule {}
