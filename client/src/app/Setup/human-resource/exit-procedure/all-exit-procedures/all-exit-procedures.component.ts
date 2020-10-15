import { Component, OnInit } from '@angular/core';
import { RestangularModule,Restangular } from 'ngx-restangular';
import {UserService } from '../../../../user.service';
import { Md2Dialog } from 'md2';
import { DatePipe } from '@angular/common';
import { ifError } from 'assert';

@Component({
  selector: 'app-all-exit-procedures',
  templateUrl: './all-exit-procedures.component.html',
  styleUrls: ['./all-exit-procedures.component.css'],
  providers:[DatePipe]
})
export class AllExitProceduresComponent implements OnInit {

  constructor(private restangular:Restangular,public datepipe:DatePipe, public service: UserService ) 
  { 
    this.object=this;
  }

  hdbut;
  initdata;
  object;
  officialdata
  procedure
  updatebutton = false;
  exitprocedure = {allexitprocedures:[{}]};
  exit = {exitinterviewquestion:[{}]};
  selectque={selectquestions:[{}]};
  initialstatus = {initiatecheckstatus:[{}]};
  // initi={exitinterview:[{}]};
  allexit=[]
  interview;
  selectedAll:any;
  selected;
  reportingmanager;
  pending=[]
 countall=0;
 pendingcount=0;
 cancelcount=0;
 approvedcount=0;
 rejectedcount=0;
 datas;
 alldata=[]
canceldata;
getuser;
leavemanagement;
exitinterviewquestion
employee;
data;
sts;
dte;
exitque;
 officiald;
  businessunit;
  department;
  etyp;
  fname;
  lname;
  uname;
  jt;
  doj;
 com;
 repo;
 hrm;
 l2m;
 seting;
 offdta;
 business;
 dept;
 obj1;
 obj2;objj6;
 que
 initialstatus1;
 extint;
 view='yes';
 today: number = Date.now();
 
 CurrentTime = new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds()

status = [
  {value: 'Approved', viewValue: 'Approve'},
  {value: 'Rejected', viewValue: 'Reject'},
  {value: 'Cancelled', viewValue: 'Cancel'}
 ];

 upstatus = [
  {value: 'Approved', viewValue: 'Approve'},
  {value: 'Rejected', viewValue: 'Reject'},
  {value: 'Cancelled', viewValue: 'Cancel'}
 ];

 open(dialog: Md2Dialog) {
  dialog.open();
  }

  close(dialog: any) {
    // this.ngOnInit();
  dialog.close();
  }

clickall(text)
{
  console.log("kkkkkkkkkkkkkkkk")
  var array=[]
  console.log(array)
  if('All'==text)
  {
       console.log(text)
        this.alldata.forEach(resp=>{       
      array.push(resp)
   })  
 }
 else
 {
  console.log(text)
    this.alldata.forEach(resp=>{
    if(resp.initiatecheckstatus[0].status==text)
    {
      console.log(text)
      array.push(resp)
    }
    else if(resp.initiatecheckstatus[0].Empstatus==text)
    {
      console.log(text)
      array.push(resp)
    }
   })
  }
  console.log(array)
 return this.initialstatus1=array;    
}

// cancelEmp(text)
// {
//   var array=[];
//   console.log(text)
//   this.alldata.forEach(resp=>{
//   if(resp.initiatecheckstatus[0].Empstatus==text)
//     {
//       console.log(text)
//       array.push(resp)
//     }
//    })
//   console.log(array)
//  return this.initialstatus1=array;  
// }

//  all(text)
//  {
//  	var array=[]
//  	if('All'==text)
//  	{
//      console.log("aaaaaaa")
//      console.log(text);
//       this.alldata.forEach(resp=>{
//       // console.log(resp.initiatecheckstatus)
//       console.log(resp.initiatecheckstatus[0].status)
//  			array.push(resp)
//  	})        
//    }
//    else{
//      console.log(text)
//  		this.alldata.forEach(resp=>{
//      if(resp.initiatecheckstatus[0].status==text)
//  		   {
//       //  console.log(resp.initiatecheckstatus)
//        console.log(resp.initiatecheckstatus[0].status)
//  		   array.push(resp)
//        }
//       else if(resp.initiatecheckstatus[0].L1status==text)
//          {
//           console.log(resp.initiatecheckstatus[0].L1status)
//           array.push(resp)
//          }
//       else if(resp.initiatecheckstatus[0].L2status==text)
//          {
//           console.log(resp.initiatecheckstatus[0].L2status)
//           array.push(resp)
//          }
//       else if(resp.initiatecheckstatus[0].Hrstatus==text)
//          {
//           console.log(resp.initiatecheckstatus[0].Hrstatus)
//           array.push(resp)
//          }
//     })
//  	} 
//     return this.allexit=array;
//  }
flag=false;
start()
 {
 	this.getuser=JSON.parse(localStorage.getItem('user'));
console.log(this.getuser)
 var id="5a704cb4ca8b97227478b4a9"

if(this.getuser.employee_OId && this.getuser.employee_OId!=''){
  this.restangular.all('exitprocedure').getList({hrmanagerid:this.getuser.employee_OId}).subscribe(res=>{
 	this.alldata=res;
console.log(this.alldata)
 	res.forEach(data=>{
 		this.countall++;
 		if(data.initiatecheckstatus[0].status=="Pending")
 		{
 			this.initialstatus1.push(data)
 			this.pendingcount++;
 		}else if(data.initiatecheckstatus[0].status=="Approved"){  this.approvedcount++ }
 		 else if(data.initiatecheckstatus[0].status=="Rejected"){ this.rejectedcount++ }
 		 	else if(data.initiatecheckstatus[0].Empstatus=="Cancelled"){ this.cancelbata=false; this.cancelcount++}
 	})
 });
}

 }
 cancelbata=true;

 start1()
 {
  // let qrst = this.officialdata.find(obj => obj._id ==this.getuser.employee_OId);
  // console.log(qrst);
 	this.getuser=JSON.parse(localStorage.getItem('user'));
console.log(this.getuser)
//  var id="5a704cb4ca8b97227478b4a9"
if(this.getuser.employee_OId && this.getuser.employee_OId!='')
{
	 this.restangular.all('exitprocedure').getList({empid:this.getuser.employee_OId}).subscribe(res=>{
 	this.alldata=res;
console.log(this.alldata)
 	res.forEach(data=>{
     this.countall++;
     console.log("Not Understandddddddddd");
     console.log(data.initiatecheckstatus[0].status);
 		if(data.initiatecheckstatus[0].status=="Pending")
 		{
 			this.allexit.push(data)
 			this.pendingcount++;
     }
     else if(data.initiatecheckstatus[0].status=="Approved")
     {this.approvedcount++}
      else if(data.initiatecheckstatus[0].status=="Rejected")
      {this.rejectedcount++}
        else if(data.initiatecheckstatus[0].status=="Cancelled")
        {this.cancelcount++}
   })
 });
 this.restangular.all('exitprocedure').getList({hrmanagerid:this.getuser.employee_OId}).subscribe(res=>{
  this.alldata=res;
console.log(this.alldata)
  res.forEach(data=>{
    this.countall++;
    if(data.initiatecheckstatus[0].status=="Pending")
    {
      this.allexit.push(data)
      this.pendingcount++;
    }
    else if(data.initiatecheckstatus[0].status=="Approved")
    {this.approvedcount++}
    else if(data.initiatecheckstatus[0].status=="Rejected")
    {this.rejectedcount++}
    else if(data.initiatecheckstatus[0].status=="Cancelled")
    {this.cancelcount++}
  })
});
this.restangular.all('exitprocedure').getList({l2managerid:this.getuser.employee_OId}).subscribe(res=>{
  this.alldata=res;
console.log(this.alldata)
  res.forEach(data=>{
    this.countall++;
    if(data.initiatecheckstatus[0].L2status=="Pending")
    {
      this.allexit.push(data)
      this.pendingcount++;
    }
    else if(data.initiatecheckstatus[0].L2status=="Approved")
    {this.approvedcount++}
    else if(data.initiatecheckstatus[0].L2status=="Rejected")
    {this.rejectedcount++}
    else if(data.initiatecheckstatus[0].L2status=="Cancelled")
    {this.cancelcount++}
  })
});
this.restangular.all('exitprocedure').getList({repoid:this.getuser.employee_OId}).subscribe(res=>{
  this.alldata=res;
console.log(this.alldata)
  res.forEach(data=>{
    this.countall++;
    if(data.initiatecheckstatus[0].L1status=="Pending")
    {
      this.allexit.push(data)
      this.pendingcount++;
    }
    else if(data.initiatecheckstatus[0].L1status=="Approved")
    {this.approvedcount++}
    else if(data.initiatecheckstatus[0].L1status=="Rejected")
    {this.rejectedcount++}
    else if(data.initiatecheckstatus[0].L1status=="Cancelled")
    {this.cancelcount++}
  })
});
}
// this.ngOnInit();
 }

