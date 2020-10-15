import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {MdChipsModule} from '@angular/material';
import {UserService } from '../../../user.service';
import { Restangular } from 'ngx-restangular';
import { Router} from '@angular/router';
import { Md2Dialog } from 'md2';

@Component({
selector: 'app-business-units',
templateUrl: './business-units.component.html',
styleUrls: ['./business-units.component.css']
})
export class BusinessUnitsComponent implements OnInit {

constructor(private userservice:UserService,private restangular: Restangular,private router:Router,private formBuilder: FormBuilder) { }
form: FormGroup;
form1: FormGroup;
form2: FormGroup;
form3: FormGroup;
form4: FormGroup;



public urlForm: FormGroup;

bunits={businessunits:[{}]}
updatebutton = false;
bunit;

messageClass
message
deleted = false;
edited=false;

editRowId;
bname:any;
zValue:any;
street1:any;
bcode:any;
street2:any;
bdescripe:any;
street3:any;
starton:any;
cValue:any;
sValue:any;
countryValue:any;
stateValue:any;
cityValue:any;
zones;
data;
datas;
datas2;
states;
citys;
datas1:any;
datas3;
datas4;
ste;
statearry:any;
cty;
cityarry;
city2;
country2;
state2;
timezone;
description;
time_val;
site_t;
selectedValue: string;
codevalue;
code;
codeva;
state1;
city3;
country1;
country3;
state3;
addst;
assci;
all;
zoneValue;

state;
sarray;
countri;
sall;
s2;
citi;
conall;
call;

dialogHeader: string = 'Lorum Ipsum';

open(dialog: Md2Dialog) {
dialog.open();
}

close(dialog: any) {
dialog.close();
}


save(bus){
console.log(bus)
var create=this.restangular.one('businessunit')
create.businessunits=[]
create.businessunits.push(bus.businessunits[0])
console.log(create)
create.save().toPromise().then(res=>{
 console.log(res)
 this.restangular.all('businessunit').getList()
                 .subscribe(data=>{this.bunit=data.filter(res=>res.businessunits)})

    this.edited=true;
    this.messageClass='alert alert-info ';
    this.message="Added Successfully";
    setTimeout(function() {
       this.edited = false;
       console.log(this.edited);
   }.bind(this), 1500);

})


this.bunits={businessunits:[{}]};

}

cancel(){
  this.bunits={businessunits:[{}]};
}

edit(emp) {
    this.updatebutton = true;
    this.bunits= emp
}

update(busunit)
{
   var the=this
   console.log(busunit)
   busunit.save().toPromise().then(function(resp) {
   console.log(resp)
   the.restangular.all('businessunit').getList({"businessunit_id":resp._id}).subscribe(res=>{
     console.log(res)
     res.forEach(data=>{
       console.log(busunit.businessunits[0].name)
       data.department[0].businessunit=busunit.businessunits[0].name
       console.log(data)
       data.save();
     })
     

   })
  })
   this.bunits={businessunits:[{}]};
   
}

deletemsg()
{
  console.log(this.deleted)
    this.deleted=true;
    this.messageClass='alert alert-danger ';
    this.message="Deleted Successfully";
    setTimeout(function() {
       this.deleted = false;
       console.log(this.deleted);
   }.bind(this), 1500);
}


delete(bu,i){
bu.remove().toPromise().then(function(resp,err) {
    console.log(resp)
  })
this.bunit.splice(i,1);
  this.deletemsg()
}


savechang(){
  const time_save={
  timezone:this.timezone,
  description:this.description
}
this.site_t.post(time_save).toPromise().then(item=>{

  this.site_t.push(item);
})
this.timezone="";
this.description="";
}


selectcoun(cou){
/*console.log(country)
  var state3=[];
  state3=this.state.filter(data=> data.country1 == country)
  console.log(state3)
  console.log(this.state,'jjj');
  this.sarray= state3;*/
  this.restangular.all('states').getList({"country1":cou}).subscribe(res=>
  {
    this.sarray=res,console.log(this.sarray)
  })

return this.sarray;
}

