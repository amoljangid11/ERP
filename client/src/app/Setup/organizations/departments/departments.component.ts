import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MdChipsModule} from '@angular/material';
import {UserService } from '../../../user.service';
import { Restangular } from 'ngx-restangular';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
 constructor(private userservice:UserService,private restangular: Restangular) { this.scope=this }
dunits={department:[{}]};
updatebutton = false;
scope;
messageClass
message
edited=false;
deleted=false;

offemp;
dunitcoll;
cValue:any;
country1:any;
countryValue:any;
stateValue:any;
cityValue:any;
city2:any;
country2:any;
state2:any;
bunit
dunit;
conall;
editRowId;
zones;
countri;

state:any;
citi;
sall;
ste;
statearry:any;
call;
cty;
cityarry;
pos;
pre;
wcode;
official;
da;
jdatas;

bunits;
timezone;
description;
time_val;
site_t;

selectedValue: string;
codevalue;
code;
codeva;
sarray;
state1;
city3;
country3;
state3;
addst;
assci;
s2:any;
rname;
rep;
open(dialog: Md2Dialog) {
    dialog.open();
  }

  close(dialog: any) {
    dialog.close();
  }

selectbusiness(b,dunits,businessunit)
{
  dunits.department[0].businessunit_id=b._id
  dunits.department[0].businessunit=b.businessunits[0].name
  console.log(dunits)

}


save(data){
  
var create=this.restangular.one('departments')
console.log(create)
var scp=this.scope
create.department=[];
create.businessunit_id=data.department[0].businessunit_id;
create.department.push(data.department[0])
create.save().toPromise().then(res=>{
 console.log(res)
 this.restangular.all('departments').getList()
  .subscribe(data=>{this.dunitcoll=data.filter(res=>res.department);})

  scp.alertmsg("alert alert-info","Added Successfully")
                  
})
this.dunits={department:[{}]};


}
alertmsg(cls,msg)
{
  this.edited=true;
    this.messageClass=cls
    this.message=msg
    setTimeout(function() {
       this.edited = false;
       console.log(this.edited);
   }.bind(this), 1500);
}

cancel(){
this.dunits={department:[{}]};
}

edit(emp) {
    this.updatebutton = true;
    this.dunits= emp
}

update(empdepend)
{
   empdepend.save().toPromise().then(function(resp) {
   console.log(resp)
  })
  this.dunits={department:[{}]};
   
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
delete(dp,i){
  dp.remove().toPromise().then(function(resp,err) {
    console.log(resp)
  })

  console.log(this.dunitcoll)
  this.dunitcoll.splice(i,1);
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


select(){
var selectstate=[];

selectstate=this.state.filter(data=> data.country1==this.country2)
/*this.ste=gt[i].country1;
console.log(this.ste)*/
/*for(var i:any=0; i<this.state.length; i++){
  console.log(i)
if(this.ste==this.state[i].country1){
state.push(this.state[i].state1[0]);
console.log(this.state[i].state1[0])

}
 
}*/
console.log(selectstate)
this.statearry=selectstate;
console.log(this.statearry)
return this.statearry
}

selectcoun(cou){

console.log(this.country2)
/*  var state3=[];
  state3=this.state.filter(data=> data.country1 == this.country2)
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
citys=this.citi.filter(res => res.state2 == this.s2)
this.cityarry=citys;*/
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
city04=this.call.filter(data => data.stateallid == this.state3[0])

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
console.log(this.citi)
});
 this.country3=" ";
 this.state3=" ";
 this.city3=" ";
}


fname:any;
role:any;
dept:any;
empid:any;
lname:any;
email:any;
rmanager:any;
position:any;
estatus:any;
prefix:any;
jtitle:any;
doj:any;


savedept(){
const off={
  firstname:this.fname, 
  role:this.role,     
  employeeid:this.empid, 
  email:this.email,  
  reporting_manager:this.rmanager, 
  position:this.position,  
  empstatus:this.estatus, 
  prefix:this.prefix, 
  jobtitle:this.jtitle,
  date_of_joining:this.doj, 
}


this.official.post(off).toPromise().then((res)=> {
this.official.push(res);
});

this.fname="";
this.role="";
this.dept="";
this.empid="";
this.email="";
this.rmanager="";
this.position="";
this.estatus="";
this.prefix="";
this.bunit="";
this.jtitle="";
this.doj="";
}

