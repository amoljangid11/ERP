import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import {UserService } from '../../../../user.service';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-nationality-context',
  templateUrl: './nationality-context.component.html',
  styleUrls: ['./nationality-context.component.css']
})
export class NationalityContextComponent implements OnInit {

constructor(private userservice:UserService,private restangular: Restangular) {
 this.nationality=this
 }

nationality;
contextcodes={context_codes:[{}]}
updatebutton=false;
datas;
editRowId;

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
  var msg=this.nationality
  var create=this.restangular.one('general')
  create.context_codes=[]
  create.context_codes.push(obj.context_codes[0]);
  create.save().toPromise().then(res=> {
  this.restangular.all('general').getList().subscribe(data=>{this.datas=data.filter(res=>res.context_codes)})
  
  msg.savemsg('Added Succesfully','alert alert-info');
  });
  this.contextcodes={context_codes:[{}]};
}

cancel(){
  this.contextcodes={context_codes:[{}]};  
}

edit(est){
  this.updatebutton=true;
  this.contextcodes=est

}
view(work){
  // this.updates=true;
  this.contextcodes=work

}
update(context)
{
  context.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.contextcodes={context_codes:[{}]};
};

delete(ncode,i){
  var delmsg=this.nationality
  ncode.remove();
  this.datas.splice(i,1);
  delmsg.savemsg('Deleted Successfully','alert alert-danger');
};

 

ngOnInit() {

  let baseUnit = this.restangular.all('general');
  baseUnit.getList().subscribe(data => {
  this.datas = data.filter(res=>res.context_codes);

  return  this.datas;
  });

 }
}