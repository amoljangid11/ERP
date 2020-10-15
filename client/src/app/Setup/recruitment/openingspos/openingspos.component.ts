import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../user.service';
import { FromObservable } from 'rxjs/observable/FromObservable';
import { FromEventPatternObservable } from 'rxjs/observable/FromEventPatternObservable';
import { Md2Dialog } from 'md2';
// import FroalaEditor from 'froala-editor';
// import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import * as $ from 'jquery';
@Component({
  selector: 'app-openingspos',
  templateUrl: './openingspos.component.html',
  styleUrls: ['./openingspos.component.css'],
  providers: [DatePipe]
})
export class OpeningsposComponent implements OnInit {
  formControl = new FormControl('hello', Validators.required);


  constructor(private restangular:Restangular, public datepipe:DatePipe, public service: UserService,private formBuilder: FormBuilder) {this.group=this;}
  group;
  bunit;
  opening={openingpositions:[{}]};
  dptoptions=[];
  departunit;
  offdata=[];
  officialdata;
  employee = { official: [{}] };
  job={jobtitle:[{}]};
  projecttime={project:[{}]};
  client={clients:[{}]};
  emp={openings:[{}]};
  positionsdata;
  posit;
  jdatas;
  getuser;
  reportingmanager;
  manager;
  obje;
  offemp;
  businessunit;
  departments;
  wcode;
  cli;
  offemp1;

  selectrm;
  approver1;
  app1;
  approver2;
  app2;
  approver3;
  app3;
  pays;
  datas;
  openarr;
  codevalue;
  today = Date.now();
  edited=false;
  updatebutton = false;
  deleted = false;

  oop;
  messageClass
message
openapp1;
appro2;
openapp2;
openapp3;

 openingpos=0;
 approvereq=0;
 rejectreq=0;
 alldata=[];
 recruitmentmanagement=[];

 department_id;
 business_id;

  codes=[{value:"Temporary"},
  {value:"Suspended"},
  {value:"Resigned"},
  {value:"Probationary"},
  {value:"Permanent"},
  {value:"Left"},
  {value:"Deputation"},
  {value:"Part Time"},
  {value:"Full Time"},
  {value:"Contract"}
 ];
 jobtitl:FormGroup;
 posi:FormGroup;
 form:FormGroup;
 empstatus:FormGroup;
 createNE = { official: { type: Object } };


