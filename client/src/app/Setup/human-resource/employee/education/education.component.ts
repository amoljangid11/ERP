import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {EmployeeComponent } from '../employee.component';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../../user.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {



open(dialog: Md2Dialog) {
  dialog.open();
}
 
close(dialog: any) {
  dialog.close();
}

constructor(private router:Router,private restangular:Restangular,public service:UserService,private formBuilder: FormBuilder) { 
this.service=service;
this.educate=this;
}
form: FormGroup;
educate

educ;
educat;
official={education:[{}]};
i=0;
k=0;
j=0;
employee={education:[{}]}
updatebutton = false;
education={};
edu=false;
allcourse;

educationss=false;
show1=false;
show=false;
showadd=false;


messageClass
message
edited=false;

edulevel1=[];
edulevel2=[];
course1=[];
course2=[];

selectedItems = [];
settings = {};
settings1 ={};

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
  var msg=this.educate
  var create =this.service.editdata;
  let temp=this.educate;
  console.log(employee)
  if(undefined==create.education)
  {
    create.education=[]
    create.education.push(employee.education[0])
    create.save().toPromise().then(function(resp) {
    console.log(resp)
    msg.savemsg('Added Succesfully','alert alert-info');
    })
    this.employee={education:[{}]};
    this.i=0;
  }
  else{
    create.education.push(employee.education[0])
    create.save().toPromise().then(function(resp) {
    console.log(resp)
    msg.savemsg('Added Succesfully','alert alert-info');
    })
    this.employee={education:[{}]};
    this.i=0;
    }
    this.showadd=false;
    this.show=true;
    this.show1=false;
    this.educationss=false;
  }
  addshow()
  {
    this.showadd=true;
    this.show=false;
    this.show1=false;
    this.educationss=false;
    this.updatebutton=false;
    
  }

edit(emp,datas,i) {
  this.educationss=false
  this.show1=false;
  this.show=false;
  this.showadd=true;

  console.log(emp)
  this.updatebutton = true;
  this.employee=  datas;
  console.log(this.employee)
  this.i=i;
  console.log(this.i);
}

// view(emp,datas,i) {
//   this.educationss=true;
//   console.log(emp)
//   this.employee=  datas;
//   console.log(this.employee)
//   this.i=i;
//   console.log(this.i);
// }

view(datas,i)
{
  this.showadd=false;
  this.show=false;
  this.show1=true;
  this.educationss=true;
  this.educationss=true;
  this.employee=datas;
  this.i=i;
}

updateeducation(empeducation)
{
  this.showadd=false;
  this.show=true;
  this.show1=false;
  this.educationss=false;
  empeducation.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.employee={education:[{}]};
  this.i=0;
}

cancel(){
  this.showadd=false;
  this.show=true;
  this.show1=false;
  this.educationss=false;

  // this.employee={education:[{}]};
  // this.ngOnInit();
}

// can(){
//   this.showadd=false;
//   this.show=true;
//   this.show1=false;
//   this.educationss=false;

//   this.employee={education:[{}]};
//   this.ngOnInit();
// }

fetch(a1)
{
  this.course1=[];
  console.log(a1);
  for(let i=0;i<a1.length;i++)
  {
    console.log(a1[i].itemName);
    for(let j=0;j<this.educat.length;j++)
    {
      if(a1[i].itemName==this.educat[j].educationlevel[0].educationlevel)
      {
        console.log("same");
        for(let k=0;k<this.educat[j].educationlevel[0].course.length;k++)
        {
          console.log("k");
          this.course1.push({"id":this.course1.length,"itemName":this.educat[j].educationlevel[0].course[k].itemName});
          console.log(this.course1);
        }
      }
    }
  }
   console.log(this.course1)
  //  console.log(this.course1.length)
   this.course2=[];
   var count=0; 
   var start=false;

  for(let m=0;m<this.course1.length;m++)
  {
    for(let n=0;n<this.course2.length;n++)
    {
      if(this.course1[m].itemName==this.course2[n].itemName)
      {
        console.log("same")
        start=true;
      }
    }
    count++;
    if(count==1 && start==false)
    {
      console.log("not same")
      this.course2.push(this.course1[m]); 
      console.log(this.course2)
   } 
   start = false; 
   count = 0; 
  }

}

ngOnInit() {

  this.show=true;
  this.showadd=false;
  this.show1=false;
  this.educationss=false;
  
 if(undefined!=this.service.editdata.education)
  {
    this.official=this.service.editdata;
    this.edu=true;
  }

  let baseEducation = this.restangular.all('employeeconfiguration');
  baseEducation.getList().subscribe(data => {
  this.educat = data.filter(res=>res.educationlevel);
  console.log(this.educat)
  for(let i=0;i<this.educat.length;i++)
  {
    this.edulevel1.push({"id":i,"itemName":this.educat[i].educationlevel[0].educationlevel});
    // console.log(this.itemlist);
  }
  // console.log(this.itemlist);
  var count=0; 
  var start=false;
  // console.log(this.edulevel1.length)
  for(let i=0;i<this.edulevel1.length;i++)
  {
    for(let j=0;j<this.edulevel2.length;j++)
    {
      if(this.edulevel1[i].itemName==this.edulevel2[j].itemName)
      {
        console.log("same")
        start=true;
      }
    }
    count++;
    if(count==1 && start==false)
    {
      console.log("not same")
      this.edulevel2.push(this.edulevel1[i]); 
      console.log(this.edulevel2)
   } 
   start = false; 
   count = 0; 
  }
   return this.educat;
  });

  let basecourse = this.restangular.all('employeeconfiguration');
  basecourse.getList().subscribe(data => {
  this.allcourse = data.filter(res=>res.courses);
  console.log(this.allcourse)
  });

    //form submit validation
    this.form = this.formBuilder.group({
      edu: [null, Validators.required],
      from: [null, Validators.required],
      inst: [null, Validators],
      to: [null, Validators.required],
      course: [null, Validators.required],
      percentage: [null, Validators.required],
      university: [null, Validators.required]},
      
      {validator: this.dateLessThan('from', 'to')});

      this.settings = {
        text: "Select Education Level",
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        classes: "myclass inputField"
      };

      this.settings1 = {
        text: "Select Courses",
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        classes: "myclass inputField"
      };
    
      }
    
      onItemSelect(item: any) {
        console.log(item);
        console.log(this.selectedItems);
        }
        OnItemDeSelect(item: any) {
        console.log(item);
        console.log(this.selectedItems);
        }
        onSelectAll(items: any) {
        console.log(items);
        }
        onDeSelectAll(items: any) {
        console.log(items);
        }
    
  
    dateLessThan(from1: string, to1: string) {
      return (group: FormGroup): {[key: string]: any} => {
       let f = group.controls[from1];
       let t = group.controls[to1];
       if (f.value > t.value) {
        // alert("End date should be greater than Start date");
        document.getElementById("EndDate")['value']=""
  
         return {
           dates: "Date from should be less than Date to"
         };
       }
      }
    }
  }
  




