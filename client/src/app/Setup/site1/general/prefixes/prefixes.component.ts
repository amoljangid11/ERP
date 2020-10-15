import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Restangular } from 'ngx-restangular';
import {UserService } from '../../../../user.service';



@Component({
  selector: 'app-prefixes',
  templateUrl: './prefixes.component.html',
  styleUrls: ['./prefixes.component.css']
})
export class PrefixesComponent implements OnInit {
 show=false;
obj={};
 datas;
 editRowId;

edit(id){

this.editRowId= id;

}

update(pre){

pre.save();
this.editRowId= false;

}


save(obj){
var create=this.restangular.one('general')
create.prefixes=[]
create.prefixes.push(obj)
create.save().toPromise().then((resp)=> {
console.log(resp);
this.restangular.all('general').getList()
                 .subscribe(data=>{this.datas=data.filter(res=>res.prefixes);})
})

this.obj={};
}

delete(pre,i){
  pre.remove();
  this.datas.splice(i,1);

}

  constructor(private userservice:UserService,private restangular: Restangular)  {  }
   
  // Function to get all blogs from the database

  ngOnInit() {
    let base = this.restangular.all('general');
    // This will query  and return a observable.
    base.getList().subscribe(data => {
      this.datas = data.filter(res=>res.prefixes);
      console.log( this.datas)
      });
  }

}
