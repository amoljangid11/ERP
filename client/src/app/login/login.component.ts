import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {UserService } from '../user.service';
import {MdInputModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthGuard } from '../guards/auth.guard';
import { RestangularModule, Restangular} from 'ngx-restangular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

username:String;
password:String;
utype:String;
previousUrl;
messageClass;
message;
data;
user;
usertype=[{name:'employee'},{name:'Admin'}];
setval=false;
  constructor(private restangular:Restangular,private router:Router, private userservice:UserService, private flashmessage: FlashMessagesService, private authGuard:AuthGuard ) { }

  today: number = Date.now();

  // currentYear:Date;
  currentYear: number = new Date().getFullYear();
  // new Date("YYYY");

onLoginSubmit(){
const user={
  username:this.username,
  password:this.password,
  utype:this.utype
}
 console.log(user)
 this.data.post(user).toPromise().then(data=>{
       console.log(data)

      var  het= data.token;
      console.log(het)
    if(het){  
    this.messageClass='alert alert-success';
    this.message="Login Success";
    this.setval=true;
    this.userservice.storeUserData(data.token,data.user);
    setTimeout(() => {
      this.setval=false;
      if(this.previousUrl){
        this.router.navigate([this.previousUrl]);
      }
       // if(this.utype=="employee"){
      //   this.router.navigate(['./setuproot',{outlets:{secondchild:['human-resource'], thirdchild:['employee']}}])
      //   this.router.navigate(['./setuproot',{outlets:{secondchild:['dashboard']}}])
      // }
      else if(user.utype=="Associate Test Engineer" || user.utype=="Test Engineer" || user.utype=="Test Lead" || user.utype=="Senior Test Engineer" || user.utype=="Associate Quality Lead" || user.utype=="Quality Lead" || user.utype=="Senior Quality Lead" || user.utype=="Agency User")
      {
       //  this.router.navigate(['./wizard',{outlets:{frstchild:['module']}}]);
       //  this.router.navigate(['./setuproot',{outlets:{secondchild:['dashboard']}}]);
       this.router.navigate(['./setuproot',{outlets:{secondchild:['human-resource'], thirdchild:['employee']}}])
      }
      else{
        if(user.utype=="Admin" || user.utype=="Executive Director" || user.utype=="HR"){
         this.router.navigate(['./wizard',{outlets:{frstchild:['module']}}]);
        }
      }
    },2000)
  
  }
  else{
    this.messageClass='alert alert-danger';
    this.message=data.msg;
    this.setval=true;
    setTimeout(() => {this.setval=false;},3000);
  }

this.username=""
this.password=""
this.utype=""
 })

}

forgetpwd(email)
{
console.log(email)
var base=this.restangular.all('/forgetuser')

base.post({email:email}).toPromise().then(res=>{
console.log(res)
email="";
if(res.succes){
this.messageClass='alert alert-Success';
this.message=res.msg;
this.setval=true;
setTimeout(() => {this.setval=false;},3000);
}else{

this.messageClass='alert alert-danger';
this.message=res.msg;
this.setval=true;
setTimeout(() => {this.setval=false;},3000);
}
})
}
  ngOnInit() {

this.data=this.restangular.all('/login')
return this.data;
  }
}

