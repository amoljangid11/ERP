import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {EmployeeComponent } from '../employee.component';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../../user.service';
import { Md2Dialog } from 'md2';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-emp-workeligibility',
  templateUrl: './emp-workeligibility.component.html',
  styleUrls: ['./emp-workeligibility.component.css']
})
export class EmpWorkeligibilityComponent implements OnInit {



constructor(private router:Router,private restangular:Restangular,public service:UserService,private formBuilder: FormBuilder) 
{ this.workeligible=this; }
workeligible;
form: FormGroup;
form1: FormGroup;
form2: FormGroup;
form3: FormGroup;
form4: FormGroup;
document={};
eligibility={workeligibility:[{}]};
datas;
work={};
employee = { workeligibility: [{}] };
employeedata;
codatas;
datas1;
datas2;
states;
datas3;
citys;
country:any;
countrycode:any;
countryvalue:any;
statename:any;
countries:any;
cityname:any;
statevalue:any;
statearry:any;
state2;
cityarry:any;
fvalue;
authoritycountry;
messageClass
message
edited=false;

auth = [
  {value: '0', viewValue: 'Country'},
  {value: '1', viewValue: 'State'},
  {value: '2', viewValue: 'City'},
];

open(dialog: Md2Dialog) {
  dialog.open();
}

close(dialog: any) {
  dialog.close();
}

view(data) 
{

  this.service.viewworkeli(data);
}
viewworkele(data) {
  this.service.editworkeligibily(data);
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['emp_workeligiblity']}}]}}])
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

doctype(val)
{
  console.log(val.workeligibility[0])
  this.fvalue=val.workeligibility[0].issuing_authority
  console.log(this.fvalue)
}

savedocument(eligibility){
  var create= this.restangular.one('employeeconfiguration');
  create.workeligibility=[];
  create.workeligibility.push(eligibility.workeligibility[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('employeeconfiguration').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.workeligibility)})
  })
  this.eligibility={workeligibility:[{}]};
}

selecttype(datas)
{
  console.log(datas)
  console.log(this.work)
}


save(employee) {
  console.log(employee)
  var msg=this.workeligible;
  employee.workeligibility[0].issuing_authority=this.fvalue;
  var create =this.service.editdata;
  console.log(create)
  if(undefined==create.workeligibility || create.workeligibility.length==0)
  {
    create.workeligibility=[];
    create.workeligibility.push(employee.workeligibility[0])
    create.save().toPromise().then(function(resp) {
    console.log(resp)
    msg.savemsg('Added Succesfully','alert alert-info');
    })
  }else{
  console.log(this.employee.workeligibility[0])
  if(this.fvalue=="State")
  {
    employee.workeligibility[0].authoritycity=""
  }
    this.employeedata.workeligibility[0]=this.employee.workeligibility[0]
    this.employeedata.save().toPromise().then(function(res) {
    console.log(res)
    msg.savemsg('Added Succesfully','alert alert-info');
    })
  }
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

savecountry(){
  const countryval = {
  countryal:this.country,
  code:this.countrycode
  }
  console.log(this.datas1);
  this.datas1.post(countryval).toPromise().then(resep=>{
  this.datas1.push(resep);
  });
  this.country="";
  this.countrycode="";
}

savestate(){
  const country1 = {
  countryallid:this.countryvalue,
  statename:this.statename
  }
  console.log(this.datas2);
  this.datas2.post(country1).toPromise().then(resp=>{
  this.datas2.push(resp);
  });
  this.countryvalue="";
  this.statename="";
  }

savecity(){
  const country1 = {
  countryallid:this.countries,
  stateallid:this.statevalue,
  cityname:this.cityname
  }
  console.log(this.datas3);
  this.datas3.post(country1).toPromise().then(resp=>{
  this.datas3.push(resp);
  });
  this.countries="";
  this.statevalue="";
  this.cityname="";
}

selectcountry(cou){

  this.restangular.all('stateall').getList({"countryallid":cou}).subscribe(res=>
  {
  this.statearry=res,console.log(cou)
  })
  return this.statearry;
}

selectstate(st){
  this.restangular.all('cityall').getList({"stateallid":st}).subscribe(res=>
  {
  this.cityarry=res,console.log(st)
  })
  return this.cityarry;
}

  ngOnInit() {


if(undefined!=this.service.editdata.workeligibility && this.service.editdata.workeligibility.length>0)
    {
     console.log(this.service.editdata.workeligibility)
     this.employeedata=this.service.editdata;
     this.employee.workeligibility[0]=this.service.editdata.workeligibility[0];
     console.log(this.employee)
     this.select(this.service.editdata.workeligibility.country)
     this.select1(this.service.editdata.workeligibility.state)
     this.doctype(this.service.editdata)
     
    
     //this.doctype(this.service.editdata.workeligibility)
    }


    let baseWork = this.restangular.all('employeeconfiguration');
    baseWork.getList().subscribe(data => {
    this.datas = data.filter(res=>res.workeligibility);
    console.log(this.datas)
    });

    var city=this.restangular.all('cityall')
    console.log(city)
    city.getList().subscribe(data=>{
    this.datas3=data;
    console.log(this.datas3)
    });

    var state=this.restangular.all('stateall')
    console.log(state)
    state.getList().subscribe(data=>{
    this.datas2=data;
    });

   var country=this.restangular.all('countryall')
   console.log(country)
   country.getList().subscribe(data=>{
   this.datas1=data;
   });
    //form submit validation
    this.form = this.formBuilder.group({
      type: [null, Validators],
      auth: [null, Validators],
      authstate: [null, Validators],
      issudate: [null, Validators],
      pcode: [null, Validators],
      authcity: [null, Validators],
      expdate: [null, Validators],
      authcountry: [null, Validators],
    
    });
    //form submit validation
    this.form1 = this.formBuilder.group({
      doctype: [null, Validators],
      desc: [null, Validators],
      issueauth: [null, Validators],
    });
    //form submit validation
    this.form2 = this.formBuilder.group({
      country: [null, Validators],
      code: [null, Validators],
    });
    
    //form submit validation
    this.form3 = this.formBuilder.group({
      country: [null, Validators],
      state: [null, Validators],
    });
    
    //form submit validation
    this.form4 = this.formBuilder.group({
      country: [null, Validators],
      state: [null, Validators],
      city: [null, Validators],
    });

     //form submit validation
     this.form = this.formBuilder.group({
      type: [null, Validators],
      auth: [null, Validators],
      authstate: [null, Validators],
      issudate: [null, Validators],
      pcode: [null, Validators],
      authcity: [null, Validators],
      expdate1: [null, Validators],
      authcountry: [null, Validators]},
      {validator: this.dateLessThan('issudate', 'expdate1')}); 
  }
  dateLessThan(from1: string, to1: string) {
    return (group: FormGroup): {[key: string]: any} => {
     let f = group.controls[from1];
     let t = group.controls[to1];
     if (f.value > t.value) {
     
      document.getElementById("ExpDate")['value']=""
  
       return {
         dates: "Expiry Date Should Be Greater Than Issue Date"
       };
     }
     return {};
    }
  }

}
