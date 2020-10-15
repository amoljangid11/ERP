import { Component, OnInit } from '@angular/core';
import {UserService } from '../user.service';
import { Router} from '@angular/router'; 
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
private userservice: UserService,
private router:Router,
private flashMessagesServices:FlashMessagesService
  	) { }

  onLogoutClick(){
  	this.userservice.logout();
  	
  	this.flashMessagesServices.show('You are logged out', {cssClass: 'alert-info'});
  	this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
