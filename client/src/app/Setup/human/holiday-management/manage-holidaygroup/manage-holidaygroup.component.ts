import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MdChipsModule} from '@angular/material';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';

@Component({
  selector: 'app-manage-holidaygroup',
  templateUrl: './manage-holidaygroup.component.html',
  styleUrls: ['./manage-holidaygroup.component.css']
})
export class ManageHolidaygroupComponent implements OnInit {

groupname:any;
hgdes:any;

editRowId;
datas;

 formControl = new FormControl('hello', Validators.required);
 
save(){
const ethni={
  groupname:this.groupname,
  description:this.hgdes,
  
}

this.datas.post(ethni).toPromise().then((resp)=> {
this.datas.push(resp);
 });  
this.groupname="";
this.hgdes="";

}

update(hg){
this.editRowId = false;
 hg.save();
}

edit(id){
  this.editRowId = id;
 // hg.save()
}


delete(hg,i){
  hg.remove();
  console.log(hg)
  this.datas.splice(i,1);
}


  constructor(private userservice:UserService,private restangular: Restangular) { }

  ngOnInit() {
  	let baseHoliday = this.restangular.all('holidaygroup');

    // This will query /geo and return a observable.
    baseHoliday.getList().subscribe(data => {
      this.datas = data;
       return this.datas;
    });
  }

} 
