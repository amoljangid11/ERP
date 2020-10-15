import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router} from '@angular/router';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { Md2Dialog } from 'md2';
import {UserService } from '../../../../user.service';
import { resource } from 'selenium-webdriver/http';

@Component({
  selector: 'app-tasks-time',
  templateUrl: './tasks-time.component.html',
  styleUrls: ['./tasks-time.component.css']
})
export class TasksTimeComponent implements OnInit {
 
  constructor(private userservice:UserService,private restangular: Restangular,private router:Router,private http: Http) 
  { 
       this.userservice=userservice;
  }

 freq;
 task_time={}; 
 
 project={task_time:[{}]};
 selectbut
 totaltask;
 project1={resourceassign:[{}]};
 project2={assignresource:[{}]};
 project3={assigntask:[{}]};
 projects={resource_time:[{}]};

IsVisible = false;
IsFrequent = false;
IsTask=true;

Showtask(value) {
               this.IsVisible = (value == "Y")
               this.IsFrequent = (value == "T")
               this.IsTask = (value == "N")
           }
projectname;
tadatas;
taskdata;
pro;
ttask;
task;
type:any;
tasktype:any;
taskcheck:any;
task_code;
Dt
editRowId;
newcheck:any;
dropres;
open(dialog: Md2Dialog) {
dialog.open();
}

close(dialog: any) {
dialog.close();
}
task_resource;

changestatus(datas)
{
  
  datas.estimatedhour="";
  datas.tbillablerate="";
  datas.billable="";
}

 tsk

  createnewres(create,datas){
    create.task_time = [];
    create.task_time._eid=this.dropres._id;
    create.task_time.push(datas)
    create.save().toPromise().then(function(resp){console.log(resp)})   
  }
  
  createexistres(create,datas){ 
    create.save().toPromise().then(function(resp){console.log(resp) }) 
  }
  removeEmployee(employee)
  {
    var obj = this.officiald.filter(obj._id==employee._id)
    console.log("ddddd "+obj)
    obj.remove();
  }

projectsave(){

var create=this.userservice.editproject;
 if(this.Dt=='Dt')
 { 
    
     if(undefined!=create.task_time)
     {
       let obj=this.tadatas.filter(data => true == data.status )
        console.log(obj)
       this.createexist(create,obj);
     }
     else
     {
       let obj=this.tadatas.filter(data => true == data.status )
        console.log(obj)
       this.createnew(create,obj);
     }
 } 
 else if(this.Dt=='Nt')
 {
      if(undefined!=create.task_time)
     {
       
       this.createexist(create,this.task_time);
     }
     else
     {
       this.createnew(create,this.task_time);

     }


 }
 else if(this.Dt=='Ft')
 {
   
   if(undefined!=create.task_time)
     {
       let obj=this.freq.filter(data => true == data.status )
        console.log(obj)
       this.createexist(create,obj);
     }
     else
     {
       let obj=this.freq.filter(data => true == data.status )
        console.log(obj)
       this.createnew(create,obj);
     }

 }

}
 
createnew(create,data)
{
 
 create.task_time = [];
if(this.Dt=="Nt")
{
 create.task_time.push(data)
 create.save().toPromise().then(function(res){
 console.log(res)    
 
})
 if(this.newcheck)
 {
   let obj={task:data.task,status:false}
   this.tadatas.post(obj)
 }
 else{
  //  let obj={task:data.task,status:false}
  //  this.baseFreq.post(obj)
  this.baseFreq.task=data.task;
  this.baseFreq.status=false;
  this.baseFreq.save();
 }

}else{
 data.forEach(obj=>{
 create.task_time.push(obj)
 create.save().toPromise().then(function(res){
 console.log(res)    
 
})
 }) 
}
}

baseFreq;

createexist(create,data)
{
  if(this.Dt=="Nt")
  {
      create.task_time.push(data)
      create.save().toPromise().then(function(res){ console.log(res) })
      if(this.newcheck)
        {
          let obj={task:data.task,status:false}         
           this.tadatas.post(obj)     
         }
      else{
            this.baseFreq.task=data.task;
            this.baseFreq.status=false;
            this.baseFreq.save();
          }
  }
  else{
    data.forEach(obj=>{ 
    create.task_time.push(obj)
    create.save().toPromise().then(function(res){ console.log(res) })
  })
  }

}

update(project){
this.editRowId = false;
 project.save();
}


updatetask(projecttime){
 projecttime.save().toPromise().then(function(res){
 console.log(res)   
})

}

viewres
view(dataall,i) {
  // this.updatebutton = true;
  console.log(dataall);
  this.viewres= dataall.assignresource
  console.log(this.viewres)
  this.i=i;
  console.log(this.i)
}
addemp;


i=0;
viewTask(task,t){
  console.log(task);
  console.log(t);
this.project=task;
this.i=t;
}

deletetask;
a;
abc=[]
// delete(datas,i)
// {
//   alert("Are you sure! you want to delete this data from the database");
//   console.log(datas);
//   console.log(i);
//   console.log(datas.task_time);
//   for(let i=0;i<datas.task_time.length;i++)
//   {
//     console.log(datas.task_time[i])
//     console.log(this.tsk)
//     if(datas.task_time[i]==this.tsk)
//     {
//       datas.remove().toPromise().then(res=> {
//         console.log(res)
//         this.restangular.one('project_time').getList()
//         .subscribe(data=>data.filter(res=>res.task_time[i]))
//        })
//        this.abc=datas.task_time[i]
//         datas.splice(this.abc,1);
//      datas.task_time[i].splice(i,1);
//     }
//   }
// }

delete(datas)
{
console.log(datas);
alert("Are you sure! you want to delete this data from the database");
  console.log(datas);
  console.log(datas.task_time);
  for(let i=0;i<datas.task_time.length;i++)
  {
    console.log(datas.task_time[i])
    console.log(this.tsk)
    if(datas.task_time[i]==this.tsk)
    {
     datas.task_time.forEach(obj=>{
       console.log(obj)
     obj[i].remove().toPromise().then(function(res){
     console.log(res)   
     obj.task_time.splice(i,1) 
      })
     })
    }
  }
 }

