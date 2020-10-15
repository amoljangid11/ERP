import { Injectable }            from '@angular/core';
import { CanActivate, Router,}   from '@angular/router';
import {UserService } from '../user.service';


@Injectable()
export class NotAuthGuard implements CanActivate {
  constructor(
private userservice:UserService,
private router:Router
    ){}
  
  canActivate() {
    if(this.userservice.loggedIn()){
      this.router.navigate(['/login']);
      return false;
    }else{
      
      return true;
    }
    
  }
}
