import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Md2Dialog } from 'md2';
import { Router} from '@angular/router';
import {EmployeeComponent } from '../employee.component';
import {UserService } from '../../../../user.service';

@Component({
  selector: 'app-official',
  templateUrl: './official.component.html',
  styleUrls: ['./official.component.css'],

})
export class OfficialComponent implements OnInit {

  private employeecomp: EmployeeComponent
  constructor(private restangular: Restangular, private router: Router, public service: UserService) {
    // this.service = service;
      this.usr=this
  }

  messageClass;
messagess;
roledata
setval=false;
officialForm: FormGroup;
data;
employee = { official: [{}] };
obj={prefixes:[{}]};
positions={position:[{}]};
job={jobtitle:[{}]}
bunits={businessunits:[{}]};
general={identitycodes:[{}]};
site={siteconfig:[{}]};
updatebutton = false;
status={employmentstatus:[{}]};
bunit;
businessunit;
department;
other;
others=false;
show=false;
requisit=false;
refer=false;
username:any;
moe;
dpt;
wcode;
pre;
rname
pays
usr;
siteval
baseOfficial;
dptoptions=[];

emp = {};
jobobj = {};
positionsdata;
dd=[];
selecttype;
editRowId;
employeecode;
datas;
jdatas;
posit=[];
manager=[]
offemp;
abc2:FormGroup;
abc3:FormGroup;
jobtitl:FormGroup;
posi:FormGroup;
works:FormGroup;
prefixxss:FormGroup;
repomanager;
departunit;
conf
getuser;
leavemanagement;
reportingmanager
  createNE = { official: { type: Object } };

private createForm() {
this.abc2 = new FormGroup({
// tslint:disable-next-line
empcd:new FormControl('', [Validators.nullValidator]),
fname: new FormControl('', [Validators.required]),
rolee: new FormControl('', [Validators.nullValidator]),
bunit:new FormControl('', [Validators.required]),
jtitl:new FormControl('', [Validators.nullValidator]),
loc:new FormControl('', [Validators.nullValidator]),
yexp:new FormControl('', [Validators.nullValidator]),


empid:new FormControl('', [Validators.nullValidator]),
empid1:new FormControl('', [Validators.nullValidator]),
lname: new FormControl('', [Validators.required]),
maill: new FormControl('', [Validators.nullValidator]),
amaill: new FormControl('', [Validators.nullValidator]),
dept: new FormControl('', [Validators.required]),
posi:new FormControl('', [Validators.nullValidator]),
estatus: new FormControl('', [Validators.nullValidator]),
faxx:new FormControl('', [Validators.nullValidator]),



prefixx: new FormControl('', [Validators.nullValidator]),
mname: new FormControl('', [Validators.nullValidator]),
// uname: new FormControl('', [Validators.nullValidator]),
moemp: new FormControl('', [Validators.required]),

refid:new FormControl('', [Validators.nullValidator]),
reqcd:new FormControl('', [Validators.nullValidator]),
oth:new FormControl('', [Validators.nullValidator]),


repman: new FormControl('', [Validators.nullValidator]),
doj: new FormControl('', [Validators.required]),
dol:  new FormControl('', [Validators.nullValidator]),
wtelno: new FormControl('', [Validators.nullValidator]),
fromdate1:  new FormControl('', [Validators.nullValidator]),
todate: new FormControl('', [Validators.nullValidator]),
absdate1:new FormControl('', [Validators.nullValidator]),
prodate:new FormControl('', [Validators.nullValidator]),
permdate:new FormControl('', [Validators.nullValidator]),

contrfromdate:new FormControl('', [Validators.nullValidator]),
contrtodate:new FormControl('', [Validators.nullValidator]),

cresgindate:new FormControl('', [Validators.nullValidator]),
relivedate:new FormControl('', [Validators.nullValidator]),
Retiredate:new FormControl('', [Validators.nullValidator]),
termidate:new FormControl('', [Validators.nullValidator])


});
this.jobtitl = new FormGroup({
  // tslint:disable-next-line
  jcode: new FormControl('', [Validators.required]),
  jpgrrole: new FormControl('', [Validators.required]),
  jtitle: new FormControl('', [Validators.required]),
  jpfreq: new FormControl('', [Validators.required])
});
// this.abc3 = new FormGroup({
//   // tslint:disable-next-line
//   empl: new FormControl('', [Validators.required]),
//   backage: new FormControl('', [Validators.required]),
//   use: new FormControl('', [Validators.required]),
//   req: new FormControl('', [Validators.required]),
// });
this.abc3 = new FormGroup({
  // tslint:disable-next-line
  empl: new FormControl('', [Validators.required]),
  backage: new FormControl('', [Validators.nullValidator]),
  use: new FormControl('', [Validators.nullValidator]),
  req: new FormControl('', [Validators.nullValidator]),
});
this.posi = new FormGroup({
  // tslint:disable-next-line
  jt: new FormControl('', [Validators.required]),
  posti: new FormControl('', [Validators.required])
});
this.works = new FormGroup({
  // tslint:disable-next-line
 wc: new FormControl('', [Validators.required]),
  wsc: new FormControl('', [Validators.required]),
  desc: new FormControl('', [Validators.nullValidator])
});
this.prefixxss = new FormGroup({

  prefis: new FormControl('', [Validators.required])
});

}

edited=false;

savemsg(msg,msgcls)
{
 console.log(msg);
  this.edited=true;
  this.messageClass=msgcls;
  this.messagess=msg;
  console.log(this.messagess)
  setTimeout(function() {
  this.edited = false;
  console.log(this.edited);
  }.bind(this), 1500);
}


sus=false;type;
abs=false
res()
{
  this.abs=false;
  this.sus=false;
}

stat(aa)
{
  console.log(aa)
  this.type=aa;
  if(aa=="Suspended" )
  {
   this.sus=true;this.abs=false;
  }
  else if(aa=="Abscond" || aa=="Terminated")
  {
    this.abs=true;
    this.sus=false;
  }
  else if(aa!="Abscond" && aa!="Terminated" && aa!="Suspended"){
    this.abs=false; this.sus=false;
  }
  // || aa=="Abscond" || aa=="Terminated"
  }

codes=[{value:"Temporary"},
  {value:"Suspended"},
  {value:"Abscond"},
  {value:"Terminated"},
  {value:"Resigned"},
  {value:"Probationary"},
  {value:"Permanent"},
  {value:"Left"},
  {value:"Deputation"},
  {value:"Part Time"},
  {value:"Full Time"},
  {value:"Contract"}
];

employeeid;empol;
workloc;

createId()
{
  var count=0;
  var empid = this.offemp.forEach(res=>{
    count++;
  })
  console.log(count);
  var cnt = count+1;
  this.employeeid = "00"+cnt;
  console.log(this.employeeid);
  return this.employeeid;
}

save(employee) {
  var msg=this.usr;
  if(this.getuser.utype=="Manager")
  {
  console.log(employee)
  switch (employee.official[0].modeofemp) {
  case "Reference":
  // code...
  console.log(employee)
  employee.official[0].requisitioncode="";
  employee.official[0].other="";
  break;
  case "Interview":
  // code...
  console.log(employee)
  employee.official[0].refererid="";
  employee.official[0].other="";
  break;
  case "Other":
  // code...
  console.log(employee)
  employee.official[0].requisitioncode="";
  employee.official[0].refererid="";
  break;
  default:
  // code...
  break;
}
    employee.official[0].code = this.employeecode;
    employee.official[0].roletype=this.selecttype;
    employee.official[0].id=this.employeeid;
    employee.official[0].username=this.employeecode + this.employeeid;

    var create = this.restangular.one('createemployee');
    var usrfun=this.usr
    create.official = [];
    create.official.push(employee.official[0]);
    create.employeestatus="active";
    console.log(this.employeecode + this.employeeid);
    create.save().toPromise().then(resp=>{
      console.log(resp)
      usrfun.saveemp(resp);
      
      this.restangular.all('createemployee').getList()
                   .subscribe(data=>{this.datas=data.filter(resp=>resp.official)})
                   console.log(this.datas)
                   return resp._id;
  
    })
    msg.savemsg('Added Successfully','alert alert-info')
    this.employee={official:[{}]};
this.router.navigate(['./setuproot', { outlets: { thirdchild: ['empteam'] } }])
}
else{
  
  console.log(employee)
  switch (employee.official[0].modeofemp) {
  case "Reference":
  // code...
  console.log(employee)
  employee.official[0].requisitioncode="";
  employee.official[0].other="";
  break;
  case "Interview":
  // code...
  console.log(employee)
  employee.official[0].refererid="";
  employee.official[0].other="";
  break;
  case "Other":
  // code...
  console.log(employee)
  employee.official[0].requisitioncode="";
  employee.official[0].refererid="";
  break;
  default:
  // code...
  break;
}
    employee.official[0].code = this.employeecode;
    employee.official[0].roletype=this.selecttype;
    employee.official[0].id=this.employeeid;
    employee.official[0].username=this.employeecode + this.employeeid;

   // var service = this.service;
    var create = this.restangular.one('createemployee');
    var usrfun=this.usr
    create.official = [];
    create.official.push(employee.official[0])
    create.employeestatus="active";
    console.log(this.employeecode + this.employeeid)
    create.save().toPromise().then(resp=>{
      console.log(resp)
      usrfun.saveemp(resp);
    //  service.editfun(resp)
      
      this.restangular.all('createemployee').getList()
                   .subscribe(data=>{this.datas=data.filter(resp=>resp.official)})
                   console.log(this.datas)
                   return resp._id;
    
    })
    msg.savemsg('Added Successfully','alert alert-info')
    this.employee={official:[{}]};
this.router.navigate(['./setuproot', { outlets: { thirdchild: ['employee'] } }])
}

}

saveemp(resp)
{
  console.log(resp)
  var create=this.restangular.one('register')
  console.log(this.employeecode + this.employeeid)
  create.employee_id= this.employeeid;
  create.username=this.employeecode + this.employeeid;
  create.email=resp.official[0].email
  create.password=this.makepwd();
  create.employee_OId=resp._id;
  create.alternateemail=resp.official[0].alternateemail;
  create.status=resp.official[0].status;
  create.employeestatus="active";
  if(resp.official[0].Terminateddate){
  create.enddate=resp.official[0].Terminateddate;
 }  
 else if(resp.official[0].Absconddate){
  create.enddate=resp.official[0].Absconddate;
 } 
 else if(resp.official[0].Retireddate){
  create.enddate=resp.official[0].Retireddate;
 }
 else if(resp.official[0].Relieveddate){
  create.enddate=resp.official[0].Relieveddate;
 } 
 else if(resp.official[0].Resigneddate){
  create.enddate=resp.official[0].Resigneddate;
 }
 else if(resp.official[0].Contracttodate){
  create.enddate=resp.official[0].Contracttodate;
 } 
  console.log(create)
  console.log( create.employee_OId)
  console.log(resp._id)
  console.log("nnnnnnnnnnnnnoooooooooooooogggggggggggssssssssssssmmmmmmmm");
  create.save();

 this.useremp(resp.official[0].email,this.employeecode+this.employeeid,resp.official[0].role,create.password,create.employee_id,create.employee_OId,create.alternateemail,create.status,create.enddate,create.employeestatus);
}




usredata;
resetpassword(emp)
{
  console.log(emp);
  console.log(this.usredata);
  var conf = confirm("Are you sure to reset?"+'\n'+"Current Mail Id : "+emp.official[0].email);
  if(conf)
  {
  var data = this.usredata.find(obj=>obj.employee_OId==emp._id);
  emp.save();

  console.log(data.email)
  var base=this.restangular.all('/user')
  
  base.post({email:emp.official[0].email,username:emp.official[0].username,employee_OId:emp._id}).toPromise().then(res=>{
  console.log(res)
  data.email="";
  if(res.succes){
  this.messageClass='alert alert-Success';
  this.messagess=res.msg;
  this.setval=true;
  setTimeout(() => {this.setval=false;},3000);
  }else{
  
  this.messageClass='alert alert-danger';
  this.messagess=res.msg;
  this.setval=true;
  setTimeout(() => {this.setval=false;},3000);
  }
  }) 
}
}
update(ofi) {
  this.editRowId = false;
  ofi.save();
}

edit(id) {
  this.editRowId = id;
}

delete(ofi, i) {
  var msg=this.usr;
  ofi.remove();
  msg.savemsg('Deleted Successfully','alert alert-danger')
  console.log(ofi)
}


just() {
  this.emp = { id: "001", prefix: "Mr", firstname: "Adam", lastname: "J", businessunits: "RND" }
}

open(dialog: Md2Dialog) {
  dialog.open();
}

close(dialog: any) {
  dialog.close();
}

cancel() {
  if(this.getuser.utype=="Manager"){

    // this.router.navigate(['./setuproot', { outlets:{secondchild: ['self-service'], thirdchild:['empteam']} }])
    this.router.navigate(['./setuproot',{outlets:{secondchild:['self-service'], thirdchild:['empteam']}}])

  }else
  {
    this.router.navigate(['./setuproot', { outlets: { thirdchild: ['employee'] }}])
}
}



roletype(val)
{
  console.log(val)
  this.selecttype=val
}
view(data) 
{
  this.service.viewfun(data);
}
add(data) 
{
  this.service.editfun(data);
  this.service.addfun(data);
}

busid;
select(ddt,bunitobj,employee) 
{
  console.log(ddt)
  this.busid=bunitobj._id;
  employee.official[0].businessunits=bunitobj._id
  console.log(employee.official[0].businessunits)
  console.log(this.employee)
  var dp3 = [];
  dp3 = this.departunit.filter(data => data.department[0].businessunit_id == bunitobj._id)
  this.dd = dp3;
}

obje;reportmang;
selectdept(report,dpt,employee) {
  console.log(dpt)
  console.log(report)
  employee.official[0].department=dpt._id
  var rmanage = [];
  rmanage = this.offemp.filter(datas => 
                         (datas.official[0].department_id==dpt._id && datas.official[0].username!=employee.official[0].username))
  console.log(rmanage)
  this.manager = rmanage;

  var reports = this.offemp.filter(obj=>obj.official[0].businessunits==this.busid && obj.official[0].department==dpt._id || obj.official[0].role=="Executive Director");
  console.log(reports);
  if(reports.length!=0)
  {
     this.reportmang=reports;
  }
  else{
    this.reportmang = this.offemp.filter(obj=>obj.official[0].role=="Executive Director");
  }
}

reportman
selectreport(off,bu,emp){
  console.log(off )
  console.log(bu) 
  var offic=[];

  if(this.reportman=="Manager" || this.reportman=="manager"){
    offic=this.offemp.filter(data =>((data.official[0].businessunits == bu._id && data.official[0].id != emp.official[0].id) || (data.official[0].businessunits == bu._id && data.official[0].id == emp.official[0].id)));
  console.log(offic)
  this.repomanager= offic
  }else
 { offic=this.offemp.filter(data =>((data.official[0].businessunits == bu._id && data.official[0].id != emp.official[0].id) || (data.official[0].businessunits == bu._id && data.official[0].id == emp.official[0].id)));
  this.repomanager= offic}
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

hideother(val)
{
console.log(val)
}

updateEmployee(emp) {
  var msg=this.usr
  emp.official[0].code = this.employeecode;
  emp.official[0].roletype=this.selecttype;
  emp.official[0].username=this.employeecode + emp.official[0].id;
  console.log(emp.official[0].code)
  emp.save().toPromise().then(function(resp) {
  console.log(resp)
  msg.savemsg('Updated Successfully','alert alert-info')
  })
}

updateemp(emp)
{
  console.log(emp);
  var enddate;
  if(emp.official[0].Terminateddate){
    enddate=emp.official[0].Terminateddate;
   }  
   else if(emp.official[0].Absconddate){
    enddate=emp.official[0].Absconddate;
   } 
   else if(emp.official[0].Retireddate){
    enddate=emp.official[0].Retireddate;
   }
   else if(emp.official[0].Relieveddate){
    enddate=emp.official[0].Relieveddate;
   } 
   else if(emp.official[0].Resigneddate){
    enddate=emp.official[0].Resigneddate;
   }
   else if(emp.official[0].Contracttodate){
    enddate=emp.official[0].Contracttodate;
   } 
  var base=this.restangular.all('/userupdate')  
  base.post({username:emp.official[0].username,email:emp.official[0].email,employee_OId:emp._id,utype:emp.official[0].role,alternateemail:emp.official[0].alternateemail,status:emp.official[0].status,enddate:enddate}).toPromise().then(res=>{
  console.log(res)
  if(res.succes){
  emp.save();
  this.setval=true;
  setTimeout(() => {this.setval=false;},3000);
  }else{

  this.setval=true;
  setTimeout(() => {this.setval=false;},3000);
  }
  }) 

}


saves() {
  const jts = {
  jobobj: this.jobobj
  }
  this.jdatas.post(jts).toPromise().then((res) => {
  console.log(res)
  this.jdatas.push(res);
  });
  this.jobobj = {};
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
  this.positions={position:[{}]};
}

savework(data)  {
  var create= this.restangular.one('employeeconfiguration');
  create.employmentstatus=[];
  create.employmentstatus.push(data.employmentstatus[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('employeeconfiguration').getList()
  .subscribe(data=>{this.wcode=data.filter(res=>res.employmentstatus)})
  })
  this.status={employmentstatus:[{}]};
}

saveprefix(prr){
  var create=this.restangular.one('general')
  create.prefixes=[]
  create.prefixes.push(prr.prefixes[0])
  create.save().toPromise().then((resp)=> {
  console.log(resp);
  this.restangular.all('general').getList()
  .subscribe(data=>{this.pre=data.filter(res=>res.prefixes);})
  })
  this.obj={prefixes:[{}]};
}

// saveidentity(data) {
//   console.log(data)
//   this.datas.identitycodes=data.identitycodes
//  this.datas.save();
// }
makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 8; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}



