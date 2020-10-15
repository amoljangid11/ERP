import { Component, OnInit } from '@angular/core';
import {UserService } from '../../../user.service';
import { Restangular } from 'ngx-restangular';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';


@Component({
  selector: 'app-open1',
  templateUrl: './open1.component.html',
  styleUrls: ['./open1.component.css']
})
export class Open1Component implements OnInit {

  constructor(private userservice:UserService,private restangular: Restangular,private router:Router,private formBuilder: FormBuilder) {}
  allss;
  approver1;
  approver2;
  approver3;
  officiald;
  alls={allservicereq:[{}]}; 
  empname;
  repo;
  set;
  exec;
  execid;
  getuser;
  datas;
  oobj1;
  allss1;
  oobj2;
  allss2;
  obk;
  allss11;
  allss12;
  oobj11;
  oobj12;
  action = [
    { viewValue: 'Approved'},
    { viewValue: 'Rejected'}
  
  ];
  reop_id;
  approver1_id;
  approver2_id;
  approver3_id;
  exec_id;
  management;
  today: number = Date.now();
  managercomments: FormGroup;
  managementcomments: FormGroup;
  executorstatus: FormGroup;
  finalmanagerstatus: FormGroup;
  management1status: FormGroup;
  management2status: FormGroup;
  management3status: FormGroup;
 


  view(dataall) {
    // this.updatebutton = true;
    this.alls= dataall 
    console.log(this.alls)
    console.log(dataall.allservicereq[0].raisedby)
   var  obj1 = this.officiald.find(obj1 => obj1.official[0].username == dataall.allservicereq[0].raisedby);
    console.log(obj1.official[0].firstname+" "+obj1.official[0].firstname)
    this.empname=obj1.official[0].firstname+" "+obj1.official[0].lastname
    this.repo=obj1.official[0].reportingmanager
    this.reop_id=obj1.official[0].reporting_mid

    var  obj8 = this.officiald.find(obj8 => obj8.official[0].role =='Management');
    console.log(obj8)
    this.management=obj8.official[0].firstname+" "+obj8.official[0].lastname
    console.log(this.management)

    var  obj2 = this.set.find(obj1 => obj1.settings[0].category==dataall.allservicereq[0].category);
    console.log(obj2)

   

    console.log(obj2.settings[0].selected1)
    this.approver1=obj2.settings[0].selected1
    this.approver1_id=obj2.settings[0].selected1_id
    this.approver2=obj2.settings[0].selected2
    this.approver2_id=obj2.settings[0].selected2_id

    this.approver3=obj2.settings[0].selected3
    this.approver3_id=obj2.settings[0].selected3_id

    this.exec=obj2.settings[0].executors
    this.exec_id=obj2.settings[0].executors_id

    

  //   this.i=i;
  }


