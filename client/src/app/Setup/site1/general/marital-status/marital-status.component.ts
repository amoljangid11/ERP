import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';

@Component({
  selector: 'app-marital-status',
  templateUrl: './marital-status.component.html',
  styleUrls: ['./marital-status.component.css']
})
export class MaritalStatusComponent implements OnInit {

editRowId;
datas;
marital={}
save(data){ 
var create=this.restangular.one('general')
create.marital=[]
create.marital.push(data)
create.save().toPromise().then((res)=> {
console.log(res);
this.restangular.all('general').getList()
                 .subscribe(data=>{this.datas=data.filter(res=>res.marital);})
}); 
this.marital={}
}

update(m){
this.editRowId = false;
 m.save();
}

edit(id){
  this.editRowId = id;
 // m.save()
}

delete(m,i){

  m.remove();

  this.datas.splice(i,1);
}

  constructor(private userservice:UserService,private restangular: Restangular) 
  {

   }

  ngOnInit() { 
    let base1 = this.restangular.all('general');
    base1.getList().subscribe(data => {
      this.datas = data.filter(res=>res.marital);
})
  	
  }

}
