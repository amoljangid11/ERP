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
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class  RatingComponent implements OnInit {

formControl = new FormControl('hello', Validators.required);
 
constructor(private userservice:UserService,private restangular: Restangular) { 
 this.group=this
}

group;
ratings={rating:[{}]};
bunits={businessunits:[{}]};
stat={appraisalstatus:[{}]};
data1;
dunitcoll;
bunit;
updatebutton = false;
updates=false;
rating=[];


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
 create.rating=[];
 create.rating.push(obj.rating[0])
 create.save().toPromise().then(res=>{
 console.log(res)
 this.restangular.all('appraisal').getList()
                 .subscribe(data=>{this.data1=data.filter(res=>res.rating)})
                 console.log(this.data1)

 msg.savemsg('Added Succesfully','alert alert-info');
 })
 this.ratings={rating:[{}]}; 

}

edit(rat) {
  this.updatebutton = true;
  this.ratings= rat
}

update(rtype)
{
  rtype.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.ratings={rating:[{}]}; 
}




/*edit(data) {
  this.updatebutton = true;
  this.parameters=  data
  var manage=[];
  manage=this.data1.filter(datas =>datas.manageholiday[0].groupname == data.holidaygroup[0].groupname);
  console.log(manage)
  this.holidayoptions= manage
  console.log(this.holidayoptions)
}

updatehgroup(hgroup,options,value)
{
  hgroup.save().toPromise().then(function(resp) {
  console.log(resp)
  console.log(options)
  options.forEach(res=>{
  res.manageholiday[0].groupname=value;
  res.save();
  })
  })
  this.holidaygroups={holidaygroup:[{}]};
}*/

cancel(){
  this.ratings={rating:[{}]};
}

delete(rt,i){
  var delmsg=this.group
  rt.remove().toPromise().then(function(resp,err) {
  console.log(resp)
  })
  this.data1.splice(i,1);
  
  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
  
}


/*editholiday(data){
  console.log(data)
this.holidaygroups={holidaygroup:[{}]};
    this.updates = true;
    this.holidays=  data

   

}
updateholiday(hgroup)
{
   hgroup.save().toPromise().then(function(resp) {
   console.log(resp)
  })
   this.holidays={manageholiday:[{}]};
}

delete1(hi,i){
  hi.remove();
  console.log(hi)
  this.datas.splice(i,1);
}



savechanges(holiday){
 var create= this.restangular.one('management');
 create.manageholiday=[];
 create.manageholiday.push(holiday.manageholiday[0])
 create.save().toPromise().then(res=>{
 console.log(res)
 this.restangular.all('management').getList()
                 .subscribe(data=>{this.data1=data.filter(res=>res.manageholiday)})
                 console.log(this.data1)
})
 this.holidays={manageholiday:[{}]};
}


*/


  ngOnInit() {

    let baseAppraisal = this.restangular.all('appraisal');
    baseAppraisal.getList().subscribe(data => {
    this.data1 = data.filter(res=>res.rating);
    console.log(this.data1)
    return this.data1;
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

  }

} 
