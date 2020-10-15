import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {UserService } from '../../../user.service';

import { RestangularModule, Restangular} from 'ngx-restangular';
declare var $:any

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private router:Router,private restangular:Restangular,public service:UserService) { 
  this.service=service;

  }

  employee = { official: [{}] };
  editRowId;
  view;
  getuser;
  username;
  email;
  officiald;
  leavemanagement;
  user;
  updatebutton = false;off;

  view1(data) 
{
  console.log(data);
  this.service.editfun(data);
  this.service.viewfun(data);
}

notview1(data) 
{
  this.service.addfun(data);
}

edit(data) {

  this.editRowId = data;
  console.log(data)
  this.service.editfun(data);
  this.updatebutton = true;
  this.employee= data
}

box(hide)
{
this.employee=hide;
}

setval=false

changeView(view,data) 
{
 console.log(data);
 if(view=="inactive")
 {
  var com = confirm("Are you sure you want to inactivate this employee?")
  if(com)
  {
   console.log(data[0].official[0].username);
   console.log(data[0].official[0].email);
   console.log(data[0].official[0].status);
   var employeestatus=view;
   var base=this.restangular.all('/changestatua')  
   base.post({username:data[0].official[0].username,utype:data[0].official[0].role,email:data[0].official[0].email,employeestatus:employeestatus}).toPromise().then(res=>{
   console.log(res);
   console.log(res.value);
   data[0].employeestatus=view;
   data[0].save();
   alert("Employee Status has been Updated to INActive");
   if(res.value)
   {
     this.actbtn=true;
     this.inactbtn=false;
   }
   if(res.succes)
   {
    this.setval=true;
    setTimeout(() => {this.setval=false;},3000);
   }
   else
   {
    this.setval=true;
    setTimeout(() => {this.setval=false;},3000);
   }
  }) 
  }
 }
else if(view=="active")
{
 var com = confirm("Are you sure you want to Activate this employee?");
 if(com)
  {
   console.log(data[0].official[0].username);
   console.log(data[0].official[0].email);
   console.log(data[0].official[0].status);
   var employeestatus=view;
   var base=this.restangular.all('/changestatua')  
   base.post({username:data[0].official[0].username,utype:data[0].official[0].role,email:data[0].official[0].email,employeestatus:employeestatus}).toPromise().then(res=>{
   console.log(res);
   console.log(res.value);
   data[0].employeestatus=view;
   data[0].save();
   alert("Employee Status has been Updated to Active");
   if(res.value)
   {
     this.actbtn=false;
     this.inactbtn=true;
   }
   if(res.succes)
   {
   this.setval=true;
   setTimeout(() => {this.setval=false;},3000);
   }
   else
   {
    this.setval=true;
    setTimeout(() => {this.setval=false;},3000);
   }
  }) 
  // this.ngOnInit();
  }
 }
}

official(){
	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['official']}}]}}])
}

documents(){
	if(this.service.editdata)
         { const key=Object.keys(this.service.editdata)
           if(key.length!=0)
           { this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['documents']}}]}}])
           }
           else { 	alert("Please Add New Employee")  }
         }

}
leave(){
	if(this.service.editdata)
         { const key=Object.keys(this.service.editdata)
           if(key.length!=0)
           {   this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['leave']}}]}}])
           }
           else { 	alert("Please Add New Employee")  }
         }

}
holidays(){
	if(this.service.editdata)
         { const key=Object.keys(this.service.editdata)
           if(key.length!=0)
           {   this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['holidays']}}]}}])
           }
           else { 	alert("Please Add New Employee")  }
         }

}
salary(){
	if(this.service.editdata)
         { const key=Object.keys(this.service.editdata)
           if(key.length!=0)
           { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['salary']}}]}}])

           }
           else { 	alert("Please Add New Employee")  }
         }

}
personal()
{
	if(this.service.editdata)
         { const key=Object.keys(this.service.editdata)
           if(key.length!=0)
           { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['personal']}}]}}])

           }
           else { 	alert("Please Add New Employee")  }
         }

}
contact()
{
	if(this.service.editdata)
         { const key=Object.keys(this.service.editdata)
           if(key.length!=0)
           { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['contact']}}]}}])

           }
           else { 	alert("Please Add New Employee")  }
         }

}
skills(){
	if(this.service.editdata)
         { const key=Object.keys(this.service.editdata)
           if(key.length!=0)
           { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['skills']}}]}}])

           }
           else { 	alert("Please Add New Employee")  }
         }

}
jobHistory(){
	if(this.service.editdata)
         { const key=Object.keys(this.service.editdata)
           if(key.length!=0)
           { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['jobhistory']}}]}}])

           }
           else { 	alert("Please Add New Employee")  }
         }

}
experience(){
	if(this.service.editdata)
         { const key=Object.keys(this.service.editdata)
           if(key.length!=0)
           { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['experience']}}]}}])

           }
           else { 	alert("Please Add New Employee")  }
         }

}
education(){
	if(this.service.editdata)
         { const key=Object.keys(this.service.editdata)
           if(key.length!=0)
           { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['education']}}]}}])

           }
           else { 	alert("Please Add New Employee")  }
         }

}
trcer(){
	if(this.service.editdata)
         { const key=Object.keys(this.service.editdata)
           if(key.length!=0)
           { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['trainingcertification']}}]}}])

           }
           else { 	alert("Please Add New Employee")  }
         }

}
medical(){
	if(this.service.editdata)
         { const key=Object.keys(this.service.editdata)
           if(key.length!=0)
           { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['medicalclaims']}}]}}])

           }
           else { 	alert("Please Add New Employee")  }
         }

}
disablity(){
	if(this.service.editdata)
         { const key=Object.keys(this.service.editdata)
           if(key.length!=0)
           { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['disability']}}]}}])

           }
           else { 	alert("Please Add New Employee")  }
         }

}
dependency()
{  
if(this.service.editdata)
         { const key=Object.keys(this.service.editdata)
           if(key.length!=0)
           { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['emp-dependency']}}]}}])

           }
           else { 	alert("Please Add New Employee")  }
         }   console.log("dependency")

}
visa(){
	if(this.service.editdata)
         { const key=Object.keys(this.service.editdata)
           if(key.length!=0)
           { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['visaandimmigration']}}]}}])

           }
           else { 	alert("Please Add New Employee")  }
         }

}
corpcard(){
	if(this.service.editdata)
         { const key=Object.keys(this.service.editdata)
           if(key.length!=0)
           { 		  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['corporatecard']}}]}}])

           }
           else { 	alert("Please Add New Employee")  }
         }

}


