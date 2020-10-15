import { Component, OnInit ,OnChanges,ChangeDetectionStrategy,Input,Output,
  ViewEncapsulation,EventEmitter,  TemplateRef} from '@angular/core';
import { CalendarEvent ,CalendarMonthViewDay} from 'angular-calendar';
import { CalendarModule } from 'angular-calendar';
import { WeekDay,WeekViewEventRow,WeekViewEvent,getWeekViewHeader, } from 'calendar-utils';
import {UserService } from '../../../user.service';
import { Restangular } from 'ngx-restangular';
import { DatePipe } from '@angular/common';
import {Observable} from 'rxjs';
import { Subject } from 'rxjs/Subject';


import {
  subMonths,
  addMonths,
  addDays,
  addWeeks,
  subDays,
  subWeeks,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  startOfDay,
  endOfDay,
} from 'date-fns';

const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  }}
type CalendarPeriod = 'day' | 'week' | 'month';
function addPeriod(period: CalendarPeriod, date: Date, amount: number): Date {
  console.log({
    day: addDays,
    week: addWeeks,
    month: addMonths
  }[period](date, amount))
  return {
    day: addDays,
    week: addWeeks,
    month: addMonths
  }[period](date, amount);
}

function subPeriod(period: CalendarPeriod, date: Date, amount: number): Date {
  return {
    day: subDays,
    week: subWeeks,
    month: subMonths
  }[period](date, amount);
}

function startOfPeriod(period: CalendarPeriod, date: Date): Date {

  console.log({
    day: startOfDay,
    week: startOfWeek,
    month: startOfMonth
  }[period](date))
  return {
    day: startOfDay,
    week: startOfWeek,
    month: startOfMonth
  }[period](date);
}

function endOfPeriod(period: CalendarPeriod, date: Date): Date {
  return {
    day: endOfDay,
    week: endOfWeek,
    month: endOfMonth
  }[period](date);
}

@Component({
  
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css'],  styles: ['angular-calendar/dist/css/angular-calendar.css'],
  providers: [DatePipe],

})

export class TimesheetComponent implements OnInit ,OnChanges   {

  @Input() customTemplate: TemplateRef<any>;

 view: CalendarPeriod = 'month';

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

  minDate: Date = subMonths(new Date(), 1);

  maxDate: Date = addMonths(new Date(), 1);
  entertime=false;timebtn=false;
  prevBtnDisabled: boolean = false;
  show;
  nextBtnDisabled: boolean = false;
  clikableday:any;
  sweek=[];
  weekdayobj=[];
  weekdayobj1=[{'startdate':"",'enddate':"",'weekrequest':[],'status':"",'total':"00:00",'taskname':"",'projectname':""}];
  weekdayobj2=[{'startdate':"",'enddate':"",'weekrequest':[],'status':"",'total':"00:00",'taskname':"",'projectname':""}];
  selectedtask;
  weeknote
  weeklynote="Nothing Entered";
  daystatus=[];
  usertask
  selecttimeobj
  selectday;
  timecollection
  projectcollection;
  newdata={date:Date,task:Object}
  userid;
  createdate:Date
  adventures=[];
  week_headers=[];
  //itype=[{time:true},{time:true},{time:true},{time:false},{time:true},{time:true},{time:true},{time:true}]
  weekday=[{'day':'Sunday'},{'day':'Monday'},{'day':'Tuesday'},{'day':'Wednesday'},
                {'day':'Thursday'},{'day':'Friday'},{'day':'Saturday'}]
  monthnum=[{month:'Jan'},{month:'Feb'},{month:'Mar'},{month:'Apr'},{month:'May'},
             {month:'Jun'},{month:'Jul'},{month:'Aug'},{month:'Sep'},{month:'Oct'},
             {month:'Nov'},{month:'Dec'}]
  monthnum1=[{month:'January'},{month:'February'},{month:'March'},{month:'April'},{month:'May'},
             {month:'June'},{month:'July'},{month:'August'},{month:'September'},{month:'October'},
             {month:'November'},{month:'December'}]

  
 // calendarobj={task:[{tk:"analysis",hours:{type:String}},{tk:"document",hours:{type:String}},{tk:"coding",hours:{type:String}}],hours:"",date:{type:Date},status:"noentry"}           
  constructor(userservice:UserService,private restangular:Restangular,private datepipe:DatePipe) {
    this.dateOrViewChanged();
  }

