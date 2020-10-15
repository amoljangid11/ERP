import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Restangular } from 'ngx-restangular';
import { DatePipe } from '@angular/common';
import {UserService } from '../../user.service';



@Component({
  selector: 'app-service-request',
  templateUrl: './service-request.component.html',
  styleUrls: ['./service-request.component.css'],
  providers:[DatePipe]
})
export class ServiceRequestComponent implements OnInit {

  constructor(private router:Router,public datepipe:DatePipe,private restangular: Restangular,private userservice:UserService) { }
  allss;
  approver1;
  approver2;
  approver3;
  officiald;
  alls={allservicereq:[{}]};
  getuser;
  allss1;
  allss11;
  allss12;
  obk;
  oobj1;
  oobj2;
  allss2;
  oobj11;
  oobj12;

  openexecutor;
  openmanager;
  openmanagement1;
  openmanagement2;
  openmanagement3;
  pendingexecutor;
  closeexecutor;
  rejectexecutor;
  sendexecutor;
  closemanagement1;
  closemanagement2;
  rejectmanager;
  toapprovemanager;
  approvemanager1;
  rejectmanager1;
  allssc;
  allemp;
  openemp;
  closeemp;
  rejectemp;
  cancelemp;
  mall1;
  mall2;
  mall3;
  mopen1;
  mopen2;
  mopen3;
  mclosed1;
  mclosed2;
  mclosed3;
  mcancelled1;
  mcancelled2;
  mcancelled3;
  mtoapprove1;
  mtoapprove2;
  mtoapprove3;
  mapprove1;
  mapprove2;
  mapprove3;
  mreject1;
  mreject2;
  mreject3;
  today;
  t;
  mduetody1;
  mduetody2;
  mduetody3;
  moverdue1;
  moverdue2;
  moverdue3;
  foremployee(){
    this.allemp=this.allssc.filter(obj => obj.allservicereq[0].status )
    this.openemp=this.allssc.filter(obj => obj.allservicereq[0].status=='open' )
    this.closeemp=this.allssc.filter(obj => obj.allservicereq[0].status=='closed' )
    this.rejectemp=this.allssc.filter(obj => obj.allservicereq[0].status=='rejected' )
    this.cancelemp=this.allssc.filter(obj => obj.allservicereq[0].status=='cancelled' )


  }

  checkk(){
    this.obk=this.allss.filter(obj => obj.allservicereq[0].status != "cancelled" )
  this.openexecutor=this.allss.filter(obj => obj.allservicereq[0].status != "cancelled" && !obj.allservicereq[0].executorstatus)
  this.pendingexecutor=this.allss.filter(obj => !obj.allservicereq[0].executorstatus && (obj.allservicereq[0].management1status || obj.allservicereq[0].finalmanagerstatus) )
  this.closeexecutor=this.allss.filter(obj => obj.allservicereq[0].executorstatus=='Approved')
  this.rejectexecutor=this.allss.filter(obj => obj.allservicereq[0].executorstatus=='Rejected')



  this.sendexecutor=this.allss.filter(obj => !obj.allservicereq[0].executorstatus && (obj.allservicereq[0].managementstatus == "Send to Management" || obj.allservicereq[0].managerstatus == "Send to Manager"))

}
  checkk1(){

 

  this.oobj1 = this.allss1.filter(obj => obj.allservicereq[0].managementstatus == "Send to Management");
console.log(this.oobj1)
this.openmanagement1=this.allss1.filter(obj =>obj.allservicereq[0].managementstatus == "Send to Management" && !obj.allservicereq[0].management1status && !obj.allservicereq[0].executorstatus)
this.closemanagement1=this.allss1.filter(obj =>obj.allservicereq[0].management1status == "Rejected" )
this.mall1=this.allss1.filter(obj =>obj.allservicereq[0].status )
this.mopen1=this.allss1.filter(obj =>obj.allservicereq[0].status=='open' )
this.mclosed1=this.allss1.filter(obj =>obj.allservicereq[0].executorstatus=='Approved' || obj.allservicereq[0].executorstatus=='Rejected' )
this.mcancelled1=this.allss1.filter(obj =>obj.allservicereq[0].status=='cancelled' )
this.mtoapprove1=this.allss1.filter(obj =>obj.allservicereq[0].managementstatus=='Send to Management' && !obj.allservicereq[0].management1status )
this.mapprove1=this.allss1.filter(obj =>obj.allservicereq[0].managementstatus=='Send to Management' && obj.allservicereq[0].management1status=='Approved' )
this.mreject1=this.allss1.filter(obj =>obj.allservicereq[0].managementstatus=='Send to Management' && obj.allservicereq[0].management1status=='Rejected' )
this.mduetody1=this.allss1.filter(obj => obj.allservicereq[0].executorstatus && ((this.datepipe.transform(obj.allservicereq[0].executordate,'yyyy-MM-dd'))==( this.datepipe.transform(obj.allservicereq[0].date,'yyyy-MM-dd'))) )
this.moverdue1=this.allss1.filter(obj => obj.allservicereq[0].status != "cancelled" && !obj.allservicereq[0].executorstatus && ((this.datepipe.transform(obj.allservicereq[0].date+15 * 24 * 60 * 60 * 1000,'yyyy-MM-dd'))==( this.datepipe.transform(this.today,'yyyy-MM-dd'))) )


  }
   
