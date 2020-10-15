import { Component, OnInit } from '@angular/core';
import {UserService } from '../user.service';
import { Router} from '@angular/router';
import { RestangularModule, Restangular} from 'ngx-restangular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
user:Object;

username;
email;


  constructor(private userservice: UserService, private router: Router,private restangular:Restangular) { }

  ngOnInit() {
   
    var token=localStorage.getItem('user');
    var jso=JSON.parse(token)    
    var base=this.restangular.all('user')
    base.getList({_id:jso.id}).subscribe(data=>{
     console.log(data)
      this.username =data[0].username;
       this.email = data[0].email;
   })
  
  }

}
