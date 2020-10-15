import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import {UserService } from '../../user.service';
import {MdChipsModule} from '@angular/material';
import {MdToolbarModule,MdMenuModule,MdTooltipModule,MdSidenavModule} from '@angular/material';
import { RestangularModule, Restangular} from 'ngx-restangular';

@Component({
  selector: 'app-setup-root',
  templateUrl: './setup-root.component.html',
  styleUrls: ['./setup-root.component.css']
})
export class SetupRootComponent implements OnInit {
  textactive;
  textactive1;
  textactive2;
  textactive3;
  textactive4;
  textactive5;
  textactive6;
  textactive7;
  textactive8;
  textactive9;
  datas;
  employee;
  constructor(private restangular: Restangular,private router:Router, private userservice:UserService, private flashmessage: FlashMessagesService) { }
show;
  ngOnInit() {
    this.show=true;
  }
dash(){
 this.textactive ='text-primary';
  this.router.navigate(['./setuproot',{outlets:{secondchild:['dashboard']}}])
};

self(){
  //this.router.navigate(['./setuproot',{outlets:{thirdchild:['leavereq']}}])
  this.textactive1 ='text-primary';
  this.router.navigate(['./setuproot',{outlets:{secondchild:['self-service'], thirdchild:['leavereq']}}])
};
request(){
  this.textactive2 ='text-primary';
  this.router.navigate(['./setuproot',{outlets:{secondchild:['service-request'],thirdchild:['configuration']}}])
};
human(){
  this.textactive3 ='text-primary';
   this.router.navigate(['./setuproot',{outlets:{secondchild:['human-resource'], thirdchild:['employee']}}])
  this.restangular.all('createemployee').getList().subscribe(data=>{
    this.datas=data.filter(res=>res.official);
    if(this.datas[0])
         {console.log("edit")
           this.employee=this.datas[0]
  this.router.navigate(['./setuproot',{outlets:{secondchild:['human-resource'], thirdchild:['employee']}}])
        }else{
           console.log("add")
          //  data.update();
          this.router.navigate(['./setuproot', { outlets: { thirdchild: ['employee_manage'] } }])
         }})
};
appraisal(){
  this.textactive4 ='text-primary'
  this.router.navigate(['./setuproot',{outlets:{secondchild:['appraisal'],thirdchild:['appraisalback']}}])
};
background(){
  this.textactive5 ='text-primary';
  this.router.navigate(['./setuproot',{outlets:{secondchild:['backgroundcheck'],thirdchild:['configuration_bg']}}])
};
analytics(){
  this.textactive6 ='text-primary';
  this.router.navigate(['./setuproot',{outlets:{secondchild:['analytics']}}])
};
site_confi(){
  this.textactive7 ='text-primary';
  this.router.navigate(['./setuproot',{outlets:{secondchild:['site'],thirdchild:['site_preference']}}])

};
time(){
  this.textactive8 ='text-primary';
    this.router.navigate(['./time',{outlets:{timechild:['timesheet']}}])

 // this.router.navigate(['./time'])

};
organization()
{
  this.textactive9 ='text-primary'
  this.router.navigate(['./setuproot',{outlets:{secondchild:['organization'],thirdchild:['organization-info']}}])

}


expenses()
{
  this.textactive9 ='text-primary'
  this.router.navigate(['./setuproot',{outlets:{secondchild:['expenses'],thirdchild:['expenses1']}}])

}
assets()
{
  this.textactive9 ='text-primary'
  this.router.navigate(['./setuproot',{outlets:{secondchild:['assets'],thirdchild:['assets1']}}])
}
recruitment()
{
  this.textactive9 ='text-primary'
  this.router.navigate(['./setuproot',{outlets:{secondchild:['recruitment'],thirdchild:['openingposition']}}])

}
disciplinary()
{
  this.textactive9 ='text-primary'
  this.router.navigate(['./setuproot',{outlets:{secondchild:['disciplinary'],thirdchild:['violationtype']}}])

}


}
