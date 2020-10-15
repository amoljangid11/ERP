import { Component, OnInit } from '@angular/core';
import {MdChipsModule} from '@angular/material';
import {UserService } from '../../../user.service';
import { Restangular } from 'ngx-restangular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-violationtype',
  templateUrl: './violationtype.component.html',
  styleUrls: ['./violationtype.component.css']
})
export class ViolationtypeComponent implements OnInit {

  constructor(private userservice:UserService,private restangular: Restangular,private formBuilder: FormBuilder) { 
    this.exit=this;
  }
  form: FormGroup;
  exit;
  type={violationtype:[{}]}
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
  save(ext)
  {
    var msg=this.exit
  var create=this.restangular.one('disciplinary')
  create.exitid;
  console.log("")
  create.violationtype=[]
  create.violationtype.push(ext.violationtype[0])
  create.save().toPromise().then(res=>{
    console.log(res)
  this.restangular.all('disciplinary').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.violationtype)})
  msg.savemsg('Added Succesfully','alert alert-info');
  })
  this.type={violationtype:[{}]};
  }
  cancel(){
    this.type={violationtype:[{}]};
    this.ngOnInit();
    }
    edit(emp) {
      this.updatebutton = true;
      this.type= emp
    }
    view(emp) {
      // this.updatebutton = true;
      this.type= emp
    }
    update(etype)
{
  var msg=this.exit;
  etype.save().toPromise().then(function(resp) {
    msg.savemsg('Updated Succesfully','alert alert-info');
  console.log(resp)
  })
  this.type={violationtype:[{}]};
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
    let baseExit = this.restangular.all('disciplinary');
  baseExit.getList().subscribe(data => {
  this.datas =data.filter(res=>res.violationtype);
  console.log(this.datas)
  return this.datas;
  });
  this.form = this.formBuilder.group({
    violationtype: [null, Validators.required],
    description: [null, Validators]
  });
  }

}
