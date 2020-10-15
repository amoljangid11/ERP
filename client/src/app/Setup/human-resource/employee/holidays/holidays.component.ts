import { Component, OnInit,Input } from '@angular/core';
import { Router} from '@angular/router';
import {EmployeeComponent } from '../employee.component';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../../user.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


import { Md2Dialog } from 'md2';


@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {
   @Input('selected')

groupname;


constructor(private router:Router,private restangular:Restangular,public service:UserService,private formBuilder: FormBuilder) { 


}
form: FormGroup;
form1: FormGroup;

i=0;

messageClass
message
added=false;
datas;
selectedData;
holidayss;
holidas=[];
holidayoptions=[];
holidays={manageholiday:[{}]};
holidaygroups={holidaygroup:[{}]};
employeedata;
employee={holiday:[{}]}
data1;
haveskill=false;
haveholiday={holiday:[{}]}


open(dialog: Md2Dialog) {
dialog.open();
}

close(dialog: any) {
dialog.close();
}

view(emp,i) {
  // this.updatebutton = true;
  console.log(emp);
  console.log(this.holidas);
  for(let i=0;i<this.holidas.length;i++)
  {
    if(this.holidas[i].manageholiday[0].holiday==emp.holiday)
    {
    this.holidays=this.holidas[i];
    console.log(this.holidays)
    this.i=i;
    }
  }

}

savemsg(msg,msgcls)
{

  this.added=true;
  this.messageClass=msgcls;
  this.message=msg;
  setTimeout(function() {
  this.added = false;
  console.log(this.added);
  }.bind(this), 1500);
}
// save(employee) {
//   var create =this.service.editdata;
//   var msg=this.skills
//   if(undefined==create.skill)
//   {
//     create.skill=[]
//     create.skill.push(employee.skill[0])
//     create.save().toPromise().then(function(resp) {
//     console.log(resp)
//     msg.savemsg('Added Succesfully','alert alert-info');
//     })
//     this.employee={skill:[{}]};
//     this.i=0;
//   }
//   else{
//     create.skill.push(employee.skill[0])
//     create.save().toPromise().then(function(resp) {
//     msg.savemsg('Added Succesfully','alert alert-info');
//     console.log(resp)
//     })
//     this.employee={skill:[{}]};
//     this.i=0;
//   }
 
// }
save(employee) {
  console.log(employee)
  var create =this.service.editdata;
  let temp=false;
  if(undefined==create.holiday)
  {
    console.log("if part")

      create.holiday=[]
      employee.holiday[0].location=this.officiald[0].official[0].location
      create.holiday.push(employee.holiday[0])
      create.save().toPromise().then(function(resp) {
      console.log(resp)
      // msg.savemsg('Added Succesfully','alert alert-info');
      })
      this.employee={holiday:[{}]};
      this.i=0;
  }
  else{
    console.log("else part")
    console.log(this.employee)
    employee.holiday[0].location=this.officiald[0].official[0].location
    create.holiday.push(employee.holiday[0])
    create.save().toPromise().then(function(resp) {
    // msg.savemsg('Added Succesfully','alert alert-info');
    console.log(resp)
    })
    this.employee={holiday:[{}]};
    this.i=0;

  }
       setTimeout(function() {
       console.log("one");
       if(temp)
       {
         this.savemsg('Added Succesfully','alert alert-info')
         console.log("success")
       }
      }.bind(this), 100);

  }


savegroup(obj){
  var create= this.restangular.one('management');
  create.holidaygroup=[];
  create.holidaygroup.push(obj.holidaygroup[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('management').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.holidaygroup)})
  console.log(this.datas)
  })
  this.holidaygroups={holidaygroup:[{}]};
}

select(data){
  console.log(data)
  var manage=[];
  manage=this.data1.filter(datas =>datas.manageholiday[0].groupname == data);
  console.log(manage)
  this.holidayoptions= manage
  console.log(this.holidayoptions)
}



getuser;
emp;
locationname;offemp;officiald
locwisearraypush=[];
holid=[];
fetch()
{
console.log(this.officiald[0].official[0].location)
console.log(this.data1);
console.log(this.data1.length);
for(let i=0;i<this.data1.length;i++)
{
  console.log(this.data1[i].manageholiday[0].locationname.length)
  for(let j=0;j<this.data1[i].manageholiday[0].locationname.length;j++)
  {
    if(this.data1[i].manageholiday[0].locationname[j].itemName==this.officiald[0].official[0].location)
    {
      this.locwisearraypush.push(this.data1[i])
      console.log(this.locwisearraypush);
    }
  }
}

for(let k=0;k<this.locwisearraypush.length;k++)
{
  console.log(this.locwisearraypush[k].manageholiday[0].holiday)
  this.holid.push({"holidayname":this.locwisearraypush[k].manageholiday[0].holiday,"location":this.officiald[0].official[0].location,"holidaydate":this.locwisearraypush[k].manageholiday[0].holidaydate,"description":this.locwisearraypush[k].manageholiday[0].description})
  console.log(this.holid)
}
}
  ngOnInit() {
    if(undefined!=this.service.editdata.holiday)
    {
      this.haveholiday=this.service.editdata;
      this.haveskill=true;
      for(let i=0;i<this.service.editdata.holiday.length;i++)
      {  
        this.restangular.all('management').getList().subscribe(data => {
        var holiday=data.filter(datas =>datas.manageholiday); 
        this.holidayss= holiday.filter(resp=>
        resp.manageholiday[0].locationname==this.service.editdata.holiday[i].location && resp.manageholiday[0].holiday==this.service.editdata.holiday[i].holidayname);  
        console.log(this.holidayss)
        this.holidayoptions.push(this.holidayss[0].manageholiday[0]);
        console.log(this.holidayoptions);
        this.holidas.push(this.holidayss[0])
        });
      } 
    }
  

    this.getuser=JSON.parse(localStorage.getItem('user'));
    console.log(this.getuser)

    var baseOfficial = this.restangular.all('createemployee');
    baseOfficial.getList({"_id":this.service.editdata._id}).subscribe(data => {
    console.log(data)
    this.officiald = data.filter(res=>res.official);
    console.log(this.officiald)
    console.log(this.officiald[0].official[0].location)
    return this.officiald;
    });

    var baseOff= this.restangular.all('createemployee');
    baseOff.getList().subscribe(datas=>{
    this.offemp =datas.filter(res=>res.official);
    console.log(this.offemp)
    // this.fetchmanager(this.employee);
 
    return this.offemp;
    });

  //  if(undefined!=this.service.editdata.holiday)
  //  {
  //    console.log(this.service.editdata.holiday)
  //    this.employeedata=this.service.editdata;
  //    this.employee.holiday[0]=this.service.editdata.holiday[0];
  //    this.groupname=this.service.editdata.holiday[0].group;
  //     
  //    
  //    })
     
  //   }


    let baseHoliday = this.restangular.all('management');
    baseHoliday.getList().subscribe(data => {
    this.data1 = data.filter(res=>res.manageholiday)
    console.log(this.data1)
    this.fetch();
    return this.data1;
   });

    let baseHolidaygroup = this.restangular.all('management');
    baseHolidaygroup.getList().subscribe(data => {
    this.datas = data.filter(res=>res.worklocation);
    console.log(this.datas)
    return this.datas;
    });
   
   
  this.form = this.formBuilder.group({
    grname1: [null, Validators.required],
    grname: [null, Validators.nullValidator]
      
  });


  this.form1 = this.formBuilder.group({
    groupname: [null, Validators.required],
    desc: [null, Validators]
      
  });
    

  }

}
