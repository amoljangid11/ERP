import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {MdChipsModule} from '@angular/material';
import {UserService } from '../../../user.service';
import { Restangular } from 'ngx-restangular';
import { Router} from '@angular/router';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-mdue-today',
  templateUrl: './mdue-today.component.html',
  styleUrls: ['./mdue-today.component.css'],
  providers:[DatePipe]

})
export class MdueTodayComponent implements OnInit {

  constructor(private userservice:UserService,public datepipe:DatePipe,private restangular: Restangular,private router:Router,private formBuilder: FormBuilder) {}


  management1;
  management2;
  management3;

  allss;
  alls={allservicereq:[{}]}; 
  officiald;
  empname;
  repo;
  management;
  approver1;
  approver2;
  approver3;
  exec;
  getuser;
  set;
  allss1;
  allss2;
  today;
  t;

  checkk(){

    var Tday1= this.today;
    console.log(Tday1)
    this.t=this.today+15 * 24 * 60 * 60 * 1000;
    console.log(this.t)
    console.log( this.today )

    this.management1=this.allss.filter(obj => obj.allservicereq[0].executorstatus && ((this.datepipe.transform(obj.allservicereq[0].executordate,'yyyy-MM-dd'))==( this.datepipe.transform(obj.allservicereq[0].date,'yyyy-MM-dd'))) )
    this.management2=this.allss1.filter(obj =>obj.allservicereq[0].executorstatus && ((this.datepipe.transform(obj.allservicereq[0].executordate,'yyyy-MM-dd'))==( this.datepipe.transform(obj.allservicereq[0].date,'yyyy-MM-dd'))) )
    this.management3=this.allss2.filter(obj => obj.allservicereq[0].executorstatus && ((this.datepipe.transform(obj.allservicereq[0].executordate,'yyyy-MM-dd'))==( this.datepipe.transform(obj.allservicereq[0].date,'yyyy-MM-dd'))) )

  }

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

  ngOnInit() {

    this.getuser=JSON.parse(localStorage.getItem('user'));
    console.log(this.getuser)

    let baseAll = this.restangular.all('category');
    baseAll.getList({selected1_id:this.getuser.employee_OId}).subscribe(data => {
    this.allss = data.filter(res=>res.allservicereq);
    console.log(this.allss)
    this.checkk();
    return this.allss;
    });
    let baseAll1 = this.restangular.all('category');
    baseAll1.getList({selected2_id:this.getuser.employee_OId}).subscribe(data => {
    this.allss1 = data.filter(res=>res.allservicereq);
    console.log(this.allss1)
    this.checkk();
    return this.allss1;
    });
    let baseAll2 = this.restangular.all('category');
    baseAll2.getList({selected3_id:this.getuser.employee_OId}).subscribe(data => {
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

