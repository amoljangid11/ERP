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
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent  implements OnInit {

formControl = new FormControl('hello', Validators.required);
 
constructor(private userservice:UserService,private restangular: Restangular) { 
 this.group=this
}

group;
skills={skill:[{}]};
datas;
updatebutton = false;
updates=false;
skill=[];


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
 create.skill=[];
 create.skill.push(obj.skill[0])
 create.save().toPromise().then(res=>{
 console.log(res)
 this.restangular.all('appraisal').getList()
                 .subscribe(data=>{this.datas=data.filter(res=>res.skill)})
                 console.log(this.datas)

 msg.savemsg('Added Succesfully','alert alert-info');
 })
 this.skills={skill:[{}]}; 

}

edit(skil) {
  this.updatebutton = true;
  this.skills= skil
}

update(stype)
{
  stype.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.skills={skill:[{}]}; 
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
  this.skills={skill:[{}]};
}

delete(sk,i){
  var delmsg=this.group
  sk.remove().toPromise().then(function(resp,err) {
  console.log(resp)
  })
  this.datas.splice(i,1);
  
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

    let baseHolidaygroup = this.restangular.all('appraisal');
    baseHolidaygroup.getList().subscribe(data => {
    this.datas = data.filter(res=>res.skill);
    return this.datas;
    });
    
    

  }

} 