 filterTask(value)
 {
   console.log(value);
   value=value.toLowerCase();
   if(!value)
  {
    console.log("else")
   
    this.pro1=this.restangular.all('project_time');
   
    this.pro1.getList().subscribe(data => {
     
      console.log(data)
      this.pro1=data.filter(res=>res.task_time);
      console.log(this.pro1)
      console.log(this.pro1.length)
      for(let i=0;i<this.pro1.length;i++)
      {
        console.log(this.pro1[i].task_time.length)
        console.log(this.totaltask.length)
        if(this.pro1[i].task_time.length==this.totaltask.length)
        {
          console.log("a")
          this.project.task_time=this.pro1[i].task_time
          console.log(this.project.task_time)
        }
        console.log("b")
      }
      return this.project.task_time
    });
    }
   else{
       this.project.task_time= this.project.task_time.filter(
       function (el: any) {
         console.log(el);
         console.log(el.task.toLowerCase().indexOf(value) > -1)
        return el.task.toLowerCase().indexOf(value) > -1;
             }
       )
     console.log("searchfd")
     console.log(this.project.task_time)        
   }
  }

  filterres(value)
  {
    console.log(value);
    value=value.toLowerCase();
    if(!value)
   {
     console.log("else")
    
     this.pro1=this.restangular.all('project_time');
    
     this.pro1.getList().subscribe(data => {
      
       console.log(data)
       this.pro1=data.filter(res=>res.task_time);
       console.log(this.pro1)
       console.log(this.pro1.length)
       for(let i=0;i<this.pro1.length;i++)
       {
         console.log(this.pro1[i].task_time.length)
         console.log(this.totaltask.length)
         if(this.pro1[i].task_time.length==this.totaltask.length)
         {
           console.log("a")
           for(let j=0;j<this.pro1[i].task_time.length;j++)
           {
             console.log(this.pro1[i].task_time[j])
             console.log(this.tsk)
             if(this.pro1[i].task_time[j].assignresource.length==this.tsk.assignresource.length)
             {
               console.log("b")
              this.viewres=this.pro1[i].task_time[j].assignresource
              console.log(this.viewres)
             }
           }
         }
         console.log("c")
       }
       return this.viewres
     });
     }
    else{
       console.log(this.viewres)
        this.viewres= this.viewres.filter(
          function (el: any) {
            console.log(el)
              console.log(el.official[0].firstname.toLowerCase().indexOf(value) > -1 ||  el.official[0].lastname.toLowerCase().indexOf(value) > -1)
            return el.official[0].firstname.toLowerCase().indexOf(value) > -1 ||  el.official[0].lastname.toLowerCase().indexOf(value) > -1 ;
      }
        )
      console.log("searchfd")
      console.log(this.project.task_time)        
    }
   }

