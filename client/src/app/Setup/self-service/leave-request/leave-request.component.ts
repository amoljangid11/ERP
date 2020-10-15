import { Component, OnInit ,ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';import {MdChipsModule, throwMdDialogContentAlreadyAttachedError} from '@angular/material';
import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import {MdToolbarModule,MdMenuModule,MdTooltipModule,MdSidenavModule} from '@angular/material';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { DatePipe } from '@angular/common';
import { style } from '@angular/animations';
import { Md2Dialog } from 'md2';
import { getDay } from 'date-fns';
import { getValueInRange } from '@ng-bootstrap/ng-bootstrap/util/util';
import { filter } from 'async';
import { IfObservable } from 'rxjs/observable/IfObservable';

@Component({
  selector: 'app-leave-request',
  templateUrl: './leave-request.component.html',
  styleUrls: ['./leave-request.component.css'],
  providers:[DatePipe]
})
export class LeaveRequestComponent implements OnInit {

  response=[
    {name:"full-day"},
    {name:"half-day"}
  ];

  constructor(private restangular:Restangular,public datepipe:DatePipe,private formBuilder: FormBuilder) { 
     this.leaves=this;
  }
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
show;
leaves;
service={leaverequest:{},reporting_mid:"",employee_id:"",event:{}}
getuser;
leavemanagement=[]
empconfig;
employee;
message="hhhhhhhhhh"
edited=false;
messageClass
displayEvent: any;
msg1=false;
msg2=false;
logger: any[] = [];
dateObj = new Date();
numdays;
holiday;
data=[]
calendarOptions;
officialdata;
leave=[];
levoptions=[];
officialdatas=[];
employee1={leave:[{}]};
test=false;
setval=false;
form: FormGroup;
officiald;
leavereq;;
leaverequest;
leavemanageoption;
leavereqs1;
getholiday;
notallow;

exitt;
w1;
w2;
tempidd;
llimit1leave;
count=0;
newsave1(service)
{
  console.log(service)
  var rev=this.leavereqs.filter(obj=>obj.leaverequest.status=='Revoke')
  console.log(rev);
  var objj=this.leavereqs.find(obj=>obj.TempId==this.tempidd);
  console.log(objj)
  // If previous doesn't had any revoke status leaves are present into db
  if(rev.length==0)
  {
    console.log(rev)  
    if('Revoke'==service.leaverequest.status)
    {
      objj.leaverequest.status=service.leaverequest.status;
      objj.leaverequest.comments=service.leaverequest.comments;
      objj.leaverequest.revokedayscount=objj.leaverequest.no_days;
      objj.leaverequest.revokestatus="Leave Request has been Revoked by " + this.employee.official[0].firstname+" "+this.employee.official[0].lastname
      objj.leaverequest.revoked_on=this.today;
      console.log(objj);
      objj.save().toPromise().then(function(resp) {
                  // console.log(resp)
                  console.log(objj.event.title)
                  console.log(resp.event.title)

                  // obj.service={leaverequest:{}}
      })     
    }
  }
    // If previous had any revoke status leaves are present into db
  else
  {
    console.log(rev);
    console.log(rev.length)
    for(let j=rev.length-1;j<rev.length;j++)
    {
      console.log(rev[j].leaverequest.revokedayscount)
      this.count=rev[j].leaverequest.revokedayscount
      console.log(this.count);
    }
    if('Revoke'==service.leaverequest.status)
    {
    objj.leaverequest.status=service.leaverequest.status;
    objj.leaverequest.comments=service.leaverequest.comments;
    objj.leaverequest.revokedayscount=this.count+parseFloat(objj.leaverequest.no_days);
    console.log( objj.leaverequest.revokedayscount)
    objj.leaverequest.revokestatus="Leave Request has been Revoked by " + this.employee.official[0].firstname+" "+this.employee.official[0].lastname
    objj.leaverequest.revoked_on=this.today;
    console.log(objj);
       objj.save().toPromise().then(function(resp) {
                  // console.log(resp)
                  console.log(objj.event.title)
                  console.log(resp.event.title)

                  // obj.service={leaverequest:{}}
      }) 
    }
  }
      var emp=this.leavereq.find(obj=>obj._id==this.getuser.employee_OId)
      console.log(emp);
      console.log(emp.leave.length)
      for(let i=0;i<emp.leave.length;i++)
      {
        if(emp.leave[i].leavetype==objj.leaverequest.leavetype)
        {
          console.log(emp.leave[i].leavetype)
          console.log(objj.leaverequest.no_days)
          emp.leave[i].usedleaves=emp.leave[i].usedleaves-parseFloat(objj.leaverequest.no_days)
          console.log(emp.leave[i].usedleaves)
          emp.leave[i].leavebalance=emp.leave[i].leavebalance+parseFloat(objj.leaverequest.no_days)
          console.log(emp.leave[i].leavebalance)
          emp.save().toPromise().then(res=>{
            console.log(res)
            this.restangular.all('createemployee').getList()
            .subscribe(data=>{this.leavereq=data.filter(res=>res.leave)})
          }) 
        }
      }

}
newsave(service)
  {
    var obj=this.leaves
    console.log(service.leaverequest.status)
    console.log(this.tempidd)
    var objj=this.leavereqs.find(obj=>obj.TempId==this.tempidd);
    console.log(objj)
    var tmpid=objj.TempId;
    console.log("TMPID " +tmpid)
    console.log(objj)
    console.log(objj.leaverequest.status)
     if('Cancel'==service.leaverequest.status)
      {        
            objj.leaverequest.status=service.leaverequest.status;
            objj.leaverequest.comments=service.leaverequest.comments;
            objj.leaverequest.revokedayscount=objj.leaverequest.no_days;

            objj.leaverequest.revokestatus="Leave Request has been Revoked by " + this.employee.official[0].firstname+" "+this.employee.official[0].lastname
            objj.leaverequest.revoked_on=this.today;
            objj.save().toPromise().then(function(resp) {
                  // console.log(resp)
                  console.log(objj.event.title)
                  console.log(resp.event.title)

                  // obj.service={leaverequest:{}}
                })
        }     
  }



updateCalcs(e)
{
  console.log(e,"fghfghfhfhfghnfghngfhfhnfgnm")
}
addrequest(service)
{
  console.log("trueeeeeeeeeeeeee")
   var res=this.employee  
   console.log(res)
    // service.leaverequest.leavelimit=res.leave[0].leavelimit
    if(service.leaverequest.status=='Approved')
    {
      service.leaverequest.leavelimit=res.leave[0].leavebalance
    }
    else{
    service.leaverequest.leavelimit=res.leave[0].leavelimit
    }
    service.leaverequest.reportingmanager=res.official[0].reportingmanager
    service.reporting_mid=res.official[0].reporting_mid
    service.employee_id=res.official[0]._id
    
    console.log(service) 
}

leavefor:any;
no_days;
halfdate1
halfdate2

leaveday = [
  { viewValue: 'FullDay'},
  { viewValue: 'HalfDay'}
];

request = [
  { viewValue: 'Revoke'},
];
request1=[
  { viewValue: 'Cancel'}
]

canceldata;
today: number = Date.now();
reqcancel(text){
  console.log("Yes")
  console.log(text)
  console.log(this.canceldata)
  this.canceldata.leaverequest.status=text.leaverequest.status;
  this.canceldata.leaverequest.cancelstatus="Leave Request has been Cancelled by " + this.employee.official[0].firstname+" "+this.employee.official[0].lastname
  this.canceldata.leaverequest.cancelled_on=this.today;
  this.canceldata.event.title=this.canceldata.event.title.substring(0,this.canceldata.event.title.length-3) + "(C)"
 
         this.canceldata.save().toPromise().then(function(resp) {
           console.log(resp)
            // this.start();          
         })
 }

 

leavwtype;
t2date;
leavereq1;
leavereq2=[];


hideleave(){
  this.leavefor="";
  // this.no_days="";

}
i;
llimit;
ltype(){
 
  for(this.i=0;this.i<this.leavereq[0].leave.length;this.i++)
  {
this.leavereq2=this.leavereq[0].leave;

console.log(this.leavereq2);
console.log(this.leavereq2[this.i].leavetype)
  }
}
middleof3moth;
middleof6moth;
middleof9moth;
middleof12moth;
fmiddleof3moth
fmiddleof6moth;
fmiddleof9moth;
fmiddleof12moth;
dateofjoing;
prevnov;
prevnov1;
fdatemonth;

lastof3month;
lastof6month;
lastof9month;
lastof12month;

lastof3months;
lastof6months;
lastof9months;
lastof12months;
startof1month;
startof1months;
pl;
adda=0;
addb=0;
addc=0;
addd=0;
b;p;
b1;q;r;v;
s;
c1;d1;a1;
aa1;bb1;cc1;dd1;
sumdays1=0;
sumdays2=0;
addb1=0;
addd1=0;
addc1=0;
adda1=0;
prevyrfmiddleof12moth;
sumdays=0;

flagl=0;
toodate
tomonth;pfdmonth;pmonth;sfdmonth;smonth;
fromdate;fromdates;
lop;lops;lopdays=0;lopdaysm=0;lopdayem=0;
fromdate1;toodate1;lopdaysm1=0;lopdayem1=0;llimit1;llimit2;
allleaves;allfromdate;alltoodate;
alll;leavecount;l1;
llimitpl;



fetch(aa)
{
    // if(this.too==aa.empconfig.leavetype.)
    console.log(aa);
    console.log(this.numdays);

    console.log(this.w1);
    console.log(this.w2);

var dct=new Date(this.datepipe.transform(this.fdate,'yyyy-MM-dd'))
console.log(dct)
var fmonth=dct.getMonth();
console.log(fmonth)

var dct1=new Date(this.datepipe.transform(this.tdate,'yyyy-MM-dd'))
console.log(dct1)
var tmonth=dct1.getMonth();
console.log(tmonth)
this.hideleave();

  var res=this.employee
  console.log(res);
  var newdd=new Date(this.datepipe.transform(res.official[0].dateofjoing))
  console.log(newdd)
  var newdoj=this.datepipe.transform(newdd ,'yyyy-MM-dd')
  console.log(newdoj)

  var tnewdd=new Date(newdd.getFullYear(),newdd.getMonth()+3,newdd.getDate())
  console.log(tnewdd)
  var newdoj3=this.datepipe.transform(tnewdd ,'yyyy-MM-dd')
  console.log(newdoj3)

  // var newdoj3M=newdoj3.getMonth();
  // console.log(newdoj3M)

  var y=new Date();
  var year=y.getFullYear();
  console.log(year);

   if((0 == year % 4) && (0 != year % 100) || (0 == year % 400))
		{
      this.middleof3moth = new Date(new Date().getFullYear(), 1, 15);
      this.fmiddleof3moth=this.datepipe.transform(this.middleof3moth,'yyyy-MM-dd');
		}
		else
		{
      this.middleof3moth = new Date(new Date().getFullYear(), 1, 14);
      this.fmiddleof3moth=this.datepipe.transform(this.middleof3moth,'yyyy-MM-dd');
		}

this.middleof6moth = new Date(new Date().getFullYear(), 4, 16);
this.fmiddleof6moth=this.datepipe.transform(this.middleof6moth,'yyyy-MM-dd');
this.middleof9moth = new Date(new Date().getFullYear(), 7, 15);
this.fmiddleof9moth=this.datepipe.transform(this.middleof9moth,'yyyy-MM-dd');
this.middleof12moth = new Date(new Date().getFullYear(), 10, 15);
this.fmiddleof12moth=this.datepipe.transform(this.middleof12moth,'yyyy-MM-dd');
var py=new Date(this.fmiddleof12moth)
py.setFullYear(py.getFullYear()-1);
console.log(py);
this.prevyrfmiddleof12moth=this.datepipe.transform(py,'yyyy-MM-dd');
console.log(this.prevyrfmiddleof12moth)
this.dateofjoing=this.datepipe.transform(this.employee.official[0].dateofjoing,'yyyy-MM-dd');
console.log(this.dateofjoing)
console.log(this.fmiddleof3moth)
console.log(this.fmiddleof6moth)
console.log(this.fmiddleof9moth)
console.log(this.fmiddleof12moth)

this.startof1month=new Date(new Date().getFullYear(),0,1);
this.startof1months=this.datepipe.transform(this.startof1month,'yyyy-MM-dd');
this.lastof3month=new Date(new Date().getFullYear(), 2, 31);
this.lastof3months=this.datepipe.transform(this.lastof3month,'yyyy-MM-dd');
this.lastof6month=new Date(new Date().getFullYear(), 5, 30);
this.lastof6months=this.datepipe.transform(this.lastof6month,'yyyy-MM-dd');
this.lastof9month=new Date(new Date().getFullYear(), 8, 30);
this.lastof9months=this.datepipe.transform(this.lastof9month,'yyyy-MM-dd');
this.lastof12month=new Date(new Date().getFullYear(), 11, 31);
this.lastof12months=this.datepipe.transform(this.lastof12month,'yyyy-MM-dd');

console.log(newdoj3)
console.log(this.lastof3months)
console.log(this.dateofjoing)


if(aa.leavetype=="Privilege Leave")
{
  for(this.i=0;this.i<this.leavereq[0].leave.length;this.i++)
  {
     if(aa.leavetype==this.leavereq[0].leave[this.i].leavetype)
     {
      this.llimit=this.leavereq[0].leave[this.i].leavebalance
     }
    }
  console.log(this.llimit)
  this.p=this.leavereqs1.filter(obj=>(obj.leaverequest.leavetype=="Privilege Leave" && !obj.leaverequest.cancelled_on && (new Date(obj.leaverequest.to_date).getFullYear()==year)))

console.log(newdoj)
var set1=new Date(newdoj);
var set2=new Date(newdoj);
var set3=new Date(newdoj);
var set4=new Date(newdoj);

var set11=set1.setMonth(set1.getMonth()+3);
console.log(set11)
var set111=this.datepipe.transform(set11,'yyyy-MM-dd');
console.log(set111)
var set12=set2.setMonth(set2.getMonth()+6);
console.log(set12)
var set112=this.datepipe.transform(set12,'yyyy-MM-dd');
console.log(set112)
var set13=set3.setMonth(set3.getMonth()+9);
console.log(set13)
var set113=this.datepipe.transform(set13,'yyyy-MM-dd');
console.log(set113)
var set14=set4.setMonth(set4.getMonth()+12);
console.log(set14)
var set114=this.datepipe.transform(set14,'yyyy-MM-dd');
console.log(set114)

console.log(this.dateofjoing)
console.log(this.startof1months)
console.log(this.lastof3months)


if(this.no_days>15)
{
  alert("You cannot take more than 15 days PL at one time");
  this.leaveday=[];
  this.no_days="";
  return false;
}
console.log(this.fdate)
console.log(this.tdate)
var todates=this.datepipe.transform(this.today,'yyyy-MM-dd') 
  console.log(todates);
// if(this.fdate<todates)
// {
//   alert("You don't take pl in past months or past dates of current month.")
//   this.leaveday=[];
//   this.no_days="";
// }
if(this.no_days>=4 && this.no_days<=15 && this.llimit>=this.no_days && this.fdate>=todates)
   {
      
      var beforethirtydays=new Date(this.fdate);
      beforethirtydays.setDate(beforethirtydays.getDate()-10);
      var thirtyday=beforethirtydays.getFullYear()+'-'+(beforethirtydays.getMonth()+1) +'-'+beforethirtydays.getDate();
      console.log(thirtyday);
      var btd=this.datepipe.transform(thirtyday,'yyyy-MM-dd') 
      console.log(btd);
      if(todates<=btd)
      {
        console.log("Okkkkk")
      }
      else if(todates>=btd)
      {
        alert("You must have to inform before 10 days.")
        this.leaveday=[];
        this.no_days="";
        this.llimit="";
        return false;
      }
   }

if(aa.leavetype=="Privilege Leave" && (new Date(this.dateofjoing).getFullYear())==(new Date(this.fdate).getFullYear()))
{
  console.log("date of joining year")
if(this.dateofjoing>=this.fmiddleof3moth && this.dateofjoing<=this.lastof3months && (new Date(this.dateofjoing).getFullYear()==year))
{
  console.log("half jan")
var settwo=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=set111 && obj.leaverequest.approved_on<=set112 && !obj.leaverequest.cancelled_on && obj.leaverequest.leavetype=="Privilege Leave" && (new Date(obj.leaverequest.to_date).getFullYear()==year)))
console.log(settwo)
if(settwo.length==0 && this.fdate>this.lastof3months && this.fdate<this.lastof6months)
{
  this.sumdays=0;
  var remain=1.5-this.sumdays
  if(this.no_days>1.5)
  {
    alert("u cannot take more than" +remain +"leave")
    this.leaveday=[];
    this.no_days="";
    this.llimit="";
    return false;
  }
}
else
{

  for(let t=0;t<=settwo.length-1;t++)
  {
    // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
    this.sumdays1=this.sumdays1+parseFloat(settwo[t].leaverequest.no_days)
    console.log(this.sumdays1)
  }
  var remain=1.5-this.sumdays1;
  if(this.sumdays1+this.no_days>1.5 && this.fdate>this.lastof3months && this.fdate<this.lastof6months)
  {
    alert("u cannot take more than " +remain  +"leave")
    this.leaveday=[];
    this.no_days="";
    this.llimit="";
    return false;
  }
  if(this.sumdays1==1 && this.fdate>this.lastof3months && this.fdate<this.lastof6months)
  {
    this.leaveday = [ { viewValue: 'HalfDay'}]
  }
    this.addd1=this.sumdays1;
    console.log(this.addd1)
}


var setthree=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>set112 && !obj.leaverequest.cancelled_on && obj.leaverequest.approved_on<=set113  && obj.leaverequest.leavetype=="Privilege Leave" && (new Date(obj.leaverequest.to_date).getFullYear()==year)))
console.log(setthree)
if(setthree.length==0  && this.fdate>this.lastof6months && this.fdate<this.lastof9months)
{
  console.log(this.sumdays1)
  var remain=4.5-(this.sumdays1)
    console.log(remain)
    if(this.sumdays1+this.no_days>4.5 && this.fdate>this.lastof6months && this.fdate<this.lastof9months)
    {
    
      alert("u cannot take more than" +remain +" leaves")
      this.leaveday=[];
      this.no_days="";
      this.llimit="";
      return false;
    }
}
else
{
  for(let t=0;t<=setthree.length-1;t++)
  {
    // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
    this.sumdays1=this.sumdays1+parseFloat(setthree[t].leaverequest.no_days)
    console.log(this.sumdays1)
  }
    this.addd1=this.sumdays1;
    console.log(this.addd1)
    console.log(this.sumdays)
    console.log(this.sumdays1)

    console.log(this.sumdays+this.sumdays1+this.no_days)
    var remain=4.5-(this.sumdays+this.sumdays1)
    console.log(remain)
    if(this.sumdays+this.sumdays1+this.no_days>4.5 && this.fdate>this.lastof6months && this.fdate<this.lastof9months)
    {
    
      alert("u cannot take more than" +remain +" leaves")
      this.leaveday=[];
      this.no_days="";
      this.llimit="";
      return false;
    }
    if(this.sumdays1==4  && this.fdate>this.lastof6months && this.fdate<this.lastof9months)
  {
    this.leaveday = [ { viewValue: 'HalfDay'}]
  }
  
}
var setfour=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>set113 && !obj.leaverequest.cancelled_on && obj.leaverequest.approved_on<=set114  && obj.leaverequest.leavetype=="Privilege Leave" && (new Date(obj.leaverequest.to_date).getFullYear()==year)))
console.log(setfour)
if(setfour.length==0)
{
  console.log(this.sumdays1)
  var remain=7.5-(this.sumdays1)
  console.log(this.llimit)

  if(this.sumdays1+this.no_days>7.5 && this.fdate>this.lastof9months && this.fdate<this.lastof12months)
  {
    alert("u cannot take more than" +remain +" leaves")
    this.leaveday=[];
    this.no_days="";
    this.llimit="";
    return false;
  }
  if(this.sumdays1==7  && this.fdate>this.lastof9months && this.fdate<this.lastof12months)
  {
    this.leaveday = [ { viewValue: 'HalfDay'}]
  }
}
else
{

  for(let t=0;t<=setfour.length-1;t++)
  {
    // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
    this.sumdays2=this.sumdays2+parseFloat(setfour[t].leaverequest.no_days)
    console.log(this.sumdays2)
  }
    this.addd1=this.sumdays2;
    console.log(this.addd1)
    console.log(this.sumdays)
    console.log(this.sumdays1)
    console.log(this.sumdays2)

    var remain=7.5-(this.sumdays2)
    console.log(remain)
    if(this.sumdays2+this.no_days>7.5 && this.fdate>this.lastof9months && this.fdate<this.lastof12months)
    {
    
      alert("u cannot take more than" +remain +" leaves")
      this.leaveday=[];
      this.no_days="";
      this.llimit="";
      return false;
    }
  
}

}


 if(this.dateofjoing>this.fmiddleof6moth && this.dateofjoing<=this.lastof6months && (new Date(this.dateofjoing).getFullYear()==year))
{
  console.log("half april")
    var setthree=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=set111 && !obj.leaverequest.cancelled_on && obj.leaverequest.approved_on<=set112  && obj.leaverequest.leavetype=="Privilege Leave" && (new Date(this.dateofjoing).getFullYear()==year)))
