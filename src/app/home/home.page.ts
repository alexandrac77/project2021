import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  moneyTree: string;
    
  constructor(private navCtrl: NavController, private storage: Storage) {}
   goToPage(){
     this.navCtrl.navigateForward(['cactus']);
   }

   ngOnInit(){
    this.storage.get("money")
    .then((data) => {
      this.moneyTree = data;

  })
  .catch ();
  }
  
}
