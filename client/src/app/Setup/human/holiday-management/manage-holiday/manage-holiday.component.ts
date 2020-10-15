import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';

@Component({
  selector: 'app-manage-holiday',
  templateUrl: './manage-holiday.component.html',
  styleUrls: ['./manage-holiday.component.css']
})
export class ManageHolidayComponent implements OnInit {

holidayform:any;
groupname:any;
dates:any;
holidaydes:any;
editRowId;
hgroup;
datas;

formControl = new FormControl('hello', Validators.required);

save(){
const manage={
	holiday:this.holidayform,
	groupname:this.groupname,
	holidaydate:this.dates,
	description:this.holidaydes,  
}

this.datas.post(manage).toPromise().then((res)=> {
this.datas.push(res);
});
this.holidayform="";
this.groupname="";
this.dates="";
this.holidaydes="";
}

update(ho){
this.editRowId = false;
 ho.save();
}

edit(id){
  this.editRowId = id;
}

delete(ho,i){
  ho.remove();
  console.log(ho)
  this.datas.splice(i,1);
}


  constructor(private userservice:UserService,private restangular: Restangular) { }

  ngOnInit() {
  	let baseH = this.restangular.all('manageholiday');

    // This will query /geo and return a observable.
    baseH.getList().subscribe(data => {
      this.datas = data;
     
       return this.datas;
    });


    let base = this.restangular.all('holidaygroup');

    // This will query /geo and return a observable.
    base.getList().subscribe(data => {
      this.hgroup = data;
     console.log(this.hgroup)
       return this.hgroup;
    });
  }

}
