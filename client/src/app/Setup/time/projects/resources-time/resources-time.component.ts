import { Component, OnInit } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Router} from '@angular/router';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { Md2Dialog } from 'md2';
import { Ng2DragDropModule } from 'ng2-drag-drop';

@Component({
  selector: 'app-resources-time',
  templateUrl: './resources-time.component.html',
  styleUrls: ['./resources-time.component.css']
})
export class ResourcesTimeComponent implements OnInit {

constructor(private userservice:UserService,private restangular: Restangular,private router:Router) 
         {  }
 
selectOption=[];

getValue(searchid) {
      this.selectOption = this.officiald.filter((item)=> item.id == searchid);
  }

 baseOfficial;
items: any[];
droppedItems=[];
returndroppedItems=[];  
dropres;
basePro;
emp;
resource_time={}; 
project={resource_time:[{}]};
project1={Eassign:[{}]};
project2={Massign:[{}]};
selectemp;
pro;
res;
officiald;
editRowId;
tesyt




searchtype = "";
IsManager = false;
IsEmployee = false;

// edit(dataall,i) {
//   this.updatebutton = true;
//   this.project=this.resources
//   this.i=i;
// }
updatebutton = false;

Showtask(value) {
               this.IsManager = (value == "M")
               this.IsEmployee = (value == "E")
              
           }
IsAllTasks = false;
IsAssignTasks = true;
IsUnassignTasks = false;
Showtasks(value) {
               this.IsUnassignTasks = (value == "US")
               this.IsAssignTasks = (value == "AS")
               this.IsAllTasks = (value == "AL")
           }
addemp;
newemployee;
tskshow;

asstask=[];
tasksave()
{
var create=this.userservice.editproject;
console.log(create)
console.log(create.task_time)
for(let i=0;i<create.task_time.length;i++)
 {
console.log(this.newemployee);
console.log(create.task_time[i].assignresource);
  for(let j=0;j<create.task_time[i].assignresource.length;j++)
  {
    console.log(create.task_time[i].assignresource[j])
    console.log(this.newemployee)
    if(create.task_time[i].assignresource[j]._id==this.newemployee._id)
    {
      console.log("abc")
      console.log(create.task_time[i].task)
      this.asstask.push(create.task_time[i].task)
      console.log(this.asstask)
      console.log(this.asstask.length)
      // this.asstask=create.task_time[i].task
      // console.log(this.asstask)
    }
  }
 }
}

open(dialog: Md2Dialog) {
  dialog.open();
}

close(dialog: any) {
   dialog.close();
}

rol = [
      {viewValue: 'All'},
      { viewValue: 'Employee'},
      { viewValue: 'Manager'}
      ];
      
