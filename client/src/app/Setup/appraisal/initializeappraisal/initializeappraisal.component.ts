import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MdChipsModule} from '@angular/material';
import {UserService } from '../../../user.service';
import { Restangular } from 'ngx-restangular';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})

@Component({
  selector: 'app-initializeappraisal',
  templateUrl: './initializeappraisal.component.html',
  styleUrls: ['./initializeappraisal.component.css']
})
export class InitializeAppraisalComponent  implements OnInit {

  constructor(private userservice:UserService,private restangular: Restangular) { 
  this.group=this
  }
  mode = [
    { name: 'Select Appraisal Mode' },
    { name: 'Quarterly' },
    { name: 'Half-yearly' },
    { name: 'Yearly' },
    ];
  sel = [
    { name: 'Managers' },
    { name: 'Employees' },
    ];
  ret = [
    { name: 'Select Ratings' },
    { name: '1-5' },
    { name: '1-10' },
    ];
    stat = [
      { name: 'open' },
      { name: 'close' },
    ];
    range = [
      { year: 'Select from' },
      { year: '2017' },
      { year: '2018' },
      ];
      year1 = [
        { year: 'Select to' },
        { year: '2017' },
        { year: '2018' },
        ];
  group;
  initializeappraisals={initializeappraisal:[{}]};
  bunits={businessunits:[{}]};
  dunits={department:[{}]};
  parameters={parameter:[{}]};
  bunit;
  dunit;
  datas;
  data2;
  dunitcoll;
  updatebutton = false;
updates=false;
initializeappraisal=[];


messageClass
message
deleted = false;
edited=false;

savemsg(msg,msgcls)
{

  this.edited=true;
  this.messageClass=msgcls;
  this.message=msg;
  setTimeout(function() {
  this.edited = false;
  console.log(this.edited);
  }.bind(this), 1500);
}


save(obj){
  var msg=this.group
 var create= this.restangular.one('appraisal');
 create.initializeappraisal=[];
 create.initializeappraisal.push(obj.initializeappraisal[0])
 create.save().toPromise().then(res=>{
 console.log(res)
 this.restangular.all('appraisal').getList()
                 .subscribe(data=>{this.data2=data.filter(res=>res.initializeappraisal)})
                 console.log(this.data2)

 msg.savemsg('Added Succesfully','alert alert-info');
 })
 this.initializeappraisals={initializeappraisal:[{}]}; 

}

edit(ini) {
  this.updatebutton = true;
  this.initializeappraisals= ini
}

update(initype)
{
  initype.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.initializeappraisals={initializeappraisal:[{}]}; 
}

cancel(){
  this.initializeappraisals={initializeappraisal:[{}]};
}

delete(ip,i){
  var delmsg=this.group
  ip.remove().toPromise().then(function(resp,err) {
  console.log(resp)
  })
  this.data2.splice(i,1);
  
  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
  
}



  ngOnInit() {
    let baseAppraisal = this.restangular.all('appraisal');
    baseAppraisal.getList().subscribe(data => {
    this.data2 =data.filter(res=>res.initializeappraisal);
    console.log(this.data2)
    return this.data2;
       });
    
    let baseBusiness = this.restangular.all('organizations');
    baseBusiness.getList().subscribe(data => {
    this.bunit =data.filter(res=>res.businessunits);
    console.log(this.bunit)
    return this.bunit;
       });

       let baseDepart= this.restangular.all('departments');
       baseDepart.getList().subscribe(data => {
        this.dunitcoll =data.filter(res=>res.department);
       console.log(this.dunitcoll)
       return this.dunitcoll;
       
       });


          let baseHolidaygroup = this.restangular.all('appraisal');
          baseHolidaygroup.getList().subscribe(data => {
          this.datas = data.filter(res=>res.parameter);
          console.log(this.datas)
          return this.datas;
          });
          
          
  }

}
