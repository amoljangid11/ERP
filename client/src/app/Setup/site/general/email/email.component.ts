import { Component, OnInit } from '@angular/core';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {



constructor(private userservice:UserService,private restangular: Restangular) {
 this.email=this
}
 
email
contact={emailcontacts:[{}]};
datas;
bunit;
show=false; updatebutton=false;

messageClass
message
edited=false;
deleted=false;

grp = [
  {value: 'Requisition-HR Group'},
  {value: 'Leave Management'},
  {value: 'Performance Appraisal'},
  {value: 'Background Check-HR Group'},
  {value: 'Requisition-Management Group'},
  {value: 'Background Check- Management Group'}
];

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
  var msg=this.email;
  var create= this.restangular.one('general');
  create.emailcontacts=[];
  create.emailcontacts.push(obj.emailcontacts[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('general').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.emailcontacts)})
    msg.savemsg('Added Succesfully','alert alert-info');
  })
  this.contact={emailcontacts:[{}]};
}

cancel(){
  this.contact={emailcontacts:[{}]};
}

update(email){
  email.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.contact={emailcontacts:[{}]};
}

edit(mail){
  this.updatebutton=true;
  this.contact=mail
}

view(work){
  // this.updates=true;
  this.contact=work
}

delete(mail,i){
  var delmsg=this.email;
  mail.remove();
  this.datas.splice(i,1);
  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
}

  ngOnInit() {
    let baseContact = this.restangular.all('general');
    baseContact.getList().subscribe(data => {
    this.datas = data.filter(res=>res.emailcontacts);
    console.log(this.datas)
    });

    let baseBusiness = this.restangular.all('organizations');
    baseBusiness.getList().subscribe(data => {
    this.bunit =data.filter(res=>res.businessunits);
    console.log(this.bunit)
    return this.bunit;   
    });

  }

}
