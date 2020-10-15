import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../../user.service';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  constructor(private router:Router,private restangular:Restangular,public service:UserService) { 
  	this.service=service;
}

employee={leave:[{}]};
editRowId=false;

toggle(id)
{
  console.log(id)
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
save(obj)
{
  console.log(obj)
  obj.leave[0].usedleaves=0;
  obj.leave[0].leavebalance=obj.leave[0].leavelimit;
  var create=this.service.editdata;
  console.log(create)
  create.leave=[];
  create.leave.push(obj.leave[0])
  console.log(create)
create.save().toPromise().then(function(resp){
    console.log(resp)
    
})
}  
back(){
	  this.router.navigate(['./setuproot',{outlets:{secondchild:['human-resource'], thirdchild:['employee']}}])

}
  ngOnInit() {
      if(this.service.editdata.length)
     
         { 
           
           if(undefined!=this.service.editdata.leave)
           {
             console.log("Assign")
             this.employee=this.service.editdata;
             

           }
         }
  	
  }

}
