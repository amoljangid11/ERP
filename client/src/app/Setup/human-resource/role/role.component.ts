import { Component, OnInit,ViewChild } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../user.service';
import { viewClassName } from '@angular/compiler';
import { ITreeOptions } from 'angular-tree-component';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
})


export class RoleComponent implements OnInit {


constructor(private restangular: Restangular,private service:UserService,private formBuilder: FormBuilder)
{this.group=this}

form:FormGroup;
roles={role:[{}]}    
roledata; 
updatebutton = false;  
show;
view
number
group
datas
roll
updates=false;selectedgroup;showgrptb=false;messageClass;message;edited=false;selectgroup;othergroup;

grouprole = [{value:'Management'},{value:'Manager'},{value:'HR'},{value:'Employee'},{value:'External User'},{value:'System Admin'},{value:'Other'}];

privilages =[{value:'Self Service'},{value:'Service Request'},{value:'HR'},{value:'Appraisals'},{value:'Recruiments'},{value:'Background Check'},{value:'Organization'},
{value:'Site Config'},{value:'Expenses'},{value:'Asset'},{value:'Disciplinary'},{value:'Analytics'}];

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


selectGroup(group)
{
  console.log(group);
  console.log(group.value);
  if(group.value=="Other"){this.showgrptb=true}else{this.showgrptb=false}
  this.selectedgroup = group.value;
}

cancel(){
  this.roles = {role:[{}]};
}

delete(data,i){
  if(confirm("Are you want to delete")){
  var delmsg=this.group
  data.remove().toPromise().then(function(resp,err) {
    // this.ngOnInit();
  console.log(resp)

  })

  this.datas.splice(i,1);
  this.ngOnInit();
  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
}
  else{
    this.cancel();
  }  
}

edit(par) {
  this.updatebutton = true;
  this.roles=par
}

update(group)
{
  group.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.roles={role:[{}]};
}

selectPrivilage(privilages)
{
  var prev=[];
  console.log(privilages);
  console.log(privilages.value);
  for(var i=0;i<this.privilages.length;i++)
  {
    if(this.privilages[i].value==privilages.value)
    {
      prev.push(privilages);
    }
  }
  console.log(prev);
}

save(obj){
  console.log(obj);
  var msg=this.group;
  var create= this.restangular.one('rolesprivileges');
  create.role=[];
  create.role.push(obj.role[0]);
  console.log(obj.role[0].groupname);
  console.log(obj.role[0].groups);
  if(this.selectedgroup=="Other")
  {
    create.role[0].group=obj.role[0].groupname;
  }
  else{
    create.role[0].group=obj.role[0].groups;
  }
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('rolesprivileges').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.role)})
  console.log(this.datas)

  msg.savemsg('Added Succesfully','alert alert-info');
  })
  this.roledata={role:[{}]};
  this.ngOnInit();
}

ngOnInit() {

  let baseRole= this.restangular.all('rolesprivileges');
  baseRole.getList().subscribe(data => {
  console.log(data)
  this.roledata =data.filter(res=>res.role);
  return this.roledata;
 });

 this.form = this.formBuilder.group({
 rolename: [null, Validators.required],
 group: [null, Validators],
 dsc:[null,Validators],
 groupsel:[null,Validators]
 });
}
}