import { Component, OnInit } from '@angular/core';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';
import {UserService } from '../user.service';
import { Pipe, PipeTransform } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import {NgPipesModule} from 'ngx-pipes';
import {MdDialogModule} from '@angular/material';
import { Md2Dialog } from 'md2';
import { Router} from '@angular/router';
import { DataSet } from 'ng2-smart-table/lib/data-set/data-set';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
selector: 'app-site-config',
templateUrl: './site-config.component.html',
styleUrls: ['./site-config.component.css']
})
export class SiteConfigComponent implements OnInit {

  form: FormGroup;
employeecode:any;
selectedValue: any;
dateValue:any;
timeValue:any;
zoneValue:any;
country3:any;
state3:any;
city2:any;
passwordValue:any;
statusvalue:any;
postalcode:any;
currencyname:any;
currencycode:any;
datas;
timezone;
description;
hey;
data;
datas1;
datas2;
datas3;
states;
state;
citi;
countri;
citys;
currency_all;
time_val;
site_t;
identitycode;
wcode;
curr;
add;
show;

formControl = new FormControl('hello', Validators.required);

today: number = Date.now();

site = {siteconfig:[{}]};
currency={currencies:[{}]};

open(dialog: Md2Dialog) {
dialog.open();
}

close(dialog: any) {
dialog.close();
}
state1;

// save(){
// console.log(this.employeecode)
// const site={
// employeecode:this.employeecode,
// dateformat:this.dateValue,
// currency:this.selectedValue,
// time:this.timeValue,
// defaulttime:this.zoneValue,
// country:this.countryvalue,
// state:this.state1,
// city:this.city2,
// defaultpassword:this.passwordValue,
// employeestatus:this.statusvalue,
// postalcode:this.postalcode,
// } 
// this.datas.post(site);
// }

edit(editdata)
{
  console.log(editdata)
  this.site=editdata;

}

save(data)
{
  console.log(data)
var create=this.restangular.one('siteconfig')
create.siteconfig=[]
create.siteconfig.push(data.siteconfig[0]);
create.siteconfig[0].country3=this.country3;
create.siteconfig[0].state3=this.state3;
create.siteconfig[0].city2=this.city2;
console.log(create)
create.save().toPromise().then(res=> {

this.restangular.all('siteconfig').getList().subscribe(data=>{
  this.datas=data.filter(res=>res.siteconfig);
  if(this.datas[0])
       {console.log("edit")
         this.site=this.datas[0]
         this.add=false
       }else{
         console.log("add")
       }})
 });  
this.site={siteconfig:[{}]};
}

update(obj)
{
console.log(obj)

obj.save();
this.show=!this.show;
}

savechanges(val){ 
	var create=this.restangular.one('general')
	create.currencies=[]
	create.currencies.push(val.currencies[0])
	create.save().toPromise().then((res)=>{
	   this.restangular.all('general').getList()
					 .subscribe(data=>{this.currency_all=data.filter(res=>res.currencies)})
	});
	this.currencyname="";
     this.currencycode="";
     this.ngOnInit();
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


sall;country1;statearry;addst;call;assci;cityarry
selectstate()
{
  var state3=[];
  state3=this.sall.filter(data=> data.countryallid == this.country1)
  console.log(state3,'jjj'); 
/*  this.ste=dts[i].countryvalue;
  console.log(this.ste,'llllpoo');*/
  this.statearry= state3;
   return this.statearry;
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

select1(gt1){
		this.restangular.all('city').getList({"state2":gt1}).subscribe(res=>
	  {
		this.cityarry=res,console.log(gt1)
	  })
	return this.cityarry;
	}

	// transformDate(date) {
	// 	this.datePipe.transform(this.dateValue, 'yyyy-MM-dd'); //whatever format you need. 
	//   }


dates=[
{value:'American month, day and year'},
{value:'Four digit year, month and day with slashes'},
{value:'Year, month and day with dashes'},
{value:'Day, month and four digit year with dots'}
];

// dateFormat(){
// 	for(var i:any=0;i<=this.dates.length;i++){
// 		if(this.dates[0]==this.dateValue)
// 		{
//           return this.dateValue
// 		}
// 	}
// }

times=[
{value:'Hours only with meridian'},
{value:'Hours, minutes and with meridian'},
{value:'Hour, minutes and seconds with meridian'},
{value:'Hours and minutes,24 Hours Notation'},
{value:'Hour, minutes and seconds, 24Hours Notation'}
]

pswds=[
{value:'Only Numbers'},
{value:'Numbers and special characters'},
]



cntry=[];


constructor(private userservice:UserService,private restangular: Restangular,private router:Router,private formBuilder: FormBuilder) { }

ngOnInit() {

var baseUnits= this.restangular.all('identitycodes',);
baseUnits.getList().subscribe( data=>{
this.identitycode=data[0];
console.log(this.identitycode)

this.employeecode=this.identitycode.empcode;
return this.identitycode;
});

var basesat=this.restangular.all('states');
basesat.getList().subscribe(data=>{
  this.state=data;
  console.log(this.state,'hjeqh')
  return this.state;
});


var basecity=this.restangular.all('city')
basecity.getList().subscribe(data=>{
this.citi=data;
return this.citi;
});

let baseUnit= this.restangular.all('general',);
baseUnit.getList().subscribe( data=>{
this.currency_all=data.filter(res=>res.currencies);
  return this.currency_all;
 });

var basecon=this.restangular.all('countries');
basecon.getList().subscribe(data=>{

  this.countri=data;
  return this.countri; 
});

let baseStatus = this.restangular.all('employeeconfiguration');
baseStatus.getList().subscribe(data => {
this.wcode = data.filter(res=>res.employmentstatus);
console.log(this.wcode)
});


let baseWork = this.restangular.all('siteconfig');
baseWork.getList().subscribe(data => {
data = data.filter(res=>res.siteconfig);
// console.log(this.orgn)
this.datas=data[0]
console.log(this.datas)

if(this.datas)
{console.log("edit1")

 this.site=data[0]
  console.log(this.site)
}else{
  console.log("add1")
  this.add=true;
}

});


// var data=this.restangular.all('siteconfig');
//  console.log(data)
//  data.getList().subscribe(val =>{
//  this.datas=val;
// });

this.form = this.formBuilder.group({
  empcode: [null, Validators],
  tmzone: [null, Validators],
  pwd: [null, Validators],
  curr: [null, Validators],
  count: [null, Validators],
  sts: [null, Validators],
  dtval: [null, Validators],
  state: [null, Validators],
  post: [null, Validators],
  tval: [null, Validators],
  cityy: [null, Validators],
});

var time=this.restangular.all('timeall')
time.getList().subscribe(data=>{
	this.time_val=data;
})
 var site_time=this.restangular.all('sitetime')

site_time.getList().subscribe(data=>{
	this.site_t=data;

})
return this.datas;
}


human(){
    this.router.navigate(['./setuproot',{outlets:{secondchild:['human-resource'], thirdchild:['employee']}}])
    this.ngOnInit();  
};

module(){
 this.router.navigate(['./wizard',{outlets:{frstchild:['module']}}])
 this.ngOnInit();
};
organization(){
  this.router.navigate(['./wizard',{outlets:{frstchild:['business_unit']}}])
  this.ngOnInit();
};


}