console.log(setthree)
if(setthree.length==0)
{
  console.log(this.sumdays)
  var remain=1.5-(this.sumdays)
    console.log(remain)
    if(this.sumdays+this.no_days>1.5 && this.fdate>this.lastof6months && this.fdate<this.lastof9months && (new Date(this.dateofjoing).getFullYear()==year) )
    {
      alert("u cannot take more than" +remain +" leaves")
      this.leaveday=[];
      this.no_days="";
      this.llimit="";
      return false;
    }
}
else
{

  for(let t=0;t<=setthree.length-1;t++)
  {
    // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
    this.sumdays1=this.sumdays1+parseFloat(setthree[t].leaverequest.no_days)
    console.log(this.sumdays1)
  }
    this.addd1=this.sumdays1;
    console.log(this.addd1)
    console.log(this.sumdays1)

    console.log(this.sumdays1+this.no_days)
    var remain=1.5-(this.sumdays1)
    console.log(remain)
    if(this.sumdays1+this.no_days>1.5 && this.fdate>this.lastof6months && this.fdate<this.lastof9months)
    {
      alert("u cannot take more than" +remain +" leaves")
      this.leaveday=[];
      this.no_days="";
      this.llimit="";
      return false;
    }
    if(this.sumdays1==1 && this.fdate>this.lastof6months && this.fdate<this.lastof9months)
    {
      this.leaveday = [ { viewValue: 'HalfDay'}]
    }
  
}


var setfour=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>set112 && !obj.leaverequest.cancelled_on && obj.leaverequest.approved_on<=set113  && obj.leaverequest.leavetype=="Privilege Leave" && (new Date(obj.leaverequest.to_date).getFullYear()==year)))
console.log(setfour)
if(setfour.length==0)
{
  var remain=4.5-(this.sumdays1)
  console.log(this.llimit)

  if(this.sumdays1+this.no_days>4.5 && this.fdate>this.lastof9months && this.fdate<this.lastof12months)
  {
    alert("u cannot take more than" +remain +" leaves")
    this.leaveday=[];
    this.no_days="";
    this.llimit="";
    return false;
  }
}
else
{

  for(let t=0;t<=setfour.length-1;t++)
  {
    // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
    this.sumdays2=this.sumdays2+parseFloat(setfour[t].leaverequest.no_days)
    console.log(this.sumdays2)
  }
    this.addd1=this.sumdays2;
    console.log(this.addd1)
    console.log(this.sumdays1)
    console.log(this.sumdays2)

    // console.log(this.sumdays1+this.sumdays2)
    var remain=4.5-(this.sumdays2)
    console.log(remain)
    if(this.sumdays2+this.no_days>4.5 && this.fdate>this.lastof9months && this.fdate<this.lastof12months)
    {
    
      alert("u cannot take more than" +remain +" leaves")
      this.leaveday=[];
      this.no_days="";
      this.llimit="";
      return false;
    }
    if(this.sumdays1==4 && this.fdate>this.lastof9months && this.fdate<this.lastof12months)
    {
      this.leaveday = [ { viewValue: 'HalfDay'}]
    }
  
}

}


 if(this.dateofjoing>this.fmiddleof9moth && this.dateofjoing<=this.lastof9months && (new Date(this.dateofjoing).getFullYear()==year))
{
console.log("half july")
var setfour=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=set111 && !obj.leaverequest.cancelled_on && obj.leaverequest.approved_on<=set112  && obj.leaverequest.leavetype=="Privilege Leave" && (new Date(obj.leaverequest.to_date).getFullYear()==year)))
console.log(setfour)
if(setfour.length==0)
{
  console.log(this.sumdays)
  var remain=1.5-(this.sumdays1)
  console.log(this.llimit)

  if(this.sumdays1+this.no_days>1.5 && this.fdate>this.lastof9months && this.fdate<this.lastof12months)
  {
    alert("u cannot take more than" +remain +" leaves")
    this.leaveday=[];
    this.no_days="";
    this.llimit="";
    return false;
  }
}
else
{

  for(let t=0;t<=setfour.length-1;t++)
  {
    // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
    this.sumdays2=this.sumdays2+parseFloat(setfour[t].leaverequest.no_days)
    console.log(this.sumdays2)
  }
    this.addd1=this.sumdays2;
    console.log(this.addd1)
   console.log(this.sumdays2)
    var remain=1.5-(this.sumdays2)
    console.log(remain)

    if(this.sumdays2+this.no_days>1.5 && this.fdate>this.lastof9months && this.fdate<this.lastof12months)
    {
    
      alert("u cannot take more than" +remain +" leaves")
      this.leaveday=[];
      this.no_days="";
      this.llimit="";
      return false;
    }
    if(this.sumdays2==1 && this.fdate>this.lastof9months && this.fdate<this.lastof12months)
    {
      this.leaveday = [ { viewValue: 'HalfDay'}]
    }
  
}
}


 else if(this.dateofjoing>=this.startof1months && this.dateofjoing<=this.lastof3months && (new Date(this.dateofjoing).getFullYear()==year))
{
  console.log("full jan")
var settwo=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=set111 && !obj.leaverequest.cancelled_on && obj.leaverequest.approved_on<=set112  && obj.leaverequest.leavetype=="Privilege Leave" && (new Date(obj.leaverequest.to_date).getFullYear()==year)))
console.log(settwo)
if(settwo.length==0 && this.fdate>this.lastof3months && this.fdate<this.lastof6months)
{
  this.sumdays=0;
  if(this.no_days>3)
  {
    alert("u cannot take more than 3 leave")
    this.leaveday=[];
    this.no_days="";
    this.llimit="";
    return false;
  }
}
else
{

  for(let t=0;t<=settwo.length-1;t++)
  {
    // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
    this.sumdays1=this.sumdays1+parseFloat(settwo[t].leaverequest.no_days)
    console.log(this.sumdays1)
  }
  var remain=3-this.sumdays1;
  if(this.sumdays1+this.no_days>3 && this.fdate>this.lastof3months && this.fdate<this.lastof6months)
  {
    alert("u cannot take more than " +remain  +"leave")
    this.leaveday=[];
    this.no_days="";
    this.llimit="";
    return false;
  }
    this.addd1=this.sumdays1;
    console.log(this.addd1)
}


var setthree=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>set112 && !obj.leaverequest.cancelled_on && obj.leaverequest.approved_on<=set113  && obj.leaverequest.leavetype=="Privilege Leave" && (new Date(obj.leaverequest.to_date).getFullYear()==year)))
console.log(setthree)
if(setthree.length==0  && this.fdate>this.lastof6months && this.fdate<this.lastof9months)
{
  console.log(this.sumdays1)
  var remain=6-(this.sumdays1)
    console.log(remain)
    if(this.sumdays1+this.no_days>6 && this.fdate>this.lastof6months && this.fdate<this.lastof9months)
    {
    
      alert("u cannot take more than" +remain +" leaves")
      this.leaveday=[];
      this.no_days="";
      this.llimit="";
      return false;
    }
}
else
{
  for(let t=0;t<=setthree.length-1;t++)
  {
    // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
    this.sumdays1=this.sumdays1+parseFloat(setthree[t].leaverequest.no_days)
    console.log(this.sumdays1)
  }
    this.addd1=this.sumdays1;
    console.log(this.addd1)
    console.log(this.sumdays)
    console.log(this.sumdays1)

    console.log(this.sumdays+this.sumdays1+this.no_days)
    var remain=6-(this.sumdays+this.sumdays1)
    console.log(remain)
    if(this.sumdays+this.sumdays1+this.no_days>6 && this.fdate>this.lastof6months && this.fdate<this.lastof9months)
    {
    
      alert("u cannot take more than" +remain +" leaves")
      this.leaveday=[];
      this.no_days="";
      this.llimit="";
      return false;
    }
  
}
var setfour=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>set113 && !obj.leaverequest.cancelled_on && obj.leaverequest.approved_on<=set114  && obj.leaverequest.leavetype=="Privilege Leave" && (new Date(obj.leaverequest.to_date).getFullYear()==year)))
console.log(setfour)
if(setfour.length==0)
{
  console.log(this.sumdays1)
  var remain=9-(this.sumdays1)
  console.log(this.llimit)

  if(this.sumdays1+this.no_days>9 && this.fdate>this.lastof9months && this.fdate<this.lastof12months)
  {
    alert("u cannot take more than" +remain +" leaves")
    this.leaveday=[];
    this.no_days="";
    this.llimit="";
    return false;
  }
}
else
{

  for(let t=0;t<=setfour.length-1;t++)
  {
    // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
    this.sumdays2=this.sumdays2+parseFloat(setfour[t].leaverequest.no_days)
    console.log(this.sumdays2)
  }
    this.addd1=this.sumdays2;
    console.log(this.addd1)
    console.log(this.sumdays)
    console.log(this.sumdays1)
    console.log(this.sumdays2)

    var remain=9-(this.sumdays2)
    console.log(remain)
    if(this.sumdays2+this.no_days>9 && this.fdate>this.lastof9months && this.fdate<this.lastof12months)
    {
    
      alert("u cannot take more than" +remain +" leaves")
      this.leaveday=[];
      this.no_days="";
      this.llimit="";
      return false;
    }
  
}

}


else if(this.dateofjoing>this.lastof3months && this.dateofjoing<=this.lastof6months && (new Date(this.dateofjoing).getFullYear()==year))
{
  console.log("full april")
    var setthree=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=set111 && !obj.leaverequest.cancelled_on && obj.leaverequest.approved_on<=set112  && obj.leaverequest.leavetype=="Privilege Leave" && (new Date(obj.leaverequest.to_date).getFullYear()==year)))
console.log(setthree)
if(setthree.length==0)
{
  console.log(this.sumdays)
  var remain=3-(this.sumdays)
    console.log(remain)
    if(this.sumdays+this.no_days>3 && this.fdate>this.lastof6months && this.fdate<this.lastof9months )
    {
      alert("u cannot take more than" +remain +" leaves")
      this.leaveday=[];
      this.no_days="";
      this.llimit="";
      return false;
    }
}
else
{

  for(let t=0;t<=setthree.length-1;t++)
  {
    // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
    this.sumdays1=this.sumdays1+parseFloat(setthree[t].leaverequest.no_days)
    console.log(this.sumdays1)
  }
    this.addd1=this.sumdays1;
    console.log(this.addd1)
    console.log(this.sumdays1)

    console.log(this.sumdays1+this.no_days)
    var remain=3-(this.sumdays1)
    console.log(remain)
    if(this.sumdays1+this.no_days>3 && this.fdate>this.lastof6months && this.fdate<this.lastof9months)
    {
      alert("u cannot take more than" +remain +" leaves")
      this.leaveday=[];
      this.no_days="";
      this.llimit="";
      return false;
    }
  
}


var setfour=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>set112 && !obj.leaverequest.cancelled_on && obj.leaverequest.approved_on<=set113  && obj.leaverequest.leavetype=="Privilege Leave" && (new Date(obj.leaverequest.to_date).getFullYear()==year)))
console.log(setfour)
if(setfour.length==0)
{
  var remain=6-(this.sumdays1)
  console.log(this.llimit)

  if(this.sumdays1+this.no_days>6 && this.fdate>this.lastof9months && this.fdate<this.lastof12months)
  {
    alert("u cannot take more than" +remain +" leaves")
    this.leaveday=[];
    this.no_days="";
    this.llimit="";
    return false;
  }
}
else
{

  for(let t=0;t<=setfour.length-1;t++)
  {
    // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
    this.sumdays2=this.sumdays2+parseFloat(setfour[t].leaverequest.no_days)
    console.log(this.sumdays2)
  }
    this.addd1=this.sumdays2;
    console.log(this.addd1)
    console.log(this.sumdays1)
    console.log(this.sumdays2)

    // console.log(this.sumdays1+this.sumdays2)
    var remain=6-(this.sumdays2)
    console.log(remain)
    if(this.sumdays2+this.no_days>6 && this.fdate>this.lastof9months && this.fdate<this.lastof12months)
    {
    
      alert("u cannot take more than" +remain +" leaves")
      this.leaveday=[];
      this.no_days="";
      this.llimit="";
      return false;
    }
  
}

}


else if(this.dateofjoing>this.lastof6months && this.dateofjoing<=this.lastof9months && (new Date(this.dateofjoing).getFullYear()==year))
{
console.log("full july")
var setfour=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=set111 && !obj.leaverequest.cancelled_on && obj.leaverequest.approved_on<=set112  && obj.leaverequest.leavetype=="Privilege Leave" && (new Date(obj.leaverequest.to_date).getFullYear()==year)))
console.log(setfour)
if(setfour.length==0)
{
  console.log(this.sumdays)
  var remain=3-(this.sumdays1)
  console.log(this.llimit)

  if(this.sumdays1+this.no_days>3 && this.fdate>this.lastof9months && this.fdate<this.lastof12months)
  {
    alert("u cannot take more than" +remain +" leaves")
    this.leaveday=[];
    this.no_days="";
    this.llimit="";
    return false;
  }
}
else
{

  for(let t=0;t<=setfour.length-1;t++)
  {
    // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
    this.sumdays2=this.sumdays2+parseFloat(setfour[t].leaverequest.no_days)
    console.log(this.sumdays2)
  }
    this.addd1=this.sumdays2;
    console.log(this.addd1)
   
    var remain=3-(this.sumdays2)
    console.log(remain)
    if(this.sumdays2+this.no_days>3)
    {
    
      alert("u cannot take more than" +remain +" leaves")
      this.leaveday=[];
      this.no_days="";
      this.llimit="";
      return false;
    }
  
}
}

}

