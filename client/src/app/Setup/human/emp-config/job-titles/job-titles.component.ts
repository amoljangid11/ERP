import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';

@Component({
  selector: 'app-job-titles',
  templateUrl: './job-titles.component.html',
  styleUrls: ['./job-titles.component.css']
})
export class JobTitlesComponent implements OnInit {

title_code:any;
grade_code:any;
job:any;
pay:any;
jobdes:any;
comment:any;
exp:any;
pf;

payfreq;
paydes;
editRowId;
datas;

savechange(){
const qu={
	exittype:this.payfreq,
	description:this.paydes,  
}
this.pf.post(qu).toPromise().then((res)=> {
this.pf.push(res);
});
this.payfreq="";
this.paydes="";
}

  constructor(private userservice:UserService,private restangular: Restangular) { }

  ngOnInit() {
  	let base = this.restangular.all('payfrequency');

    // This will query /geo and return a observable.
    base.getList().subscribe(data => {
      this.pf = data;
     console.log(this.pf)
       return this.pf;
    });
  }

}
