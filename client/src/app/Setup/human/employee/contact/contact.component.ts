import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { Md2Dialog } from 'md2';



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

permanent_address={};
current_address={};
checked=false;

 updateAddrs(event,permanent_address) { 
 	console.log(event)
 	this.checked=event.checked;
    if(event.checked){
console.log(permanent_address,'working')    	
    this.current_address = permanent_address;
    }
    else{
      this.current_address = '';
     
    }
  }

/* updateAddrs(event) { 
    if(event.target.checked){
      this.street1 = this.street;
    }
    else{
      this.street1 = '';
     
    }
  }*/


open(dialog: Md2Dialog) {
    dialog.open();
  }
 
  close(dialog: any) {
    dialog.close();
  }

bcountry:any;
bcode:any;



saves(){
	const coi={
	countryal:this.bcountry,
	code:this.bcode
}
this.datas1.post(coi).toPromise().then(item=>{

	this.datas1.push(item);
})
this.bcountry="";
this.bcode="";
}

scountry:any;
sstates:any;

savestate(){
	const cos={
	countryallid:this.scountry,
	statename:this.sstates
}
this.datas2.post(cos).toPromise().then(resp=>{

	this.datas2.push(resp);
})
this.scountry="";
this.sstates="";
}

country3:any;
state3:any;
cities:any;

saveci(){
	console.log(this.cicountry)
	const cou={
	countryallid:this.cicountry,
	stateallid:this.cistate[0],
	cityname:this.cicity,


}
this.datas3.post(cou).toPromise().then(res=>{

	this.datas3.push(res);
})
this.cicountry="";
this.cistate="";
this.cicity="";
}



  constructor(private restangular:Restangular) { }

datas1;
datas2;
datas3;
statearry:any;

state2;
cityarry:any;
city2;
ste;
cty;




select(i,obj){
	console.log(obj)
var state=[];
console.log(this.datas2)
state=this.datas2.filter(data=> data.countryallid==obj.countryal)
console.log(state)

console.log(this.ste,'koko')

this.statearry=state;

return this.statearry;
}


select1(i,gt1){
	console.log(this.state2)
var city=[];
console.log(this.datas2)
city=this.datas3.filter(data => data.stateallid == gt1.statename)
/*this.cty=gt1[i];
console.log(city)*/
console.log(city)

console.log(this.datas2,'uuu')

this.cityarry=city;

return this.cityarry;

}

cityarray:any;
statearray:any;

selectcou(i,ct){
	console.log(this.datas1)
var cstate=[];
cstate=this.datas2.filter(data=> data.countryallid==ct.countryal)
console.log(cstate)
	/*console.log(ct,'jjj');
this.ste=ct[i].countryallid;*/
console.log(this.ste,'koko')

this.statearray=cstate;

return this.statearray;
}

selectsta(i,ct1){
	console.log(this.state2)
var ccity=[];
console.log(this.datas2)
ccity=this.datas3.filter(data => data.stateallid == ct1.statename)
this.cty=ct1[i];
console.log(ccity)
console.log(this.cty,'iuy')

console.log(this.datas2,'uuu')

this.cityarray=ccity;

return this.cityarray;

}


statearrys:any;
cicountry:any;
cistate;
cicity:any;



select2(i,mt){
	console.log(this.datas1)
var mstate=[];
mstate=this.datas2.filter(data=> data.countryallid==this.cicountry)
console.log(mstate)
	console.log(mt,'jjj');
this.ste=mt[i].countryallid;
console.log(this.ste,'koko')

this.statearrys=mstate;

return this.statearrys;
}

/*select3(i,mt1){
	console.log(this.state2)
var mcity=[];
console.log(this.datas2)
mcity=this.datas3.filter(data => data.stateallid == this.state3)
this.cty=mt1[i];
console.log(mcity)
console.log(this.cty,'iuy')

console.log(this.datas2,'uuu')

this.cityarray=mcity;

return this.cityarray;

}*/




  ngOnInit() {

  	var sat=this.restangular.all('countryall');
sat.getList().subscribe(data=>{
	this.datas1=data;

	console.log(this.datas1,'countrys')
	return this.datas1;
});

var cit=this.restangular.all('stateall');
cit.getList().subscribe(data=>{
	this.datas2=data;

	console.log(this.datas2,'states')
	return this.datas2;
});

var city=this.restangular.all('cityall')
city.getList().subscribe(data=>{

this.datas3=data;
return this.datas3;

});






  }

}
