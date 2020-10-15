import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {

constructor(private userservice:UserService,private restangular: Restangular) {
 this.gend=this
 }

gend
editRowId;
datas;
genders={gender:[{}]};
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
  var msg=this.gend
  var create= this.restangular.one('general');
  create.gender=[];
  create.gender.push(obj.gender[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('general').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.gender)})
    msg.savemsg('Added Succesfully','alert alert-info');
  })
  this.genders={gender:[{}]};

}

cancel(){
  this.genders={gender:[{}]};
}

update(gender){
  gender.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.genders={gender:[{}]};
}

edit(gen){
  this.updatebutton=true;
  this.genders=gen
}

view(work){
  // this.updates=true;
  this.genders=work

}

delete(gen,i){
  var delmsg=this.gend;
  gen.remove();
  this.datas.splice(i,1);
  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
}

ngOnInit() {
  let baseGender = this.restangular.all('general');
  baseGender.getList().subscribe(data => {
  this.datas = data.filter(res=>res.gender);
  console.log(this.datas)
  });

  }

}
