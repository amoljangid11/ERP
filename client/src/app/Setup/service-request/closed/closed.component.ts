import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {MdChipsModule} from '@angular/material';
import {UserService } from '../../../user.service';
import { Restangular } from 'ngx-restangular';
import { Router} from '@angular/router';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-closed',
  templateUrl: './closed.component.html',
  styleUrls: ['./closed.component.css']
})
export class ClosedComponent implements OnInit {

 
  constructor(private userservice:UserService,private restangular: Restangular,private router:Router,private formBuilder: FormBuilder) {this.group=this;}




  edited=false;
  updatebutton = false;
  catt;
  reqq;
  group;
  datas;
  alls={allservicereq:[{}]}; 
  allss;
  messageClass
  message
  getuser;
  today: number = Date.now();
  form: FormGroup;
  officiald;
  empname;
  repo;
  dd=[];
  set;
  catt1;
  employee;
  selected1_id
  selected2_id
  selected3_id;
  execid;
  executor;
approver1;
approver2;
approver3;



  request = [
    {name : 'Service'},
    {name : 'Asset'}
  ];

  priority = [
    {name : 'Low'},
    {name : 'Medium'},
    {name : 'High'}
  ];

  open(dialog: Md2Dialog) {
    dialog.open();
  }
  close(dialog: any) {
    dialog.close();
  }
  view(dataall) {
    // this.updatebutton = true;
    this.alls= dataall 
    console.log(this.alls)
    console.log(dataall.allservicereq[0].raisedby)
   var  obj1 = this.officiald.find(obj1 => obj1.official[0].username == dataall.allservicereq[0].raisedby);
    console.log(obj1.official[0].firstname+" "+obj1.official[0].firstname)
    this.empname=obj1.official[0].firstname+" "+obj1.official[0].lastname
    this.repo=obj1.official[0].reportingmanager

    var  obj2 = this.set.find(obj1 => obj1.settings[0].category==dataall.allservicereq[0].category);
    console.log(obj2)
    console.log(obj2.settings[0].selected1)

    var  obj3 = this.officiald.find(obj1 => obj1._id == dataall.executors_id);

    this.executor=obj3.official[0].firstname +' '+obj3.official[0].lastname
    this.approver1=obj2.settings[0].selected1
    this.approver2=obj2.settings[0].selected2
    this.approver3=obj2.settings[0].selected3

  //   this.i=i;
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

makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 4; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

save(obj){
  // this.moe=false
  var msg=this.group
  var res=this.employee  
console.log(res)
  var create=this.restangular.one('category')
  create.employee_id=this.getuser.employee_OId

  var  obj2 = this.set.find(obj1 => obj1.settings[0].category==obj.allservicereq[0].category);
  console.log(obj2)
  this.execid=obj2.settings[0].executors_id
  this.selected1_id=obj2.settings[0].selected1_id
  this.selected2_id=obj2.settings[0].selected2_id
  this.selected3_id=obj2.settings[0].selected3_id


  var objjj=this.officiald.find(obj=>obj._id==this.getuser.employee_OId);


  create.executors_id=this.execid
  create.selected1_id=this.selected1_id
  create.selected2_id=this.selected2_id
  create.selected3_id=this.selected3_id

  create.reporting_mid=objjj.official[0].reporting_mid
console.log(create.employee_id)





 create.allservicereq=[];

  create.allservicereq.push(obj.allservicereq[0])
  create.allservicereq[0].date = this.today;
  create.allservicereq[0].raisedby = this.getuser.username;
  create.allservicereq[0].status = "open";
  create.allservicereq[0].ticket = this.makeid();
  create.allservicereq[0].NoOfApprovers=obj2.settings[0].NoOfApprovers

  create.save().toPromise().then(res=>{
 console.log(res)
 this.restangular.all('category').getList()
                 .subscribe(data=>{this.datas=data.filter(res=>res.aallservicereqll)})
                 console.log(this.datas)

 msg.savemsg('Added Succesfully','alert alert-info');
 })
 this.alls={allservicereq:[{}]}; 
 this.ngOnInit();
}

  cancel(){
    this.alls={allservicereq:[{}]}; 
    this.ngOnInit();
  }

objjj;
  fetch(){
this.objjj=this.allss.filter(obj => obj.allservicereq[0].status=='closed')
console.log(this.objjj)
  }


  select(ddt,bunitobj,alls) 
  {
    console.log(ddt)
    alls.allservicereq[0].category_id=bunitobj
    console.log(bunitobj)
    var dp3 = [];
    dp3 = this.reqq.filter(data => data.requesttype[0].category_id == bunitobj)
    console.log(dp3)
    this.dd = dp3;
    console.log(this.dd)
  }
  categoryy(){
    this.catt1 = this.set.filter(obj => obj.settings[0].category)
  
  console.log(this.catt1)
  }



  filecategory(obj){
    var  obj2 = this.set.find(obj1 => obj1.settings[0].category==obj.allservicereq[0].category);
  console.log(obj2)
  console.log(obj2.settings[0].category)
  if(obj2.settings[0].Attachment=='Yes'){
    document.getElementById('ff').style.display='block'
  }
  else{
    document.getElementById('ff').style.display='none'
  
  }
  }
  ngOnInit() {

    this.getuser=JSON.parse(localStorage.getItem('user'));
    console.log(this.getuser)




    let baseCategory = this.restangular.all('category');
    baseCategory.getList().subscribe(data => {
    this.catt = data.filter(res=>res.categories);
    console.log(this.catt)
    return this.catt;
  });

  let baseRequest = this.restangular.all('category');
  baseRequest.getList().subscribe(data => {
  this.reqq = data.filter(res=>res.requesttype);
  console.log(this.reqq)
  return this.reqq;
  });

  let basesetting = this.restangular.all('category');
  basesetting.getList().subscribe(data => {
  this.set = data.filter(res=>res.settings);
  console.log(this.set)
  this.categoryy();

  return this.set;
});

  let baseAll = this.restangular.all('category');
  baseAll.getList({employee_id:this.getuser.employee_OId}).subscribe(data => {
  this.allss = data.filter(res=>res.allservicereq);
  console.log(this.allss)
  console.log(this.allss[0].allservicereq[0].status)
  this.fetch();

  return this.allss;
  });
  var baseOfficial = this.restangular.all('createemployee');
    baseOfficial.getList().subscribe(data => {
      this.officiald = data
      console.log(this.officiald)
      return this.officiald;
    });

  this.form = this.formBuilder.group({
    reqfor: [null, Validators.required],
    categori: [null, Validators.required],
    reqtype: [null, Validators.required],
    priori: [null, Validators.required],
    descc: [null, Validators.required],
    attach:[null, Validators]

  });
  }

}