console.log(year)
console.log(new Date(this.fdate).getFullYear())
if(aa.leavetype=="Privilege Leave" && (new Date(this.dateofjoing).getFullYear())!=(new Date(this.fdate).getFullYear()))
{
  
  console.log("NEW YEAR")

for(this.i=0;this.i<this.leavereq[0].leave.length;this.i++)
{
   if(aa.leavetype==this.leavereq[0].leave[this.i].leavetype)
   {
    this.llimitpl=this.leavereq[0].leave[this.i].leavelimit
    this.llimit=this.leavereq[0].leave[this.i].leavebalance
    this.llimit1leave=this.leavereq[0].leave[this.i].leavelimit1  
   }
  }

console.log(this.llimit)
console.log(this.llimitpl)

this.middleof3moth = new Date(new Date().getFullYear()+1, 1, 14);
this.fmiddleof3moth=this.datepipe.transform(this.middleof3moth,'yyyy-MM-dd');
this.lastof3month=new Date(new Date().getFullYear()+1, 2, 31);
this.lastof3months=this.datepipe.transform(this.lastof3month,'yyyy-MM-dd');
this.lastof6month=new Date(new Date().getFullYear()+1, 5, 30);
this.lastof6months=this.datepipe.transform(this.lastof6month,'yyyy-MM-dd');
this.lastof9month=new Date(new Date().getFullYear()+1, 8, 30);
this.lastof9months=this.datepipe.transform(this.lastof9month,'yyyy-MM-dd');
this.lastof12month=new Date(new Date().getFullYear()+1, 11, 31);
this.lastof12months=this.datepipe.transform(this.lastof12month,'yyyy-MM-dd');
console.log(this.dateofjoing)
console.log(this.fmiddleof3moth)
console.log(this.lastof3months)
console.log(this.fdate)
if(this.dateofjoing>this.fmiddleof12moth)
{
  console.log("Nov joining")
  if(this.fdate>=this.fmiddleof3moth && this.fdate<=this.lastof3months)
   {
    console.log("feb-march")
    console.log(this.llimit)
    if(this.llimit<7.5)
    {
      alert("You cannot take leave in this quarter")
      this.llimit="";
      this.leaveday = [];
      return false;
    }
    else{
    if(this.llimit==8)
    {
      this.leaveday = [ { viewValue: 'HalfDay'}]
    }
     remain=this.llimit-9;
     console.log(remain)
    if(this.no_days1>remain)
    {
      alert("You cannot take " +remain +"leave")
      this.llimit="";
      this.leaveday = [];
      return false;
    }
  }
  }
  if(this.fdate>this.lastof3months && this.fdate<=this.lastof6months)
  {
    console.log("april- july")
    if(this.llimit<3)
    {
      alert("You cannot take leave in this quarter")
      this.llimit="";
      this.leaveday = [];
      return false;
    }
    else{
    if(this.llimit==3.5)
    {
      this.leaveday = [ { viewValue: 'HalfDay'}]
    }
     remain=this.llimit-6
     console.log(remain)
    if(this.no_days1>remain)
    {
      alert("You cannot take " +remain +"leave")
      this.llimit="";
      this.leaveday = [];
      return false;
    }
  }
}



  if(this.fdate>this.lastof6months && this.fdate<=this.lastof9months)
  {
    if(this.llimit<3)
    {
      alert("You cannot take leave in this quarter")
      this.llimit="";
      this.leaveday = [];
      return false;
    }
    else{
    if(this.llimit==3.5)
    {
      this.leaveday = [ { viewValue: 'HalfDay'}]
    }
     remain=this.llimit-3
     console.log(remain)
    if(this.no_days1>remain)
    {
      alert("You cannot take " +remain +"leave")
      this.llimit="";
      this.leaveday = [];
      return false;
    }
  }
  }


  if(this.fdate>this.lastof9months && this.fdate<=this.lastof12months)
  {
    if(this.llimit<0)
    {
      alert("You cannot take leave in this quarter")
      this.llimit="";
      this.leaveday = [];
      return false;
    }
    else{
    if(this.llimit==0.5)
    {
      this.leaveday = [ { viewValue: 'HalfDay'}]
    }
     remain=this.llimit
     console.log(remain)
    if(this.no_days1>remain)
    {
      alert("You cannot take " +remain +"leave")
      this.llimit="";
      this.leaveday = [];
      return false;
    }
  }
}

}
else{
  console.log("no nov joining")
if(this.fdate>=this.startof1months && this.fdate<=this.lastof3months)
  {
    if(this.llimit<9)
    {
      alert("You cannot take leave in this quarter")
      this.llimit="";
      this.leaveday = [];
      return false;
    }
    else{
    if(this.llimit==9.5)
    {
      this.leaveday = [ { viewValue: 'HalfDay'}]
    }
     remain=this.llimit-9
     console.log(remain)
    if(this.no_days1>remain)
    {
      alert("You cannot take " +remain +"leave")
      this.llimit="";
      this.leaveday = [];
      return false;
    }
  }
  }

  if(this.fdate>this.lastof3months && this.fdate<=this.lastof6months)
  {
    if(this.llimit<6)
    {
      alert("You cannot take leave in this quarter")
      this.llimit="";
      this.leaveday = [];
      return false;
    }
    else{
    if(this.llimit==6.5)
    {
      this.leaveday = [ { viewValue: 'HalfDay'}]
    }
     remain=this.llimit-6
     console.log(remain)
    if(this.no_days1>remain)
    {
      alert("You cannot take " +remain +"leave")
      this.llimit="";
      this.leaveday = [];
      return false;
    }
  }
}



  if(this.fdate>this.lastof6months && this.fdate<=this.lastof9months)
  {
    if(this.llimit<3)
    {
      alert("You cannot take leave in this quarter")
      this.llimit="";
      this.leaveday = [];
      return false;
    }
    else{
    if(this.llimit==3.5)
    {
      this.leaveday = [ { viewValue: 'HalfDay'}]
    }
     remain=this.llimit-3
     console.log(remain)
    if(this.no_days1>remain)
    {
      alert("You cannot take " +remain +"leave")
      this.llimit="";
      this.leaveday = [];
      return false;
    }
  }
  }


  if(this.fdate>this.lastof9months && this.fdate<=this.lastof12months)
  {
    console.log("oct-dec")
    if(this.llimit<0)
    {
      alert("You cannot take leave in this quarter")
      this.llimit="";
      this.leaveday = [];
      return false;
    }
    else{
    if(this.llimit==0.5)
    {
      this.leaveday = [ { viewValue: 'HalfDay'}]
    }
     remain=this.llimit
     console.log(remain)
    if(this.no_days1>remain)
    {
      alert("You cannot take " +remain +"leave")
      this.llimit="";
      this.leaveday = [];
      return false;
    }
  }
}
}
 }

}



this.pl=this.leavereq.filter(obj=>(obj.leave[0].leavetype))
console.log(this.pl)

//Maternity Leaves starts here
if(aa.leavetype=="Maternity Leave")  
{ 
  for(this.i=0;this.i<this.leavereq[0].leave.length;this.i++)
  {
     if(aa.leavetype==this.leavereq[0].leave[this.i].leavetype)
     {
      this.llimit=this.leavereq[0].leave[this.i].leavebalance
      console.log(this.llimit);
      this.leaveday = [ { viewValue: 'FullDay'}]
     }
  }
  var tdate=this.datepipe.transform(this.today,'yyyy-MM-dd') 
  console.log(tdate);
  var beforethirtydays=new Date(this.fdate);
  beforethirtydays.setDate(beforethirtydays.getDate()-30);
  var thirtyday=beforethirtydays.getFullYear()+'-'+(beforethirtydays.getMonth()+1) +'-'+beforethirtydays.getDate();
  console.log(thirtyday);
  var btd=this.datepipe.transform(thirtyday,'yyyy-MM-dd') 
  console.log(btd);
  this.leaveday= [
   { viewValue: 'FullDay'}]
 if(tdate<=btd)
 {
   console.log("okkkkk")
 }
 else if(tdate>=btd)
 {
   alert("You have to informed before 1 month.")
   this.leaveday=[];
   this.no_days="";
   return false;
 } 

 var ml=this.leavereqs1.filter(obj=>(obj.leaverequest.leavetype=="Maternity Leave" && !obj.leaverequest.cancelled_on && obj.leaverequest.status=="Approved"))
 console.log(ml) 
 if(ml.length>=2)
 {
alert("You already taked Maternity Leave")
document.getElementById('ff').style.display='none';
this.leaveday=[];
   this.no_days="";
return false;

 }
}
// Other Country Employee (Leave starts here)
if(aa.leavetype=='Leave')
{
console.log("Leave");
console.log(this.numdays+1)
this.no_days=this.numdays+1
console.log(this.no_days);

for(this.i=0;this.i<this.leavereq[0].leave.length;this.i++)
  {
     if(aa.leavetype==this.leavereq[0].leave[this.i].leavetype)
     {
      this.llimit=this.leavereq[0].leave[this.i].leavebalance
      console.log(this.llimit);
      this.leaveday = [ { viewValue: 'FullDay'}]
     }
  }
var y=new Date();
var year=y.getFullYear();
this.l1=this.leavereqs1.filter(obj=>(obj.leaverequest.leavetype=="Leave" && !obj.leaverequest.cancelled_on && (new Date(obj.leaverequest.approved_on).getFullYear())==year))
console.log(this.l1);
   if(this.l1.length==0)
   {
    if(this.no_days>20)
    {
      alert("You cannot take at maximum 20 consecutive calendar days leave every year.")
      this.leaveday=[];
      this.no_days="";
      return false;
    }
  }
  else
  {
    console.log(this.l1.length)
    console.log(this.l1.length-1)
    this.sumdays1=0;
   
  for(let t=0;t<=this.l1.length-1;t++)
  {
    // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
    this.sumdays1=this.sumdays1+parseFloat(this.l1[t].leaverequest.no_days)
    console.log(this.sumdays1)
  }
    this.leavecount=this.sumdays1;
    console.log(this.leavecount)
    if(this.no_days>20)
    {
      alert("You cannot take at maximum 20 consecutive calendar days leave every year.")
      this.leaveday=[];
      this.no_days="";
      return false;
    }
    if(this.no_days<=20)
    {
      var minus=20-this.leavecount;
      if(this.no_days>minus)
      {
        alert("You cannot take more than " +minus +" leave.")
        this.llimit="";
        return false;
       }
    }
  }
}
// ###########################
if(aa.leavetype=="Mandatory Leave")
{
  console.log("Mandatory Leave");
  for(this.i=0;this.i<this.leavereq[0].leave.length;this.i++)
  {
     if(aa.leavetype==this.leavereq[0].leave[this.i].leavetype)
     {
      this.llimit=this.leavereq[0].leave[this.i].leavebalance
      console.log(this.llimit);
      this.leaveday = [ { viewValue: 'FullDay'}]
     }
  }
  if(this.no_days<5)
  {
    alert("You must have to take at least 5 consecutive calendar days leave every year.");
  }
  var tdate=this.datepipe.transform(this.today,'yyyy-MM-dd') 
  console.log(tdate);
  if(this.fdate<tdate)
  {
    alert("You don't take mandatory leaves in past months or past dates of current month.")
    this.leaveday=[];
    this.no_days="";
  }
  if(this.no_days>=5 && this.no_days<=15)
   {
      console.log(this.fdate);
      
      var beforethirtydays=new Date(this.fdate);
      beforethirtydays.setDate(beforethirtydays.getDate()-30);
      var thirtyday=beforethirtydays.getFullYear()+'-'+(beforethirtydays.getMonth()+1) +'-'+beforethirtydays.getDate();
      console.log(thirtyday);
      var btd=this.datepipe.transform(thirtyday,'yyyy-MM-dd') 
      console.log(btd);
      if(tdate<=btd)
      {
        console.log("Okkkkk")
      }
      else if(tdate>=btd)
      {
        alert("You must have to inform before 30 days of your mandatory leaves period.")
        this.leaveday=[];
        this.no_days="";
      }
    }
}
// ##############
if(aa.leavetype=="Leave Without Pay")
{
  console.log("Leave Without Pay");
  var todate=new Date(this.datepipe.transform(this.today,'yyyy-MM-dd')) 
  console.log(todate);
  var todaymonth=todate.getMonth();
  console.log(todaymonth);
  var plusone=todaymonth+1;
  console.log(plusone);
  var plustwo=todaymonth+2;
  console.log(plustwo);
  console.log(dct)
  console.log(fmonth)
  if(dct<todate)
  {
    alert("You don't take leaves in past months or past dates of current month.");
    this.leaveday=[];
    this.no_days="";
  }
  if(fmonth>=plustwo)
  {
    alert("You don't take leaves in future months");
    this.leaveday=[];
    this.no_days="";
  }
  
  for(this.i=0;this.i<this.leavereq[0].leave.length;this.i++)
  {
     if(aa.leavetype==this.leavereq[0].leave[this.i].leavetype)
     {
      if(this.leavereq[0].leave[this.i].usedleaves==0)
      {
        console.log("usedleave==0");
        this.llimit=10;
        console.log(this.llimit);
        this.leaveday = [ { viewValue: 'FullDay'}]
      }
      this.r=this.leavereqs1.filter(obj=>obj.leaverequest.leavetype=="Leave Without Pay" && !obj.leaverequest.cancelled_on && (obj.leaverequest.status=="Approved" || obj.leaverequest.status=="Pending for approval") )
      console.log(this.r);
      if(this.r=="" || this.r==undefined)
      {
        this.llimit=10;
        console.log(this.llimit);
        this.leaveday = [ { viewValue: 'FullDay'}]
      }
      for(let y=0;y<=this.r.length-1;y++)
      {  
        var currmonthleave=new Date(this.datepipe.transform(this.r[y].leaverequest.applied_on,'yyyy-MM-dd')) 
        console.log(currmonthleave);
        var leavechecks=currmonthleave.getMonth();
        console.log(leavechecks);
        this.fromdate1=new Date(this.datepipe.transform(this.r[y].leaverequest.from_date,'yyyy-MM-dd')) 
        console.log(this.fromdate1);
        this.toodate1=new Date(this.datepipe.transform(this.r[y].leaverequest.to_date,'yyyy-MM-dd')) 
        console.log(this.toodate1);
        console.log(dct)
        console.log(dct1)
        
        if(this.r[y].leaverequest.status=="Pending for approval" && leavechecks==todaymonth  && fmonth==todaymonth)
        {
          alert("You are already applied for leaves in a month & your previous leave request status is pending. Contact to your HR.");
          this.leaveday=[];
          this.no_days="";
        }
        if(this.r[y].leaverequest.status=="Pending for approval" && leavechecks==plusone  && fmonth==plusone)
        {   
          alert("You are already applied for leaves in a month & your previous leave request status is pending. Contact to your HR.");
          this.leaveday=[];
          this.no_days="";
        }
        var currmonthlfd=new Date(this.datepipe.transform(this.r[y].leaverequest.from_date,'yyyy-MM-dd')) 
        console.log(currmonthlfd);
        var leavecheckfd=currmonthlfd.getMonth();
        console.log(leavecheckfd);
        var currmonthltd=new Date(this.datepipe.transform(this.r[y].leaverequest.to_date,'yyyy-MM-dd')) 
        console.log(currmonthltd);
        var leavechecktd=currmonthltd.getMonth();
        console.log(leavechecktd);
        if(this.r[y].leaverequest.status=="Pending for approval" && leavecheckfd==todaymonth && leavechecktd==plusone && fmonth==plusone)
        {
          alert("You are already applied for leaves in a month & your previous leave request status is pending. Contact to your HR.");
          this.leaveday=[];
          this.no_days="";
        }

        var currmonthl=new Date(this.datepipe.transform(this.r[y].leaverequest.approved_on,'yyyy-MM-dd')) 
        console.log(currmonthl);
        var leavecheck=currmonthl.getMonth();
        console.log(leavecheck);
        console.log(todaymonth);
       if(this.leavereq[0].leave[this.i].usedleaves!=0 && leavecheck!=todaymonth && fmonth==todaymonth)
       {
        console.log("usedleave!=0 & u cant taked any leaves in this month.. so u are applicable")
        this.llimit=10;
        console.log(this.llimit);
        this.leaveday = [ { viewValue: 'FullDay'}]
       }
       if(this.leavereq[0].leave[this.i].usedleaves!=0 && leavecheck!=plusone && fmonth==plusone)
       {
        console.log("usedleave!=0 & u cant taked any leaves in this month.. so u are applicable")
        this.llimit=10;
        console.log(this.llimit);
        this.leaveday = [ { viewValue: 'FullDay'}]
       }
      }
     }
  }
  console.log(this.numdays+1)
  this.no_days=this.numdays+1
  console.log(this.no_days);
  if(this.no_days>10)
  {
    alert("You cannot take more than 10 continuous leaves without pay.");
    this.leaveday=[];
    this.no_days="";
    return false;
  }
  else if(this.no_days<=10)
  {
    this.p=this.leavereqs1.filter(obj=>obj.leaverequest.leavetype=="Leave Without Pay" && obj.leaverequest.status=="Approved")
    console.log(this.p);
    this.sumdays1=0;
    this.sumdays2=0;
    for(let t=0;t<=this.p.length-1;t++)
    {
      this.fromdate=new Date(this.datepipe.transform(this.p[t].leaverequest.from_date,'yyyy-MM-dd')) 
      console.log(this.fromdate);
      this.fromdates=this.fromdate.getMonth();
      console.log(this.fromdates)
      this.toodate=new Date(this.datepipe.transform(this.p[t].leaverequest.to_date,'yyyy-MM-dd')) 
      console.log(this.toodate);
      this.tomonth=this.toodate.getMonth();
      console.log(this.tomonth)
     if(todaymonth==this.fromdates && todaymonth==this.tomonth)
     {
       console.log("AAA")
       this.sumdays1=this.sumdays1+parseFloat(this.p[t].leaverequest.no_days)
       console.log(this.sumdays1)
       console.log("fromdate & todate same hai in month1");
       this.llimit=10-this.sumdays1
       console.log(this.llimit);
       this.leaveday = [ { viewValue: 'FullDay'}]
     }
     if(plusone==this.fromdates && plusone==this.tomonth)
     {
      console.log("BBB")
      this.sumdays2=this.sumdays2+parseFloat(this.p[t].leaverequest.no_days)
      console.log(this.sumdays2)
      console.log("fromdate & todate same hai in month2");
      this.llimit=10-this.sumdays2
      console.log(this.llimit);
      this.leaveday = [ { viewValue: 'FullDay'}]
     }
     if(todaymonth==this.fromdates && plusone==this.tomonth)
     {
       console.log("CCC");
       var getDateArray = function(start, end) 
       {
         var arr = new Array();
     
         var df = new Date(start);
         console.log(df)
         var dt = new Date(end);
         console.log(dt)
         // console.log(dt.getDay())
     
         while (df <= dt) 
         {
             console.log("In while loop")
             arr.push(new Date(df)); 
             df.setDate(df.getDate()+1);
         }
         console.log(arr)
         return arr;
       }
       var dateArr = getDateArray(this.fromdate,this.toodate);
       console.log(dateArr);
       console.log(dateArr.length);
       this.lopdaysm=0;
       for(let z=0;z<dateArr.length;z++)
       {
         this.lop=new Date(this.datepipe.transform(dateArr[z],'yyyy-MM-dd')) 
         console.log(this.lop);
         this.lops=this.lop.getMonth();
         console.log(this.lops);
         if(this.lops==todaymonth)
         {
           this.lopdaysm=this.lopdaysm+1;
           console.log(this.lopdaysm)
         }
         if(this.lops==plusone)
         {
           this.lopdayem=this.lopdayem+1;
           console.log(this.lopdayem)
           
         }
       }
       console.log(this.sumdays1);
       this.sumdays1=Number(this.sumdays1)+Number(this.lopdaysm)
       console.log(this.sumdays1);
       this.llimit=10-this.sumdays1
       console.log(this.llimit);
       this.leaveday = [ { viewValue: 'FullDay'}];

       console.log(this.sumdays2);
       this.sumdays2=Number(this.sumdays2)+Number(this.lopdayem)
       console.log(this.sumdays2);
       this.llimit=10-this.sumdays2
       console.log(this.llimit);
       this.leaveday = [ { viewValue: 'FullDay'}];
     }
    }
    // To show perticular month remaining days after taked leaves
     if(fmonth==todaymonth)
     {
       console.log(this.sumdays1);
       this.llimit=10-this.sumdays1
       console.log(this.llimit);
       if(this.no_days>this.llimit && todaymonth==fmonth && todaymonth==tmonth)
       {
         console.log("AB")
         alert("You cannot take leaves more than"+" "+this.llimit+" "+"available leaves.");
         this.leaveday=[];
         this.no_days="";
       }
     }
     if(fmonth==plusone)
     {
       console.log(this.sumdays2);
       this.llimit=10-this.sumdays2
       console.log(this.llimit);
       if(this.no_days>this.llimit && plusone==fmonth && plusone==tmonth)
       {
         console.log("CD")
         alert("You cannot take leaves more than"+" "+this.llimit+" "+"available leaves.");
         this.leaveday=[];
         this.no_days="";
       }
     }
      if(fmonth==todaymonth && tmonth==plusone)
      {
        var getDateArray1 = function(start, end) 
        {
          var arr = new Array();
          var df = new Date(start);
          console.log(df)
          var dt = new Date(end);
          console.log(dt)      
          while (df <= dt) 
          {
              console.log("In while loop")
              arr.push(new Date(df)); 
              df.setDate(df.getDate()+1);
          }
          console.log(arr)
          return arr;
        }
        var dateArr1 = getDateArray1(this.fdate,this.tdate);
        console.log(dateArr1);
        console.log(dateArr1.length);
        this.lopdaysm1=0;
        this.lopdayem1=0;
        for(let z=0;z<dateArr1.length;z++)
        {
          this.lop=new Date(this.datepipe.transform(dateArr1[z],'yyyy-MM-dd')) 
          console.log(this.lop);

          this.lops=this.lop.getMonth();
          console.log(this.lops);
      
          if(this.lops==todaymonth)
          {
            console.log(this.sumdays1);
            this.llimit1=10-this.sumdays1
            console.log(this.llimit1);

            this.lopdaysm1=this.lopdaysm1+1;
            console.log(this.lopdaysm1)
          }
          if(this.lops==plusone)
          {
            console.log(this.sumdays2);
            this.llimit2=10-this.sumdays2
            console.log(this.llimit2);

            this.lopdayem1=this.lopdayem1+1;
            console.log(this.lopdayem1)
          }
        }
           if(this.lopdaysm1>this.llimit1)
            {
             console.log("EF");
             alert("You cannot take leaves more than"+" "+this.llimit1+" "+"available leaves in start month.");
             this.leaveday=[];
             this.no_days="";
            }
           if(this.lopdayem1>this.llimit2)
            {
              console.log("GH");
              alert("You cannot take leaves more than"+" "+this.llimit2+" "+"available leaves in end month.");
              this.leaveday=[];
              this.no_days="";
            }
      }
    }

}
// ************************
if(aa.leavetype=="Paternity Leave")
{
  console.log("Paternity Leaves")
  for(this.i=0;this.i<this.leavereq[0].leave.length;this.i++)
 {
    if(aa.leavetype==this.leavereq[0].leave[this.i].leavetype)
    {
     this.llimit=this.leavereq[0].leave[this.i].leavebalance
     console.log(this.llimit);
     this.leaveday = [ { viewValue: 'FullDay'}]
    }
  }
 if(this.no_days>3)
  {
    alert("You cannot take more than 3 continuous day paternity leaves at one time");
    this.leaveday=[];
    this.no_days="";
    return false;
  }
  this.p=this.leavereqs1.filter(obj=>obj.leaverequest.leavetype=="Paternity Leave" && !obj.leaverequest.cancelled_on && obj.leaverequest.status=="Approved" || obj.leaverequest.status=="Pending for approval")
  console.log(this.p);
  console.log(this.p.length)
  console.log(this.p.length-1)

  for(let t=0;t<=this.p.length-1;t++)
  {
    console.log(this.p[t].leaverequest.approved_on)
    if(!this.p[t].leaverequest.cancelled_on && this.p[t].leaverequest.approved_on)
    {
    var newdd=new Date(this.datepipe.transform(this.p[t].leaverequest.approved_on))
    console.log(newdd)
    var newdoj=this.datepipe.transform(newdd ,'yyyy-MM-dd')
    console.log(newdoj)

    var fnewdd=new Date(newdd.getFullYear(),newdd.getMonth()+9,newdd.getDate())
    console.log(fnewdd)
    var newdoj1=this.datepipe.transform(fnewdd ,'yyyy-MM-dd')
    console.log(newdoj1)
    }
  }
  console.log(this.fdate);
  if(this.fdate>=newdoj && this.fdate<newdoj1 || this.p.length==1)
  {
    alert("You are already take continuous paternity leaves. So that you are applicable to take this leaves after 9 months");
    this.leaveday=[];
    this.no_days="";
  }
  else if(((this.fdate>=newdoj && this.fdate<newdoj1) || this.fdate>newdoj1) && this.p.length==2)
  {
    if(this.p.length>=2)
    {
      alert("You are already taked 2 times paternity leaves. So you are not applicable for to take paternity leaves.");
      this.leaveday=[];
      this.no_days="";
      this.llimit="";
      return false;
    }
  }
}

