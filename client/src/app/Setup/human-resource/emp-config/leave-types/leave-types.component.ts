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
  selector: 'app-leave-types',
  templateUrl: './leave-types.component.html',
  styleUrls: ['./leave-types.component.css']
})
export class LeaveTypesComponent implements OnInit {

 deductible = [
    {value: '0', viewValue: 'Yes', selected:'true'},
    {value: '1', viewValue: 'No'}
    
  ];
  preallocated= [
    {value: '0', viewValue: 'Yes', selected:'true'},
    {value: '1', viewValue: 'No'}
    
  ];

constructor(private userservice:UserService,private restangular: Restangular,private router:Router, private formBuilder: FormBuilder) {
  this.type=this
 }
form: FormGroup;
type;
leaves={leavetype:[{}]};
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


save(leaves){
  var msg=this.type
  var create= this.restangular.one('employeeconfiguration');
  create.leavetype=[];
  create.leavetype.push(leaves.leavetype[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('employeeconfiguration').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.leavetype)})

    msg.savemsg('Added Succesfully','alert alert-info');
    })
  this. leaves={leavetype:[{}]};
}

cancel(){
  this. leaves={leavetype:[{}]};
  this.ngOnInit();
}

edit(leave){
	this.updates=true;
	this.leaves=leave

}

view(leave){
	// this.updates=true;
	this.leaves=leave

}
update(config){
  config.save().toPromise().then(function(resp) {
  console.log(resp)
  })
this. leaves={leavetype:[{}]};
}

delete(leave,i){
  if(confirm('Are you want to delete???')){
  var delmsg=this.type;
  leave.remove().toPromise().then(function(resp,err) {
  console.log(resp)
  })
  this.datas.splice(i,1);

  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
}else{
  this.cancel();
}
  }


ngOnInit() {
    
  	let baseLeave = this.restangular.all('employeeconfiguration');
    baseLeave.getList().subscribe(data => {
    this.datas = data.filter(res=>res.leavetype);
    console.log(this.datas)
    });

    
      //form submit validation
      this.form = this.formBuilder.group({
        leave: [null, Validators.required],
        day: [null, Validators.required],
        allow: [null, Validators.required],
        desc: [null, Validators],
        deduct: [null, Validators.required],
        code: [null, Validators],
      });
  }

}
