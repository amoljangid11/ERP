import { Component } from '@angular/core';
import { Http } from '@angular/http';
import {UserService } from './user.service';
import{tokenNotExpired} from 'angular2-jwt';
import { Router} from '@angular/router';
import { FlashMessagesService}  from 'angular2-flash-messages';
import {MdToolbarModule,MdChipsModule,MdMenuModule,MdTooltipModule,MdSidenavModule,MdButtonToggleModule,MdButtonModule} from '@angular/material';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Restangular } from 'ngx-restangular';
// import { AmazingTimePickerModule } from 'amazing-time-picker';
// import { AmazingTimePickerService } from 'amazing-time-picker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent  {

value:any;
valuee:any;

username;
email;


  constructor(private userservice: UserService, private router: Router,private restangular:Restangular,private flashmessage: FlashMessagesService) { }


  // constructor(private router:Router, private userservice:UserService,private rest:Restangular, private flashmessage: FlashMessagesService) { }
 loggedIn(){
  // document.getElementById('drp').style.display="none";
  // this.ngOnInit();
  // this.ngOnDestroy();
  return tokenNotExpired();
}

logout(){
  this.userservice.logout();
  this.flashmessage.show('you are logged out', {cssClass:'aler alert-success', timeout:3000});
   this.router.navigate(['./login'])
   this.ngOnDestroy();
   this.ngOnInit();
  //  document.getElementById('drp').style.display="none";
   return false;
}
abc()
{
  this.ngOnInit();
}
wizard(){
	this.router.navigate(['./wizard',{outlets:{frstchild:['module']}}]);
this.valuee=!this.valuee;
document.getElementById('drp').style.display="none";
console.log("ssssssssssss "+this.value)
}
setup(){
   this.router.navigate(['./setuproot',{outlets:{secondchild:['dashboard']}}])
   this.value=!this.value;
   document.getElementById('drp').style.display="block";
}

ngOnDestroy()
{
  this.restangular.all('grid')
}

ngOnInit(){
  // if(this.loggedIn()){
  //   document.getElementById('drp').style.display="block";
  // }
 
  var token=localStorage.getItem('user');
  var jso=JSON.parse(token)    
  var base=this.restangular.all('user')
  base.getList({username:jso.username}).subscribe(data=>{
   console.log(data)
    this.username =data[0].username;
     this.email = data[0].email;
 })
}

}


