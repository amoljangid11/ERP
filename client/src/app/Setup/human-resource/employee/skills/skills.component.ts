import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {EmployeeComponent } from '../employee.component';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../../user.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Md2Dialog } from 'md2';



@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  private employeecomp: EmployeeComponent

constructor(private router:Router,private restangular:Restangular,public service:UserService,private formBuilder: FormBuilder) { 
  this.service=service;
  this.skills=this
}
form: FormGroup;
skills;
i=0;
level={competencylevel:[{}]}
employee={skill:[{}]}
officiald={skill:[{}]};
editRowId=false;
skill={};
comp;
emp = {};
haveskill=false;
updatebutton = false;
datas;
messageClass
message
edited=false;

open(dialog: Md2Dialog) {
  dialog.open();
}

close(dialog: any) {
  dialog.close();
}

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

save(employee) {
  var create =this.service.editdata;
  var msg=this.skills
  if(undefined==create.skill)
  {
    create.skill=[]
    create.skill.push(employee.skill[0])
    create.save().toPromise().then(function(resp) {
    console.log(resp)
    msg.savemsg('Added Succesfully','alert alert-info');
    })
    this.employee={skill:[{}]};
    this.i=0;
  }
  else{
    create.skill.push(employee.skill[0])
    create.save().toPromise().then(function(resp) {
    msg.savemsg('Added Succesfully','alert alert-info');
    console.log(resp)
    })
    this.employee={skill:[{}]};
    this.i=0;
  }
 
}

edit(emp,dataall,i) {
  this.updatebutton = true;
  this.employee=  dataall
  this.i=i;
}
view(emp,dataall,i) {
  // this.updatebutton = true;
  this.employee=  dataall
  this.i=i;
}

updateskill(empskill)
{
  empskill.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.employee={skill:[{}]};
  this.i=0;
}

cancel(){
  this.i=0;
  this.employee={skill:[{}]};
  this.ngOnInit();
}

// back() {
//   this.router.navigate(['./setuproot', { outlets: { thirdchild: ['create_employee'] } }])
//   this.ngOnInit();
// }

ngOnInit() {

  if(undefined!=this.service.editdata.skill)
  {
    this.officiald=this.service.editdata;
    this.haveskill=true;
  }

  let basePay = this.restangular.all('employeeconfiguration');
  basePay.getList().subscribe(data => {
  this.datas = data.filter(res=>res.competencylevel);
  console.log(this.datas)
  });

  //form submit validation
  this.form = this.formBuilder.group({
    skill: [null, Validators],
    exp: [null, Validators],
    pick: [null, Validators],
    comp: [null, Validators],
  });
}
}

     

  
 
