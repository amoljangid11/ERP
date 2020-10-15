import { Component, OnInit } from '@angular/core';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent implements OnInit {

  constructor(private userservice:UserService,private restangular: Restangular,private formBuilder: FormBuilder) { this.levels=this}
  form: FormGroup;
  domains={domain:[{}]};

  datas;
updates=false;
levels;
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

save(el){
  var msg=this.levels
   console.log(el);
    var create= this.restangular.one('employeeconfiguration');
    create.domain=[];
    create.domain.push(el.domain[0])
    create.save().toPromise().then(res=>{
    console.log(res)
    this.restangular.all('employeeconfiguration').getList()
    .subscribe(data=>{this.datas=data.filter(res=>res.domain)})
  
    msg.savemsg('Added Succesfully','alert alert-info');
  
    })
    this.domains={domain:[{}]};
  }

  cancel(){
    this.domains={domain:[{}]};
    this.ngOnInit();
  }
  
  edit(elevel){
    this.updates = true;
    this.domains=  elevel
    
  }
  
  view(elevel){
    // this.updates = true;
    this.domains=  elevel
    
  }
  
  update(empconfig){
    empconfig.save().toPromise().then(resp=>{
    console.log(resp)
    })
   this.domains={domain:[{}]};
  }
  
  delete(el,i){
    if(confirm('Are you want to delete???')){
    var del=this.levels
    el.remove();
    this.datas.splice(i,1);
    del.savemsg('Deleted Succesfully','alert alert-danger');
    }
    else{
      this.cancel();
    }
  }
  
  

  ngOnInit() {

    let baseEducation = this.restangular.all('employeeconfiguration');
    baseEducation.getList().subscribe(data => {
    this.datas = data.filter(res=>res.domain);
    console.log(this.datas)
    });

    this.form = this.formBuilder.group({
      domainnm: [null, Validators.required],
      description: [null, Validators]
    });
  }

}