  checkk2(){
  this.oobj2 = this.allss2.filter(obj => obj.allservicereq[0].managerstatus == "Send to Manager");

  this.openmanager=this.allss2.filter(obj => obj.allservicereq[0].managerstatus=='Send to Manager' && !obj.allservicereq[0].finalmanagerstatus && !obj.allservicereq[0].executorstatus )
  this.rejectmanager=this.allss2.filter(obj => obj.allservicereq[0].finalmanagerstatus=='Rejected'  )


  this.toapprovemanager=this.allss2.filter(obj => obj.allservicereq[0].managerstatus=='Send to Manager' && !obj.allservicereq[0].finalmanagerstatus && !obj.allservicereq[0].executorstatus )
  this.approvemanager1=this.allss2.filter(obj => obj.allservicereq[0].finalmanagerstatus=='Approved' )
  // this.rejectmanager1=this.allss2.filter(obj => obj.allservicereq[0].finalmanagerstatus=='Rejected' )

}
  checkk3(){
  this.oobj11 = this.allss11.filter(obj => obj.allservicereq[0].managementstatus == "Send to Management" && obj.allservicereq[0].management1status=='Approved');
  this.openmanagement2=this.allss11.filter(obj => obj.allservicereq[0].management1status=='Approved' && !obj.allservicereq[0].management2status && !obj.allservicereq[0].executorstatus)
  this.closemanagement2=this.allss11.filter(obj =>obj.allservicereq[0].management2status == "Rejected" )
  this.mall2=this.allss11.filter(obj =>obj.allservicereq[0].status )
  this.mopen2=this.allss11.filter(obj =>obj.allservicereq[0].status=='open' )
  this.mclosed2=this.allss11.filter(obj =>obj.allservicereq[0].executorstatus=='Approved' || obj.allservicereq[0].executorstatus=='Rejected' )
  this.mcancelled2=this.allss11.filter(obj =>obj.allservicereq[0].status=='cancelled' )
  this.mtoapprove2=this.allss11.filter(obj =>obj.allservicereq[0].managementstatus=='Send to Management' && obj.allservicereq[0].management1status=='Approved' && !obj.allservicereq[0].management2status )
  this.mapprove2=this.allss11.filter(obj =>obj.allservicereq[0].managementstatus=='Send to Management' && obj.allservicereq[0].management1status=='Approved' && obj.allservicereq[0].management2status=='Approved' )
  this.mreject2=this.allss11.filter(obj =>obj.allservicereq[0].managementstatus=='Send to Management' && obj.allservicereq[0].management1status=='Approved' && obj.allservicereq[0].management2status=='Rejected' )
  this.mduetody2=this.allss11.filter(obj => obj.allservicereq[0].executorstatus && ((this.datepipe.transform(obj.allservicereq[0].executordate,'yyyy-MM-dd'))==( this.datepipe.transform(obj.allservicereq[0].date,'yyyy-MM-dd'))) )
  this.moverdue2=this.allss11.filter(obj => obj.allservicereq[0].status != "cancelled" && !obj.allservicereq[0].executorstatus && ((this.datepipe.transform(obj.allservicereq[0].date+15 * 24 * 60 * 60 * 1000,'yyyy-MM-dd'))==( this.datepipe.transform(this.today,'yyyy-MM-dd'))) )

}

