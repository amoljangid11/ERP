import { Component, OnInit } from '@angular/core';
import {Restangular } from 'ngx-restangular';
import {NgPipesModule} from 'ngx-pipes';
import {StatesComponent } from '../states/states.component';
import {CountriesComponent } from '../countries/countries.component';


@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

datas1:any;
datas3;
ste;
statearry:any;
datas2;
cty;
cityarry;
city2;
country2;
state2;
constructor(private restangular: Restangular,public country:CountriesComponent,public state:StatesComponent) { }




save(){

const citys={
country2:this.country2,
state2:this.state2,
city2:this.city2,
}

 this.datas3.post(citys).toPromise().then(resep=>{

	console.log(resep,'hwdf')

this.datas3.push(resep);
});
 this.country2="";
 this.state2="";
 this.city2="";
}

delete(cityval,i){
cityval.remove();
this.datas3.splice(i,1);
}


select(i,gt){
	var state=[];
	state=this.datas1.filter(data=> data.country1==this.country2)
	this.ste=gt[i].country1;
	/*var states = state.filter((x, i, a) => x && a.indexOf(x) === i);
	states=state*/
	this.statearry=state;
	return this.statearry;
}


select1(i,gt1){
	var city=[];
	city=this.datas2.filter(data => data.stateallid == this.state2)
	this.cty=gt1[i];
	this.cityarry=city;
	return this.cityarry;

}


ngOnInit() {

	var sat=this.restangular.all('states');
	sat.getList().subscribe(data=>{
	this.datas1=data;
	});

	var cit=this.restangular.all('cityall');
	cit.getList().subscribe(data=>{
	this.datas2=data;
	});
	
	var city=this.restangular.all('city')
	city.getList().subscribe(data=>{
	this.datas3=data;
	})
	return this.datas1;
  }

}
