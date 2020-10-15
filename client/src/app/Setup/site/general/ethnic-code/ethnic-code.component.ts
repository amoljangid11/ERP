import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MdChipsModule} from '@angular/material';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-ethnic-code',
  templateUrl: './ethnic-code.component.html',
  styleUrls: ['./ethnic-code.component.css']
})
export class EthnicCodeComponent implements OnInit {

  constructor(private userservice:UserService,private restangular: Restangular) {
  this.ethniccode=this
  }

ethniccode;
editRowId;
datas=[]
basegeneral;
code={ethnic:[{}]};
show=false;
updatebutton=false;

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
  var msg=this.ethniccode
  var create=this.restangular.one('general')
  create.ethnic=[];
  create.ethnic.push(obj.ethnic[0])
  console.log(create)
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('general').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.ethnic);})
     msg.savemsg('Added Succesfully','alert alert-info');
  })
  this.code={ethnic:[{}]};
}

cancel(){
  this.code={ethnic:[{}]};
}

edit(ecode){
  this.updatebutton=true;
  this.code=ecode

}
view(work){
  // this.updates=true;
  this.code=work

}
update(ethnics)
{
  ethnics.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.code={ethnic:[{}]};
}


delete(ecode,i){
  var delmsg=this.ethniccode
  ecode.remove();
  this.datas.splice(i,1);
  delmsg.savemsg('Deleted Succesfully','alert alert-danger');

}
  

ngOnInit() {
   
  this.basegeneral= this.restangular.all('general');
  this.basegeneral.getList().subscribe(data => {

  this.datas=data.filter(res=>res.ethnic);
  console.log(this.datas)
  });
  
  }
}