      flag=true;
      role;
      selectRole(role)
      {
        if(role=='Employee'){
          this.role=role;
          console.log("Role "+role)
          this.flag=false;
        }
        else if(role=='Manager')
        {
          this.role=role;
          this.flag=false;
          console.log("Role "+role) 
        }
        else if(role=='All'){
          this.role=role;
          this.flag=true;
          console.log("Role "+role)
        } 
      }
      

assignEmployee(employee){
  // this.newemployee
 console.log(employee)
 this.newemployee = this.officialdata.find(obj=>obj._id==employee._id);
 console.log( this.newemployee)
}

a=0;
showtaskss(employee,a){
  console.log(employee._id)
  this.a=a;
  for(var i=0;i<this.proresp.length;i++)
  {
  this.tskshow = this.proresp.find(obj=>obj.resource_time[this.a].official[this.a]._id===employee.official[this.a]._id)
  console.log(this.tskshow)
  console.log(this.tskshow.resource_time[i].official[i]._id)
  console.log(this.tskshow.resource_time[i].official[i].taskname)
  console.log(this.tskshow.resource_time[i].official[i].estimatedhour)
 }
  // console.log(this.tskshow.resource_time.official[this.a].username+"   hhh")
  // console.log(this.tskshow.official[0].taskname+"   hhh")
}

task={task_time:[{}]};

i=0;
viewTask(task,t){
  console.log(task);
  console.log(t);
this.project=task;
this.i=t;
}
currentres
view(dataall) {
  // this.updatebutton = true;
  console.log(dataall);

  console.log(this.task);
  this.task= dataall
  console.log(this.task)
this.currentres=dataall;
//   this.i=i;
}
alltask=[]
taskview(datas)
{
console.log(datas);
for(let i=0;i<datas.task_time.length;i++)
{
  console.log("abc")
  for(let j=0;j<datas.task_time[i].assignresource;j++)
  {
    console.log("pqr")
    console.log(datas.task_time[i].assignresource[j])
    console.log(this.currentres)
    if(datas.task_time[i].assignresource[j]==this.currentres)
    {
      console.log("xyz")
      this.alltask.push(datas.task_time[i])
      console.log(this.alltask)
    }
  }
}
}


emmmppp;
 selectEmployee(employee){
  //  this.newemployee=employee;
  console.log(employee)
  this.emmmppp=employee;
 if(undefined==this.project.resource_time)
 {
   console.log("true")
   this.project.resource_time=[];
   this.project.resource_time.push(employee)
   console.log(this.project.resource_time)
 }
 else{
   console.log("else")
   this.project.resource_time.push(employee)
   console.log(this.project.resource_time)
 }
  console.log(employee.dragData)
  console.log(employee._id)
  
  this.dropres=employee;
  console.log(this.dropres) 
 }
 resource;

se

Massign=[];
Eassign=[];
selectmangr=[];
selectempl=[];
onMItemDrop(e: any) {
   console.log(this.officiald)
   console.log(this.project)
   if(undefined==this.Massign)
   {
     console.log("true")
    //  this.project.resource_time=[];
      this.Massign.push(e.dragData)
      console.log(this.Massign)
      this.resource_time=this.Massign
      console.log(this.resource_time)
      this.selectmangr=this.Massign
   }
   else{
     console.log("else")
     this.Massign.push(e.dragData)
        console.log(this.Massign)
        this.resource_time=this.Massign
        console.log(this.resource_time)
        this.selectmangr=this.Massign
   }
   console.log(e)
  console.log(e.dragData)
  console.log(e.dragData._id)
  this.officiald1=this.officiald1.filter(data=> e.dragData._id !==data.id) 
  console.log(this.officiald1)

  this.dropres=e.dragData;
  console.log(this.dropres)
}
onEItemDrop(e: any) {
  console.log(this.officiald)
  console.log(this.project)
  if(undefined==this.Eassign)
  {
    console.log("true")
    // this.project.resource_time=[];
     this.Eassign.push(e.dragData)
     console.log(this.Eassign)
     this.resource_time=this.Eassign
     console.log(this.resource_time)
     this.selectempl=this.Eassign
  }
  else{
    console.log("else")
    this.Eassign.push(e.dragData)
       console.log(this.Eassign)
       this.resource_time=this.Eassign
      console.log(this.resource_time)
      this.selectempl=this.Eassign
  }

 console.log(e.dragData)
 console.log(e.dragData._id)

 this.officiald2=this.officiald2.filter(data=> e.dragData._id !==data.id) 
 console.log(this.officiald2)

 this.dropres=e.dragData;
 console.log(this.dropres)
}

onMRItemDrop(e: any) {
  console.log(this.officiald)
  console.log(this.project)
  if(undefined==this.project.resource_time)
  {
    console.log("true")
    // this.project.resource_time=[];
     this.officiald1.push(e.dragData)
     console.log(this.officiald1)
  }
  else{
    console.log("else")
    this.officiald1.push(e.dragData)
       console.log(this.officiald1)

  }
  console.log(e)

 console.log(e.dragData)
 console.log(e.dragData._id)
 this.Massign=this.Massign.filter(data=> e.dragData._id !==data._id) 
 console.log(this.project.resource_time)

 this.dropres=e.dragData;
 console.log(this.dropres)
}

onERItemDrop(e: any) {
  console.log(this.officiald)
  console.log(this.project)
  if(undefined==this.project.resource_time)
  {
    console.log("true")
    // this.project.resource_time=[];
     this.officiald2.push(e.dragData)
     console.log(this.officiald2)
  }
  else{
    console.log("else")
    this.officiald2.push(e.dragData)
       console.log(this.officiald2)

  }
  console.log(e)
 console.log(e.dragData)
 console.log(e.dragData._id)

 this.Eassign=this.Eassign.filter(data=> e.dragData._id !==data._id) 
 console.log(this.project.resource_time)
 this.dropres=e.dragData;
 console.log(this.dropres)
}


resourcesave(datas){
  console.log(datas)
  datas.billablerate="";
  datas.costrate="";
  this.dropres.official[0]._id=this.dropres._id;
  this.dropres.official[0].project=this.projectassign;
  datas.employee=this.dropres.official[0];
  
  var create=this.userservice.editproject;

  if(undefined!=create.resource_time){
      console.log(this.resource_time)
      this.createexist(create,this.resource_time);
     }else{
       console.log(this.resource_time)
     this.createnew(create,this.resource_time);
     }
  }

createnew(create,datas){
  console.log(datas)
  create.resource_time = [];
 create.resource_time=datas
 console.log(create.resource_time)
  create.save().toPromise().then(function(resp){console.log(resp)})
   
}

createexist(create,datas){
  console.log(create);
   console.log(datas)
  //  create.resource_time = [];
  //  console.log(create.resource_time);
  for(let i=0;i<datas.length;i++)
  {
   create.resource_time.push(datas[i])
   console.log(create.resource_time)
   create.save().toPromise().then(function(resp){console.log(resp) })
  }
  //  create.resource_time.push(datas)
  //  console.log(create.resource_time)
  //  create.resource_time.push(datas)
  //  console.log(create.resource_time)

 
}

updateresource(projecttime){
  projecttime.save().toPromise().then(function(res){ console.log(res)})
}

update(project){
this.editRowId = false;
 project.save();
}
managercount=0;
employeecount=0;

// delete(employee,i){

//   // alert("Are you sure! you want to delete this data from the database");
//   console.log(employee)
//   console.log(i)

//   this.project.resource_time.pop()
//   this.project.resource_time.slice(i,1)


//   // this.proresp=this.restangular.all('project_time');
   
//   //   this.proresp.getList().subscribe(data => {
     
//   //     console.log(data)
//   //     this.proresp=data.filter(res=>res.resource_time);
//   //     console.log(this.proresp)
//   //     console.log(this.proresp[0].resource_time)
//   //     this.project.resource_time=this.proresp[0].resource_time
//   //     console.log(this.project.resource_time)
//   //     // employee=this.project.resource_time
//   //     employee.remove().toPromise().then(function(resp,err) {
//   //       console.log(resp)
//   //     })
//   //   this.project.resource_time.splice(i,1);
//   //   })

// }

delete(resouce_time,i){
  resouce_time.remove();
}

projects(){
  this.router.navigate(['./time',{outlets:{timechild:['projects']}}])
}

