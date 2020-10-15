import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Restangular } from 'ngx-restangular';

@Component({
  selector: 'app-identity-codes',
  templateUrl: './identity-codes.component.html',
  styleUrls: ['./identity-codes.component.css']
})
export class IdentityCodesComponent implements OnInit {

general={identitycodes:[{}]}
datas
add;
show;
edit(editdata)
{
  console.log(editdata)
  this.general=editdata;

}
save(data)
{
	console.log(data)
var create=this.restangular.one('general')
create.identitycodes=[]
create.identitycodes.push(data.identitycodes[0]);
console.log(create)
create.save().toPromise().then(res=> {

this.restangular.all('general').getList().subscribe(data=>{
	this.datas=data.filter(res=>res.identitycodes);
	if(this.datas[0])
       {console.log("edit")
       	this.general=this.datas[0]
         this.add=false
       }else{
       	console.log("add")
       }})
 });  
this.general={identitycodes:[{}]};

}
update(obj)
{

console.log(obj)

obj.save();
this.show = !this.show
/*var create=this.restangular.one('general')
create.identitycodes=[]
create.identitycodes.push(obj);
create.save().toPromise().then(res=> {

this.restangular.all('general').getList().subscribe(data=>{this.datas=data.filter(res=>res.identitycodes)})
 });  
this.general={identity:[{}]};*/


}
  constructor(private restangular: Restangular) { }

  ngOnInit() {

  	let baselicense = this.restangular.all('general');
    // GET /data
    baselicense.getList().subscribe(item => {
      console.log(item)
       item =item.filter(res=>res.identitycodes);
       this.datas=item[0]
       console.log(this.datas)
      
       if(this.datas)
       {console.log("edit")

        this.general=item[0]
       	console.log(this.general)
       }else{
       	console.log("add")
       	this.add=true;
       }
   
       });  
  }
  }


