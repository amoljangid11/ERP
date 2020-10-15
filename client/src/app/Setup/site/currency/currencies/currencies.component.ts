import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';import {MdChipsModule} from '@angular/material';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../../user.service';
import { Md2Dialog } from 'md2';
@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {


constructor(private userservice:UserService,private restangular: Restangular,private formBuilder: FormBuilder,) {
 this.curren=this 
}

curren;
form: FormGroup;
currency={currencies:[{}]}
desc;
show;
datas;
editRowId;
updates=false;

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


save(obj)
{
  var msg=this.curren
  var create=this.restangular.one('general')
  create.currencies=[]
  create.currencies.push(obj.currencies[0]);
  console.log(create)
  create.save().toPromise().then(res=> {
  this.restangular.all('general').getList().subscribe(data=>{this.datas=data.filter(res=>res.currencies)})
   
   msg.savemsg('Added Succesfully','alert alert-info');
  });
  this.currency={currencies:[{}]}
}
  
delete(d,i)
{
  var delmsg=this.curren
  d.remove();
  this.datas.splice(i, 1);
  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
}
 
toggle(id)
{
  console.log(id)
  this.editRowId = id;
 }
 cancel(){
   this.currency={currencies:[{}]};
 }

edit(d)
{
this.updates=true;
  this.currency=d;
 }

view(work){
  // this.updates=true;
  this.currency=work
}
update(detail)
{
   detail.save().toPromise().then(function(resp) {
   console.log(resp)
   })
  this.currency={currencies:[{}]}

}




  ngOnInit() {

    var baseUnits= this.restangular.all('general',);
   baseUnits.getList().subscribe( data=>{
   this.datas=data.filter(res=>res.currencies);
     return this.datas;
    });
  }

}
