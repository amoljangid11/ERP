 import { Component, OnInit } from '@angular/core';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core'; 
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';
@Component({
  selector: 'app-nationalities',
  templateUrl: './nationalities.component.html',
  styleUrls: ['./nationalities.component.css']
})
export class NationalitiesComponent implements OnInit {
constructor(private userservice:UserService,private restangular: Restangular) { }
nation={}
datas;
editRowId;
 
save(obj){
var create=this.restangular.one('general')
create.nationalities=[]
create.nationalities.push(obj);
create.save().toPromise().then(res=> {

this.restangular.all('general').getList().subscribe(data=>{this.datas=data.filter(res=>res.nationalities)})
 });  
this.nation={}
}

edit(id){
this.editRowId=id;

};

update(na){
na.save();
this.editRowId=false;
};

delete(na,i){
  na.remove();
  this.datas.splice(i,1);


};


  ngOnInit() {
   // First way of creating a this.restangular object. Just saying the base URL
    let baseNation = this.restangular.all('general');
    // This will query /accounts and return a observable.
    baseNation.getList().subscribe(data => {
      this.datas = data.filter(res=>res.nationalities);
       });
      
    
  }
 
}
