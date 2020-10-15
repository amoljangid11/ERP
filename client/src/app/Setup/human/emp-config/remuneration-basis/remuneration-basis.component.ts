import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';

@Component({
  selector: 'app-remuneration-basis',
  templateUrl: './remuneration-basis.component.html',
  styleUrls: ['./remuneration-basis.component.css']
})
export class RemunerationBasisComponent implements OnInit {

remuneration:any;
remdes:any;

editRowId;
datas;
inter;

save(){
const basis={
	
	remuneration:this.remuneration,
	description:this.remdes,  
}

this.datas.post(basis).toPromise().then((res)=> {
this.datas.push(res);
});

this.remuneration="";
this.remdes="";
}

update(rem){
this.editRowId = false;
 rem.save();
}

edit(id){
  this.editRowId = id;
}

delete(rem,i){
  rem.remove();
  console.log(rem)
  this.datas.splice(i,1);
}
  constructor(private userservice:UserService,private restangular: Restangular) { }

  ngOnInit() {
  	let baseRem = this.restangular.all('rembasis');

    // This will query /geo and return a observable.
    baseRem.getList().subscribe(data => {
      this.datas = data;
     
       return this.datas;
    });
  }

}