// Sick leave starts here
if(aa.leavetype=="Sick Leave" &&  (new Date(this.dateofjoing).getFullYear())==(new Date(this.fdate).getFullYear()))
{
  console.log("date of joining year")
  for(this.i=0;this.i<this.leavereq[0].leave.length;this.i++)
    {
    console.log(this.leavereq[0].leave[this.i].fresherleaves)
  
    if(aa.leavetype==this.leavereq[0].leave[this.i].leavetype)
    {
      this.llimit=this.leavereq[0].leave[this.i].leavebalance
       console.log(this.llimit);
    }
    }
if(this.dateofjoing>=this.fmiddleof3moth && this.dateofjoing<=this.lastof3months && (new Date(this.dateofjoing).getFullYear()==year))
{
  if(this.fdate>this.fmiddleof6moth && this.fdate<=this.lastof6months)
  {
  var pllimit=this.leavereq[0].leave[2].leavebalance;
  console.log(pllimit)
  var pllimit1=pllimit-7.5
  console.log(pllimit1)
  console.log(pllimit1+1)
  var addpllimit=pllimit1+1
  console.log(addpllimit)
  this.leaveday = [
    { viewValue: 'FullDay'}]
    
  this.dd1=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=this.fmiddleof6moth && !obj.leaverequest.cancelled_on && obj.leaverequest.approved_on<=this.lastof6months && obj.leaverequest.leavetype=="Sick Leave" && obj.leaverequest.status=="Approved"))

  console.log(this.dd1);
  for(let t=0;t<=this.dd1.length-1;t++)
  {
    // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
    this.sumdays1=this.sumdays1+parseFloat(this.dd1[t].leaverequest.no_days)
    console.log(this.sumdays1)
  }
  if(this.dd1.length==0 && this.fdate>this.fmiddleof6moth && this.fdate<=this.lastof6months)
  {
    if(this.no_days1>addpllimit)
    {
      alert("You cannot take more than" +addpllimit +"leave in this quarter")
      this.leaveday=[];
      this.no_days="";
      this.llimit="";
      return false;
    } 
 }
  else 
  {
    if(aa.leavetype=="Sick Leave" && ((this.sumdays1+this.no_days1)>addpllimit))
    {
      // var sickremain=
     alert("You cannot take more than" +pllimit1 +"leave in this quarter"  )
     this.leaveday=[];
     this.no_days="";
     this.llimit="";
     return false;
    }
   }
  }


  if(this.fdate>this.lastof6months && this.fdate<=this.lastof9months)
  {
  var pllimit=this.leavereq[0].leave[2].leavebalance;
  console.log(pllimit)
  var pllimit1=pllimit-4.5
  console.log(pllimit1)
  console.log(pllimit1+1)
  var addpllimit=pllimit1+2
  console.log(addpllimit)
  this.leaveday = [
    { viewValue: 'FullDay'}]
    
  this.dd1=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=this.lastof6months && !obj.leaverequest.cancelled_on && obj.leaverequest.approved_on<=this.lastof9months && obj.leaverequest.leavetype=="Sick Leave" && obj.leaverequest.status=="Approved"))

  console.log(this.dd1);
  for(let t=0;t<=this.dd1.length-1;t++)
  {
    // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
    this.sumdays1=this.sumdays1+parseFloat(this.dd1[t].leaverequest.no_days)
    console.log(this.sumdays1)
  }
  if(this.dd1.length==0 && this.fdate>this.lastof6months && this.fdate<=this.lastof9months)
  {
    if(this.no_days1>addpllimit)
    {
      alert("You cannot take more than" +addpllimit +"leave in this quarter")
      this.leaveday=[];
      this.no_days="";
      this.llimit="";
      return false;
    } 
 }
  else 
  {
    if(aa.leavetype=="Sick Leave" && ((this.sumdays1+this.no_days1)>addpllimit))
    {
      // var sickremain=
     alert("You cannot take more than" +pllimit1 +"leave in this quarter"  )
     this.leaveday=[];
     this.no_days="";
     this.llimit="";
     return false;
    }
   }
  }


  if(this.fdate>this.lastof9months && this.fdate<=this.lastof12months)
  {
  var pllimit=this.leavereq[0].leave[2].leavebalance;
  console.log(pllimit)
  var pllimit1=pllimit-1.5
  console.log(pllimit1)
  console.log(pllimit1+1)
  var addpllimit=pllimit1+2
  console.log(addpllimit)
  this.leaveday = [
    { viewValue: 'FullDay'}]
    
  this.dd1=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=this.lastof9months  && obj.leaverequest.approved_on<=this.lastof12months && !obj.leaverequest.cancelled_on && obj.leaverequest.leavetype=="Sick Leave" && obj.leaverequest.status=="Approved"))

  console.log(this.dd1);
  for(let t=0;t<=this.dd1.length-1;t++)
  {
    // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
    this.sumdays1=this.sumdays1+parseFloat(this.dd1[t].leaverequest.no_days)
    console.log(this.sumdays1)
  }
  if(this.dd1.length==0 && this.fdate>this.lastof9months && this.fdate<=this.lastof12months)
  {
    if(this.no_days1>addpllimit)
    {
      alert("You cannot take more than" +addpllimit +"leave in this quarter")
      this.leaveday=[];
      this.no_days="";
      this.llimit="";
      return false;
    } 
 }
  else 
  {
    if(aa.leavetype=="Sick Leave" && ((this.sumdays1+this.no_days1)>addpllimit))
    {
      // var sickremain=
     alert("You cannot take more than" +pllimit1 +"leave in this quarter"  )
     this.leaveday=[];
     this.no_days="";
     this.llimit="";
     return false;
    }
   }
  }

}

if(this.dateofjoing>=this.fmiddleof6moth && this.dateofjoing<=this.lastof6months && (new Date(this.dateofjoing).getFullYear()==year))
{
  if(this.fdate>this.fmiddleof9moth && this.fdate<=this.lastof9months)
  {
  var pllimit=this.leavereq[0].leave[2].leavebalance;
  console.log(pllimit)
  var pllimit1=pllimit-7.5
  console.log(pllimit1)
  console.log(pllimit1+1)
  var addpllimit=pllimit1+1
  console.log(addpllimit)
  this.leaveday = [
    { viewValue: 'FullDay'}]
    
  this.dd1=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=this.fmiddleof9moth && obj.leaverequest.approved_on<=this.lastof6months && !obj.leaverequest.cancelled_on && obj.leaverequest.leavetype=="Sick Leave" && obj.leaverequest.status=="Approved"))

  console.log(this.dd1);
  for(let t=0;t<=this.dd1.length-1;t++)
  {
    // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
    this.sumdays1=this.sumdays1+parseFloat(this.dd1[t].leaverequest.no_days)
    console.log(this.sumdays1)
  }
  if(this.dd1.length==0 && this.fdate>this.fmiddleof9moth && this.fdate<=this.lastof9months)
  {
    if(this.no_days1>addpllimit)
    {
      alert("You cannot take more than" +addpllimit +"leave in this quarter")
      this.leaveday=[];
      this.no_days="";
      this.llimit="";
      return false;
    } 
 }
  else 
  {
    if(aa.leavetype=="Sick Leave" && ((this.sumdays1+this.no_days1)>addpllimit))
    {
      // var sickremain=
     alert("You cannot take more than" +pllimit1 +"leave in this quarter"  )
     this.leaveday=[];
     this.no_days="";
     this.llimit="";
     return false;
    }
   }
  }


  if(this.fdate>this.lastof9months && this.fdate<=this.lastof12months)
  {
  var pllimit=this.leavereq[0].leave[2].leavebalance;
  console.log(pllimit)
  var pllimit1=pllimit-4.5
  console.log(pllimit1)
  console.log(pllimit1+1)
  var addpllimit=pllimit1+2
  console.log(addpllimit)
  this.leaveday = [
    { viewValue: 'FullDay'}]
    
  this.dd1=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=this.lastof9months && obj.leaverequest.approved_on<=this.lastof12months && !obj.leaverequest.cancelled_on && obj.leaverequest.leavetype=="Sick Leave" && obj.leaverequest.status=="Approved"))

  console.log(this.dd1);
  for(let t=0;t<=this.dd1.length-1;t++)
  {
    // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
    this.sumdays1=this.sumdays1+parseFloat(this.dd1[t].leaverequest.no_days)
    console.log(this.sumdays1)
  }
  if(this.dd1.length==0 && this.fdate>this.lastof9months && this.fdate<=this.lastof12months)
  {
    if(this.no_days1>addpllimit)
    {
      alert("You cannot take more than" +addpllimit +"leave in this quarter")
      this.leaveday=[];
      this.no_days="";
      this.llimit="";
      return false;
    } 
 }
  else 
  {
    if(aa.leavetype=="Sick Leave" && ((this.sumdays1+this.no_days1)>addpllimit))
    {
      // var sickremain=
     alert("You cannot take more than" +pllimit1 +"leave in this quarter"  )
     this.leaveday=[];
     this.no_days="";
     this.llimit="";
     return false;
    }
   }
  }


  


}

if(this.dateofjoing>=this.fmiddleof9moth && this.dateofjoing<=this.lastof9months && (new Date(this.dateofjoing).getFullYear()==year))
{
  if(this.fdate>this.fmiddleof12moth && this.fdate<=this.lastof12months)
  {
  var pllimit=this.leavereq[0].leave[2].leavebalance;
  console.log(pllimit)
  var pllimit1=pllimit-7.5
  console.log(pllimit1)
  console.log(pllimit1+1)
  var addpllimit=pllimit1+1
  console.log(addpllimit)
  this.leaveday = [
    { viewValue: 'FullDay'}]
    
  this.dd1=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=this.fmiddleof12moth && obj.leaverequest.approved_on<=this.lastof12months &&!obj.leaverequest.cancelled_on && obj.leaverequest.leavetype=="Sick Leave" && obj.leaverequest.status=="Approved"))

  console.log(this.dd1);
  for(let t=0;t<=this.dd1.length-1;t++)
  {
    // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
    this.sumdays1=this.sumdays1+parseFloat(this.dd1[t].leaverequest.no_days)
    console.log(this.sumdays1)
  }
  if(this.dd1.length==0 && this.fdate>this.fmiddleof12moth && this.fdate<=this.lastof12months)
  {
    if(this.no_days>addpllimit)
    {
      alert("You cannot take more than" +addpllimit +"leave in this quarter")
      this.leaveday=[];
      this.no_days="";
      this.llimit="";
      return false;
    } 
 }
  else 
  {
    if(aa.leavetype=="Sick Leave" && ((this.sumdays1+this.no_days1)>addpllimit))
    {
      // var sickremain=
     alert("You cannot take more than" +pllimit1 +"leave in this quarter")
     this.leaveday=[];
     this.no_days="";
     this.llimit="";
     return false;
    }
   }
  }


}

