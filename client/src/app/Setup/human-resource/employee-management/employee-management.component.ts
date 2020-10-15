import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {UserService } from '../../../user.service';
import { isIdentifier } from '@angular/compiler';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.css']
})
export class EmployeeManagementComponent implements OnInit {

  constructor(private restangular: Restangular, private router: Router, public userservice: UserService,private formBuilder: FormBuilder) 
  {    
    this.empmanage=this 
  }
  getuser;

  form: FormGroup;
  employee = { official: [{}] };
  emp;
  datas;
  empmanage;
  general={identitycodes:[{}]};
  positions={position:[{}]};
  job={jobtitle:[{}]};
  obj={prefixes:[{}]};
  site={siteconfig:[{}]};
  employeecode;
  employeeid='001';
  employeeemail;
  positionsdata;
  jdatas;
  posit=[];
  pre;
  messageClass;
  message;
  setval=false;
  employeeutype;
  id;                 
  siteval;
  datas1;

  save(obj){
    obj.official[0].code=this.employeecode;
    obj.official[0].id=this.employeeid;
    obj.official[0].email=this.employeeemail;
    obj.official[0].role=this.employeeutype;
    obj.official[0].username=this.employeecode + this.employeeid
   var create= this.restangular.one('createemployee');
   var usrfun=this.empmanage
   create.official=[];
   create.official.push(obj.official[0])
   create.save().toPromise().then(res=>{
   console.log(res)
   console.log(res._id)
   this.id=res._id
 
   console.log(this.id)
   usrfun.createuser(res);
   this.restangular.all('createemployee').getList()
                   .subscribe(data=>{this.datas=data.filter(res=>res.official)})
                   console.log(this.datas)
  
                 return res._id;
      })
   this.employee={official:[{}]};
  this.router.navigate(['./setuproot', { outlets: { thirdchild: ['employee'] } }])
   return this.id
  }
 
  selectjob(job)
{
  console.log(job)
  var jpos = [];
  jpos = this.positionsdata.filter(data => data.position[0].jobtitle == job)
  this.posit = jpos;
}

  cancel() {
    this.router.navigate(['./setuproot', { outlets: { secondchild: ['dashboard'] } }])
  }

