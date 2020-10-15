import { Component, OnInit } from '@angular/core';
import {Restangular } from 'ngx-restangular';
import {CountriesComponent } from '../countries/countries.component';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {

constructor(private restangular: Restangular,public country:CountriesComponent) {
 this.stat=this
 }

stat;
datas;
datas1;
country1;
state1;
ste;
statearry;
datas2;

messageClass
message
edited=false;
deleted=false;

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

save(){
    var msg=this.stat
	const sat={
	country1:this.country1,
	state1:this.state1.statename
	}

    this.datas2.post(sat).toPromise().then(resep=>{
	this.datas2.push(resep);
	 msg.savemsg('Added Succesfully','alert alert-info');
	})
	this.country1="";
	this.state1="";
	/*window.location.reload();*/
}

delete(state,i){
	var delmsg=this.stat
	state.remove();
	this.datas2.splice(i,1);
	delmsg.savemsg('Deleted Succesfully','alert alert-danger');
}

select(i,dt){
	var state3=[];
	state3=this.datas1.filter(data=> data.countryallid===this.country1)
	console.log(state3)
	console.log(dt,'jjj');
	this.ste=dt[i].countryvalue;
	console.log(this.ste,'llllpoo');
	this.statearry= state3;
    return this.statearry;
}


ngOnInit() {

	var sat=this.restangular.all('countries');
	sat.getList().subscribe(data=>{
	this.datas=data;
	});

	var sat=this.restangular.all('states');
	sat.getList().subscribe(data=>{
	this.datas2=data;
	})

	var sat_al=this.restangular.all('stateall');
	sat_al.getList().subscribe( data1=>{
	this.datas1=data1;
	})
	return this.datas1;


  }

}