else if(this.dateofjoing>=this.startof1months && this.dateofjoing<=this.lastof3months && (new Date(this.dateofjoing).getFullYear()==year))
  {
    if(this.fdate>this.lastof3months && this.fdate<=this.lastof6months)
  {
  var pllimit=this.leavereq[0].leave[2].leavebalance;
  console.log(pllimit)
  var pllimit1=pllimit-6
  console.log(pllimit1)
  console.log(pllimit1+1)
  var addpllimit=pllimit1+2
  console.log(addpllimit)
  this.leaveday = [
    { viewValue: 'FullDay'}]
    
  this.dd1=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=this.lastof3months && obj.leaverequest.approved_on<=this.lastof6months && !obj.leaverequest.cancelled_on && obj.leaverequest.leavetype=="Sick Leave" && obj.leaverequest.status=="Approved"))

  console.log(this.dd1);
  for(let t=0;t<=this.dd1.length-1;t++)
  {
    // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
    this.sumdays1=this.sumdays1+parseFloat(this.dd1[t].leaverequest.no_days)
    console.log(this.sumdays1)
  }
  if(this.dd1.length==0 && this.fdate>this.lastof3months && this.fdate<=this.lastof6months)
  {
    if(this.no_days1>addpllimit)
    {
      alert("You cannot take more than" +addpllimit +"leave in this quarter")
      this.leaveday=[];
      this.no_days="";
      this.llimit="";
      return false;
    } 
 }
  else 
  {
    if(aa.leavetype=="Sick Leave" && ((this.sumdays1+this.no_days1)>addpllimit))
    {
      // var sickremain=
     alert("You cannot take more than" +pllimit1 +"leave in this quarter"  )
     this.leaveday=[];
     this.no_days="";
     this.llimit="";
     return false;
    }
   }
  }
  if(this.fdate>this.lastof6months && this.fdate<=this.lastof9months)
  {
  var pllimit=this.leavereq[0].leave[2].leavebalance;
  console.log(pllimit)
  var pllimit1=pllimit-3
  console.log(pllimit1)
  console.log(pllimit1+1)
  var addpllimit=pllimit1+2
  console.log(addpllimit)
  this.leaveday = [
    { viewValue: 'FullDay'}]
    
  this.dd1=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=this.lastof6months && obj.leaverequest.approved_on<=this.lastof9months && !obj.leaverequest.cancelled_on && obj.leaverequest.leavetype=="Sick Leave" && obj.leaverequest.status=="Approved"))

  console.log(this.dd1);
  for(let t=0;t<=this.dd1.length-1;t++)
  {
    // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
    this.sumdays1=this.sumdays1+parseFloat(this.dd1[t].leaverequest.no_days)
    console.log(this.sumdays1)
  }
  if(this.dd1.length==0 && this.fdate>this.lastof6months && this.fdate<=this.lastof9months)
  {
    if(this.no_days1>addpllimit)
    {
      alert("You cannot take more than" +addpllimit +"leave in this quarter")
      this.leaveday=[];
      this.no_days="";
      this.llimit="";
      return false;
    } 
 }
  else 
  {
    if(aa.leavetype=="Sick Leave" && ((this.sumdays1+this.no_days1)>addpllimit))
    {
      // var sickremain=
     alert("You cannot take more than" +pllimit1 +"leave in this quarter"  )
     this.leaveday=[];
     this.no_days="";
     this.llimit="";
     return false;
    }
   }
  }
  if(this.fdate>this.lastof9months && this.fdate<=this.lastof12months)
  {
  var pllimit=this.leavereq[0].leave[2].leavebalance;
  console.log(pllimit)
  var pllimit1=pllimit-0
  console.log(pllimit1)
  console.log(pllimit1+1)
  var addpllimit=pllimit1+2
  console.log(addpllimit)
  this.leaveday = [
    { viewValue: 'FullDay'}]
    
  this.dd1=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=this.lastof9months && obj.leaverequest.approved_on<=this.lastof12months && !obj.leaverequest.cancelled_on && obj.leaverequest.leavetype=="Sick Leave" && obj.leaverequest.status=="Approved"))

  console.log(this.dd1);
  for(let t=0;t<=this.dd1.length-1;t++)
  {
    // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
    this.sumdays1=this.sumdays1+parseFloat(this.dd1[t].leaverequest.no_days)
    console.log(this.sumdays1)
  }
  if(this.dd1.length==0 && this.fdate>this.lastof9months && this.fdate<=this.lastof12months)
  {
    if(this.no_days1>addpllimit)
    {
      alert("You cannot take more than" +addpllimit +"leave in this quarter")
      this.leaveday=[];
      this.no_days="";
      this.llimit="";
      return false;
    } 
 }
  else 
  {
    if(aa.leavetype=="Sick Leave" && ((this.sumdays1+this.no_days1)>addpllimit))
    {
      // var sickremain=
     alert("You cannot take more than" +pllimit1 +"leave in this quarter"  )
     this.leaveday=[];
     this.no_days="";
     this.llimit="";
     return false;
    }
   }
  }
  }

else if(this.dateofjoing>=this.lastof3months && this.dateofjoing<=this.lastof6months && (new Date(this.dateofjoing).getFullYear()==year))
  {
 if(this.fdate>this.lastof6months && this.fdate<=this.lastof9months)
  {
  var pllimit=this.leavereq[0].leave[2].leavebalance;
  console.log(pllimit)
  var pllimit1=pllimit-3
  console.log(pllimit1)
  console.log(pllimit1+1)
  var addpllimit=pllimit1+2
  console.log(addpllimit)
  this.leaveday = [
    { viewValue: 'FullDay'}]
    
  this.dd1=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=this.lastof6months && obj.leaverequest.approved_on<=this.lastof9months && !obj.leaverequest.cancelled_on && obj.leaverequest.leavetype=="Sick Leave" && obj.leaverequest.status=="Approved"))

  console.log(this.dd1);
  for(let t=0;t<=this.dd1.length-1;t++)
  {
    // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
    this.sumdays1=this.sumdays1+parseFloat(this.dd1[t].leaverequest.no_days)
    console.log(this.sumdays1)
  }
  if(this.dd1.length==0 && this.fdate>this.lastof6months && this.fdate<=this.lastof9months)
  {
    if(this.no_days1>addpllimit)
    {
      alert("You cannot take more than" +addpllimit +"leave in this quarter")
      this.leaveday=[];
      this.no_days="";
      this.llimit="";
      return false;
    } 
 }
  else 
  {
    if(aa.leavetype=="Sick Leave" && ((this.sumdays1+this.no_days1)>addpllimit))
    {
      // var sickremain=
     alert("You cannot take more than" +pllimit1 +"leave in this quarter"  )
     this.leaveday=[];
     this.no_days="";
     this.llimit="";
     return false;
    }
   }
  }
  if(this.fdate>this.lastof9months && this.fdate<=this.lastof12months)
  {
  var pllimit=this.leavereq[0].leave[2].leavebalance;
  console.log(pllimit)
  var pllimit1=pllimit-0
  console.log(pllimit1)
  console.log(pllimit1+1)
  var addpllimit=pllimit1+2
  console.log(addpllimit)
  this.leaveday = [
    { viewValue: 'FullDay'}]
    
  this.dd1=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=this.lastof9months && obj.leaverequest.approved_on<=this.lastof12months && !obj.leaverequest.cancelled_on && obj.leaverequest.leavetype=="Sick Leave" && obj.leaverequest.status=="Approved"))

  console.log(this.dd1);
  for(let t=0;t<=this.dd1.length-1;t++)
  {
    // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
    this.sumdays1=this.sumdays1+parseFloat(this.dd1[t].leaverequest.no_days)
    console.log(this.sumdays1)
  }
  if(this.dd1.length==0 && this.fdate>this.lastof9months && this.fdate<=this.lastof12months)
  {
    if(this.no_days1>addpllimit)
    {
      alert("You cannot take more than" +addpllimit +"leave in this quarter")
      this.leaveday=[];
      this.no_days="";
      this.llimit="";
      return false;
    } 
 }
  else 
  {
    if(aa.leavetype=="Sick Leave" && ((this.sumdays1+this.no_days1)>addpllimit))
    {
      // var sickremain=
     alert("You cannot take more than" +pllimit1 +"leave in this quarter"  )
     this.leaveday=[];
     this.no_days="";
     this.llimit="";
     return false;
    }
   }
  }
  
  }

else if(this.dateofjoing>=this.lastof6months && this.dateofjoing<=this.lastof9months && (new Date(this.dateofjoing).getFullYear()==year))
  {
    if(this.fdate>this.lastof9months && this.fdate<=this.lastof12months)
    {
    var pllimit=this.leavereq[0].leave[2].leavebalance;
    console.log(pllimit)
    var pllimit1=pllimit-0
    console.log(pllimit1)
    console.log(pllimit1+1)
    var addpllimit=pllimit1+2
    console.log(addpllimit)
    this.leaveday = [
      { viewValue: 'FullDay'}]
      
    this.dd1=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=this.lastof9months && obj.leaverequest.approved_on<=this.lastof12months && !obj.leaverequest.cancelled_on && obj.leaverequest.leavetype=="Sick Leave" && obj.leaverequest.status=="Approved"))
  
    console.log(this.dd1);
    for(let t=0;t<=this.dd1.length-1;t++)
    {
      // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
      this.sumdays1=this.sumdays1+parseFloat(this.dd1[t].leaverequest.no_days)
      console.log(this.sumdays1)
    }
    if(this.dd1.length==0 && this.fdate>this.lastof9months && this.fdate<=this.lastof12months)
    {
      if(this.no_days1>addpllimit)
      {
        alert("You cannot take more than" +addpllimit +"leave in this quarter")
        this.leaveday=[];
        this.no_days="";
        this.llimit="";
        return false;
      } 
   }
    else 
    {
      if(aa.leavetype=="Sick Leave" && ((this.sumdays1+this.no_days1)>addpllimit))
      {
        // var sickremain=
       alert("You cannot take more than" +pllimit1 +"leave in this quarter"  )
       this.leaveday=[];
       this.no_days="";
       this.llimit="";
       return false;
      }
     }
    }
  }
}

if(aa.leavetype=="Sick Leave" &&  (new Date(this.dateofjoing).getFullYear())!=(new Date(this.fdate).getFullYear()))
{
   console.log("next year")
   for(this.i=0;this.i<this.leavereq[0].leave.length;this.i++)
    {
    console.log(this.leavereq[0].leave[this.i].fresherleaves)
    if(aa.leavetype==this.leavereq[0].leave[this.i].leavetype)
    {
      this.llimit=this.leavereq[0].leave[this.i].leavebalance
       console.log(this.llimit);
    }
    }
    if(this.fdate>this.startof1months && this.fdate<=this.lastof3months)
    {
      var pllimit=this.leavereq[0].leave[2].leavebalance;
      console.log(pllimit)
      console.log(this.llimit)
      var remainpl=pllimit-9
      var remainsl=this.llimit-6
      console.log(this.no_days)
      console.log(this.no_days1)
      if(this.llimit<6 || pllimit<9)
      {
        alert("You are already take allocate SL & PL both")
        this.leaveday=[];
        this.no_days="";
        this.llimit="";
        return false;
      }
      if(this.no_days1>(remainsl + remainpl))
      {
        console.log(remainpl+remainsl)
        alert("You cannot take more than" +(remainsl+remainpl) +"leave in this quarter")
        this.leaveday=[];
        this.no_days="";
        this.llimit="";
        return false;
      }
    }
    if(this.fdate>this.lastof3months && this.fdate<=this.lastof6months)
    {
      var pllimit=this.leavereq[0].leave[2].leavebalance;
      console.log(pllimit)
      console.log(this.llimit)
      var remainpl=pllimit-6
      var remainsl=this.llimit-4
      if(this.llimit<4 || pllimit<6)
      {
        alert("You are already take allocate SL & PL both")
        this.leaveday=[];
        this.no_days="";
        this.llimit="";
        return false;
      }
      if(this.no_days1>(remainsl + remainpl))
      {
        console.log(remainpl+remainsl)
        alert("You cannot take more than" +(remainsl+remainpl) +"leave in this quarter")
        this.leaveday=[];
        this.no_days="";
        this.llimit="";
        return false;
      }
    }
    if(this.fdate>this.lastof6months && this.fdate<=this.lastof9months)
    {
      var pllimit=this.leavereq[0].leave[2].leavebalance;
      console.log(pllimit)
      console.log(this.llimit)
      var remainpl=pllimit-3
      var remainsl=this.llimit-2
      if(this.llimit<2 || pllimit<3)
      {
        alert("You are already take allocate SL & PL both")
        this.leaveday=[];
        this.no_days="";
        this.llimit="";
        return false;
      }
      if(this.no_days1>(remainsl + remainpl))
      {
        console.log(remainpl+remainsl)
        alert("You cannot take more than" +(remainsl+remainpl) +"leave in this quarter")
        this.leaveday=[];
        this.no_days="";
        this.llimit="";
        return false;
      }
    }
    if(this.fdate>this.lastof9months && this.fdate<=this.lastof12months)
    {
      var pllimit=this.leavereq[0].leave[2].leavebalance;
      console.log(pllimit)
      console.log(this.llimit)
      var remainpl=pllimit-0
      var remainsl=this.llimit-0
      if(this.llimit<0 || pllimit<0)
      {
        alert("You are already take allocate SL & PL both")
        this.leaveday=[];
        this.no_days="";
        this.llimit="";
        return false;
      }
      if(this.no_days1>(remainsl + remainpl))
      {
        console.log(remainpl+remainsl)
        alert("You cannot take more than" +(remainsl+remainpl) +"leave in this quarter")
        this.leaveday=[];
        this.no_days="";
        this.llimit="";
        return false;
      }
    }

    
}

// Full Quarter + Half Quarter(Casual Leave)

if((this.fdate>this.startof1months && this.fdate<=this.lastof3months))
{
  console.log("Jan-Mar");
  if((newdoj3>=this.fmiddleof3moth && newdoj3<=this.lastof3months))
 {
  console.log("January-March");
  console.log("Half Quarter If this Quarter is Current Quarter")

if(aa.leavetype=="Casual Leave")
{
  for(this.i=0;this.i<this.leavereq[0].leave.length;this.i++)
  {
  console.log(this.leavereq[0].leave[this.i].fresherleaves)

  if(aa.leavetype==this.leavereq[0].leave[this.i].leavetype)
  {
    this.llimit=this.leavereq[0].leave[this.i].leavebalance
     console.log(this.llimit);
  }
  }
  this.d1=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=this.fmiddleof3moth && obj.leaverequest.approved_on<=this.lastof3months && obj.leaverequest.leavetype=="Casual Leave" && !obj.leaverequest.cancelled_on && obj.leaverequest.status=="Approved"))
  console.log(this.d1);
  console.log(this.addd1)
  if(this.d1.length==0)
   {
    console.log("llllllllll")
    if(this.no_days>1)
    {
      alert("You have only take 1 CL in current Half-Quarter.")
      this.no_days="";
      this.leaveday=[]
      return false;
    } 
   }
  else
  {
    console.log(this.d1.length)
    console.log(this.d1.length-1)
    this.sumdays1=0;
  
  for(let t=0;t<=this.d1.length-1;t++)
  {
    // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
    this.sumdays1=this.sumdays1+parseFloat(this.d1[t].leaverequest.no_days)
    console.log(this.sumdays1)
  
    this.flagl=this.flagl+parseFloat(this.d1[t].leaverequest.flag)
    console.log(this.flagl)
  }
    console.log(this.addd1)
    this.addd1=this.sumdays1;
    console.log(this.addd1)
    console.log(aa.leavetype)
    // && ((this.sumdays1+this.no_days)<=1)
    if( aa.leavetype=="Casual Leave")
  {   
    var remain=1-this.sumdays1
    console.log(remain)
    if(this.sumdays1!=1)
    {
      if(this.sumdays1==0.5)
      {
        alert("You cannot take more than "+" "+remain+" "+"leave")
        this.leaveday = [ { viewValue: 'HalfDay'}]
      }
     else if(this.sumdays1==1)
      {
      alert("You already taked CL into this quarter.")
      this.no_days="";
      this.leaveday=[]
      return false;
      }
    }
    else
    {
     alert("You already take CL into this quarter.")
     this.no_days="";
     this.leaveday=[]
     return false;
    }
  }
  }
}

// if(aa.leavetype=="Sick Leave")
// {
//   for(this.i=0;this.i<this.leavereq[0].leave.length;this.i++)
//   {
//   console.log(this.leavereq[0].leave[this.i].fresherleaves)

//   if(aa.leavetype==this.leavereq[0].leave[this.i].leavetype)
//   {
//     this.llimit=this.leavereq[0].leave[this.i].leavebalance
//      console.log(this.llimit);
//   }
//   }
//   this.leaveday = [
//     { viewValue: 'FullDay'}]
//   this.dd1=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=this.fmiddleof3moth && obj.leaverequest.approved_on<=this.lastof3months && obj.leaverequest.leavetype=="Sick Leave" && obj.leaverequest.status=="Approved"))
//   console.log(this.dd1);
//   for(let t=0;t<=this.dd1.length-1;t++)
//   {
//     // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
//     this.sumdays1=this.sumdays1+parseFloat(this.dd1[t].leaverequest.no_days)
//     console.log(this.sumdays1)
//   }
//   if(this.dd1.length==0)
//   {
//     if(this.no_days<1)
//     {
//       alert("You have only take 1 SL")
//     } 
//  }
//   else 
//   {
//     if(aa.leavetype=="Sick Leave" && ((this.sumdays1+this.no_days)<1))
//     {
//      alert("You already taken SL in this quarter if you want more then your leave deducted from your PL")
//     }
//    }
//   }
}
 else
  {
  console.log("January-March");
  console.log("Full Quarter");
  if(aa.leavetype=="Casual Leave")
  {
    for(this.i=0;this.i<this.leavereq[0].leave.length;this.i++)
    {
    console.log(this.leavereq[0].leave[this.i].fresherleaves)
    if(aa.leavetype==this.leavereq[0].leave[this.i].leavetype)
    {
      this.llimit=this.leavereq[0].leave[this.i].leavebalance
      console.log(this.llimit);
    }
    }
  var d=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=this.startof1months && obj.leaverequest.approved_on<=this.lastof3months && !obj.leaverequest.cancelled_on && obj.leaverequest.leavetype=="Casual Leave" && obj.leaverequest.status=="Approved"))
  console.log(d);
  console.log(this.addd)
  if(d.length==0)
  {
    console.log("kkkkkkkk")
    if(this.no_days>2)
    {
      alert("You have only take 2 CL in current Quarter.")
      this.no_days="";
      this.leaveday=[]
      return false;
    } 
  }
  else
  {
    console.log(d.length)
    console.log(d.length-1)
    this.sumdays=0;
    this.flagl=0;
    for(let t=0;t<=d.length-1;t++)
    {
      // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
      this.sumdays=this.sumdays+parseFloat(d[t].leaverequest.no_days)
      console.log(this.sumdays)
      this.flagl=this.flagl+parseFloat(d[t].leaverequest.flag)
      console.log(this.flagl)
    }
      console.log(this.addd)
      this.addd=this.sumdays;
      console.log(this.addd)
      
      if( aa.leavetype=="Casual Leave")
      {   
        var remain=2-this.sumdays
        console.log(remain)
        if(this.sumdays<=2)
        {
          if(this.sumdays==1.5)
          {
            alert("You cannot take more than "+" "+remain+" "+"leave")
            this.leaveday = [ { viewValue: 'HalfDay'}]
          }
         else if(this.sumdays==2)
          {
          alert("You already taked CL into this quarter.")
          this.no_days="";
          this.leaveday=[]
          return false;
          }
        }
        else
        // if((this.no_days+this.sumdays)>2 && remain==0)
        {
         alert("You already take CL into this quarter.")
         this.no_days="";
         this.leaveday=[]
         return false;
        }
      }
  }
 }

//  if(aa.leavetype=="Sick Leave")
// {
//   for(this.i=0;this.i<this.leavereq[0].leave.length;this.i++)
//   {
//   console.log(this.leavereq[0].leave[this.i].fresherleaves)

