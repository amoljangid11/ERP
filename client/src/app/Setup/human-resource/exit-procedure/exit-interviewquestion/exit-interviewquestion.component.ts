import { Component, OnInit } from '@angular/core';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Md2Dialog } from 'md2';


@Component({
  selector: 'app-exit-interviewquestion',
  templateUrl: './exit-interviewquestion.component.html',
  styleUrls: ['./exit-interviewquestion.component.css']
})
export class ExitInterviewquestionComponent implements OnInit {

constructor(private userservice:UserService,private restangular: Restangular,private formBuilder: FormBuilder) {
 this.interview=this
 }
 form: FormGroup;
 form1: FormGroup;


interview;
type={exittype:[{}]};
exit={exitinterviewquestion:[{}]};
updatebutton = false;
datas;
types;

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

save(ext){
  var obj = this.types.find(obj=>obj.exittype[0].exittype==ext.exitinterviewquestion[0].exittype)
  var etyp = obj.exittype[0].exittype;
  var eid = obj._id;
  console.log(obj)
  console.log(eid)
  console.log(etyp)
  var msg=this.interview
  var create=this.restangular.one('exitprocedure')
  create.exitid=eid;
  create.exitinterviewquestion=[]
  create.exitinterviewquestion.push(ext.exitinterviewquestion[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('exitprocedure').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.exitinterviewquestion)})
  msg.savemsg('Added Succesfully','alert alert-info');
  })
  this.exit={exitinterviewquestion:[{}]};
}


cancel(){
  this.exit={exitinterviewquestion:[{}]}
  this.ngOnInit();
}

edit(emp) {
  this.updatebutton = true;
  this.exit= emp
}

view(emp) {
  // this.updatebutton = true;
  this.exit= emp
}

update(etype)
{
  etype.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.exit={exitinterviewquestion:[{}]} 
}

delete(qus,i){
  if(confirm('Are you want to delete???')){
  var delmsg=this.interview
  qus.remove().toPromise().then(function(resp,err) {
  console.log(resp)
  })
  this.datas.splice(i,1);
  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
}
else{
  this.cancel();
}
}

savechanges(tp){
  console.log(tp)
  var create=this.restangular.one('exitprocedure')
  create.exittype=[]
  create.exittype.push(tp.exittype[0])
  create.save().toPromise().then(res=>{
   console.log(res)
   this.restangular.all('exitprocedure').getList()
   .subscribe(data=>{this.datas=data.filter(res=>res.exittype)})
  })

}

ngOnInit() {

  let baseExit = this.restangular.all('exitprocedure');
  baseExit.getList().subscribe(data => {
  this.types =data.filter(res=>res.exittype);
  console.log(this.types)
  return this.types;
  });

  let baseQUS = this.restangular.all('exitprocedure');
  baseQUS.getList().subscribe(data => {
  this.datas =data.filter(res=>res.exitinterviewquestion);
  console.log(this.datas)
  return this.datas;
  });




  this.form = this.formBuilder.group({
    exittype: [null, Validators.required],
    question: [null, Validators.required],
    description: [null, Validators]
  });
  this.form1 = this.formBuilder.group({
    exittype1: [null, Validators.required],
    description1: [null, Validators]
  });
  }

}