  makepwd() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 8; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }
  
  
  
  useremp(email,username,utype,password,employee_id,employee_OId)
  {
  
  
    // email="hrushikeshmishra545@gmail.com";
    // var username="akshaya";
     password=this.makepwd();
    //  employee_OId="hrushikesh"
    this.newpwd(email,username,password,utype,employee_OId);
    console.log(employee_OId)

    // utype="hr";
    //  this.makepwd();
    password=password;
  console.log(email)
  console.log(username)
  console.log(password)
  console.log(utype)
  console.log(employee_OId)
  
  
  // username='this.general.identitycodes[0].employee' +'employee.official[0].id'
  
  var base=this.restangular.all('/register')
  
  base.post({email:email,username:username,utype:utype,password:password,employee_id:employee_id,employee_OId:employee_OId}).toPromise().then(res=>{
  console.log(res)
  // console.log(username)
  email="";
  username="";
  utype="";
  password="";
  employee_id="";
  employee_OId="";
  console.log(employee_OId)

  console.log(password)
  
  
  
  if(res.succes){
  this.messageClass='alert alert-Success';
  this.message=res.msg;
  this.setval=true;
  setTimeout(() => {this.setval=false;},3000);
  
  
  console.log(password)
  
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
  
  
  
  
  newpwd(email,username,password,utype,employee_OId)
  {
  console.log(email)
  console.log(username)
  console.log(utype)
  console.log(employee_OId)

  // var newpwd=this.makepwd();
  var base=this.restangular.all('/newuser')
  
  // username='this.general.identitycodes[0].employee + employee.official[0].id'
  // employee_OId="byyyyy"
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

  
// saveemp(employee){
//   // employee.official[0].code=this.employeecode;
//   // employee.official[0].id=this.employeeid;
//   // employee.official[0].email=this.employeeemail;
//   // employee.official[0].role=this.employeeutype;
//   // employee.official[0].username=this.employeecode + this.employeeid

//   var create= this.restangular.one('user');
//   //var create1= this.restangular.one('createemployee');

//   create.official=[];
//   create.official.push(employee.official[0])
//   // create1.official=[];
//   // create1.official.push(employee.official[0])
//   // create.save().toPromise().then(()=>{
//   create.save().toPromise().then(res=>{
//   //  res=create1;
//   console.log(res)
//   console.log(res._id)
//   this.restangular.all('user').getList()
//   .subscribe(data=>{this.datas=data.filter(res =>
//   create.employee_id=res.official[0].code + res.official[0].id,
//   create.username=res.official[0].username,
//   create.email=res.official[0].email,
//   create.password="welcome",
//   create.employee_OId=res._id,
  
//   )
//   console.log(create.employee_OId)
//   console.log(res._id)
//   var iid=res._id
//   console.log(iid)
//   return iid;
//   })
//  // create.employee_OId=res._id
//   // console.log(this.id)
//   // console.log(this.employeeid)
//   // console.log(create.employee_OId);
//   this.employee={official:[{}]}
// })
// //  create.employee_OId=this.id
//    return create.employee_OId
// }
emailadmin;




createuser(employee)
{
  console.log(employee)
  var create=this.restangular.one('register')
  console.log(employee.official[0].code + employee.official[0].id)
  create.employee_id=employee.official[0].id
  create.username=employee.official[0].username
  create.email=employee.official[0].email
  create.password=this.makepwd();
  //  create.password="welcome"
  create.employee_OId=employee._id
  console.log(employee._id)
  console.log(create.employee_OId)
  console.log("mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm")
  create.save();
  
  //this.useremp(employee.official[0].email,this.employeecode+employee.official[0].id,employee.official[0].role,create.password, employee.official[0].id,create.employee_OId);

  this.useremp(employee.official[0].email ,this.employeecode+employee.official[0].id,employee.official[0].role,create.password,create.employee_id,create.employee_OId);

 // return create.employee_OId;
}

  ngOnInit() {

    this.getuser=JSON.parse(localStorage.getItem('user'));
    console.log(this.getuser)


    var baseOff= this.restangular.all('createemployee');
    baseOff.getList().subscribe(datas=>{
      console.log(datas);
    this.emp =datas.filter(res=>res.official);
    console.log(this.emp)
    return this.emp;
});

var baseUnits = this.restangular.all('general', );
console.log(baseUnits)
baseUnits.getList().subscribe(data => {
  console.log(data)
  data =data.filter(res=>res.identitycodes);
  if(data.length!=0)
  {
this.datas=data[0]
console.log(this.datas)
this.general=this.datas
this.employeecode = this.datas.identitycodes[0].employee;
}else{
  this.datas=this.restangular.one('general')
  this.datas.identitycodes=[]
  console.log(this.datas)
}

return this.datas;
});

var data=this.restangular.all('siteconfig');
 console.log(data)
 data.getList().subscribe(val =>{
 this.siteval=val;
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


var basePre = this.restangular.all('general');
basePre.getList().subscribe(data => {
console.log(data)
this.pre = data.filter(res=>res.prefixes);
console.log(this.pre)
return this.pre;
});

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
  // this.datas.siteconfig=[]
  // this.add1=true;
  console.log(this.datas1)
}
/*this.backgroundagency = this.datas.identitycodes[0].background;
this.users = this.datas.identitycodes[0].users;
this.requisition = this.datas.identitycodes[0].requisition;*/
return this.datas1;
});

  //form submit validation
  this.form = this.formBuilder.group({
    empcode: [null, Validators.nullValidator],
    firstname: [null, Validators.required],
    role: [null, Validators.nullValidator],
    dateofjoin: [null, Validators.required],
    empid: [null, Validators.required],
    lastname: [null, Validators.required],
    pos: [null, Validators],
    middlename: [null,Validators],
    desc: [null, Validators],
    prefix: [null, Validators],
    email: [null, Validators.required],
    jobtitle: [null, Validators.nullValidator],
  });
  }

}
