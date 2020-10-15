import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {UserService } from '../../../user.service';
import { RestangularModule, Restangular} from 'ngx-restangular';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private userservice:UserService,private restangular: Restangular,private router:Router) { }

editRowId;
pro;  

update(pt)
{
this.editRowId = false;
 pt.save();
}

edit(id)
{
  this.editRowId = id;
 // g.save()
}

delete(pt,i){

  pt.remove();
  console.log(pt)
  this.pro.splice(i,1);
}


  ngOnInit() {

      /* var basePro=this.restangular.all('projects');
    basePro.getList().subscribe( data=>{

    this.pro=data;
    return this.pro;
 });*/
  
 }
  

project_time(){

  this.router.navigate(['./time',{outlets:{timechild:['projects',{outlets:{fifthchild:['projecttime']}}]}}])
  console.log("dc")
}

project_tasks()
{
  
  this.router.navigate(['./time',{outlets:{timechild:['projects',{outlets:{fifthchild:['tasks']}}]}}])

}
project_resources()
{

this.router.navigate(['./time',{outlets:{timechild:['projects',{outlets:{fifthchild:['resources']}}]}}])

}
}