  edit(emp) {
    this.updatebutton = true;
    this.initialstatus=emp;
  }

  cancel1(){
    document.getElementById('question').style.display='none';
    // this.procedure={allexitprocedures:[{}]};
    this.initialstatus = {initiatecheckstatus:[{}]};
  }
  cancel(){
    document.getElementById('statusedit').style.display='none';
    // document.getElementById('question').style.display='none';
    // this.procedure={allexitprocedures:[{}]};
    this.initialstatus = {initiatecheckstatus:[{}]};
  }
  obj6;

 
  selectAll() {
    for (var i = 0; i < this.exitproc.length; i++) {
      this.exitproc[i].selected = this.selectedAll;
      // this.obj6=this.que.find(obj=>obj.exitinterviewquestion[0].question==this.exitproc[i].selected)
      // console.log(this.obj6)
      console.log(this.selectedAll)
      console.log(this.exitproc[i].selected)
      console.log(this.exitproc[i].selected.question)
      console.log(this.exitproc)
    }
    // this.exitproc[i].save();
  }
  checkIfAllSelected() {
    this.selectedAll = this.exitproc.forEach(function(item:any) {
      // this.obj6=this.que.find(obj=>obj.exitinterviewquestion[0].question==item.selected.question)
      // console.log(this.obj6)
     console.log(item.selected)
      return item.selected == true;
      })
      console.log(this.selectedAll)
      console.log(this.exitproc)
    }
  
  comments;
  reldate;
  stss;
  update(emp)
  {
    this.obj1 = this.officialdata.find(obj => obj._id ==this.getuser.employee_OId);
    console.log(this.obj1)
    this.stss=this.status;
    emp.initiatecheckstatus[0].status=this.status;
    emp.initiatecheckstatus[0].comments=this.comments;
    emp.initiatecheckstatus[0].relievingdate=this.datepipe.transform(this.reldate ,'dd-MM-yyyy');
    emp.initiatecheckstatus[0].overallstatus="Overall Status of Exit Request has been"+" "+this.status+" "+"by"+" "+this.obj1.official[0].firstname+" "+this.obj1.official[0].lastname
    emp.initiatecheckstatus[0].relievingtime=this.CurrentTime
    emp.save().toPromise().then(function(resp) {  
    console.log(resp)
    })
    // this.initialstatus={initiatecheckstatus:[{}]}
  }
  
  delete(ann,i){
    if(confirm('Are you want to delete???')){
    ann.remove();
    console.log(ann)
    this.officialdata.splice(i,1);
    }
    else{
      this.cancel();
    }
  }

  
  etp;
  idd
  obj3;
  obj4;
  ques;
  reportman;
  objrep;
  hid;
  l2id;
  hrd;
  l2d;
  obj5;
  objjj6;
  gaid;
  hridd;l2idd;repoidd;objj4;objj3;
  showfm=false;
  showsa=false;
  showga=false;
  showl2=false;
  showl1=false;
  
  fetch()
  {
    let obj = this.initialstatus1.filter(obj => obj.empid ==this.getuser.employee_OId);
    console.log(obj);
     this.initialstatus=obj;
    console.log(this.initialstatus);
    this.etyp=obj.initiatecheckstatus[0].exittype;
    this.sts=obj.initiatecheckstatus[0].status;
    this.dte=obj.initiatecheckstatus[0].date;
    this.com=obj.initiatecheckstatus[0].comments;
    console.log(this.dte)

 this.obj1 = this.officialdata.find(obj => obj._id ==this.getuser.employee_OId);
 console.log(this.obj1)
 this.fname=this.obj1.official[0].firstname;
 console.log(this.fname)
 this.lname=this.obj1.official[0].lastname;
 this.uname=this.obj1.official[0].username;
 this.repo=this.obj1.official[0].reportingmanager;
 this.business=this.obj1.official[0].businessunit;
 this.dept=this.obj1.official[0].departments;
 this.jt=this.obj1.official[0].jobtitle;
 this.doj=this.obj1.official[0].dateofjoing;

 this.objrep = this.initialstatus1.find(obj=>obj.initiatecheckstatus[0].reportingmanager==this.obj1.official[0].reportingmanager);
 console.log(this.objrep)
 this.reportman=this.objrep.initiatecheckstatus[0].reportingmanager;
 this.etp=this.objrep.initiatecheckstatus[0].exittype;
 console.log(this.etp)
 console.log(this.reportman+" ddddddddddd");

this.obj5=this.initialstatus1.find(obj => obj.repoid== this.getuser.employee_OId)
console.log(this.obj5);
this.repoidd=this.obj5.repoid;
console.log(this.repoidd);

var checkIdd = this.initialstatus1.filter(obj => obj);
console.log(checkIdd);
} 


  abc()
  {
 this.objj3=this.initialstatus1.find(obj => obj.hrmanagerid==this.getuser.employee_OId)
 console.log(this.objj3);
 this.hridd=this.objj3.hrmanagerid
 console.log(this.hridd);
  }
  xyz()
  {
this.objj4=this.initialstatus1.find(obj => obj.l2managerid==this.getuser.employee_OId)
console.log(this.objj4);
this.l2idd=this.objj4.l2managerid
console.log(this.l2idd);
  }
objjj;
extypep;
repoiddd;
fmid;
said;
fmm;
saa;
gam;
Empsts;
stats=false;
  pqr(initialstatus)
  {
    this.Empsts=initialstatus.initiatecheckstatus[0].employeestatus;
    this.obj3 = this.seting.find(obj3=>obj3.exitsetting[0].businessunit==initialstatus.initiatecheckstatus[0].businessunit && obj3.exitsetting[0].department==initialstatus.initiatecheckstatus[0].department)
    console.log(this.obj3)
    this.hrm=this.obj3.exitsetting[0].hr_manager;
     this.hrd=this.obj3.exitsetting[0].hr_id;
    console.log(this.hrm)
    this.l2m=this.obj3.exitsetting[0].l2_manager;
    this.l2d=this.obj3.exitsetting[0].l2_id;
    this.gaid=this.obj3.exitsetting[0].ga_id;
    this.gam=this.obj3.exitsetting[0].general_admin;
    console.log(this.l2m)
   console.log(this.l2d+" L2")
   console.log(this.hrd+" HR")
   this.said=this.obj3.exitsetting[0].sa_id;
   this.saa=this.obj3.exitsetting[0].system_admin;
    console.log(this.fmid)
   console.log(this.fmm+" SA")
   this.fmm=this.obj3.exitsetting[0].finance_manager;
   this.fmid=this.obj3.exitsetting[0].fm_id;
    console.log(this.fmid)
   console.log(this.fmm+" FM")
    this.obj4=this.que.find(obj4=>obj4.exitinterviewquestion[0].exittype==initialstatus.initiatecheckstatus[0].exittype)
    console.log(this.obj4)
    console.log(initialstatus.initiatecheckstatus[0].exittype)
    // console.log(this.obj4.e)
    this.extypep=initialstatus.initiatecheckstatus[0].exittype
    this.ques=this.obj4.exitinterviewquestion[0].question;
    this.idd=this.obj4.exitinterviewquestion[0].exitid;
    console.log(this.ques);
   
    this.repoiddd=initialstatus.repoid;
    console.log("Repo : "+this.repoiddd);

    var fmid=initialstatus.fmanagerid;
    console.log("FM ID : "+fmid);

    var said=initialstatus.smanagerid;
    console.log("FM ID : "+said);
    // this.objjj=this..find(obj=>obj.initiatecheckstatus[0].exittype==)
  }
  saveque(ext){
 
     var create=this.restangular.one('exitprocedure')
    create.exitinterviewquestion=[]
    create.exitinterviewquestion.push(ext.exitinterviewquestion[0])
   create.exitinterviewquestion[0].exittype=this.extypep
    create.save().toPromise().then(res=>{
    console.log(res)
    this.restangular.all('exitprocedure').getList()
    .subscribe(data=>data.filter(res=>res.exitinterviewquestion)) 
    })
    this.exit={exitinterviewquestion:[{}]};
    this.ngOnInit();
  }
obj7;obj8;
  saveq(initialstatus)  {
    console.log(initialstatus);

    if(initialstatus)
    {
      console.log(initialstatus)
      //  var create=this.restangular.one('exitprocedure');
      initialstatus.selectquestions=[]
      this.obj7=this.exitproc.filter(obj=>obj.selected)
      console.log(this.obj7);
      console.log(this.obj7.exitid)
      for(let i=0;i<=this.obj7.length;i++)
      {
    
      console.log(this.obj7[i].exitinterviewquestion[0])
      // console.log(this.obj7[i].exitinterviewquestion[i])
      // var answer=""
      initialstatus.selectquestions[i]=this.obj7[i].exitinterviewquestion[0] 
      // initialstatus.selectquestions[i]=answer
      initialstatus.selectquestions[i].answer=""
      console.log(initialstatus.selectquestions)
      initialstatus.save().toPromise().then(res=>{
       console.log(res)
       this.restangular.all('exitprocedure').getList()
        .subscribe(data=>data.filter(res=>res.selectquestions))
       })
       this.selectque={selectquestions:[{}]};
      }
    }
  }

