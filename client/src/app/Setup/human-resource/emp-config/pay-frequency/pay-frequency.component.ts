import { Component, OnInit } from '@angular/core';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Md2Dialog } from 'md2';


@Component({
  selector: 'app-pay-frequency',
  templateUrl: './pay-frequency.component.html',
  styleUrls: ['./pay-frequency.component.css']
})
export class PayFrequencyComponent implements OnInit {

constructor(private userservice:UserService,private restangular: Restangular,private formBuilder: FormBuilder) {
  this.frequency=this
 }
 form: FormGroup;

frequency;
pays;
pay={payfrequency:[{}]};
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

save(obj){
  var msg=this.frequency;
  var create= this.restangular.one('employeeconfiguration');
  create.payfrequency=[];
  create.payfrequency.push(obj.payfrequency[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('employeeconfiguration').getList()
  .subscribe(data=>{this.pays=data.filter(res=>res.payfrequency)})
     msg.savemsg('Added Succesfully','alert alert-info');
  })
this.pay={payfrequency:[{}]};
}

cancel(){
  this.pay={payfrequency:[{}]};
  this.ngOnInit();
}

edit(freq){
  this.updates=true;
  this.pay=freq

}

view(freq){
  // this.updates=true;
  this.pay=freq

}

update(config){
  config.save().toPromise().then(function(resp) {
  console.log(resp)
 })
 this.pay={payfrequency:[{}]};
}

delete(freq,i){
  if(confirm('Are you want to delete???')){
  var delmsg=this.frequency;
  freq.remove().toPromise().then(function(resp,err) {
  console.log(resp)
  })
  this.pays.splice(i,1);
  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
}
else{
  this.cancel();
}

}


  ngOnInit() {

  	let baseGender = this.restangular.all('employeeconfiguration');
    baseGender.getList().subscribe(data => {
    this.pays = data.filter(res=>res.payfrequency);
    console.log(this.pays)
    });


    this.form = this.formBuilder.group({
      payfrequency: [null, Validators.required],
      shortcode: [null, Validators.required],
      description: [null, Validators]
    });
  }

}
