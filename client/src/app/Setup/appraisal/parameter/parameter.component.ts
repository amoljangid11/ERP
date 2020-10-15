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
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.css']
})
export class ParameterComponent  implements OnInit {

formControl = new FormControl(Validators.required);
 
constructor(private userservice:UserService,private restangular: Restangular) { 
 this.group=this
}

group;
parameters={parameter:[{}]};
datas;
updatebutton = false;
updates=false;
parameter=[];


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
 create.parameter=[];
 create.parameter.push(obj.parameter[0])
 create.save().toPromise().then(res=>{
 console.log(res)
 this.restangular.all('appraisal').getList()
                 .subscribe(data=>{this.datas=data.filter(res=>res.parameter)})
                 console.log(this.datas)

 msg.savemsg('Added Succesfully','alert alert-info');
 })
 this.parameters={parameter:[{}]}; 

}

edit(par) {
  this.updatebutton = true;
  this.parameters= par
}

update(ptype)
{
  ptype.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.parameters={parameter:[{}]};
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
  this.parameters={parameter:[{}]};
}

delete(pr,i){
  var delmsg=this.group
  pr.remove().toPromise().then(function(resp,err) {
  console.log(resp)
  })
  this.datas.splice(i,1);
  
  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
  
}


editparameter(data){
  console.log(data)
this.parameters={parameter:[{}]};
    this.updates = true;
    this.datas= data

   

}
/*updateparameter(parameter)
{
   parameter.save().toPromise().then(function(resp) {
   console.log(resp)
  })
   this.parameters={parameter:[{}]};
}

/*delete1(hi,i){
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
    this.datas = data.filter(res=>res.parameter);
    return this.datas;
    });
    
    

  }

} 
