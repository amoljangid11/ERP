import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {MdChipsModule} from '@angular/material';
import {UserService } from '../../../user.service';
import { Restangular } from 'ngx-restangular';
import { Router} from '@angular/router';
import { Md2Dialog } from 'md2';
import {BackgroundCheckComponent } from '../background-check.component';

@Component({
  selector: 'app-screening-type',
  templateUrl: './screening-type.component.html',
  styleUrls: ['./screening-type.component.css']
})
export class ScreeningTypeComponent implements OnInit {

  private employeecomp: BackgroundCheckComponent
constructor(private userservice:UserService,private restangular: Restangular,el: ElementRef,private router:Router, private formBuilder: FormBuilder) {
  this.group=this
 }
 form: FormGroup;
public urlForm: FormGroup;

screens={screeningtype:[{}]}
updatebutton = false;
screen;
screeningtypes;

messageClass
message
deleted = false;
edited=false;
screenss;


group;
datas;
description: any;
screentype: any;
//screentypes;




// dialogHeader: string = 'Lorum Ipsum';

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

save(obj){
  var msg=this.group
 var create= this.restangular.one('configuration');
 create.screeningtype=[];
 create.screeningtype.push(obj.screeningtype[0])
 create.save().toPromise().then(res=>{
 console.log(res)
 this.restangular.all('configuration').getList()
                 .subscribe(data=>{this.datas=data.filter(res=>res.screeningtype)})
                 console.log(this.datas)
      msg.savemsg('Added Succesfully','alert alert-info');
    })
 this.screens={screeningtype:[{}]};

 this.ngOnInit();

}

cancel()
{
  this.screens={screeningtype:[{}]};
  this.ngOnInit();
}


edit(emp) {
    this.updatebutton = true;
    this.screens= emp
}

view(work){
  // this.updates=true;
  this.screens=work

}

update(busunit)
{
  var msg=this.group;
   var the=this
   console.log(busunit)
   busunit.save().toPromise().then(function(resp) {
   console.log(resp)
   the.restangular.all('configuration').getList({"screenunit_id":resp._id}).subscribe(res=>{
    msg.savemsg('Update Succesfully','alert alert-info');
     console.log(res)
     res.forEach(data=>{
       console.log(busunit.screeningtype[0].name)
       data.department[0].screeningtypes=busunit.screeningtype[0].name
       console.log(data)
       data.save();
     })
     

   })
  })
   this.screens={screeningtype:[{}]};
   
}
// deletemsg()
// {
//   console.log(this.deleted)
//     this.deleted=true;
//     this.messageClass='alert alert-danger ';
//     this.message="Deleted Successfully";
//     setTimeout(function() {
//        this.deleted = false;
//        console.log(this.deleted);
//    }.bind(this), 1500);
// }


delete(bu,i){
  var msg=this.group
bu.remove().toPromise().then(function(resp,err) {
    console.log(resp)
   msg.savemsg('Delete Succesfully','alert alert-info');
  })
this.screen.splice(i,1);
  //this.deletemsg()
 // msg.savemsg('Delete Succesfully','alert alert-info');
  alert("Are you sure! you want to delete this data");
}


ngOnInit() {

  

 
  let baseBusiness = this.restangular.all('configuration');
  baseBusiness.getList().subscribe(data => {
  this.screen =data.filter(res=>res.screeningtype);
  console.log(this.screen)
 
  return this.screen;
  

  
  });
//form submit validation
  this.form = this.formBuilder.group({
    screentype: [null, Validators.required],
    desc: [null, Validators],
  });
     
             
 }
}
