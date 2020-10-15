import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {MdChipsModule} from '@angular/material';
import {UserService } from '../../../user.service';
import { Restangular } from 'ngx-restangular';
import { DatePipe } from '@angular/common';

import { Router} from '@angular/router';

@Component({
  selector: 'app-duetoday1',
  templateUrl: './duetoday1.component.html',
  styleUrls: ['./duetoday1.component.css'],
  providers:[DatePipe]

})
export class Duetoday1Component implements OnInit {

  constructor(private userservice:UserService,public datepipe:DatePipe,private restangular: Restangular,private router:Router,private formBuilder: FormBuilder) {}
  alls={allservicereq:[{}]}; 
  officiald;
  empname
  repo;
  management;
  approver1;
  approver2;
  approver3;
  set;
  exec;
  getuser;
  datas;
  oobj1;
  allss
    oobj2;
  obk;
  today: number = Date.now();


  action = [
    { viewValue: 'Approved'},
    { viewValue: 'Rejected'}
  
  ];

  view(dataall) {
    // this.updatebutton = true;
    this.alls= dataall 
    console.log(this.alls)
    console.log(dataall.allservicereq[0].raisedby)
   var  obj1 = this.officiald.find(obj1 => obj1.official[0].username == dataall.allservicereq[0].raisedby);
    console.log(obj1.official[0].firstname+" "+obj1.official[0].firstname)
    this.empname=obj1.official[0].firstname+" "+obj1.official[0].lastname
    this.repo=obj1.official[0].reportingmanager

    var  obj8 = this.officiald.find(obj8 => obj8.official[0].role =='Management');
    console.log(obj8)
    this.management=obj8.official[0].firstname+" "+obj8.official[0].lastname
    console.log(this.management)

    var  obj2 = this.set.find(obj1 => obj1.settings[0].category==dataall.allservicereq[0].category);
    console.log(obj2)
    console.log(obj2.settings[0].selected1)
    this.approver1=obj2.settings[0].selected1
    this.approver2=obj2.settings[0].selected2
    this.approver3=obj2.settings[0].selected3
    this.exec=obj2.settings[0].executors
    

  //   this.i=i;
  }
t;
  checkk(){
    this.obk=this.allss.filter(obj => obj.allservicereq[0].status != "cancelled" && obj.allservicereq[0].date  )
    
    var Tday1= this.today;
    console.log(Tday1)
    this.t=this.today+15 * 24 * 60 * 60 * 1000;
    console.log(this.t)
    console.log( this.today )
    this.obk=this.allss.filter(obj => obj.allservicereq[0].executorstatus && ((this.datepipe.transform(obj.allservicereq[0].executordate,'yyyy-MM-dd'))==( this.datepipe.transform(obj.allservicereq[0].date,'yyyy-MM-dd'))) )

    console.log(this.obk)
    

console.log(Tday1)

 }


 requestcancel(det){
  console.log(det)
  // det.allservicereq[0].status=det.allservicereq[0].status1+' by ' +this.getuser.username +' '+'('+this.getuser.utype+')'
  if(det.allservicereq[0].executorstatus=='Approved'){
    det.allservicereq[0].status='closed'
    det.allservicereq[0].executordate = this.today;
  }
  else if(det.allservicereq[0].executorstatus=='Rejected'){
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
  }
}

