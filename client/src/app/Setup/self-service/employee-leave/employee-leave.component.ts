import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { Md2Dialog } from 'md2';
import {UserService } from '../../../user.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employee-leave',
  templateUrl: './employee-leave.component.html',
  styleUrls: ['./employee-leave.component.css'],
  providers:[DatePipe]
})
export class EmployeeLeaveComponent implements OnInit {

 constructor(private restangular:Restangular,public userservice: UserService,public datepipe:DatePipe) { this.object=this }
getuser
 service={leaverequest:{}}

 leavemanagement;
 employee;
object;
reportingmanager;
officiald;
setval=false;
message="hhhhhhhhhh"
today: number = Date.now();
messageClass
data=[]
obj1;
obj2;
obj;
leaveld;
rep;
abc;
lastof3months;
lastof6months;
lastof9months;
lastof12months;
startof1month;
startof1months;
lastof3month;
lastof6month;
lastof9month;
lastof12month;
// leavereq1;
open(dialog: Md2Dialog) {
  dialog.open();
  }
  
  close(dialog: any) {
  dialog.close();
  }

  view(work){
    // this.updates=true;
    this.service=work
  
  }
 status = [
    {value: 'Approved', viewValue: 'Approve'},
    {value: 'Rejected', viewValue: 'Reject'},
    {value: 'Cancelled', viewValue: 'Cancel'}
  ];

  status1 = [
    {value: 'Cancelled', viewValue: 'Cancel'}
  ];

