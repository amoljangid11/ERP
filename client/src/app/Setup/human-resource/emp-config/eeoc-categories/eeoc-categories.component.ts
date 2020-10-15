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
  selector: 'app-eeoc-categories',
  templateUrl: './eeoc-categories.component.html',
  styleUrls: ['./eeoc-categories.component.css']
})
export class EEOCCategoriesComponent implements OnInit {

constructor(private userservice:UserService,private restangular: Restangular,private router:Router, private formBuilder: FormBuilder) { 
this.eeoc=this
}
form: FormGroup;
eeoc;
category={eeoccategory:[{}]};
datas;
updates=false;

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

save(category){
  var msg=this.eeoc
  var create= this.restangular.one('employeeconfiguration');
  create.eeoccategory=[];
  create.eeoccategory.push(category.eeoccategory[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('employeeconfiguration').getList()
    .subscribe(data=>{this.datas=data.filter(res=>res.eeoccategory)})

  msg.savemsg('Added Succesfully','alert alert-info');

  })
  
this.category={eeoccategory:[{}]};
}

cancel(){
  this.category={eeoccategory:[{}]};
  this.ngOnInit();
}

edit(eeoc){
	this.updates=true;
	this.category=eeoc

}

view(eeoc){
	// this.updates=true;
	this.category=eeoc

}
update(config){
   config.save().toPromise().then(function(resp) {
   console.log(resp)

 })

 this.category={eeoccategory:[{}]};

}

delete(eeoc,i){
  if(confirm('Are you want to delete???')){
  var delmsg=this.eeoc
  eeoc.remove();
  this.datas.splice(i,1);
  
  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
  }
  this.cancel();
}

  ngOnInit() {
  	let baseEEOC = this.restangular.all('employeeconfiguration');
    baseEEOC.getList().subscribe(data => {
    this.datas = data.filter(res=>res.eeoccategory);
    console.log(this.datas)
    });

      //form submit validation
      this.form = this.formBuilder.group({
        eeoc: [null, Validators.required],
        desc: [null, Validators],
    });
  }

}
