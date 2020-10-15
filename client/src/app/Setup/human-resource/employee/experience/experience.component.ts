import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {EmployeeComponent } from '../employee.component';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../../user.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Md2Dialog } from 'md2';


@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

constructor(private router:Router,private restangular:Restangular,public service:UserService,private formBuilder: FormBuilder) {
this.service=service; }
settings = {};
selectedItems = [];
loclist=[];
settings1 = {};
loclist1=[];
loclist2=[];
settings2= {};


form: FormGroup;
official={experience:[{}]};
i=0;
employee={experience:[{}]}
updatebutton = false;
experience={};
haveexp=false;
messageClass
message
edited=false;
dunit;
jobt;
positionsdata;

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
  let temp=false;
  if(undefined==create.experience)
  {
    create.experience=[]
    create.experience.push(employee.experience[0])
    create.save().toPromise().then(function(resp) {
    console.log(resp)
    temp=true;
  })
  this.employee={experience:[{}]};
  this.i=0;
  }
  else{
    create.experience.push(employee.experience[0])
    create.save().toPromise().then(function(resp) {
    console.log(resp)
    temp=true;
  })
  this.employee={experience:[{}]};
  this.i=0;
  }
    setTimeout(function() {
    console.log("one");
    if(temp)
    {
      this.savemsg('Added Succesfully','alert alert-info')
    }
    }.bind(this), 100);

}

edit(emp,datas,i) {
  this.updatebutton = true;
  this.employee= datas;
  this.i=i;
}
newarr=[];
newarr1=[];
jbtitle=[];
posi=[];

view(emp,datas,i) {
  this.newarr1=[];
  this.jbtitle=[];
  this.posi=[];

  this.employee= datas;
  this.i=i;
  console.log(this.employee)
  console.log(datas)
  // console.log(this.employee[i].experience[0].department)
  console.log(this.employee.experience[i])
  this.newarr=[this.employee.experience[i]]
  console.log(this.newarr)
  for(let q=0;q<this.newarr[0].department.length;q++)
  {
console.log(this.newarr[0].department[q].itemName)
this.newarr1.push(this.newarr[0].department[q].itemName)
console.log(this.newarr1)
// return this.newarr1;
  }

  for(let q=0;q<this.newarr[0].jobtitle.length;q++)
  {
console.log(this.newarr[0].jobtitle[q].itemName)
this.jbtitle.push(this.newarr[0].jobtitle[q].itemName)
console.log(this.jbtitle)
// return this.newarr1;
  }

  for(let q=0;q<this.newarr[0].position.length;q++)
  {
console.log(this.newarr[0].position[q].itemName)
this.posi.push(this.newarr[0].position[q].itemName)
console.log(this.posi)
// return this.newarr1;
  }


}


updateexperience(empexperience)
{
  empexperience.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.employee={experience:[{}]};
  this.i=0;
}

cancel(){
  this.employee={experience:[{}]};
  this.i=0;
    // this.ngOnInit();
}

  ngOnInit() {
  	
  	if(undefined!=this.service.editdata.experience)
    {
      this.official=this.service.editdata;
      this.haveexp=true;

    }

    let baseDepart= this.restangular.all('departments');
    baseDepart.getList().subscribe(data => {
    console.log(data)
    this.dunit =data.filter(res=>res.department);
    console.log(this.dunit)
    if(this.dunit.length!=0)
    {
      console.log(this.dunit)
      for(let p=0;p<this.dunit.length;p++)
      {
        console.log(this.dunit[p].department[0].departmentname)
        this.loclist.push({"id":p,"itemName":this.dunit[p].department[0].departmentname});
        // this.loclist.push(this.dunit[p].department[0].departmentname)
        console.log(this.loclist)
      }
    }
    else{
      this.loclist=[];
    }
    return this.dunit;
    });
    let baseJob = this.restangular.all('employeeconfiguration');
    baseJob.getList().subscribe(data => {
    this.jobt = data.filter(res=>res.jobtitle);
    console.log(this.jobt)
    if(this.jobt.length!=0)
    {
      console.log(this.jobt)
      for(let p=0;p<this.jobt.length;p++)
      {
        console.log(this.jobt[p].jobtitle[0].jobtitle)
        this.loclist2.push({"id":p,"itemName":this.jobt[p].jobtitle[0].jobtitle});
        // this.loclist.push(this.dunit[p].department[0].departmentname)
        console.log(this.loclist2)
      }
    }
    else{
      this.loclist2=[];
    }
    });
    let basePosition = this.restangular.all('employeeconfiguration');
    basePosition.getList().subscribe(data => {
    this.positionsdata = data.filter(res=>res.position);
    console.log(this.positionsdata)
    if(this.positionsdata.length!=0)
    {
      console.log(this.positionsdata)
      for(let p=0;p<this.positionsdata.length;p++)
      {
        console.log(this.positionsdata[p].position[0].position)
        this.loclist1.push({"id":p,"itemName":this.positionsdata[p].position[0].position});
        // this.loclist.push(this.dunit[p].department[0].departmentname)
        console.log(this.loclist1)
      }
    }
    else{
      this.loclist1=[];
    }
    });
    this.settings = {
      text: "Select Department",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass inputField"
    };
    this.settings1 = {
      text: "Select Designation",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass inputField"
    };
    this.settings2 = {
      text: "Select Job Title",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass inputField"
    };
     //form submit validation
  this.form = this.formBuilder.group({
    jobtitle:[null, Validators.required],
    client:[null, Validators.required],
    depart:[null, Validators.required],
    compname: [null, Validators.required],
    from: [null, Validators.required],
    ref1: [null, Validators.required],
    comp: [null, Validators.required],
    to: [null, Validators.required],
    ref: [null, Validators.required],
    des: [null, Validators.required],
    reason: [null, Validators.required],
    email: [null, Validators.required]},
    {validator: this.dateLessThan('from', 'to')});
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
    document.getElementById("EndDate")['value']=""

     return {
       dates: "To Date Should Be Greater Than From Date"
     };
   }
   return {};
  }
}

}


