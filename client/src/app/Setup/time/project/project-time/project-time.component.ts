import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MdInputModule} from '@angular/material';
import { Router} from '@angular/router';
import {UserService } from '../../../../user.service';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { Md2Dialog } from 'md2';
@Component({
  selector: 'app-project-time',
  templateUrl: './project-time.component.html',
  styleUrls: ['./project-time.component.css']
})
export class ProjectTimeComponent implements OnInit {

  st=[
    { viewvalue: 'Initiated'},
    {viewvalue: 'Draft'},
    { viewvalue: 'In Progress'},
    { viewvalue: 'Hold'},
    { viewvalue: 'Completed'}
    ];

open(dialog: Md2Dialog) {
dialog.open();
}

close(dialog: any) {
dialog.close();
}

project:any;
currency:any;
type:any;
status:any;
fromdate:any;
prjdes:any;
base:any;
todate:any;
client:any;
estimate:any;
pro;
editRowId;

currencyall;
Currencyn;
currencyc;
cdesc;

cli;
datas;
datas1;
datas2;
clients;
email;
address;
phone_num;
country1;
state1;
fax;
contact;
ste;
statearry;

save(){
const p={
	projectname:this.project,
	currencyname:this.currency,
	projecttype:this.type,
	projectstatus:this.status,
	fromdate:this.fromdate,
	description:this.prjdes,
    baseproject:this.base,
	todate:this.todate,
	clientname:this.client,
    estimatehour:this.estimate,    
}

this.pro.post(p).toPromise().then((res)=> {
this.pro.push(res);
});

this.project="";
this.currency="";
this.type="";
this.status="";
this.fromdate="";
this.prjdes="";
this.base="";
this.todate="";
this.client="";
this.estimate="";

}

update(pt){
this.editRowId = false;
 pt.save();
}

edit(id){
  this.editRowId = id;
 // g.save()
}

delete(pt,i){

  pt.remove();
  console.log(pt)
  this.pro.splice(i,1);
}

savechanges()
{

  const currencyd={
      currencyname:this.Currencyn,
      currencycode:this.currencyc,
      desc:this.cdesc
   };
  console.log(currencyd)

  this.currencyall.post(currencyd).toPromise().then(resp=>{
  console.log(resp);
  this.currencyall.push(resp);
});
  this.Currencyn="";
  this.currencyc="";
  this.cdesc="";

}

select(){

  var state3=[];
    state3=this.datas1.filter(data=> data.countryallid===this.country1)
  console.log(state3,'jjj');
  
  this.statearry= state3;

return this.statearry;
}

savechange(){
const cs={
	clientname:this.clients,
	cemail:this.email,
	caddress:this.address,  
	Phone_number:this.phone_num,
	country:this.country1,
	state:this.state1,  
	fax:this.fax,  
	Point_of_contact:this.contact,  
}

this.cli.post(cs).toPromise().then((resp)=> {
this.cli.push(resp);
});

this.clients="";
this.email="";
this.address="";
this.phone_num="";
this.country1="";
this.state1="";
this.fax="";
this.contact="";
}


  constructor(private userservice:UserService,private restangular: Restangular,private router:Router) { }
tadatas;
res;


  ngOnInit() {


 /*  	 var basePro=this.restangular.all('projects');
    basePro.getList().subscribe( data=>{

    this.pro=data;
    return this.pro;
 });
    let baseTask = this.restangular.all('tasks');

    // This will query and return a observable.
    baseTask.getList().subscribe(data => {
      this.tadatas = data;
     
       return this.tadatas;
});

     var baseRes=this.restangular.all('resources');
    baseRes.getList().subscribe( data=>{

    this.res=data;
    return this.res;
 });*/


  	 var basecurrency= this.restangular.all('currencyall');
   
     basecurrency.getList().subscribe(data=>{
     this.currencyall=data;
    
     return this.currencyall;

 });

      let baseClient = this.restangular.all('client');

    // This will query and return a observable.
    baseClient.getList().subscribe(data => {
      this.cli = data;
     
       return this.cli;
});


    var sat=this.restangular.all('countryall');
    sat.getList().subscribe(data=>{

    this.datas=data; 
});

    var sat_al=this.restangular.all('stateall');
    sat_al.getList().subscribe( data1=>{

    this.datas1=data1;
    console.log(this.datas1,'aaaaaa')
})

    return this.datas1;

  }
projects(){
  this.router.navigate(['./time',{outlets:{timechild:['projects']}}])
}
  }


