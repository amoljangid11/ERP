import { Component, OnInit } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';

@Component({
  selector: 'app-account-class',
  templateUrl: './account-class.component.html',
  styleUrls: ['./account-class.component.css']
})
export class AccountClassComponent implements OnInit {

account={}
editRowId;

allAccounts; 
 


save(obj){
var create=this.restangular.one('general')
create.acc_classtype=[]
create.acc_classtype.push(obj);
create.save().toPromise().then(res=> {

this.restangular.all('general').getList().subscribe(data=>{this.allAccounts=data.filter(res=>res.acc_classtype)})
 });  
this.account={}
}  


toggle(id)
{
  this.editRowId = id;
 }

edit(id)
{
   this.editRowId=id;
 }

update(d)
{
   this.editRowId=false;
   console.log(d)

   d.save();

}
remove(li,i){
 li.remove().toPromise().then(res=>{
   console.log(res)
 });
 this.allAccounts.splice(i,1);


}


  constructor(private userservice:UserService,private restangular: Restangular) { }

  ngOnInit() {
  	// First way of creating a this.restangular object. Just saying the base URL
  	 let baseAccount = this.restangular.all('general');

    // This will query /accounts and return a observable.
     baseAccount.getList().subscribe(data => {
       this.allAccounts = data.filter(res=>res.acc_classtype);
       });

  }

}
