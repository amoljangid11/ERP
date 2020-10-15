import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';


@Component({
  selector: 'app-pay-frequency',
  templateUrl: './pay-frequency.component.html',
  styleUrls: ['./pay-frequency.component.css']
})
export class PayFrequencyComponent implements OnInit {

pay:any;
shortcode:any;
paydes:any;
pays;
editRowId;

save(){
const q={
	payfrequency:this.pay,
	shortcode:this.shortcode,
	description:this.paydes,  
}

this.pays.post(q).toPromise().then((res)=> {
this.pays.push(res);
});

this.shortcode="";
this.pay="";
this.paydes="";
}

update(freq){
this.editRowId = false;
 freq.save();
}

edit(id){
  this.editRowId = id;
}

delete(freq,i){
  freq.remove();
  console.log(freq)
  this.pays.splice(i,1);
}

  constructor(private userservice:UserService,private restangular: Restangular) { }

  ngOnInit() {

  	let basePay = this.restangular.all('payfrequency');

    // This will query /geo and return a observable.
    basePay.getList().subscribe(data => {
      this.pays = data;
     
       return this.pays;
    });
  }

}