 makepwd() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 8; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}


newpass;
useremp(email,username,utype,password,employee_id,employee_OId,alternateemail,status,enddate,employeestatus)
{
  password=this.makepwd();
 this.newpass=password;
  this.newpwd(email,username,password,utype,employee_OId);

  password=password;
console.log(email)
console.log(username)
console.log(password)
console.log(utype)
console.log(employee_OId)
console.log(alternateemail);


// username='this.general.identitycodes[0].employee' +'employee.official[0].id'

var base=this.restangular.all('/register')

base.post({email:email,username:username,utype:utype,password:password,employee_id:employee_id,employee_OId:employee_OId,alternateemail:alternateemail,status:status,enddate:enddate,employeestatus:employeestatus}).toPromise().then(res=>{
console.log(res)
// console.log(username)
email="";
username="";
utype="";
password="";
employee_id="";
employee_OId="";
alternateemail="";
status="";
enddate="";
employeestatus="";
console.log(employee_OId)
console.log(password)

if(res.succes){
this.messageClass='alert alert-Success';
this.messagess=res.msg;
this.setval=true;
setTimeout(() => {this.setval=false;},3000);
console.log(password)
console.log("succccccc")
}else{

this.messageClass='alert alert-danger';
this.messagess=res.msg;
this.setval=true;
setTimeout(() => {this.setval=false;},3000);
console.log("fail")
}

})
}