  // increment(): void {
  //   this.changeDate(addPeriod(this.view, this.viewDate,1));
  // }

  // decrement(): void {
  //   this.changeDate(subPeriod(this.view, this.viewDate,1));
  // }

  // today(): void {
  //   this.changeDate(new Date());
  // }

  viewMonth=this.monthnum1[this.viewDate.getMonth()].month;
  viewYear;
  // this.viewMonth
  increment(): void {
    this.changeDate(addPeriod(this.view, this.viewDate,1));
    console.log(this.view)
    this.viewMonth=this.monthnum1[this.viewDate.getMonth()].month
    console.log(this.viewMonth)
  }

  decrement(): void {
    this.changeDate(subPeriod(this.view, this.viewDate,1));
    console.log(this.view)
    console.log(this.viewDate)
    this.viewMonth=this.monthnum1[this.viewDate.getMonth()].month
    console.log(this.viewMonth)
  }

  today(): void {
    this.changeDate(new Date());
    this.viewMonth=this.monthnum1[this.viewDate.getMonth()].month
    console.log(this.viewMonth)
  }


  yr
  mnt
  findMnt(){
    this.yr = new Date().getFullYear();
    // this.mnt = new Date().getMonth();
    this.mnt = this.monthnum[new Date().getMonth()].month
  }
  
  

  changeDate(date: Date): void {
    this.viewDate = date;
   // console.log(this.viewDate)
    this.dateOrViewChanged();
  }

