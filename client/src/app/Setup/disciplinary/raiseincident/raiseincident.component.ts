import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../user.service';
import { FromObservable } from 'rxjs/observable/FromObservable';
import { FromEventPatternObservable } from 'rxjs/observable/FromEventPatternObservable';
import { Md2Dialog } from 'md2';
@Component({
  selector: 'app-raiseincident',
  templateUrl: './raiseincident.component.html',
  styleUrls: ['./raiseincident.component.css']
})
export class RaiseincidentComponent implements OnInit {
  
  constructor(private restangular:Restangular,  public service: UserService,private formBuilder: FormBuilder) { 
    this.exit=this
  }
  exit
  form: FormGroup;
  raise={raiseincident:[{}]}
  bunits={businessunits:[{}]}
  dunits={department:[{}]};
  type={violationtype:[{}]}
  employee = { official: [{}] };
  updatebutton = false;
datas;
assu;
assu1
assu2
assu3
messageClass
message
deleted = false;
edited=false;

formControl = new FormControl('hello', Validators.required);

open(dialog: Md2Dialog) {
  dialog.open();
  }


  close(dialog: any) {
  dialog.close();
  }
  status=[{value:"Suspension With Pay"},
  {value:"Suspension W/O Pay"},
  {value:"Termination"},
  {value:"Other"},
  
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

save(ext){
  
  var msg=this.exit
  var create=this.restangular.one('disciplinary')
  
  console.log("")
  create.raiseincident=[]
  create.raiseincident.push(ext.raiseincident[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('disciplinary').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.raiseincident)})

  msg.savemsg('Added Succesfully','alert alert-info');
  })
  this.raise={raiseincident:[{}]};
}

cancel(){
this.raise={raiseincident:[{}]};
this.ngOnInit();
}

edit(emp) {
  this.updatebutton = true;
  this.raise= emp
}
view(emp) {
  // this.updatebutton = true;
  this.raise= emp
}

update(etype)
{
  var msg=this.exit;
  etype.save().toPromise().then(function(resp) {
    msg.savemsg('Updated Succesfully','alert alert-info');
  console.log(resp)
  })
  this.raise={raiseincident:[{}]};
}

delete(et,i){
  if(confirm('Are you want to delete???')){
  var delmsg=this.exit
  et.remove().toPromise().then(function(resp,err) {
  console.log(resp)
  })
  this.datas.splice(i,1);
  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
}
else{
  this.cancel()
}
}



  ngOnInit()
  {
    let baseQUS = this.restangular.all('disciplinary');
  baseQUS.getList().subscribe(data => {
  this.datas =data.filter(res=>res.raiseincident);
  console.log(this.datas)
  return this.datas;
  });
  let baseExit1 = this.restangular.all('businessunit');
  baseExit1.getList().subscribe(data => {
  this.assu =data.filter(res=>res.businessunits);
  console.log(this.assu)
  return this.assu;
  });
  let baseExit2 = this.restangular.all('departments');
  baseExit2.getList().subscribe(data => {
  this.assu1 =data.filter(res=>res.department);
  console.log(this.assu1)
  return this.assu1;
  });
  let baseExit3 = this.restangular.all('disciplinary');
  baseExit3.getList().subscribe(data => {
  this.assu2 =data.filter(res=>res.violationtype);
  console.log(this.assu2)
  return this.assu2;
  });
  let baseExit4 = this.restangular.all('createemployee');
  baseExit4.getList().subscribe(data => {
  this.assu3 =data.filter(res=>res.official);
  console.log(this.assu3)
  return this.assu3;
  });
  this.form = this.formBuilder.group({
    incident: [null, Validators.required],
    busi: [null, Validators.required],
    depart: [null, Validators],
    emp: [null, Validators.required],
    empid: [null, Validators.required],
    job: [null, Validators],
    report: [null, Validators.required],
    date: [null, Validators.required],
    expiry: [null, Validators.required],
    violation: [null, Validators.required],
    description: [null, Validators.required],
    appeal: [null, Validators],
    statement: [null, Validators],
    verdict: [null, Validators],
    corrective: [null, Validators]
  });


  }

  }


