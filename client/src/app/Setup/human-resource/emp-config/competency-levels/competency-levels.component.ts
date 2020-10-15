import { Component, OnInit } from '@angular/core';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Md2Dialog } from 'md2';


@Component({
  selector: 'app-competency-levels',
  templateUrl: './competency-levels.component.html',
  styleUrls: ['./competency-levels.component.css']
})
export class CompetencyLevelsComponent implements OnInit {

constructor(private userservice:UserService,private restangular: Restangular,private formBuilder: FormBuilder) {
  this.levels=this
}
form: FormGroup;

 levels;
 messageClass;
 message;
 edited=false;
 deleted=false;

 level={competencylevel:[{}]}
 updates=false;
 datas;

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
  var msg=this.levels;
  var create= this.restangular.one('employeeconfiguration');
  create.competencylevel=[];
  create.competencylevel.push(jt.competencylevel[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('employeeconfiguration').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.competencylevel)})

  msg.savemsg('Added Succesfully','alert alert-info');

  })
    
  this.level={competencylevel:[{}]};
  }

cancel(){
  this.level={competencylevel:[{}]};
  this.ngOnInit();
}

edit(clevel){
  this.updates=true;
  this.level=clevel

}

view(clevel){
  // this.updates=true;
  this.level=clevel

}

update(config){
   config.save().toPromise().then(function(resp) {
   console.log(resp)

 })

 this.level={competencylevel:[{}]};

}

delete(clevel,i){
  if(confirm('Are you want to delete???')){
  var delmsg=this.levels;
  clevel.remove();
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
    this.datas = data.filter(res=>res.competencylevel);
    console.log(this.datas)
    });
    this.form = this.formBuilder.group({
      competencylevel: [null, Validators.required],
      description: [null, Validators]
    });

  }

}
