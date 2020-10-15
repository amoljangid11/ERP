import { Component, OnInit } from '@angular/core';
import {MdChipsModule} from '@angular/material';
import {UserService } from '../../../user.service';
import { Restangular } from 'ngx-restangular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-employeeadvances',
  templateUrl: './employeeadvances.component.html',
  styleUrls: ['./employeeadvances.component.css']
})
export class EmployeeadvancesComponent implements OnInit {

  constructor(private userservice:UserService,private restangular: Restangular,private formBuilder: FormBuilder) { 
    this.exit=this
  }
  exit
  assu3
  projecttimes
  pays
  form: FormGroup;
   emp={empadvances:[{}]}
   employee = { official: [{}] };
   projecttime={project:[{}]};
   pay={paymode:[{}]}
updatebutton = false;
datas;
messageClass
message
deleted = false;
edited=false;

formControl = new FormControl('hello', Validators.required);

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

save(ext){
  var msg=this.exit
  var create=this.restangular.one('expense')
  
  console.log("")
  create.empadvances=[]
  create.empadvances.push(ext.empadvances[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('expense').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.empadvances)})

  msg.savemsg('Added Succesfully','alert alert-info');
  })
  this.emp={empadvances:[{}]};
}

cancel(){
this.emp={empadvances:[{}]};
this.ngOnInit();
}

edit(emp) {
  this.updatebutton = true;
  this.emp= emp
}
view(emp) {
  // this.updatebutton = true;
  this.emp= emp
}

update(etype)
{
  var msg=this.exit;
  etype.save().toPromise().then(function(resp) {
    msg.savemsg('Updated Succesfully','alert alert-info');
  console.log(resp)
  })
  this.emp={empadvances:[{}]};
}

delete(et,i){
  if(confirm('Are you want to delete???')){
  var delmsg=this.exit
  et.remove().toPromise().then(function(resp,err) {
  console.log(resp)
  })
  this.datas.splice(i,1);
  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
}
else{
  this.cancel()
}
}


  ngOnInit() {
    let baseExit = this.restangular.all('expense');
  baseExit.getList().subscribe(data => {
  this.datas =data.filter(res=>res.empadvances);
  console.log(this.datas)
  return this.datas;
  });
  let baseExit4 = this.restangular.all('createemployee');
  baseExit4.getList().subscribe(data => {
  this.assu3 =data.filter(res=>res.official);
  console.log(this.assu3)
  return this.assu3;
  });
  let baseExit2 = this.restangular.all('project_time');
  baseExit2.getList().subscribe(data => {
  this.projecttimes =data.filter(res=>res.project);
  console.log(this.projecttimes)
  return this.projecttimes;
  });
  let baseExit3 = this.restangular.all('expense');
  baseExit3.getList().subscribe(data => {
  this.pays =data.filter(res=>res.paymode);
  console.log(this.pays)
  return this.pays;
  });
  this.form = this.formBuilder.group({
    emp: [null, Validators.required],
    project: [null, Validators],
    amount: [null, Validators.required],
    paym: [null, Validators.required],
    reference: [null, Validators],
    descri: [null, Validators]
  })
  }

}
