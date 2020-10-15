import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../../user.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Md2Dialog } from 'md2';
import { DatePipe } from '@angular/common';
//import { EmployeeCandidateComponent } from 'app/Setup/background-check/employee-candidate/employee-candidate.component';


@Component({
  selector: 'app-terminate-retirement',
  templateUrl: './terminate-retirement.component.html',
  styleUrls: ['./terminate-retirement.component.css'],
  providers:[DatePipe]
})

export class TerminateRetirementComponent implements OnInit {

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

today: number = Date.now();
status='Pending';
status1='Pending';
comments1='';
CurrentTime = new Date().getHours() + ':' + new Date().getMinutes() + ':'+  new Date().getSeconds()

exttype = [{value:'Retirement'},{value:'Terminate'}]

open(dialog: Md2Dialog) {
  dialog.open();
  }

  openView(dialog: Md2Dialog) {
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

eidd;
uname;
selectedEmployee(data)
{
  console.log(data);
  console.log(data._id);
  console.log(data.official[0].username);
  this.eidd=data._id;
  console.log(this.eidd)
  this.uname=data.official[0].username;
}

objje;
fetch()
{
  this.objje = this.officiald.find(obj1 => obj1._id ==this.eidd);
  let obj1 = this.officiald.find(obj1 => obj1._id ==this.eidd);
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


this.objj = this.exits.find(objs=>objs.exitsetting[0].businessunit==obj1.official[0].businessunit && objs.exitsetting[0].department==obj1.official[0].departments)
console.log(this.objj)
console.log(this.objj.exitsetting[0].hr_id);
this.reportingid1=this.objj.exitsetting[0].hr_id;
this.reportingid2=this.objj.exitsetting[0].l2_id;
console.log(this.objj.exitsetting[0].l2_id);

let obj = this.initdata.find(objv => objv.empid ==this.eidd);
console.log(obj);
console.log(obj.initiatecheckstatus[0].status)
var status=obj.initiatecheckstatus[0].status;
console.log(this.initdata.length)
if(this.initdata.length>0 && status=='Approved' || status=='Pending'){
  console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
  document.getElementById('btn').style.display='none';
}
else{
  console.log("bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb")
  document.getElementById('btn').style.display='block';
}

}
obj3;

objjexit;
exitproc;
length;  
exittypee;
employees;
name;
role;
usrnm;
save(anno){
  var msg=this.exit 
  console.log(anno);
  console.log(this.eidd);
  let employee = this.offialemp.find(obj1 => obj1._id ==this.eidd); 
  console.log(employee)
  this.objj = this.exits.find(objs=>objs.exitsetting[0].businessunit==employee.official[0].businessunit && objs.exitsetting[0].department==employee.official[0].departments)
  console.log(this.objj)
  console.log(this.objj.exitsetting[0].hr_id);
  this.reportingid1=this.objj.exitsetting[0].hr_id;
  this.reportingid2=this.objj.exitsetting[0].l2_id;
  this.exittypee = anno.initiatecheckstatus[0].exittype;
  console.log(this.exittypee)
  var create=this.restangular.one('exitprocedure')
  create.empid=this.eidd;
  create.repoid=employee.official[0].reporting_mid;
  create.hrmanagerid=this.reportingid1;
  create.l2managerid=this.reportingid2;
  create.fmanagerid=this.objj.exitsetting[0].fm_id;
  create.smanagerid=this.objj.exitsetting[0].sa_id;
  create.gmanagerid=this.objj.exitsetting[0].ga_id;
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
  create.initiatecheckstatus[0].canceltime = '00:00'
  create.initiatecheckstatus[0].employeestatus = 'Pending';
  create.initiatecheckstatus[0].canceldate = "";
  create.initiatecheckstatus[0].employee= employee.official[0].firstname+" "+employee.official[0].lastname;
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

obj4;obj5;question;answer;objj6;
ques;
said;
fmid;

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


cancel()
{
  this.initialstatus = {initiatecheckstatus:[{}]};
  this.ngOnInit();
}

delete(ann,i){
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
obj0;
add
quedatas

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
emp;
Ga;
setval=false;
date = this.datepipe.transform(this.today ,'dd-MM-yyyy')
mailFormat;
exttyp;

selectExittype(data){
console.log(data);
this.exttyp=data;
}

setMail(data){
console.log(data);
let employee = this.offialemp.find(obj1 => obj1._id ==data._id); 
this.name=employee.official[0].firstname+" "+employee.official[0].lastname;
this.role=employee.official[0].role;
this.usrnm= employee.official[0].username;
var exittype = this.exittypee;
console.log(exittype)
console.log(employee)

this.mailFormat = 'Date : ' +this.date+'<br>'+'412,413,414,<br>TristhaGlobal Pvt. Ltd.,<br>'+'Crescent Business Park,<br>'+'Saki Naka,<br>Maharastra,<br>Mumbai-400072<br><br>'+
'Dear HR,<br><br>'+
'Please accept this letter as my formal '+this.exttyp+ ' from my position as <b>'+this.role+'</b> at <b>TristhaGlobal Pvt. Ltd.</b>, effective from two weeks from today’s date, '+this.date+'.'+
'<br><br>I appreciate the opportunities for growth and development you have provided during my tenure. Thank you for your guidance and support.<br>'+
'<br>Please let me know how I can be of help during the transition period. I wish you and the company the very best going forward. <br><br>Sincerely,'+
'<br><b>'+this.name+'</b>'+
'<br><br><table cellpadding="10" bgcolor="Azure"  width="400" height="auto" border="1"><tr><td align="center"><b>Username </b></td><td align="center">'+ this.name+'</td></tr><tr><td align="center"><b>Username </b></td><td align="center">'+ this.usrnm+'</td></tr>'+
'<tr><td align="center"><b>Exit Type </b></td><td align="center">'+ this.exttyp+'</td></tr>'+
'<tr><td align="center"><b>Applied On </b></td><td align="center">'+ this.date+'</td></tr>'+
'<tr><td align="center"><b>Role </b></td><td align="center">'+ this.role+'</td></tr>'
+'</table>'
}

initiateexit(email,exittype,mailFormat)
  {	
  console.log("lll")  
  var hrmid=this.objj.exitsetting[0].hr_id;
  console.log(hrmid)
  var l2mid=this.objj.exitsetting[0].l2_id;
  console.log(l2mid)
  var said=this.objj.exitsetting[0].sa_id;
  console.log(said)
  var fmid=this.objj.exitsetting[0].fm_id;
  console.log(fmid)
  var gaid=this.objj.exitsetting[0].ga_id;
  console.log(gaid)
  var objn = this.offialemp.find(obj=>obj._id==this.eidd);
  var objh = this.offialemp.find(obj=>obj._id==hrmid);
  var objl = this.offialemp.find(obj=>obj._id==l2mid);
  var objrepo = this.offialemp.find(obj=>obj._id==objn.official[0].reporting_mid);
  var objsa = this.offialemp.find(obj=>obj._id==said);
  var objfm = this.offialemp.find(obj=>obj._id==fmid);
  var objga = this.offialemp.find(obj=>obj._id==gaid);
  console.log(objh);
  console.log(objl);
  console.log(objrepo);
  console.log(objn);
  this.emp = objn.official[0].email;
  this.HR = objh.official[0].email;
  this.L2 = objl.official[0].email;
  this.Repo = objrepo.official[0].email;
  this.Fm = objfm.official[0].email;
  this.Sa = objsa.official[0].email;
  this.Ga = objga.official[0].email;
  console.log(this.HR)
  console.log(this.L2)
  console.log(this.Repo)
  exittype = this.exttyp;
  email = [this.emp,this.L2,this.Repo,this.Fm,this.Sa,this.Ga];
  var base=this.restangular.all('/exitinitiate')

  base.post({email:email,exittype:this.exittypee,mailFormat:this.mailFormat}).toPromise().then(res=>{
  console.log(res)
  
  email="";
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

  exitResTer;
  findExitType()
  {
     var objres = this.extdata.filter(obj=>obj.exittype);
     console.log(objres);
     this.exitResTer = objres.filter(obj=>obj.exittype[0].exittype!='Resignation' && obj.exittype[0].exittype!='Abscond')
     console.log(this.exitResTer);
  }


  ngOnInit() {  

    this.getuser=JSON.parse(localStorage.getItem('user'));
    console.log(this.getuser)

    var baseOfficial = this.restangular.all('createemployee');
    baseOfficial.getList().subscribe(data => {
      this.officiald =data.filter(res=>res.official);
      console.log(this.officiald)
      this.fetch();
      return this.officiald;    
    });


    var baseOfficial1 = this.restangular.all('createemployee');
    baseOfficial1.getList().subscribe(data => {
    this.offialemp =data.filter(res=>res.official);
    console.log(this.officiald)
    return this.offialemp;   
    });

    let baseInit1 = this.restangular.all('exitprocedure');
    baseInit1.getList().subscribe(data=>{
    this.initdata = data.filter(res=>res.initiatecheckstatus)
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

    this.restangular.all('createemployee').getList({_id:this.empid}).subscribe(res=>{
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

  let baseExt = this.restangular.all('exitprocedure');
  baseExt.getList().subscribe(data => {
  this.extdata =data.filter(res=>res.exittype);
  console.log(this.extdata)
  this.findExitType();
  return this.extdata;
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
    emp: [null, Validators.required],
    que: [null,Validators],
    dt: [null,Validators]
  });
  }
}