//   if(aa.leavetype==this.leavereq[0].leave[this.i].leavetype)
//   {
//     this.llimit=this.leavereq[0].leave[this.i].leavebalance
//      console.log(this.llimit);
//   }
//   }
//   this.leaveday = [
//     { viewValue: 'FullDay'}]
//   var e1=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=this.startof1months && obj.leaverequest.approved_on<=this.lastof3months && obj.leaverequest.leavetype=="Sick Leave" && obj.leaverequest.status=="Approved"))
//   console.log(e1);
//   console.log(this.addd)

  
//   if(e1.length==0)
//   {
//     if(this.no_days>3)
//     {
//       alert("If u take more than 3 leaves you have to submit medical certificate to your HR ")
//     }
//     if(this.no_days>2 && this.no_days<=3)
//     {
//       alert("You have only 2 leaves allocated in this quarter remaining leave will be deducted from your PL")
//     }
//     }
//   else
//   {
//     console.log(e1.length)
//     console.log(e1.length-1)
//     this.sumdays=0;
//     this.flagl=0;
//     for(let t=0;t<=e1.length-1;t++)
//     {
//       // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
//       this.sumdays=this.sumdays+parseFloat(e1[t].leaverequest.no_days)
//       console.log(this.sumdays)
//     }
//       console.log(this.addd)
//       if( aa.leavetype=="Sick Leave" && ((this.sumdays+this.no_days)>2))
//       {
//         alert("You have only 2 leaves allocated in this quarter remaining leave will be deducted from your PL")

//       }
//       else if( aa.leavetype=="Sick Leave" && ((this.sumdays+this.no_days)<=2))
//       {
//         // alert("Your leaves are deducted from PL")
//         console.log("okkk")
//       }
//     }
//    }
 }
}

if((this.fdate>this.lastof3months && this.fdate<=this.lastof6months))
{
  console.log("Apr-Jun")
  console.log(newdoj3);
  console.log(this.fmiddleof3moth)

  if((newdoj3>=this.fmiddleof6moth && newdoj3<=this.lastof6months))
  {
   console.log("April-June");
   console.log("Half Quarter If this Quarter is Current Quarter")
   if(aa.leavetype=="Casual Leave")
  {
    for(this.i=0;this.i<this.leavereq[0].leave.length;this.i++)
    {
    console.log(this.leavereq[0].leave[this.i].fresherleaves)
  
    if(aa.leavetype==this.leavereq[0].leave[this.i].leavetype)
    {
      this.llimit=this.leavereq[0].leave[this.i].leavebalance
       console.log(this.llimit);
    }
    }
  this.a1=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=this.fmiddleof6moth && obj.leaverequest.approved_on<=this.lastof6months && !obj.leaverequest.cancelled_on &&  obj.leaverequest.leavetype=="Casual Leave" && obj.leaverequest.status=="Approved"))
  console.log(this.a1);
  console.log(this.adda1)
  if(this.a1.length==0)
  {
    console.log("llllllllll")
    if(this.no_days>1)
    {
      alert("You have only take 1 CL in current Half-Quarter.")
      this.no_days="";
      this.leaveday=[]
      return false;
    } 
  }
  else
  {
    console.log(this.a1.length)
    console.log(this.a1.length-1)
    this.sumdays1=0;
  
  for(let t=0;t<=this.a1.length-1;t++)
  {
    // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
    this.sumdays1=this.sumdays1+parseFloat(this.a1[t].leaverequest.no_days)
    console.log(this.sumdays1)
  
    this.flagl=this.flagl+parseFloat(this.a1[t].leaverequest.flag)
      console.log(this.flagl)
  }
    console.log(this.adda1)
    this.adda1=this.sumdays1;
    console.log(this.adda1)
    console.log(aa.leavetype)

  if( aa.leavetype=="Casual Leave")
  {   
    var remain=1-this.sumdays1
    console.log(remain)
    if(this.sumdays1!=1)
    {
      if(this.sumdays1==0.5 && remain!=0)
      {
        alert("You cannot take more than "+" "+remain+" "+"leave")
        this.leaveday = [ { viewValue: 'HalfDay'}]
      }
     else if(this.sumdays1==1 && remain==0)
      {
      alert("You already taked CL into this quarter.")
      this.no_days="";
      this.leaveday=[]
      return false;
      }
    }
    else
    {
     alert("You already take CL into this quarter.")
     this.no_days="";
     this.leaveday=[]
     return false;
    }
  }
  }
}

// if(aa.leavetype=="Sick Leave")
// {
//   for(this.i=0;this.i<this.leavereq[0].leave.length;this.i++)
//   {
//   console.log(this.leavereq[0].leave[this.i].fresherleaves)

//   if(aa.leavetype==this.leavereq[0].leave[this.i].leavetype)
//   {
//     this.llimit=this.leavereq[0].leave[this.i].leavebalance
//      console.log(this.llimit);
//   }
//   }
//   this.leaveday = [
//     { viewValue: 'FullDay'}]
//   this.aa1=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=this.fmiddleof6moth && obj.leaverequest.approved_on<=this.lastof6months &&  obj.leaverequest.leavetype=="Sick Leave" && obj.leaverequest.status=="Approved"))
//   console.log(this.aa1);
//   for(let t=0;t<=this.aa1.length-1;t++)
//   {
//     // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
//     this.sumdays1=this.sumdays1+parseFloat(this.aa1[t].leaverequest.no_days)
//     console.log(this.sumdays1)
//   }
//   if(this.aa1.length==0)
//   {
//     if(this.no_days<1)
//     {
//       alert("You have only take 1 SL")
//     } 
//  }
//   else 
//   {
//     if(aa.leavetype=="Sick Leave" && ((this.sumdays1+this.no_days)<1))
//     {
//      alert("You already taken SL in this quarter if you want more then your leave deducted from your PL")
//     }
//    }
//   }
}
else
{
  console.log("April-June");
  console.log("Full Quarter")
  if(aa.leavetype=="Casual Leave")
  {
    for(this.i=0;this.i<this.leavereq[0].leave.length;this.i++)
    {
    console.log(this.leavereq[0].leave[this.i].fresherleaves)
  
    if(aa.leavetype==this.leavereq[0].leave[this.i].leavetype)
    {
      this.llimit=this.leavereq[0].leave[this.i].leavebalance
       console.log(this.llimit);
    }
    }
  var a=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=this.lastof3months && obj.leaverequest.approved_on<=this.lastof6months && !obj.leaverequest.cancelled_on && obj.leaverequest.leavetype=="Casual Leave" && obj.leaverequest.status=="Approved"))
  console.log(a);
  console.log(this.adda)
  if(a.length==0)
  {
    console.log("kkkkkkkk")
    if(this.no_days>2)
    {
      alert("You have only take 2 CL in current Quarter.")
      this.no_days="";
      this.leaveday=[]
      return false;
    } 
  }
  else
  {
    console.log(a.length)
    console.log(a.length-1)
    this.sumdays=0;
    this.flagl=0;
    for(let t=0;t<=a.length-1;t++)
    {
      // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
      this.sumdays=this.sumdays+parseFloat(a[t].leaverequest.no_days)
      console.log(this.sumdays)
      this.flagl=this.flagl+parseFloat(a[t].leaverequest.flag)
      console.log(this.flagl)
    }
      console.log(this.adda)
      this.adda=this.sumdays;
      console.log(this.adda)
      if( aa.leavetype=="Casual Leave")
      {   
        var remain=2-this.sumdays
        console.log(remain)
        if(this.sumdays!=2)
        {
          if(this.sumdays==1.5)
          {
            alert("You cannot take more than "+" "+remain+" "+"leave")
            this.leaveday = [ { viewValue: 'HalfDay'}]
          }
         else if(this.sumdays==2)
          {
          alert("You already taked CL into this quarter.")
          this.no_days="";
          this.leaveday=[]
          return false;
          }
        }
        else
        {
         alert("You already take CL into this quarter.")
         this.no_days="";
         this.leaveday=[]
         return false;
        }
      }
  }
}
// if(aa.leavetype=="Sick Leave")
// {
//   for(this.i=0;this.i<this.leavereq[0].leave.length;this.i++)
//   {
//   console.log(this.leavereq[0].leave[this.i].fresherleaves)

//   if(aa.leavetype==this.leavereq[0].leave[this.i].leavetype)
//   {
//     this.llimit=this.leavereq[0].leave[this.i].leavebalance
//      console.log(this.llimit);
//   }
//   }
//   this.leaveday = [
//     { viewValue: 'FullDay'}]
//   var e2=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=this.lastof3months && obj.leaverequest.approved_on<=this.lastof6months && obj.leaverequest.leavetype=="Sick Leave" && obj.leaverequest.status=="Approved"))
//   console.log(e2);
//   console.log(this.adda)

  
//   if(e2.length==0)
//   {
//     if(this.no_days>3)
//     {
//       alert("If u take more than 3 leaves you have to submit medical certificate to your HR ")
//     }
//     if(this.no_days>2 && this.no_days<=3)
//     {
//       alert("You have only 2 leaves allocated in this quarter remaining leave will be deducted from your PL")
//     }
//     }
//   else
//   {
//     console.log(e2.length)
//     console.log(e2.length-1)
//     this.sumdays=0;
//     this.flagl=0;
//     for(let t=0;t<=e2.length-1;t++)
//     {
//       // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
//       this.sumdays=this.sumdays+parseFloat(e2[t].leaverequest.no_days)
//       console.log(this.sumdays)
//     }
//       console.log(this.addd)
//       if( aa.leavetype=="Sick Leave" && ((this.sumdays+this.no_days)>2))
//       {
//         alert("You have only 2 leaves allocated in this quarter remaining leave will be deducted from your PL")

//       }
//       else if( aa.leavetype=="Sick Leave" && ((this.sumdays+this.no_days)<=2))
//       {
//         // alert("Your leaves are deducted from PL")
//         console.log("okkk")
//       }
//     }
//    }
  }
}
if((this.fdate>this.lastof6months && this.fdate<=this.lastof9months))
{
  console.log("Jul-Sep")
  if((newdoj3>=this.fmiddleof9moth && newdoj3<=this.lastof9months))
  {
   console.log("July-September");
   console.log("Half Quarter If this Quarter is Current Quarter")
   if(aa.leavetype=="Casual Leave")
   {
    for(this.i=0;this.i<this.leavereq[0].leave.length;this.i++)
    {
    console.log(this.leavereq[0].leave[this.i].fresherleaves)
    if(aa.leavetype==this.leavereq[0].leave[this.i].leavetype)
    {
      this.llimit=this.leavereq[0].leave[this.i].leavebalance
      console.log(this.llimit);
    }
    }
   this.b1=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=this.fmiddleof9moth && obj.leaverequest.approved_on<=this.lastof9months && !obj.leaverequest.cancelled_on && obj.leaverequest.leavetype=="Casual Leave" && obj.leaverequest.status=="Approved"))
   console.log(this.b1);
   console.log(this.addb1)
   if(this.b1.length==0)
   {
     console.log("llllllllll")
     if(this.no_days>1)
     {
       alert("You have only take 1 CL in current Half Quarter.")
       this.no_days="";
       this.leaveday=[]
       return false;
     } 
   }
   else
   {
     console.log(this.b1.length)
     console.log(this.b1.length-1)
     this.sumdays1=0;
   
   for(let t=0;t<=this.b1.length-1;t++)
   {
     // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
     this.sumdays1=this.sumdays1+parseFloat(this.b1[t].leaverequest.no_days)
     console.log(this.sumdays1)
   
     this.flagl=this.flagl+parseFloat(this.b1[t].leaverequest.flag)
       console.log(this.flagl)
   }
     console.log(this.addb1)
     this.addb1=this.sumdays1;
     console.log(this.addb1)
     console.log(aa.leavetype)
    
     if( aa.leavetype=="Casual Leave")
     {   
       var remain=1-this.sumdays1
       console.log(remain)
       if(this.sumdays1!=1)
       {
         if(this.sumdays1==0.5)
         {
           alert("You cannot take more than "+" "+remain+" "+"leave")
           this.leaveday = [ { viewValue: 'HalfDay'}]
         }
        else if(this.sumdays1==1)
         {
         alert("You already taked CL into this quarter.")
         this.no_days="";
         this.leaveday=[]
         return false;
         }
       }
       else
      //  if((this.no_days+this.sumdays1)>1 && remain==0)
       {
        alert("You already take CL into this quarter.")
        this.no_days="";
        this.leaveday=[]
        return false;
       }
     }
   }
 }
//  if(aa.leavetype=="Sick Leave")
//  {
//   for(this.i=0;this.i<this.leavereq[0].leave.length;this.i++)
//   {
//   console.log(this.leavereq[0].leave[this.i].fresherleaves)

//   if(aa.leavetype==this.leavereq[0].leave[this.i].leavetype)
//   {
//     this.llimit=this.leavereq[0].leave[this.i].leavebalance
//      console.log(this.llimit);
//   }
//   }
//    this.leaveday = [
//      { viewValue: 'FullDay'}]
//    this.bb1=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=this.fmiddleof9moth && obj.leaverequest.approved_on<=this.lastof9months && obj.leaverequest.leavetype=="Sick Leave" && obj.leaverequest.status=="Approved"))
//    console.log(this.bb1);
//    for(let t=0;t<=this.bb1.length-1;t++)
//    {
//      // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
//      this.sumdays1=this.sumdays1+parseFloat(this.bb1[t].leaverequest.no_days)
//      console.log(this.sumdays1)
//    }
//    if(this.bb1.length==0)
//    {
//      if(this.no_days>1)
//      {
//        alert("You have only take 1 SL")
//      } 
//   }
//    else 
//    {
//      if(aa.leavetype=="Sick Leave" && ((this.sumdays1+this.no_days)>1))
//      {
//       alert("You already taken SL in this quarter if you want more then your leave will be deducted from your PL")
//      }
//    }
//  }
  }
  else
  {
    console.log("July-September");
    console.log("Full Quarter");
    console.log(aa.leavetype)

  if(aa.leavetype=="Casual Leave")
  {
    for(this.i=0;this.i<this.leavereq[0].leave.length;this.i++)
    {
    console.log(this.leavereq[0].leave[this.i].fresherleaves)
    if(aa.leavetype==this.leavereq[0].leave[this.i].leavetype)
    {
      this.llimit=this.leavereq[0].leave[this.i].leavebalance
      console.log(this.llimit);
    }
    }
  this.b=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=this.lastof6months && obj.leaverequest.approved_on<=this.lastof9months && !obj.leaverequest.cancelled_on  && obj.leaverequest.leavetype=="Casual Leave" && obj.leaverequest.status=="Approved"))
  console.log(this.b);
  console.log(this.addb)
  if(this.b.length==0)
  {
    console.log("llllllllll")
    if(this.no_days>2)
    {
      alert("You have only take 2 CL in current Quarter.")
      this.no_days="";
      this.leaveday=[]
      return false;
    } 
  }
  else
  {
    console.log(this.b.length)
    console.log(this.b.length-1)
    this.sumdays=0;
  
  for(let t=0;t<=this.b.length-1;t++)
  {
    // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
    this.sumdays=this.sumdays+parseFloat(this.b[t].leaverequest.no_days)
    console.log(this.sumdays)
  
    this.flagl=this.flagl+parseFloat(this.b[t].leaverequest.flag)
      console.log(this.flagl)
  }
    console.log(this.addb)
    console.log(aa.leavetype)
    this.addb=this.sumdays;
    console.log(this.addb)
  
    if( aa.leavetype=="Casual Leave")
      {   
        var remain=2-this.sumdays
        console.log(remain)
        if(this.sumdays!=2)
        {
          if(this.sumdays==1.5)
          {
            alert("You cannot take more than "+" "+remain+" "+"leave")
            this.leaveday = [ { viewValue: 'HalfDay'}]
          }
         else if(this.sumdays==2)
          {
          alert("You already taked CL into this quarter.")
          this.no_days="";
          this.leaveday=[]
          return false;
          }
        }
        else
        // if((this.no_days+this.sumdays)>2 && remain==0)
        {
         alert("You already take CL into this quarter.")
         this.no_days="";
         this.leaveday=[]
         return false;
        }
      }
}
}
// if(aa.leavetype=="Sick Leave")
// {
//   for(this.i=0;this.i<this.leavereq[0].leave.length;this.i++)
//   {
//   console.log(this.leavereq[0].leave[this.i].fresherleaves)

//   if(aa.leavetype==this.leavereq[0].leave[this.i].leavetype)
//   {
//     this.llimit=this.leavereq[0].leave[this.i].leavebalance
//      console.log(this.llimit);
//   }
//   }
//   this.leaveday = [
//     { viewValue: 'FullDay'}]
//   var e=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=this.lastof6months && obj.leaverequest.approved_on<=this.lastof9months && obj.leaverequest.leavetype=="Sick Leave" && obj.leaverequest.status=="Approved"))
//   console.log(e);
//   console.log(this.addb)

  
//   if(e.length==0)
//   {
//     if(this.no_days>3)
//     {
//       alert("If u take more than 3 leaves you have to submit medical certificate to your HR ")
//     }
//     if(this.no_days>2 && this.no_days<=3)
//     {
//       alert("You have only 2 leaves allocated in this quarter remaining leave will be deducted from your PL")
//     }
//   }
//   else
//   {
//     console.log(e.length)
//     console.log(e.length-1)
//     this.sumdays=0;
//     this.flagl=0;
//     for(let t=0;t<=e.length-1;t++)
//     {
//       // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
//       this.sumdays=this.sumdays+parseFloat(e[t].leaverequest.no_days)
//       console.log(this.sumdays)
//     }
//       console.log(this.addb)
//       if( aa.leavetype=="Sick Leave" && ((this.sumdays+this.no_days)>2))
//       {
//         alert("You have only 2 leaves allocated in this quarter remaining leave will be deducted from your PL")

//       }
//       else if( aa.leavetype=="Sick Leave" && ((this.sumdays+this.no_days)<=2))
//       {
//         // alert("Your leaves are deducted from PL")
//         console.log("okkk")
//       }
//     }
//    }
  }

}