   resourceman;
   resourceemp;
  filterResources(){    
   console.log(this.searchtype)

  }
  proresp
  officialdata
  officiald1;
  officiald2;

  totaltask
filterItem(value)
{
  value=value.toLowerCase();
  if(!value)
  {console.log("else")
    this.proresp=this.restangular.all('project_time');
   
    this.proresp.getList().subscribe(data => {
     
      console.log(data)
      this.proresp=data.filter(res=>res.resource_time);
      console.log(this.proresp)
      console.log(this.proresp.length)
      for(let i=0;i<this.proresp.length;i++)
      {
        console.log(this.proresp[i].resource_time.length)
        console.log(this.totaltask.length)
        if(this.proresp[i].resource_time.length==this.totaltask.length)
        {
          console.log("a")
          this.project.resource_time=this.proresp[i].resource_time
          console.log(this.project.resource_time)
        }
        console.log("b")
      }
      return this.project.resource_time
    });
    }
  else{
           this.project.resource_time= this.project.resource_time.filter(
      function (el: any) {
                console.log(el)
                  console.log(el.official[0].firstname.toLowerCase().indexOf(value) > -1 ||  el.official[0].lastname.toLowerCase().indexOf(value) > -1)
                return el.official[0].firstname.toLowerCase().indexOf(value) > -1 ||  el.official[0].lastname.toLowerCase().indexOf(value) > -1 ;
          }
      )
    console.log("searchfd")
    console.log(this.project.resource_time)        
  }
 }

