import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    
  constructor(private navCtrl: NavController) {}
   goToPage(){
     this.navCtrl.navigateForward(['cactus']);
   }
  ngOnInit(){

  }
}

/*
 constructor(private router: Router) {}
   goToPage(){
     this.router.navigate(['cactus']);
   }
   */