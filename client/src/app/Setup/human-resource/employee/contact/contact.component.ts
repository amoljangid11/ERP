import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {EmployeeComponent } from '../employee.component';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../../user.service';
import { Md2Dialog, BlockScrollStrategy } from 'md2';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupName } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


constructor(private router:Router,private restangular:Restangular,public service:UserService,private formBuilder: FormBuilder) 
{this.contact1=this}

   abc: FormGroup;
   abc1:FormGroup;
  abc2:FormGroup;
  abc3:FormGroup;
  xyz:FormGroup;
  per:FormGroup;
  curr:FormGroup;


  Curreaddhide=false;
  Curreaddshow=true;


  private createForm() {
    this.abc = new FormGroup({
    // tslint:disable-next-line
    countcd: new FormControl('', [Validators.nullValidator]),
    countnm: new FormControl('', [Validators.required])
    });
    this.abc1 = new FormGroup({
      // tslint:disable-next-line
      countnm1: new FormControl('', [Validators.nullValidator]),
      stat: new FormControl('', [Validators.required])
      });
      this.abc2 = new FormGroup({
        // tslint:disable-next-line
        counn: new FormControl('', [Validators.nullValidator]),
        citt: new FormControl('', [Validators.required]),
        statt: new FormControl('', [Validators.nullValidator])
        });

        this.xyz = new FormGroup({
          // tslint:disable-next-line
          peraddress1:new FormControl('', [Validators.required]),
          country:new FormControl('', [Validators.required]),
          pcode:new FormControl('', [Validators.required]),
          peraddress2:new FormControl('', [Validators.nullValidator]),
          state:new FormControl('', [Validators.required]),
          peraddress3:new FormControl('', [Validators.nullValidator]),
          city:new FormControl('', [Validators.required]),

          smadd:new FormControl('', [Validators.nullValidator]),

          peraddress11:new FormControl('', [Validators.required]),
          country1:new FormControl('', [Validators.required]),
          pcode1:new FormControl('', [Validators.required]),
          peraddress21:new FormControl('', [Validators.nullValidator]),
          state1:new FormControl('', [Validators.required]),
          // state11:new FormControl('', [Validators.required]),
          peraddress31:new FormControl('', [Validators.nullValidator]),
          city1:new FormControl('', [Validators.required]),



          name: new FormControl('', [Validators.required]),
          email: new FormControl('', [Validators.required]),
          no: new FormControl('', [Validators.required]),
          relation: new FormControl('', [Validators.required]),

          name1: new FormControl('', [Validators.nullValidator]),
          email1: new FormControl('', [Validators.nullValidator]),
          no1: new FormControl('', [Validators.nullValidator]),
          relation1: new FormControl('', [Validators.nullValidator]),

          // });
          // this.xyz = new FormGroup({
            // tslint:disable-next-line
           
            // email11: new FormControl('', [Validators.required])
           
            });
            // this.per = new FormGroup({
             
            //   sadd1: new FormControl('', [Validators.nullValidator]),
            //   cu: new FormControl('', [Validators.nullValidator]),
            //   st: new FormControl('', [Validators.nullValidator]),
            //   cittt: new FormControl('', [Validators.nullValidator]),
            //   pss: new FormControl('', [Validators.nullValidator])
              
            //   });
            //   this.curr = new FormGroup({
             
            //     sadd11: new FormControl('', [Validators.nullValidator]),
            //     cu1: new FormControl('', [Validators.nullValidator]),
            //     st1: new FormControl('', [Validators.nullValidator]),
            //     cittt1: new FormControl('', [Validators.nullValidator]),
            //     pss1: new FormControl('', [Validators.nullValidator])
                
            //     });
    }
    
    
  

    contact1;
datas1;
datas2;
datas3;

country;
countrycode;
statearry:any;

state2;
cityarry:any;
ste;
cty;
cityarray:any;
statearray:any;
countryvalue:any;
statename:any;

countries:any;
cityname:any;
statevalue:any;

employeedata;
employee = { contact: {permanent_address:{},current_address:{}}};
contact={};
checked;
cit
messageClass
message
edited=false;

nullstate(a)
{
  console.log(a);
  
}

viewcon(data) {
  this.service.editcontact(data);
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['contact']}}]}}])
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