  checkk(){
    this.obk=this.allss.filter(obj => obj.allservicereq[0].status != "cancelled" && obj.allservicereq[0].status == "open")
   this.oobj2 = this.allss2.filter(obj => obj.allservicereq[0].managerstatus == "Send to Manager" &&  !obj.allservicereq[0].finalmanagerstatus && !obj.allservicereq[0].executorstatus);
   this.oobj1 = this.allss1.filter(obj => obj.allservicereq[0].managementstatus == "Send to Management" && !obj.allservicereq[0].management1status && !obj.allservicereq[0].executorstatus);
   this.oobj11 = this.allss11.filter(obj => obj.allservicereq[0].managementstatus == "Send to Management" && !obj.allservicereq[0].management2status && obj.allservicereq[0].management1status=='Approved' && !obj.allservicereq[0].executorstatus);
   this.oobj12 = this.allss12.filter(obj => obj.allservicereq[0].managementstatus == "Send to Management" && !obj.allservicereq[0].management3status && obj.allservicereq[0].management2status=='Approved' && !obj.allservicereq[0].executorstatus);
 console.log(this.oobj2)
 }

  

requestcancel(det){
  console.log(det)
  // det.allservicereq[0].status=det.allservicereq[0].status1+' by ' +this.getuser.username +' '+'('+this.getuser.utype+')'
  

//  else if(det.allservicereq[0].managerstatus=='Send to Manager'){
//    console.log(this.repo)
//     det.allservicereq[0].tempstatus='Pending Approval at ' +this.repo
//   }
if(det.allservicereq[0].NoOfApprovers=='3'){
   if(det.allservicereq[0].management1status=='Approved'){
    det.allservicereq[0].tempstatus='Pending Approval at ' +this.approver2
    det.allservicereq[0].management1date=this.today;
  }
  else if(det.allservicereq[0].management1status=='Rejected'){
    det.allservicereq[0].tempstatus=this.approver1 +det.allservicereq[0].management1status
    det.allservicereq[0].management1date=this.today;

  }
  
  // else
   if(det.allservicereq[0].management2status=='Approved'){
    det.allservicereq[0].tempstatus='Pending Approval at ' +this.approver3
    det.allservicereq[0].management2date=this.today;

  }
  else if(det.allservicereq[0].management2status=='Rejected'){
    det.allservicereq[0].tempstatus=this.approver2 +det.allservicereq[0].management2status
    det.allservicereq[0].management2date=this.today;

  }

   if(det.allservicereq[0].management3status){
  //   det.allservicereq[0].tempstatus=this.approver3 +det.allservicereq[0].management3status
  // }
  //  if(det.allservicereq[0].management3status=='Rejected'){
    det.allservicereq[0].tempstatus=this.approver3 +det.allservicereq[0].management3status
    det.allservicereq[0].management3date = this.today;

  }
  // else if(det.allservicereq[0].finalmanagerstatus){
  //   det.allservicereq[0].tempstatus=this.repo +det.allservicereq[0].finalmanagerstatus
  // }
}

 if(det.allservicereq[0].NoOfApprovers=='2'){
  if(det.allservicereq[0].management1status=='Approved'){
    det.allservicereq[0].tempstatus='Pending Approval at ' +this.approver2
    det.allservicereq[0].management1date=this.today;

  }
  else if(det.allservicereq[0].management1status=='Rejected'){
    det.allservicereq[0].tempstatus=this.approver1 +det.allservicereq[0].management1status
    det.allservicereq[0].management1date=this.today;

  }

  // else
   if(det.allservicereq[0].management2status){
  //   det.allservicereq[0].tempstatus=this.approver2 +det.allservicereq[0].management2status
  // }
  // else if(det.allservicereq[0].management2status=='Rejected'){
    det.allservicereq[0].tempstatus=this.approver2 +det.allservicereq[0].management2status
    det.allservicereq[0].management2date = this.today;

  }
  // else if(det.allservicereq[0].finalmanagerstatus){
  //   det.allservicereq[0].tempstatus=this.repo +det.allservicereq[0].finalmanagerstatus
  // }
}

 if(det.allservicereq[0].NoOfApprovers=='1'){
  if(det.allservicereq[0].management1status){
  //   det.allservicereq[0].tempstatus=this.approver1 +det.allservicereq[0].management1status
  // }
  // else if(det.allservicereq[0].management1status=='Rejected'){
    det.allservicereq[0].tempstatus=this.approver1 +det.allservicereq[0].management1status
    det.allservicereq[0].management1date = this.today;

  }
  // else if(det.allservicereq[0].finalmanagerstatus){
  //   det.allservicereq[0].tempstatus=this.repo +det.allservicereq[0].finalmanagerstatus
  // }
}
if(det.allservicereq[0].finalmanagerstatus){
    det.allservicereq[0].tempstatus=this.repo +det.allservicereq[0].finalmanagerstatus
    det.allservicereq[0].finalmanagerdate = this.today;
  }

if(det.allservicereq[0].executorstatus=='Approved'){
  // det.allservicereq[0].tempstatus=this.exec +det.allservicereq[0].executorstatus
  det.allservicereq[0].status='closed'
  det.allservicereq[0].executordate = this.today;
}
else if(det.allservicereq[0].executorstatus=='Rejected'){
  // det.allservicereq[0].tempstatus=this.exec +det.allservicereq[0].executorstatus
  det.allservicereq[0].status='rejected'
  det.allservicereq[0].executordate = this.today;

}
  

  det.save().toPromise().then(res=>{
    // console.log(det.allservicereq[0].status1)

   

    console.log(res)
    this.restangular.all('category').getList()
                    .subscribe(data=>{this.datas=data.filter(res=>res.aallservicereqll)})
                    console.log(this.datas)
         })
    this.ngOnInit();
}


sendmanagement(det){
  det.allservicereq[0].managementstatus="Send to Management"
  det.allservicereq[0].managementdate=this.today;
  console.log(this.approver1)
  if(det.allservicereq[0].managementstatus=='Send to Management'){
        det.allservicereq[0].tempstatus='Pending Approval at ' +this.approver1
      }
  det.save().toPromise().then(res=>{
    

    console.log(res)
    this.restangular.all('category').getList()
                    .subscribe(data=>{this.datas=data.filter(res=>res.aallservicereqll)})
                    console.log(this.datas)
         })

}

sendmanager(det){
  det.allservicereq[0].managerstatus="Send to Manager"
  det.allservicereq[0].managerdate=this.today;
  console.log(this.repo)
   if(det.allservicereq[0].managerstatus=='Send to Manager'){
       console.log(this.repo)
        det.allservicereq[0].tempstatus='Pending Approval at ' +this.repo

      }
  det.save().toPromise().then(res=>{
  

    console.log(res)
    this.restangular.all('category').getList()
                    .subscribe(data=>{this.datas=data.filter(res=>res.aallservicereqll)})
                    console.log(this.datas)
         })

}









 
  showdivv(){
    console.log("Hiiiiiiiiiiiiiiiiiii")
    document.getElementById("myDIV").style.display = 'block';
    document.getElementById("myDIV1").style.display = 'none';
    document.getElementById("myDIV2").style.display = 'none';
  }
  showdivv1(){
    document.getElementById("myDIV").style.display = 'none';
    document.getElementById("myDIV1").style.display = 'block';
    document.getElementById("myDIV2").style.display = 'none';
  }
  showdivv2(){
    document.getElementById("myDIV").style.display = 'none';
    document.getElementById("myDIV1").style.display = 'none';
    document.getElementById("myDIV2").style.display = 'block';
    // document.getElementById("myDIVFINALManger").style.display = 'none';

  }