newpwd(email,username,password,utype,employee_OId)
{
console.log(email)
console.log(username)
console.log(utype)
console.log(employee_OId)
// var newpwd=this.makepwd();
var base=this.restangular.all('/newuser')

console.log(username)
console.log(employee_OId)
base.post({email:email,username:username,password:password,utype:utype,employee_OId:employee_OId}).toPromise().then(res=>{
console.log(res)
email="";
username="";
password="";
utype="";
employee_OId="";

console.log(employee_OId)
console.log(utype)
if(res.succes){
this.messageClass='alert alert-Success';
this.messagess=res.msg;
this.setval=true;
setTimeout(() => {this.setval=false;},3000);

console.log("succccccc")
}else{

this.messageClass='alert alert-danger';
this.messagess=res.msg;
this.setval=true;
setTimeout(() => {this.setval=false;},3000);
console.log("fail")
}

})
}

add1;
datas1

savesite(data)
{
  data.save();
  console.log(data)
}

departments
idd;
obje2;
role;
manrole;idecode;

saveidentity(empcode)
{
var msg=this.usr;
console.log(empcode);
var create=this.restangular.one('general');
create.identitycodes=[];
create.identitycodes.push(empcode.identitycodes[0]);
console.log(create)

create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('general').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.identitycodes)})
  msg.savemsg('Added Succesfully','alert alert-info');
})
this.general={identitycodes:[{}]};
this.ngOnInit();
}

