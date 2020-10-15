import { Component, OnInit } from '@angular/core';
import {Restangular } from 'ngx-restangular';
import {CountriesComponent } from '../countries/countries.component';

@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {
datas;
datas1;
country1;
state1;
ste;
statearry;
datas2;


select(i,dt){

console.log(this.country1)
	var state3=this.datas1.filter(data=> data.countryallid===this.country1)
	console.log(state3)
	console.log(dt,'jjj');
	this.ste=dt[i].countryvalue;
	console.log(this.ste,'llllpoo');
/*for(var i:any=0;i<this.datas1.length;i++){

	console.log(i)

if(this.ste==this.datas1[i].countryallid){
	console.log('jfqjkfhjasf')

state3.push(this.datas1[i].statename);

	console.log(state3);
}


}*/
	this.statearry= state3;

return this.statearry;
}

save(){

console.log(this.state1)
const sat={
country1:this.country1,
state1:this.state1.statename
}

 this.datas2.post(sat).toPromise().then(resep=>{

  console.log(resep,'hwdf')

this.datas2.push(resep);
})
this.country1="";
this.state1="";
/*window.location.reload();*/
}

remove(state,i){
state.remove();
this.datas2.splice(i,1);
}




  constructor(private restangular: Restangular,public country:CountriesComponent) { }

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
