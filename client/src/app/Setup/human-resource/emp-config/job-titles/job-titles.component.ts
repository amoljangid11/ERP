import { Component, OnInit } from '@angular/core';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Md2Dialog } from 'md2';




@Component({
  selector: 'app-job-titles',
  templateUrl: './job-titles.component.html',
  styleUrls: ['./job-titles.component.css']
})
export class JobTitlesComponent implements OnInit {


  constructor(private userservice:UserService,private restangular: Restangular,private formBuilder: FormBuilder) {
    this.jobtitle=this
   }
   form: FormGroup;
   form1:FormGroup;

jobtitle;
job={jobtitle:[{}]}
pay={payfrequency:[{}]}
pays;
updates=false;
datas;
messageClass
message
edited=false;
deleted=false;

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


save(jt){
  var msg=this.jobtitle
  var create= this.restangular.one('employeeconfiguration');
  create.jobtitle=[];
  create.jobtitle.push(jt.jobtitle[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('employeeconfiguration').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.jobtitle)})

  msg.savemsg('Added Succesfully','alert alert-info');
  })
    
  this.job={jobtitle:[{}]}
}

cancel(){
  this.job={jobtitle:[{}]}
  this.ngOnInit();
}

savechange(obj){
  var create= this.restangular.one('employeeconfiguration');
  create.payfrequency=[];
  create.payfrequency.push(obj.payfrequency[0])
  create.save().toPromise().then(res=>{
  console.log(res)
    this.restangular.all('employeeconfiguration').getList()
    .subscribe(data=>{this.pays=data.filter(res=>res.payfrequency)})
    })
  this.pay={payfrequency:[{}]}
}

edit(jt){
  this.updates=true;
  this.job=jt

}

view(jt){
  // this.updates=true;
  this.job=jt

}

update(config){
  config.save().toPromise().then(function(resp) {
  console.log(resp)
 })
this.job={jobtitle:[{}]}
}


delete(jt,i){
  if(confirm('Are you want to delete???')){
  var delmsg=this.jobtitle
  jt.remove().toPromise().then(function(resp) {
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
    
  	let basePay = this.restangular.all('employeeconfiguration');
    basePay.getList().subscribe(data => {
    this.pays = data.filter(res=>res.payfrequency);
    console.log(this.pays)
    });

    let baseJob = this.restangular.all('employeeconfiguration');
    baseJob.getList().subscribe(data => {
    this.datas = data.filter(res=>res.jobtitle);
    console.log(this.datas)
    });

    this.form = this.formBuilder.group({
      jobtitlecode: [null, Validators.required],
      jobtitle: [null, Validators.required],
      description: [null, Validators],
      minexpreq: [null, Validators],
      jobpaygradecode: [null, Validators.required],
      payfrequency: [null, Validators.required],
      comments: [null, Validators],
     
    });

    this.form1=this.formBuilder.group({
      payfr1: [null, Validators.required],
      shortcode1: [null, Validators.required],
      desc1: [null, Validators]
    });
  }
  

}
