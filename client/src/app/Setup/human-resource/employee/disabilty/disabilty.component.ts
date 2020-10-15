import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {EmployeeComponent } from '../employee.component';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../../user.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Md2Dialog } from 'md2';
import { select } from 'async';

@Component({
  selector: 'app-disabilty',
  templateUrl: './disabilty.component.html',
  styleUrls: ['./disabilty.component.css']
})
export class DisabiltyComponent implements OnInit {

  constructor(private router:Router,private restangular:Restangular,public service:UserService,private formBuilder: FormBuilder) {
    this.empdisability=this; 
}
empdisability;
other;
disability={};
employeedata;
others=false;
form: FormGroup;

employee = { disability: [{}] };
show=false;
messageClass
message
edited=false;

 datas = [
    
    { disabilityvalue: 'Blindness and Visual Impairments'},
    { disabilityvalue: 'Health Impairments'},
    { disabilityvalue: 'Hearing Impairments'},
    { disabilityvalue: 'Learning Disabilities'},
    { disabilityvalue: 'Mental illness or Emotional disturbances'},
    { disabilityvalue: 'Mobility or Orthopedic Impairments'},
    { disabilityvalue: 'Speech or Language Impairments'}
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

save(employee) {

  console.log(employee)
  var msg=this.empdisability;
  var create =this.service.editdata;
  let temp=false;
  if(undefined==create.disability)
  {
    create.disability=[];
    create.disability.push(employee.disability[0])
    create.save().toPromise().then(function(resp) {
    console.log(resp)
    msg.savemsg('Added Succesfully','alert alert-info');
    temp=true;
    })
  }else{
    console.log(employee.disability[0])
    if(employee.disability[0].disabilitytype!="Other")
    {
    employee.disability[0].other=""
    }
    this.employeedata.disability[0]=employee.disability[0]
    this.employeedata.save().toPromise().then(function(res) {
    console.log(res)
    msg.savemsg('Added Succesfully','alert alert-info');
    temp=true;
    })
  }
    setTimeout(function() {
    console.log("one");
    if(temp)
    {
      this.savemsg('Added Succesfully','alert alert-info')
    }
    }.bind(this), 100);
}


hideother(val)
{
  console.log(val)
  if(val=="Other"){
    console.log("other")
    this.show= true
  }else{
    console.log("in")
    this.show= false
  }
}

selectval(data,eve){
  console.log(data)
  console.log(eve)
}
viewdisability(data){

  this.service.editdisability(data);
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['disability']}}]}}])  

}

ngOnInit() {

if(undefined!=this.service.editdata.disability)
{
  console.log(this.service.editdata.disability)
  this.employeedata=this.service.editdata;
  this.employee.disability[0]=this.service.editdata.disability[0];
  if(this.service.editdata.disability[0].other)
  {
    this.show=true;
  }
  console.log(this.employee)
}
  //form submit validation
  this.form = this.formBuilder.group({
     disability: [null, Validators.required],
     name: [null, Validators],
     description: [null, Validators],
     other: [null, Validators],
     from:[null, Validators.required]
  });
  }

}