  hideqa()
  {
    this.service.queans()
  }
  hideqa1()
  {
    this.service.queans1()
  }
  
  edvwqueans(initialstatus)
  {
    console.log(initialstatus)
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaa")
    // for(var i=0;i<=this.objj6.length;i++)
    // {
  
    if(!initialstatus.selectquestions){
      console.log("eeeeeeeffffffffffff")
       this.hideqa() 
    }
   else if(initialstatus.selectquestions[0].answer){
    console.log("abbbbbcccccccddddddddddd")
    console.log(initialstatus)
    // this.service.queans1(initialstatus)
    this.hideqa1()
  }
  else if(initialstatus.selectquestions[0].question){
    console.log("xxxyyyyyyyyyyzzzzzzzzzzzz")
    // console.log(initialstatus)
    // this.service.queans1(initialstatus)
    this.hideqa1()
  }
  else{
    // this.service.queans(initialstatus)
    console.log("pqqqqqqqqqrrrrrrrrrrr")
    //  this.hideqa() 
  }
    // }
  }
  

  reason;
  status1;
  comments1;
  save(initialstatus)
  {
    var obj=this.object
    this.initialstatus = obj;
    
    let offic = this.officialdata.find(obj1 => obj1._id ==this.getuser.employee_OId);
    console.log(offic)
    console.log(this.reason);
    if(this.hrd==this.repoiddd){
      console.log("Id Matched")
      console.log("Hr Id : "+this.hrd)
      console.log("Repo id : "+this.repoiddd)
    }
    else if(this.l2d==this.repoiddd) {
      console.log("Id Matched")
      console.log("L2 Id : "+this.l2d)
      console.log("Repo id : "+this.repoiddd)
    }
    else if(this.l2d==this.hrd){
      console.log("Id Matched")
      console.log("L2 Id : "+this.l2d)
      console.log("Hr Id : "+this.hrd)
    }
    console.log(obj);
    console.log(initialstatus)
    // console.log(initialstatus.initiatecheckstatus.status)
    // console.log(initialstatus.initiatecheckstatus[0].status)
    console.log(this.getuser.utype)
    initialstatus.initiatecheckstatus[0].status1=this.status1
    initialstatus.initiatecheckstatus[0].comments1=this.comments1 
   if('Approved'==initialstatus.initiatecheckstatus[0].status1)
      {
        if(this.hrd==this.getuser.employee_OId && this.repoiddd==this.getuser.employee_OId)
        {
        console.log("AAAAAAAAAAAAAAAAAAA")
        initialstatus.initiatecheckstatus[0].Hrupdatetime = this.CurrentTime;
        initialstatus.initiatecheckstatus[0].Hrdate = this.datepipe.transform(this.today ,'dd-MM-yyyy');
        initialstatus.initiatecheckstatus[0].Hrstatus=initialstatus.initiatecheckstatus[0].status1
        initialstatus.initiatecheckstatus[0].Hrcomments=initialstatus.initiatecheckstatus[0].comments1
        
        initialstatus.initiatecheckstatus[0].L1status=initialstatus.initiatecheckstatus[0].status1
        initialstatus.initiatecheckstatus[0].L1comments=initialstatus.initiatecheckstatus[0].comments1
        initialstatus.initiatecheckstatus[0].L1updatetime = this.CurrentTime;
        initialstatus.initiatecheckstatus[0].L1date = this.datepipe.transform(this.today ,'dd-MM-yyyy');
        initialstatus.initiatecheckstatus[0].indexitreqstatusl1hr="Individual Status of Exit Request is"+" "+ initialstatus.initiatecheckstatus[0].Hrstatus +" "+"by"+" "+offic.official[0].firstname +" "+ offic.official[0].lastname
        initialstatus.save().toPromise().then(function(resp) {
          console.log(resp)
          console.log("HRRRRRRRRRRRRRRRRRRRRRRRRR")
          this.initialstatus={initiatecheckstatus:[{}]}
        })
        this.start();
        this.ngOnInit();
        } 
        else if(this.l2d==this.getuser.employee_OId && this.repoiddd==this.getuser.employee_OId)
        {
          initialstatus.initiatecheckstatus[0].L2updatetime = this.CurrentTime;
          initialstatus.initiatecheckstatus[0].L2date = this.datepipe.transform(this.today ,'dd-MM-yyyy');
          initialstatus.initiatecheckstatus[0].L2status=initialstatus.initiatecheckstatus[0].status1
          initialstatus.initiatecheckstatus[0].L2comments=initialstatus.initiatecheckstatus[0].comments1
          
          initialstatus.initiatecheckstatus[0].L1status=initialstatus.initiatecheckstatus[0].status1
          initialstatus.initiatecheckstatus[0].L1comments=initialstatus.initiatecheckstatus[0].comments1
          initialstatus.initiatecheckstatus[0].L1updatetime = this.CurrentTime;
          initialstatus.initiatecheckstatus[0].L1date = this.datepipe.transform(this.today ,'dd-MM-yyyy');
          initialstatus.initiatecheckstatus[0].indexitreqstatusl1l2="Individual Status of Exit Request is"+" "+ initialstatus.initiatecheckstatus[0].L2status +" "+"by"+" "+offic.official[0].firstname +" "+ offic.official[0].lastname
          initialstatus.save().toPromise().then(function(resp) {
            console.log(resp)
            console.log("HRRRRRRRRRRRRRRRRRRRRRRRRR")
            this.initialstatus={initiatecheckstatus:[{}]}
          })
        }     
        else  if(this.fmid==this.getuser.employee_OId && this.repoiddd==this.getuser.employee_OId)
        {
        console.log("AAAAAAAAAAAAAAAAAAA")
        initialstatus.initiatecheckstatus[0].FMupdatetime = this.CurrentTime;
        initialstatus.initiatecheckstatus[0].FMdate = this.datepipe.transform(this.today ,'dd-MM-yyyy');
        initialstatus.initiatecheckstatus[0].FMstatus=initialstatus.initiatecheckstatus[0].status1;
        initialstatus.initiatecheckstatus[0].FMcomments=initialstatus.initiatecheckstatus[0].comments1;
        initialstatus.initiatecheckstatus[0].FMreason=this.reason;
        
        initialstatus.initiatecheckstatus[0].L1status=initialstatus.initiatecheckstatus[0].status1
        initialstatus.initiatecheckstatus[0].L1comments=initialstatus.initiatecheckstatus[0].comments1
        initialstatus.initiatecheckstatus[0].L1updatetime = this.CurrentTime;

        initialstatus.initiatecheckstatus[0].L1date = this.datepipe.transform(this.today ,'dd-MM-yyyy');
        initialstatus.initiatecheckstatus[0].indexitreqstatusl1fm="Individual Status of Exit Request is"+" "+ initialstatus.initiatecheckstatus[0].FMstatus +" "+"by"+" "+offic.official[0].firstname +" "+ offic.official[0].lastname
        initialstatus.save().toPromise().then(function(resp) {
          console.log(resp)
          console.log("HRRRRRRRRRRRRRRRRRRRRRRRRR")
          this.initialstatus={initiatecheckstatus:[{}]}
        })
        this.start();
        this.ngOnInit();
        }    
        else  if(this.said==this.getuser.employee_OId && this.repoiddd==this.getuser.employee_OId)
        {
        console.log("AAAAAAAAAAAAAAAAAAA")
        initialstatus.initiatecheckstatus[0].SAupdatetime = this.CurrentTime;
        initialstatus.initiatecheckstatus[0].SAdate = this.datepipe.transform(this.today ,'dd-MM-yyyy');
        initialstatus.initiatecheckstatus[0].SAstatus=initialstatus.initiatecheckstatus[0].status1
        initialstatus.initiatecheckstatus[0].SAcomments=initialstatus.initiatecheckstatus[0].comments1
        initialstatus.initiatecheckstatus[0].SAreason=this.reason;
        
        initialstatus.initiatecheckstatus[0].L1status=initialstatus.initiatecheckstatus[0].status1
        initialstatus.initiatecheckstatus[0].L1comments=initialstatus.initiatecheckstatus[0].comments1
        initialstatus.initiatecheckstatus[0].L1updatetime = this.CurrentTime;
   
        initialstatus.initiatecheckstatus[0].L1date = this.datepipe.transform(this.today ,'dd-MM-yyyy');
        initialstatus.initiatecheckstatus[0].indexitreqstatusl1sa="Individual Status of Exit Request is"+" "+ initialstatus.initiatecheckstatus[0].SAstatus +" "+"by"+" "+offic.official[0].firstname +" "+ offic.official[0].lastname
        initialstatus.save().toPromise().then(function(resp) {
          console.log(resp)
          console.log("HRRRRRRRRRRRRRRRRRRRRRRRRR")
          this.initialstatus={initiatecheckstatus:[{}]}
        })
        this.start();
        this.ngOnInit();
        } 
        else  if(this.gaid==this.getuser.employee_OId && this.repoiddd==this.getuser.employee_OId)
        {
        console.log("AAAAAAAAAAAAAAAAAAA")
        initialstatus.initiatecheckstatus[0].GAupdatetime = this.CurrentTime;
        initialstatus.initiatecheckstatus[0].GAdate = this.datepipe.transform(this.today ,'dd-MM-yyyy');
        initialstatus.initiatecheckstatus[0].GAstatus=initialstatus.initiatecheckstatus[0].status1
        initialstatus.initiatecheckstatus[0].GAcomments=initialstatus.initiatecheckstatus[0].comments1
        initialstatus.initiatecheckstatus[0].GAreason=this.reason;
        
        initialstatus.initiatecheckstatus[0].L1status=initialstatus.initiatecheckstatus[0].status1
        initialstatus.initiatecheckstatus[0].L1comments=initialstatus.initiatecheckstatus[0].comments1
        initialstatus.initiatecheckstatus[0].L1updatetime = this.CurrentTime;
      
        initialstatus.initiatecheckstatus[0].L1date = this.datepipe.transform(this.today ,'dd-MM-yyyy');
        initialstatus.initiatecheckstatus[0].indexitreqstatusl1ga="Individual Status of Exit Request is"+" "+ initialstatus.initiatecheckstatus[0].GAstatus +" "+"by"+" "+offic.official[0].firstname +" "+ offic.official[0].lastname
        initialstatus.save().toPromise().then(function(resp) {
          console.log(resp)
          console.log("HRRRRRRRRRRRRRRRRRRRRRRRRR")
          this.initialstatus={initiatecheckstatus:[{}]}
        })
        this.start();
        this.ngOnInit();
        }
        else if(this.hrd==this.getuser.employee_OId){
          console.log("AAAAAAAAAAAAAAAAAAA")
        initialstatus.initiatecheckstatus[0].Hrupdatetime = this.CurrentTime;
        initialstatus.initiatecheckstatus[0].Hrdate = this.datepipe.transform(this.today ,'dd-MM-yyyy');
        initialstatus.initiatecheckstatus[0].Hrstatus=initialstatus.initiatecheckstatus[0].status1
        initialstatus.initiatecheckstatus[0].Hrcomments=initialstatus.initiatecheckstatus[0].comments1
        initialstatus.initiatecheckstatus[0].indexitreqstatushr="Individual Status of Exit Request is"+" "+ initialstatus.initiatecheckstatus[0].Hrstatus +" "+"by"+" "+offic.official[0].firstname +" "+ offic.official[0].lastname
        initialstatus.save().toPromise().then(function(resp){
          console.log(resp)
          console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa")
          this.initialstatus={initiatecheckstatus:[{}]}    
          this.ngOnInit();      
        })
          this.ngOnInit();
        }
        else if(this.l2d==this.getuser.employee_OId){
          console.log("BBBBBBBBBBBBBBBBBBB")
          initialstatus.initiatecheckstatus[0].L2updatetime = this.CurrentTime;
          initialstatus.initiatecheckstatus[0].L2date = this.datepipe.transform(this.today ,'dd-MM-yyyy');
          initialstatus.initiatecheckstatus[0].L2status=initialstatus.initiatecheckstatus[0].status1
          initialstatus.initiatecheckstatus[0].L2comments=initialstatus.initiatecheckstatus[0].comments1
          initialstatus.initiatecheckstatus[0].indexitreqstatusl2="Individual Status of Exit Request is"+" "+ initialstatus.initiatecheckstatus[0].L2status +" "+"by"+" "+offic.official[0].firstname +" "+ offic.official[0].lastname
          initialstatus.save().toPromise().then(function(resp){
            console.log(resp)
            console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa")
            this.initialstatus={initiatecheckstatus:[{}]}
          })
        }
        else if(this.repoiddd==this.getuser.employee_OId){
          console.log("CCCCCCCCCCCCCCCCCCCCC")
          initialstatus.initiatecheckstatus[0].L1status=initialstatus.initiatecheckstatus[0].status1
          initialstatus.initiatecheckstatus[0].L1comments=initialstatus.initiatecheckstatus[0].comments1
          initialstatus.initiatecheckstatus[0].L1updatetime = this.CurrentTime;
          initialstatus.initiatecheckstatus[0].L1date = this.datepipe.transform(this.today ,'dd-MM-yyyy');
          initialstatus.initiatecheckstatus[0].indexitreqstatusl1="Individual Status of Exit Request is"+" "+ initialstatus.initiatecheckstatus[0].L1status +" "+"by"+" "+offic.official[0].firstname +" "+ offic.official[0].lastname
          initialstatus.save().toPromise().then(function(resp){
            console.log(resp)
            console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa")
            this.initialstatus={initiatecheckstatus:[{}]}
          })
        }
        else if(this.said==this.getuser.employee_OId){
          console.log("ssssssssssssssssss")
          initialstatus.initiatecheckstatus[0].SAstatus=initialstatus.initiatecheckstatus[0].status1
          initialstatus.initiatecheckstatus[0].SAcomments=initialstatus.initiatecheckstatus[0].comments1
          initialstatus.initiatecheckstatus[0].SAupdatetime = this.CurrentTime;
          initialstatus.initiatecheckstatus[0].SAreason=this.reason;
          initialstatus.initiatecheckstatus[0].SAdate = this.datepipe.transform(this.today ,'dd-MM-yyyy');
          initialstatus.initiatecheckstatus[0].indexitreqstatusSA="Individual Status of Exit Request is"+" "+ initialstatus.initiatecheckstatus[0].SAstatus +" "+"by"+" "+offic.official[0].firstname +" "+ offic.official[0].lastname
          initialstatus.save().toPromise().then(function(resp){
            console.log(resp)
            console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa")
            this.initialstatus={initiatecheckstatus:[{}]}
          })
        }
        else if(this.fmid==this.getuser.employee_OId){
          console.log("ffffffffffffffffffffff")
          initialstatus.initiatecheckstatus[0].FMstatus=initialstatus.initiatecheckstatus[0].status1
          initialstatus.initiatecheckstatus[0].FMcomments=initialstatus.initiatecheckstatus[0].comments1
          initialstatus.initiatecheckstatus[0].FMupdatetime = this.CurrentTime;
          initialstatus.initiatecheckstatus[0].FMreason=this.reason;
          initialstatus.initiatecheckstatus[0].FMdate = this.datepipe.transform(this.today ,'dd-MM-yyyy');
          initialstatus.initiatecheckstatus[0].indexitreqstatusFM="Individual Status of Exit Request is"+" "+ initialstatus.initiatecheckstatus[0].FMstatus +" "+"by"+" "+offic.official[0].firstname +" "+ offic.official[0].lastname
          initialstatus.save().toPromise().then(function(resp){
            console.log(resp)
            console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa")
            this.initialstatus={initiatecheckstatus:[{}]}
          })
        }
        else if(this.gaid==this.getuser.employee_OId){
          console.log("gsassssss")
          initialstatus.initiatecheckstatus[0].GAstatus=initialstatus.initiatecheckstatus[0].status1
          initialstatus.initiatecheckstatus[0].GAcomments=initialstatus.initiatecheckstatus[0].comments1
          initialstatus.initiatecheckstatus[0].GAupdatetime = this.CurrentTime;
          initialstatus.initiatecheckstatus[0].GAreason=this.reason;
          initialstatus.initiatecheckstatus[0].GAdate = this.datepipe.transform(this.today ,'dd-MM-yyyy');
          initialstatus.initiatecheckstatus[0].indexitreqstatusGA="Individual Status of Exit Request is"+" "+ initialstatus.initiatecheckstatus[0].GAstatus +" "+"by"+" "+offic.official[0].firstname +" "+ offic.official[0].lastname
          initialstatus.save().toPromise().then(function(resp){
            console.log(resp)
            console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa")
            this.initialstatus={initiatecheckstatus:[{}]}
          })
        }      
       
      }
      else if('Rejected'==initialstatus.initiatecheckstatus[0].status1  )
        {         
          if(this.hrd==this.getuser.employee_OId && this.repoiddd==this.getuser.employee_OId){
            console.log("AAAAAAAAAAAAAAAAAAA")
            initialstatus.initiatecheckstatus[0].Hrupdatetime = this.CurrentTime;
            initialstatus.initiatecheckstatus[0].Hrdate = this.datepipe.transform(this.today ,'dd-MM-yyyy');
            initialstatus.initiatecheckstatus[0].Hrstatus=initialstatus.initiatecheckstatus[0].status1
            initialstatus.initiatecheckstatus[0].Hrcomments=initialstatus.initiatecheckstatus[0].comments1
            console.log("CCCCCCCCCCCCCCCCCCCCC")
            initialstatus.initiatecheckstatus[0].L1status=initialstatus.initiatecheckstatus[0].status1
            initialstatus.initiatecheckstatus[0].L1comments=initialstatus.initiatecheckstatus[0].comments1
            initialstatus.initiatecheckstatus[0].L1updatetime = this.CurrentTime;
            initialstatus.initiatecheckstatus[0].L1date = this.datepipe.transform(this.today ,'dd-MM-yyyy');
            initialstatus.initiatecheckstatus[0].indexitreqstatusl1hr="Individual Status of Exit Request is"+" "+ initialstatus.initiatecheckstatus[0].L1status +" "+"by"+" "+offic.official[0].firstname +" "+ offic.official[0].lastname
            initialstatus.save().toPromise().then(function(resp) {
              console.log(resp)
              console.log("HRRRRRRRRRRRRRRRRRRRRRRRRR")
              obj.initialstatus={initiatecheckstatus:[{}]}
            })
            }
            else if(this.l2d==this.getuser.employee_OId && this.repoiddd==this.getuser.employee_OId)
            {
              initialstatus.initiatecheckstatus[0].L2updatetime = this.CurrentTime;
              initialstatus.initiatecheckstatus[0].L2date = this.datepipe.transform(this.today ,'dd-MM-yyyy');
              initialstatus.initiatecheckstatus[0].L2status=initialstatus.initiatecheckstatus[0].status1
              initialstatus.initiatecheckstatus[0].L2comments=initialstatus.initiatecheckstatus[0].comments1
              
              initialstatus.initiatecheckstatus[0].L1status=initialstatus.initiatecheckstatus[0].status1
              initialstatus.initiatecheckstatus[0].L1comments=initialstatus.initiatecheckstatus[0].comments1
              initialstatus.initiatecheckstatus[0].L1updatetime = this.CurrentTime;
              initialstatus.initiatecheckstatus[0].L1date = this.datepipe.transform(this.today ,'dd-MM-yyyy');
              initialstatus.initiatecheckstatus[0].indexitreqstatusl1l2="Individual Status of Exit Request is"+" "+ initialstatus.initiatecheckstatus[0].L2status +" "+"by"+" "+offic.official[0].firstname +" "+ offic.official[0].lastname
              initialstatus.save().toPromise().then(function(resp) {
                console.log(resp)
                console.log("HRRRRRRRRRRRRRRRRRRRRRRRRR")
                this.initialstatus={initiatecheckstatus:[{}]}
              })
            } 
          else if(this.hrd==this.getuser.employee_OId)
           {
            console.log("DDDDDDDDDDDDDDDDDDDDDDD")
            initialstatus.initiatecheckstatus[0].Hrupdatetime = this.CurrentTime;
            initialstatus.initiatecheckstatus[0].Hrdate = this.datepipe.transform(this.today ,'dd-MM-yyyy');
            initialstatus.initiatecheckstatus[0].Hrstatus=initialstatus.initiatecheckstatus[0].status1
            initialstatus.initiatecheckstatus[0].Hrcomments=initialstatus.initiatecheckstatus[0].comments1
            initialstatus.initiatecheckstatus[0].indexitreqstatushr="Individual Status of Exit Request is"+" "+ initialstatus.initiatecheckstatus[0].Hrstatus +" "+"by"+" "+offic.official[0].firstname +" "+ offic.official[0].lastname
            initialstatus.save().toPromise().then(function(resp) {
              console.log(resp)
              console.log("HRRRRRRRRRRRRRRRRRRRRRRRRR")
              this.initialstatus={initiatecheckstatus:[{}]}
            })
            }
            else if( this.l2d==this.getuser.employee_OId){
              console.log("EEEEEEEEEEEEEEEEEEEEE")
              initialstatus.initiatecheckstatus[0].L2updatetime = this.CurrentTime;
              initialstatus.initiatecheckstatus[0].L2date = this.datepipe.transform(this.today ,'dd-MM-yyyy');
              initialstatus.initiatecheckstatus[0].L2status=initialstatus.initiatecheckstatus[0].status1
              initialstatus.initiatecheckstatus[0].L2comments=initialstatus.initiatecheckstatus[0].comments1
              initialstatus.initiatecheckstatus[0].indexitreqstatusl2="Individual Status of Exit Request is"+" "+ initialstatus.initiatecheckstatus[0].L2status +" "+"by"+" "+offic.official[0].firstname +" "+ offic.official[0].lastname
              initialstatus.save().toPromise().then(function(resp) {
                console.log(resp)
                console.log("HRRRRRRRRRRRRRRRRRRRRRRRRR")
                this.initialstatus={initiatecheckstatus:[{}]}
              })
            }
            else if(this.repoiddd==this.getuser.employee_OId){
              console.log("FFFFFFFFFFFFFFFFFFFFF")
              initialstatus.initiatecheckstatus[0].L1status=initialstatus.initiatecheckstatus[0].status1
              initialstatus.initiatecheckstatus[0].L1comments=initialstatus.initiatecheckstatus[0].comments1
              initialstatus.initiatecheckstatus[0].L1updatetime = this.CurrentTime;
              initialstatus.initiatecheckstatus[0].L1date = this.datepipe.transform(this.today ,'dd-MM-yyyy');
              initialstatus.initiatecheckstatus[0].indexitreqstatusl1="Individual Status of Exit Request is"+" "+ initialstatus.initiatecheckstatus[0].L1status +" "+"by"+" "+offic.official[0].firstname +" "+ offic.official[0].lastname
              initialstatus.save().toPromise().then(function(resp) {
                console.log(resp)
                console.log("HRRRRRRRRRRRRRRRRRRRRRRRRR")
                this.initialstatus={initiatecheckstatus:[{}]}
              })
            }
          }
          else if('Hold'==initialstatus.initiatecheckstatus[0].status1 )
          {       
        if(this.fmid==this.getuser.employee_OId && this.repoiddd==this.getuser.employee_OId)
        {
        console.log("AAAAAAAAAAAAAAAAAAA")
        initialstatus.initiatecheckstatus[0].FMupdatetime = this.CurrentTime;
        initialstatus.initiatecheckstatus[0].FMdate = this.datepipe.transform(this.today ,'dd-MM-yyyy');
        initialstatus.initiatecheckstatus[0].FMstatus=initialstatus.initiatecheckstatus[0].status1
        initialstatus.initiatecheckstatus[0].FMcomments=initialstatus.initiatecheckstatus[0].comments1
        initialstatus.initiatecheckstatus[0].FMreason=this.reason;
        
        initialstatus.initiatecheckstatus[0].L1status=initialstatus.initiatecheckstatus[0].status1
        initialstatus.initiatecheckstatus[0].L1comments=initialstatus.initiatecheckstatus[0].comments1
        initialstatus.initiatecheckstatus[0].L1updatetime = this.CurrentTime;
  
        initialstatus.initiatecheckstatus[0].L1date = this.datepipe.transform(this.today ,'dd-MM-yyyy');
        initialstatus.initiatecheckstatus[0].indexitreqstatusl1fm="Individual Status of Exit Request is"+" "+ initialstatus.initiatecheckstatus[0].FMstatus +" "+"by"+" "+offic.official[0].firstname +" "+ offic.official[0].lastname
        initialstatus.save().toPromise().then(function(resp) {
          console.log(resp)
          console.log("HRRRRRRRRRRRRRRRRRRRRRRRRR")
          this.initialstatus={initiatecheckstatus:[{}]}
        })
        this.start();
        this.ngOnInit();
        }    
       else  if(this.said==this.getuser.employee_OId && this.repoiddd==this.getuser.employee_OId)
        {
        console.log("AAAAAAAAAAAAAAAAAAA")
        initialstatus.initiatecheckstatus[0].SAupdatetime = this.CurrentTime;
        initialstatus.initiatecheckstatus[0].SAdate = this.datepipe.transform(this.today ,'dd-MM-yyyy');
        initialstatus.initiatecheckstatus[0].SAstatus=initialstatus.initiatecheckstatus[0].status1
        initialstatus.initiatecheckstatus[0].SAcomments=initialstatus.initiatecheckstatus[0].comments1
        initialstatus.initiatecheckstatus[0].SAreason=this.reason;
        
        initialstatus.initiatecheckstatus[0].L1status=initialstatus.initiatecheckstatus[0].status1
        initialstatus.initiatecheckstatus[0].L1comments=initialstatus.initiatecheckstatus[0].comments1
        initialstatus.initiatecheckstatus[0].L1updatetime = this.CurrentTime;

        initialstatus.initiatecheckstatus[0].L1date = this.datepipe.transform(this.today ,'dd-MM-yyyy');
        initialstatus.initiatecheckstatus[0].indexitreqstatusl1sa="Individual Status of Exit Request is"+" "+ initialstatus.initiatecheckstatus[0].SAstatus +" "+"by"+" "+offic.official[0].firstname +" "+ offic.official[0].lastname
        initialstatus.save().toPromise().then(function(resp) {
          console.log(resp)
          console.log("HRRRRRRRRRRRRRRRRRRRRRRRRR")
          this.initialstatus={initiatecheckstatus:[{}]}
        })
        this.start();
        this.ngOnInit();
        }
        else  if(this.gaid==this.getuser.employee_OId && this.repoiddd==this.getuser.employee_OId)
        {
        console.log("AAAAAAAAAAAAAAAAAAA")
        initialstatus.initiatecheckstatus[0].GAupdatetime = this.CurrentTime;
        initialstatus.initiatecheckstatus[0].GAdate = this.datepipe.transform(this.today ,'dd-MM-yyyy');
        initialstatus.initiatecheckstatus[0].GAstatus=initialstatus.initiatecheckstatus[0].status1
        initialstatus.initiatecheckstatus[0].GAcomments=initialstatus.initiatecheckstatus[0].comments1
        initialstatus.initiatecheckstatus[0].GAreason=this.reason;
        
        initialstatus.initiatecheckstatus[0].L1status=initialstatus.initiatecheckstatus[0].status1
        initialstatus.initiatecheckstatus[0].L1comments=initialstatus.initiatecheckstatus[0].comments1
        initialstatus.initiatecheckstatus[0].L1updatetime = this.CurrentTime;
        
        initialstatus.initiatecheckstatus[0].L1date = this.datepipe.transform(this.today ,'dd-MM-yyyy');
        initialstatus.initiatecheckstatus[0].indexitreqstatusl1ga="Individual Status of Exit Request is"+" "+ initialstatus.initiatecheckstatus[0].GAstatus +" "+"by"+" "+offic.official[0].firstname +" "+ offic.official[0].lastname
        initialstatus.save().toPromise().then(function(resp) {
          console.log(resp)
          console.log("HRRRRRRRRRRRRRRRRRRRRRRRRR")
          this.initialstatus={initiatecheckstatus:[{}]}
        })
        this.start();
        this.ngOnInit();
        }
        else if(this.said==this.getuser.employee_OId){
                console.log("ssssssssssssssssss")
                initialstatus.initiatecheckstatus[0].SAstatus=initialstatus.initiatecheckstatus[0].status1
                initialstatus.initiatecheckstatus[0].SAcomments=initialstatus.initiatecheckstatus[0].comments1
                initialstatus.initiatecheckstatus[0].SAupdatetime = this.CurrentTime;
                initialstatus.initiatecheckstatus[0].SAreason=this.reason;
                initialstatus.initiatecheckstatus[0].SAdate = this.datepipe.transform(this.today ,'dd-MM-yyyy');
                initialstatus.initiatecheckstatus[0].indexitreqstatusSA="Individual Status of Exit Request is"+" "+ initialstatus.initiatecheckstatus[0].SAstatus +" "+"by"+" "+offic.official[0].firstname +" "+ offic.official[0].lastname
                initialstatus.save().toPromise().then(function(resp){
                  console.log(resp)
                  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa")
                  this.initialstatus={initiatecheckstatus:[{}]}
                })
              }
              else if(this.fmid==this.getuser.employee_OId){
                console.log("ffffffffffffffffffffff")
                initialstatus.initiatecheckstatus[0].FMstatus=initialstatus.initiatecheckstatus[0].status1
                initialstatus.initiatecheckstatus[0].FMcomments=initialstatus.initiatecheckstatus[0].comments1
                initialstatus.initiatecheckstatus[0].FMupdatetime = this.CurrentTime;
                initialstatus.initiatecheckstatus[0].FMreason=this.reason;
                initialstatus.initiatecheckstatus[0].FMdate = this.datepipe.transform(this.today ,'dd-MM-yyyy');
                initialstatus.initiatecheckstatus[0].indexitreqstatusFM="Individual Status of Exit Request is"+" "+ initialstatus.initiatecheckstatus[0].FMstatus +" "+"by"+" "+offic.official[0].firstname +" "+ offic.official[0].lastname
                initialstatus.save().toPromise().then(function(resp){
                  console.log(resp)
                  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa")
                  this.initialstatus={initiatecheckstatus:[{}]}
                })
              }
              else if(this.gaid==this.getuser.employee_OId){
                console.log("gsassssss")
                initialstatus.initiatecheckstatus[0].GAstatus=initialstatus.initiatecheckstatus[0].status1
                initialstatus.initiatecheckstatus[0].GAcomments=initialstatus.initiatecheckstatus[0].comments1
                initialstatus.initiatecheckstatus[0].GAupdatetime = this.CurrentTime;
                initialstatus.initiatecheckstatus[0].GAreason=this.reason;
                initialstatus.initiatecheckstatus[0].GAdate = this.datepipe.transform(this.today ,'dd-MM-yyyy');
                initialstatus.initiatecheckstatus[0].indexitreqstatusGA="Individual Status of Exit Request is"+" "+ initialstatus.initiatecheckstatus[0].GAstatus +" "+"by"+" "+offic.official[0].firstname +" "+ offic.official[0].lastname
                initialstatus.save().toPromise().then(function(resp){
                  console.log(resp)
                  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa")
                  this.initialstatus={initiatecheckstatus:[{}]}
                })
              }
           
          }   
          this.start();
          this.ngOnInit();
    }
  
  
  exitproc;
  hideeee = false;
  select(bu){ 
    console.log(bu)
    var offic=[];
    offic=this.extint.filter(data =>(data.exitinterviewquestion[0].exittype == bu.initiatecheckstatus[0].exittype));
    console.log(offic)
    this.exitproc= offic
    console.log(this.exitproc)

    for(let i=0;i<=this.selectque.selectquestions.length;i++)
    {
     console.log(bu.selectquestions)
     console.log(this.selectque.selectquestions.length)
     this.objj6=bu.selectquestions
     console.log(this.objj6)
    }
  }

