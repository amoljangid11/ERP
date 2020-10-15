import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';
import { Router} from '@angular/router';
import { Md2Dialog } from 'md2';



@Component({
  selector: 'app-veteran-status',
  templateUrl: './veteran-status.component.html',
  styleUrls: ['./veteran-status.component.css']
})
export class VeteranStatusComponent implements OnInit {

constructor(private userservice:UserService,private restangular: Restangular,private router:Router, private formBuilder: FormBuilder) {
 this.status=this
 }
 form: FormGroup;
status;
veteran={veteranstatus:[{}]};
datas;
updates=false;

messageClass
message
deleted = false;
edited=false;

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


save(veteran){
  var msg=this.status
  var create= this.restangular.one('employeeconfiguration');
  create.veteranstatus=[];
  create.veteranstatus.push(veteran.veteranstatus[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('employeeconfiguration').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.veteranstatus)})
   
   msg.savemsg('Added Succesfully','alert alert-info'); 
})
this.veteran={veteranstatus:[{}]};
}

cancel(){
  this.veteran={veteranstatus:[{}]};
  this.ngOnInit();
}

edit(status){
	this.updates=true;
	this.veteran=status
}

view(dataall) {
  // this.updatebutton = true;
  this.veteran= dataall
//   this.i=i;
}

update(config){
  config.save().toPromise().then(function(resp) {
  console.log(resp)
 })
 this.veteran={veteranstatus:[{}]};
}

delete(status,i){
  if(confirm('Are you want to delete???')){
  var delmsg=this.status
  status.remove().toPromise().then(function(resp,err) {
  console.log(resp)
  })
  this.datas.splice(i,1);
  
  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
}
else{
  this.cancel();
}

}

  ngOnInit() {
  	let base = this.restangular.all('employeeconfiguration');
    base.getList().subscribe(data => {
    this.datas = data.filter(res=>res.veteranstatus);
    console.log(this.datas)
    });

      //form submit validation
      this.form = this.formBuilder.group({
        veteran: [null, Validators.required],
        desc: [null, Validators],
      });
  }

}