   filterresource(value)
   {
     console.log(value);
     value=value.toLowerCase();
     if(!value)
    {
      console.log("else")
     
      this.pro1=this.restangular.all('project_time');
     
      this.pro1.getList().subscribe(data => {
       
        console.log(data)
        this.pro1=data.filter(res=>res.task_time);
        console.log(this.pro1)
        console.log(this.pro1.length)
        for(let i=0;i<this.pro1.length;i++)
        {
          console.log(this.pro1[i].task_time.length)
          console.log(this.totaltask.length)
          if(this.pro1[i].task_time.length==this.totaltask.length)
          {
            console.log("a")
            this.totalresources=this.userservice.editproject.resource_time
          }
          console.log("c")
        }
        return this.totalresources
      });
        

      }
     else{
        console.log(this.viewres)
         this.totalresources= this.userservice.editproject.resource_time.filter(
           function (el: any) {
             console.log(el)
               console.log(el.official[0].firstname.toLowerCase().indexOf(value) > -1 ||  el.official[0].lastname.toLowerCase().indexOf(value) > -1)
             return el.official[0].firstname.toLowerCase().indexOf(value) > -1 ||  el.official[0].lastname.toLowerCase().indexOf(value) > -1 ;
       }
         )
       console.log("searchfd")
       console.log(this.totalresources)        
     }
    }
    filterselresource(value)
    {
      console.log(value);
      value=value.toLowerCase();
      if(!value)
     {
       console.log("else")
      
       this.pro1=this.restangular.all('project_time');
      
       this.pro1.getList().subscribe(data => {
        
         console.log(data)
         this.pro1=data.filter(res=>res.task_time);
         console.log(this.pro1)
         console.log(this.pro1.length)
         for(let i=0;i<this.pro1.length;i++)
         {
           console.log(this.pro1[i].task_time.length)
           console.log(this.totaltask.length)
           if(this.pro1[i].task_time.length==this.totaltask.length)
           {
             console.log("a")
             for(let j=0;j<this.pro1[i].task_time.length;j++)
             {
               console.log(this.pro1[i].task_time[j])
               console.log(this.tsk)
               if(this.pro1[i].task_time[j].assignresource.length==this.tsk.assignresource.length)
               {
                 console.log("b")
                this.resourceassign=this.assignres
                console.log(this.resourceassign)
               }
             }
           }
           console.log("c")
         }
         return this.resourceassign
       });
       }
      else{
         console.log(this.assignres)
          this.resourceassign= this.assignres.filter(
            function (el: any) {
              console.log(el)
                console.log(el.official[0].firstname.toLowerCase().indexOf(value) > -1 ||  el.official[0].lastname.toLowerCase().indexOf(value) > -1)
              return el.official[0].firstname.toLowerCase().indexOf(value) > -1 ||  el.official[0].lastname.toLowerCase().indexOf(value) > -1 ;
        }
          )
        console.log("searchfd")
        console.log(this.project.task_time)        
      }
     }
pro11;
pro1;
officiald;