fetchmanager(employee)
{
this.obje=this.offemp.find(obj => obj.official[0].role == 'Manager' && this.getuser.utype=="Manager")
if(this.getuser.utype=="Manager"){
    this.role = [
    {name: 'Employee'},{name:'Team Lead'}
  ]
}
console.log("kkkkkkkkkkkkkkkkkkkkkkkk : "+this.obje)
console.log("kkkkkkkkkkkkkkkkkkkkkkkk : "+this.obje.official[0].role)
console.log("fn: "+this.obje.official[0].firstname+' '+this.obje.official[0].lastname);
console.log("BU : "+this.obje.official[0].businessunit);
console.log("BP : "+this.obje.official[0].departments);
console.log("ID : "+this.getuser.employee_OId);
console.log("Role : "+this.getuser.utype);
if(this.getuser.utype == 'Manager')
{
  console.log("under if");
  this.reportingmanager = this.obje.official[0].firstname+' '+this.obje.official[0].lastname;
  this.businessunit = this.obje.official[0].businessunit;
  this.departments = this.obje.official[0].departments;
  console.log("if complete")
}
}





ngOnInit() {

 
  this.createForm();
  console.log(this.service)
  if (this.service.editdata) {
  const key = Object.keys(this.service.editdata)
  if (key.length != 0) {
  console.log("Assign")
  this.employee = this.service.editdata;
  var business;
  console.log(this.service.editdata.official[0].businessunits)
  this.restangular.all('businessunit').getList({"_id":this.service.editdata.official[0].businessunits}).subscribe(res=>{
    
    this.businessunit=res[0].businessunits[0].name
    console.log(this.businessunit)
  })
  console.log(this.service.editdata.official[0].department)
  this.restangular.all('businessunit').getList({"_id":this.service.editdata.official[0].department}).subscribe(res=>{
    
    this.department=res[0].department[0].departmentname
  })
  console.log(this.emp)
  this.updatebutton = true;
  if(this.service.editdata.official[0].modeofemp)
  {
  this.moe=true
  }
  }
}

let baseGender = this.restangular.all('general');
baseGender.getList().subscribe(data => {
this.idecode = data.filter(res=>res.identitycodes);
console.log(this.idecode)
});

// var baseUnits = this.restangular.all('general');
// console.log(baseUnits)
// baseUnits.getList().subscribe(data => {
//   console.log(data)
//   data =data.filter(res=>res.identitycodes);
//   if(data.length!=0)
//   {
// this.datas=data[0]
// console.log(this.datas)
// this.general=this.datas
// // this.employeecode = this.datas.identitycodes[0].employeecode;
// }else{
//   this.datas=this.restangular.one('general')
//   this.datas.identitycodes=[]
//   console.log(this.datas)
// }
/*this.backgroundagency = this.datas.identitycodes[0].background;
this.users = this.datas.identitycodes[0].users;
this.requisition = this.datas.identitycodes[0].requisition;*/
// return this.datas;
// });


var baseUnits = this.restangular.all('siteconfig');
console.log(baseUnits)
baseUnits.getList().subscribe(data => {
  console.log(data)
  data =data.filter(res=>res.siteconfig);
  if(data.length!=0)
  {
this.datas1=data[0]
console.log(this.datas)
this.site=this.datas1
this.employeecode = this.datas1.siteconfig[0].employeecode;
}else{
  this.datas1=this.restangular.one('siteconfig')
  this.datas1=this.restangular.one('siteconfig')
  // this.datas.siteconfig=[]
  this.add1=true;
  console.log(this.datas1)
}
/*this.backgroundagency = this.datas.identitycodes[0].background;
this.users = this.datas.identitycodes[0].users;
this.requisition = this.datas.identitycodes[0].requisition;*/
return this.datas1;
});

this.baseOfficial = this.restangular.all('createemployee');
this.baseOfficial.getList().subscribe(data => {
this.createNE = data;
console.log(this.createNE)
return this.createNE;
});

var baseOff= this.restangular.all('createemployee');
baseOff.getList().subscribe(datas=>{
this.offemp =datas.filter(res=>res.official);
console.log(this.offemp)
this.createId();
this.fetchmanager(this.employee);
return this.offemp;
});



var baseRole= this.restangular.all('employeeconfiguration');
baseRole.getList().subscribe(data=>{
this.rname=data.filter(res=>res.employeeroles);
console.log(this.rname)
return this.rname;
});

let basePosition = this.restangular.all('employeeconfiguration');
basePosition.getList().subscribe(data => {
this.positionsdata = data.filter(res=>res.position);
console.log(this.positionsdata)
});

let baseJob = this.restangular.all('employeeconfiguration');
baseJob.getList().subscribe(data => {
this.jdatas = data.filter(res=>res.jobtitle);
console.log(this.jdatas)
});

let baseRol= this.restangular.all('rolesprivileges');
baseRol.getList().subscribe(data => {
  console.log(data)
this.roledata =data.filter(res=>res.role);
return this.roledata;
});

var data=this.restangular.all('siteconfig');
 console.log(data)
 data.getList().subscribe(val =>{
 this.siteval=val;
});

let baseStatus = this.restangular.all('employeeconfiguration');
baseStatus.getList().subscribe(data => {
this.wcode = data.filter(res=>res.employmentstatus);
console.log(this.wcode)  
});

var basePre = this.restangular.all('general');
basePre.getList().subscribe(data => {
console.log(data)
this.pre = data.filter(res=>res.prefixes);
console.log(this.pre)
return this.pre;
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

let basePay = this.restangular.all('employeeconfiguration');
basePay.getList().subscribe(data => {
this.pays = data.filter(res=>res.payfrequency);
console.log(this.pays)
});

let baseUer = this.restangular.all('user');
baseUer.getList().subscribe(data => {
this.usredata = data.filter(res=>res);
console.log(this.usredata)
});

let baseHolidayGroup = this.restangular.all('management');
baseHolidayGroup.getList().subscribe(data => {
this.workloc= data.filter(res=>res.worklocation);
console.log(this.workloc);
return this.workloc;
});

this.getuser=JSON.parse(localStorage.getItem('user'));
console.log(this.getuser)
if(this.getuser.employee_OId && this.getuser.employee_OId!='')
 {
 this.restangular.all('createemployee').getList({_id:this.getuser.employee_OId}).subscribe(res=>{
  console.log(res)
  this.reportingmanager=res.official[0].reporting_mid;
  console.log("Rep m Id : "+ this.reportingmanager)
  this.manager=res.official[0].role;
console.log("Role of cur : "+this.manager)
  // this.restangular.all('exitprocedure').getList({reportingmanager:res[0]._id}).subscribe(res=>{
  //   this.leavemanagement=res
  //   console.log(this.leavemanagement)    
//  });
 });
}  
 
}


ngOnDestroy() {
/*console.log("Destroy")
if(this.service.editdata)
{
const key=Object.keys(this.service.editdata)
if(key.length!=0)
{
console.log(this.service.editdata)
}
else{
console.log(this.service.editdata={});
}
}*/
}

}
