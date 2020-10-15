import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {MdChipsModule} from '@angular/material';
import {UserService } from '../../../user.service';
import { Restangular } from 'ngx-restangular';
import { Router} from '@angular/router';

@Component({
  selector: 'app-sentforapproval1',
  templateUrl: './sentforapproval1.component.html',
  styleUrls: ['./sentforapproval1.component.css']
})
export class Sentforapproval1Component implements OnInit {

  constructor(private userservice:UserService,private restangular: Restangular,private router:Router,private formBuilder: FormBuilder) {}
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
  form: FormGroup;
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

  checkk(){
    this.obk=this.allss.filter(obj => obj.allservicereq[0].status != "cancelled" && !obj.allservicereq[0].executorstatus && (obj.allservicereq[0].managementstatus == 'Send to Management' || obj.allservicereq[0].managerstatus == 'Send to Manager') )
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
  this.form= this.formBuilder.group({
    executorstatus: [null, Validators.required],
    executorcomments: [null, Validators.required]
  });
  }
}