weligib(){
	if(this.service.editdata)
         { const key=Object.keys(this.service.editdata)
           if(key.length!=0)
           { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['emp_workeligiblity']}}]}}])

           }
           else { 	alert("Please Add New Employee")  }
         }

}
adetails(){
	if(this.service.editdata)
         { const key=Object.keys(this.service.editdata)
           if(key.length!=0)
           { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['additionaldetails']}}]}}])

           }
           else { 	alert("Please Add New Employee")  }
         }

}
/*pappraisal(){
	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['employee',{outlets:{fourthchild:['performanceappraisal']}}]}}])

}
pslips(){
	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['employee',{outlets:{fourthchild:['payslips']}}]}}])

}
benefits(){
	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['employee',{outlets:{fourthchild:['benefits']}}]}}])

}*/
remuneration(){
	if(this.service.editdata)
         { const key=Object.keys(this.service.editdata)
           if(key.length!=0)
           { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['remuneration']}}]}}])

           }
           else { 	alert("Please Add New Employee")  }
         }

}
seccren(){
	if(this.service.editdata)
         { const key=Object.keys(this.service.editdata)
           if(key.length!=0)
           { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['securitycredentials']}}]}}])

           }
           else { 	alert("Please Add New Employee")  }
         }
}

actbtn=false;inactbtn=false;
btnset()
{
  console.log(this.officiald[0].employeestatus);
 if(this.officiald[0].employeestatus=='active')
 {
   console.log(this.inactbtn);
   this.actbtn=false;
   this.inactbtn=true;
 }
 else if(this.officiald[0].employeestatus=='inactive')
 {
  console.log(this.inactbtn);
   this.actbtn=true;
   this.inactbtn=false;
 }
}

offemp
i;
  ngOnInit() {
  	
 $("a").click(function(e) {
    console.log(e)
        e.preventDefault();
        $("a").removeClass("active");
        $(this).addClass("active");
        
    });

this.getuser=JSON.parse(localStorage.getItem('user'));
console.log(this.getuser)

var baseOfficial = this.restangular.all('createemployee');
baseOfficial.getList({"_id":this.service.editdata._id}).subscribe(data => {
  console.log(data)
  this.officiald = data.filter(res=>res.official);
  console.log(this.officiald)
  this.btnset();
  return this.officiald;
});

let baseBusiness = this.restangular.all('user');
baseBusiness.getList().subscribe(data => {
this.user =data;
console.log(this.user)
return this.user;
});

if(this.getuser.employee_OId && this.getuser.employee_OId!=''){
  this.restangular.all('createemployee').getList({_id:this.getuser.employee_OId}).subscribe(res=>{
   this.leavemanagement=res
   console.log(this.leavemanagement)
    res.forEach(data=>{
      // console.log(data.event);
      // data.push(data.event)
    })
  });
 }

var token=localStorage.getItem('user');
    var jso=JSON.parse(token)    
    var base=this.restangular.all('user')
    base.getList({username:jso.username}).subscribe(data=>{
     console.log(data)
      this.username =data[0].username;
       this.email = data[0].email;
   })
}
}






