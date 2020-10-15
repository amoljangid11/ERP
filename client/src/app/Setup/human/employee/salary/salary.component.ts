import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {

pays;
currencyall;
account;
allAccounts;

open(dialog: Md2Dialog) {
    dialog.open();
  } 
 
  close(dialog: any) {
    dialog.close();
  }

  constructor(private restangular:Restangular) { }

currency:any;
currencycode:any;
cudesc:any;
savecur(){
const currencyd={
  currencyname:this.currency,
  currencycode:this.currencycode,
  desc:this.cudesc
   };

  this.currencyall.post(currencyd).toPromise().then(resp=>{
          console.log(resp);
          this.currencyall.push(resp);
});

  this.currency="";
  this.currencycode="";
  this.cudesc="";

}

pay:any;
shortcode:any;
paydes:any;
savepay(){
const q={
	payfrequency:this.pay,
	payshortcode:this.shortcode,
	description:this.paydes,  
}

this.pays.post(q).toPromise().then((res)=> {
this.pays.push(res);
});

this.shortcode="";
this.pay="";
this.paydes="";
}

accdes:any;
accountclass:any;
saveclass(){

  const siteac={
    accountclasstype:this.accountclass,
    description:this.accdes,
  } 
  
      this.allAccounts.post(siteac).toPromise().then((resp)=> {
      this.allAccounts.push(resp);
      });  
      this.accountclass="";
      this.accdes="";
}  

bank:any;
bkdes:any;

savetype(){
  const b={
  bankaccounttype:this.bank,
  
  description:this.bkdes,  
}

this.account.post(b).toPromise().then((res)=> {
this.account.push(res);
});

this.bank="";
this.bkdes="";

}

  ngOnInit() {
  	var baseJob= this.restangular.all('payfrequency');
   baseJob.getList().subscribe(data=>{
   this.pays=data;

    console.log(this.pays)
    
     return this.pays;

    });

 var basecurrency= this.restangular.all('currencyall');
    console.log(basecurrency);
  basecurrency.getList().subscribe(data=>{
    console.log(data)
   this.currencyall=data;
    console.log(this.currencyall,'jfj')
    
     return this.currencyall;

    });

  	let baseBank = this.restangular.all('bankaccount');

    // This will query /geo and return a observable.
    baseBank.getList().subscribe(data => {
      this.account = data;
     
       return this.account;
    });

     let baseAccount = this.restangular.all('siteaccount');

    // This will query /accounts and return a observable.
     baseAccount.getList().subscribe(data => {
       this.allAccounts = data;
       return this.allAccounts;
    });

  }

}
