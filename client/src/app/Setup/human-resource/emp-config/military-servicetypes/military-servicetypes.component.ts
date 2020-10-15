import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';
import { Router} from '@angular/router';
import { Md2Dialog } from 'md2';



@Component({
  selector: 'app-military-servicetypes',
  templateUrl: './military-servicetypes.component.html',
  styleUrls: ['./military-servicetypes.component.css']
})
export class MilitaryServicetypesComponent implements OnInit {

  constructor(private userservice:UserService,private restangular: Restangular,private router:Router, private formBuilder: FormBuilder) { 
    this.service=this
  }
form: FormGroup;
service;
military={militaryservice:[{}]};
datas;
updates=false;
messageClass
message
deleted = false;
edited=false;

open(dialog: Md2Dialog) {
  dialog.open();
  }


  close(dialog: any) {
  dialog.close();
  }

  view(dataall) {
    // this.updatebutton = true;
    this.military= dataall
  //   this.i=i;
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

save(military){
  var msg=this.service
  var create= this.restangular.one('employeeconfiguration');
  create.militaryservice=[];
  create.militaryservice.push(military.militaryservice[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('employeeconfiguration').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.militaryservice)})
    
    msg.savemsg('Added Succesfully','alert alert-info');
  })
this.military={militaryservice:[{}]};
}

cancel(){
  this.military={militaryservice:[{}]};
  this.ngOnInit();
}

edit(service){
	this.updates=true;
	this.military=service;

}
update(config){
  config.save().toPromise().then(function(resp) {
  console.log(resp)
 })
 this.military={militaryservice:[{}]};
}

delete(service,i){
  if(confirm('Are you want to delete???')){
  var delmsg=this.service;
  service.remove().toPromise().then(function(resp,err) {
  console.log(resp)
  })
  this.datas.splice(i,1);

  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
}
else{
  this.cancel();
}
}


  ngOnInit() {

  	let base = this.restangular.all('employeeconfiguration');
    base.getList().subscribe(data => {
    this.datas = data.filter(res=>res.militaryservice);
    console.log(this.datas)
    });

    //form submit validation
    this.form = this.formBuilder.group({
    military: [null, Validators.required],
    desc: [null, Validators],
  });
  }

}
