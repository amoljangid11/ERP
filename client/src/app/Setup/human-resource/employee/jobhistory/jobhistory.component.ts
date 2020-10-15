import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {EmployeeComponent } from '../employee.component';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../../user.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Md2Dialog } from 'md2';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-jobhistory',
  templateUrl: './jobhistory.component.html',
  styleUrls: ['./jobhistory.component.css'],
  providers:[DatePipe]
})
export class JobhistoryComponent implements OnInit {
 

  constructor(private router:Router,private restangular:Restangular,public datepipe:DatePipe,public service:UserService,private formBuilder: FormBuilder)
   { this.history=this }

form: FormGroup;   
i=0;
history;
//form: FormGroup;
job={jobtitle:[{}]}
datas;
employee={jobhistory:[{}]}
editRowId=false;
jobhistory={};
updatebutton = false;
official;
havejob=false;
positionsdata;
domaindatas;
jobobj = {};
positions = {};
jobs;
pos;

jdatas;
client;
dunit;

messageClass
message
edited=false;


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

year;year1;year2;year3;year4;

diffMonths(data)
{
  console.log(data);
  var tdate=data.jobhistory[0].todate;
  var fdate=data.jobhistory[0].fromdate;
  console.log(tdate);
  console.log(fdate);
  console.log(Math.floor((tdate - fdate) / 30 / 24 / 3600 / 1000));
  var year = Math.floor((tdate - fdate) / 12 / 30 / 24 / 3600 / 1000);
  var mon = Math.floor((tdate - fdate) / 30 / 24 / 3600 / 1000);    // Find out No of months
  console.log(year);
  var yeartomonth = 12*year;
  var month = mon-yeartomonth;
  console.log(mon);
  console.log(yeartomonth);
  console.log(month);
  console.log(year+" Years "+month+" Months");
  return this.year=year+" Years "+month+" Months";
}

diffMonths1(data)
{
  var tdate=data.jobhistory[0].todate1;
  var fdate=data.jobhistory[0].fromdate1;
  console.log(tdate);
  console.log(fdate);
  console.log(Math.floor((tdate - fdate) / 30 / 24 / 3600 / 1000));
  var year = Math.floor((tdate - fdate) / 12 / 30 / 24 / 3600 / 1000);
  var mon = Math.floor((tdate - fdate) / 30 / 24 / 3600 / 1000);    // Find out No of months
  console.log(year);
  var yeartomonth = 12*year;
  var month = mon-yeartomonth;
  console.log(mon);
  console.log(yeartomonth);
  console.log(month);
  console.log(year+" Years "+month+" Months");
  return this.year1=year+" Years "+month+" Months";
}

diffMonths2(data)
{
  var tdate=data.jobhistory[0].todate2;
  var fdate=data.jobhistory[0].fromdate2;
  console.log(tdate);
  console.log(fdate);
  console.log(Math.floor((tdate - fdate) / 30 / 24 / 3600 / 1000));
  var year = Math.floor((tdate - fdate) / 12 / 30 / 24 / 3600 / 1000);
  var mon = Math.floor((tdate - fdate) / 30 / 24 / 3600 / 1000);    // Find out No of months
  console.log(year);
  var yeartomonth = 12*year;
  var month = mon-yeartomonth;
  console.log(mon);
  console.log(yeartomonth);
  console.log(month);
  console.log(year+" Years "+month+" Months");
  return this.year2=year+" Years "+month+" Months";
}

diffMonths3(data)
{
  var tdate=data.jobhistory[0].todate3;
  var fdate=data.jobhistory[0].fromdate3;
  console.log(tdate);
  console.log(fdate);
  console.log(Math.floor((tdate - fdate) / 30 / 24 / 3600 / 1000));
  var year = Math.floor((tdate - fdate) / 12 / 30 / 24 / 3600 / 1000);
  var mon = Math.floor((tdate - fdate) / 30 / 24 / 3600 / 1000);    // Find out No of months
  console.log(year);
  var yeartomonth = 12*year;
  var month = mon-yeartomonth;
  console.log(mon);
  console.log(yeartomonth);
  console.log(month);
  console.log(year+" Years "+month+" Months");
  return this.year3=year+" Years "+month+" Months";
}

diffMonths4(data)
{
  var tdate=data.jobhistory[0].todate4;
  var fdate=data.jobhistory[0].fromdate4;
  console.log(tdate);
  console.log(fdate);
  console.log(Math.floor((tdate - fdate) / 30 / 24 / 3600 / 1000));
  var year = Math.floor((tdate - fdate) / 12 / 30 / 24 / 3600 / 1000);
  var mon = Math.floor((tdate - fdate) / 30 / 24 / 3600 / 1000);    // Find out No of months
  console.log(year);
  var yeartomonth = 12*year;
  var month = mon-yeartomonth;
  console.log(mon);
  console.log(yeartomonth);
  console.log(month);
  console.log(year+" Years "+month+" Months");
  return this.year4=year+" Years "+month+" Months";
}

save(employee) {
  var create =this.service.editdata;
  let temp=false;
  // console.log(this.datepipe.transform(employee.jobhistory[0].fromdate ,'yyyy-MM-dd'));
  // console.log(this.datepipe.transform(employee.jobhistory[0].todate ,'yyyy-MM-dd'));
  var fromdate=employee.jobhistory[0].fromdate;
  var todate=employee.jobhistory[0].todate;
  console.log(fromdate);
  console.log(todate);
  create.jobhistory=[];
  create.jobhistory.push(employee.jobhistory[0])
  create.jobhistory[0].yearofexperience=this.year;
  create.jobhistory[0].yearofexperience1=this.year1;
  create.jobhistory[0].yearofexperience2=this.year2;
  create.jobhistory[0].yearofexperience3=this.year3;
  create.jobhistory[0].yearofexperience4=this.year4;
  if(undefined==create.jobhistory)
  {
    console.log(create.jobhistory[0].yearofexperience);
    create.save().toPromise().then(function(resp) {
    console.log(resp)
    temp=true;
    })
    this.click=false;
    this.employee={jobhistory:[{}]};
    this.ngOnInit();
    this.i=0;
  }
  else{
    create.save().toPromise().then(function(resp) {
    console.log(resp)
    temp=true;
    })
    this.click=false;
    this.employee={jobhistory:[{}]};
    this.ngOnInit();
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

  click=false;j=0;click1=false;click2=false;click3=false;click4=false
  btn1=true;btn2=false;btn3=false;btn4=false;btn5=false;dtreq=false;dtreq1=false;dtreq2=false;dtreq3=false;dtreq4=false;
  myFunction(data) {
    console.log(data);
    if(data=='one')
    {
      this.click=true;
      this.btn2=true;
      this.btn1=false;
      this.dtreq=true;
    }
    else if(data=='two')
    {this.click=true;
      this.click1=true;
      this.btn2=false;
      this.btn1=false;
      this.btn3=true;
      this.dtreq=true;
      this.dtreq1=true;
    }
    else if(data=='three')
    {this.click=true;
      this.click1=true;
      this.click2=true;
      this.btn3=false;
      this.btn4=true;
      this.dtreq=true;
      this.dtreq1=true;
      this.dtreq2=true;
    }
    else if(data=='four')
    {this.click=true;
      this.click1=true;
      this.click2=true;
      this.click3=true;
      this.btn4=false;
      this.btn5=true;
      this.dtreq=true;
      this.dtreq1=true;
      this.dtreq2=true;
      this.dtreq3=true;
    }
  }

  setdata=false;setdata1=false;setdata2=false;setdata3=false;

  canceldiv(data)
  {
    if(data=='two')
    {
      console.log(data);
      this.btn1=true;
      this.btn2=false;
      this.click=false;
      this.dtreq=false;
      this.setdata=true;
      console.log(this.dtreq);
    }
    if(data=='three')
    {
      console.log(data);
      this.btn2=true;
      this.btn3=false;
      this.click1=false;
      this.dtreq1=false;
      this.setdata1=true;
      console.log(this.dtreq1);
    }
    if(data=='four')
    {
      console.log(data);
      this.btn3=true;
      this.btn4=false;
      this.click2=false;
      this.dtreq2=false;
      this.setdata2=true;
      console.log(this.dtreq2);
    }
    if(data=='five')
    {
      console.log(data);
      this.btn4=true;
      this.btn5=false;
      this.click3=false;
      this.dtreq3=false;
      this.setdata3=true;
      console.log(this.dtreq3);
    }
  }

edit(empjobhistory,all,i) {
console.log(empjobhistory);
console.log(empjobhistory.yearofexperience);
this.year=empjobhistory.yearofexperience;
this.year1=empjobhistory.yearofexperience1;
this.year2=empjobhistory.yearofexperience2;
this.year3=empjobhistory.yearofexperience3;
this.year4=empjobhistory.yearofexperience4;
console.log(this.year);
if(empjobhistory.companyname1)
{
  this.click=true;
  this.btn1=false;
  this.btn2=true;
}
else if(empjobhistory.companyname2)
{
  this.click=true;
  this.click1=true;
  this.btn2=false;
  this.btn3=true;
}
else if(empjobhistory.companyname3)
{
  this.click=true;
  this.click1=true;
  this.click2=true;
  this.btn3=false;
  this.btn4=true;
}
else if(empjobhistory.companyname4)
{
  this.click=true;
  this.click1=true;
  this.click2=true;
  this.click3=true;
  this.btn4=false;
  this.btn5=true;
}
 this.updatebutton = true;
 this.employee=all
 this.i=i;
}

view(emp,all,i) {
  this.updatebutton = true;
  this.employee=all
  this.i=i;
 }


updatejobhistory(empjobhistory)
{
  console.log(empjobhistory);
  console.log(empjobhistory.jobhistory[0].companyname1);
  
  empjobhistory.jobhistory[0].yearofexperience=this.year;
  // empjobhistory.jobhistory[0].yearofexperience1=this.year1;
  // empjobhistory.jobhistory[0].yearofexperience2=this.year2;
  // empjobhistory.jobhistory[0].yearofexperience3=this.year3;
  // empjobhistory.jobhistory[0].yearofexperience4=this.year4;

 if(this.setdata)
 {
  empjobhistory.jobhistory[0].yearofexperience=this.year;
  empjobhistory.jobhistory[0].companyname1="";
  empjobhistory.jobhistory[0].designation1="";
  empjobhistory.jobhistory[0].client1="";
  empjobhistory.jobhistory[0].domain1="";
  empjobhistory.jobhistory[0].application1="";
  empjobhistory.jobhistory[0].fromdate1="";
  empjobhistory.jobhistory[0].todate1="";
  empjobhistory.jobhistory[0].yearofexperience1="";
  empjobhistory.jobhistory[0].reasonofleaving1="";

  empjobhistory.jobhistory[0].companyname2="";
  empjobhistory.jobhistory[0].designation2="";
  empjobhistory.jobhistory[0].client2="";
  empjobhistory.jobhistory[0].domain2="";
  empjobhistory.jobhistory[0].application2="";
  empjobhistory.jobhistory[0].fromdate2="";
  empjobhistory.jobhistory[0].todate2="";
  empjobhistory.jobhistory[0].yearofexperience2="";
  empjobhistory.jobhistory[0].reasonofleaving2="";

  empjobhistory.jobhistory[0].companyname3="";
  empjobhistory.jobhistory[0].designation3="";
  empjobhistory.jobhistory[0].client3="";
  empjobhistory.jobhistory[0].domain3="";
  empjobhistory.jobhistory[0].application3="";
  empjobhistory.jobhistory[0].fromdate3="";
  empjobhistory.jobhistory[0].todate3="";
  empjobhistory.jobhistory[0].yearofexperience3="";
  empjobhistory.jobhistory[0].reasonofleaving3="";

  empjobhistory.jobhistory[0].companyname4="";
  empjobhistory.jobhistory[0].designation4="";
  empjobhistory.jobhistory[0].client4="";
  empjobhistory.jobhistory[0].domain4="";
  empjobhistory.jobhistory[0].application4="";
  empjobhistory.jobhistory[0].fromdate4="";
  empjobhistory.jobhistory[0].todate4="";
  empjobhistory.jobhistory[0].yearofexperience4="";
  empjobhistory.jobhistory[0].reasonofleaving4="";
 }
 else if(this.setdata1)
 {
  empjobhistory.jobhistory[0].yearofexperience=this.year;
  empjobhistory.jobhistory[0].yearofexperience1=this.year1;

  empjobhistory.jobhistory[0].companyname2="";
  empjobhistory.jobhistory[0].designation2="";
  empjobhistory.jobhistory[0].client2="";
  empjobhistory.jobhistory[0].domain2="";
  empjobhistory.jobhistory[0].application2="";
  empjobhistory.jobhistory[0].fromdate2="";
  empjobhistory.jobhistory[0].todate2="";
  empjobhistory.jobhistory[0].yearofexperience2="";
  empjobhistory.jobhistory[0].reasonofleaving2="";  

  empjobhistory.jobhistory[0].companyname3="";
  empjobhistory.jobhistory[0].designation3="";
  empjobhistory.jobhistory[0].client3="";
  empjobhistory.jobhistory[0].domain3="";
  empjobhistory.jobhistory[0].application3="";
  empjobhistory.jobhistory[0].fromdate3="";
  empjobhistory.jobhistory[0].todate3="";
  empjobhistory.jobhistory[0].yearofexperience3="";
  empjobhistory.jobhistory[0].reasonofleaving3="";

  empjobhistory.jobhistory[0].companyname4="";
  empjobhistory.jobhistory[0].designation4="";
  empjobhistory.jobhistory[0].client4="";
  empjobhistory.jobhistory[0].domain4="";
  empjobhistory.jobhistory[0].application4="";
  empjobhistory.jobhistory[0].fromdate4="";
  empjobhistory.jobhistory[0].todate4="";
  empjobhistory.jobhistory[0].yearofexperience4="";
  empjobhistory.jobhistory[0].reasonofleaving4="";
 }
 else if(this.setdata2)
 {
  empjobhistory.jobhistory[0].yearofexperience=this.year;
  empjobhistory.jobhistory[0].yearofexperience1=this.year1;
  empjobhistory.jobhistory[0].yearofexperience2=this.year2;

  empjobhistory.jobhistory[0].companyname3="";
  empjobhistory.jobhistory[0].designation3="";
  empjobhistory.jobhistory[0].client3="";
  empjobhistory.jobhistory[0].domain3="";
  empjobhistory.jobhistory[0].application3="";
  empjobhistory.jobhistory[0].fromdate3="";
  empjobhistory.jobhistory[0].todate3="";
  empjobhistory.jobhistory[0].yearofexperience3="";
  empjobhistory.jobhistory[0].reasonofleaving3="";

  empjobhistory.jobhistory[0].companyname4="";
  empjobhistory.jobhistory[0].designation4="";
  empjobhistory.jobhistory[0].client4="";
  empjobhistory.jobhistory[0].domain4="";
  empjobhistory.jobhistory[0].application4="";
  empjobhistory.jobhistory[0].fromdate4="";
  empjobhistory.jobhistory[0].todate4="";
  empjobhistory.jobhistory[0].yearofexperience4="";
  empjobhistory.jobhistory[0].reasonofleaving4="";
 }
 else if(this.setdata3)
 {
  empjobhistory.jobhistory[0].yearofexperience=this.year;
  empjobhistory.jobhistory[0].yearofexperience1=this.year1;
  empjobhistory.jobhistory[0].yearofexperience2=this.year2;
  empjobhistory.jobhistory[0].yearofexperience3=this.year3;

  empjobhistory.jobhistory[0].companyname4="";
  empjobhistory.jobhistory[0].designation4="";
  empjobhistory.jobhistory[0].client4="";
  empjobhistory.jobhistory[0].domain4="";
  empjobhistory.jobhistory[0].application4="";
  empjobhistory.jobhistory[0].fromdate4="";
  empjobhistory.jobhistory[0].todate4="";
  empjobhistory.jobhistory[0].yearofexperience4="";
  empjobhistory.jobhistory[0].reasonofleaving4="";
 }
  empjobhistory.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.employee={jobhistory:[{}]};
  this.click=false;
  this.i=0;
}


cancel(){
  this.click=false;
  this.employee={jobhistory:[{}]};
  this.ngOnInit();
}

addbtn=false;offdata;
fetch(){
 console.log(this.official);
 if(this.official==undefined)
 {
   this.addbtn=true;
   console.log(this.addbtn);
 }
 else if(this.official.jobhistory!=undefined)
 {
   this.addbtn=false;
   console.log(this.addbtn);
 }
}

  ngOnInit() {

  if(undefined!=this.service.editdata.jobhistory)
  {
    this.official=this.service.editdata;
    this.havejob=true;
  }
    
    let baseDepart= this.restangular.all('departments');
    baseDepart.getList().subscribe(data => {
    console.log(data)
    this.dunit =data.filter(res=>res.department);
    return this.dunit;
    });

    let baseJob = this.restangular.all('employeeconfiguration');
    baseJob.getList().subscribe(data => {
    this.datas = data.filter(res=>res.jobtitle);
    console.log(this.datas)
    });
    
    let basePosition = this.restangular.all('employeeconfiguration');
    basePosition.getList().subscribe(data => {
    this.positionsdata = data.filter(res=>res.position);
    console.log(this.positionsdata)
    });

    let baseStatus = this.restangular.all('contacts');
    baseStatus.getList().subscribe(data => {
    this.client = data.filter(res=>res.clients);
    console.log(this.client)
    });

    let baseEducation = this.restangular.all('employeeconfiguration');
    baseEducation.getList().subscribe(data => {
    this.domaindatas = data.filter(res=>res.domain);
    console.log(this.domaindatas)
    });

    let baseOfficial = this.restangular.all('createemployee');
    baseOfficial.getList().subscribe(data => {
    this.offdata = data.filter(res=>res);
    this.fetch();
    console.log(this.offdata)
    });

     //form submit validation
  this.form = this.formBuilder.group({
    cmp: [null, Validators],
    from: [null, Validators.required],
    degi: [null, Validators],
    cli: [null, Validators],
    to: [null, Validators.required],
    reg: [null, Validators],
    app: [null, Validators],
    dom: [null, Validators],
    exp:[null,Validators],

    cmp1: [null, Validators],
    from1: [null, Validators],
    degi1: [null, Validators],
    cli1: [null, Validators],
    to1: [null, Validators],
    reg1: [null, Validators],
    app1: [null, Validators],
    dom1: [null, Validators],
    exp1:[null,Validators],

    cmp2: [null, Validators],
    from2: [null, Validators],
    degi2: [null, Validators],
    cli2: [null, Validators],
    to2: [null, Validators],
    reg2: [null, Validators],
    app2: [null, Validators],
    dom2: [null, Validators],
    exp2:[null,Validators],

    cmp3: [null, Validators],
    from3: [null, Validators],
    degi3: [null, Validators],
    cli3: [null, Validators],
    to3: [null, Validators],
    reg3: [null, Validators],
    app3: [null, Validators],
    dom3: [null, Validators],
    exp3:[null,Validators],

    cmp4: [null, Validators],
    from4: [null, Validators],
    degi4: [null, Validators],
    cli4: [null, Validators],
    to4: [null, Validators],
    reg4: [null, Validators],
    app4: [null, Validators],
    dom4: [null, Validators],
    exp4:[null,Validators],

    cmp5: [null, Validators],
    from5: [null, Validators],
    degi5: [null, Validators],
    cli5: [null, Validators],
    to5: [null, Validators],
    reg5: [null, Validators],
    app5: [null, Validators],
    dom5: [null, Validators],
    exp5:[null,Validators],
  },
    {validator: this.dateLessThan('from', 'to')});
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
     return { };
    }
  }
 
}
