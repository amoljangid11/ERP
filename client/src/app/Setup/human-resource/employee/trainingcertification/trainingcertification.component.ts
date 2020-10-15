import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {EmployeeComponent } from '../employee.component';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../../user.service';
import { Md2Dialog } from 'md2';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-trainingcertification',
  templateUrl: './trainingcertification.component.html',
  styleUrls: ['./trainingcertification.component.css']
})
export class TrainingcertificationComponent implements OnInit {

open(dialog: Md2Dialog) {
dialog.open();
}

close(dialog: any) {
dialog.close();
}

constructor(private router:Router,private restangular:Restangular,public service:UserService,private formBuilder: FormBuilder) {
  this.service=service;
  this.certificate=this
}
form: FormGroup;
certificate
official={training:[{}]};
i=0;
havetraining=false;
employee={training:[{}]}
updatebutton = false;
training={};
messageClass
message
edited=false;

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

save(employee) {
  var create =this.service.editdata;
  var msg=this.certificate
  if(undefined==create.training)
  {
    create.training=[]
    create.training.push(employee.training[0])
    create.save().toPromise().then(function(resp) {
    console.log(resp)

    msg.savemsg('Added Succesfully','alert alert-info');
    })
    this.employee={training:[{}]};
    this.i=0;
  }
  else{
    create.training.push(employee.training[0])
    create.save().toPromise().then(function(resp) {
    console.log(resp)

    msg.savemsg('Added Succesfully','alert alert-info');
    })
    this.employee={training:[{}]};
    this.i=0;
  }
 
}

edit(emp,dataedit,i)
 {
  this.updatebutton = true;
  this.employee=  dataedit;
  this.i=i;
}
view(emp,dataedit,i)
 {
  this.employee=  dataedit;
  this.i=i;
}

updatetraining(emptraining)
{
  emptraining.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.employee={training:[{}]};
  this.i=0;
}

cancel(){
  this.employee={training:[{}]};
  this.ngOnInit();
}


ngOnInit() {

  if(undefined!=this.service.editdata.training)
  {
    this.official=this.service.editdata;
    this.havetraining=true;
  }

  //form submit validation
  this.form = this.formBuilder.group({
    coursename: [null, Validators.required],
    desc: [null, Validators],
    courselevel: [null, Validators.required],
    cname: [null, Validators],
    offer: [null, Validators.required],
    date: [null, Validators],
    expdate:[null, Validators]
  });
}
}