  changeView(view: CalendarPeriod): void {
    this.view = view;
    this.dateOrViewChanged();
  }
 changeView1(view: CalendarPeriod,day): void {
    this.view = view;
    this.changeDate(day)
    this.show=!this.show
   
  }
  openWeek(e)
  {
   // console.log(e.day.date)
    this.clikableday=e.day.date
    this.changeView1('week',this.clikableday);
  }
 dateOrViewChanged(): void {
    this.prevBtnDisabled = !this.dateIsValid(
      endOfPeriod(this.view, subPeriod(this.view, this.viewDate, 1))
    );
    this.nextBtnDisabled = !this.dateIsValid(
      startOfPeriod(this.view, addPeriod(this.view, this.viewDate, 1))
    );
    if (this.viewDate < this.minDate) {
     // console.log(this.viewDate,this.minDate)
    //  console.log( this.changeDate(this.minDate))
      this.changeDate(this.minDate);
    } else if (this.viewDate > this.maxDate) {
     // console.log(this.viewDate,this.minDate)
     // console.log(this.changeDate(this.maxDate))
      this.changeDate(this.maxDate);
    }
  }

fun()
{
    console.log("calendar")
}

monthheaders=[];
dateIsValid(date: Date): boolean {
    return date >= this.minDate && date <= this.maxDate;
  }
findevent(date1,date2,res)
{
  var flag=false;
/* console.log(date,res,new Date(res.startdate).getMonth(),date.getMonth())*/

  if( (new Date(res.startdate).getMonth() == date1.getMonth() && new Date(res.startdate).getFullYear() == date1.getFullYear()
       ||  new Date(res.startdate).getMonth() == date2.getMonth() && new Date(res.startdate).getFullYear() == date2.getFullYear()  )   && (res.employee_id._id==this.userid.employee_OId || res.employee_id==this.userid.employee_OId) )
  {
    console.log(res)
    flag=true
   // console.log(res.date.filter(res=>res.shortDate))
  }

return flag;
}


beforeMonthViewRender( header ,eve): void {
  console.log(header)
    this.monthheaders=header.body;
  //  console.log(this.monthheaders)
 //   console.log(eve)
   
this.selecttimeobj=[]

    setTimeout(()=>{
       var date1= header.body[0].date
       var date2= header.body[7].date
   
       var array= this.timecollection.filter(resp=>true==this.findevent(date1,date2,resp))
       // console.log(this.selecttimeobj)
        array.forEach(res=>{     
           this.selecttimeobj= this.selecttimeobj.concat(res.weekrequest)
           console.log( this.selecttimeobj)
    })

    header.body.forEach((res,key)=>{
   /* const newDay={weekdate:{type:Date},dayHour:"00:00",disable:true,read:true}
    newDay.weekdate=res;*/
    var newarr= this.selecttimeobj.filter(resp=>true==this.findTime(res,resp))
    if(newarr[0])
    {
    //this.addEvent(res,newarr[0])
    console.log(newarr)
    if(res.isFuture) {
      newarr[0].status="",newarr[0].hours="00:00"
    }
     res.events.push({title:newarr[0].status,hours:newarr[0].hours,start:startOfDay(new Date(res.date)),color:colors.gray})
     //console.log(res)
  
      this.refresh.next()
    }else{
      if(!res.isFuture)
        { res.events.push({title:'No-Entry',hours:'00:00',start:startOfDay(new Date(res.date)),color:colors.gray})

          this.refresh.next()
        }//console.log(res)
    }
    })
  
    },500);

    header.header.forEach(header => {
   

      if (!this.dateIsValid(header.date)) {
   
    //    console.log(header)
        header.cssClass = 'cal-disabled';
      }
    });
  }
startdt;
enddt;
fornewenter(header,weekday,cmonth)
{
weekday[0]=this.restangular.one('timesheet')
weekday[0].startdate=""
weekday[0].enddate=""
weekday[0].weekrequest=[];
weekday[0].status="";
weekday[0].total="00:00"
var taskname
  this.startdt=this.datepipe.transform(header.header[0].date,'yyyy-MM-dd');
  this.enddt=this.datepipe.transform(header.header[6].date,'yyyy-MM-dd')
  console.log(this.startdt)
  console.log(this.enddt)
  weekday[0].startdate=this.datepipe.transform(header.header[0].date,'yyyy-MM-dd')
  weekday[0].enddate=this.datepipe.transform(header.header[6].date,'yyyy-MM-dd')

  header.header.forEach((header,hkey) => {
  var create={activity:[],status:"No-Entry",disabled:true,hours:"00:00",date:"",readonly:false,color:"#8C333C"}
       
        create.activity.push("00:00")
        console.log(taskname)  
        //var eval(resa.task)=""
     

   if((header.isToday) || (cmonth==header.date.getMonth()) &&!header.isFuture )
   {
    //  console.log(!(cmonth==header.date.getMonth()),!header.isFuture)
      create.disabled=false;
    //  console.log(this.weekdayobj[hkey])
    }
   create.date=this.datepipe.transform(header.date,'yyyy-MM-dd')
   weekday[0].weekrequest.push(create)

   console.log(weekday)

   
})
}
beforeWeekViewRender(header): void 
{
 console.log(header)
//  console.log(task)
  if(this.task_options.length==0)
  {
    console.log("taskkkkkkkkkkk")
    this.timebtn=true;
  }
  this.week_headers=header;
  this.weekdayobj=[]
 //this.weekdayobj1=[{'startdate':"",'enddate':"",'weekrequest':[]}];
  this.adventures=[]
  var cmonth=new Date().getMonth()
  console.log(cmonth)
  this.sweek=[];
//-------------get day,date,month for calender header display-----------------
header.header.forEach((header,hkey) => {
const obj={day:"",date:{type:Date()},month:"",hour:{type:Number}}
     this.weekday.forEach((day,wkey)=>
     {  
        if(hkey==wkey)
        {
           //console.log(hkey,wkey)
           obj.day=day.day
           obj.date=header.date;
           obj.month=this.monthnum[header.date.getMonth()].month
           this.sweek.push(obj)
           console.log(this.sweek)
           console.log(obj)
        //   console.log(obj)      
        }
    })
});

console.log("Start date",header.header[0].date)
console.log("End date",header.header[6].date)
this.fornewenter(header,this.weekdayobj2,cmonth)

var array= this.timecollection.filter(res=>true==this.findweek(header.header[0].date,header.header[6].date,res))

if(array[0])
{

  console.log(array)
  this.weekdayobj1=array;
  header.header.forEach((header,hkey) => {
          var filterobj= this.weekdayobj1[0].weekrequest.filter(res=>this.datepipe.transform(res.date,'yyyy-MM-dd')==this.datepipe.transform(header.date,'yyyy-MM-dd'))
        console.log(filterobj)
          if(filterobj[0])
          {
         //   console.log(filterobj)
            if((!header.isToday) || (cmonth!=header.date.getMonth()) && !header.isFuture )
             {    
                filterobj[0].disabled=true;  
              }
           // this.weekdayobj1[0].weekrequest.push(filterobj[0])
          } else {
               console.log(filterobj)
               var taskname
               var create={activity:[],status:"No-Entry",disabled:true,hours:"00:00",date:"",readonly:false,color:"#8C333C"}
                    
                   
                     create.activity.push("00:00")
                     console.log(taskname)  
                   //var eval(resa.task)=""
              
               /* -------------for disabling input time -------------------*/
               if((header.isToday) || (cmonth==header.date.getMonth()) && !header.isFuture )
               {    
                   create.disabled=false;  
                   create.status=""
                   create.hours="00:00"
               }
               create.date=this.datepipe.transform(header.date,'yyyy-MM-dd')
               this.weekdayobj1[0].weekrequest.push(create)
              console.log(this.weekdayobj1[0]) 

          }   
  })

} else{
console.log(this.weekdayobj1)
this.fornewenter(header,this.weekdayobj1,cmonth)

}
 // console.log(this.weekdayobj)
  //this.totalday(this.weekdayobj)
  this.totalday(this.weekdayobj1)  
}

findweek(start,end,res){

  var flag=false;

  if( (this.datepipe.transform(res.startdate,'yyyy-MM-dd')===this.datepipe.transform(start,'yyyy-MM-dd') &&
       this.datepipe.transform(res.enddate,'yyyy-MM-dd')===this.datepipe.transform(end,'yyyy-MM-dd') )   &&
      (res.employee_id._id==this.userid.employee_OId || res.employee_id==this.userid.employee_OId) )
  {
    console.log(res)
    flag=true
   // console.log(res.date.filter(res=>res.shortDate))
  }

return flag;
}

totalhours=[];
totalweekhours=[]
select
sumhours="00:00"
totalday(weekday)
{
   this.totalhours=[]
   this.totalweekhours=[]
   this.sumhours="00:00"
   this.select='';

//-------------- for sum week calculation  ----------------
      var count=Object.keys(weekday[0].weekrequest[0].activity);
      count.map((val,key)=>{
      var hours=0, minutes=0;
      weekday[0].weekrequest.filter((res,keys)=>{
      console.log(keys)
       Object.keys(res.activity).map((resp,k)=>{
         console.log(resp)
         if(key==k && (res.hours!="NaN:NaN" && res.hours!=""))
         {
            let day=res.activity[resp].split(":")
            console.log(day)
            let cdate = new Date (new Date(res.date).toDateString())
            console.log(cdate,day);
            cdate.setHours(cdate.getHours() + Number(day[0]));
            cdate.setMinutes( cdate.getMinutes() + Number(day[1]));
            console.log(cdate)
            hours +=cdate.getHours()
            minutes +=cdate.getMinutes()
            this.select=hours +":"+ minutes 
           
           // this.totalweekhours.push(this.select)
            console.log(this.select);
         }
          
        }) ;
//-----total hours of week       
          console.log(weekday[0].weekrequest.length)
          console.log(weekday[0].weekrequest.length-1)
          console.log(keys)
       if(weekday[0].weekrequest.length-1==keys) {
         var s1=this.select.split(":")
       
         var s2=this.sumhours.split(":")
   
         this.select=Number(s1[0])+Math.floor((Number(s1[1])/60))+":"+ Number(s1[1])%60;
         this.select=this.select.replace(/\d+/g, (match, offset, string) => match < 10 ? '0' + match : match)
         this.totalweekhours.push(this.select);
         var s3=this.select.split(":")
         this.sumhours=(Number(s2[0])+Number(s3[0])) +Math.floor ((Number(s3[1])+Number(s2[1]))/60) + ":" + (Number(s3[1])+Number(s2[1])%60)
         
          this.sumhours=this.sumhours.replace(/\d+/g, (match, offset, string) =>Number(match)< 10? '0' + match :match)
         console.log(this.totalweekhours, this.sumhours)
       }
       }) 
     })
}
findTime(header,res)
{ 
 var flag=false;
  if(this.datepipe.transform(res.date,'yyyy-MM-dd')===this.datepipe.transform(header.date,'yyyy-MM-dd')  )
  {
    console.log(res.date)
    flag=true
   // console.log(res.date.filter(res=>res.shortDate))
  }

return flag;
  
}


// used for task fetching for perticular employee
task_options=[];
projname;
findproject(obj)
{
  var flag=false;
  console.log(obj)
  console.log(obj.resource_time.length)

  if(obj.resource_time.length!=0)
  {
    obj.resource_time.forEach(res=>{
      console.log(res);
     console.log(this.userid.employee_OId)
     console.log(res.id)
    if(res.id==this.userid.employee_OId) {

      flag=true;
      res.official.filter(res=>{
        console.log(res)
        this.projname=res;
        this.task_options.push(res.taskname)
        console.log(this.task_options)
      })

    }})
  }else{
    console.log("there is no employee")    
  }  
  return flag;
}

// after click on enter time put the every day working hours that time this method use

createtimeobj(task,e,i,j,val)
{
  console.log(task)
 console.log(e)
 console.log(val.date)
  if(this.adventures.length!=0){
    var count = 0
    this.adventures.forEach((resp,rkey)=>{
      
          if(val.date === resp.date)
          {
            console.log("dup")
            resp=val
            console.log(resp)
          }      else{
                      count++
                      if(this.adventures.length == count)
                      {
                        console.log("new")
                        val.status="Yet to Submit"
                        val.color="#4D99A0"
                        val.readonly=false
                        this.adventures.push(val)
                        console.log(this.adventures)

                      }    
                }
      })
    }  else{
              console.log("its first")
              val.status="Yet to Submit"
              val.color="#4D99A0"
              val.readonly=false
              this.adventures.push(val)
              console.log(this.adventures)
              // val.save().toPromise().then(res=>{
              //   console.log(res)
              //   this.selectedtask="";
              //   this.restangular.all('timesheet').getList().subscribe(data=>{
              //               this.timecollection=data;
              //               console.log(this.timecollection)
              //               })
              //               console.log(this.adventures);
              //               console.log(this.weekdayobj2)
              //  }) 
          }

}
//Fuction for save employee timesheet

sethours(rs)
{
    var hours;
    var d1 = new Date (new Date(rs.date).toDateString())
    Object.keys(rs.activity).map(resp=>{
    var day=rs.activity[resp].split(":")

    d1.setHours (d1.getHours() + Number(day[0]))
    d1.setMinutes ( d1.getMinutes() + Number(day[1]) );
    hours=d1.getHours()+":"+d1.getMinutes()
    hours=hours.replace(/\d+/g, (match, offset, string) => match < 10 ? '0' + match : match)

    })
    return hours;
}
fstatus;
work;
eraseFlag;
status;
objdate
eraserHide(pt)
{
  var obj = this.timesht.find(obj=>obj.employee_id==this.userid.employee_OId);
  this.objdate = this.timesht.find(obj=>obj.employee_id==this.userid.employee_OId && obj.startdate==this.startdt  && obj.enddate==this.enddt)
  console.log(obj)
  console.log(pt.date)
  console.log(this.objdate)
  console.log(this.objdate)
  console.log(this.work)
  console.log(obj.taskname)
  console.log(this.startdt)
  console.log(this.objdate.startdate)
  console.log(this.enddt)
  console.log(this.objdate.enddate)

  if(this.objdate.startdate==this.startdt && this.objdate.enddate==this.enddt)
   { 
    this.fstatus=this.objdate.status;
    console.log(this.fstatus)
     if(this.objdate.weekrequest!=undefined){
      console.log(this.objdate.weekrequest.length)
      for(var i=0;i<this.objdate.weekrequest.length;i++)
      {
        if(this.objdate.weekrequest[i].status=="Yet to Submit" && this.objdate.weekrequest[i].date==pt.date)
        {
          console.log("Weekrequest Status : "+this.objdate.weekrequest[i].status)
          console.log("Status of "+i+ " is "+this.objdate.weekrequest[i].status);
          console.log("Activity : "+this.objdate.weekrequest[i].activity)
          console.log("Date : "+this.objdate.weekrequest[i].date)
          // this.objdate.splice(this.objdate.weekrequest[i].activity,1)
          // console.log(this.objdate.splice(this.objdate.weekrequest[i].activity,1))
          // this.status.push(objdate.weekrequest[i].status)
          // console.log(this.status)
          this.timesht=this.objdate.weekrequest[i].activity;
          while(this.timesht!=0){
            this.timesht.pop();
          }
          console.log(this.timesht)
          this.timesht.slice(pt,1)
          console.log(this.timesht.slice(pt,1))
        }
        else{
          this.eraseFlag=false;
          this.fstatus="";
        }
      }
  }
}
}

// eraserHours(pt)
// {
//   var obj = this.timesht.filter(obj=>obj.employee_id==this.userid.employee_OId && obj.startdate==this.startdt && obj.enddate==this.enddt);
//   console.log(pt)
//   console.log(pt.date)
//   console.log(obj)
//   console.log(obj.status)
    
//   if(obj.weekrequest!=undefined){
//       console.log(obj.weekrequest.length)
//       for(var i=0;i<obj.weekrequest.length;i++)
//       {
//         console.log("Inside for")
//         if(obj.weekrequest[i].status=="Yet to Submit" && obj.weekrequest[i].date==pt.date)
//         {
//           console.log("Inside If")
//           console.log("Weekrequest Status : "+obj.weekrequest[i].status)
//           console.log("Weekrequest Status : "+obj.weekrequest[i].activity)
//           // obj.splice(obj.weekrequest[i],1);
//         }
//       }
// }
// }

eraserWeek(pt){
  console.log(pt)
  this.restangular.all('timesheet').getList({employee_id:this.userid.employee_OId} && {startdate:this.startdt} && {enddate:this.enddt}).subscribe(data1=>{
    data1.filter(obj=>{
  (obj.employee_id==this.userid.employee_OId && obj.startdate==this.startdt && obj.enddate==this.enddt)
  obj.splice(pt,1);
})
  this.timecollection=data1;  
  // this.timecollection.splice(pt);
})
}

savetimesheet(sval,data)
{
var flag=true;
this.adventures.forEach((rs,keys)=>{
  console.log(rs)
if(rs.status=="Yet to Submit")
{
   flag=false;
}
if(rs.status!="No-Entry")
{
  console.log("save only")
  rs.hours=this.sethours(rs)
}else{
    console.log(this.userid.employee_OId)
    rs.hours=this.sethours(rs)
    rs.date=this.datepipe.transform(rs.date,'yyyy-MM-dd')
    rs.hours=rs.hours
    rs.status=sval
    rs.color="#4D99A0"
    rs.readonly=false
   
    console.log(rs.hours)
    console.log(rs.date)
    console.log(rs.status)
    console.log(rs.activity)
    console.log("save new")

}

    if(this.adventures.length-1 == keys){
     
       var tottime=this.totalhoursfun(data)
       data.total=tottime
       data.employee_id=this.userid.employee_OId
       data.project_id=this.projectcollection[0]._id  
       data.taskname=this.selectedtask   
       data.projectname=this.projname.project
       console.log(data.projectname)
       data.status=sval
       console.log(this.weeknote)
       if(this.weeknote==undefined)
       {
       data.weeklynote=this.weeklynote
       }
       else{
        data.weeklynote=this.weeknote
       }
       data.month=new Date(data.startdate).getMonth()
       console.log(data.month)
       data.year=new Date(data.startdate).getFullYear()
       console.log(data.year)
       if(flag)
       {      
         data.status="Yet to Submit" 
       }  
       console.log(this.adventures)    
        
   data.save().toPromise().then(res=>{
       console.log(res)
       this.selectedtask="";
       this.restangular.all('timesheet').getList().subscribe(data=>{
                   this.timecollection=data;
                   console.log(this.timecollection)
                   })
                   console.log(this.adventures);
                   console.log(this.weekdayobj2)
      }) 
      
    }
    })
    
}
totalhoursfun(data)
{
   console.log(data)
    var total="00:00";
    data.weekrequest.filter((res,key)=>{
    if(res.status!="No-Entry")
    {    var s2=res.hours.split(":")
         var s1=total.split(":")
   
        total=Number(s1[0])+Math.floor((Number(s1[1])/60))+":"+ Number(s1[1])%60;
         total=total.replace(/\d+/g, (match, offset, string) => Number(match )< 10 ? '0' + match : match)
        
         var s3=total.split(":")
         total=(Number(s2[0])+Number(s3[0])) +Math.floor ((Number(s3[1])+Number(s2[1]))/60) + ":" + (Number(s3[1])+Number(s2[1])%60)
         
          total=total.replace(/\d+/g, (match, offset, string) =>Number(match)< 10? '0' + match :match)
        console.log(total)
    }
    

    });
  return  total;
       
}
updatetimesheet(sval,data)
{
 // console.log(this.weekdayobj)
 // console.log(this.adventures)
console.log(data)
var conf = confirm("Are you sure to save and submit timesheet for a week. Its an final submit.")
console.log(conf)
if(conf)
{
data.weekrequest.forEach((rs,keys)=>{
if(rs.status == "Yet to Submit" ){
  
    rs.status=sval
    console.log(rs.status)
    rs.color="orange"
    rs.readonly=true
    rs.hours=this.sethours(rs)
    rs.reasonofreject="";

}else {
console.log(rs)
}
if(data.weekrequest.length-1==keys)
{
    console.log(data)
    var tottime=this.totalhoursfun(data)
    data.total=tottime
    console.log(data.total)
    data.status=sval
    console.log(data.status)
    if(this.weeknote==undefined)
    {
    data.weeklynote=this.weeklynote
    }
    else{
     data.weeklynote=this.weeknote
    }
    data.reasonofreject="";
    var the=this
    console.log(the);
    var objdate = this.timesht.find(obj=>obj.employee_id==this.userid.employee_OId && obj.startdate==this.startdt  && obj.enddate==this.enddt)
    console.log(objdate)
    this.restangular.all('timesheet').getList({startdate:this.startdt} && {enddate:this.enddt}).subscribe(data1=>{
      data1.filter(obj=>{
    (obj.startdate==this.startdt && obj.enddate==this.enddt)
    console.log(data1)
    console.log(obj.startdate)
    console.log(this.startdt)
    console.log(obj.enddate)
    console.log(this.enddt)
    console.log(obj)
  })
    this.timecollection=data1;
    console.log(this.timecollection)
      this.timecollection.forEach(res=>{
      res.total=tottime
      res.status=sval
      res.reasonofreject="";
      if(this.weeknote==undefined)
      {
        res.weeklynote=this.weeklynote
      }
      else{
        res.weeklynote=this.weeknote
      }
      console.log(res);
      console.log(res.weekrequest)
      res.weekrequest=data.weekrequest
      console.log(res.weekrequest)
      res.save();  
    })
    });
}
})
}
else{
  console.log("Nothing");
}
}

findStatus(){
  this.objdate = this.timesht.find(obj=>obj.employee_id==this.userid.employee_OId && obj.startdate==this.startdt  && obj.enddate==this.enddt)

  if(this.objdate.startdate==this.startdt && this.objdate.enddate==this.enddt)
   { 
    this.fstatus=this.objdate.status;
    console.log(this.fstatus)
   }
}

timesht;
color='#FF0000'
ngOnChanges(weekdayobj)
{
  console.log('weekdayobj',weekdayobj)
}
ngOnDestroy(){
  console.log(this.view)
}

