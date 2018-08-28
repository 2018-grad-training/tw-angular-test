import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userName = 'Lucy';

  constructor() { }

  isLoggedIn() {
    return false;
  }
}