  droppedItems=[]
  resourceassign=[]
  assignres=[];
onItemDrop(e: any) {
  // Get the dropped data here
  this.droppedItems.push(e.dragData);
  console.log(this.droppedItems)

  console.log(this.project.task_time)
  if(undefined==this.project.task_time)
   {
     console.log("if")
     this.resourceassign.push(e.dragData)
     console.log(this.resourceassign)
     this.assignres=this.resourceassign
   }
   else{
      console.log("else")
      // this.project1.resourceassign=[];
      this.resourceassign.push(e.dragData)
      console.log(this.resourceassign)
       this.assignres=this.resourceassign
   }

   console.log(e)
  //  e.dragData.save(e.dragData);
  //  this.droppedItems[e.dragData] = e;
  //  console.log(this.droppedItems)
  // this.droppedItems.slice(e.dragData); 
  // console.log(this.droppedItems)
  // this.droppedItems.push(e.dragData); 
  // console.log(this.droppedItems)

   console.log(e.dragData)
   console.log(e.dragData._id)
   console.log(this.totalresources)
   this.totalresources=this.totalresources.filter(data=> e.dragData._id !==data._id) 
   console.log(this.totalresources)

  this.dropres=e.dragData;
  console.log(this.dropres)
}

onItemDrop1(e: any) {
  // Get the dropped data here
  this.droppedItems.push(e.dragData);
  console.log(this.droppedItems)

  console.log(this.project.task_time)
  if(undefined==this.project.task_time)
   {
     console.log("if")
     this.totalresources.push(e.dragData)
     console.log(this.totalresources)
  
   }
   else{
      console.log("elsetotalresources")
      // this.project1.resourceassign=[];
      this.totalresources.push(e.dragData)
      console.log(this.totalresources)
    
   }

   console.log(e)
   console.log(e.dragData)
   console.log(e.dragData._id)
   console.log(this.totalresources)
   this.resourceassign=this.resourceassign.filter(data=> e.dragData._id !==data._id) 
   console.log(this.resourceassign)
   this.assignres=this.resourceassign
  this.dropres=e.dragData;
  console.log(this.dropres)
}

pertclrtask;
pertclresthours;
totalreslength;
totalreso=[];

selectedTask(project)
{
   this.tsk = project;
   console.log(this.tsk)
   console.log("task "+this.tsk)
   console.log("task "+this.tsk.task)
   this.pertclrtask=this.tsk.task;
   console.log( this.pertclrtask)
   this.pertclresthours=this.tsk.estimatedhour
   console.log( this.pertclresthours)

   for(let i=0;i<this.totaltask.length;i++)
   {
     console.log(this.totaltask[i])
     console.log(this.tsk)
     if(this.totaltask[i]==this.tsk)
     {
       console.log("abc");
       if(this.totaltask[i].assignresource)
       {
         console.log("abbbbcccc")
       this.totalreslength= this.totaltask[i].assignresource.length
       console.log(this.totalreslength)
        //  this.resourcecount++; 
       }
     }
   }
   for(let i=0;i<this.totaltask.length;i++)
   {
     console.log(this.totaltask[i])
     console.log(this.tsk)
     if(this.totaltask[i]==this.tsk)
     {
       console.log("abc");
  //  console.log(this.totaltask[i].assignresource)
  //      console.log(this.totaltask[i].assignresource.length)
       if(this.totaltask[i].assignresource==undefined)
       {
         console.log("vihaannnnnnn")
         this.totalresources=this.totalrestime.resource_time;
         console.log(this.totalresources)
       }
       else if(this.totaltask[i].assignresource!=undefined)
       {
         console.log("shriansh")
        //  this.totalreso=this.totaltask.filter(obj=>obj.assignresource==this.totalrestime.resource_time)
        //  console.log(this.totalreso)
        //  this.totalreso=this.totalrestime.find(obj=>obj.resource_time==this.totaltask.assignresource)
        //  console.log(this.totalreso)

        console.log(this.totalrestime.resource_time);
        for(let j=0;j<this.totaltask[i].assignresource.length;j++)
        {
          console.log("xxxxx")
          // console.log(this.t)
          for(let k=0;k<this.totalrestime.resource_time.length;k++)
          {
            console.log("bvcb")
        // this.totalresources=this.totalrestime.resource_time[k].filter(obj=>obj==this.totaltask[i].assignresource[j])
        //  console.log(this.totalresources)
        this.totalresources=this.totalrestime.resource_time;
        console.log(this.totalresources)
          }
        }
        }
       }
      }
    return this.totalresources;
  }



resourcesave(datas)
 {
   console.log(datas);
   console.log(datas.task_time);
   console.log(datas.task_time.length)
   for(let i=0;i<datas.task_time.length;i++)
   {
   console.log(this.tsk);
   console.log(datas.task_time[i]);
   if(datas.task_time[i]==this.tsk)
   {
     console.log("abc");
 
     console.log(this.assignres.length)
     console.log(datas.task_time[i].assignresource)
     for(let j=0;j<this.assignres.length;j++)
     {
    //  datas.task_time[i].assignresource.push(this.assignres)
    if(datas.task_time[i].assignresource==undefined)
    {
       datas.task_time[i].assignresource=[]
       console.log(this.assignres[j])
       datas.task_time[i].assignresource[j]=this.assignres[j];
       console.log(datas.task_time[i].assignresource[j])
       datas.save().toPromise().then(res=>{
      console.log(res)
      this.restangular.all('project_time').getList()
       .subscribe(data=>data.filter(res=>res.assignresource))
      })
      // this.project2={assignresource:[{}]};
     }
     else if(datas.task_time[i].assignresource!=undefined)
     {
       console.log("aabbbbcc")
       console.log(this.assignres[j])
       datas.task_time[i].assignresource.push(this.assignres[j])
       datas.save().toPromise().then(res=>{
        console.log(res)
        this.restangular.all('project_time').getList()
         .subscribe(data=>data.filter(res=>res.assignresource))
        })
        // this.project2={assignresource:[{}]};
     }
    } 
  }
  }
  // this.tasksave(this.project)
}

tasksave(datas)
{
console.log(datas);
for(let i=0;i<datas.task_time.length;i++)
   {
   console.log(this.tsk);
   console.log(datas.task_time[i]);
   if(datas.task_time[i]==this.tsk)
   {
     console.log("aaaaaaaaa")
     for(let j=0;j<datas.resource_time.length;j++)
     {
       console.log(datas.resource_time[j])
       console.log(datas.task_time[i].assignresource)
       for(let k=0;k<datas.task_time[i].assignresource.length;k++)
       {
         console.log("abc")
       if(datas.resource_time[j]==datas.task_time[i].assignresource[k])
       {
          console.log("xyz")
          console.log("new")
                      datas.resource_time[j].assigntask=[];
                      datas.resource_time[j].assigntask[i]=datas.task_time[i];
                      console.log(datas.resource_time[j].assigntask[i])
                      datas.save().toPromise().then(res=>{
                     console.log(res)
                     this.restangular.all('project_time').getList()
                      .subscribe(data=>data.filter(res=>res.assigntask))
                     })
                     this.project3={assigntask:[{}]};

       }
      }
     }
   }
  }
}

// tasksave(datas)
//  {
//    console.log(datas);
//    console.log(datas.task_time);
//    console.log(datas.task_time.length)
//    for(let i=0;i<datas.task_time.length;i++)
//    {
//    console.log(this.tsk);
//    console.log(datas.task_time[i]);
//    if(datas.task_time[i]==this.tsk)
//    {
//      console.log("abc");
//      console.log(datas.resource_time.length)
//      for(let k=0;k<datas.resource_time.length;k++)
//      {
//         // datas.resource_time[k].assigntask=[];
//         console.log(datas.resource_time[k].assigntask)
//         console.log(this.assignres.length)
//         for(let j=0;j<datas.task_time[i].assignresource.length;j++)
//         {
//     //  datas.task_time[i].assignresource.push(this.assignres)
//        console.log(this.assignres[j])
//        console.log(datas.resource_time[k])
//        if(datas.resource_time[k]==datas.task_time[i].assignresource[j])
//          {
//           console.log("hrushi....!!!")
//           if(datas.resource_time[k].assigntask==undefined)
//           {
//             console.log("new")
//             datas.resource_time[k].assigntask=[];
//             datas.resource_time[k].assigntask[j]=datas.task_time[i];
//             console.log(datas.resource_time[k].assigntask[j])
//             datas.save().toPromise().then(res=>{
//            console.log(res)
//            this.restangular.all('project_time').getList()
//             .subscribe(data=>data.filter(res=>res.assigntask))
//            })
//            this.project3={assigntask:[{}]};
//           }
//           else if(datas.resource_time[k].assigntask!=undefined)
//           {
//             console.log("already")
//             console.log(this.assignres)
//             datas.resource_time[k].assigntask.push(datas.task_time[i])
//             datas.save().toPromise().then(res=>{
//             console.log(res)
//             this.restangular.all('project_time').getList()
//             .subscribe(data=>data.filter(res=>res.assigntask))
//         })
//         this.project3={assigntask:[{}]};
//           }
//     }
//     } 
//   }
//   }
//   }
// }


resource;
finde(res,rt){
  var flag=true;
  console.log(rt)
  console.log(res)
  for(let i=0;i<rt.task_time.length;i++)
  {
   console.log(rt.task_time[i]);
   console.log(rt.task_time[i].assignresource);
  if(rt.task_time[i].assignresource)
  {
    // console.log(rt.resource_time)
    // rt.resource_time.forEach(obj=>{ if(obj.official[0]._id == res) flag=false;})
    // console.log(flag)
    console.log(i);
    for(let j=0;j<rt.task_time[i].assignresource.length;j++)
    {
     console.log(j);
     console.log(rt.task_time[i].assignresource)
     if(rt.task_time[i].assignresource[j]._id==res)
     flag=false
     }
  }
    return flag;
  }
  }
  totalresources=[];
  resourcecount;
  totalrestime;
ngOnInit() {
     if(this.userservice.editproject)
         { 
           if(undefined!=this.userservice.editproject.task_time)
           {
             
             this.project=this.userservice.editproject;
             console.log(this.project)
             console.log(this.project.task_time)
             this.totaltask=this.project.task_time
             console.log(this.totaltask)
           }
         }

    if(this.userservice.editproject)
         { 
           if(undefined!=this.userservice.editproject.project)
           {
             
             this.project=this.userservice.editproject;
             console.log(this.project)
             console.log(this.project.task_time)
             this.totaltask=this.project.task_time
             console.log(this.totaltask)
            //  this.resourcecount=this.project.task_time
        

           }
         }
    let baseClient = this.restangular.all('defaulttask');
    baseClient.getList().subscribe(dtask => {
      this.tadatas = dtask;
       return this.tadatas;
});

 
    var basePro=this.restangular.one('project_time');
    basePro.getList().subscribe( data=>{

    this.pro=data;
    return this.pro;
 });
    this.baseFreq=this.restangular.one('frequenttask');
    this.baseFreq.getList().subscribe( data=>{

    this.freq=data;
    return this.freq;
 });

 var baseOfficial = this.restangular.all('createemployee');
 baseOfficial.getList().subscribe(data => {   
   this.officiald = data
   console.log(this.officiald)
   return this.officiald;
 });

 var basepro1= this.restangular.all('project_time');
 basepro1.getList().subscribe(data=>{
 this.pro1=data.filter(res=>res.task_time);
 console.log(this.pro1);
 return this.pro1;
 });

 var basepro2= this.restangular.all('project_time');
 basepro2.getList().subscribe(data=>{
 this.totalrestime=this.userservice.editproject;
 console.log(this.totalrestime)

 });   
  }
 project_time(){
  this.router.navigate(['./time',{outlets:{timechild:['projects',{outlets:{projectchild:['project_time']}}]}}])
}

}
