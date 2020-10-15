import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {MdChipsModule} from '@angular/material';
import {UserService } from '../../../user.service';
import { Restangular } from 'ngx-restangular';
import { Router} from '@angular/router';

@Component({
  selector: 'app-reject2',
  templateUrl: './reject2.component.html',
  styleUrls: ['./reject2.component.css']
})
export class Reject2Component implements OnInit {

  constructor(private userservice:UserService,private restangular: Restangular,private router:Router,private formBuilder: FormBuilder) {}
  allss;
  approver1;
  approver2;
  approver3;
  officiald;
  alls={allservicereq:[{}]}; 
  empname;
  repo;
  management;
  set;
  exec;
  oobj1;
  oobj2;
  obk;
  allss1;
  allss2;
  getuser;
  datas;
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
   this.oobj1 = this.allss2.filter(obj => obj.allservicereq[0].managerstatus == 'Send to Manager' && obj.allservicereq[0].finalmanagerstatus=='Rejected');
  
 console.log(this.oobj1)
 }

  ngOnInit() {

    this.getuser=JSON.parse(localStorage.getItem('user'));
    console.log(this.getuser)

  
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
  }

}


