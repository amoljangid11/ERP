import { Component, OnInit } from '@angular/core';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';


@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
 
export class LicenseComponent implements OnInit {

alllicense;
data={}
editRowId;
save(obj)
{

var create=this.restangular.one('general')
create.licensetype=[]
create.licensetype.push(obj);
create.save().toPromise().then(res=> {

this.restangular.all('general').getList().subscribe(data=>{this.alllicense=data.filter(res=>res.licensetype)})
 });  
this.data={}


}

remove(li,i){
 this.alllicense.splice(i,1);
 li.remove();

}

toggle(id)
{
  this.editRowId = id;
 }

edit(id)
{
   this.editRowId=id;
 }

update(d)
{
   this.editRowId=false;
   console.log(d)

   d.save();

}

constructor(private userservice:UserService,private restangular: Restangular) {


 //let removeitem = base.map(sitelicense => sitelicense[0]);{
 //  this.remove(removeitem);
// }
     }
  

ngOnInit() {

  	let baselicense = this.restangular.all('general');
    // GET /data
    baselicense.getList().subscribe(item => {
      console.log(item)
       this.alllicense =item.filter(res=>res.licensetype);
       console.log(this.alllicense)
   
       });  
  }

}
