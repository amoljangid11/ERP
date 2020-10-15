import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../user.service';
import { Router} from '@angular/router';
import { TimeComponent } from '../time.component';
import { CalendarEvent ,CalendarMonthViewDay} from 'angular-calendar';
import { CalendarModule } from 'angular-calendar';
// import { TimesheetComponent } from 'app/Setup/time/timesheet/timesheet.component';

@Component({
  selector: 'app-employee-timesheet',
  templateUrl: './employee-timesheet.component.html',
  styleUrls: ['./employee-timesheet.component.css']
})
export class EmployeeTimesheetComponent implements OnInit {
pro;
dtasks;
officiald;
show=false;
totaltime;
timecollection;
timesheet;
forapprovall=false;
 formsg=false;
 alll=true;
 rejmsg=false;
 rejecte=false;
 appmsg=false;
 approve=false;
 blkmsg=false;
 enbmsg=false;
 block=false;
 enable=false;

constructor(private restangular:Restangular,private service:UserService,private router:Router,public time:TimeComponent){ }
alldata=[];
alltime=[];
office={official:[{}]};

empcnd = [
  { name: 'Employee' },
  { name: 'Candidate' },
];

dataset = [
  { name: 'Employee' },
  { name: 'Candidate' },
];

scrnary = [];


filterItem(value)
{
  value=value.toLowerCase();
  if(!value)
  {console.log("else")
    const val=this.restangular.all('createemployee');
    val.getList().subscribe(data => {
     
      console.log(data)
      this.officiald=data;
      return data
    });
    }
  else{
           this.officiald= this.officiald.filter(
      function (el: any) {
                return el.official[0].firstname.toLowerCase().indexOf(value) > -1 ||  el.official[0].lastname.toLowerCase().indexOf(value) > -1 ;
            }
      )
    console.log("searchfd")
    console.log(this.officiald)        
  }
 }
 


all(text)
{
  this.alll=true;
  this.forapprovall=false;
  this.rejecte=false;
  this.approve=false;
  this.enable=false;
   this.block=false;
  var array=[]
  console.log(text)
  if('all'==text)
  {
    this.timesheet.forEach(resp=>{
    array.push(resp)
    })
      console.log(array);
  }
  else
  {
    this.timesheet.forEach(resp=>
      {
       if(resp.status==text)
    {
      array.push(resp)
    }
    console.log(array);
      })
  }
     return this.alltime=array;
}


forapproval(text)
{
  this.alll=false;
  this.forapprovall=true;
  this.rejecte=false;
  this.approve=false;
  this.enable=false;
   this.block=false;
  var array=[]
  console.log(text)
  if('For Approval'==text)
  {
        this.timesheet.forEach(resp=>{
          console.log(resp.length)
          if(resp.status==text)
         { 
           console.log(text)
           array.push(resp)
        }    
       })
       console.log(array);
       console.log(array.length);
       if(array.length==0)
       {
         this.formsg=true;
       }
  }
  console.log(this.alltime=array);
      return this.alltime=array;
}


rejected(text)
{
  this.alll=false;
  this.rejecte=true;
  this.forapprovall=false;
  this.approve=false;
  this.enable=false;
   this.block=false;
  var array=[]
  console.log(text)
  if('Rejected'==text)
  {
        this.timesheet.forEach(resp=>{
          console.log(resp.length)
          if(resp.status==text)
          { 
            array.push(resp)
         } 
  })
  console.log(array);   
  console.log(array.length);   
  if(array.length==0)
  {
    this.rejmsg=true;
  } 
}
 
  console.log(this.alltime=array);
  return this.alltime=array;
}


approved(text)
{
 this.alll=false;
 this.approve=true;
 this.forapprovall=false;
  this.rejecte=false;
  this.enable=false;
   this.block=false;
   var array=[]
  console.log(text)
  if('Approved'==text)
  {
        this.timesheet.forEach(resp=>{
          console.log(resp.length)
          if(resp.status==text)
          { 
            array.push(resp)
         }    
     })
     console.log(array);
     console.log(array.length);
     if(array.length==0)
     {
       this.appmsg=true;
     }
  }
   console.log(this.alltime=array);
   return this.alltime=array;   
} 


blocked(text)
{
  this.alll=false;
 this.approve=false;
 this.forapprovall=false;
  this.rejecte=false;
  this.enable=false;
  this.block=true;
  var array=[]
  if('Blocked'==text)
  {
        this.timesheet.forEach(resp=>{
          if(resp.status==text)
          { 
            array.push(resp)
         }  
  })
  console.log(array);
  console.log(array.length);
  if(array.length==0)
  {
    this.blkmsg=true;
  }
}
console.log(this.alltime=array);
return this.alltime=array; 
}


enabled(text)
{
  this.alll=false;
  this.approve=false;
  this.forapprovall=false;
   this.rejecte=false;
   this.enable=true;
   this.block=false;
  var array=[]
  if('Enabled'==text)
  {
        this.timesheet.forEach(resp=>{
          if(resp.status==text)
          { 
            array.push(resp)
         }  
  })
  console.log(array);
  console.log(array.length);
  if(array.length==0)
  {
    this.enbmsg=true;
  }
}
console.log(this.alltime=array);
return this.alltime=array; 
}



updateStatus(data,tms){
  console.log(tms);
  console.log(tms.startdate)
  console.log(tms.enddate)
  console.log(tms.employee_id)
  if('Approved'==data)
  { 
      this.restangular.all('timesheet').getList({employee_id:tms.employee_id} && {startdate:tms.startdate} && {enddate:tms.enddate}).subscribe(data1=>{
      data1.filter(obj=>{
      (obj.employee_id==tms.employee_id && obj.startdate==tms.startdate && obj.enddate==tms.enddate)
      console.log(obj.startdate)
      console.log(tms.startdate)
      console.log(obj.enddate)
      console.log(tms.enddate)
      console.log(obj.employee_id)
      obj.status=data;
      console.log(obj.weekrequest.length)
      if(obj.employee_id==tms.employee_id && obj.startdate==tms.startdate && obj.enddate==tms.enddate)
      {
        obj.weekrequest.forEach(res=>{
          res.status=data;
        })
        obj.save();
      }
    })
      console.log(data1)
      this.timecollection=data1;
      console.log(this.timecollection)
  })
  }
  else if('Rejected'==data)
  {
   console.log(data)
   var reason = prompt('Reason/Note');
   this.restangular.all('timesheet').getList({employee_id:tms.employee_id} && {startdate:tms.startdate} && {enddate:tms.enddate}).subscribe(data1=>{
    data1.filter(obj=>{
    (obj.employee_id==tms.employee_id && obj.startdate==tms.startdate && obj.enddate==tms.enddate)
    console.log(obj.startdate)
    console.log(tms.startdate)
    console.log(obj.enddate)
    console.log(tms.enddate)
    console.log(obj.employee_id)
   obj.status=data;
   obj.reasonofreject=reason;
   if(obj.employee_id==tms.employee_id && obj.startdate==tms.startdate && obj.enddate==tms.enddate)
    {
      obj.weekrequest.forEach(res=>{
        res.status=data;
        res.reasonofreject=reason;
      })
      obj.save();
    }
  })
    console.log(data1)
    this.timecollection=data1;
    console.log(this.timecollection)
})
}
}

name;
status;
reportman;
viewTimesheet(data)
{
  console.log(data);
  var obj = this.officiald.find(obj=>obj._id==data.employee_id);
  console.log(obj);
  console.log(obj.official[0].firstname);
  console.log(obj.official[0].lastname);
  this.name = obj.official[0].firstname+" "+obj.official[0].lastname;
  this.reportman = obj.official[0].reportingmanager;
  console.log(this.reportman);
  console.log(this.name);
  var objt = this.timesheet.find(obj=>obj.employee_id==data.employee_id && obj.startdate==data.startdate && obj.enddate==data.enddate)
  this.status = objt.status;
  console.log(this.status);

  if(objt.employee_id==data.employee_id)
  {
   this.service.addTime(data);
  }
  // this.time.timesheet();
  // this.router.navigate(['./time',{outlets:{timechild:['employeetimesheet']}}])
}


viewDate(data)
{
  console.log(data);
}


ngOnInit() 
{
    // this.all('all')

  var baseOfficial= this.restangular.all('createemployee');
  baseOfficial.getList().subscribe(data=>{
  this.officiald=data;
  return this.officiald;
});

  var basePro=this.restangular.all('project_time');
  basePro.getList().subscribe(data=>
  {
  this.pro=data;
  return this.pro;
  });

  var baseTime=this.restangular.all('timesheet');
  baseTime.getList({}).subscribe( data=>{
  this.timesheet=data;
  return this.timesheet;
  });


  this.restangular.all('timesheet').getList({"populate":"employee_id project_id"}).subscribe(data=>{
    this.timecollection=data;
    console.log(this.timecollection)
});

  var baseDetail= this.restangular.all('defaulttask');
  baseDetail.getList().subscribe(data=>
 {
  this.dtasks=data
  return this.dtasks;
 });
  }
  }

