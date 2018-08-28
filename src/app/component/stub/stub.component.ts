import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-stub',
  template: '<h3 class="welcome"><i>{{welcome}}</i></h3>'
})
export class StubComponent implements OnInit {

  welcome: string;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.welcome = this.userService.isLoggedIn() ?
      'Welcome, ' + this.userService.userName : 'Please log in.';
  }
}