  setval=false;
  mailFormat;
  role;
  usrnm;
  empidd;
  exittypee;
  emmpp;
  epppstatus;
  setStatusMail()
  {
    console.log("ITS CALLLLL");
    let employee = this.officialemp.find(obj1 => obj1._id ==this.empidd); 
    let manager = this.officialemp.find(obj1 => obj1._id ==this.getuser.employee_OId); 
    var mname = manager.official[0].firstname+" "+ manager.official[0].lastname;
    var role = manager.official[0].role;
    this.role=employee.official[0].role;
    var ename = employee.official[0].firstname+" "+ employee.official[0].lastname;
    var usrnm= employee.official[0].username;
    var date =this.datepipe.transform(this.today ,'dd-MM-yyyy');
    console.log(this.status1);
    console.log(this.stss);
     if(this.status1=='Approved')
     {
      this.mailFormat = 'Date : ' +date+'<br>'+'412, 413, 414,<br>TristhaGlobal Pvt. Ltd.,<br>'+'Crescent Business Park,<br>'+'Saki Naka,<br>Maharastra,<br>Mumbai-400072<br><br>'+
      'Dear HR,<br><br>'+
      'Exit Procedure of Employee '+ename+' has been '+this.status1+' by '+role+' '+mname+'.'+
      '<br><br><table cellpadding="10" bgcolor="Azure"  width="400" height="auto" border="1"><tr><td align="center"><b>Employee Name </b></td><td align="center">'+ename+'</td></tr><tr><td align="center"><b>Username </b></td><td align="center">'+usrnm+'</td></tr>'+
      '<tr><td align="center"><b>Exit Type </b></td><td align="center">'+ this.extypee+'</td></tr>'+
      '<tr><td align="center"><b>Applied On </b></td><td align="center">'+ date+'</td></tr>'+
      '<tr><td align="center"><b>Role </b></td><td align="center">'+ this.role+'</td></tr>'
      +'</table><br><br>'+
      'Regards,<br>'+mname+' | '+role+'<br>TristhaGlobal Pvt. Ltd.'
      
      return this.mailFormat;
     }
    else if(this.status1=='Rejected')
    {
      this.mailFormat = 'Date : ' +date+'<br>'+'412, 413, 414,<br>TristhaGlobal Pvt. Ltd.,<br>'+'Crescent Business Park,<br>'+'Saki Naka,<br>Maharastra,<br>Mumbai-400072<br><br>'+
      'Dear HR,<br><br>'+
      'Exit Procedure of Employee '+ename+' has been '+this.status1+' by '+role+' '+mname+'.'+
      '<br><br><table cellpadding="10" bgcolor="Azure"  width="400" height="auto" border="1"><tr><td align="center"><b>Employee Name </b></td><td align="center">'+ename+'</td></tr><tr><td align="center"><b>Username </b></td><td align="center">'+usrnm+'</td></tr>'+
      '<tr><td align="center"><b>Exit Type </b></td><td align="center">'+ this.extypee+'</td></tr>'+
      '<tr><td align="center"><b>Applied On </b></td><td align="center">'+ date+'</td></tr>'+
      '<tr><td align="center"><b>Role </b></td><td align="center">'+ this.role+'</td></tr>'
      +'</table><br><br>'+
      'Regards,<br>'+mname+' | '+role+'<br>TristhaGlobal Pvt. Ltd.'
      
      return this.mailFormat;
    }
   else if(this.status1=='Hold')
   {
    this.mailFormat = 'Date : ' +date+'<br>'+'412, 413, 414,<br>TristhaGlobal Pvt. Ltd.,<br>'+'Crescent Business Park,<br>'+'Saki Naka,<br>Maharastra,<br>Mumbai-400072<br><br>'+
      'Dear HR,<br><br>'+
      'Exit Procedure of Employee '+ename+' has been '+this.status1+' by '+role+' '+mname+'.'+
      '<br><br><table cellpadding="10" bgcolor="Azure"  width="400" height="auto" border="1"><tr><td align="center"><b>Employee Name </b></td><td align="center">'+ename+'</td></tr><tr><td align="center"><b>Username </b></td><td align="center">'+usrnm+'</td></tr>'+
      '<tr><td align="center"><b>Exit Type </b></td><td align="center">'+ this.extypee+'</td></tr>'+
      '<tr><td align="center"><b>Applied On </b></td><td align="center">'+ date+'</td></tr>'+
      '<tr><td align="center"><b>Role </b></td><td align="center">'+ this.role+'</td></tr>'
      +'</table><br><br>'+
      'Regards,<br>'+mname+' | '+role+'<br>TristhaGlobal Pvt. Ltd.'
      
      return this.mailFormat;
   }
   else if(this.stss=='Approved')
   {
    this.mailFormat = 'Date : ' +date+'<br>'+'412, 413, 414,<br>TristhaGlobal Pvt. Ltd.,<br>'+'Crescent Business Park,<br>'+'Saki Naka,<br>Maharastra,<br>Mumbai-400072<br><br>'+
    'Dear HR,<br><br>'+
    'Exit Procedure of Employee '+ename+' has been '+this.stss+' by '+role+' '+mname+'.'+
    '<br><br><table cellpadding="10" bgcolor="Azure"  width="400" height="auto" border="1"><tr><td align="center"><b>Employee Name </b></td><td align="center">'+ename+'</td></tr><tr><td align="center"><b>Username </b></td><td align="center">'+usrnm+'</td></tr>'+
    '<tr><td align="center"><b>Exit Type </b></td><td align="center">'+ this.extypee+'</td></tr>'+
    '<tr><td align="center"><b>Applied On </b></td><td align="center">'+ date+'</td></tr>'+
    '<tr><td align="center"><b>Role </b></td><td align="center">'+ this.role+'</td></tr>'
    +'</table><br><br>'+
    'Regards,<br>'+mname+' | '+role+'<br>TristhaGlobal Pvt. Ltd.'
    
    return this.mailFormat;
   }
   else if(this.stss=='Rejected')
   {
     this.mailFormat = 'Date : ' +date+'<br>'+'412, 413, 414,<br>TristhaGlobal Pvt. Ltd.,<br>'+'Crescent Business Park,<br>'+'Saki Naka,<br>Maharastra,<br>Mumbai-400072<br><br>'+
      'Dear HR,<br><br>'+
      'Exit Procedure of Employee '+ename+' has been '+this.stss+' by '+role+' '+mname+'.'+
      '<br><br><table cellpadding="10" bgcolor="Azure"  width="400" height="auto" border="1"><tr><td align="center"><b>Employee Name </b></td><td align="center">'+ename+'</td></tr><tr><td align="center"><b>Username </b></td><td align="center">'+usrnm+'</td></tr>'+
      '<tr><td align="center"><b>Exit Type </b></td><td align="center">'+ this.extypee+'</td></tr>'+
      '<tr><td align="center"><b>Applied On </b></td><td align="center">'+ date+'</td></tr>'+
      '<tr><td align="center"><b>Role </b></td><td align="center">'+ this.role+'</td></tr>'
      +'</table><br><br>'+
      'Regards,<br>'+mname+' | '+role+'<br>TristhaGlobal Pvt. Ltd.'
    
    return this.mailFormat;
   }
  }
  officialemp;
  hrmidd;
  l2mmid;
  l1idd;
  saaid;
  fmmid;
  gaaid;
  HR;
  L2;
  Repo;
  Sa;
  Fm;
  Ga;
  extypee;
  emp;

