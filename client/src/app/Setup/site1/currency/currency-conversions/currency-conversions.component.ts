import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MdChipsModule} from '@angular/material';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {MdInputModule} from '@angular/material';

import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';


import {MdTabsModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
 
@Component({
  selector: 'app-currency-conversions',
  templateUrl: './currency-conversions.component.html',
  styleUrls: ['./currency-conversions.component.css']
})
export class CurrencyConversionsComponent implements OnInit {
currency
currencycon
obj={}

editicon:any;

show;
datas;
base;
editRowId;


formControl = new FormControl('hello', Validators.required);

save(obj)
{
  console.log(obj)
var create=this.restangular.one('general')
create.currency_conversion=[]
create.currency_conversion.push(obj);
console.log(create)
create.save().toPromise().then(res=> {

this.restangular.all('general').getList().subscribe(data=>{this.currencycon=data.filter(res=>res.currency_conversion)})
 });  
this.obj={}

this.show=false;

}


  constructor(private restangular: Restangular) {

  }

  gcodeform = new FormControl('', [
     Validators.required]);
 genderform = new FormControl('', [
     Validators.required]);

 remove(d,i): void {

    console.log(d);

        d.remove();
        console.log(d)
        this.datas.splice(i,1);
    
      
    }

toggle(id)
{
  this.editRowId = id;
 }

edit(id)
{
   this.editRowId=id;
 }

update(d)
{
   this.editRowId=false;
   console.log(d)

   d.save();

}





  ngOnInit() {
    
 
    var baseUnits= this.restangular.all('general',);
   baseUnits.getList().subscribe( data=>{
   this.currency=data.filter(res=>res.currencies);
   console.log(this.currency)

    });

  var baseUnits1= this.restangular.all('general',);
   baseUnits1.getList().subscribe( data=>{
   this.currencycon=data.filter(res=>res.currency_conversion);

 
    });

  }
}