  checkk4(){
  this.oobj12 = this.allss12.filter(obj => obj.allservicereq[0].managementstatus == "Send to Management" && obj.allservicereq[0].management2status=='Approved' );
  this.openmanagement3=this.allss12.filter(obj => obj.allservicereq[0].managementstatus=='Send to Management' && !obj.allservicereq[0].management3status && obj.allservicereq[0].status == "open")
  this.mall3=this.allss12.filter(obj =>obj.allservicereq[0].status )
  this.mopen3=this.allss12.filter(obj =>obj.allservicereq[0].status=='open' )
  this.mclosed3=this.allss12.filter(obj =>obj.allservicereq[0].executorstatus=='Approved' || obj.allservicereq[0].executorstatus=='Rejected' )
  this.mcancelled3=this.allss12.filter(obj =>obj.allservicereq[0].status=='cancelled' )
  this.mtoapprove3=this.allss12.filter(obj =>obj.allservicereq[0].managementstatus=='Send to Management' && obj.allservicereq[0].management1status=='Approved' && obj.allservicereq[0].management2status=='Approved' && !obj.allservicereq[0].management3status )
  this.mapprove3=this.allss12.filter(obj =>obj.allservicereq[0].managementstatus=='Send to Management' && obj.allservicereq[0].management1status=='Approved' && obj.allservicereq[0].management2status=='Approved' && obj.allservicereq[0].management3status=='Approved' )
  this.mreject3=this.allss12.filter(obj =>obj.allservicereq[0].managementstatus=='Send to Management' && obj.allservicereq[0].management1status=='Approved' && obj.allservicereq[0].management2status=='Approved' && obj.allservicereq[0].management3status=='Rejected' )
  this.mduetody3=this.allss12.filter(obj => obj.allservicereq[0].executorstatus && ((this.datepipe.transform(obj.allservicereq[0].executordate,'yyyy-MM-dd'))==( this.datepipe.transform(obj.allservicereq[0].date,'yyyy-MM-dd'))) )
  this.moverdue3=this.allss12.filter(obj => obj.allservicereq[0].status != "cancelled" && !obj.allservicereq[0].executorstatus && ((this.datepipe.transform(obj.allservicereq[0].date+15 * 24 * 60 * 60 * 1000,'yyyy-MM-dd'))==( this.datepipe.transform(this.today,'yyyy-MM-dd'))) )



 }


  ngOnInit() {
    // this.userservice.show();


    this.getuser=JSON.parse(localStorage.getItem('user'));
    console.log(this.getuser)


    let baseAl = this.restangular.all('category');
    baseAl.getList({employee_id:this.getuser.employee_OId}).subscribe(data => {
    this.allssc = data.filter(res=>res.allservicereq);
    console.log(this.allssc)
    this.foremployee();
    return this.allssc;
    });

    let baseAll = this.restangular.all('category');
  baseAll.getList({executors_id:this.getuser.employee_OId}).subscribe(data => {
  this.allss = data.filter(res=>res.allservicereq);
  console.log(this.allss)
  this.checkk();
  return this.allss;
  });
  let baseAll1 = this.restangular.all('category');
  baseAll1.getList({selected1_id:this.getuser.employee_OId}).subscribe(data => {
  this.allss1 = data.filter(res=>res.allservicereq);
  console.log(this.allss1)
  this.checkk1();
  return this.allss1;
  });
    let baseAll11 = this.restangular.all('category');
  baseAll11.getList({selected2_id:this.getuser.employee_OId}).subscribe(data => {
  this.allss11 = data.filter(res=>res.allservicereq);
  console.log(this.allss11)
  this.checkk3();
  return this.allss11;
  });
   let baseAll22 = this.restangular.all('category');
  baseAll22.getList({selected3_id:this.getuser.employee_OId}).subscribe(data => {
  this.allss12 = data.filter(res=>res.allservicereq);
  console.log(this.allss12)
  this.checkk4();
  return this.allss12;
  });

  let baseAll2 = this.restangular.all('category');
  baseAll2.getList({reporting_mid:this.getuser.employee_OId}).subscribe(data => {
  this.allss2 = data.filter(res=>res.allservicereq);
  console.log(this.allss2)
  this.checkk2();
  return this.allss2;
  });
  }

configuration(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['configuration']}}])
};
categories(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['categories']}}])
};
request_type(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['request_type']}}])
};
priority(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['priority']}}])
};
setting(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['setting']}}])
};
all(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['all']}}])
 };
open(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['open']}}])
 };
 closed(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['closed']}}])
 };
 rejected(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['rejected2']}}])
 };
 cancelled(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['cancelled']}}])
 };
 all1(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['all1']}}])
 };
 open1(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['open1']}}])
 };
 pending1(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['pending1']}}])
 };
 closed1(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['closed1']}}])
 };
 rejected1(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['rejected1']}}])
 };
//  cancelled1(){
//   this.router.navigate(['./setuproot',{outlets:{ thirdchild:['cancelled1']}}])
//  };
 duetoday1(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['duetoday1']}}])
 };
 overdue1(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['overdue1']}}])
 };
 sentforapproval1(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['sentforapproval1']}}])
 };
 toapproval1(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['toapprove1']}}])
 };
 approval1(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['approve2']}}])
 };
 reject1(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['reject2']}}])
 };

 mall(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['mall']}}])
 };
 mopen(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['mopen']}}])
 };
 mclosed(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['mclosed']}}])
 };
 mcancelled(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['mcancelled']}}])
 };
 moverdue(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['moverdue']}}])
 };
 mduetoday(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['mdueToday']}}])
 };
 mtoapprove(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['mtoapprove']}}])
 };
 mapprove(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['mapprove']}}])
 };
 mreject(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['mreject']}}])
 };

}
