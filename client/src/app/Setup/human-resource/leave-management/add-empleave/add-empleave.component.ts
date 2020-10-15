import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, PatternValidator } from '@angular/forms';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../../user.service';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-add-empleave',
  templateUrl: './add-empleave.component.html',
  styleUrls: ['./add-empleave.component.css']
})
export class AddEmpleaveComponent implements OnInit {

constructor(private restangular:Restangular,public service:UserService,private formBuilder: FormBuilder) { 
 this.addemp=this
}
form: FormGroup;
form1: FormGroup;
addemp;
officialdata;
test=false;
messageClass
message
edited=false;
employee={leave:[{}]};
employee1 = { official: [{}] };
// addleave={addemployeeleave:[{}]};
dptoptions=[];
offdata=[];
departunit;
bunit;
datas;
editRowId;
deptid;
businessid;
leave;
leavefor
editvalue;
levoptions=[];
lev;

currentYear = new Date().getFullYear();
updates=false;

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




updateleave(emp) {  
   var msg=this.addemp
   this.editRowId = false;
   emp.forEach(resp=>{
   resp.save().toPromise().then(function(resp) {
   console.log(resp)  
  })
  this.selectlev();

  msg.savemsg('Added Succesfully','alert alert-info');  
  })
    this.employee={leave:[{}]};
    this.employee1 ={official:[{}]};

    this.ngOnInit();
}



edits(addemp,e)
{
  this.updates=!this.updates;
  this.employee=addemp;
  this.employee1=addemp;
  this.ngOnInit();
}

view(dataall) {
  // this.updatebutton = true;
  this.employee= dataall
  this.employee1=dataall;
//   this.i=i;
}

update(emp){
  emp.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.ngOnInit();
}

edit1(id){
  this.editRowId=id;
}

edit(id,emp,e){
  console.log(emp)
  emp.leave[0].test=true;
  emp.leave[0].leavelimit=e.target.value;
   emp.leave[0].usedleaves=0;
  emp.leave[0].leavebalance= emp.leave[0].leavelimit - emp.leave[0].usedleaves;
  console.log(e.target.value)
}



cancel(){
  this.employee={leave:[{}]};
  this.employee1 ={official:[{}]};
  this.ngOnInit();
}

selectlev(){
  this.restangular.all('createemployee').getList().subscribe(data => { 
  this.levoptions=this.leave.filter(res=>res.leave[0].test==true); 
  });
}

selectdept(off,bu){
  console.log(bu)
  var offic=[];
  offic=this.departunit.filter(data =>data.department[0].businessunit_id == bu._id);
  console.log(offic)
  this.dptoptions= offic
}
selectname(dpt,dp){
    // this.deptid=dp._id
    // this.businessid=bu._id
    // console.log(this.businessid,this.deptid)
    // console.log(dpt)
    var offnames=[];
    offnames=this.officialdata.filter(data =>data.official[0].department == dp._id);
    console.log(offnames)
    this.offdata= offnames 
  }

ngOnInit() {
 
  let baseOfficial= this.restangular.all('createemployee');
  baseOfficial.getList().subscribe(data => {
  this.officialdata =data.filter(res=>res.official);
  this.leave =data.filter(res=>res.leave);
  this.levoptions=this.leave.filter(res=>res.leave[0].test==true);
  return this.officialdata;
  });

  let baseDepart= this.restangular.all('departments');
  baseDepart.getList().subscribe(data => {
  this.departunit =data.filter(res=>res.department);
  return this.departunit;
  });
  
  let baseBusiness= this.restangular.all('businessunit');
  baseBusiness.getList().subscribe(data => {
  this.bunit =data.filter(res=>res.businessunits);
  return this.bunit;
  });
    
  this.form = this.formBuilder.group({
    business: [null, Validators.required],
    department: [null, Validators.required],
    year: [null, Validators.required],
    leavelimit: [null, Validators.required],
  });

  this.form1 = this.formBuilder.group({
    busiunit: [null, Validators],
    leave: [null, Validators.required],
    department: [null, Validators],
    year: [null, Validators],
    employee: [null, Validators]
  });
  
  }

}
