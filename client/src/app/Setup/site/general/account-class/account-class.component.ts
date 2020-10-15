import { Component, OnInit } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-account-class',
  templateUrl: './account-class.component.html',
  styleUrls: ['./account-class.component.css']
})
export class AccountClassComponent implements OnInit {



constructor(private userservice:UserService,private restangular: Restangular) {
 this.aclass=this
}

aclass;
account={acc_classtype:[{}]};
updatebutton=false;
editRowId;
allAccounts; 

messageClass
message
edited=false;
deleted=false;
 

open(dialog: Md2Dialog) {
  dialog.open();
  }
  
  close(dialog: any) {
  dialog.close();
  }

 savemsg(msg,msgcls)
{

  this.edited=true;
  this.messageClass=msgcls;
  this.message=msg;
  setTimeout(function() {
  this.edited = false;
  console.log(this.edited);
  }.bind(this), 1500);
}

save(obj){
  var msg=this.aclass;
  var create=this.restangular.one('general')
  create.acc_classtype=[]
  create.acc_classtype.push(obj.acc_classtype[0]);
  create.save().toPromise().then(res=> {

  this.restangular.all('general').getList().subscribe(data=>{this.allAccounts=data.filter(res=>res.acc_classtype)})
    msg.savemsg('Added Succesfully','alert alert-info');
  });  
  this.account={acc_classtype:[{}]};
}  


toggle(id)
{
  this.editRowId = id;
 }

cancel(){
  this.account={acc_classtype:[{}]};  
}

edit(est){
  this.updatebutton=true;
  this.account=est
}

view(work){
  // this.updates=true;
  this.account=work

}

update(aclass)
{
  aclass.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.account={acc_classtype:[{}]};
}

delete(aclass,i){
 var delmsg=this.aclass
 aclass.remove();
 this.allAccounts.splice(i,1);
 delmsg.savemsg('Deleted Succesfully','alert alert-danger');
}


ngOnInit() {

  let baseAccount = this.restangular.all('general');
  baseAccount.getList().subscribe(data => {
  this.allAccounts = data.filter(res=>res.acc_classtype);
  });
  }

}