if((this.fdate>this.lastof9months && this.fdate<=this.lastof12months))
{
  console.log("Oct-Dec")
  if((newdoj3>=this.fmiddleof12moth && newdoj3<=this.lastof12months))
  {
   console.log("Octomber-December");
   console.log("Half Quarter If this Quarter is Current Quarter")
   if(aa.leavetype=="Casual Leave")
   {
    for(this.i=0;this.i<this.leavereq[0].leave.length;this.i++)
    {
    console.log(this.leavereq[0].leave[this.i].fresherleaves)
    if(aa.leavetype==this.leavereq[0].leave[this.i].leavetype)
    {
      this.llimit=this.leavereq[0].leave[this.i].leavebalance
      console.log(this.llimit);
    }
    }
   this.c1=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=this.fmiddleof12moth && obj.leaverequest.approved_on<=this.lastof12months && !obj.leaverequest.cancelled_on && obj.leaverequest.leavetype=="Casual Leave" && obj.leaverequest.status=="Approved"))
   console.log(this.c1);
   console.log(this.addc1)
   if(this.c1.length==0)
   {
     console.log("llllllllll");
     if(this.no_days>1)
     {
       alert("You have only take 1 CL in current Half- Quarter.")
       this.no_days="";
       this.leaveday=[]
       return false;
     } 

   }
   else
   {
     console.log(this.c1.length)
     console.log(this.c1.length-1)
     this.sumdays1=0;
   
   for(let t=0;t<=this.c1.length-1;t++)
   {
     // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
     this.sumdays1=this.sumdays1+parseFloat(this.c1[t].leaverequest.no_days)
     console.log(this.sumdays1)
   
     this.flagl=this.flagl+parseFloat(this.c1[t].leaverequest.flag)
       console.log(this.flagl)
   }
     console.log(this.addc1)
     this.addc1=this.sumdays1;
     console.log(this.addc1)
     console.log(aa.leavetype)
   
  if( aa.leavetype=="Casual Leave")
    {   
    var remain=1-this.sumdays1
    console.log(remain)
    if(this.sumdays1!=1)
    {
      if(this.sumdays1==0.5)
      {
        alert("You cannot take more than "+" "+remain+" "+"leave")
        this.leaveday = [ { viewValue: 'HalfDay'}]
      }
     else if(this.sumdays1==1)
      {
      alert("You already taked CL into this quarter.")
      this.no_days="";
      this.leaveday=[]
      return false;
      }
    }
    else
    // if((this.no_days+this.sumdays1)>1 && remain==0)
    {
     alert("You already take CL into this quarter.")
     this.no_days="";
     this.leaveday=[]
     return false;
    }
   }
   }
 }
//  if(aa.leavetype=="Sick Leave")
//  {
//   for(this.i=0;this.i<this.leavereq[0].leave.length;this.i++)
//   {
//   console.log(this.leavereq[0].leave[this.i].fresherleaves)

//   if(aa.leavetype==this.leavereq[0].leave[this.i].leavetype)
//   {
//     this.llimit=this.leavereq[0].leave[this.i].leavebalance
//      console.log(this.llimit);
//   }
//   }
//    this.leaveday = [
//      { viewValue: 'FullDay'}]
//    this.cc1=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=this.fmiddleof12moth && obj.leaverequest.approved_on<=this.lastof12months && obj.leaverequest.leavetype=="Sick Leave" && obj.leaverequest.status=="Approved"))
//    console.log(this.cc1);
//    for(let t=0;t<=this.cc1.length-1;t++)
//    {
//      // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
//      this.sumdays1=this.sumdays1+parseFloat(this.cc1[t].leaverequest.no_days)
//      console.log(this.sumdays1)
//    }
//    if(this.cc1.length==0)
//    {
//      if(this.no_days<1)
//      {
//        alert("You have only take 1 SL")
//      } 
//   }
//    else 
//    {
//      if(aa.leavetype=="Sick Leave" && ((this.sumdays1+this.no_days)<1))
//      {
//       alert("You already taken SL in this quarter if you want more then your leave deducted from your PL")
//      }
//    }
//   }
  }
  else
  {
    console.log("Octomber-December");
    console.log("Full Quarter");
  if(aa.leavetype=="Casual Leave")
  {
    for(this.i=0;this.i<this.leavereq[0].leave.length;this.i++)
    {
    console.log(this.leavereq[0].leave[this.i].fresherleaves)
    if(aa.leavetype==this.leavereq[0].leave[this.i].leavetype)
    {
      this.llimit=this.leavereq[0].leave[this.i].leavebalance
      console.log(this.llimit);
    }
    }
  var c=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=this.lastof9months && obj.leaverequest.approved_on<=this.lastof12months && !obj.leaverequest.cancelled_on && obj.leaverequest.leavetype=="Casual Leave" && obj.leaverequest.status=="Approved"))
console.log(c);
console.log(this.addc)
if(c.length==0){
  console.log("jjjjj")
  if(this.no_days>2)
  {
    alert("You have only take 2 CL in current Quarter.")
    this.no_days="";
    this.leaveday=[]
    return false;
  } 
}
else{          
  console.log(c.length)
  console.log(c.length-1)
  this.sumdays=0;
  for(let t=0;t<=c.length-1;t++)
  {
    // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
    this.sumdays=this.sumdays+parseFloat(c[t].leaverequest.no_days)
    console.log(this.sumdays)
    this.flagl=this.flagl+parseFloat(c[t].leaverequest.flag)
    console.log(this.flagl)
  }
    console.log(this.addc)
    this.addc=this.sumdays;
    console.log(this.addc)

    if( aa.leavetype=="Casual Leave")
    {   
      var remain=2-this.sumdays
      console.log(remain)
      if(this.sumdays!=2)
      {
        if(this.sumdays==1.5)
        {
          alert("You cannot take more than "+" "+remain+" "+"leave")
          this.leaveday = [ { viewValue: 'HalfDay'}]
        }
       else if(this.sumdays==2)
        {
        alert("You already taked CL into this quarter.")
        this.no_days="";
        this.leaveday=[]
        return false;
        }
      }
      else
      // if((this.no_days+this.sumdays)>2 && remain==0)
      {
       alert("You already take CL into this quarter.")
       this.no_days="";
       this.leaveday=[]
       return false;
      }
    }
}
  }
// if(aa.leavetype=="Sick Leave")
// {
//   for(this.i=0;this.i<this.leavereq[0].leave.length;this.i++)
//   {
//   console.log(this.leavereq[0].leave[this.i].fresherleaves)

//   if(aa.leavetype==this.leavereq[0].leave[this.i].leavetype)
//   {
//     this.llimit=this.leavereq[0].leave[this.i].leavebalance
//      console.log(this.llimit);
//   }
//   }
//   this.leaveday = [
//     { viewValue: 'FullDay'}]
//   var e3=this.leavereqs1.filter(obj=>(obj.leaverequest.approved_on>=this.lastof9months && obj.leaverequest.approved_on<=this.lastof12months && obj.leaverequest.leavetype=="Sick Leave" && obj.leaverequest.status=="Approved"))
//   console.log(e3);
//   console.log(this.addc)

  
//   if(e3.length==0)
//   {
//     if(this.no_days>3)
//     {
//       alert("If u take more than 3 leaves you have to submit medical certificate to your HR ")
//     }
//     if(this.no_days>2 && this.no_days<=3)
//     {
//       alert("You have only 2 leaves allocated in this quarter remaining leave will be deducted from your PL")
//     }
//   }
//   else
//   {
//     console.log(e3.length)
//     console.log(e3.length-1)
//     this.sumdays=0;
//     this.flagl=0;
//     for(let t=0;t<=e3.length-1;t++)
//     {
//       // console.log(b[0].leaverequest.no_days+b[b.length-1].leaverequest.no_days)
//       this.sumdays=this.sumdays+parseFloat(e3[t].leaverequest.no_days)
//       console.log(this.sumdays)
//     }
//       console.log(this.addb)
//       if( aa.leavetype=="Sick Leave" && ((this.sumdays+this.no_days)>2))
//       {
//         alert("You have only 2 leaves allocated in this quarter remaining leave will be deducted from your PL")

//       }
//       else if( aa.leavetype=="Sick Leave" && ((this.sumdays+this.no_days)<=2))
//       {
//         // alert("Your leaves are deducted from PL")
//         console.log("okkk")
//       }
//     }
//    }
  }
}

}

open(dialog: Md2Dialog) {
  dialog.open();
  }
  close(dialog: any) {
    dialog.close();
    }

pqr(){
  if(this.leavefor=="HalfDay"){
    this.too=this.fromm;
    console.log(this.too)
  } 
  else  if(this.leavefor=="FullDay"){
    this.too=this.too1;
    console.log(this.too)
    // this.no_days="1";
  }
}
no_days1;

abc()
{
  document.getElementById("todt").style.display="none";

 console.log("Leave for = "+this.leavefor)  
 if(this.leavefor=="HalfDay"){
   this.no_days1 = "0.5";
   console.log(this.no_days1)
  //  this.ngOnInit();
    // this.pqr();
 }
// else{
// return this.no_days
// }
 else if(this.leavefor=="FullDay") {
  //  this.dateLessThan(this.fdate,this.tdate)
  document.getElementById("todt").style.display="block";
  console.log(this.numdays)
  this.no_days1=this.no_days;
  
    if(this.no_days>this.t2date){
       alert( this.leavwtype + "permits maximum of" +this.t2date+ "leaves.")
      this.no_days='';
      console.log(this.no_days)
 
    }
  }

}

diff1(aa)
{
  console.log(this.fdate)
  console.log(this.tdate)
   this.tdate=this.datepipe.transform(this.tdate,'yyyy-MM-dd') 
   if(this.fdate==this.tdate){
    this.no_days1=1;
  }
 
  console.log(aa)
//  console.log(bb)
//  console.log(cc)
     
  if(aa=="Maternity Leave")
{
  var ml=this.leavereqs1.filter(obj=>(obj.leaverequest.leavetype=="Maternity Leave" && obj.leaverequest.status=="Approved"))
 console.log(ml)
 this.leaveday= [
  { viewValue: 'FullDay'}]
  console.log(ml.length)
 if(ml.length<2)
 {
   var ca=parseInt(this.pl[0].leave[2].leavebalance)+Number (182)
  //  console.log(ca+this.llimit)
  console.log(ca)
  console.log(this.no_days1)
  if(this.no_days1>ca)
  {
    alert("You cannot take more than"+" " +ca +" "+" leaves,if you want more than allocated leaves please contact to HR & select leave without pay option.");
    this.no_days="";
    this.leaveday=[];
    return false;
  }
  }
  if(ml.length>=2)
  {
    alert("You already taken Maternity Leave")
    return false;
  }
  
  console.log(this.numdays)
  this.no_days1=this.numdays
}
else
{
  if(this.leavefor=="HalfDay")
{
  this.no_days1 = "0.5";
  console.log(this.no_days1)
}
else{
  console.log(this.no_days)
// console.log(this.numdays)
if(this.no_days<=2 && (aa=="Casual Leave" || aa=="Sick Leave"))
{
this.no_days1=this.no_days
console.log(this.no_days1)
}
else
{
  this.no_days1=this.numdays
  console.log(this.no_days1)
}
}
}
}




leaveapply(email,email1,firstname,lastname,no_days,leavetype,from_date,to_date,reason,leavelimit,comments)
{

  var reportingmanager=this.employee.official[0].reporting_mid
let obj = this.officiald.find(obj => obj.id == reportingmanager);

let obj1 = this.officiald.find(obj1 => obj1.official[0].role == 'HR');
  console.log(obj1.official[0].email)


email=[this.employee.official[0].email,obj1.official[0].email];
email1=obj.official[0].email;
firstname=this.employee.official[0].firstname
lastname=this.employee.official[0].lastname


console.log(email);
console.log(email1);


console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj")
console.log(obj)
console.log(obj.official[0].email)
console.log(reportingmanager)
console.log(email)
console.log(email1)

console.log(firstname)
console.log(lastname)
console.log(no_days)
console.log(from_date)
console.log(to_date)
console.log(reason)
console.log(firstname)
var base=this.restangular.all('/leaverequest')

base.post({email,email1,firstname:firstname,lastname:lastname,no_days:no_days,leavetype:leavetype,from_date:from_date,to_date:to_date,reason:reason,leavelimit:leavelimit,comments:comments}).toPromise().then(res=>{
console.log(res)
email="";
email1="";
firstname="";
lastname="";
no_days="";
leavetype="";
from_date="";
to_date="";
reason="";
leavelimit="";
comments="";
console.log(no_days)
if(res.succes){
this.messageClass='alert alert-Success';
this.message=res.msg;
this.setval=true;
setTimeout(() => {this.setval=false;},3000);

console.log("succccccc")
}else{

this.messageClass='alert alert-danger';
this.message=res.msg;
this.setval=true;
setTimeout(() => {this.setval=false;},3000);
console.log("fail")
}

})
}


aaaa(){
  document.getElementById('demo').style.display='block'
}

