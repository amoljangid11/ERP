import { Component, OnInit } from '@angular/core';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';

@Component({
  selector: 'app-geo-groups',
  templateUrl: './geo-groups.component.html',
  styleUrls: ['./geo-groups.component.css']
})
export class GeoGroupsComponent implements OnInit {


constructor(private userservice:UserService,private restangular: Restangular)
   { 
   	 
   }
cuur;
geocode:any;
georegion:any;
d_geogroup:any;
geocity:any;
geogroup:any;
selectedValue:any;
currencyname:any;
currencycode:any;
curdes:any;

currencyName;
currencyCode;
currencydesc;
allcur;
datas;
currencyall;
currency={}
editRowId;
curr;


edit(id){
this.editRowId = id;

}
save(){

  const sitegeo={
    geographycode:this.geocode,
    defaultgeogroup:this.d_geogroup,
    geographygroup:this.geogroup,
    geographyregion:this.georegion,
    currency:this.selectedValue,
    geographycity:this.geocity,
  }
  this.datas.post(sitegeo).toPromise().then(resp=>{
  console.log(resp);
  this.datas.push(resp);
  }); // POST value
    this.geocode="";
    this.d_geogroup="";
    this.geogroup="";
    this.georegion="";
    this.selectedValue="";
    this.geocity="";
    this.editRowId=false;

}


savechanges(obj){
  console.log(obj)
var create=this.restangular.one('general')
create.currencies=[]
create.currencies.push(obj);
console.log(create)
create.save().toPromise().then(res=> {

this.restangular.all('general').getList().subscribe(data=>{this.curr=data.filter(res=>res.currencies)})
 });  
this.currency={}

}

delete(d,i){
  d.remove();
  this.datas.splice(i,1);
}


ngOnInit() {

  let baseCurr = this.restangular.all('general');
  baseCurr.getList().subscribe(data => {
  this.curr = data.filter(res=>res.currencies);
  console.log(this.curr)
  });

  let baseGeo = this.restangular.all('geo');
  baseGeo.getList().subscribe(data => {
  this.datas = data;
  console.log(baseGeo);
  return baseGeo;
  });

  

  }
 
}
