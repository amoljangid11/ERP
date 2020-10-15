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



select(i,gt){
var state=[];
this.ste=gt[i].country1;
console.log(this.ste)
for(var i:any=0; i<this.datas1.length; i++){
	console.log(i)
if(this.ste==this.datas1[i].country1){
state.push(this.datas1[i].state1[0]);
console.log(this.datas1[i].state1[0])

}
 
}
console.log(state)
this.statearry=state;
console.log(this.statearry)
return this.statearry
}

select1(i,gt1){
var city=[];
this.cty=gt1[i];
console.log(this.cty)

console.log(this.datas2)
for(var j:any=0; j<this.datas2.length;j++){


if(this.ste==this.datas2[j].countryallid){

if(this.cty==this.datas2[j].stateallid){
console.log(this.datas2[j].stateallid)

city.push(this.datas2[j].cityname);


}



}



}
this.cityarry=city;

return this.cityarry;



}



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

remove(cityval,i){
cityval.remove();
this.datas3.splice(i,1);
}



  ngOnInit() {

var sat=this.restangular.all('states');
sat.getList().subscribe(data=>{
	this.datas1=data;

	console.log(this.datas1,'hjeqh')
});

var cit=this.restangular.all('cityall');
cit.getList().subscribe(data=>{
	this.datas2=data;

	console.log(this.datas2,'hjeqh')
});

var city=this.restangular.all('city')
city.getList().subscribe(data=>{

this.datas3=data;

})



return this.datas1;
  }

}
