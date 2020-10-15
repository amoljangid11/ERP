 import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {

editRowId;
datas;
genders={};
save(obj){
var create= this.restangular.one('general');
create.gender=[];
create.gender.push(obj)
create.save().toPromise().then(res=>{
 console.log(res)
 this.restangular.all('general').getList()
                 .subscribe(data=>{this.datas=data.filter(res=>res.gender)})
})
this.genders={};

}

update(g){
this.editRowId = false;
 g.save();
}

edit(id){
  this.editRowId = id;
 // g.save()
}

delete(g,i){

  g.remove();
  console.log(g)
  this.datas.splice(i,1);
}

  constructor(private userservice:UserService,private restangular: Restangular) { }

  ngOnInit() {
  	let baseGender = this.restangular.all('general');

    // This will query /geo and return a observable.
    baseGender.getList().subscribe(data => {
    this.datas = data.filter(res=>res.gender);
    console.log(this.datas)
    });
  }

}
