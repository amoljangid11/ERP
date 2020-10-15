import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MdChipsModule} from '@angular/material';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {MdInputModule} from '@angular/material';
import { Md2Dialog } from 'md2';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';


import {MdTabsModule} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
 
@Component({
  selector: 'app-currency-conversions',
  templateUrl: './currency-conversions.component.html',
  styleUrls: ['./currency-conversions.component.css']
})
export class CurrencyConversionsComponent implements OnInit {



  constructor(private restangular: Restangular) {
   this.conversion=this
  }

conversion
currency
currencycon
obj={currency_conversion:[{}]}

editicon:any;

show;
datas;
base;
updates=false;

messageClass
message
edited=false;
deleted=false;

open(dialog: Md2Dialog) {
  dialog.open();
  }
  
  close(dialog: any) {
  dialog.close();
  }

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


formControl = new FormControl('hello', Validators.required);

save(obj)
{
  var msg=this.conversion
  var create=this.restangular.one('general')
  create.currency_conversion=[]
  create.currency_conversion.push(obj.currency_conversion[0]);
  console.log(create)
  create.save().toPromise().then(res=> {

  this.restangular.all('general').getList().subscribe(data=>{this.currencycon=data.filter(res=>res.currency_conversion)})
   msg.savemsg('Added Succesfully','alert alert-info');
   });  
  this.obj={currency_conversion:[{}]}

  this.show=false;

}

cancel(){
  this.obj={currency_conversion:[{}]} 
}

  gcodeform = new FormControl('', [
     Validators.required]);
 genderform = new FormControl('', [
     Validators.required]);

delete(d,i){
  var delmsg=this.conversion
  d.remove();
  this.currencycon.splice(i,1);
  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
}


edit(d)
{
  this.updates=true;
  this.obj=d;
 }

 view(work){
  // this.updates=true;
  this.obj=work

}

update(detail)
{
  detail.save().toPromise().then(function(resp) {
   console.log(resp)
  })
  this.obj={currency_conversion:[{}]}

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