 count()
 {
  this.manresource.forEach(res=>{
       this.managercount++; 
     })
 this.empresource.forEach(res=>{
     this.employeecount++; 
   })
 }

 filtermanager(value)
{
  value=value.toLowerCase();
  if(!value)
  {console.log("else")
  this.officiald1=this.restangular.all('createemployee');
  this.officiald1.getList().subscribe(data => {
    this.officiald1=data.filter(res=>res.official[0].role=='Manager' || res.official[0].role=='Management' || res.official[0].role=='HR Manager' );
      console.log(  this.officiald1)
      this.officiald1=  this.officiald1;
      return   this.officiald1
    });
    }
  else{
           this.officiald1= this.officiald1.filter(
      function (el: any) {
                return el.official[0].firstname.toLowerCase().indexOf(value) > -1 ||  el.official[0].lastname.toLowerCase().indexOf(value) > -1 ;
            }
      )
    console.log("searchfd")
    console.log(this.officiald1)        
  }
 }

 filteremployee(value)
 {
   value=value.toLowerCase();
   if(!value)
   {console.log("else")
   this.officiald2=this.restangular.all('createemployee');
   this.officiald2.getList().subscribe(data => {
     this.officiald2=data.filter(res=>res.official[0].role=='Employee' || res.official[0].role=='System Admin');
       console.log( this.officiald2)
       this.officiald2=this.officiald2;
       return   this.officiald2
     });
     }
   else{
            this.officiald2= this.officiald2.filter(
       function (el: any) {
                 return el.official[0].firstname.toLowerCase().indexOf(value) > -1 ||  el.official[0].lastname.toLowerCase().indexOf(value) > -1 ;
             }
       )
     console.log("searchfd")
     console.log(this.officiald2)        
   }
  }

  filterselectmanager(value)
  {
    value=value.toLowerCase();
  if(!value)
  {console.log("else")
  this.proresp=this.restangular.all('project_time');
   
  this.proresp.getList().subscribe(data => {
   
    console.log(data)
    this.proresp=data.filter(res=>res.resource_time);
    console.log(this.proresp)
    console.log(this.proresp.length)
    for(let i=0;i<this.proresp.length;i++)
    {
      console.log(this.proresp[i].resource_time.length)
      console.log(this.totaltask.length)
      if(this.proresp[i].resource_time.length==this.totaltask.length)
      {
        console.log("a")
        this.Massign=this.selectmangr
        console.log(this.Massign)
      }
      console.log("b")
    }
    return this.Massign
  });
    }
  else{
           this.Massign= this.selectmangr.filter(
      function (el: any) {
                console.log(el)
                  console.log(el.official[0].firstname.toLowerCase().indexOf(value) > -1 ||  el.official[0].lastname.toLowerCase().indexOf(value) > -1)
                return el.official[0].firstname.toLowerCase().indexOf(value) > -1 ||  el.official[0].lastname.toLowerCase().indexOf(value) > -1 ;
          }
      )
    console.log("searchfd")
    console.log(this.project.resource_time)        
  }
   }
  
   filterselectemployee(value)
   {
    value=value.toLowerCase();
  if(!value)
  {console.log("else")
  this.proresp=this.restangular.all('project_time');
   
  this.proresp.getList().subscribe(data => {
   
    console.log(data)
    this.proresp=data.filter(res=>res.resource_time);
    console.log(this.proresp)
    console.log(this.proresp.length)
    for(let i=0;i<this.proresp.length;i++)
    {
      console.log(this.proresp[i].resource_time.length)
      console.log(this.totaltask.length)
      if(this.proresp[i].resource_time.length==this.totaltask.length)
      {
        console.log("a")
        // empresource
        this.Eassign=this.selectempl
        console.log(this.Eassign)
      }
      console.log("b")
    }
    return this.Eassign
  });
    }
  else{
           this.Eassign= this.selectempl.filter(
      function (el: any) {
                console.log(el)
                  console.log(el.official[0].firstname.toLowerCase().indexOf(value) > -1 ||  el.official[0].lastname.toLowerCase().indexOf(value) > -1)
                return el.official[0].firstname.toLowerCase().indexOf(value) > -1 ||  el.official[0].lastname.toLowerCase().indexOf(value) > -1 ;
          }
      )
    console.log("searchfd")
    console.log(this.Eassign)        
  }
    }
  manresource;
  empresource;

