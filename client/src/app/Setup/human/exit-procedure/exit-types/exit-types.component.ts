import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MdChipsModule} from '@angular/material';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';

@Component({
  selector: 'app-exit-types',
  templateUrl: './exit-types.component.html',
  styleUrls: ['./exit-types.component.css']
})
export class ExitTypesComponent implements OnInit {
exitControl:any;
exitdes:any;
editRowId;
datas;

formControl = new FormControl('hello', Validators.required);

save(){
const exit={

  exittype:this.exitControl,
  description:this.exitdes,
  
}

this.datas.post(exit).toPromise().then((resp)=> {
this.datas.push(resp);
   });  

this.exitControl="";
this.exitdes="";

}

update(et){
this.editRowId = false;
 et.save();
}

edit(id){
  this.editRowId = id;
 // et.save()
}


delete(et,i){
 
  et.remove();
  console.log(et)
  this.datas.splice(i,1);
}


  constructor(private userservice:UserService,private restangular: Restangular) { }

  ngOnInit() {
  	let baseExit = this.restangular.all('exittype');

    // This will query /geo and return a observable.
    baseExit.getList().subscribe(data => {
      this.datas = data;
       return this.datas;
    });
  }

}
