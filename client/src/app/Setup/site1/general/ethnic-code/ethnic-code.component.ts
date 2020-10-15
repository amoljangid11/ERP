import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MdChipsModule} from '@angular/material';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';

@Component({
  selector: 'app-ethnic-code',
  templateUrl: './ethnic-code.component.html',
  styleUrls: ['./ethnic-code.component.css']
})
export class EthnicCodeComponent implements OnInit {

ecode:any;
ethnicform:any;
ethnicdes:any;

editRowId;
datas=[]

ethnic={};
basegeneral;

save(obj){
console.log(obj)
var create=this.restangular.one('general')
create.ethnic=[];

create.ethnic.push(obj)
console.log(create)
create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('general').getList()
                 .subscribe(data=>{this.datas=data.filter(res=>res.ethnic);})
})
}

update(ec){
this.editRowId = false;
 ec.save();
}

edit(id){
  this.editRowId = id;
 // ec.save()
}


delete(ec,i){

ec.remove();
this.datas.splice(i,1);

}


  constructor(private userservice:UserService,private restangular: Restangular) { }


  

  ngOnInit() {
   
     this.basegeneral= this.restangular.one('general');
     this.basegeneral.getList().subscribe(data => {
      
    this.datas=data.filter(res=>res.ethnic);
    console.log(this.datas)
     });
  }
}
