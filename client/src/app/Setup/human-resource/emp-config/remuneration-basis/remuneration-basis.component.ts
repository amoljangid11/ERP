import { Component, OnInit } from '@angular/core';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Md2Dialog } from 'md2';


@Component({
  selector: 'app-remuneration-basis',
  templateUrl: './remuneration-basis.component.html',
  styleUrls: ['./remuneration-basis.component.css']
})
export class RemunerationBasisComponent implements OnInit {


  constructor(private userservice:UserService,private restangular: Restangular,private formBuilder: FormBuilder) {
this.remuneration=this
   }
   form: FormGroup;

remuneration
basis={remuneration:[{}]};
updates=false;
datas;
inter;

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
  var msg=this.remuneration
  var create= this.restangular.one('employeeconfiguration');
  create.remuneration=[];
  create.remuneration.push(obj.remuneration[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('employeeconfiguration').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.remuneration)})
   
    msg.savemsg('Added Succesfully','alert alert-info'); 
})
this.basis={remuneration:[{}]};
}


cancel(){
  this.basis={remuneration:[{}]};
  this.ngOnInit();
}

update(config){
   config.save().toPromise().then(function(resp) {
   console.log(resp)
 })
 this.basis={remuneration:[{}]};
}

edit(rem){
  this.updates=true;
  this.basis=rem

}

view(rem){
  // this.updates=true;
  this.basis=rem

}

delete(rem,i){
  if(confirm('Are you want to delete???')){
  var delmsg=this.remuneration
  rem.remove().toPromise().then(function(resp,err) {
  console.log(resp)
  })
  this.datas.splice(i,1);
  
  delmsg.savemsg('Deleted Succesfully','alert alert-danger'); 
}else{
  this.cancel();
}
}

  ngOnInit() {
    
  	let baseRemun = this.restangular.all('employeeconfiguration');
    baseRemun.getList().subscribe(data => {
    this.datas = data.filter(res=>res.remuneration);
    console.log(this.datas)
    });
    this.form = this.formBuilder.group({
      remunerationtype: [null, Validators.required],
      description: [null, Validators]
    });
  }

}
