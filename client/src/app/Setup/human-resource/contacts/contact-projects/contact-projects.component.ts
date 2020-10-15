import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {UserService } from '../../../../user.service';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { Router} from '@angular/router';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-contact-projects',
  templateUrl: './contact-projects.component.html',
  styleUrls: ['./contact-projects.component.css']
})
export class ContactProjectsComponent implements OnInit {

formControl = new FormControl('hello', Validators.required);

  constructor(private restangular:Restangular,private userservice:UserService,private router:Router, private formBuilder: FormBuilder) 
  {  this.conpro=this }
 
form: FormGroup;
form1: FormGroup;
form2: FormGroup;
conpro;
projecttime={project:[{}]};
show=false;
updatebutton=false;
datas;
cli;
pro;
projectname;
client={clients:[{}]};
messageClass
message
deleted = false;
edited=false;
currencyall;
currency={};
statearry;
cityarry;
datas1;
cit;
datas2;
c = 'Billable';

open(dialog: Md2Dialog) {
  dialog.open();
}

close(dialog: any) {
  dialog.close();
}


status = [
  {value: 'Initiated'},
  {value: 'Draft'},
  {value: 'In Progress'},
  {value: 'Hold'},
  {value: 'Completed'}
];

save(projecttime)
{
// projecttime.project[0].code=this.projectname;
  var create = this.restangular.one('project_time');
  create.project = [];
  create.project.push(projecttime.project[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('project_time').getList()
  .subscribe(data=>{this.pro=data.filter(res=>res.project)})
    this.edited=true;
    this.messageClass='alert alert-info ';
    this.message="Added Successfully";
    setTimeout(function() {
      this.edited = false;
      console.log(this.edited);
    }.bind(this), 1500);

});
//this. projecttime={project:[{}]};
}

cancel(){
  this. projecttime={project:[{}]};
  this.ngOnInit();
}

edit(pro){
  this.updatebutton=true;
  this.projecttime=pro
}
view(dataall) {
  // this.updatebutton = true;
  this.projecttime= dataall
//   this.i=i;
}


update(contactproject)
{
  contactproject.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this. projecttime={project:[{}]};
}

delete(pro,i){
  if(confirm("Are you sure! you want to delete this data")){
  pro.remove().toPromise().then(function(resp,err) {
  console.log(resp)
  })
  this.pro.splice(i,1);
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

savecurrency(obj){
  var create=this.restangular.one('general')
  create.currencies=[]
  create.currencies.push(obj)
  create.save().toPromise().then((res)=>{
  this.currencyall.push(res)
  });
    console.log(create)
    this.currency={}
}

saveclient(data)
{
  var create= this.restangular.one('contacts');
  create.clients=[];
  create.clients.push(data.clients[0])
  create.save().toPromise().then(res=>{
  console.log(res)
    this.restangular.all('contacts').getList()
    .subscribe(data=>{this.cli=data.filter(res=>res.clients)})
    })
    this.client={clients:[{}]};
  }

  select(obj){
    this.restangular.all('stateall').getList({"countryallid":obj}).subscribe(res=>
    {
    this.statearry=res,console.log(obj)
    })
    return this.statearry;
  }

  select1(gt1){
    this.restangular.all('cityall').getList({"stateallid":gt1}).subscribe(res=>
    {
    this.cityarry=res,console.log(gt1)
    })
    return this.cityarry;
}

ngOnInit() {

/*  if(this.userservice.editproject)
         {  const key=Object.keys(this.userservice.editproject)
           if(key.length!=0)
           {
            
             this.projecttime=this.userservice.editproject;
             this.updatebutton=false;
           }
         }*/

var basePro=this.restangular.all('project_time');
basePro.getList().subscribe( data=>{
this.pro=data;
return this.pro;
});

let basecli = this.restangular.all('contacts');
basecli.getList().subscribe(data => {
this.cli = data.filter(res=>res.clients);
console.log(this.cli)
});

var basecurrency= this.restangular.all('general');
basecurrency.getList().subscribe(data=>{
this.currencyall=data.filter(res=>res.currencies);;
return this.currencyall;
});

var sat=this.restangular.all('countryall');
sat.getList().subscribe(data=>{
this.datas1=data;
return this.datas1;
});

this.cit=this.restangular.all('stateall');
this.cit.getList().subscribe(data=>{
this.datas2=data;
return this.datas2;
});


  //form1
this.form1 = this.formBuilder.group({
  cli: [null, Validators.required],
  email: [null, Validators],
  add: [null, Validators],
  no: [null, Validators],
  coun: [null, Validators],
  fax: [null, Validators],
  sta: [null, Validators],
  point: [null, Validators.required],
});

this.form2 = this.formBuilder.group({
  curr: [null, Validators.required],
  code: [null, Validators.required],
  desc: [null, Validators],
});

//form submit validation
this.form = this.formBuilder.group({
  project: [null, Validators.required],
  status: [null, Validators.required],
  base: [null, Validators],
  client: [null, Validators.required],
  currency: [null, Validators.required],
  type: [null, Validators],
  fromdate: [null, Validators],
  todate: [null, Validators],
  hour: [null, Validators],
  desc: [null, Validators]},
  {validator: this.dateLessThan('fromdate', 'todate')});
}
dateLessThan(from1: string, to1: string) {
  return (group: FormGroup): {[key: string]: any} => {
   let f = group.controls[from1];
   let t = group.controls[to1];
   if (f.value > t.value) {

    document.getElementById("ToDate")['value']=""

     return {
       dates: "To Date Should Be Greater Than From Date"
     };
   }
   return {};
  }
}


}