save(employee) {
  var create =this.service.editdata;
  
 var msg=this.contact1
  if(undefined==create.contact)
  {
    create.contact={};
    create.contact=employee.contact;
    // create.contact.current_address={}
    create.contact.current_address=employee.contact.current_address;
    create.contact.current_address.state=employee.contact.current_address.state
    console.log( employee.contact.current_address.state)
    create.contact.permanent_address=employee.contact.permanent_address;
    create.contact.permanent_address.state=employee.contact.permanent_address.state
    console.log( employee.contact.permanent_address.state)
    create.save().toPromise().then(function(resp) {
    console.log(resp)
    msg.savemsg('Added Succesfully','alert alert-info');
    })

  }else{
    console.log(employee.contact)
    create.contact=employee.contact;
    create.contact.current_address=employee.contact.current_address;
    create.contact.current_address.state=employee.contact.current_address.state
    console.log( employee.contact.current_address.state)
    create.contact.permanent_address=employee.contact.permanent_address;
    create.contact.permanent_address.state=employee.contact.permanent_address.state
    console.log( employee.contact.permanent_address.state)
    console.log(create)
    create.save().toPromise().then(function(resp) {
    console.log(resp)
    msg.savemsg('Added Succesfully','alert alert-info');
    })
  }
}

onchange(val)
{
  console.log(val)
}
statee
updateAddrs(event,employee)
{

  if(employee.contact.sameaddress)
  {
    employee.contact.current_address=employee.contact.permanent_address
    // employee.contact.current_address.state=employee.contact.permanent_address.state[0]
    this.selectcou(employee.contact.current_address.country)
    this.selectsta(employee.contact.current_address.state)
    console.log(employee)
    this.checked=employee.contact.sameaddress;
    console.log(employee.contact.permanent_address.country)
    console.log(employee.contact.permanent_address.state)
    console.log(employee.contact.permanent_address.city)

   this.statee= employee.contact.permanent_address.state
   this.Curreaddhide=true;
   this.Curreaddshow=false;

  }else{
    this.Curreaddhide=false;
    this.Curreaddshow=true;
    console.log(employee)
    employee.contact.current_address={}
    this.checked=employee.contact.sameaddress;

  }
}

select(obj){
  //var state=[];
  //state=this.datas2.filter(data=> data.countryallid==obj)
  this.restangular.all('stateall').getList({"countryallid":obj}).subscribe(res=>
  {
  this.statearry=res,console.log(obj)
  console.log(this.statearry)
  })
  //this.statearry=state;
  return this.statearry;
}
select1(gt1){
  console.log(this.state2)
  //var city=[];
  console.log(this.datas2)
  //city=this.datas3.filter(data => data.stateallid == gt1)
  this.restangular.all('cityall').getList({"stateallid":gt1}).subscribe(res=>
  {
    console.log(res);
  this.cityarry=res,console.log(gt1)
  })
  //this.cityarry=city;
  return this.cityarry;
}



selectcou(ct){
  console.log(ct)
  //var cstate=[];
  this.restangular.all('stateall').getList({"countryallid":ct}).subscribe(res=>
  {
  this.statearray=res,console.log(ct)
  })
  /*filter(data=>data.countryallid==ct)*/
  console.log(this.ste,'koko')
  //this.statearray=cstate;
  return this.statearray;
}

selectsta(ct1){
  //var ccity=[];
  //ccity=this.datas3.filter(data => data.stateallid == ct1)
  this.restangular.all('cityall').getList({"stateallid":ct1}).subscribe(resp=>
  {
    console.log(resp);
  this.cityarray=resp,console.log(ct1)
  })
  //this.cityarray=ccity;
  return this.cityarray;
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


view1(data) 
{

  this.service.viewcont(data);
}



ngOnInit() {

  this.createForm();

if(undefined!=this.service.editdata.contact)
    {
     this.employee=this.service.editdata;
     this.checked=this.service.editdata.contact.sameaddress
     console.log(this.checked)
     this.selectcou(this.service.editdata.contact.current_address.country)
     this.selectsta(this.service.editdata.contact.current_address.state)
     this.select(this.service.editdata.contact.permanent_address.country)
     this.select1(this.service.editdata.contact.permanent_address.state)
     
     console.log("abvvvvcccddd");
    //  console.log(this.service.editdata.contact.permanent_address.state[0])
     this.statee= this.service.editdata.contact.permanent_address.state
     console.log(this.statee)
   
     if(this.service.editdata.contact.sameaddress==true)
     {
       console.log("TRUE")
      this.Curreaddhide=true;
      this.Curreaddshow=false;  
     }
     else if(this.service.editdata.contact.sameaddress==false || !this.service.editdata.contact.sameaddress)
     {
      console.log("FALSE")
      this.Curreaddhide=false;
      this.Curreaddshow=true;
     }
 
    }

var sat=this.restangular.all('countryall');
sat.getList().subscribe(data=>{
this.datas1=data;
console.log(this.datas1)
return this.datas1;
});

this.cit=this.restangular.all('stateall');
this.cit.getList().subscribe(data=>{
this.datas2=data;
console.log(this.datas2)
return this.datas2;
});

var city=this.restangular.all('cityall')
city.getList().subscribe(data=>{
this.datas3=data;
console.log(this.datas3)
return this.datas3;
});


  }

}