employeecode;
backgroundagency;
users;
requisition;
  

  ngOnInit() {
         
var baseOff= this.restangular.all('createemployee');
baseOff.getList().subscribe(datas=>{
this.offemp =datas.filter(res=>res.official);
console.log(this.offemp)
return this.offemp;
});

          let baseDepart= this.restangular.all('departments');
          baseDepart.getList().subscribe(data => {
            console.log(data)
          this.dunitcoll =data.filter(res=>res.department);
          return this.dunitcoll;
          
          });

           let baseBusiness= this.restangular.all('businessunit');
          baseBusiness.getList().subscribe(data => {
            console.log(data)
          this.bunit =data.filter(res=>res.businessunits);
          return this.bunit;
          
          });
        var basePre = this.restangular.all('general');
        basePre.getList().subscribe(data => {
        console.log(data)
        this.pre = data.filter(res=>res.prefixes);
        console.log(this.pre)
        return this.pre;
        });
        let baseJob = this.restangular.all('employeeconfiguration');
        baseJob.getList().subscribe(data => {
        this.jdatas = data.filter(res=>res.jobtitle);
        console.log(this.jdatas)
        });

        let baseStatus = this.restangular.all('employeeconfiguration');
        baseStatus.getList().subscribe(data => {
        this.wcode = data.filter(res=>res.employmentstatus);
        console.log(this.wcode)
        });
        var baseRole= this.restangular.all('employeeconfiguration');
        baseRole.getList().subscribe(data=>{
        this.rname=data.filter(res=>res.employeeroles);
        console.log(this.rname)
        return this.rname;
        });
        let basePosition = this.restangular.all('employeeconfiguration');
        basePosition.getList().subscribe(data => {
        this.pos = data.filter(res=>res.position);
        console.log(this.pos)
        });
        // let baseReport= this.restangular.all('employeeconfiguration');
        // baseReport.getList().subscribe(data => {
        // this.rep = data.filter(res=>res.reportingmanager);
        // console.log(this.rep)
        // });




    var baseUnits= this.restangular.all('identitycodes',);

 baseUnits.getList().subscribe( data=>{
   this.countri=data[0];
   console.log(this.countri)
    
    this.employeecode=this.countri.empcode;
this.backgroundagency=this.countri.backgroundagency;

this.users=this.countri.users;
this.requisition=this.countri.requisition;
     return this.countri;
    });
 
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
});

var basecit=this.restangular.all('cityall');
basecit.getList().subscribe(data=>{
  this.call=data;

  console.log(this.call,'hjeqh')
});

var basecity=this.restangular.all('city')
basecity.getList().subscribe(data=>{

this.citi=data;
return this.citi;

});
/*var baseEmploy= this.restangular.all('employmentstatus');
   baseEmploy.getList().subscribe(data=>{
   this.wcode=data;

    console.log(this.wcode)
    
     return this.wcode;

    });
   var baseJob= this.restangular.all('jobtitle');
   baseJob.getList().subscribe(data=>{
   this.jdatas=data;

    console.log(this.jdatas)
    
     return this.jdatas;

    });*/

/*
    var basePosition= this.restangular.all('position');
  basePosition.getList().subscribe(data=>{
   this.pos=data;

    console.log(this.pos)
    
     return this.pos;

    });
  var baseOfficial= this.restangular.all('official');
  baseOfficial.getList().subscribe(data=>{
   this.official=data;
    console.log(this.official)
    
     return this.official;

    });
    var basePre= this.restangular.all('siteprefix');
   basePre.getList().subscribe(data=>{
   this.pre=data;

    console.log(this.pre)
    
     return this.pre;

    });
   var baseDetail= this.restangular.all('employeedetails');
  baseDetail.getList().subscribe(data=>{
   this.da=data;

    console.log(this.da)
    
     return this.da;

    });*/
  }

}
