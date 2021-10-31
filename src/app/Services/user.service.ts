import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;

  constructor() { 
    // get the user details from the server
    this.user = {
      name: "Marie",
      email: "Marie@gmail.com",
      direction: "Carrer Gran de Sant Andreu, 241, 11, 08030, Barcelona",
      telephone: 666737272,
      urlImage:"https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    }
  }

  getUser() {
    return this.user;
  }
}
