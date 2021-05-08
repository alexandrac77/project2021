import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login: any = {username:'', password:''};
  constructor() { }

  userLogin() {
    console.log('username:', this.login.username );
    console.log('password', this.login.password );
  }

  guestLogin() {
    this.login.username = 'guest';
    this.login.password = 'succulents';
  }

  ngOnInit() {
  }

}