  findData(data)
  {
    console.log(data);
    this.empidd=data.empid;
    this.l1idd=data.repoid;
    this.l2mmid=data.l2managerid;
    this.saaid=data.smanagerid;
    this.gaaid=data.gmanagerid;
    this.fmmid=data.fmanagerid;
    this.hridd=data.hrmanagerid;
    this.extypee=data.initiatecheckstatus[0].exittype;
  }

  initiateexitstatus(email,exittype,mailFormat)
	{	
  console.log("lll") 
  var objn = this.officialemp.find(obj=>obj._id==this.getuser.employee_OId);
  var objemp = this.officialemp.find(obj=>obj._id==this.empidd);
  var objh = this.officialemp.find(obj=>obj._id==this.hridd);
  var objl = this.officialemp.find(obj=>obj._id==this.l2mmid);
  var objrepo = this.officialemp.find(obj=>obj._id==this.l1idd);
  var objsa = this.officialemp.find(obj=>obj._id==this.saaid);
  var objfm = this.officialemp.find(obj=>obj._id==this.fmmid);
  var objga = this.officialemp.find(obj=>obj._id==this.gaaid);
  console.log(objh);
  console.log(objl);
  console.log(objrepo);
  this.emp= objemp.official[0].email;
  this.HR = objh.official[0].email;
  this.L2 = objl.official[0].email;
  this.Repo = objrepo.official[0].email;
  this.Fm = objfm.official[0].email;
  this.Sa = objsa.official[0].email;
  this.Ga = objga.official[0].email;
  console.log(this.HR)
  console.log(this.L2)
  console.log(this.Fm)  
  console.log(this.Sa)
  console.log(this.Ga)
  console.log(this.emp)
  console.log(this.Repo)  
  // email = [this.HR,this.L2,this.Repo,this.Fm,this.Sa,this.Ga,this.emp];

  if(this.hridd==this.getuser.employee_OId)
   {
    email = [this.L2,this.Repo,this.Fm,this.Sa,this.Ga,this.emp];
   }
   else if(this.l1idd==this.getuser.employee_OId)
   {
    email = [this.HR,this.L2,this.Fm,this.Sa,this.Ga,this.emp];
   }
   else if(this.l2mmid==this.getuser.employee_OId)
   {
    email = [this.HR,this.Repo,this.Fm,this.Sa,this.Ga,this.emp];
   }
   else if(this.saaid==this.getuser.employee_OId)
   {
    email = [this.HR,this.L2,this.Repo,this.Fm,this.Ga,this.emp];
   }
   else if(this.gaaid==this.getuser.employee_OId)
   {
    email = [this.HR,this.L2,this.Repo,this.Fm,this.Sa,this.emp];
   }
   else if(this.fmmid==this.getuser.employee_OId)
   {
    email = [this.HR,this.L2,this.Repo,this.Sa,this.Ga,this.emp];
   }
  exittype = this.extypee; 
  var base=this.restangular.all('/exitinitiatestatus')

	base.post({email:email,exittype:exittype,mailFormat:this.setStatusMail()}).toPromise().then(res=>{
  console.log(res)
  
  email="";
  exittype="";
  mailFormat="";
 	
	if(res.succes){
	this.setval=true;
	setTimeout(() => {this.setval=false;},3000);	
	console.log("succccccc")
  }
  else{
	this.setval=true;
	setTimeout(() => {this.setval=false;},3000);
	console.log("fail")
	}
	
	})
	}



  
quess;
types;
hideee=false;
divhd=false;
hideeee1 = false;
allstatus=false;
reasonn=false;
  ngOnInit() {
   
    this.start();
    // this.abc();
    // this.xyz();
    this.getuser=JSON.parse(localStorage.getItem('user'));
    console.log(this.getuser);
    
    let baseExit = this.restangular.all('exitprocedure');
    baseExit.getList().subscribe(data => {
    this.seting = data.filter(res=>res.exitsetting);
    console.log(this.seting)
    return this.seting;
    });

    let baseOfficial= this.restangular.all('createemployee');
    baseOfficial.getList({_id:this.getuser.employee_OId}).subscribe(data => { 
    this.officialdata =data.filter(res=>res.official);
    return this.officialdata;    
    });

    let baseOfficials= this.restangular.all('createemployee');
    baseOfficials.getList().subscribe(data => { 
    this.officialemp =data.filter(res=>res.official);
    return this.officialemp;    
    });


    let baseQUS = this.restangular.all('exitprocedure');
    baseQUS.getList().subscribe(data => {
    this.que =data.filter(res=>res.exitinterviewquestion);
    console.log(this.que)
    // this.quess=this.ques
    return this.que;
    });


  let baseQUS1 = this.restangular.all('exitprocedure');
  baseQUS1.getList().subscribe(data => {
  this.extint =data.filter(res=>res.exitinterviewquestion);
  console.log(this.extint)
  return this.extint;
  });

    var baseOfficial1 = this.restangular.all('exitprocedure');
    baseOfficial1.getList().subscribe(data => {
      this.initialstatus1 =data.filter(res=>res.initiatecheckstatus);
      console.log(this.initialstatus1)
      this.hdbut = this.initialstatus1.filter(obj=>{
        console.log(obj.fmanagerid);
        console.log(obj.smanagerid);
        console.log(obj.gmanagerid);
        console.log(obj.l2managerid);
        console.log(obj.repoid);
        console.log(obj.hrmanagerid);

        if(obj.repoid==this.getuser.employee_OId)
        {
         if(obj.initiatecheckstatus[0].L1status=='Pending' && obj.initiatecheckstatus[0].status!='Approved'  && obj.initiatecheckstatus[0].Empstatus!='Cancelled')
         {
           this.allstatus=true;
         }
         this.showl1=true;
         this.status = [
          {value: 'Approved', viewValue: 'Approve'},
          {value: 'Rejected', viewValue: 'Reject'}
         ]
        }
        else if(obj.l2managerid==this.getuser.employee_OId)
        {
         if(obj.initiatecheckstatus[0].L1status=='Approved' || obj.initiatecheckstatus[0].L1status=='Rejected' && obj.initiatecheckstatus[0].status!='Approved' && obj.initiatecheckstatus[0].Empstatus!='Cancelled')
          {
            this.allstatus=true;
          }
         this.showl1=true;
         this.showl2=true;
         this.status = [
          {value: 'Approved', viewValue: 'Approve'},
          {value: 'Rejected', viewValue: 'Reject'}
         ];
        }
        else if(obj.smanagerid==this.getuser.employee_OId)
        {
          console.log("System Admin");
          if(obj.initiatecheckstatus[0].L2status=='Approved' || obj.initiatecheckstatus[0].L2status=='Rejected' && obj.initiatecheckstatus[0].status!='Approved' && obj.initiatecheckstatus[0].Empstatus!='Cancelled')
          {
            console.log("System Admin");
            this.allstatus=true;
            console.log("aaaaaaaaaaaaaaaa");
          }
         this.reasonn=true;
         this.showl1=true;
         this.showl2=true;
         this.showsa=true;
         this.status = [
          {value: 'Approved', viewValue: 'Approve'},
          {value: 'Hold', viewValue: 'Hold'}
         ];
        }
        else if(obj.gmanagerid==this.getuser.employee_OId)
        {
          console.log("General Admin");
          if(obj.initiatecheckstatus[0].SAstatus=='Approved' || obj.initiatecheckstatus[0].SAstatus=='Hold' && obj.initiatecheckstatus[0].status!='Approved' && obj.initiatecheckstatus[0].Empstatus!='Cancelled')
          {
            this.allstatus=true;
          }
         this.reasonn=true;
         this.showl1=true;
         this.showl2=true;
         this.showsa=true;
         this.showga=true;
         this.status = [
          {value: 'Approved', viewValue: 'Approve'},
          {value: 'Hold', viewValue: 'Hold'}
         ];
        }
        else if(obj.fmanagerid==this.getuser.employee_OId)
        {
          console.log("Finance Manager");
          if(obj.initiatecheckstatus[0].GAstatus=='Approved' || obj.initiatecheckstatus[0].GAstatus=='Hold' && obj.initiatecheckstatus[0].status!='Approved' && obj.initiatecheckstatus[0].Empstatus!='Cancelled')
          {
            this.allstatus=true;
          }
         this.reasonn=true;
         this.showl1=true;
         this.showl2=true;
         this.showsa=true;
         this.showga=true;
         this.showfm=true;
         this.status = [
          {value: 'Approved', viewValue: 'Approve'},
          {value: 'Hold', viewValue: 'Hold'}
         ];
        }
        else if(obj.hrmanagerid==this.getuser.employee_OId)
        {
         this.showl1=true;
         this.showl2=true;
         this.showsa=true;
         this.showga=true;
         this.showfm=true;
         this.status = [
          {value: 'Approved', viewValue: 'Approve'},
          {value: 'Rejected', viewValue: 'Reject'}
         ];
        
         this.upstatus = [
          {value: 'Approved', viewValue: 'Approve'},
          {value: 'Rejected', viewValue: 'Reject'}
         ];
        }
    
        if(obj.initiatecheckstatus[0].Empstatus=='Cancelled' && obj.initiatecheckstatus[0].status=='Pending' || obj.initiatecheckstatus[0].status=='Approved' || obj.initiatecheckstatus[0].status=='Rejected')
        {
          this.stats=false;
        }
        else{
           this.stats=true;
        }


        if(obj.hrmanagerid==this.getuser.employee_OId || obj.l2managerid==this.getuser.employee_OId || obj.repoid==this.getuser.employee_OId || obj.fmanagerid==this.getuser.employee_OId || obj.smanagerid==this.getuser.employee_OId || obj.gmanagerid==this.getuser.employee_OId)
        {
           this.divhd=false;
        }
        else{
          this.divhd=true;
        }

        if(obj.hrmanagerid==this.getuser.employee_OId)
        {
           this.hideeee = true;
           console.log(this.hideee)
        }
        else{
          this.hideeee = false;
          console.log(this.hideee)
        }
})
console.log(this.hdbut);
// this.fetch();
return this.initialstatus1;  
});

    let baseExitType = this.restangular.all('exitprocedure');
    baseExitType.getList().subscribe(data => {
    this.types =data.filter(res=>res.exittype);
    console.log(this.types)
    return this.types;
    });

    
    this.restangular.all('exitprocedure').getList({exitid:this.idd}).subscribe(res=>{
      console.log(res)     
  // this.exitque = res;
  console.log(this.exitque)
  })

    this.restangular.all('createemployee').getList({_id:this.getuser.employee_OId}).subscribe(res=>{
      console.log(res)
  this.employee=res[0]
  if(res[0].official[0].reporting_mid=="" || res[0].official[0].reporting_mid==undefined)
  {
  }
  })

    if(this.getuser.employee_OId && this.getuser.employee_OId!='')
     {
     this.restangular.all('createemployee').getList().subscribe(res=>{
      console.log(res)
      this.reportingmanager=res  
       this.restangular.all('exitprocedure').getList().subscribe(res=>{
        this.leavemanagement=res
        this.fetch();
        this.abc();
        // this.xyz();
        console.log(this.leavemanagement)    
     });
     });
    }
    this.restangular.all('exitprocedure').getList().subscribe(res=>{
      this.leavemanagement=res
      this.xyz();
      console.log(this.leavemanagement);
    });
  }
}

