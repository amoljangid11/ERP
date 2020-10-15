import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {EmployeeComponent } from '../employee.component';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../../user.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-dependency',
  templateUrl: './dependency.component.html',
  styleUrls: ['./dependency.component.css']
})
export class DependencyComponent implements OnInit {
  birthdate: number;


constructor(private router:Router,private restangular:Restangular,public service:UserService,private formBuilder: FormBuilder) {
this.service=service;  }

form: FormGroup;
havedep=false;
dependent={dependency:[{}]};
i=0;
employee={dependency:[{}]}
updatebutton = false;
dependency={};
 currentDate = new Date();
 dependencyage;
 age: any;



rel = [
    { viewValue: 'Brother'},
    { viewValue: 'Child'},
    { viewValue: 'Ex-Spouse'},
    { viewValue: 'Mother'},
    { viewValue: 'Father'},
    { viewValue: 'Grand Daughter'},
    { viewValue: 'Grand Father'},
    { viewValue: 'Grand Mother'},
    { viewValue: 'Grand Son'},       
    { viewValue: 'Wife'},
    { viewValue: 'Sister'},
    { viewValue: 'Spouse'}
  ];

  custody = [
    { viewValue: 'Both Parents'},
    { viewValue: 'Former Spouse'},
    { viewValue: 'Subscriber Only'},
    { viewValue: 'Other Or Unknown'}
];

messageClass
message
edited=false;

first=false;second=false;third=false;four=false;btn1=false;btn2=false;btn3=false;btn4=false;btn5=false;


viewd(data) 
{

  this.service.viewdependency(data);
}

per1;per2;per3;per4;per5;sum=0;
add(data,employee)
{
 if('one'==data)
 {
   console.log(employee);
   console.log(employee.dependency[0].dependency_per);
   this.per1=employee.dependency[0].dependency_per;
   this.sum=this.per1;
   console.log(this.sum);
   if(this.sum>100)
   {
     alert("Nominee Percentage should not above 100%")
   }
   else{
   this.first=true;
   this.btn1=false;
   this.btn2=true;
  }
 }
}
hide1()
{
  this.first=false;
  this.btn1=true;
}
add2(data,employee)
{
 if('two'==data)
 {
  console.log(employee);
  console.log(employee.dependency[0].nomineeper);
  this.per2=employee.dependency[0].nomineeper;
  this.sum=parseInt(this.per1)+parseInt(this.per2);
  console.log(this.sum);
  if(this.sum>100)
  {
    alert("Nominee Percentage should not above 100%")
  }
  else{
   this.first=true;
   this.second=true;
   this.btn2=false;
   this.btn3=true;
 }
}
}
hide2()
{
  this.second=false;
  this.btn2=true;
}
add3(data,employee)
{
 if('three'==data)
 {
  console.log(employee);
  console.log(employee.dependency[0].nominee1per);
  this.per3=employee.dependency[0].nominee1per;
  this.sum=parseInt(this.per1)+parseInt(this.per2)+parseInt(this.per3);
  console.log(this.sum);
  if(this.sum>100)
  {
    alert("Nominee Percentage should not above 100%")
  }
  else{
  this.first=true;
  this.second=true;
   this.third=true;
   this.btn3=false;
   this.btn4=true;
 }
}
}
hide3()
{
  this.third=false;
  this.btn3=true;
}
add4(data,employee)
{
 if('four'==data)
 {
  console.log(employee);
  console.log(employee.dependency[0].nominee2per);
  this.per4=employee.dependency[0].nominee2per;
  this.sum=parseInt(this.per1)+parseInt(this.per2)+parseInt(this.per3)+parseInt(this.per4);
  if(this.sum>100)
  {
    alert("Nominee Percentage should not above 100%")
  }
  else{
  this.first=true;
  this.second=true;
   this.third=true;
   this.four=true;
   this.btn5=true;
   this.btn4=false;
  }
 }
}
hide4()
{
  this.four=false;
  this.btn4=true;
}
add5(data,employee)
{
  console.log(employee);
  console.log(employee.dependency[0].nominee3per);
  this.per5=employee.dependency[0].nominee3per;
 if('five'==data)
 {
   alert("You have add Maximum no of Nominee.")
 }
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

open(dialog: Md2Dialog) {
  dialog.open();
}

close(dialog: any) {
  dialog.close();
}

hideshowbutton(data) 
{

  this.service.showaddbutton(data);
}

save(employee) {
  this.per5=employee.dependency[0].nominee3per;
  this.sum=parseInt(this.per1)+parseInt(this.per2)+parseInt(this.per3)+parseInt(this.per4)+parseInt(this.per5);
  if(this.sum>100)
  {
    alert("Nominee Percentage should not above 100%")
  }
  else{
  employee.dependency[0].dependency_age = this.age;
  var create =this.service.editdata;
  let temp=false;
  if(undefined==create.dependency)
  {
    create.dependency=[]
    create.dependency.push(employee.dependency[0]);
    if(this.btn1)
    {
      create.dependency[0].age=this.age;
    }
    else if(this.btn2)
    {
      create.dependency[0].age=this.age;
      create.dependency[0].age1=this.age1;
    }
    else if(this.btn3)
    {
      create.dependency[0].age=this.age;
      create.dependency[0].age1=this.age1;
      create.dependency[0].age2=this.age2;
    }
    else if(this.btn4)
    {
      create.dependency[0].age=this.age;
      create.dependency[0].age1=this.age1;
      create.dependency[0].age2=this.age2;
      create.dependency[0].age3=this.age3;
    }
    else if(this.btn5)
    {
      create.dependency[0].age=this.age;
      create.dependency[0].age1=this.age1;
      create.dependency[0].age2=this.age2;
      create.dependency[0].age3=this.age3;
      create.dependency[0].age4=this.age4;
    }
    create.save().toPromise().then(function(resp) {
    console.log(resp)
    temp=true;
    })
    this.employee={dependency:[{}]};
    this.i=0;
  }
  else{
    create.dependency.push(employee.dependency[0])
    if(this.btn1)
    {
      create.dependency[0].age=this.age;
    }
    else if(this.btn2)
    {
      create.dependency[0].age=this.age;
      create.dependency[0].age1=this.age1;
    }
    else if(this.btn3)
    {
      create.dependency[0].age=this.age;
      create.dependency[0].age1=this.age1;
      create.dependency[0].age2=this.age2;
    }
    else if(this.btn4)
    {
      create.dependency[0].age=this.age;
      create.dependency[0].age1=this.age1;
      create.dependency[0].age2=this.age2;
      create.dependency[0].age3=this.age3;
    }
    else if(this.btn5)
    {
      create.dependency[0].age=this.age;
      create.dependency[0].age1=this.age1;
      create.dependency[0].age2=this.age2;
      create.dependency[0].age3=this.age3;
      create.dependency[0].age4=this.age4;
    }
    create.save().toPromise().then(function(resp) {
    console.log(resp)
    temp=true;
    })
    this.employee={dependency:[{}]};
    this.i=0;
  }
  setTimeout(function() {
    console.log("one");
    if(temp)
    {
      this.savemsg('Added Succesfully','alert alert-info')
    }
    }.bind(this), 100);
    this.ngOnInit();
}
}

cancel(){
  this.employee={dependency:[{}]};
  // this.ngOnInit();
}

edit(emp,datas,i) {
  this.updatebutton = true;
  this.employee=  datas
  this.i=i;
}


view(emp,datas,i) {
  
  this.employee=  datas
  this.i=i;
}


updatedependency(empdepend)
{
  empdepend.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.employee={dependency:[{}]};
  this.i=0;
}


today;age1;age2;age3;age4;
getAge = function(birthday){
   birthday = new Date(birthday);
   this.today = new Date();
  this. age = ((this.today - birthday) / (31557600000));
  this. age = Math.floor( this.age );
  return this.age;
}

getAge1 = function(birthday){
  birthday = new Date(birthday);
  this.today = new Date();
 this.age1 = ((this.today - birthday) / (31557600000));
 this.age1 = Math.floor( this.age1 );
 return this.age1;
}

getAge2 = function(birthday){
  birthday = new Date(birthday);
  this.today = new Date();
 this.age2 = ((this.today - birthday) / (31557600000));
 this.age2 = Math.floor( this.age2 );
 return this.age2;
}

getAge3 = function(birthday){
  birthday = new Date(birthday);
  this.today = new Date();
 this.age3 = ((this.today - birthday) / (31557600000));
 this.age3 = Math.floor( this.age3 );
 return this.age3;
}

getAge4 = function(birthday){
  birthday = new Date(birthday);
  this.today = new Date();
 this.age4 = ((this.today - birthday) / (31557600000));
 this.age4 = Math.floor( this.age4 );
 return this.age4;
}
  ngOnInit() {
    this.btn1=true;
  if(undefined!=this.service.editdata.dependency)
    {
      this.dependent=this.service.editdata;
      this.havedep=true;
    }

       //form submit validation
       this.form = this.formBuilder.group({
        dname: [null, Validators.required],
        relation: [null, Validators.required],
        dob: [null, Validators.required],
        age: [null, Validators],
        dper:[null,Validators],

        ndname: [null, Validators],
        nrelation: [null, Validators],
        ndob: [null, Validators],
        nage: [null, Validators],
        per:[null,Validators],

        dname1: [null, Validators],
        relation1: [null, Validators],
        dob1: [null, Validators],
        age1: [null, Validators],
        per1:[null,Validators],

        dname2: [null, Validators],
        relation2: [null, Validators],
        dob2: [null, Validators],
        age2: [null, Validators],
        per2:[null,Validators],

        dname3: [null, Validators],
        relation3: [null, Validators],
        dob3: [null, Validators],
        age3: [null, Validators],
        per3:[null,Validators],
      });
  } 

}