 private createForm() {

  this.jobtitl = new FormGroup({
    // tslint:disable-next-line
    jcode: new FormControl('', [Validators.required]),
    jpgrrole: new FormControl('', [Validators.required]),
    jtitle: new FormControl('', [Validators.required]),
    jpfreq: new FormControl('', [Validators.required])
  });

  this.posi = new FormGroup({
    // tslint:disable-next-line
    jt: new FormControl('', [Validators.required]),
    posti: new FormControl('', [Validators.required])
  });

  
  this.empstatus = new FormGroup({
    // tslint:disable-next-line
    workcode: new FormControl('', [Validators.required]),
    workshortcode: new FormControl('', [Validators.required])
  });

  this.form = new FormGroup({
    // tslint:disable-next-line
    dept: new FormControl('', [Validators.required]),
    repo: new FormControl('', [Validators.required]),
    appro1: new FormControl('', [Validators.required]),
    jobt: new FormControl('', [Validators.required]),
    duedate: new FormControl('', [Validators.required]),
    pos: new FormControl('', [Validators.required]),
    reqpos: new FormControl('', [Validators.required]),
    priority: new FormControl('', [Validators.required]),
    empstatus: new FormControl('', [Validators.required]),
    reqexp: new FormControl('', [Validators.required]),
    qualf: new FormControl('', [Validators.required]),
    skill: new FormControl('', [Validators.required]),
  });
}
viewbutton=false;
show1=false;
show=false;
showadd=false;

updatebutton1=false;
updatebutton2=false;
edit(emp) {
  this.updatebutton=true;
  this.updatebutton2=true;
  this.updatebutton1=false;
  this.emp= emp
  this.showadd=true;
  this.show=false;
  this.show1=false;
}
edit1(emp) {
  this.updatebutton=true;
  this.updatebutton1=true;
  this.updatebutton2=false;
  this.emp= emp
  this.showadd=true;
  this.show=false;
  this.show1=false;
}

view(work){
  // this.viewbutton=true;
  this.emp=work
  this.updatebutton=false;

  this.viewbutton=true;
  this.show1=true;
  this.show=false;
  this.showadd=false;

}
view1(work){
  // this.viewbutton=true;
  this.emp=work
  this.updatebutton=true;

  this.viewbutton=true;
  this.show1=true;
  this.show=false;
  this.showadd=false;
}

addshow()
{
  this.showadd=true;
  this.show=false;
  this.show1=false;
  this.updatebutton=false;
  
}

app1status(emp)
{
  console.log(emp)
  var inputValue = (<HTMLInputElement>document.getElementById('a1')).value;
  console.log(inputValue)
  if(emp.approver1_id==this.getuser.employee_OId)
  {
  emp.openings[0].approver1status=inputValue
  // emp.openings[0].approver2status="Pending for approval";
  }
  if(emp.approver2_id==this.getuser.employee_OId)
  {
  emp.openings[0].approver2status=inputValue
  // emp.openings[0].approver3status="Pending for approval";
  }
  if(emp.approver3_id==this.getuser.employee_OId)
  {
  emp.openings[0].approver3status=inputValue
  }
  emp.save().toPromise().then(res=>{
    console.log(res)
    this.restangular.all('recruitment').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.openings)})
                    console.log(this.datas)
         })
    this.ngOnInit();
}
rej1status(emp)
{
  var inputValue = (<HTMLInputElement>document.getElementById('r1')).value;
  console.log(inputValue)
  if(emp.approver1_id==this.getuser.employee_OId)
  {
  emp.openings[0].approver1status=inputValue
  }
  if(emp.approver2_id==this.getuser.employee_OId)
  {
  emp.openings[0].approver2status=inputValue
  }
  if(emp.approver3_id==this.getuser.employee_OId)
  {
  emp.openings[0].approver3status=inputValue
  }
  emp.save().toPromise().then(res=>{
    console.log(res)
    this.restangular.all('recruitment').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.openings)})
                    console.log(this.datas)
         })
    this.ngOnInit();
}

clickall(text)
{
  var array=[]
  if('All'==text)
  {
    this.alldata.forEach(resp=>{
    array.push(resp)
    console.log(array)
   })  
 }
 else
 {
    this.alldata.forEach(resp=>{
    if(resp.openings[0].reqstatus==text)
    {
      array.push(resp)
      console.log(array)
    }

   })
  }
 return this.recruitmentmanagement=array;  
}