  refresh: Subject<any> = new Subject();

ngOnInit() {

     this.findMnt();

      this.monthheaders.forEach(r=>{
      console.log(r)
      })
      this.restangular.all('timesheet').getList({"populate":"employee_id project_id"}).subscribe(data=>{
      this.timecollection=data;
      console.log(this.timecollection)
});
      const user=localStorage.getItem('user');
      this.userid=JSON.parse(user)
      console.log(this.userid)
      console.log("jj")
      var baseemp=this.restangular.all('createemployee')
      //var baseproj=this.restangular.all('project')
      baseemp.getList({"_id":this.userid.employee_OId}).subscribe(data=>{
      console.log(data)
      })

      this.restangular.all('project_time').getList({type:'project'}).subscribe(data=>{
      console.log(data)
      this.projectcollection=data.filter(res=> true==this.findproject(res))
      console.log(this.projectcollection)
      if(this.projectcollection.length==0)
      {
      console.log("assign")
      this.projectcollection=[{task_time:[]}]
      console.log(this.projectcollection)
      }
/* if(this.projectcollection)
{
if(this.projectcollection[0].task_time.length>0)
{
console.log("have")
}
}*/

})

const baseTime =  this.restangular.all('timesheet')
baseTime.getList().subscribe(data=>{
  this.timesht=data;
  this.findStatus();
  return this.timesht;
})

}
}


