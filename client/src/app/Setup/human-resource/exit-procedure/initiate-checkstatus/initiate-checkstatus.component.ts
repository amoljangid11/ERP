import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../../user.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Md2Dialog } from 'md2';
import { DatePipe } from '@angular/common';
//import { EmployeeCandidateComponent } from 'app/Setup/background-check/employee-candidate/employee-candidate.component';


@Component({
  selector: 'app-initiate-checkstatus',
  templateUrl: './initiate-checkstatus.component.html',
  styleUrls: ['./initiate-checkstatus.component.css'],
  providers:[DatePipe]
})
export class InitiateCheckstatusComponent implements OnInit {

  constructor(private restangular:Restangular,public datepipe:DatePipe,  public service: UserService, private formBuilder: FormBuilder) {this.exit=this; this.group=this; }
  edited=false;
  messageClass;
  message;
form:FormGroup;
officialForm: FormGroup;
datas;
group;
exit;
extdata;
initdata;
updatebutton = false;
que;
extint;
exitiq;
extsetdata;
buttonhide = false;
// UserService;
hr;
l2;
bu;
dept;
ext;
employee;
exittype = {exittype:[{}]};
initialstatus = {initiatecheckstatus:[{}]};
selectque={selectquestions:[{}]};
setting={exitsetting:[{}]};
businessunit;
departments;
exittp;
initdata1;
btnhd = false;
extdataaa;
sadn;
fman;
obj0;
add
quedatas;
offialemp;
getuser;
officiald;
exits;
initdataque;
HR;
L2;
Repo;
Sa;
Fm;
name;
role;
usrnm;
mailFormat;
today: number = Date.now();
date=this.datepipe.transform(this.today ,'dd-MM-yyyy');
reportManEmp;
repoFlag=false;
obj3;
objjexit;
exitproc;
length
exittypee;
exttyp;
eidd;
uname;
repoman;
hrman;
l2man;
dte;
empid;
l2_manager;
hr_manager;
l2m;
hrm;
doj;
jobtitle;
reportingid;
reportingid1;reportingid2;objj;
objb;
Emp;
// user = this.UserService.getUser();

exttype = [{value:'Abscond'}];
status='Pending';
status1='Pending';
comments1='';
CurrentTime = new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds()

open(dialog: Md2Dialog) {
  dialog.open();
  }
  
close(dialog: any) {
  dialog.close();
  }


edit(emp) {
  this.updatebutton = true;
  this.initialstatus = emp;
}


view(data) 
{
  this.initialstatus = data;
}

update(group)
{
  group.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.initialstatus={initiatecheckstatus:[{}]}
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


addhide(){
  let obj = this.initdata.find(objv => objv.empid ==this.getuser.employee_OId);
  console.log(obj);
  console.log(obj.initiatecheckstatus[0].status)
  if('Cancelled'==obj.initiatecheckstatus[0].status)
  {
    document.getElementById('btn').style.display="block";
    this.initialstatus={initiatecheckstatus:[{}]}
  }else{
    document.getElementById('btn').style.display="none";
  }
}

gman;
faman;
sad;
gaa;

fetch()
{
  let obj1 = this.officiald.find(obj1 => obj1._id ==this.getuser.employee_OId);
  console.log(obj1)
  console.log(obj1.official[0].businessunit)
  console.log(obj1.official[0].departments)
  this.businessunit=obj1.official[0].businessunit;
  this.departments=obj1.official[0].departments;
  this.repoman=obj1.official[0].reportingmanager;
  this.reportingid=obj1.official[0].reporting_mid;
  this.doj=obj1.official[0].dateofjoing;
  this.jobtitle=obj1.official[0].jobtitle;
  this.employee=obj1.official[0].firstname +" "+ obj1.official[0].lastname;
  console.log(this.repoman);
  console.log(this.reportingid);

this.objj = this.exits.find(objs=>objs.exitsetting[0].businessunit==this.businessunit && objs.exitsetting[0].department==this.departments)
console.log(this.objj)
console.log(this.objj.exitsetting[0].hr_id);
this.reportingid1=this.objj.exitsetting[0].hr_id;
this.reportingid2=this.objj.exitsetting[0].l2_id;
this.fman=this.objj.exitsetting[0].fm_id;
this.sadn=this.objj.exitsetting[0].sa_id;
this.gman=this.objj.exitsetting[0].ga_id;
console.log(this.objj.exitsetting[0].l2_id);
this.gaa=this.objj.exitsetting[0].general_admin;
this.sad=this.objj.exitsetting[0].system_admin;
this.faman=this.objj.exitsetting[0].finance_manager;

let obj = this.initdata.find(objv => objv.empid ==this.getuser.employee_OId);
console.log(obj);
console.log(obj.initiatecheckstatus[0].status)
var status=obj.initiatecheckstatus[0].status;
console.log(this.initdata.length)
if(obj.initiatecheckstatus[0].Empstatus!='Cancelled'){
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
  document.getElementById('btn').style.display='none';
}
else if(obj.initiatecheckstatus[0].Empstatus=='Cancelled'){
  console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");
  document.getElementById('btn').style.display='block';
}
}


save(anno){
  var msg=this.exit 
  let employee = this.officiald.find(obj1 => obj1._id ==this.getuser.employee_OId); 
  console.log(employee)
  this.exittypee = anno.initiatecheckstatus[0].exittype;
  console.log(this.exittypee)
  var create=this.restangular.one('exitprocedure')
  create.empid=this.getuser.employee_OId;
  create.repoid=this.reportingid;
  create.hrmanagerid=this.reportingid1;
  create.l2managerid=this.reportingid2;
  var fanman = this.fman;
  var sysadmin = this.sadn;
  var genadmin = this.gman;
  create.gmanagerid=genadmin;
  create.fmanagerid=fanman;
  create.smanagerid=sysadmin;
  create.initiatecheckstatus=[]
  create.initiatecheckstatus.push(anno.initiatecheckstatus[0])
  create.initiatecheckstatus[0].requestdate = this.datepipe.transform(this.today ,'dd-MM-yyyy');
  create.initiatecheckstatus[0].CurrentTime = this.CurrentTime;
  create.initiatecheckstatus[0].L1status = this.status1;
  create.initiatecheckstatus[0].L2status = this.status1;
  create.initiatecheckstatus[0].Hrstatus = this.status1;
  create.initiatecheckstatus[0].FMstatus = this.status1;
  create.initiatecheckstatus[0].SAstatus = this.status1;
  create.initiatecheckstatus[0].GAstatus = this.status1;
  create.initiatecheckstatus[0].GAcomments= this.comments1;
  create.initiatecheckstatus[0].SAcomments= this.comments1;
  create.initiatecheckstatus[0].FMcomments= this.comments1;
  create.initiatecheckstatus[0].L1comments= this.comments1;
  create.initiatecheckstatus[0].L2comments= this.comments1; 
  create.initiatecheckstatus[0].Hrcomments= this.comments1;
  create.initiatecheckstatus[0].status = this.status;
  create.initiatecheckstatus[0].Empstatus = this.status;
  create.initiatecheckstatus[0].canceltime = '';
  create.initiatecheckstatus[0].employeestatus = 'Pending';
  create.initiatecheckstatus[0].canceldate = "";
  create.initiatecheckstatus[0].employee= employee.official[0].firstname +" "+ employee.official[0].lastname;
  create.initiatecheckstatus[0].doj=this.doj;
  create.initiatecheckstatus[0].jobtitle=this.jobtitle;
  create.initiatecheckstatus[0].requested="Exit Request has been sent for Manager Approval by "+employee.official[0].firstname +" "+ employee.official[0].lastname;

  create.initiatecheckstatus[0].businessunit=this.businessunit;
  create.initiatecheckstatus[0].department=this.departments;
  create.initiatecheckstatus[0].reportingmanager=this.repoman;
  create.initiatecheckstatus[0].reportingmanager=this.repoman;

  create.initiatecheckstatus[0].username=this.getuser.username;
  create.save().toPromise().then(res=>{
   console.log(res)
   this.restangular.all('exitprocedure').getList()
   .subscribe(data=>{this.datas=data.filter(res=>res.initiatecheckstatus)})
  })
  this.ngOnInit()
}
obj4;obj5;question;answer;objj6;
ques;
said;
fmid;
officialid;
epppstatus;
withdrawEmployee(data)
{
  console.log(data);
  console.log(data._id);
  console.log('Cancelled');
  var conf = confirm('Are You sure to cancel Exit Request ?');
  console.log(conf);
  if(conf)
  {
  let obj1 =  this.officialid.find(obj => obj._id == this.getuser.employee_OId);
  console.log(obj1);
  var initdata = this.initdata.find(obj=>obj.empid==obj1._id);
  console.log(initdata);
  if(initdata.initiatecheckstatus[0].status!='Approved')
  { 
  console.log("Iffffffff");
  this.epppstatus='Cancelled';
  data.initiatecheckstatus[0].Empstatus='Cancelled';
  data.initiatecheckstatus[0].canceldate=this.datepipe.transform(this.today ,'dd-MM-yyyy');
  data.initiatecheckstatus[0].employeestatus="Exit Request has been Cancelled by Employee"+" "+obj1.official[0].firstname+" "+obj1.official[0].lastname+" on Date : "+this.date+" at time : "+this.CurrentTime+".";
  data.initiatecheckstatus[0].canceltime=this.CurrentTime;
  data.save().toPromise().then(function(resp) 
  {  
  console.log(resp)
  })
  }
}
}

pqr(initialstatus)
{
  console.log(initialstatus)
  this.initialstatus=initialstatus;
  this.obj3 = this.exits.find(obj3=>obj3.exitsetting[0].businessunit==initialstatus.initiatecheckstatus[0].businessunit && obj3.exitsetting[0].department==initialstatus.initiatecheckstatus[0].department)
  console.log(this.obj3)
  this.hrm=this.obj3.exitsetting[0].hr_manager;
  console.log(this.hrm)
  this.l2m=this.obj3.exitsetting[0].l2_manager;
  console.log(this.l2m)
  this.said=this.obj3.exitsetting[0].l2_manager;
  console.log(this.said)
  this.obj4=this.extint.find(obj4=>obj4.exitinterviewquestion[0].exittype==initialstatus.initiatecheckstatus[0].exittype)
  console.log(this.obj4)
 }

select(bu)
{ 
  console.log(bu)
  for(let i=0;i<=this.selectque.selectquestions.length;i++)
  {
   console.log(bu.selectquestions)
   console.log(this.selectque.selectquestions.length)
   this.objj6=bu.selectquestions
   console.log(this.objj6)
  }

}

saveques(initialstatus)
{
  console.log(initialstatus)
  console.log(this.initialstatus);
  for(var i=0;i<=this.objj6.length;i++)
  {
    let ans=((document.getElementById('ans') as HTMLInputElement).value);
    console.log(ans);
    console.log(this.objj6)
    this.objj[i]=ans
    console.log(initialstatus.selectquestions)
    initialstatus.save().toPromise().then(res=>{
     console.log(res)
     this.restangular.all('exitprocedure').getList()
      .subscribe(data=>data.filter(res=>res.selectquestions))
     })
     this.selectque={selectquestions:[{}]};
  }
}

hideqa()
{
  this.service.queans()
}
hideqa1()
{
  this.service.queans1()
}

edvwqueans(initialstatus)
{
  console.log(initialstatus)
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaa")
  // for(var i=0;i<=this.objj6.length;i++)
  // {
if(initialstatus.selectquestions[0].answer){
  console.log("abbbbbcccccccddddddddddd")
  console.log(initialstatus)
  // this.service.queans1(initialstatus)
  this.hideqa1()
}
  
else{
  // this.service.queans(initialstatus)
  console.log("pqqqqqqqqqrrrrrrrrrrr")
  this.hideqa() 
}
//  }
}
cancel()
{
  this.initialstatus = {initiatecheckstatus:[{}]};
  this.ngOnInit();
}

delete(ann,i)
{
  if(confirm('Are you want to delete???')){
  ann.remove();
  console.log(ann)
  this.datas.splice(i,1);
  this.ngOnInit();
  }
  else{
   this.cancel();
  }
}

//.............................Abscond Employee.........................

fechRepo()
{
  let objrm = this.offialemp.filter(obj1 => obj1.official[0].reporting_mid);
  console.log(objrm);
  this.reportManEmp = objrm.filter(obj=>obj.official[0].reporting_mid==this.getuser.employee_OId);
  console.log(this.reportManEmp);
  
 console.log(this.reportManEmp.length)
  if(this.reportManEmp!=0)
  {
    this.repoFlag=true;
    console.log("Reporting Manager")
  }
  else
  {
    this.repoFlag=false;
    console.log("Not Reporting Manager")
  }
}


selectedEmployee(data)
{
  console.log(data);
  console.log(data._id);
  console.log(data.official[0].username);
  this.eidd=data._id;
  console.log(this.eidd)
  this.uname=data.official[0].username;
}

selectExittype(data)
{
  console.log(data);
  this.exttyp=data;
}
employeename;
saveAbscond(anno){
  var msg=this.exit 
  console.log(anno);
  console.log(this.eidd);
  let employee = this.offialemp.find(obj1 => obj1._id ==this.eidd); 
  console.log(employee)
  this.objj = this.exits.find(objs=>objs.exitsetting[0].businessunit==employee.official[0].businessunit && objs.exitsetting[0].department==employee.official[0].departments)
  console.log(this.objj)
  console.log(this.objj.exitsetting[0].hr_id);
  console.log(this.objj.exitsetting[0].sa_id);
  this.reportingid1=this.objj.exitsetting[0].hr_id;
  this.reportingid2=this.objj.exitsetting[0].l2_id;
  var sysadmin = this.objj.exitsetting[0].sa_id;
  var fanman = this.objj.exitsetting[0].fm_id;
  var genral = this.objj.exitsetting[0].ga_id;
  this.exittypee = anno.initiatecheckstatus[0].exittype;
  console.log(this.exittypee)
  var create=this.restangular.one('exitprocedure')
  create.empid=this.eidd;
  create.repoid=employee.official[0].reporting_mid;
  create.hrmanagerid=this.reportingid1;
  create.l2managerid=this.reportingid2;
  create.fmanagerid=fanman;
  create.smanagerid=sysadmin;
  create.gmanagerid=genral;
  create.initiatecheckstatus=[]
  create.initiatecheckstatus.push(anno.initiatecheckstatus[0])
  create.initiatecheckstatus[0].requestdate = this.datepipe.transform(this.today ,'dd-MM-yyyy');
  create.initiatecheckstatus[0].CurrentTime = this.CurrentTime;
  create.initiatecheckstatus[0].L1status = this.status1;
  create.initiatecheckstatus[0].L2status = this.status1;
  create.initiatecheckstatus[0].Hrstatus = this.status1;
  create.initiatecheckstatus[0].FMstatus = this.status1;
  create.initiatecheckstatus[0].SAstatus = this.status1;
  create.initiatecheckstatus[0].GAstatus = this.status1;
  create.initiatecheckstatus[0].GAcomments= this.comments1;
  create.initiatecheckstatus[0].SAcomments= this.comments1;
  create.initiatecheckstatus[0].FMcomments= this.comments1;
  create.initiatecheckstatus[0].L1comments= this.comments1;
  create.initiatecheckstatus[0].L2comments= this.comments1; 
  create.initiatecheckstatus[0].Hrcomments= this.comments1;
  create.initiatecheckstatus[0].status = this.status;
  create.initiatecheckstatus[0].Empstatus = this.status;
  create.initiatecheckstatus[0].canceltime = '';
  create.initiatecheckstatus[0].employeestatus = 'Pending';
  create.initiatecheckstatus[0].canceldate = "";
  create.initiatecheckstatus[0].employee= this.employeename;
  create.initiatecheckstatus[0].doj=employee.official[0].doj;
  create.initiatecheckstatus[0].jobtitle=employee.official[0].jobtitle;
  create.initiatecheckstatus[0].requested="Exit Request has been sent for Manager Approval by "+employee.official[0].firstname +" "+ employee.official[0].lastname;

  create.initiatecheckstatus[0].businessunit=employee.official[0].businessunit;
  create.initiatecheckstatus[0].department=employee.official[0].departments;
  create.initiatecheckstatus[0].reportingmanager=employee.official[0].reportingmanager;
  create.initiatecheckstatus[0].username=employee.official[0].username;
  create.save().toPromise().then(res=>{
   console.log(res)
   this.restangular.all('exitprocedure').getList()
   .subscribe(data=>{this.datas=data.filter(res=>res.initiatecheckstatus)})
  })
  this.ngOnInit()
}

Ga;
exitAbscond;
ecitResine;
findExitType()
{
   var objres = this.extdata.filter(obj=>obj.exittype);
   console.log(objres);
   this.exitAbscond = objres.filter(obj=>obj.exittype[0].exittype!='Resignation' && obj.exittype[0].exittype!='Termination' && obj.exittype[0].exittype!='Retirement')
   console.log(this.exitAbscond);
   this.ecitResine = objres.filter(obj=>obj.exittype[0].exittype!='Abscond' && obj.exittype[0].exittype!='Termination' && obj.exittype[0].exittype!='Retirement')
   console.log(this.ecitResine);
}

setMail(){
  console.log(this.exttyp);
  console.log(this.exittypee);
  if(this.exttyp=='Resignation')
 { 
  let employee = this.offialemp.find(obj1 => obj1._id ==this.getuser.employee_OId); 
  this.name=employee.official[0].firstname+" "+employee.official[0].lastname;
  this.role=employee.official[0].role;
  this.usrnm= employee.official[0].username;
  var exittype = this.exittypee;
  console.log(exittype)
  console.log(employee)
 }
 else if(this.exttyp=='Abscond')
 {
  console.log(this.eidd);
  let employee = this.offialemp.find(obj1 => obj1._id ==this.eidd); 
  this.name=employee.official[0].firstname+" "+employee.official[0].lastname;
  this.role=employee.official[0].role;
  this.usrnm= employee.official[0].username;
  var exittype = this.exittypee;
 }

this.mailFormat = 'Date : ' +this.date+'<br>'+'412,413,414,<br>TristhaGlobal Pvt. Ltd.,<br>'+'Crescent Business Park,<br>'+'Saki Naka,<br>Maharastra,<br>Mumbai-400072<br><br>'+
'Dear HR,<br><br>'+
'Please accept this letter as my formal '+this.exittypee+ ' from my position as <b>'+this.role+'</b> at <b>TristhaGlobal Pvt. Ltd.</b>, effective from two weeks from today’s date, '+this.date+'.'+
'<br><br>I appreciate the opportunities for growth and development you have provided during my tenure. Thank you for your guidance and support.<br>'+
'<br>Please let me know how I can be of help during the transition period. I wish you and the company the very best going forward. <br><br>Sincerely,'+
'<br><b>'+this.name+'</b>'+
'<br><br><table cellpadding="10" bgcolor="Azure"  width="400" height="auto" border="1"><tr><td align="center"><b>Username </b></td><td align="center">'+ this.name+'</td></tr><tr><td align="center"><b>Username </b></td><td align="center">'+ this.usrnm+'</td></tr>'+
'<tr><td align="center"><b>Exit Type </b></td><td align="center">'+ this.exittypee+'</td></tr>'+
'<tr><td align="center"><b>Applied On </b></td><td align="center">'+ this.date+'</td></tr>'+
'<tr><td align="center"><b>Role </b></td><td align="center">'+ this.role+'</td></tr>'
+'</table>'

return this.mailFormat;
}


setval=false;
initiateexit(email,exittype,mailFormat)
	{	
  console.log("lll") 
  if(this.exttyp=='Resignation')
 {  
  var hrmid=this.obj3.exitsetting[0].hr_id;
  console.log(hrmid)
  var l2mid=this.obj3.exitsetting[0].l2_id;
  console.log(l2mid)
  var said=this.obj3.exitsetting[0].sa_id;
  console.log(l2mid)
  var fmid=this.obj3.exitsetting[0].fm_id;
  console.log(l2mid)
  var gaid=this.obj3.exitsetting[0].ga_id;
  console.log(gaid)
  var objn = this.offialemp.find(obj=>obj._id==this.getuser.employee_OId);
  var objh = this.offialemp.find(obj=>obj._id==hrmid);
  var objl = this.offialemp.find(obj=>obj._id==l2mid);
  var objrepo = this.offialemp.find(obj=>obj._id==this.reportingid);
  var objsa = this.offialemp.find(obj=>obj._id==said);
  var objfm = this.offialemp.find(obj=>obj._id==fmid);
  var objga = this.offialemp.find(obj=>obj._id==gaid);
  console.log(objh);
  console.log(objl);
  console.log(objrepo);
  this.HR = objh.official[0].email;
  this.L2 = objl.official[0].email;
  this.Repo = objrepo.official[0].email;
  this.Fm = objfm.official[0].email;
  this.Sa = objsa.official[0].email;
  this.Ga = objga.official[0].email;
  console.log(this.HR)
  console.log(this.L2)
  console.log(this.Repo)  
  email = [this.HR,this.L2,this.Repo,this.Fm,this.Sa,this.Ga];
}
else if(this.exttyp=='Abscond')
{
  let employee = this.offialemp.find(obj1 => obj1._id ==this.eidd); 
  console.log(employee);
  console.log(this.objj);
  var hrmid=this.objj.exitsetting[0].hr_id;
  console.log(hrmid);
  var l2mid=this.objj.exitsetting[0].l2_id;
  console.log(l2mid);
  var said=this.objj.exitsetting[0].sa_id;
  console.log(said);
  var fmid=this.objj.exitsetting[0].fm_id;
  console.log(fmid);
  var gaid=this.objj.exitsetting[0].ga_id;
  console.log(gaid);

  var objh = this.offialemp.find(obj=>obj._id==hrmid);
  var objl = this.offialemp.find(obj=>obj._id==l2mid);
  var objemp = this.offialemp.find(obj=>obj._id==this.eidd);
  var objsa = this.offialemp.find(obj=>obj._id==said);
  var objfm = this.offialemp.find(obj=>obj._id==fmid);
  var objga = this.offialemp.find(obj=>obj._id==gaid);
  console.log(objh);
  console.log(objl);
  console.log(objemp);
  this.HR = objh.official[0].email;
  this.L2 = objl.official[0].email;
  this.Emp = objemp.official[0].email;
  this.Fm = objfm.official[0].email;
  this.Sa = objsa.official[0].email;
  this.Ga = objga.official[0].email;
	email = [this.HR,this.L2,this.Fm,this.Sa,this.Emp,this.Ga];
}
  exittype = this.exittypee; 
  var base=this.restangular.all('/exitinitiate')

	base.post({email:email,exittype:exittype,mailFormat:this.setMail()}).toPromise().then(res=>{
  console.log(res)
  
  email="";
  exittype="";
  mailFormat="";
 	
	if(res.succes){
	this.messageClass='alert alert-Success';
	this.message=res.msg;
	this.setval=true;
	setTimeout(() => {this.setval=false;},3000);	
	console.log("succccccc")
	}else{
	
	this.messageClass='alert alert-danger';
	this.message=res.msg;
	this.setval=true;
	setTimeout(() => {this.setval=false;},3000);
	console.log("fail")
	}
	
	})
  }
  
  hrmid;
  l2mmid;
  saaid;
  fmmid;
  gaaid;
  l1idd;
  hrmidd;
  extypee;
  emmpp;
  empidd;
  finddata(data)
  {
    console.log(data);
    this.empidd=data.empid;
    this.l1idd=data.repoid;
    this.l2mmid=data.l2managerid;
    this.hrmidd=data.hrmanagerid;
    this.saaid=data.smanagerid;
    this.gaaid=data.gmanagerid;
    this.fmmid=data.fmanagerid;
    this.extypee=data.initiatecheckstatus[0].exittype;
    this.emmpp=data.initiatecheckstatus[0].employee;
  }


setStatusMail()
  {
    let employee = this.offialemp.find(obj1 => obj1._id ==this.empidd); 
    this.role=employee.official[0].role;
    this.usrnm= employee.official[0].username;

     if(this.epppstatus=='Cancelled')
     {
      this.mailFormat = 'Date : ' +this.date+'<br>'+'412,413,414,<br>TristhaGlobal Pvt. Ltd.,<br>'+'Crescent Business Park,<br>'+'Saki Naka,<br>Maharastra,<br>Mumbai-400072<br><br>'+
      'Dear HR,<br><br>'+
      'I am '+this.emmpp+' cancle my Exit Request.'+
      '<br><br><table cellpadding="10" bgcolor="Azure"  width="400" height="auto" border="1"><tr><td align="center"><b>Username </b></td><td align="center">'+ this.emmpp+'</td></tr><tr><td align="center"><b>Username </b></td><td align="center">'+ this.usrnm+'</td></tr>'+
      '<tr><td align="center"><b>Exit Type </b></td><td align="center">'+ this.exittypee+'</td></tr>'+
      '<tr><td align="center"><b>Applied On </b></td><td align="center">'+ this.date+'</td></tr>'+
      '<tr><td align="center"><b>Role </b></td><td align="center">'+ this.role+'</td></tr>'
      +'</table>'
      
      return this.mailFormat;
     }
  }

  initiateexitstatus(email,exittype,mailFormat)
	{	
  console.log("lll") 
  var objn = this.offialemp.find(obj=>obj._id==this.getuser.employee_OId);
  var objh = this.offialemp.find(obj=>obj._id==this.hrmidd);
  var objl = this.offialemp.find(obj=>obj._id==this.l2mmid);
  var objrepo = this.offialemp.find(obj=>obj._id==this.l1idd);
  var objsa = this.offialemp.find(obj=>obj._id==this.saaid);
  var objfm = this.offialemp.find(obj=>obj._id==this.fmmid);
  var objga = this.offialemp.find(obj=>obj._id==this.gaaid);
  console.log(objh);
  console.log(objl);
  console.log(objrepo);
  this.HR = objh.official[0].email;
  this.L2 = objl.official[0].email;
  this.Repo = objrepo.official[0].email;
  this.Fm = objfm.official[0].email;
  this.Sa = objsa.official[0].email;
  this.Ga = objga.official[0].email;
  console.log(this.HR)
  console.log(this.L2)
  console.log(this.Repo)  
  email = [this.HR,this.L2,this.Repo,this.Fm,this.Sa,this.Ga];

  exittype = this.extypee; 
  var base=this.restangular.all('/exitinitiatestatus')

	base.post({email:email,exittype:exittype,mailFormat:this.setStatusMail()}).toPromise().then(res=>{
  console.log(res)
  
  email="";
  exittype="";
  mailFormat="";
 	
	if(res.succes){
	this.messageClass='alert alert-Success';
	this.message=res.msg;
	this.setval=true;
	setTimeout(() => {this.setval=false;},3000);	
	console.log("succccccc")
	}else{
	
	this.messageClass='alert alert-danger';
	this.message=res.msg;
	this.setval=true;
	setTimeout(() => {this.setval=false;},3000);
	console.log("fail")
	}
	
	})
	}




  ngOnInit() {

    this.getuser=JSON.parse(localStorage.getItem('user'));
    console.log(this.getuser)

    var baseOfficial1 = this.restangular.all('createemployee');
    baseOfficial1.getList().subscribe(data => {
      this.offialemp =data.filter(res=>res.official);
      console.log(this.officiald)
      this.fechRepo();
      return this.offialemp;  
    });

    var baseOfficial = this.restangular.all('createemployee');
    baseOfficial.getList({_id:this.getuser.employee_OId}).subscribe(data => {
      this.officiald =data.filter(res=>res.official);
      console.log(this.officiald)
      this.fetch();
      return this.officiald;  
    });

    let baseInit1 = this.restangular.all('exitprocedure');
    baseInit1.getList({empid:this.getuser.employee_OId}).subscribe(data=>{
    this.initdata = data.filter(res=>res.initiatecheckstatus)
    if(this.initdata.length!=0)
    {
      this.buttonhide = true;
    }
    else{
      this.buttonhide = false;
    }
    console.log(this.initdata)
      this.fetch();
    return this.initdata;
    })

    let baseQueAns = this.restangular.all('exitprocedure');
    baseQueAns.getList({empid:this.getuser.employee_OId}).subscribe(data=>{
    this.initdataque = data.filter(res=>res.selectquestions)
    console.log(this.initdataque.length)
    if(this.initdataque.length!=0){
      console.log("oKKKK")
      this.btnhd = true;
    }
    else{
      this.btnhd = false;
      console.log("Noooooo")
    }
    return this.initdataque;
    })

    this.restangular.all('createemployee').getList({_id:this.getuser.employee_OId}).subscribe(res=>{
      console.log(res)
  this.employee=res[0]
  if(res[0].official[0].reporting_mid=="" || res[0].official[0].reporting_mid==undefined)
  {
    // this.msg1=true;
    // console.log(this.msg1)
  }
 
  })
   
    let exitset = this.restangular.all('exitprocedure');
    exitset.getList().subscribe(data=>{
    this.exits = data.filter(res=>res.exitsetting)
    this.fetch();
    console.log(this.exits)
    return this.exits;
    })

    let off = this.restangular.all('createemployee');
    off.getList().subscribe(data=>{
    this.officialid = data.filter(res=>res.official)
    console.log(this.officialid)
    return this.officialid;
    })

  let baseExt = this.restangular.all('exitprocedure');
  baseExt.getList().subscribe(data => {
  this.extdata =data.filter(res=>res.exittype);
  console.log(this.extdata)
  this.findExitType();
  return this.extdata;
  });

  let baseExt1 = this.restangular.all('exitprocedure');
  baseExt1.getList().subscribe(data => {
  this.extdataaa =data.filter(res=>res.exittype);
  console.log(this.extdataaa)
  return this.extdataaa;
  });

  let baseQUS = this.restangular.all('exitprocedure');
  baseQUS.getList().subscribe(data => {
  this.extint =data.filter(res=>res.exitinterviewquestion);
  console.log(this.datas)
  return this.extint;
  });

  this.form = this.formBuilder.group({
    extyp: [null, Validators.required],
    cmt: [null, Validators.required],
    que: [null,Validators],
    dt: [null,Validators]
  });
  }
}
