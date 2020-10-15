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
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

constructor(private userservice:UserService,private restangular: Restangular,private router:Router, private formBuilder: FormBuilder) { 
this.pos=this
}
form: FormGroup;
form1: FormGroup;
pos;
positionsdata;
paydata;
positions={position:[{}]};

job={jobtitle:[{}]}
jdatas;
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



save(pos){
  var msg=this.pos
  var create= this.restangular.one('employeeconfiguration');
  create.position=[];
  create.position.push(pos.position[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('employeeconfiguration').getList()
  .subscribe(data=>{this.positionsdata=data.filter(res=>res.position)})

     msg.savemsg('Added Succesfully','alert alert-info');
    
  })
  this.positions={position:[{}]};
}


delete(data,i){
  if(confirm('Are you want to delete???')){
  var delmsg=this.pos
  data.remove().toPromise().then(function(resp,err) {
  console.log(resp)
  })
  this.positionsdata.splice(i,1);
  
  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
}
else{
  this.cancel();
}
    
}

cancel(){
  this.positions={position:[{}]};
  this.ngOnInit();
}

edit(data){
  this.updates=true;
  this.positions=data;
}

view(data){
  // this.updates=true;
  this.positions=data;
}

update(config){
  config.save().toPromise().then(function(resp) {
  console.log(resp)
  })
 this.positions={position:[{}]};
}



savejobtitle(obj){
  var create= this.restangular.one('employeeconfiguration');
  create.jobtitle=[];
  create.jobtitle.push(obj.jobtitle[0])
  create.save().toPromise().then(res=>{
   console.log(res)
   this.restangular.all('employeeconfiguration').getList()
                   .subscribe(data=>{this.jdatas=data.filter(res=>res.jobtitle)})
  })
  this.job={jobtitle:[{}]}
}



  ngOnInit() {

    let basePosition = this.restangular.all('employeeconfiguration');
    basePosition.getList().subscribe(data => {
    this.positionsdata = data.filter(res=>res.position);
    console.log(this.positionsdata)
    });


    let baseJob = this.restangular.all('employeeconfiguration');
    baseJob.getList().subscribe(data => {
    this.jdatas = data.filter(res=>res.jobtitle);
    console.log(this.jdatas)
    });

    let basePay = this.restangular.all('employeeconfiguration');
    basePay.getList().subscribe(data => {
    this.paydata = data.filter(res=>res.payfrequency);
    console.log(this.paydata)
    });
    
    
     //form submit validation
     this.form = this.formBuilder.group({
      jobt: [null, Validators.required],
      pos: [null, Validators.required],
      desc: [null, Validators],
     });
   

     this.form1 = this.formBuilder.group({
      code: [null, Validators.required],
      exp: [null, Validators],
      payf: [null, Validators.required],
      comment: [null, Validators],
      title: [null, Validators.required],
      gradecode: [null, Validators.required],
      desc: [null, Validators],
     });
  }

}
