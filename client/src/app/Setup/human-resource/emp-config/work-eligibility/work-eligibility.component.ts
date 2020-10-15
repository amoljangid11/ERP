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
  selector: 'app-work-eligibility',
  templateUrl: './work-eligibility.component.html',
  styleUrls: ['./work-eligibility.component.css']
})
export class WorkEligibilityComponent implements OnInit {

auth = [
    {value: '0', viewValue: 'Country'},
    {value: '1', viewValue: 'State'},
    {value: '2', viewValue: 'City'},

  ];

constructor(private userservice:UserService,private restangular: Restangular,private router:Router, private formBuilder: FormBuilder) { 

this.work=this
  }

form: FormGroup;
work;
eligibility={workeligibility:[{}]};
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


save(eligibility){
  var msg=this.work;
  var create= this.restangular.one('employeeconfiguration');
  create.workeligibility=[];
  create.workeligibility.push(eligibility.workeligibility[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('employeeconfiguration').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.workeligibility)})
    
      msg.savemsg('Added Succesfully','alert alert-info');
  })
this.eligibility={workeligibility:[{}]};
}

cancel(){
  this.eligibility={workeligibility:[{}]};
  this.ngOnInit();
}

edit(work){
  this.updates=true;
  this.eligibility=work

}

view(work){
  // this.updates=true;
  this.eligibility=work

}
update(config){
  config.save().toPromise().then(function(resp) {
  console.log(resp)
 })
 this.eligibility={workeligibility:[{}]};
}

delete(work,i){
  if(confirm('Are you want to delete???')){
  var delmsg=this.work
  work.remove().toPromise().then(function(resp,err) {
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
    
    let baseLang = this.restangular.all('employeeconfiguration');
    baseLang.getList().subscribe(data => {
    this.datas = data.filter(res=>res.workeligibility);
    console.log(this.datas)
    });

      //form submit validation
      this.form = this.formBuilder.group({
        doc: [null, Validators.required],
        auth: [null, Validators.required],
        desc: [null, Validators],
      });
  }

}