diff(fromdate,todate){ 

// this.ngOnInit();
var date2 = new Date(todate);
var date1 = new Date(fromdate);
// var dam = todate.getTime()
var timeDiff = Math.abs(date2.getTime() - date1.getTime());
this.numdays = Math.ceil(timeDiff / (24*3600*1000))+1;
console.log("Number of Days is " + this.numdays); 
// this.ngOnInit();
console.log(this.leavefor);
if(this.leavefor=="HalfDay")
{
  this.no_days1 = "0.5";
  console.log(this.no_days1)
}
else
{
// this.no_days1=this.numdays;
// console.log(this.no_days1)
if(this.no_days<=2)
{
this.no_days1=this.no_days
console.log(this.no_days1)
}
else
{
  this.no_days1=this.numdays
  console.log(this.no_days1)
}
}


return this.no_days1;
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
   windowResize(model: any) {
      console.log('The calendar has adjusted to a window resize');
    }
    viewRender(model: any,data) {
      console.log('viewRender');
      console.log(model)
      // select(model: any,data);

    }
    eventRender(model: any) {
      this.logger.push(model);
    }
    initialized() {
      console.log('Initialized compleate');
    }

totday
fdate
tdate
fromm;
too;
too1;
halfday;
gethalfday;
dept;
leavedep;

  checkhalfday(){
   var offdata = this.officiald.find(obj=> obj._id==this.getuser.employee_OId);
   var buss = offdata.official[0].businessunit;
   var dept = offdata.official[0].departments;
   this.dept = offdata.official[0].departments;
   this.gethalfday = this.leavemanageoption.find(obj=>obj.leavemanagementoption[0].businessname==buss && obj.leavemanagementoption[0].department==dept)
 
  if(this.gethalfday == undefined || this.gethalfday == " ")
  {
    console.log("ITS Workkkkkk")
   //  this.showmsg = "Please contact HR, Leave Management Option is not configure for your Department."
    this.msg2=true;
    this.no_days = "";
    this.leaveday = [];
    this.service.leaverequest={};
    this.hideleave();
   
     console.log(this.msg2)
   }

   this.leavedep = this.gethalfday.leavemanagementoption[0].department;
   this.halfday = this.gethalfday.leavemanagementoption[0].halfday_request;
   console.log("Leave Dept : "+this.leavedep);
   console.log("ggggg "+this.gethalfday)


   if(this.halfday=='No' && this.leavefor=='HalfDay'){
       alert("Please Contact HR, Your department currently not allow for Half Day request.");
       document.getElementById("todt").style.display="block";
       this.leavefor = "";
       this.no_days = "";
   }  
  }


   checkdate(model:any)
   {
     console.log(model.start._d );
     console.log(this.today);
     console.log(this.fdate);
     var tdate=this.datepipe.transform(this.today,'yyyy-MM-dd') 
     console.log(tdate);
    // if(this.fdate<tdate)
    // {
    //   alert("Please select future date.");   
    //   this.service.leaverequest={};
    //   this.unselect(model);  
              
    // }
   }

    

select(model: any,data) 
{
  this.ltype()
  console.log("lllllll")
  console.log(this.exitt)
  
  for(let t=0;t<=this.exitt.length;t++){
    console.log(this.exitt.length)

    // if(!this.exitt)
    // {
    //   console.log("ll")
    // }
    // if(this.exitt.length>=0)

    // {
    // console.log(this.exitt[t].initiatecheckstatus[0].requestdate)

    // console.log(t)

  if(this.exitt.length==0 || (this.exitt[t].initiatecheckstatus[0].requestdate && this.exitt[t].initiatecheckstatus[0].status=='Rejected') )
  {
  console.log("inside iff")
  if(model.view.name=='month')
  {
    model.end._d.setDate(model.end._d.getDate()-1)
  }
  var numda=this.diff(model.start._d,model.end._d)
  this.fdate=this.datepipe.transform(model.start._d ,'yyyy-MM-dd') 
  this.tdate=this.datepipe.transform(model.end._d ,'yyyy-MM-dd')
  console.log(model)
  console.log(model.start._d.toLocaleString())
  console.log(model.end._d.toLocaleString())
  
  console.log(this.tdate)
  console.log(this.no_days)

  var arr1 = new Array();

  var getDateArray = function(start, end) {
  var arr = new Array();
  var dt = new Date(start);
  console.log(dt)
  console.log(dt.getDay())

  while (dt <= end) 
  {
  arr.push(new Date(dt));
  arr1.push(new Date(dt).getDay());
  dt.setDate(dt.getDate()+1);
  }
    console.log(arr)
    console.log(arr1)
    console.log(arr1.toString())
    return arr1;
  }

var dateArr = getDateArray(model.start._d, model.end._d);
console.log(model.end._d)
console.log(model.start._d)

console.log(model.start._d.getDay())

  for (var i = 0; i < dateArr.length-1; i++) 
  {
    console.log("<p>" + dateArr[i]+ "</p>");
  }

var off = this.officiald.find(obj=>obj._id==this.getuser.employee_OId);
var buss = off.official[0].businessunit;
var dept = off.official[0].departments;
console.log("Business unit "+buss)
console.log("Department "+dept)




this.getholiday = this.leavemanageoption.find(obj=>obj.leavemanagementoption[0].businessname==buss && obj.leavemanagementoption[0].department==dept)
console.log(this.getholiday)

if(this.getholiday == undefined || this.getholiday == " ")
{

  // document.getElementById('box').style.display='block'
  alert(" You have not been allotted leaves for this financial year. Please contact your HR")
console.log("lllllllllllllllll")

}
else{

console.log(this.getholiday)
console.log(this.getholiday.leavemanagementoption[0].week1Id)
console.log(this.getholiday.leavemanagementoption[0].week2Id)


this.w1 = this.getholiday.leavemanagementoption[0].week1Id
this.w2 = this.getholiday.leavemanagementoption[0].week2Id
var newarr = new Array();
newarr.push(this.w1,this.w2)
console.log(arr1)
console.log(newarr)



var conarr = new Array();

conarr=arr1.concat(newarr)
console.log(conarr)

var newconarr = new Array();
newconarr=conarr.filter(obj=>obj!==this.w1 && obj!==this.w2 )

console.log(newconarr)


this.no_days=newconarr.length;

console.log(model.start._d.getDay())
console.log(model.end._d.getDay())
console.log(this.w1)
console.log(this.w2)

if(model.start._d.getDay()==model.end._d.getDay()){

if(model.start._d.getDay()==this.w1 || model.start._d.getDay()==this.w2)
{
alert('U cant take leave on holiday')
return false;
}
}


console.log(model.view.title)
console.log(model.view)
console.log(model.view.name)

console.log(model.end._d.getDate())
console.log(model.end._d.getDate()-1)

console.log(model.end._d)
  console.log("TTTTTTT : "+numda)
  console.log(numda)
   // this.addrequest(data)
   // console.log(ser);
    this.show=!this.show
    var id=this.getuser.username
    var res=this.employee
    console.log(id);
    console.log(res);
    this.too1=data.leaverequest.to_date=this.datepipe.transform(model.end._d ,'yyyy-MM-dd')
    // if(data.leaverequest.status=='Approved')
    // {
       data.leaverequest.leavelimit= res.leave[0].leavebalance
    // }
    // else{
      // data.leaverequest.leavelimit= res.leave[0].leavelimit
    // }
  data.leaverequest.reportingmanager=res.official[0].reportingmanager

var dt=new Date(this.datepipe.transform(res.official[0].dateofjoing,'yyyy-MM-dd'))

console.log(dt)

var newdd=new Date(this.datepipe.transform(res.official[0].dateofjoing))
console.log(newdd)
var newdoj=this.datepipe.transform(newdd ,'yyyy-MM-dd')
console.log(newdoj)

var fnewdd=new Date(newdd.getFullYear(),newdd.getMonth()+1,newdd.getDate())
console.log(fnewdd)
var newdoj1=this.datepipe.transform(fnewdd ,'yyyy-MM-dd')
console.log(newdoj1)

var snewdd=new Date(newdd.getFullYear(),newdd.getMonth()+2,newdd.getDate())
console.log(snewdd)
var newdoj2=this.datepipe.transform(snewdd ,'yyyy-MM-dd')
console.log(newdoj2)

var tnewdd=new Date(newdd.getFullYear(),newdd.getMonth()+3,newdd.getDate())
console.log(tnewdd)
var newdoj3=this.datepipe.transform(tnewdd ,'yyyy-MM-dd')
console.log(newdoj3)
console.log(this.fdate)
console.log(this.leavereq[0].leave)
// for(var f=0;f<=this.leavereq[0].leave.length;f++){
var ff=this.leavereq.filter(obj=>obj.leave[2].leavetype=="Privilege Leave")
console.log(ff)
// }
console.log(ff.length)

for(var k=0;k<ff.length;k++)
{
  console.log("inside forrr")
  console.log(this.leavereq[0])
  console.log(this.leavereq[0].leave[2].leavebalance)
if(this.fdate>=newdoj && this.fdate<newdoj1 && this.no_days==1 && this.leavereq[0].leave[2].leavebalance==12)
{
  console.log("jan-feb")
  this.leavereq2=[{leavetype:"Privilege Leave"}];
  this.llimit=this.leavereq[0].leave[2].leavebalance
  this.leaveday = [
    { viewValue: 'FullDay'}
  ];
}
else if(this.fdate>=newdoj && this.fdate<newdoj1 && this.no_days==1 && this.leavereq[0].leave[2].leavebalance!=12)
{
  alert("You already take leave in this month")
  return false;
}

 if(this.fdate>=newdoj1 && this.fdate<newdoj2 && this.no_days==1 && (this.leavereq[0].leave[2].leavebalance==12 || this.leavereq[0].leave[2].leavebalance==11 ))
{
  console.log("feb-mar")
  this.leavereq2=[{leavetype:"Privilege Leave"}];
  this.llimit=this.leavereq[0].leave[2].leavebalance
  this.leaveday = [
    { viewValue: 'FullDay'}
  ];
}
else  if(this.fdate>=newdoj1 && this.fdate<newdoj2 && this.no_days==1 && (this.leavereq[0].leave[2].leavebalance!=12 || this.leavereq[0].leave[2].leavebalance!=11 ))
{
  alert("You already take leave in this month")
  return false;
}
if(this.fdate>=newdoj2 && this.fdate<newdoj3 && this.no_days==1 && (this.leavereq[0].leave[2].leavebalance==12 || this.leavereq[0].leave[2].leavebalance==11 || this.leavereq[0].leave[2].leavebalance==10))
{
console.log("mar-apr")
this.leavereq2=[{leavetype:"Privilege Leave"}];
this.llimit=this.leavereq[0].leave[2].leavebalance
this.leaveday = [
  { viewValue: 'FullDay'}
];
}
else if(this.fdate>=newdoj2 && this.fdate<newdoj3 && this.no_days==1 && (this.leavereq[0].leave[2].leavebalance!=12 || this.leavereq[0].leave[2].leavebalance!=11 || this.leavereq[0].leave[k].leavebalance!=10))
{
  alert("You already take leave in this month")
  return false;
}
 if(this.no_days>1 && this.fdate>=newdoj && this.fdate<newdoj3){
  alert("You can't take more than 1 leave")
  this.no_days="";
  return false
}

}

var dat=[];
var dct=new Date(this.datepipe.transform(this.fdate,'yyyy-MM-dd'))

console.log(dct)
var fmonth=dct.getMonth();
console.log(fmonth)

console.log(this.fdate)
console.log(this.datepipe.transform(this.employee.official[0].dateofjoing,'yyyy-MM-dd'))
if( this.fdate<this.datepipe.transform(this.employee.official[0].dateofjoing,'yyyy-MM-dd')){
  alert("You can't take leave before your joining date")
  this.no_days="";
  return false;
}



  console.log(data.leaverequest.reportingmanager)
  data.reporting_mid= this.employee.official[0].reporting_mid
  console.log(data.leaverequest.response)
  data.id=res.username
  console.log(this.datepipe.transform(model.end._d ,'yyyy-MM-dd'))
 this.fromm= data.leaverequest.from_date=this.datepipe.transform(model.start._d ,'yyyy-MM-dd') 
 this.too= data.leaverequest.to_date=this.datepipe.transform(model.end._d ,'yyyy-MM-dd')
  data.leaverequest.no_days=(numda)
  console.log( data.leaverequest.no_days)
  console.log( "Reporting Manager : " +data.leaverequest.reportingmanager)
  console.log("Leave Limit : "+data.leaverequest.leavelimit)
  console.log(id.reportingmanager)
  console.log(data.employee_id)
  console.log(model);

  // if(data.leaverequest.leavelimit < newconarr.length ){
  //   alert("You are applicable for " +data.leaverequest.leavelimit + "   " +"leave if you want more contact to your HR")
  // this.service.leaverequest={}
  // }
  }
  // ------------------------------------------
// If you already take leave on that date then again on the same date you don't take leaves
this.v=this.leavereqs1.filter(obj=>obj.leaverequest.leavetype=="Leave Without Pay" && (obj.leaverequest.status=="Approved" || obj.leaverequest.status=="Pending for approval") || obj.leaverequest.leavetype=="Casual Leave" && (obj.leaverequest.status=="Approved" || obj.leaverequest.status=="Pending for approval") || obj.leaverequest.leavetype=="Sick Leave" && (obj.leaverequest.status=="Approved" || obj.leaverequest.status=="Pending for approval") || obj.leaverequest.leavetype=="Privilege Leave" && (obj.leaverequest.status=="Approved" || obj.leaverequest.status=="Pending for approval") || obj.leaverequest.leavetype=="Maternity Leave" && (obj.leaverequest.status=="Approved" || obj.leaverequest.status=="Pending for approval") || obj.leaverequest.leavetype=="Paternity Leave" && (obj.leaverequest.status=="Approved" || obj.leaverequest.status=="Pending for approval") || obj.leaverequest.leavetype=="Leave" && (obj.leaverequest.status=="Approved" || obj.leaverequest.status=="Pending for approval"))
console.log(this.v);
for(let s=0;s<=this.v.length-1;s++)
{
  this.allfromdate=new Date(this.datepipe.transform(this.v[s].leaverequest.from_date,'yyyy-MM-dd')) 
  console.log(this.allfromdate);
  this.alltoodate=new Date(this.datepipe.transform(this.v[s].leaverequest.to_date,'yyyy-MM-dd')) 
  console.log(this.alltoodate);

var getDateArray2 = function(start, end) 
{
  var arr1 = new Array();
  var df1 = new Date(start);
  console.log(df1)
  var dt1 = new Date(end);
  console.log(dt1)

  while (df1 <= dt1) 
  {
      console.log("In while loop")
      arr1.push(new Date(df1)); 
      df1.setDate(df1.getDate()+1);
  }
  console.log(arr1)
  return arr1;
}
var dateArray = getDateArray2(this.allfromdate,this.alltoodate);
console.log(dateArray);
console.log(dateArray.length);
for(let x=0;x<dateArray.length;x++)
{
  this.allleaves=this.datepipe.transform(dateArray[x],'yyyy-MM-dd')
  console.log(this.allleaves);
}
  var getDateArray3 = function(start, end) 
  {
    var arr2 = new Array();
    var df2 = new Date(start);
    console.log(df2)
    var dt2 = new Date(end);
    console.log(dt2)      
    while (df2 <= dt2) 
    {
        console.log("In while loop")
        arr2.push(new Date(df2)); 
        df2.setDate(df2.getDate()+1);
    }
    console.log(arr2)
    return arr2;
  }
  console.log(this.fdate);
  console.log(this.tdate);
  var dateArr3 = getDateArray3(this.fdate,this.tdate);
  console.log(dateArr3);
  console.log(dateArr3.length);
  for(let w=0;w<dateArr3.length;w++)
  {
    this.alll=this.datepipe.transform(dateArr3[w],'yyyy-MM-dd')
    console.log(this.alll);
    console.log(this.allleaves)
  }
  if( this.allleaves== this.alll)
  {
    console.log("Already")
    alert("You are already taked or applied for leaves on same date. So you are not applicable to take leaves.");
    this.no_days="";
    this.leaveday=[];
    this.llimit="";
    this.leavereq2=[];
  }
}
}

else if(this.exitt[t].initiatecheckstatus[0].status!='Rejected')
{
  alert("You Request for Resign so you cannot take leave")
}

}
}
    unselect(model: any) {
      console.log(model);
    }

    clickButton(model: any) {
      this.displayEvent = model;
    }


    eventClick(model: any) {

      console.log("eveent")
      
      //  var tbl = document.getElementById('vieww').textContent
      //  alert( tbl);
      model = {
        event: {
          id: model.event.id,
          start: model.event.start,
          end: model.event.end,
          title: model.event.title,
          allDay: model.event.allDay,
          // other params
        },
        
        duration: {}
      }
      this.displayEvent = model;
      console.log( model.event.title)
    }

    employee_id;
    uname;
    levtype;
    frmdt;
    todt;
    levfor;
    noday;
    applyon;
    status;
    leavereqs;
iid;

    toggle(event) {
      console.log(event.target.id); 
console.log( this.service.employee_id)      
   }

abc2(model: any){
  console.log(model.event.TempId)
  // console.log(this.leaverequest.TempId)
  this.tempidd = model.event.TempId;

  var objj=this.leavereqs.find(obj=>obj.TempId==model.event.TempId)
  console.log(objj)
  console.log(objj.leaverequest.from_date)

  console.log(objj.TempId)
  console.log(model.event.TempId)

  // console.log(model.event.start._i)
  // console.log(model.event.end._i)
  this.employee_id=objj.employee_id;
  this.uname = objj.username;
  this.levtype = objj.leaverequest.leavetype;
  this.frmdt = objj.leaverequest.from_date;
  this.todt = objj.leaverequest.to_date;
  this.levfor = objj.leaverequest.leavefor;
  this.noday = objj.leaverequest.no_days;
  this.applyon = objj.leaverequest.applied_on;
  this.status = objj.leaverequest.status;
  // var res=this.employee
console.log(model.event._id)
  if(model.event.title==this.employee.official[0].username +","+ "Leave" +"," +"(P)"){
      console.log(model.event.title)
    
      document.getElementById('hidd').style.display='block';
      console.log("okokokokokokokokokokok")
     console.log( this.iid)
    
}

}

    updateEvent(model: any) {
      model = {
        event: {
          id: model.event.id,
          start: model.event.start,
          end: model.event.end,
          title: model.event.title
          // other params
        },
        duration: {
          _data: model.duration._data
        }
      }
      this.displayEvent = model;
    }

cancel(service)
{
  service.leaverequest={}
  service.reporting_mid=""
  console.log(service)
}
makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 8; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
 
save(service)
  {
    console.log(service)
    var employee=this.employee;
    service.leaverequest.applied_on=this.datepipe.transform( new Date(),'yyyy-MM-dd');
    service.leaverequest.status="Pending for approval"
    service.leaverequest.requested="Leave Request has been sent for Manager Approval by "+ employee.official[0].username
    service.leaverequest.from_date=this.fromm
    service.leaverequest.to_date=this.too
    service.leaverequest.dept=employee.official[0].departments
    service.leaverequest.dateofjoing=this.datepipe.transform(employee.official[0].dateofjoing,'yyyy-MM-dd');
    console.log(service.leaverequest.dateofjoing)
    service.leaverequest.no_days=this.no_days1
    service.leaverequest.leavefor=this.leavefor
    // service.event.OID=this.makeid();
    // console.log( service.event.OID)
    if(service.leaverequest.leavefor=="HalfDay")
    {
      service.leaverequest.flag=1;
    }
    else if(service.leaverequest.leavefor=="FullDay")
    {
      service.leaverequest.flag=0;
    }
    console.log(service.leaverequest.OID)

    var create=this.restangular.one("selfservice")
    create.leaverequest=service.leaverequest
    create.reporting_mid=service.reporting_mid
    create.employee_id=employee._id
    create.username=employee.official[0].username
    create.no_days=this.no_days
    create.TempId=this.makeid();
    create.event={title:employee.official[0].username +","+ "Leave" +"," +"(P)" ,
                   start:this.fromm,end:this.too,TempId:create.TempId}
    console.log(create)
    create.save().toPromise().then(res=>{
    console.log(res)
    console.log(res._id)

      service.leaverequest={}
      service.reporting_mid=""   
      })
    
  }
  offemp;

  ngOnInit() 
  {
    this.form = this.formBuilder.group({

    availleave: [null, Validators.required],
    fromdatee: [null, Validators.required],
    nodays: [null, Validators.required],
    // nodays1:[null, Validators.required],
    // nohalfdays: [null, Validators.required],
    leavetypee: [null, Validators.required],
    toodate: [null, Validators.required],
    repmang: [null, Validators.nullValidator],
    // comments: [null, Validators.required],
    reasonn:[null, Validators.required],
    leaveforr:[null, Validators.required]
    // leaveforr1:[null, Validators.nu]
    
    })
      
    
    /* console.log(this.yearMonth)
    console.log(this.data)*/
    this.getuser=JSON.parse(localStorage.getItem('user'));
    console.log(this.getuser)
     //var id="5a704cb4ca8b97227478b4a9"
    
     if(this.getuser.employee_OId && this.getuser.employee_OId!=''){
     this.restangular.all('selfservice').getList({employee_id:this.getuser.employee_OId}).subscribe(res=>{
      this.leavemanagement=res
      console.log(this.leavemanagement)
       res.forEach(data=>{
         console.log(data.event);
         this.data.push(data.event)
       })
     });

     this.restangular.all('selfservice').getList({reporting_mid:this.getuser.employee_OId}).subscribe(res=>{
      this.leavemanagement=res
      console.log(this.leavemanagement)
       res.forEach(data=>{
         console.log(data.event);
         this.data.push(data.event)
       })
      });

     let baseExitType1 = this.restangular.all('selfservice');
     baseExitType1.getList().subscribe(data => {
     this.leavereqs =data.filter(res=>res.leaverequest);
     console.log(this.leavereqs)
     return this.leavereqs;
     });  
     let baseExitType2 = this.restangular.all('selfservice');
     baseExitType2.getList({employee_id:this.getuser.employee_OId}).subscribe(data => {
     this.leavereqs1 =data.filter(res=>res.leaverequest);
     console.log(this.leavereqs1)
     return this.leavereqs1;
     });

     let baseexit = this.restangular.all('exitprocedure');
     baseexit.getList({empid:this.getuser.employee_OId}).subscribe(data => {
     this.exitt =data.filter(res=>res.initiatecheckstatus);
     console.log(this.exitt)
     return this.exitt;
     });

     let baseLeaves = this.restangular.all('management');
     baseLeaves.getList().subscribe(data => {
     this.leavemanageoption =data.filter(res=>res.leavemanagementoption);
     console.log(this.leavemanageoption)
     return this.leavemanageoption;
     });

     let baseExitType = this.restangular.all('createemployee');
     baseExitType.getList({_id:this.getuser.employee_OId}).subscribe(data => {
     
     this.leavereq =data.filter(res=>res.leave);
    //  for(this.i=0;this.i<this.leavereq[0].leave.length;this.i++)
    //  {
     
     console.log(this.leavereq)
      // this.ltype();
    //  }
     return this.leavereq;
     });
    
     console.log(this.datepipe.transform( new Date(),'yyyy-MM-dd'))
     this.restangular.all('createemployee').getList({_id:this.getuser.employee_OId}).subscribe(res=>{
    console.log(res)
    this.employee=res[0]
    if(res[0].official[0].reporting_mid=="" || res[0].official[0].reporting_mid==undefined)
    {
      this.msg1=true;
      console.log(this.msg1)
    }
    })
    
    }
    this.restangular.all('employeeconfiguration').getList().subscribe(data=>{
      this.empconfig=data.filter(res=>res.leavetype)
    })

    var baseOfficial = this.restangular.all('createemployee');
    baseOfficial.getList().subscribe(data => {

   
      this.officiald = data
      console.log(this.officiald)
      return this.officiald;
    });
  
      this.calendarOptions = {
              editable: true,
              eventLimit: false,
              header: { left: 'prev,next, today', center:'title',
                right: 'month'
              },
              selectable: true,
              events: this.data,
            };
          
        }
          
      }