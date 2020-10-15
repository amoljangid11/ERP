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
  selector: 'app-identity-documents',
  templateUrl: './identity-documents.component.html',
  styleUrls: ['./identity-documents.component.css']
})
export class IdentityDocumentsComponent implements OnInit {

  constructor(private userservice:UserService,private restangular: Restangular,private router:Router, private formBuilder: FormBuilder) {
    this.doc=this
  }
form: FormGroup;
doc;
identity={identitydocument:[{}]};
datas;
updates=false;

messageClass
message
edited=false;
deleted=false;


documents=[
  {value:'Adhar Card'},
  {value:'Pan Card'},
  {value:'Voter ID'},
  // {value:'Ration Card'},
  {value:'Passport'},
  {value:'Driving Licence'},
  {value:'Electricity Bill'}
];
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

open(dialog: Md2Dialog) {
  dialog.open();
  }


  close(dialog: any) {
  dialog.close();
  }

save(identity){
  var msg=this.doc
  var create= this.restangular.one('employeeconfiguration');
  create.identitydocument=[];
  create.identitydocument.push(identity.identitydocument[0])
  create.save().toPromise().then(res=>{
  console.log(res)
    this.restangular.all('employeeconfiguration').getList()
    .subscribe(data=>{this.datas=data.filter(res=>res.identitydocument)})
  
  msg.savemsg('Added Succesfully','alert alert-info');

    })
this.identity={identitydocument:[{}]};
}

cancel(){
  this.identity={identitydocument:[{}]};
  this.ngOnInit();
}
edit(identy){
	this.updates=true;
	this.identity=identy

}

view(identy){
	// this.updates=true;
	this.identity=identy

}
update(config){
   var msg=this.doc
   config.save().toPromise().then(function(resp) {
   console.log(resp)
  
   msg.savemsg('Update Succesfully','alert alert-danger');
 })

 this.identity={identitydocument:[{}]};

}

delete(identy,i){
  if(confirm('Are you want to delete???')){
  var delmsg=this.doc
  identy.remove();
  this.datas.splice(i,1);
  
  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
  }
  else{
    this.cancel();
  }
}

  ngOnInit() {
  	let baseLang = this.restangular.all('employeeconfiguration');
    baseLang.getList().subscribe(data => {
    this.datas = data.filter(res=>res.identitydocument);
    console.log(this.datas)
    });

     //form submit validation
     this.form = this.formBuilder.group({
      doc: [null, Validators.required],
      mand: [null, Validators],
      exp: [null, Validators],
      desc: [null, Validators],
      
    });
  }

}