start()
{
  this.getuser=JSON.parse(localStorage.getItem('user'));
console.log(this.getuser)
var id="5a704cb4ca8b97227478b4a9"
if(this.getuser.employee_OId && this.getuser.employee_OId!=''){
  this.restangular.all('recruitment').getList({employee_id:this.getuser.employee_OId}).subscribe(res=>{
  this.alldata=res;
console.log(this.alldata)
  res.forEach(data=>{
    console.log(data)
    // this.openingpos++;
    if(data.openings[0].reqstatus=="Initiated")
    {
      this.recruitmentmanagement.push(data)
      this.openingpos++;
    }else if(data.openings[0].reqstatus=="Approved"){  this.approvereq++ }
     else if(data.openings[0].reqstatus=="Rejected"){ this.rejectreq++ }
  })


});
}

}

  status={employmentstatus:[{}]};
  positions={position:[{}]};
  open(dialog: Md2Dialog) {
    dialog.open();
  }
  
  close(dialog: any) {
    dialog.close();
  }
  status1 = [
    {value: 'High'},
    {value: 'Low'},
    {value: 'Medium'},
    
  ];
  status2 = [
    {value: 'Initiated'}
  ];
  appstatus2 = [
    {value: 'Approve'},
    {value: 'Reject'}

  ];
 
  selectdept(off,bu){
    console.log(bu)
    var offic=[];
    offic=this.departunit.filter(data =>data.department[0].businessunit_id == bu._id);
    console.log(offic)
    this.dptoptions= offic
    this.business_id=bu._id;
    console.log(this.business_id);
  }
  selectname(dpt,dp){
    
    console.log(dpt)
    console.log(dp._id)
    var rmanage = [];
   
    rmanage = this.offemp.filter(datas => 
                            (datas.official[0].department==dp._id ))
     console.log(rmanage)
    console.log(rmanage)
    this.reportingmanager = rmanage;
    this.department_id=dp._id
  }
 
  selectrepo(employee){
    this.selectrm= employee.official[0].firstname+ " "+employee.official[0].lastname;
    console.log(this.selectrm)
  }
  filterapp1(employee2)
  {
    this.approver1 = employee2.official[0].firstname+ " "+employee2.official[0].lastname;
   this.app1 = this.reportingmanager.filter(obj=>obj.official[0].firstname+" "+obj.official[0].lastname!=this.selectrm && obj.official[0].firstname+" "+obj.official[0].lastname!=this.offemp1[0].official[0].firstname+" "+this.offemp1[0].official[0].lastname)
   console.log(this.approver1)
   console.log(this.selectrm)
  }
  filterapp2(employee1){
    this.approver2 = employee1.official[0].firstname+ " "+employee1.official[0].lastname;
    this.app2 = this.app1.filter(obj=>obj.official[0].firstname+" "+obj.official[0].lastname!=this.selectrm && obj.official[0].firstname+" "+obj.official[0].lastname!=this.approver1 && obj.official[0].firstname+" "+obj.official[0].lastname!=this.offemp1[0].official[0].firstname+" "+this.offemp1[0].official[0].lastname )
    console.log(this.selectrm)
    console.log(this.approver1)
    console.log(this.approver2)
  }
  filterapp3(employee3){
  
    this.approver3 = employee3.official[0].firstname+ " "+employee3.official[0].lastname;
    this.app3 = this.app2.filter(obj=>obj.official[0].firstname+" "+obj.official[0].lastname!=this.selectrm && obj.official[0].firstname+" "+obj.official[0].lastname!=this.approver1 && obj.official[0].firstname+" "+obj.official[0].lastname!=this.approver2 && obj.official[0].firstname+" "+obj.official[0].lastname!=this.offemp1[0].official[0].firstname+" "+this.offemp1[0].official[0].lastname)
    console.log(this.selectrm)
    console.log(this.approver1)
      console.log(this.approver2)
      console.log(this.approver3)
  }

  seletreport(employee,r)
  {  
    console.log(r)
    employee.official[0].reporting_mid=r._id;
    console.log(employee)
  }
  selectjob(job){
    console.log(job)
    var jpos = [];
    jpos = this.positionsdata.filter(data => data.position[0].jobtitle == job)
    this.posit = jpos;
  }
  fetchmanager(employee)
{
this.obje=this.offemp.find(obj => obj.official[0].role == 'Manager' && this.getuser.utype=="Manager")
// this.obje2=this.offemp.find(obj => obj.official[0].role == 'Manager' && this.getuser.utype=="Manager")
// this.role = this.roledata.find(obj=>obj.role[0].role=='Employee' || obj.role[0].role=='employee' || obj.official[0].role=='Team Lead' )
// console.log("Role : "+this.role.role[0].role);
if(this.getuser.utype=="Manager"){
  // this.manrole = this.roledata.find(obj=>obj.role[0].role=='Employee' || obj.role[0].role=='Team Lead')
  // if(this.manrole.role[0].role=='Team Lead')
  // var teamlead = this.manrole.role[0].role
  // else if(this.manrole.role[0].role=='Employee')
  // var employee = this.manrole.role[0].role
  // console.log(teamlead)
  // console.log(employee)
//  if(this.getuser.utype=="Manager")
//   {
    
// }
// else if(employee=='Employee' && teamlead!='Team Lead'){

//   this.role = [
//     {name: 'Employee'}
//   ]
// }
// else if(employee!='Employee' && teamlead=='Team Lead')
// {
//   this.role = [
//     {name:'Team Lead'}
//   ]
// }
}
// console.log("kkkkkkkkkkkkkkkkkkkkkkkk : "+this.obje)
// console.log("kkkkkkkkkkkkkkkkkkkkkkkk : "+this.obje.official[0].role)
// console.log("fn: "+this.obje.official[0].firstname+' '+this.obje.official[0].lastname);
// console.log("BU : "+this.obje.official[0].businessunit);
// console.log("BP : "+this.obje.official[0].departments);
// console.log("ID : "+this.getuser.employee_OId);
// console.log("Role : "+this.getuser.utype);
// if(this.getuser.utype == 'Manager')
// {
//   console.log("under if");
//   this.reportingmanager = this.obje.official[0].firstname+' '+this.obje.official[0].lastname;
//   this.businessunit = this.obje.official[0].businessunit;
//   this.departments = this.obje.official[0].departments;
//   console.log("if complete")
// }
}
cancel(){
  this. emp={openings:[{}]};
  this.updatebutton = false;
  this.showadd=false;
  this.show1=false;
  // this.ngOnInit();
  this.show=true;
}

