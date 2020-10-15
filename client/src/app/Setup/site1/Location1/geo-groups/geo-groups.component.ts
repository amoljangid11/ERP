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
Currencyn;
currencyc;
desc;
editRowId;


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


savechanges(){
const currencyd={
  currencyname:this.Currencyn,
  currencycode:this.currencyc,
  desc:this.desc
   };

  this.currencyall.post(currencyd).toPromise().then(resp=>{
          console.log(resp);
          this.currencyall.push(resp);
});

  this.Currencyn="";
  this.currencyc="";
  this.desc="";

}
remove(d,i){
console.log(d)
d.remove();
this.datas.splice(i,1);
}


update(d){
  this.editRowId=false;
console.log(d);
d.save();
}







constructor(private userservice:UserService,private restangular: Restangular)
   { 
   	 
   }

  ngOnInit() {
     var basecurrency= this.restangular.all('currencyall');
    console.log(basecurrency);
  basecurrency.getList().subscribe(data=>{
    console.log(data)
   this.currencyall=data;
    console.log(this.currencyall,'jfj')
    
     return this.currencyall;

    });


  	let baseGeo = this.restangular.all('geo');

    // This will query /geo and return a observable.
    baseGeo.getList().subscribe(data => {
      this.datas = data;
      console.log(baseGeo);
       return baseGeo;
    });

    let base = this.restangular.all('siteCurrency');

    // This will query /geo and return a observable.
    base.getList().subscribe(data => {
      this.allcur = data;
      console.log(base);
       return base;
    });
  }
 
}
