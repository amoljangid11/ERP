import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import {UserService } from '../../../../user.service';


@Component({
  selector: 'app-nationality-context',
  templateUrl: './nationality-context.component.html',
  styleUrls: ['./nationality-context.component.css']
})
export class NationalityContextComponent implements OnInit {

constructor(private userservice:UserService,private restangular: Restangular) { }


contextcodes={}

datas;
editRowId;

save(obj){
var create=this.restangular.one('general')
create.context_codes=[]
create.context_codes.push(obj);
create.save().toPromise().then(res=> {

this.restangular.all('general').getList().subscribe(data=>{this.datas=data.filter(res=>res.context_codes)})
 });  
this.contextcodes={}
}

edit(id){
this.editRowId=id;

};

update(nc){
nc.save();
this.editRowId=false;
};

delete(nc,i){
  nc.remove();
  this.datas.splice(i,1);


};

 

  ngOnInit() {
  	let baseUnit = this.restangular.all('general');
    // This will query  and return a observable.
    baseUnit.getList().subscribe(data => {
      this.datas = data.filter(res=>res.context_codes);
      
       return  this.datas;
       });
  

}
}