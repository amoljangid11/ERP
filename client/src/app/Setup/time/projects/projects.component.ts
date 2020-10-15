import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {UserService } from '../../../user.service';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
editRowId;
pro;
show;
  constructor(private userservice:UserService,private restangular: Restangular,private router:Router) { }

projecttime={project:[{}]};
getuser;

update(pt){
this.editRowId = false;
 pt.save();
}
add()
{
    this.userservice.add()
}

open(dialog: Md2Dialog) {
  dialog.open();
}

close(dialog: any) {
  dialog.close();
}

view(dataall) {
  // this.updatebutton = true;
  this.show=!this.show
  this.projecttime= dataall
//   this.i=i;
}


edit(data){
  
this.userservice.editproj(data)
       console.log("edit1")
}

delete(pt,i){

  pt.remove();
  console.log(pt)
  this.pro.splice(i,1);
}

flag=false;
eflag=false;
addhide(){
  if(this.getuser.utype=="admin" || this.getuser.utype=="Executive Director" || this.getuser.utype=="Manager" || this.getuser.utype=="Senior Test Manager" || this.getuser.utype=="Senior Project Manager" || this.getuser.utype=="Associate Vice President")
  {
     this.flag=true;
     this.eflag=false;
     console.log( this.flag)
  }
  else{
    this.eflag=true;
    this.flag=false;
    console.log( this.flag)
  }
}


task_options=[];
findproject(obj)
{
  var flag=false;
  console.log(obj)
  console.log(obj.resource_time.length)

  if(obj.resource_time.length!=0)
  {
    obj.resource_time.forEach(res=>{
      console.log(res);
     console.log(this.getuser.employee_OId)
     console.log(res.id)
    if(res.id==this.getuser.employee_OId) {

      flag=true;
      res.official.filter(res=>{
        console.log(res)
        this.task_options.push(res)
        console.log(this.task_options)
      })
    }})
  }else{
    console.log("there is no employee")
    
  }
}

  ngOnInit() {

    this.getuser=JSON.parse(localStorage.getItem('user'));
    console.log(this.getuser)

    this.addhide();
  
    var basePro=this.restangular.all('project_time');
    basePro.getList().subscribe( data=>{
    this.pro=data;
    return this.pro;
    });

    this.restangular.all('project_time').getList({type:'project'}).subscribe(data=>{
      console.log(data)
      this.task_options=data.filter(res=> this.findproject(res))
      // if(this.task_options.length==0)
      // {
      // console.log("assign")
      // this.task_options=[{task_time:[]}]
      // console.log(this.task_options)
      // }
    })
  
 }
  


/*projects(){
  this.router.navigate(['./time',{outlets:{timechild:['projects']}}])
}*/

}
