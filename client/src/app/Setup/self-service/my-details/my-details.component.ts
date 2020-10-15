import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {UserService } from '../../../user.service';
import { RestangularModule, Restangular} from 'ngx-restangular';
declare var $:any

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  constructor(private router:Router,private restangular:Restangular,public service:UserService) { 
    this.service=service;

  }

  // employee = { official: [{}] };
  officiald
  leavemanagement;
  getuser;
  employee;
  add(data) {
    alert("Please Add Employee Configuration");
    this.service.addfun(data);
  }

  view1(data) 
  {
    this.service.editfun(data);
    this.service.viewfun(data);
  }
  
///view////
viewoff(data) {
this.service.official(data);
  }
viewdoc(data) {
this.service.documents(data);
 }
viewleave(data) {
 this.service.leave(data);
 }
viewholiday(data) {
  this.service.holidays(data);
 }
viewsal(data) {
  this.service.salary(data);
}
viewpers(data) {
  this.service.personal(data);
}
viewcon(data) {
  this.service.contact(data);
}
viewskill(data) {
  this.service.skills(data);
}
viewjob(data) {
  this.service.jobHistory(data);
}
viewexp(data) {
  this.service.experience(data);
}
viewedu(data) {
this.service.education(data);
}
viewtandc(data) {
  this.service.trcer(data);
 }
viewmed(data) {
  this.service.medical(data);
}
viewdisa(data) {
  this.service.disablity(data);
}
viewdep(data) {
  this.service.dependency(data);
}
viewsvisa(data) {
  this.service.visa(data);
}
viewcard(data) {
  this.service.corpcard(data);
}
viewworkel(data) {
this.service.weligib(data);
}
viewadddetail(data) {
  this.service.adetails(data);
}
official(data){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['official']}}]}}])
   this.service.editdata=data;

}
documents(data){
  
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['documents']}}]}}])
  this.service.editdata=data;

}
leave(data){
	
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['leave']}}]}}])
   this.service.editdata=data;

}

holidays(data){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['holidays']}}]}}])
  this.service.editdata=data;

}
salary(data){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['salary']}}]}}])
   this.service.editdata=data;

}

personal(data) {
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['personal']}}]}}])
   this.service.editdata=data;

}
contact(data)
{
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['contact']}}]}}])
   this.service.editdata=data;

}
skills(data){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['skills']}}]}}])
  this.service.editdata=data;


}
jobHistory(data){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['jobhistory']}}]}}])
   this.service.editdata=data;	

}
experience(data){
	this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['experience']}}]}}])
   this.service.editdata=data;
}
education(data){
	this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['education']}}]}}])
   this.service.editdata=data;
}
trcer(data){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['trainingcertification']}}]}}])
   this.service.editdata=data;

}
medical(data){
	this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['medicalclaims']}}]}}])
   this.service.editdata=data;
}
disablity(data){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['disability']}}]}}])
   this.service.editdata=data;

}
dependency(data)
{  
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['dependency']}}]}}])
  this.service.editdata=data;
}
visa(data){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['visaandimmigration']}}]}}])
  this.service.editdata=data;

}
corpcard(data){
	this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['corporatecard']}}]}}])
   this.service.editdata=data;
}

weligib(data){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['emp_workeligiblity']}}]}}])
  this.service.editdata=data;

}
adetails(data){
	this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['additionaldetails']}}]}}])
   this.service.editdata=data;
}
view

changeView(view): void {
  this.view = view;
  if(this.view=="inactive"){
    confirm("Are you sure you want to inactivate this employee?")
  }
  else{
    confirm("Are you sure you want to Activate this employee?")
  }
  // this.dateOrViewChanged();
}

ngOnInit() {

this.getuser=JSON.parse(localStorage.getItem('user'));
console.log(this.getuser)

if(this.getuser.employee_OId && this.getuser.employee_OId!=''){
  this.restangular.all('createemployee').getList({_id:this.getuser.employee_OId}).subscribe(res=>{
   this.leavemanagement=res
   console.log(this.leavemanagement)
    res.forEach(data=>{
      // console.log(data.event);
      // data.push(data.event)
    })
  });
 

  var baseOfficial = this.restangular.all('createemployee');
  baseOfficial.getList({"_id":this.service.editdata._id}).subscribe(data => {
    console.log(data)
    this.officiald = data.filter(res=>res.official);
    console.log(this.officiald)
    return this.officiald;
  });
 }


}

}


