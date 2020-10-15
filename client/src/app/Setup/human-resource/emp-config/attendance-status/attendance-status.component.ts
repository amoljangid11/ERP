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
  selector: 'app-attendance-status',
  templateUrl: './attendance-status.component.html',
  styleUrls: ['./attendance-status.component.css']
})
export class AttendanceStatusComponent implements OnInit {


constructor(private userservice:UserService,private restangular: Restangular,private router:Router, private formBuilder: FormBuilder) {
  this.att_status=this
}
form: FormGroup;
att_status;
attendance={attendancestatus:[{}]};
datas;
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


save(attendance){
  var msg=this.att_status;
  var create= this.restangular.one('employeeconfiguration');
  create.attendancestatus=[];
  create.attendancestatus.push(attendance.attendancestatus[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('employeeconfiguration').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.attendancestatus)})

  msg.savemsg('Added Succesfully','alert alert-info');

  })
    
  this.attendance={attendancestatus:[{}]};
}

cancel(){
  this.attendance={attendancestatus:[{}]};
  this.ngOnInit();
}

edit(astatus){
	this.updates=true;
	this.attendance=astatus

}

view(astatus){
	// this.updates=true;
	this.attendance=astatus

}

update(config){
   config.save().toPromise().then(function(resp) {
   console.log(resp)
 })
this.attendance={attendancestatus:[{}]};

}

delete(astatus,i){
  if(confirm('Are you want to delete???')){
  var delmsg=this.att_status;
  astatus.remove();
  this.datas.splice(i,1);
  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
  }
  else{
    this.cancel();
  }
}


  ngOnInit() {

  	let baseAttendance = this.restangular.all('employeeconfiguration');
    baseAttendance.getList().subscribe(data => {
    this.datas = data.filter(res=>res.attendancestatus);
    console.log(this.datas)
    });

      //form submit validation
      this.form = this.formBuilder.group({
        status: [null, Validators.required],
        desc: [null, Validators],
      });
  }

}
