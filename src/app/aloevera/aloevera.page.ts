import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-aloevera',
  templateUrl: './aloevera.page.html',
  styleUrls: ['./aloevera.page.scss'],
})
export class AloeveraPage implements OnInit {
  segment: string;
  
  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
  }

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

}