  finde(res,rt){
    var flag=true;
    console.log(rt);
    if(rt.resource_time)
    {
      for(let i=0;i<rt.resource_time.length;i++)
      {
        console.log(i);
      // // rt.resource_time.find(obj=>{ if(obj[i].official[0]._id == res) flag=false;})
      // // console.log(flag)
      // rt.resource_time[i].array.forEach(obj => {
      //  if (obj.official[0]._id==res) flag=false;
      // });
       console.log(rt.resource_time[i])
      //  rt.resource_time[i].if(obj=>obj.official[0]._id==res) 
      //    flag=false
       if(rt.resource_time[i]._id==res)
       flag=false
       }
    }
      return flag;
    }
 projectassign;

  ngOnInit() {
    if(this.userservice.editproject)
         { 
           if(undefined!=this.userservice.editproject.resource_time)
           {
             
             this.project=this.userservice.editproject;
             console.log(this.project)
             console.log(this.project.resource_time)
             this.totaltask=this.project.resource_time
             this.manresource=this.totaltask.filter(res=>res.official[0].role=='HR Manager' || res.official[0].role=='Manager' || res.official[0].role=='Management')
             console.log(this.manresource)
             this.empresource=this.totaltask.filter(res=>res.official[0].role=='Employee' || res.official[0].role=='System Admin')
             console.log(this.empresource)
             this.manresource.forEach(res=>{
                  this.managercount++; 
                })
            this.empresource.forEach(res=>{
                this.employeecount++; 
              })
            }
         }
    if(this.userservice.editproject)
         { 
           if(undefined!=this.userservice.editproject.project)
           {
             this.project=this.userservice.editproject;
             console.log(this.project)
             this.projectassign=this.userservice.editproject.project[0].projectname
             console.log(this.project)
             console.log(this.project.resource_time)
             this.totaltask=this.project.resource_time
           }
         }

  	this.basePro=this.restangular.all('project_time');
    this.basePro.getList().subscribe( data=>{
    this.pro=data;
    return this.pro;
    });

    var basepro1= this.restangular.all('project_time');
    basepro1.getList().subscribe(data=>{
    this.proresp=data.filter(res=>res.resource_time);
    console.log(this.proresp);
    return this.proresp;
    });



   
    var baseOfficial= this.restangular.all('createemployee');
    baseOfficial.getList().subscribe(data=>{
      var rt=this.userservice.editproject;
    //this.officiald=data;
   this.officiald1=data.filter(res=> true == this.finde(res._id,rt) );
   this.officiald1=this.officiald1.filter(obj=>obj.official[0].role=="Manager" || obj.official[0].role=="HR Manager" || obj.official[0].role=="Management"  && obj.official[0].role!="Employee")
    console.log( this.officiald1)
    return this.officiald1;
    });

       
    var baseOfficial= this.restangular.all('createemployee');
    baseOfficial.getList().subscribe(data=>{
      var rt=this.userservice.editproject;
    //this.officiald=data;
   this.officiald2=data.filter(res=> true == this.finde(res._id,rt));
   this.officiald2=this.officiald2.filter(obj=> obj.official[0].role=='Employee' || obj.official[0].role=="System Admin")
    console.log( this.officiald2)
    return this.officiald2;
    });

    var baseemployee= this.restangular.all('createemployee');
    baseemployee.getList().subscribe(data=>{
    this.officialdata=data;
    console.log(this.officialdata)
    return this.officialdata;
   });

  }


}