 select1(gt1){
/*var citys=[];
console.log(state)
citys=this.citi.filter(res => res.state2[0] == state)


console.log(citys)

this.cityarry=citys;
console.log(this.cityarry)*/
this.restangular.all('city').getList({"state2":gt1}).subscribe(res=>
  {
    this.cityarry=res,console.log(gt1)
  })
return this.cityarry;
}

selects(i,gy){
  console.log(i,'iiii')

console.log(gy,'hghgg');
this.codevalue=gy[i].code;
console.log(this.codevalue,'here');

};


  saves(){

const countryval = {

countryvalue:this.selectedValue,
codevalue:this.codevalue
}
console.log(this.countri);

this.countri.post(countryval).toPromise().then(resep=>{

this.countri.push(resep);

});

this.selectedValue="";
this.codevalue="";
}
   selectstate(){

  var state3=[];
  state3=this.sall.filter(data=> data.countryallid == this.country1)
  console.log(state3,'jjj'); 
/*  this.ste=dts[i].countryvalue;
  console.log(this.ste,'llllpoo');*/
  this.statearry= state3;
   return this.statearry;
}
savestate(){

const sa={
country1:this.country1,
state1:this.state1
}

 this.state.post(sa).toPromise().then(resep=>{

  console.log(resep,'hwdf')
  //this.save();
this.state.push(resep);
});
this.country1="";
this.state1="";
/*window.location.reload();*/
}

selectst(){
var state4=[];
state4=this.state.filter(data=> data.country1 == this.country3)
console.log(state4)
this.addst=state4;

return this.addst
}

selectcity(){
var city04=[];
city04=this.call.filter(data => data.stateallid == this.state3)

/*this.cty=gtd1[i];
console.log(this.cty)
*/
console.log(city04)
console.log(this.state3)
console.log(this.call)

this.assci=city04;

return this.assci;

}
saveci(){
const citys={
country2:this.country3,
state2:this.state3,
city2:this.city3,
}

 this.citi.post(citys).toPromise().then(resep=>{
this.citi.push(resep);
});
 this.country3=" ";
 this.state3=" ";
 this.city3=" ";
}




ngOnInit() {
          var time=this.restangular.all('timeall')
          time.getList().subscribe(data=>{
          this.time_val=data;
          })

          var site_time=this.restangular.all('sitetime')
          site_time.getList().subscribe(data=>{
          this.site_t=data;
          });

var basecountryal=this.restangular.all('countryall')
basecountryal.getList().subscribe(data=>{
this.conall=data;


})

 var basecon=this.restangular.all('countries');
basecon.getList().subscribe(data=>{

  this.countri=data;
  return this.countri; 
});
 


var sat_al=this.restangular.all('stateall');
sat_al.getList().subscribe( data1=>{

this.sall=data1;
console.log(this.sall,'aaaaaa')
return this.sall;
});

var basesat=this.restangular.all('states');
basesat.getList().subscribe(data=>{
  this.state=data;
  console.log(this.state,'hjeqh')
  return this.state;
});

var basecit=this.restangular.all('cityall');
basecit.getList().subscribe(data=>{
  this.call=data;

  console.log(this.call,'hjeqh')
  return this.call;
 
});

var basecity=this.restangular.all('city')
basecity.getList().subscribe(data=>{

this.citi=data;
return this.citi;

});
          let baseBusiness = this.restangular.all('businessunit');
          baseBusiness.getList().subscribe(data => {
          this.bunit =data.filter(res=>res.businessunits);
          console.log(this.bunit)
         
          return this.bunit;
          

          
          });

          this.form = this.formBuilder.group({
            name: [null, Validators.required],
            tzone: [null, Validators.required],
            add1: [null, Validators.required],
            codes: [null, Validators.required],
            country1: [null, Validators.required],
            des: [null, Validators],
            state1: [null, Validators.required],
            starton: [null, Validators],
            cityss: [null, Validators]

          });


          this.form1 = this.formBuilder.group({
            time1: [null, Validators.required],
            desc: [null, Validators]
          });

          this.form2 = this.formBuilder.group({
            coun: [null, Validators.required],
            councd: [null, Validators]
          });

          this.form3 = this.formBuilder.group({
            coun1nm: [null, Validators.required],
            statnm: [null, Validators.required]
          });

          this.form4 = this.formBuilder.group({
            coun2nm: [null, Validators.required],
            citynm: [null, Validators.required],
            stat1nm: [null, Validators.required]
          });
          }
          }