	leaveapproved(email,username,leavetype,from_date,to_date,no_days,applied_on,utype,status,comment)
	{	
	
	console.log("lll")
	  email=this.obj1.official[0].email;
	username=this.obj1.official[0].username
  leavetype=this.obj2.leaverequest.leavetype
  from_date=this.obj2.leaverequest.from_date
  to_date=this.obj2.leaverequest.to_date
  no_days=this.obj2.leaverequest.no_days
  applied_on=this.obj2.leaverequest.applied_on
	utype=this.employee.official[0].role
 
	
	
	
	
	console.log("jjjj")
	console.log(email)
	console.log(username)
	console.log(leavetype)
  console.log(utype)
	
	
	console.log(username)
  var base=this.restangular.all('/leaveapproved')
  var w=this.obj1.official[0].email
  console.log(w);
	
	base.post({email,username:username,leavetype:leavetype,from_date:from_date,to_date:to_date,no_days:no_days,applied_on:applied_on,utype:utype,status:status,comment:comment}).toPromise().then(res=>{
	console.log(res)
	email="";
	username="";
  leavetype="";
  from_date="";
  to_date="";
  no_days="";
  applied_on="";
  utype="";
	status="";
	comment="";
	
	
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

action(eleave){
// console.log(this.leavereq1)
  console.log("kkkkkkkk243")
  console.log(this.getuser.username)
  this.service=eleave;
  console.log(this.service)
  
  this.obj1 = this.officiald.find(obj1 => obj1._id ==eleave.employee_id );
  console.log(this.obj1.official[0].email)
  console.log(this.obj1.official[0].role)
  console.log(this.obj1.official[0].reportingmanager)
  console.log(this.obj1.official[0].firstname);

  this.abc=this.obj1.official[0].reporting_mid
   this.obj = this.officiald.find(obj => obj._id == this.abc);

  console.log(this.obj.official[0].username)
  console.log(this.obj1.official[0].username)

this.rep=this.obj.official[0].username
//  console.log(this.getuser.username)

  this.obj2 = this.leaveld.find(obj2 => obj2.employee_id ==eleave.employee_id );
  console.log(this.obj2.leaverequest.leavetype)
  console.log(this.obj2.leaverequest.applied_on)
  console.log(this.obj2.leaverequest.reportingmanager)
  var reportingmanager=this.obj2.leaverequest.reportingmanager
  console.log(reportingmanager)
}

hideqa()
{
  this.userservice.queans()
}
hideqa1()
{
  this.userservice.queans1()
}
editvieweleave(service)
{
  console.log(service);
  if(service.leaverequest.status=='Approved') 
  {
    console.log("abbbb");
    this.hideqa1();
  }
  else if(service.leaverequest.status=='Pending for approval')
  {
    console.log("gghh");
    this.hideqa();
  }
  else{
    console.log("iiijj")
  }
}

leavereq11;
nodays=0;
alldata;


leave()
{
  console.log(this.employee);
  if(this.getuser.employee_OId && this.getuser.employee_OId!='')
  {
    this.restangular.all('selfservice').getList({employee_id:this.getuser.employee_OId}).subscribe(res=>{
    this.alldata=res;
    console.log(this.alldata)
    });  
  }
}
cancelleave;
flmonth;
todt;
sumd=0;
middleof3moth;
middleof6moth;
middleof9moth;
middleof12moth
fmiddleof3moth;
fmiddleof6moth;
fmiddleof9moth;
fmiddleof12moth;
dateofjoing;
sumdays1;

 save(service)
  {

    var y=new Date();
    var year=y.getFullYear();
    console.log(year);
  
  if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
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
  // this.dateofjoing=this.datepipe.transform(this.employee.official[0].dateofjoing,'yyyy-MM-dd');
  // console.log(this.dateofjoing)
  console.log(this.fmiddleof3moth)
  console.log(this.fmiddleof6moth)
  console.log(this.fmiddleof9moth)
  console.log(this.fmiddleof12moth)
  	var obj=this.object
    console.log(service) 
    
    
this.startof1month=new Date(new Date().getFullYear(), 0,1);
this.startof1months=this.datepipe.transform(this.startof1month,'yyyy-MM-dd');
this.lastof3month=new Date(new Date().getFullYear(), 2, 31);
this.lastof3months=this.datepipe.transform(this.lastof3month,'yyyy-MM-dd');
this.lastof6month=new Date(new Date().getFullYear(), 5, 30);
this.lastof6months=this.datepipe.transform(this.lastof6month,'yyyy-MM-dd');
this.lastof9month=new Date(new Date().getFullYear(), 8, 30);
this.lastof9months=this.datepipe.transform(this.lastof9month,'yyyy-MM-dd');
this.lastof12month=new Date(new Date().getFullYear(), 11, 31);
this.lastof12months=this.datepipe.transform(this.lastof12month,'yyyy-MM-dd');


    var newdd=new Date(this.datepipe.transform(service.leaverequest.dateofjoing))
    console.log(newdd)
    var newdoj=this.datepipe.transform(newdd ,'yyyy-MM-dd')
    console.log(newdoj)
  
    var tnewdd=new Date(newdd.getFullYear(),newdd.getMonth()+3,newdd.getDate())
    console.log(tnewdd)
    var newdoj3=this.datepipe.transform(tnewdd ,'yyyy-MM-dd')
    console.log(newdoj3)


    var objj=this.leavereq.find(obj=>obj.official[0].username==service.username)
    console.log(objj);
    console.log(objj.leave.length)

console.log(service.leaverequest.dateofjoing);
var c=new Date(this.datepipe.transform(service.leaverequest.dateofjoing,'yyyy-MM-dd'))
var one=c.setMonth(c.getMonth()+3)
console.log(this.datepipe.transform(one,'yyyy-MM-dd'))
console.log(service.leaverequest.from_date);

//Fresher's Part Start Here 

if(this.datepipe.transform(one,'yyyy-MM-dd')>service.leaverequest.from_date)
  {
    if('Approved'==service.leaverequest.status)
      {
        service.leaverequest.approved_on=this.datepipe.transform(this.today,'yyyy-MM-dd')
        console.log(service.leaverequest.approveddate)
        var objj=this.leavereq.find(obj=>obj.official[0].username==service.username)
        console.log(objj);
        console.log(objj.leave[0]);
        console.log("abc")

          service.event.title=service.event.title.substring(0,service.event.title.length-3) + "(A)"
          service.save().toPromise().then(function(resp) {
          console.log(resp)
        })
        console.log("ghi")
        // objj.leave[0].usedleaves=service.leaverequest.no_days
        objj.leave[2].leavebalance=objj.leave[2].leavebalance-parseFloat(service.leaverequest.no_days)
        objj.leave[2].usedleaves=objj.leave[2].usedleaves+parseFloat(service.leaverequest.no_days)
        console.log(objj.leave[2].leavebalance)
        console.log(service.leaverequest.no_days)
        objj.save().toPromise().then(res=>{
          console.log(res)
          this.restangular.all('createemployee').getList()
          .subscribe(data=>{this.leavereq=data.filter(res=>res.leave)})
          //  msg.savemsg('Added Succesfully','alert alert-info');
          }) 
        }
      // }
    else if('Rejected'==service.leaverequest.status)
        {
          service.leaverequest.rejected_on=this.datepipe.transform(this.today,'yyyy-MM-dd')
           var objj=this.leavereq.find(obj=>obj.official[0].username==service.username)
           console.log(objj);
           service.event.title=service.event.title.substring(0,service.event.title.length-3) + "(R)"
           console.log("jkl")
           service.save().toPromise().then(function(resp) {
              console.log(resp)
              // obj.service={leaverequest:{}}
            })
        }
    else if('Cancelled'==service.leaverequest.status)
        {
          // service.leaverequest.cancelleddate=this.today;
          var objj=this.leavereq.find(obj=>obj.official[0].username==service.username)
          console.log(objj);
          console.log(service.leaverequest.status)
          this.cancelleave=service;
          var objj2=this.leavereq11.find(obj=>obj.TempId==service.TempId);
          console.log(objj2)
          console.log("mno")
          console.log(objj2.leaverequest.status)
         
          // if(objj.leave[0].fresherleaves<3 && objj2.leaverequest.status=='Approved')
          // {
            service.leaverequest.cancelled_on=this.datepipe.transform(this.today,'yyyy-MM-dd')
            console.log("pqr")
            service.event.title=service.event.title.substring(0,service.event.title.length-3) + "(C)"        
            service.save().toPromise().then(function(resp) {
             console.log(resp)
           })
              console.log("stv")
              objj.leave[2].leavebalance=objj.leave[2].leavebalance+parseFloat(service.leaverequest.no_days)
              objj.leave[2].usedleaves=objj.leave[2].usedleaves-parseFloat(service.leaverequest.no_days)
              objj.save().toPromise().then(res=>{
                console.log(res)
                this.restangular.all('createemployee').getList()
                .subscribe(data=>{this.leavereq=data.filter(res=>res.leave)})
                }) 
          // }
        }
  }

  // After Fresher's Duration
else
{
  // Approved Session
    if('Approved'==service.leaverequest.status)
      {
        // service.leaverequest.approveddate=this.today;
        var objj=this.leavereq.find(obj=>obj.official[0].username==service.username)
        console.log(objj);
        // Maternity Leaves Starts Here
        if(service.leaverequest.leavetype=="Maternity Leave")
        {
          service.event.title=service.event.title.substring(0,service.event.title.length-3) + "(A)"
          service.leaverequest.approvestatus="Leave Request has been Approved by " + this.employee.official[0].firstname+" "+this.employee.official[0].lastname
          service.leaverequest.approved_on=this.datepipe.transform(this.today,'yyyy-MM-dd')
          service.leaverequest.leavebalance=service.leaverequest.leavelimit-service.leaverequest.no_days
          service.save().toPromise().then(function(resp) {
            console.log(resp)
          })
          if(service.leaverequest.no_days>182){
            var minus=service.leaverequest.no_days-182
            objj.leave[3].usedleaves=182;
            objj.leave[2].usedleaves=objj.leave[2].usedleaves+minus
            objj.leave[3].leavebalance=objj.leave[3].leavebalance-182;
            objj.leave[2].leavebalance=objj.leave[2].leavebalance-minus
          }
          if(service.leaverequest.no_days<=182){
          objj.leave[3].usedleaves=objj.leave[3].usedleaves+parseFloat(service.leaverequest.no_days)
          objj.leave[3].leavebalance=objj.leave[3].leavebalance-service.leaverequest.no_days
          }
            objj.save().toPromise().then(res=>{
            console.log(res)
            this.restangular.all('createemployee').getList()
            .subscribe(data=>{this.leavereq=data.filter(res=>res.leave)})
            //  msg.savemsg('Added Succesfully','alert alert-info');
            }) 
        }
        
        // Other country employee can take leave starts here
        if(service.leaverequest.leavetype=="Leave")
        {
          service.event.title=service.event.title.substring(0,service.event.title.length-3) + "(A)"
          service.leaverequest.approvestatus="Leave Request has been Approved by " + this.employee.official[0].firstname+" "+this.employee.official[0].lastname
          service.leaverequest.approved_on=this.datepipe.transform(this.today,'yyyy-MM-dd')
          service.leaverequest.leavebalance=service.leaverequest.leavelimit-service.leaverequest.no_days
          service.save().toPromise().then(function(resp) {
            console.log(resp)
          })
          objj.leave[0].usedleaves=objj.leave[0].usedleaves+parseFloat(service.leaverequest.no_days)
          objj.leave[0].leavebalance=objj.leave[0].leavebalance-service.leaverequest.no_days
          objj.save().toPromise().then(res=>{
          console.log(res)
          this.restangular.all('createemployee').getList()
          .subscribe(data=>{this.leavereq=data.filter(res=>res.leave)})
          //  msg.savemsg('Added Succesfully','alert alert-info');
           }) 
        }
        // Manadatory Starts Here
        if(service.leaverequest.leavetype=="Mandatory Leave")
        {
          service.event.title=service.event.title.substring(0,service.event.title.length-3) + "(A)"
          service.leaverequest.approvestatus="Leave Request has been Approved by " + this.employee.official[0].firstname+" "+this.employee.official[0].lastname
          service.leaverequest.approved_on=this.datepipe.transform(this.today,'yyyy-MM-dd')
          service.leaverequest.leavebalance=service.leaverequest.leavelimit-service.leaverequest.no_days
          service.save().toPromise().then(function(resp) {
          console.log(resp)
          })
          objj.leave[5].usedleaves=objj.leave[5].usedleaves+parseFloat(service.leaverequest.no_days)
          objj.leave[5].leavebalance=objj.leave[5].leavebalance-service.leaverequest.no_days
          objj.save().toPromise().then(res=>{
          console.log(res)
          this.restangular.all('createemployee').getList()
          .subscribe(data=>{this.leavereq=data.filter(res=>res.leave)})
          }) 
        }
        // Leave Without Pay Starts Here
        if(service.leaverequest.leavetype=="Leave Without Pay")
        {
          service.event.title=service.event.title.substring(0,service.event.title.length-3) + "(A)"
          service.leaverequest.approvestatus="Leave Request has been Approved by " + this.employee.official[0].firstname+" "+this.employee.official[0].lastname
          service.leaverequest.approved_on=this.datepipe.transform(this.today,'yyyy-MM-dd')
          service.leaverequest.leavebalance=service.leaverequest.leavelimit-service.leaverequest.no_days
          service.save().toPromise().then(function(resp) {
            console.log(resp)
          })
          objj.leave[4].usedleaves=objj.leave[4].usedleaves+parseFloat(service.leaverequest.no_days)
          objj.leave[4].leavebalance=objj.leave[4].leavebalance-service.leaverequest.no_days
          objj.save().toPromise().then(res=>{
            console.log(res)
            this.restangular.all('createemployee').getList()
            .subscribe(data=>{this.leavereq=data.filter(res=>res.leave)})
          }) 
        }
        // Paternity Leave Starts Here
        if(service.leaverequest.leavetype=="Paternity Leave")
        {
          service.event.title=service.event.title.substring(0,service.event.title.length-3) + "(A)"
          service.leaverequest.approvestatus="Leave Request has been Approved by " + this.employee.official[0].firstname+" "+this.employee.official[0].lastname
          service.leaverequest.approved_on=this.datepipe.transform(this.today,'yyyy-MM-dd')
          service.leaverequest.leavebalance=service.leaverequest.leavelimit-service.leaverequest.no_days
          service.save().toPromise().then(function(resp) {
            console.log(resp)
          })
          objj.leave[3].usedleaves=objj.leave[3].usedleaves+parseFloat(service.leaverequest.no_days)
          objj.leave[3].leavebalance=objj.leave[3].leavebalance-service.leaverequest.no_days
          objj.save().toPromise().then(res=>{
            console.log(res)
            this.restangular.all('createemployee').getList()
            .subscribe(data=>{this.leavereq=data.filter(res=>res.leave)})
          }) 
        }
      // Privilege Leave Starts Here
      console.log(service.leaverequest.dateofjoing)
      if(service.leaverequest.leavetype=="Privilege Leave")
      {
          console.log("PPPPLLL")
          service.event.title=service.event.title.substring(0,service.event.title.length-3) + "(A)"
          service.leaverequest.approvestatus="Leave Request has been Approved by " + this.employee.official[0].firstname+" "+this.employee.official[0].lastname
          service.leaverequest.approved_on=this.datepipe.transform(this.today,'yyyy-MM-dd')
          service.leaverequest.leavebalance=service.leaverequest.leavelimit-service.leaverequest.no_days
          service.save().toPromise().then(function(resp) {
            console.log(resp)
          })
          objj.leave[2].usedleaves=objj.leave[2].usedleaves+parseFloat(service.leaverequest.no_days)
          objj.leave[2].leavebalance=objj.leave[2].leavebalance-service.leaverequest.no_days
          objj.save().toPromise().then(res=>{
            console.log(res)
            this.restangular.all('createemployee').getList()
            .subscribe(data=>{this.leavereq=data.filter(res=>res.leave)})
          }) 
      }
      console.log(new Date(service.leaverequest.from_date).getFullYear())
      console.log(new Date(service.leaverequest.dateofjoing).getFullYear())


// objj.save().toPromise().then(res=>{
//   console.log(res)
//   this.restangular.all('createemployee').getList()
//   .subscribe(data=>{this.leavereq=data.filter(res=>res.leave)})
// }) 
// }
       
    // Sick Leave Starts Here
        if(service.leaverequest.leavetype=="Sick Leave" && new Date(this.dateofjoing).getFullYear()==year)
        {
          console.log(year)
          console.log(new Date(service.leaverequest.dateofjoing).getFullYear())
    // If Part
          if(objj.leave[1].usedleaves==0)
          {
            service.event.title=service.event.title.substring(0,service.event.title.length-3) + "(A)"
            service.leaverequest.approvestatus="Leave Request has been Approved by " + this.employee.official[0].firstname+" "+this.employee.official[0].lastname
            service.leaverequest.approved_on=this.datepipe.transform(this.today,'yyyy-MM-dd')
            service.leaverequest.leavebalance=service.leaverequest.leavelimit-service.leaverequest.no_days
            service.save().toPromise().then(function(resp) {
              console.log(resp)
              obj.service={leaverequest:{}}
            })
            console.log("you never take any sick leaves")
            console.log("After completion of 3 months date present in half quarter & only take 1 SL")
            if(newdoj3>=this.fmiddleof3moth && newdoj3<=this.lastof3months)
            {  
              console.log("333333333")
              if(service.leaverequest.no_days==1){
              objj.leave[1].usedleaves=objj.leave[1].usedleaves+parseFloat(service.leaverequest.no_days)
              objj.leave[1].leavebalance=objj.leave[1].leavebalance-service.leaverequest.no_days
              }
              if(service.leaverequest.no_days>1)
              {
                var pl=service.leaverequest.no_days-1;
                var sl=service.leaverequest.no_days-pl;
                // objj.leave[1].usedleaves=objj.leave[1].usedleaves+parseFloat(service.leaverequest.no_days)
                objj.leave[1].usedleaves=objj.leave[1].usedleaves+sl
                objj.leave[2].usedleaves=objj.leave[2].usedleaves+pl
                objj.leave[1].leavebalance=objj.leave[1].leavebalance-sl;
                objj.leave[2].leavebalance=objj.leave[2].leavebalance-pl;
              }
            }
            
            else if(newdoj3>=this.fmiddleof6moth && newdoj3<=this.lastof6months)
            {
              console.log("6666666666")
              if(service.leaverequest.no_days==1){
                objj.leave[1].usedleaves=objj.leave[1].usedleaves+parseFloat(service.leaverequest.no_days)
                objj.leave[1].leavebalance=objj.leave[1].leavebalance-service.leaverequest.no_days
                }
                if(service.leaverequest.no_days>1){
                  var pl=service.leaverequest.no_days-1;
                  var sl=service.leaverequest.no_days-pl;
                  // objj.leave[1].usedleaves=objj.leave[1].usedleaves+parseFloat(service.leaverequest.no_days)
                  objj.leave[1].usedleaves=objj.leave[1].usedleaves+sl
                  objj.leave[2].usedleaves=objj.leave[2].usedleaves+pl
                  objj.leave[1].leavebalance=objj.leave[1].leavebalance-sl;
                  objj.leave[2].leavebalance=objj.leave[2].leavebalance-pl;
                }
            }
           
            else if(newdoj3>=this.fmiddleof9moth && newdoj3<=this.lastof9months)
            {
              console.log("9999999999999999")
              if(service.leaverequest.no_days==1){
                objj.leave[1].usedleaves=objj.leave[1].usedleaves+parseFloat(service.leaverequest.no_days)
                objj.leave[1].leavebalance=objj.leave[1].leavebalance-service.leaverequest.no_days
                }
                if(service.leaverequest.no_days>1){
                  var pl=service.leaverequest.no_days-1;
                  var sl=service.leaverequest.no_days-pl;
                  // objj.leave[1].usedleaves=objj.leave[1].usedleaves+parseFloat(service.leaverequest.no_days)
                  objj.leave[1].usedleaves=objj.leave[1].usedleaves+sl
                  objj.leave[2].usedleaves=objj.leave[2].usedleaves+pl
                  objj.leave[1].leavebalance=objj.leave[1].leavebalance-sl;
                  objj.leave[2].leavebalance=objj.leave[2].leavebalance-pl;
                }
            }
            else if(newdoj3>=this.fmiddleof12moth && newdoj3<=this.lastof12months)
            {
              console.log("1111122222222")
              if(service.leaverequest.no_days==1){
                objj.leave[1].usedleaves=objj.leave[1].usedleaves+parseFloat(service.leaverequest.no_days)
                objj.leave[1].leavebalance=objj.leave[1].leavebalance-service.leaverequest.no_days
                }
                if(service.leaverequest.no_days>1)
                {
                  var pl=service.leaverequest.no_days-1;
                  var sl=service.leaverequest.no_days-pl;
                  // objj.leave[1].usedleaves=objj.leave[1].usedleaves+parseFloat(service.leaverequest.no_days)
                  objj.leave[1].usedleaves=objj.leave[1].usedleaves+sl
                  objj.leave[2].usedleaves=objj.leave[2].usedleaves+pl
                  objj.leave[1].leavebalance=objj.leave[1].leavebalance-sl;
                  objj.leave[2].leavebalance=objj.leave[2].leavebalance-pl;
                }
            }
            else
            {
              console.log("After completion of 3 months date present in full quarter & only take 2 SL")
              if(service.leaverequest.no_days<=2)
             {
               console.log("Y");
               objj.leave[1].usedleaves=objj.leave[1].usedleaves+parseFloat(service.leaverequest.no_days)
               objj.leave[1].leavebalance=objj.leave[1].leavebalance-service.leaverequest.no_days
             }
             if(service.leaverequest.no_days>2)
             {
               console.log("Y1")
               var pl=service.leaverequest.no_days-2;
               var sl=service.leaverequest.no_days-pl;
              objj.leave[1].usedleaves=objj.leave[1].usedleaves+sl
              objj.leave[2].usedleaves=objj.leave[2].usedleaves+pl
              objj.leave[1].leavebalance=objj.leave[1].leavebalance-sl;
              objj.leave[2].leavebalance=objj.leave[2].leavebalance-pl;
              console.log( objj.leave[2].leavebalance);
             }
           }
               objj.save().toPromise().then(res=>{
               console.log(res)
               this.restangular.all('createemployee').getList()
               .subscribe(data=>{this.leavereq=data.filter(res=>res.leave)})
                // msg.savemsg('Added Succesfully','alert alert-info');
              }) 
     } 
    //  Else Part
      else
          {
            console.log("you can take sick leaves earlier")
            service.event.title=service.event.title.substring(0,service.event.title.length-3) + "(A)"
            service.leaverequest.approvestatus="Leave Request has been Approved by " + this.employee.official[0].firstname+" "+this.employee.official[0].lastname
            service.leaverequest.approved_on=this.datepipe.transform(this.today,'yyyy-MM-dd')
            service.leaverequest.leavebalance=service.leaverequest.leavelimit-service.leaverequest.no_days
            service.save().toPromise().then(function(resp) {
              console.log(resp)
              // obj.service={leaverequest:{}}
            })
        
            var q=this.leavereq11.filter(obj=>(obj.leaverequest.leavetype=="Sick Leave" && obj.leaverequest.approved_on && !obj.leaverequest.cancelled_on))
            console.log(q)
            this.sumd=0;
            for(let y=0;y<q.length;y++)
            {
            console.log(q[y].leaverequest.approved_on);
            var newdate=new Date(this.datepipe.transform(q[y].leaverequest.approved_on,'yyyy-MM-dd'));
            var slmonth=newdate.getMonth();
            console.log(slmonth)
      
            if(slmonth>=0 && slmonth<=2)
            {
             this.sumd=this.sumd+q[y].leaverequest.no_days;
             console.log(this.sumd)
            }
            if(slmonth>=3 && slmonth<=5)
            {
             this.sumd=this.sumd+q[y].leaverequest.no_days;
             console.log(this.sumd)
            }
            if(slmonth>=6 && slmonth<=8)
            {
             this.sumd=this.sumd+q[y].leaverequest.no_days;
             console.log(this.sumd)
            }
            if(slmonth>=9 && slmonth<=11)
            {
             this.sumd=this.sumd+q[y].leaverequest.no_days;
             console.log(this.sumd)
            }
            }
            console.log(slmonth)
            console.log("you can't used sick leaves")
            console.log(this.sumd);
            console.log(service.leaverequest.no_days)
          // newdoj3 is after 3 months date from DOJ
            if(newdoj3>=this.fmiddleof3moth && newdoj3<=this.lastof3months)
            {
              console.log("middle1")
              objj.leave[1].usedleaves=objj.leave[1].usedleaves+parseFloat(service.leaverequest.no_days)
              objj.leave[2].leavebalance=objj.leave[2].leavebalance-service.leaverequest.no_days;
              
            }
            else if(newdoj3>=this.fmiddleof6moth && newdoj3<=this.lastof6months){
              console.log("middle2")
              objj.leave[1].usedleaves=objj.leave[1].usedleaves+parseFloat(service.leaverequest.no_days)
              objj.leave[2].leavebalance=objj.leave[2].leavebalance-service.leaverequest.no_days;
            }
            else if(newdoj3>=this.fmiddleof9moth && newdoj3<=this.lastof9months){
              console.log("middle3")
              objj.leave[1].usedleaves=objj.leave[1].usedleaves+parseFloat(service.leaverequest.no_days)
              objj.leave[2].leavebalance=objj.leave[2].leavebalance-service.leaverequest.no_days;
            }
            else if(newdoj3>=this.fmiddleof12moth && newdoj3<=this.lastof12months){
              console.log("middle4")
              objj.leave[1].usedleaves=objj.leave[1].usedleaves+parseFloat(service.leaverequest.no_days)
              objj.leave[2].leavebalance=objj.leave[2].leavebalance-service.leaverequest.no_days;
            }
            else
            {
              console.log("out of middle")
            if(this.sumd==1 && service.leaverequest.no_days==1)
            {
              console.log("X ");
              console.log("You take 1 more day leave")
              objj.leave[1].usedleaves=objj.leave[1].usedleaves+parseFloat(service.leaverequest.no_days)
              objj.leave[1].leavebalance=objj.leave[1].leavebalance-service.leaverequest.no_days
            }
             if(this.sumd==1 && service.leaverequest.no_days>1)
             {
               console.log("X1");
               console.log("1 day leave deduct from SL & remaining from PL")
               var pl=service.leaverequest.no_days-1;
               var sl=service.leaverequest.no_days-pl;
               objj.leave[1].usedleaves=objj.leave[1].usedleaves+sl
               objj.leave[2].usedleaves=objj.leave[2].usedleaves+pl
               objj.leave[1].leavebalance=objj.leave[1].leavebalance-sl;
               objj.leave[2].leavebalance=objj.leave[2].leavebalance-pl;
             }
            // Little Bit of Confusion in that 
             if(this.sumd>=2)
             {
               console.log("X2");
               objj.leave[2].usedleaves=objj.leave[2].usedleaves+parseFloat(service.leaverequest.no_days)
               objj.leave[2].leavebalance=objj.leave[2].leavebalance-service.leaverequest.no_days
             }
            }
        
               objj.save().toPromise().then(res=>{
               console.log(res)
               this.restangular.all('createemployee').getList()
               .subscribe(data=>{this.leavereq=data.filter(res=>res.leave)})
               //  msg.savemsg('Added Succesfully','alert alert-info');
               }) 
          }
        }


    if(service.leaverequest.leavetype=="Sick Leave" && new Date(this.dateofjoing).getFullYear()!=year)
    {
      service.event.title=service.event.title.substring(0,service.event.title.length-3) + "(A)"
      service.leaverequest.approvestatus="Leave Request has been Approved by " + this.employee.official[0].firstname+" "+this.employee.official[0].lastname
      service.leaverequest.approved_on=this.datepipe.transform(this.today,'yyyy-MM-dd')
      service.leaverequest.leavebalance=service.leaverequest.leavelimit-service.leaverequest.no_days

      console.log("New Year")
      console.log(objj.leave[1].leavebalance)
      console.log(objj.leave[2].leavebalance)
      if(service.leaverequest.from_date>this.startof1months && service.leaverequest.to_date<=this.lastof3months)
      {
        console.log("inside ifffffffffffff")
      var slleave=objj.leave[1].leavebalance-6
      var plleave=objj.leave[2].leavebalance-9
      console.log(slleave)
      console.log(plleave)
      if(objj.leave[1].leavebalance==6)
      {
        // objj.leave[1].usedleaves=objj.leave[1].usedleaves+parseFloat(service.leaverequest.no_days)
        objj.leave[2].leavebalance=objj.leave[2].leavebalance-service.leaverequest.no_days
        objj.leave[2].usedleaves=objj.leave[2].usedleaves+parseFloat(service.leaverequest.no_days)
        service.leaverequest.plleave=service.leaverequest.no_days
        service.leaverequest.slleave=0
        
      }
      if(objj.leave[1].leavebalance>6)
      {       
        if(service.leaverequest.no_days<=slleave)
        {
          objj.leave[1].leavebalance=objj.leave[1].leavebalance-service.leaverequest.no_days
          objj.leave[1].usedleaves=objj.leave[1].usedleaves+parseFloat(service.leaverequest.no_days)
          service.leaverequest.slleave=service.leaverequest.no_days
          service.leaverequest.plleave=0
        }
        if(service.leaverequest.no_days>slleave)
        {
          objj.leave[1].usedleaves=objj.leave[1].usedleaves+(slleave)
          objj.leave[1].leavebalance = objj.leave[1].leavebalance-slleave
          objj.leave[2].leavebalance=objj.leave[2].leavebalance-(service.leaverequest.no_days-slleave)
          objj.leave[2].usedleaves= objj.leave[2].usedleaves+(service.leaverequest.no_days-slleave)
          service.leaverequest.slleave=slleave
          service.leaverequest.plleave=(service.leaverequest.no_days-slleave)
        }
      }
     
       objj.save().toPromise().then(res=>{
               console.log(res)
               this.restangular.all('createemployee').getList()
               .subscribe(data=>{this.leavereq=data.filter(res=>res.leave)})
                // msg.savemsg('Added Succesfully','alert alert-info');
              }) 
       service.save().toPromise().then(function(resp) {
                console.log(resp)
                // obj.service={leaverequest:{}}
              })
      }

      if(service.leaverequest.from_date>this.lastof3months && service.leaverequest.to_date<=this.lastof6months)
      {
        console.log("inside ifffffffffffff")
      var slleave=objj.leave[1].leavebalance-4
      var plleave=objj.leave[2].leavebalance-6
      console.log(slleave)
      console.log(plleave)
      if(objj.leave[1].leavebalance==6)
      {
        // objj.leave[1].usedleaves=objj.leave[1].usedleaves+parseFloat(service.leaverequest.no_days)
        objj.leave[2].leavebalance=objj.leave[2].leavebalance-service.leaverequest.no_days
        objj.leave[2].usedleaves=objj.leave[2].usedleaves+parseFloat(service.leaverequest.no_days)  
      }
      if(objj.leave[1].leavebalance>6)
      {       
        if(service.leaverequest.no_days<=slleave)
        {
          objj.leave[1].leavebalance=objj.leave[1].leavebalance-service.leaverequest.no_days
          objj.leave[1].usedleaves=objj.leave[1].usedleaves+parseFloat(service.leaverequest.no_days)
        }
        if(service.leaverequest.no_days>slleave)
        {
          objj.leave[1].usedleaves=objj.leave[1].usedleaves+(slleave)
          objj.leave[1].leavebalance = objj.leave[1].leavebalance-slleave
          objj.leave[2].leavebalance=objj.leave[2].leavebalance-(service.leaverequest.no_days-slleave)
          objj.leave[2].usedleaves= objj.leave[2].usedleaves+(service.leaverequest.no_days-slleave)
        }
      }
     
       objj.save().toPromise().then(res=>{
               console.log(res)
               this.restangular.all('createemployee').getList()
               .subscribe(data=>{this.leavereq=data.filter(res=>res.leave)})
                // msg.savemsg('Added Succesfully','alert alert-info');
              }) 
      }

      if(service.leaverequest.from_date>this.lastof6months && service.leaverequest.to_date<=this.lastof9months)
      {
        console.log("inside ifffffffffffff")
      var slleave=objj.leave[1].leavebalance-2
      var plleave=objj.leave[2].leavebalance-3
      console.log(slleave)
      console.log(plleave)
      if(objj.leave[1].leavebalance==6)
      {
        // objj.leave[1].usedleaves=objj.leave[1].usedleaves+parseFloat(service.leaverequest.no_days)
        objj.leave[2].leavebalance=objj.leave[2].leavebalance-service.leaverequest.no_days
        objj.leave[2].usedleaves=objj.leave[2].usedleaves+parseFloat(service.leaverequest.no_days)  
      }
      if(objj.leave[1].leavebalance>6)
      {       
        if(service.leaverequest.no_days<=slleave)
        {
          objj.leave[1].leavebalance=objj.leave[1].leavebalance-service.leaverequest.no_days
          objj.leave[1].usedleaves=objj.leave[1].usedleaves+parseFloat(service.leaverequest.no_days)
        }
        if(service.leaverequest.no_days>slleave)
        {
          objj.leave[1].usedleaves=objj.leave[1].usedleaves+(slleave)
          objj.leave[1].leavebalance = objj.leave[1].leavebalance-slleave
          objj.leave[2].leavebalance=objj.leave[2].leavebalance-(service.leaverequest.no_days-slleave)
          objj.leave[2].usedleaves= objj.leave[2].usedleaves+(service.leaverequest.no_days-slleave)
        }
      }
     
       objj.save().toPromise().then(res=>{
               console.log(res)
               this.restangular.all('createemployee').getList()
               .subscribe(data=>{this.leavereq=data.filter(res=>res.leave)})
                // msg.savemsg('Added Succesfully','alert alert-info');
              }) 
      }

      if(service.leaverequest.from_date>this.lastof9months && service.leaverequest.to_date<=this.lastof12months)
      {
        console.log("inside ifffffffffffff")
      var slleave=objj.leave[1].leavebalance-0
      var plleave=objj.leave[2].leavebalance-0
      console.log(slleave)
      console.log(plleave)
      if(objj.leave[1].leavebalance==6)
      {
        // objj.leave[1].usedleaves=objj.leave[1].usedleaves+parseFloat(service.leaverequest.no_days)
        objj.leave[2].leavebalance=objj.leave[2].leavebalance-service.leaverequest.no_days
        objj.leave[2].usedleaves=objj.leave[2].usedleaves+parseFloat(service.leaverequest.no_days)  
      }
      if(objj.leave[1].leavebalance>6)
      {       
        if(service.leaverequest.no_days<=slleave)
        {
          objj.leave[1].leavebalance=objj.leave[1].leavebalance-service.leaverequest.no_days
          objj.leave[1].usedleaves=objj.leave[1].usedleaves+parseFloat(service.leaverequest.no_days)
        }
        if(service.leaverequest.no_days>slleave)
        {
          objj.leave[1].usedleaves=objj.leave[1].usedleaves+(slleave)
          objj.leave[1].leavebalance = objj.leave[1].leavebalance-slleave
          objj.leave[2].leavebalance=objj.leave[2].leavebalance-(service.leaverequest.no_days-slleave)
          objj.leave[2].usedleaves= objj.leave[2].usedleaves+(service.leaverequest.no_days-slleave)
        }
      }
     
       objj.save().toPromise().then(res=>{
               console.log(res)
               this.restangular.all('createemployee').getList()
               .subscribe(data=>{this.leavereq=data.filter(res=>res.leave)})
                // msg.savemsg('Added Succesfully','alert alert-info');
              }) 
      }

      
    }

// Casual Leave Starts Here
  if(service.leaverequest.leavetype=="Casual Leave")
   {
    console.log("CCCLLL")
    service.event.title=service.event.title.substring(0,service.event.title.length-3) + "(A)"
    service.leaverequest.approvestatus="Leave Request has been Approved by " + this.employee.official[0].firstname+" "+this.employee.official[0].lastname
    service.leaverequest.approved_on=this.datepipe.transform(this.today,'yyyy-MM-dd')
    service.leaverequest.leavebalance=service.leaverequest.leavelimit-service.leaverequest.no_days
    service.save().toPromise().then(function(resp) {
      console.log(resp)
    })
    objj.leave[0].usedleaves=objj.leave[0].usedleaves+parseFloat(service.leaverequest.no_days)
    objj.leave[0].leavebalance=objj.leave[0].leavebalance-parseFloat(service.leaverequest.no_days)
    objj.save().toPromise().then(res=>{
      console.log(res)
      this.restangular.all('createemployee').getList()
      .subscribe(data=>{this.leavereq=data.filter(res=>res.leave)})
    }) 

      }
    }

    else if('Rejected'==service.leaverequest.status)
        {
           var objj=this.leavereq.find(obj=>obj.official[0].username==service.username)
           console.log(objj);
           service.event.title=service.event.title.substring(0,service.event.title.length-3) + "(R)"
           service.leaverequest.rejectstatus="Leave Request has been Rejected by " + this.employee.official[0].firstname+" "+this.employee.official[0].lastname
           service.leaverequest.rejected_on=this.datepipe.transform(this.today,'yyyy-MM-dd')
           service.leaverequest.leavebalance=objj.leave[0].leavebalance
           service.save().toPromise().then(function(resp) {
              console.log(resp)
              // obj.service={leaverequest:{}}
            })
        }
      else if('Cancelled'==service.leaverequest.status)
        {
          // service.leaverequest.cancelled_on=this.today;

          var objj=this.leavereq.find(obj=>obj.official[0].username==service.username)
          console.log(objj);
          console.log(service.leaverequest.status)
          this.cancelleave=service;
          var objj2=this.leavereq11.find(obj=>obj.TempId==service.TempId);
          console.log(objj2)
          console.log(objj2.leaverequest.status)

         // Maternity Leave Starts Here
         
         if(service.leaverequest.leavetype=="Maternity Leave" && objj.leave[3].usedleaves!=0 && objj2.leaverequest.status=='Approved')
         {
           console.log("Maternity Leave")
           service.event.title=service.event.title.substring(0,service.event.title.length-3) + "(C)"
           service.leaverequest.cancelstatus="Leave Request has been Cancelled by " + this.employee.official[0].firstname+" "+this.employee.official[0].lastname
           service.leaverequest.cancelled_on=this.datepipe.transform(this.today,'yyyy-MM-dd')
           service.leaverequest.leavebalance=objj.leave[0].leavebalance+service.leaverequest.no_days
           console.log(service.leavebalance)
           service.save().toPromise().then(function(resp) {
            console.log(resp)
            })
          if(service.leaverequest.no_days>182)
          {
            console.log("more than 182")
            var minus=service.leaverequest.no_days-182
            objj.leave[3].usedleaves=objj.leave[3].usedleaves-182;
            objj.leave[2].usedleaves=objj.leave[2].usedleaves-minus
            objj.leave[3].leavebalance=objj.leave[3].leavebalance+182;
            objj.leave[2].leavebalance=objj.leave[2].leavebalance+minus
            objj.save().toPromise().then(res=>{
              console.log(res)
              this.restangular.all('createemployee').getList()
              .subscribe(data=>{this.leavereq=data.filter(res=>res.leave)})
              })
          }
          if(service.leaverequest.no_days<=182)
          {
            console.log("less than 182")
          objj.leave[3].usedleaves=objj.leave[3].usedleaves-parseFloat(service.leaverequest.no_days)
          objj.leave[3].leavebalance=objj.leave[3].leavebalance+service.leaverequest.no_days
          objj.save().toPromise().then(res=>{
          console.log(res)
          this.restangular.all('createemployee').getList()
          .subscribe(data=>{this.leavereq=data.filter(res=>res.leave)})
          })
          }
          
          }
         // Paternity Leave Starts Here
         if(service.leaverequest.leavetype=="Paternity Leave" && objj.leave[3].usedleaves!=0 && objj2.leaverequest.status=='Approved')
         {
           console.log("Paternity Leave");
           service.event.title=service.event.title.substring(0,service.event.title.length-3) + "(C)"
           service.leaverequest.cancelstatus="Leave Request has been Cancelled by " + this.employee.official[0].firstname+" "+this.employee.official[0].lastname
           service.leaverequest.cancelled_on=this.datepipe.transform(this.today,'yyyy-MM-dd')
           service.leaverequest.leavebalance=objj.leave[0].leavebalance+service.leaverequest.no_days
           console.log(service.leavebalance)
           service.save().toPromise().then(function(resp) {
            console.log(resp)
            })

           objj.leave[3].usedleaves=objj.leave[3].usedleaves-parseFloat(service.leaverequest.no_days);
           objj.leave[3].leavebalance=objj.leave[3].leavebalance+parseFloat(service.leaverequest.no_days);
           objj.save().toPromise().then(res=>{
            console.log(res)
            this.restangular.all('createemployee').getList()
            .subscribe(data=>{this.leavereq=data.filter(res=>res.leave)})
            })
          }
        // Leave Without Pay Starts Here
         if(service.leaverequest.leavetype=="Leave Without Pay" && objj.leave[4].usedleaves!=0 && objj2.leaverequest.status=='Approved')
        {
           console.log("Leave Without Pay");
           service.event.title=service.event.title.substring(0,service.event.title.length-3) + "(C)"
           service.leaverequest.cancelstatus="Leave Request has been Cancelled by " + this.employee.official[0].firstname+" "+this.employee.official[0].lastname
           service.leaverequest.cancelled_on=this.datepipe.transform(this.today,'yyyy-MM-dd')
           service.leaverequest.leavebalance=objj.leave[0].leavebalance+service.leaverequest.no_days
           console.log(service.leavebalance)
           service.save().toPromise().then(function(resp) {
            console.log(resp)
            })

           objj.leave[4].usedleaves=objj.leave[4].usedleaves-parseFloat(service.leaverequest.no_days);
           objj.leave[4].leavebalance=objj.leave[4].leavebalance+parseFloat(service.leaverequest.no_days);
           objj.save().toPromise().then(res=>{
            console.log(res)
            this.restangular.all('createemployee').getList()
            .subscribe(data=>{this.leavereq=data.filter(res=>res.leave)})
            })
        }
        // Leave Starts Here
        if(service.leaverequest.leavetype=="Leave" && objj.leave[0].usedleaves!=0 && objj2.leaverequest.status=='Approved')
        {
           console.log("Leave");
           service.event.title=service.event.title.substring(0,service.event.title.length-3) + "(C)"
           service.leaverequest.cancelstatus="Leave Request has been Cancelled by " + this.employee.official[0].firstname+" "+this.employee.official[0].lastname
           service.leaverequest.cancelled_on=this.datepipe.transform(this.today,'yyyy-MM-dd')
           service.leaverequest.leavebalance=objj.leave[0].leavebalance+service.leaverequest.no_days
           console.log(service.leavebalance)
           service.save().toPromise().then(function(resp) {
            console.log(resp)
            })

           objj.leave[0].usedleaves=objj.leave[0].usedleaves-parseFloat(service.leaverequest.no_days);
           objj.leave[0].leavebalance=objj.leave[0].leavebalance+parseFloat(service.leaverequest.no_days);
           objj.save().toPromise().then(res=>{
            console.log(res)
            this.restangular.all('createemployee').getList()
            .subscribe(data=>{this.leavereq=data.filter(res=>res.leave)})
            })
          }
        // Mandatory Leaves Starts Here 
        if(service.leaverequest.leavetype=="Mandatory Leave" && objj.leave[5].usedleaves!=0 && objj2.leaverequest.status=='Approved')
        {
           console.log("Mandatory Leave");
           service.event.title=service.event.title.substring(0,service.event.title.length-3) + "(C)"
           service.leaverequest.cancelstatus="Leave Request has been Cancelled by " + this.employee.official[0].firstname+" "+this.employee.official[0].lastname
           service.leaverequest.cancelled_on=this.datepipe.transform(this.today,'yyyy-MM-dd')
           service.leaverequest.leavebalance=objj.leave[0].leavebalance+service.leaverequest.no_days
           console.log(service.leavebalance)
           service.save().toPromise().then(function(resp) {
            console.log(resp)
            })

           objj.leave[5].usedleaves=objj.leave[5].usedleaves-parseFloat(service.leaverequest.no_days);
           objj.leave[5].leavebalance=objj.leave[5].leavebalance+parseFloat(service.leaverequest.no_days);
           objj.save().toPromise().then(res=>{
           console.log(res)
           this.restangular.all('createemployee').getList()
            .subscribe(data=>{this.leavereq=data.filter(res=>res.leave)})
            })
        }
        // Privilege Leaves Starts Here
        if(service.leaverequest.leavetype=="Privilege Leave" && objj.leave[2].usedleaves!=0 && objj2.leaverequest.status=='Approved')
        {
           console.log("Privilege Leave");
           service.event.title=service.event.title.substring(0,service.event.title.length-3) + "(C)"
           service.leaverequest.cancelstatus="Leave Request has been Cancelled by " + this.employee.official[0].firstname+" "+this.employee.official[0].lastname
           service.leaverequest.cancelled_on=this.datepipe.transform(this.today,'yyyy-MM-dd')
           service.leaverequest.leavebalance=objj.leave[0].leavebalance+service.leaverequest.no_days
           console.log(service.leavebalance)
           service.save().toPromise().then(function(resp) {
            console.log(resp)
            })

           objj.leave[2].usedleaves=objj.leave[2].usedleaves-parseFloat(service.leaverequest.no_days);
           objj.leave[2].leavebalance=objj.leave[2].leavebalance+parseFloat(service.leaverequest.no_days);
           objj.save().toPromise().then(res=>{
           console.log(res)
           this.restangular.all('createemployee').getList()
            .subscribe(data=>{this.leavereq=data.filter(res=>res.leave)})
            })
        }

         // Sick Leaves Starts Here
         if(service.leaverequest.leavetype=="Sick Leave" && new Date(this.dateofjoing).getFullYear()==year && objj.leave[1].usedleaves!=0 && objj2.leaverequest.status=='Approved')
         {
          service.event.title=service.event.title.substring(0,service.event.title.length-3) + "(C)"
          service.leaverequest.cancelstatus="Leave Request has been Cancelled by " + this.employee.official[0].firstname+" "+this.employee.official[0].lastname
          service.leaverequest.cancelled_on=this.datepipe.transform(this.today,'yyyy-MM-dd')
          service.leaverequest.leavebalance=objj.leave[0].leavebalance+service.leaverequest.no_days
          console.log(service.leavebalance)
          service.save().toPromise().then(function(resp) {
           console.log(resp)
           })
           if(service.leaverequest.no_days>2)
           {
            console.log("sick Leaves greater than 2");
            // objj.leave[1].usedleaves=objj.leave[1].usedleaves-parseFloat(service.leaverequest.no_days);
            // objj.leave[1].leavebalance=objj.leave[1].leavebalance+parseFloat(service.leaverequest.no_days);
            var pl=service.leaverequest.no_days-2;
            var sl=service.leaverequest.no_days-pl;
            objj.leave[1].usedleaves=objj.leave[1].usedleaves-sl
            objj.leave[2].usedleaves=objj.leave[2].usedleaves-pl
            objj.leave[1].leavebalance=objj.leave[1].leavebalance+sl;
            objj.leave[2].leavebalance=objj.leave[2].leavebalance+pl;
            objj.save().toPromise().then(res=>{
            console.log(res)
            this.restangular.all('createemployee').getList()
             .subscribe(data=>{this.leavereq=data.filter(res=>res.leave)})
             })
            }
            if(service.leaverequest.no_days<=2)
            {
              console.log("sick Leaves less than 2");
              objj.leave[1].usedleaves=objj.leave[1].usedleaves-parseFloat(service.leaverequest.no_days);
              objj.leave[1].leavebalance=objj.leave[1].leavebalance+parseFloat(service.leaverequest.no_days);
              objj.save().toPromise().then(res=>{
              console.log(res)
              this.restangular.all('createemployee').getList()
             .subscribe(data=>{this.leavereq=data.filter(res=>res.leave)})
             })
            }
         }
        //  sick leave working in next year of joining
        if(service.leaverequest.leavetype=="Sick Leave" && new Date(this.dateofjoing).getFullYear()!=year && objj.leave[1].usedleaves!=0 && objj2.leaverequest.status=='Approved')
      {
      service.event.title=service.event.title.substring(0,service.event.title.length-3) + "(A)"
      service.leaverequest.approvestatus="Leave Request has been Approved by " + this.employee.official[0].firstname+" "+this.employee.official[0].lastname
      service.leaverequest.approved_on=this.datepipe.transform(this.today,'yyyy-MM-dd')
      service.leaverequest.leavebalance=service.leaverequest.leavelimit+service.leaverequest.no_days
      service.save().toPromise().then(function(resp) {
        console.log(resp)
        obj.service={leaverequest:{}}
      })
         objj.leave[1].usedleaves=objj.leave[1].usedleaves-service.leaverequest.slleave
         objj.leave[2].usedleaves=objj.leave[2].usedleaves-service.leaverequest.plleave
         objj.leave[1].leavebalance=objj.leave[1].leavebalance+parseFloat(service.leaverequest.slleave)
         objj.leave[2].leavebalance=objj.leave[2].leavebalance+service.leaverequest.plleave
         objj.save().toPromise().then(res=>{
          console.log(res)
          this.restangular.all('createemployee').getList()
          .subscribe(data=>{this.leavereq=data.filter(res=>res.leave)})
                    // msg.savemsg('Added Succesfully','alert alert-info');
          }) 
      }
     
 
          // Combined
          if((objj.leave[0].usedleaves==0 && objj2.leaverequest.leavetype=="Casual Leave") || (objj.leave[3].usedleaves==0 && objj2.leaverequest.leavetype=="Maternity Leave") ||  (objj.leave[3].usedleaves==0 && objj2.leaverequest.leavetype=="Paternity Leave") ||  (objj.leave[0].usedleaves==0 && objj2.leaverequest.leavetype=="Leave") ||  (objj.leave[4].usedleaves==0 && objj2.leaverequest.leavetype=="Leave Without Pay") || (objj.leave[5].usedleaves==0 && objj2.leaverequest.leavetype=="Mandatory Leave") || (objj.leave[2].usedleaves==0 && objj2.leaverequest.leavetype=="Privilege Leave") || (objj.leave[1].usedleaves==0 && objj2.leaverequest.leavetype=="Sick Leave"))
          {
               console.log("Combined")
               service.event.title=service.event.title.substring(0,service.event.title.length-3) + "(C)"
               service.leaverequest.cancelstatus="Leave Request has been Cancelled by " + this.employee.official[0].firstname+" "+this.employee.official[0].lastname
               service.leaverequest.cancelled_on=this.datepipe.transform(this.today,'yyyy-MM-dd')

               if(objj.leave[0].usedleaves==0 && objj2.leaverequest.leavetype=="Casual Leave")
               {
               service.leaverequest.leavebalance=objj.leave[0].leavebalance
               }
               if(objj.leave[1].usedleaves==0 && objj2.leaverequest.leavetype=="Sick Leave")
               {
               service.leaverequest.leavebalance=objj.leave[1].leavebalance
               }
               if(objj.leave[2].usedleaves==0 && objj2.leaverequest.leavetype=="Privilege Leave")
               {
               service.leaverequest.leavebalance=objj.leave[2].leavebalance
               }
               if(objj.leave[3].usedleaves==0 && objj2.leaverequest.leavetype=="Maternity Leave")
               {
                service.leaverequest.leavebalance=objj.leave[3].leavebalance
               }
               if(objj.leave[3].usedleaves==0 && objj2.leaverequest.leavetype=="Paternity Leave")
               {
                service.leaverequest.leavebalance=objj.leave[3].leavebalance
               }
               if(objj.leave[4].usedleaves==0 && objj2.leaverequest.leavetype=="Leave Without Pay")
               {
                service.leaverequest.leavebalance=objj.leave[4].leavebalance
               }
               if(objj.leave[0].usedleaves==0 && objj2.leaverequest.leavetype=="Leave")
               {
                service.leaverequest.leavebalance=objj.leave[0].leavebalance
               }
               if(objj.leave[5].usedleaves==0 && objj2.leaverequest.leavetype=="Mandatory Leave")
               {
                service.leaverequest.leavebalance=objj.leave[5].leavebalance
               }
               service.save().toPromise().then(function(resp) {
                console.log(resp)
                // obj.service={leaverequest:{}}
              })
          }
          // Casual Leave
          else if(objj.leave[0].usedleaves!=0 && objj2.leaverequest.status=='Approved' && objj2.leaverequest.leavetype=="Casual Leave")
          {
            console.log("xyz")
            service.event.title=service.event.title.substring(0,service.event.title.length-3) + "(C)"
            service.leaverequest.cancelstatus="Leave Request has been Cancelled by " + this.employee.official[0].firstname+" "+this.employee.official[0].lastname
            service.leaverequest.cancelled_on=this.datepipe.transform(this.today,'yyyy-MM-dd')
            service.leaverequest.leavebalance=objj.leave[0].leavebalance+service.leaverequest.no_days
            console.log(service.leavebalance)
            service.save().toPromise().then(function(resp) {
             console.log(resp)
             })
               console.log("zzz")
 
              objj.leave[0].usedleaves=objj.leave[0].usedleaves-parseFloat(service.leaverequest.no_days);
              objj.leave[0].leavebalance=objj.leave[0].leavebalance+parseFloat(service.leaverequest.no_days);
              objj.save().toPromise().then(res=>{
                console.log(res)
                this.restangular.all('createemployee').getList()
                .subscribe(data=>{this.leavereq=data.filter(res=>res.leave)})
                }) 
          }
          else if(objj.leave[0].usedleaves!=0 && objj2.leaverequest.status=='Pending for approval' && objj2.leaverequest.leavetype=="Casual Leave")
          {
            console.log("vyz")
            service.event.title=service.event.title.substring(0,service.event.title.length-3) + "(C)"
            service.leaverequest.cancelstatus="Leave Request has been Cancelled by " + this.employee.official[0].firstname+" "+this.employee.official[0].lastname
            service.leaverequest.cancelled_on=this.datepipe.transform(this.today,'yyyy-MM-dd')
            service.leaverequest.leavebalance=objj.leave[0].leavebalance
            service.save().toPromise().then(function(resp) {
             console.log(resp)
             // obj.service={leaverequest:{}}
           })
          }
        }
  
        // console.log(objjj.leaverequest.no_days)
      }
      
  }

selectvalue;
  select(ddt) 
{

  this.selectvalue=ddt
  console.log(this.selectvalue)

}

  cancel(){
  this.service={leaverequest:{}}
}
leavereq;
officiald1;
offild;


ngOnInit() {
  this.getuser=JSON.parse(localStorage.getItem('user'));
  console.log(this.getuser)
  
  
  
  if(this.getuser.employee_OId && this.getuser.employee_OId!='' ){
   
    console.log(this.getuser.username)
    // this.action(this.service)
    // console.log(this.obj.official[0].username)
    
    //  console.log(this.obj.official[0].username)
     console.log("kkk")
    this.restangular.all('selfservice').getList().subscribe(res=>{
     this.leavemanagement=res
     console.log(this.leavemanagement)
      res.forEach(data=>{
        console.log(data.event);
        data.push(data.event)
      })
       this.action(this.service)
    });
  }
   
    //console.log(this.datepipe.transform( new Date(),'yyyy-MM-dd'))
    this.restangular.all('createemployee').getList({_id:this.getuser.employee_OId}).subscribe(res=>{
       console.log(res)
   this.employee=res[0]
   if(res[0].official[0].reporting_mid=="" || res[0].official[0].reporting_mid==undefined)
   {
    //  this.msg1=true;
    //  console.log(this.msg1)
   }
   this.leave();
   })
  
   var baseOfficial = this.restangular.all('createemployee');
   baseOfficial.getList().subscribe(data => {
     this.officiald = data
     console.log(this.officiald)
     return this.officiald;
   });
  
   let baseExitType = this.restangular.all('createemployee');
   baseExitType.getList().subscribe(data => {
   this.leavereq =data.filter(res=>res.leave);
   console.log(this.leavereq)
   return this.leavereq;
   });

   let baseExitType1 = this.restangular.all('selfservice');
   baseExitType1.getList().subscribe(data => {
   this.leavereq11 =data.filter(res=>res.leaverequest);
   console.log(this.leavereq11)
   return this.leavereq11;
   });
  
  
   var baseOfficial = this.restangular.all('createemployee');
   baseOfficial.getList().subscribe(data => {
     this.officiald1 = data
     console.log(this.officiald1)
     return this.officiald;
   });

   var baseLeaveReq = this.restangular.all('selfservice');
   baseLeaveReq.getList().subscribe(data => {
     this.leaveld = data
     console.log(this.leaveld)
     return this.leaveld;
   });
   
   
  
  if(this.getuser.employee_OId && this.getuser.employee_OId!='')
   {
     console.log(this.getuser.username)
     console.log(this.rep)
    //  console.log(this.obj.official[0].username)
   this.restangular.all('selfservice').getList().subscribe(res=>{
    console.log(res)
    // this.reportingmanager=res[0]
    // this.restangular.all('createemployee').getList({reporting_mid:res[0]._id}).subscribe(res=>{
      this.leavemanagement=res
      console.log(this.leavemanagement)
      
   });
  //  });
  }
    }
  
  }
  