closewin()
{
 this.showadd=false;
this.show1=false;
this.show=true;
}


checkdate(employee){
 console.log(employee.official[0].date) 
}

makecode() {
  this.codevalue = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 8; i++)
  this.codevalue += possible.charAt(Math.floor(Math.random() * possible.length));
console.log(this.codevalue)
  return this.codevalue;
}


select1(b,emp)
{
  console.log(b._id)
  emp.approver1_id=b._id
  console.log(emp.approver1_id)
  console.log(this.getuser.employee_OId)
}
select2(b,emp)
{
  emp.approver2_id=b._id
  console.log(emp.approver2_id)
}
select3(b,emp)
{
  emp.approver3_id=b._id
  console.log(emp.approver3_id)
}
save(empp){
  var create= this.restangular.one('recruitment');
  var msg=this.group
  create.openings=[];
  create.employee_id=this.getuser.employee_OId
  console.log(this.getuser.employee_OId)
  console.log(empp.approver1_id)
  create.approver1_id=empp.approver1_id
  create.approver2_id=empp.approver2_id
  create.approver3_id=empp.approver3_id
  empp.openings[0].filledposition=0
  console.log(this.offemp1[0].official[0].firstname)
  empp.openings[0].raisedby=this.offemp1[0].official[0].firstname +" " + this.offemp1[0].official[0].lastname
  console.log(empp.openings[0].raisedby)
  empp.openings[0].requisitioncode=this.makecode();
  empp.openings[0].requestdate = this.today;
  empp.openings[0].request= "Requisition has been created by"+ " "+this.offemp1[0].official[0].firstname +" "+ this.offemp1[0].official[0].lastname
  empp.openings[0].business_id=this.business_id;
  empp.openings[0].department_id=this.department_id;
  create.openings.push(empp.openings[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('recruitment').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.openings)})
  this.edited=true;
  this.messageClass='alert alert-info ';
  this.message="Added Successfully";
  setTimeout(function() {
  this.edited = false;
  console.log(this.edited);
  }.bind(this), 1500);
  })

  this.emp={openings:[{}]}
  this.ngOnInit();
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

update(cot)
{
var msg=this.group
cot.save().toPromise().then(function(resp) {
console.log(resp)
})
this.emp={openings:[{}]};
 msg.savemsg('Updated Succesfully','alert alert-info');
}

delete(ext,i){
  if(confirm("Are you sure! you want to delete this data")){
  ext.remove().toPromise().then(function(resp,err) {
  console.log(resp)
  })
  this.openarr.splice(i,1);

    this.deleted=true;
    this.messageClass='alert alert-danger ';
    this.message="Deleted Successfully";
    setTimeout(function() {
    this.deleted = false;
    console.log(this.deleted);
    }.bind(this), 1500);
  }
  else{
    this.cancel();
  }
}

savejob(jt){
 
  var create= this.restangular.one('employeeconfiguration');
  create.jobtitle=[];
  create.jobtitle.push(jt.jobtitle[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('employeeconfiguration').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.jobtitle)})
  })
  this.ngOnInit();
  this.job={jobtitle:[{}]}
}

saveposition(pos) {
  var create= this.restangular.one('employeeconfiguration');
  create.position=[];
  create.position.push(pos.position[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('employeeconfiguration').getList()
  .subscribe(data=>{this.positionsdata=data.filter(res=>res.position)})
  })
  this.ngOnInit();
  this.positions={position:[{}]};
}

saveempstatus(status){
  var create= this.restangular.one('employeeconfiguration');
  create.employmentstatus=[];
  create.employmentstatus.push(status.employmentstatus[0])
  create.save().toPromise().then(res=>{
  console.log(res)
    this.restangular.all('employeeconfiguration').getList()
    .subscribe(data=>{this.wcode=data.filter(res=>res.employmentstatus)})
    })
  this.status={employmentstatus:[{}]};

}

