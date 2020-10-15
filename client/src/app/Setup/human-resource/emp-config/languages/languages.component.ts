import { Component, OnInit } from '@angular/core';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Md2Dialog } from 'md2';



@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {


  constructor(private userservice:UserService,private restangular: Restangular,private formBuilder: FormBuilder) {
    this.language=this
   }
   form: FormGroup;

language;
languages={language:[{}]};
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


save(languages){
	var msg=this.language
  var create= this.restangular.one('employeeconfiguration');
  create.language=[];
  create.language.push(languages.language[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('employeeconfiguration').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.language)})
  
  msg.savemsg('Added Succesfully','alert alert-info');
  })
  this.languages={language:[{}]};
}

cancel(){
  this.languages={language:[{}]};
  this.ngOnInit();

}
edit(la){
	this.updates=true;
	this.languages=la

}

view(la){
	// this.updates=true;
	this.languages=la

}
update(config){
  config.save().toPromise().then(function(resp) {
  console.log(resp)
 })
 this.languages={language:[{}]};
}

delete(la,i){
  if(confirm('Are you want to delete???')){
  var delmsg=this.language
  la.remove().toPromise().then(function(resp,err) {
  console.log(resp)
  })
  this.datas.splice(i,1);

  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
}else{
  this.cancel();
}
}

  ngOnInit() {
    
  	let baseLang = this.restangular.all('employeeconfiguration');
    baseLang.getList().subscribe(data => {
    this.datas = data.filter(res=>res.language);
    console.log(this.datas)
    });
    this.form = this.formBuilder.group({
      language: [null, Validators.required],
      description: [null, Validators]
    });
  }

}
