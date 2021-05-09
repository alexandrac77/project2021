import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-jade',
  templateUrl: './jade.page.html',
  styleUrls: ['./jade.page.scss'],
})
export class JadePage implements OnInit {
  moneyTree: string;
  constructor(private storage: Storage, private navCtrl: NavController)
 { }

  ngOnInit() {
    this.storage.get("money")
    .then((data) => {
      this.moneyTree = data;
    })
    .catch();
  }

  saveStatus() {
    console.log(this.moneyTree);
    this.storage.set("money", this.moneyTree)
    .then(()=>{
      this.navCtrl.navigateBack('/home');
    })
    .catch();
    }
    
    

}