// checkkapp(){
//   this.appro2 = this.openapp2.filter(obj => obj.openings[0].approver1status == "Approve");
// }

openarr1;

ngOnInit()
{
  this.start();
  this.createForm();

  this.show=true;
  this.showadd=false;
  this.show1=false;

  this.getuser=JSON.parse(localStorage.getItem('user'));
  console.log(this.getuser)
  
	let baseClient = this.restangular.all('client');
    baseClient.getList().subscribe(data => {
    this.cli = data;
    return this.cli;
    });

  // let baserec1 = this.restangular.all('recruitment');
  // baserec1.getList(this.getuser.utype=="admin" || this.getuser.utype=="Management" || this.getuser.utype=="HR").subscribe(data => {
  // this.openarr1= data.filter(res=>res.openings);
  // // document.getElementById('requestshow').style.display="block";
  // // document.getElementById('requesthide').style.display="none";
  // console.log(this.openarr1)
  // });

  let baserec = this.restangular.all('recruitment');
  baserec.getList({employee_id:this.getuser.employee_OId}).subscribe(data => {
  this.openarr = data.filter(res=>res.openings);
  // document.getElementById('requestshow').style.display="block";
  // document.getElementById('requesthide').style.display="none";
  console.log(this.openarr)
  });
let basespp1= this.restangular.all('recruitment');
basespp1.getList({approver1_id:this.getuser.employee_OId}).subscribe(data => {
this.openapp1 = data.filter(res=>res.openings);
console.log(this.openapp1)

});
let basespp2= this.restangular.all('recruitment');
basespp2.getList({approver2_id:this.getuser.employee_OId}).subscribe(data => {
this.openapp2 = data.filter(res=>res.openings);
console.log(this.openapp2)
// this.checkkapp();
});
let basespp3= this.restangular.all('recruitment');
basespp3.getList({approver3_id:this.getuser.employee_OId}).subscribe(data => {
this.openapp3 = data.filter(res=>res.openings);
console.log(this.openapp3)
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
  
var baseOff= this.restangular.all('createemployee');
baseOff.getList().subscribe(datas=>{
this.offemp =datas.filter(res=>res.official);
console.log(this.offemp)
this.fetchmanager(this.employee);
return this.offemp;
});

var baseOff1= this.restangular.all('createemployee');
baseOff1.getList({_id:this.getuser.employee_OId}).subscribe(datas=>{
this.offemp1 =datas.filter(res=>res.official);
console.log(this.offemp1)
return this.offemp1;
});

let baseJob1 = this.restangular.all('employeeconfiguration');
baseJob1.getList().subscribe(data => {
this.jdatas = data.filter(res=>res.jobtitle);
console.log(this.jdatas)
});
let basePosition = this.restangular.all('employeeconfiguration');
basePosition.getList().subscribe(data => {
this.positionsdata = data.filter(res=>res.position);
console.log(this.positionsdata)
});

let baseStatus = this.restangular.all('employeeconfiguration');
baseStatus.getList().subscribe(data => {
this.wcode = data.filter(res=>res.employmentstatus);
console.log(this.wcode)  
});
// let basecli = this.restangular.all('contacts');
// basecli.getList().subscribe(data => {
// this.cli = data.filter(res=>res.clients);
// console.log(this.cli)
// });
let basePay = this.restangular.all('employeeconfiguration');
basePay.getList().subscribe(data => {
this.pays = data.filter(res=>res.payfrequency);
console.log(this.pays)
});
if(this.getuser.employee_OId && this.getuser.employee_OId!='')
 {
 this.restangular.all('createemployee').getList({_id:this.getuser.employee_OId}).subscribe(res=>{
  console.log(res)
//   this.reportingmanager=res.official[0].reporting_mid;
//   console.log("Rep m Id : "+ this.reportingmanager)
//   this.manager=res.official[0].role;
// console.log("Role of cur : "+this.manager)


  // this.restangular.all('exitprocedure').getList({reportingmanager:res[0]._id}).subscribe(res=>{
  //   this.leavemanagement=res
  //   console.log(this.leavemanagement)    
//  });
 });


  }
}
}