  showFinalDiv(){
    
    document.getElementById("myDIVFINALMangement").style.display = 'block';
  }

  // showforManagement1(){
   
  //   document.getElementById(" myDIVFINALManger").style.display = 'block';

  // }

  showappr1div(){
     document.getElementById("myFirstManagement").style.display = 'block';
     document.getElementById("myDIVFINALManger").style.display = 'none';
     document.getElementById("mySecondManagement").style.display = 'none';

  }

  showappr2div(){
    document.getElementById("myFirstManagement").style.display = 'none';
    document.getElementById("myDIVFINALManger").style.display = 'none';
    document.getElementById("mySecondManagement").style.display = 'block';

 }

 showappr3div(){
  document.getElementById("myFirstManagement").style.display = 'none';
  document.getElementById("myDIVFINALManger").style.display = 'none';
  document.getElementById("mySecondManagement").style.display = 'none';
  document.getElementById("myThirdManagement").style.display = 'block';

}
  showFinalDiv1(){
    // document.getElementById("myDIV").style.display = 'none';
    // document.getElementById("myDIV1").style.display = 'none';
    // document.getElementById("myDIV2").style.display = 'none';
    document.getElementById("myDIVFINALManger").style.display = 'block';
    document.getElementById("myFirstManagement").style.display = 'none';
    document.getElementById("mySecondManagement").style.display = 'none';


    //  document.getElementById("myDIVFINALMangement").style.display = 'none';

  }

  ngOnInit() {

    this.getuser=JSON.parse(localStorage.getItem('user'));
    console.log(this.getuser)

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
  this.checkk();
  return this.allss1;
  });
    let baseAll11 = this.restangular.all('category');
  baseAll11.getList({selected2_id:this.getuser.employee_OId}).subscribe(data => {
  this.allss11 = data.filter(res=>res.allservicereq);
  console.log(this.allss11)
  this.checkk();
  return this.allss11;
  });
   let baseAll22 = this.restangular.all('category');
  baseAll22.getList({selected3_id:this.getuser.employee_OId}).subscribe(data => {
  this.allss12 = data.filter(res=>res.allservicereq);
  console.log(this.allss12)
  this.checkk();
  return this.allss12;
  });
  let baseAll2 = this.restangular.all('category');
  baseAll2.getList({reporting_mid:this.getuser.employee_OId}).subscribe(data => {
  this.allss2 = data.filter(res=>res.allservicereq);
  console.log(this.allss2)
  this.checkk();
  return this.allss2;
  });

  var baseOfficial = this.restangular.all('createemployee');
    baseOfficial.getList().subscribe(data => {
      this.officiald = data
      console.log(this.officiald)
      return this.officiald;
    });
    let basesetting = this.restangular.all('category');
    basesetting.getList().subscribe(data => {
    this.set = data.filter(res=>res.settings);
    console.log(this.set)
    return this.set;
  });

  this.managercomments = this.formBuilder.group({
    managercomment: [null, Validators.required]
  });
  this.managementcomments = this.formBuilder.group({
    managementcomment: [null, Validators.required]
  });

  this.executorstatus= this.formBuilder.group({
    executorstatu: [null, Validators.required],
    executorcomment: [null, Validators.required]
  });
  this.finalmanagerstatus= this.formBuilder.group({
    finalmanagerstatu: [null, Validators.required],
    finalmanagercomment: [null, Validators.required]
  });
  this.management1status= this.formBuilder.group({
    management1statu: [null, Validators.required],
    management1comments: [null, Validators.required]
  });
  this.management2status= this.formBuilder.group({
    management2statu: [null, Validators.required],
    management2comments: [null, Validators.required]
  });
  this.management3status= this.formBuilder.group({
    management3statu: [null, Validators.required],
    management3comments: [null, Validators.required]
  });
  }

}

