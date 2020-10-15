import { Component, OnInit } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';

@Component({
  selector: 'app-num-format',
  templateUrl: './num-format.component.html',
  styleUrls: ['./num-format.component.css']
})
export class NumFormatComponent implements OnInit {
number={}
alldata;
editRowId;
save(obj){
var create=this.restangular.one('general')
create.numberformats=[]
create.numberformats.push(obj);
create.save().toPromise().then(res=> {

this.restangular.all('general').getList().subscribe(data=>{this.alldata=data.filter(res=>res.numberformats)})
 });  
this.number={}
}

remove(li,i){
 this.alldata.splice(i,1);
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
  constructor(private userservice:UserService,private restangular: Restangular) { }

  ngOnInit() {
  	 // First way of creating a this.restangular object. Just saying the base URL
    let baseNum = this.restangular.all('general');

    // This will query /accounts and return a observable.
    baseNum.getList().subscribe(numb => {
      this.alldata = numb.filter(data=>{data.numberformats});
   
      });
  }

}
