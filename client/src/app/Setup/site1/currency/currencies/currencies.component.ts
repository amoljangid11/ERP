import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';import {MdChipsModule} from '@angular/material';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../../user.service';

@Component({
  selector: 'app-currencies',
  templateUrl: './currencies.component.html',
  styleUrls: ['./currencies.component.css']
})
export class CurrenciesComponent implements OnInit {

form: FormGroup;
currency={}
desc;
show;
datas;
editRowId;
constructor(private userservice:UserService,private restangular: Restangular,private formBuilder: FormBuilder,) {}


save(obj)
{
  console.log(obj)
var create=this.restangular.one('general')
create.currencies=[]
create.currencies.push(obj);
console.log(create)
create.save().toPromise().then(res=> {

this.restangular.all('general').getList().subscribe(data=>{this.datas=data.filter(res=>res.currencies)})
 });  
this.currency={}

this.show=false;

}
  
remove(d,i): void 
{
    console.log('inside remove and id = ' + i);
                
        d.remove();
        
        this.datas.splice(i, 1);
         console.log(this.datas)  
      
}
 /* update(bu){
console.log(bu)
bu.save().toPomise().then(res=>{
  this.bunits={businessunits:[{}]}
});
}

edit(obj){
this.show = !this.show
console.log(obj)
this.bunits=obj
this.updatebutton=true;
// bu.save()
}*/

toggle(id)
{
  console.log(id)
  this.editRowId = id;
 }

edit(id)
{
   console.log(id)
   this.editRowId=id;
 }

update(d)
{
   this.editRowId=false;
   console.log(d)

   d.save();

}




  ngOnInit() {
    var baseUnits= this.restangular.all('general',);
   baseUnits.getList().subscribe( data=>{
   this.datas=data.filter(res=>res.currencies);

     return this.datas;
    });
  }

}
