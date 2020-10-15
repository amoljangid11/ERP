import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import {UserService } from '../../../user.service';

import { RestangularModule, Restangular} from 'ngx-restangular';

@Component({
  selector: 'app-createproject',
  templateUrl: './createproject.component.html',
  styleUrls: ['./createproject.component.css']
})
export class CreateprojectComponent implements OnInit {

constructor(private router:Router,public userservice:UserService) { }
project_time(){
  this.router.navigate(['./time',{outlets:{timechild:['create-project',{outlets:{projectchild:['project_time']}}]}}])
}

tasks()
{
  if(this.userservice.editproject)
         {  const key = Object.keys(this.userservice.editproject)
            if(key.length!=0)  
           {   this.router.navigate(['./time',{outlets:{timechild:['create-project',{outlets:{projectchild:['tasks']}}]}}])

           }
           else { 	alert("Please add the Project details first to add tasks details.");  } 
         } 

         } 

resources()
{
	if(this.userservice.editproject)
         {  const key=Object.keys(this.userservice.editproject)
            if(key.length!=0)
           {    this.router.navigate(['./time',{outlets:{timechild:['create-project',{outlets:{projectchild:['resources']}}]}}])
                }
           else { 	alert("Please add the Project details first to add resources details.");  }
         }
}
  ngOnInit() {

     $("li").click(function(e) {
    console.log(e)
        e.preventDefault();
        console.log(e.preventDefault())
        $("li").addClass("inactive");
        $(this).removeClass("inactive");   
        
        
    });
  }

}
