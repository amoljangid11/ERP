 import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';


@Component({
  selector: 'app-time-zone',
  templateUrl: './time-zone.component.html',
  styleUrls: ['./time-zone.component.css']
})
export class TimeZoneComponent implements OnInit {

timezone:any;
description:any;
editRowId;
zones;
datas;


save(){
const time={
	timezone:this.timezone,
	description:this.description,  
}

this.datas.post(time).toPromise().then((res)=> {
this.datas.push(res);
});
this.timezone="";
this.description="";
}

update(tz){
this.editRowId = false;
 tz.save();
}

edit(id){
  this.editRowId = id;
}

delete(tz,i){
  tz.remove();
  console.log(tz)
  this.datas.splice(i,1);
}


  constructor(private userservice:UserService,private restangular: Restangular) { }

  ngOnInit() {
  	let baseGender = this.restangular.all('sitetime');

    // This will query /geo and return a observable.
    baseGender.getList().subscribe(data => {
      this.datas = data;
     
       return this.datas;
       }, () => {
       alert( "Oops error from server.." );
    });


    let base = this.restangular.all('timeall');

    // This will query /geo and return a observable.
    base.getList().subscribe(data => {
      this.zones = data;
     console.log(this.zones)
       return this.zones;
       }, () => {
       alert( "Oops error from server.." );
    });
 } 	
}
  

