import { Injectable } from '@angular/core';
import{Http,HttpModule ,Headers,RequestOptions,Response, Jsonp} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {TreeTableModule,TreeNode,SharedModule,MenuItem,Message} from 'primeng/primeng';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

import{tokenNotExpired} from 'angular2-jwt';
import { Router} from '@angular/router';
// import { userInfo } from 'os';


@Injectable()
export class UserService {
visible: boolean;
invisible: boolean;
unvisible: boolean;
visiblehr: boolean;
addbutton: boolean;
editpensil: boolean;
photobox: boolean;
viewpensil: boolean;
domain ="http://localhost:3000";
authToken;
user;
options;
editdata;
editproject;
utype;showdiv=false;fetchid=false;
/*Arry=[{
          "data":[
          {"data":{"name":"Documents","size":"75kb","type":"Folder"},
           "children":[
                        {"data":{"name":"Work","size":"55kb","type":"Folder"},
                        "children":[
                                    {"data":{"name":"Expenses.doc","size":"30kb","type":"Document"}},
                                    {"data":{"name":"Resume.doc","size":"25kb","type":"Resume"}}]},
                                    {"data":{"name":"Home","size":"20kb","type":"Folder"},
                                    "children":[
                                       {"data":{"name":"Invoices","size":"20kb","type":"Text"}}]}
                      ]
          },
         {"data":{"name":"Pictures","size":"150kb","type":"Folder"},
           "children":[
                        {"data":{"name":"barcelona.jpg","size":"90kb","type":"Picture"}},
                        {"data":{"name":"primeui.png","size":"30kb","type":"Picture"}},
                        {"data":{"name":"optimus.jpg","size":"30kb","type":"Picture"}}
                       ]
         }
      ]}]*/
  constructor(private router:Router,
    private http:Http,private httpClient: HttpModule
    ) { this.visible = false; }
/* getFiles() {
     return this.http.get<any>('/roles.json').toPromise().then(res => <TreeNode[]>res.data);
    }*/
editproj(data)
{
  this.router.navigate(['./time',{outlets:{timechild:['create-project',{outlets:{projectchild:['project_time']}}]}}])
   this.editproject=data;

}
hide() { 
  if(this.user.utype!="admin" || this.user.utype!="HR" || this.user.utype!="Executive Director")
  {
    this.visible = false; 
    this.unvisible= true;
    this.visiblehr= false;
  }  
}

show() { 
if(this.user.utype=="admin" || this.user.utype=="HR" || this.user.utype=="Executive Director"){
this.visible = true; 
this.unvisible=false;
this.visiblehr=true;
}
// else if(this.user.utype=="HR"){
// this.visible = true; 
// this.unvisible=false;
// this.visiblehr=false; 
// }
}
queans(){
  this.visible=true
  this.invisible=false
}
queans1(){
  this.visible=false
  this.invisible=true
}

hide1() { 
  if(this.utype=="HR Manager")
  {
    this.visible = false; 
    this.unvisible= true;
    this.visiblehr= false;
    
  }  
}
   
show1(){
  if(this.utype=="admin")
  {
    this.visible = true; 
    this.unvisible= false;
    this.visiblehr= false;
    
  }  
}


toggle() { this.visible = !this.visible; }



getConfiguration(): Observable<Response> {
        console.log("In getConfiguration of ConfigurationService");
        return this.http.get('app/roles.json').map(res => res.json());
    }


add()
{
  this.router.navigate(['./time',{outlets:{timechild:['create-project',{outlets:{projectchild:['project_time']}}]}}])
  this.editproject={};
}

 editfun(data)
 { 
  this.fetchid=true;
  this.showdiv=false;
  this.photobox=true;
   this.visible=true;
   this.invisible=false;
   this.addbutton=true;
    // this.viewpensil=false;
    // this.editpensil=true;
   this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['official']}}]}}])
   this.editdata=data;
   console.log(this.editdata)
   return this.editdata
  
 }
 editcontact(data)
 { 
  //this.photobox=true;
   this.visible=true;
   this.invisible=false;
   this.addbutton=true;
    // this.viewpensil=false;
    //this.editpensil=true;
   this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['contact']}}]}}])
   this.editdata=data;
   console.log(this.editdata)
   return this.editdata
  
 }
 editworkeligibily(data)
 { 
  //this.photobox=true;
   this.visible=true;
   this.invisible=false;
   this.addbutton=true;
   this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['emp_workeligiblity']}}]}}])
   this.editdata=data;
   console.log(this.editdata)
   return this.editdata
 }
 editcorpcard(data)
 { 
  //this.photobox=true;
   this.visible=true;
   this.invisible=false;
   this.addbutton=true;
   this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['corporatecard']}}]}}])
   this.editdata=data;
   console.log(this.editdata)
   return this.editdata
 }

 editpersonal(data)
 { 
  this.photobox=true;
   this.visible=true;
   this.invisible=false;
   this.addbutton=true;
    // this.viewpensil=false;
    // this.editpensil=true;
   this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['personal']}}]}}])
   this.editdata=data;
   console.log(this.editdata)
   return this.editdata
  
 }
 editdisability(data)
 { 
  this.photobox=true;
   this.visible=true;
   this.invisible=false;
   this.addbutton=true;
    // this.viewpensil=false;
    // this.editpensil=true;
   this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['disability']}}]}}])
   this.editdata=data;
   console.log(this.editdata)
   return this.editdata
  
 }


 viewfun(data)
 { 
  this.photobox=true;
  this.invisible=true;
  this.visible=false;
  // this.viewpensil=true;
  // this.editpensil=false;
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['official']}}]}}])
  this.editdata=data;
  console.log(this.editdata)
  return this.editdata
 }

//  leaveviewfun(data)
//  {
//   this.invisible=false;
//   this.visible=true;
//   //this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['official']}}]}}])
//   this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['official']}}]}}])
//   this.editdata=data;
//   console.log(this.editdata)
//   return this.editdata
//  }

 viewinit(data)
 { 
  this.invisible=true;
  this.visible=false;
this.router.navigate(['./setuproot',{outlets:{thirdchild:['initiate_check',{outlets:{fourthchild:['initiate-checkstatus']}}]}}])
this.editdata=data;
console.log(this.editdata)
return this.editdata
 }


//  editpensill(data)
//  {
//   this.editpensil=true;
//   this.viewpensil=false; 
//  }
//  viewpensill(data)
//  {
//   this.viewpensil=true;
  
//  }
 showaddbutton(data){
  this.addbutton=false;
 }

 editfun1(data)
 { 
   if((this.visible=true) || (this.invisible=true)){
  //  this.visible=false;
  //  this.invisible=true;
  //  this.addbutton=false;
    // this.viewpensil=false;
    // this.editpensil=true;
   this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['official']}}]}}])
   this.editdata=data;
   console.log(this.editdata)
   return this.editdata
  }
 }
 viewfun1(data)
 { 
  this.invisible=true;
  this.visible=false;
  // this.viewpensil=true;
  // this.editpensil=false;
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['official']}}]}}])
  this.editdata=data;
  console.log(this.editdata)
  return this.editdata
 }
 addfun(data)
{
  this.fetchid=false;
  this.showdiv=true;
  this.photobox=false;
  this.visible=true;
  this.invisible=false;
  this.addbutton=true;
  //  this.viewpensil=false;
  // this.editpensil=true;
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['official']}}]}}])
  this.editdata={};
  return this.editdata
}
addfun2(data)
{
  this.photobox=false;
  this.visible=true;
  this.invisible=false;
  this.addbutton=true;
  //  this.viewpensil=false;
  // this.editpensil=true;
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['empteam',{outlets:{fourthchild:['official']}}]}}])
  this.editdata={};
  return this.editdata
}
addinit(data)
{
  this.visible=true;
  this.invisible=false;
  this.addbutton=true;
  //  this.viewpensil=false;
  // this.editpensil=true;
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['initiate_check',{outlets:{fourthchild:['initiate-checkstatus']}}]}}])
  this.editdata={};
  return this.editdata
  
}

 viewofficial(data){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['official']}}]}}])
 }
 
viewpersonal(data)
{ 
 this.invisible=true;
 this.visible=false;
this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['personal']}}]}}])
this.editdata=data;
console.log(this.editdata)
return this.editdata
}

viewdocuments(data)
{
  this.invisible=true;
  this.visible=false;
  { this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['documents']}}]}}])
 this.editdata=data;
 console.log(this.editdata)
 return this.editdata
}
}
viewleave(data)
{
  this.invisible=true;
  this.visible=false;
  {   this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['leave']}}]}}])
 this.editdata=data;
 console.log(this.editdata)
 return this.editdata
}
}
viewholidays(data)
{
  this.invisible=true;
  this.visible=false;
  {   this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['holidays']}}]}}])
 this.editdata=data;
 console.log(this.editdata)
 return this.editdata
}
}
viewsalary(data)
{
  this.invisible=true;
  this.visible=false;
  { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['salary']}}]}}])
 this.editdata=data;
 console.log(this.editdata)
 return this.editdata
}
}

viewsalarydetails(data)
{
  this.invisible=true;
  this.visible=false;
  { 	  
  //this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['salary']}}]}}])
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['salary']}}]}}])
  this.editdata=data;
 console.log(this.editdata)
 return this.editdata
}
}


viewcontact(data)
{
  this.invisible=true;
  this.visible=false;
  { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['contact']}}]}}])
 this.editdata=data;
 console.log(this.editdata)
 return this.editdata
}
}
viewskills(data)
{
  this.invisible=true;
  this.visible=false;
  { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['skills']}}]}}])
 this.editdata=data;
 console.log(this.editdata)
 return this.editdata
}
}
viewjobHistory(data)
{
  this.invisible=true;
  this.visible=false;
  { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['jobhistory']}}]}}])
 this.editdata=data;
 console.log(this.editdata)
 return this.editdata
}
}
viewexperience(data)
{
  this.invisible=true;
  this.visible=false;
  { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['experience']}}]}}])
 this.editdata=data;
 console.log(this.editdata)
 return this.editdata
}
}
vieweducation(data)
{
  this.invisible=true;
  this.visible=false;
  { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['education']}}]}}])
 this.editdata=data;
 console.log(this.editdata)
 return this.editdata
}
}
viewtrcer(data)
{
  this.invisible=true;
  this.visible=false;
  { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['trainingcertification']}}]}}])
 this.editdata=data;
 console.log(this.editdata)
 return this.editdata
}
}
viewmedical(data)
{
  this.invisible=true;
  this.visible=false;
  { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['medicalclaims']}}]}}])
 this.editdata=data;
 console.log(this.editdata)
 return this.editdata
}
}
viewdisablity(data)
{
  this.invisible=true;
  this.visible=false;
  { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['disability']}}]}}])
 this.editdata=data;
 console.log(this.editdata)
 return this.editdata
}
}
viewdependency(data)
{
  this.invisible=true;
  this.visible=false;
  { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['emp-dependency']}}]}}])
 this.editdata=data;
 console.log(this.editdata)
 return this.editdata
}
}
viewvisa(data)
{
  this.invisible=true;
  this.visible=false;
  { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['visaandimmigration']}}]}}])
 this.editdata=data;
 console.log(this.editdata)
 return this.editdata
}
}
viewcorpcard(data)
{
  this.invisible=true;
  this.visible=false;
  { 		  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['corporatecard']}}]}}])
 this.editdata=data;
 console.log(this.editdata)
 return this.editdata
}
}
viewweligib(data)
{
  this.invisible=true;
  this.visible=false;
  { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['emp_workeligiblity']}}]}}])
 this.editdata=data;
 console.log(this.editdata)
 return this.editdata
}
}
viewadetails(data)
{
  this.invisible=true;
  this.visible=false;
  { 	  
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['additionaldetails']}}]}}])
 this.editdata=data;
 console.log(this.editdata)
 return this.editdata
}
}

 viewcont(data)
 { 
  this.invisible=true;
  this.visible=false;
this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['contact']}}]}}])
this.editdata=data;
console.log(this.editdata)
return this.editdata

 }
 viewworkeli(data)
 { 
  this.invisible=true;
  this.visible=false;
this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['emp_workeligiblity']}}]}}])
this.editdata=data;
console.log(this.editdata)
return this.editdata

 }


 //////////////////////////// My Details //////////////////////////////////////////////////
 official(data)
 {
  this.invisible=true;
  this.visible=false;
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['official']}}]}}])
   this.editdata=data;
   console.log(this.editdata)
   return this.editdata
}
documents(data){
  this.invisible=true;
  this.visible=false;
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['documents']}}]}}])
  this.editdata=data;
  console.log(this.editdata)
  return this.editdata


}
leave(data){
  this.invisible=true;
  this.visible=false;
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['leave']}}]}}])
   this.editdata=data;
   console.log(this.editdata)
   return this.editdata
}

holidays(data){
  this.invisible=true;
  this.visible=false;
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['holidays']}}]}}])
  this.editdata=data;
  console.log(this.editdata)
   return this.editdata
}
 salary(data){
  this.invisible=true;
  this.visible=false;
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['salary']}}]}}])
   this.editdata=data;
   console.log(this.editdata)
   return this.editdata


  //  this.service.viewsalarydetails(data);
 }

personal(data) {
  this.invisible=true;
  this.visible=false;
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['personal']}}]}}])
   this.editdata=data;
   console.log(this.editdata)
   return this.editdata
}
contact(data)
{
  this.invisible=true;
  this.visible=false;
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['contact']}}]}}])
   this.editdata=data;
   console.log(this.editdata)
   return this.editdata

}
skills(data){
  this.invisible=true;
  this.visible=false;
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['skills']}}]}}])
  this.editdata=data;
  console.log(this.editdata)
  return this.editdata


}
jobHistory(data){
  this.invisible=true;
  this.visible=false;
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['jobhistory']}}]}}])
   this.editdata=data;	
   console.log(this.editdata)
   return this.editdata
}
experience(data){
  this.invisible=true;
  this.visible=false;
	this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['experience']}}]}}])
   this.editdata=data;
   console.log(this.editdata)
   return this.editdata
}
education(data){
  this.invisible=true;
  this.visible=false;
	this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['education']}}]}}])
   this.editdata=data;
   console.log(this.editdata)
   return this.editdata
}
trcer(data){
  this.invisible=true;
  this.visible=false;
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['trainingcertification']}}]}}])
   this.editdata=data;
   console.log(this.editdata)
   return this.editdata


}
medical(data){
  this.invisible=true;
  this.visible=false;
	this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['medicalclaims']}}]}}])
   this.editdata=data;
   console.log(this.editdata)
   return this.editdata
}
disablity(data){
  this.invisible=true;
  this.visible=false;
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['disability']}}]}}])
   this.editdata=data;
   console.log(this.editdata)
   return this.editdata

}
dependency(data)
{  
  this.invisible=true;
  this.visible=false;
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['dependency']}}]}}])
  this.editdata=data;
  console.log(this.editdata)
  return this.editdata
}
visa(data){
  this.invisible=true;
  this.visible=false;
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['visaandimmigration']}}]}}])
  this.editdata=data;
  console.log(this.editdata)
  return this.editdata

}
corpcard(data){
  this.invisible=true;
  this.visible=false;
	this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['corporatecard']}}]}}])
   this.editdata=data;
   console.log(this.editdata)
   return this.editdata
}

weligib(data){
  this.invisible=true;
  this.visible=false;
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['emp_workeligiblity']}}]}}])
  this.editdata=data;
  console.log(this.editdata)
  return this.editdata

}
adetails(data){
  this.invisible=true;
  this.visible=false;
	this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['additionaldetails']}}]}}])
   this.editdata=data;
   console.log(this.editdata)
   return this.editdata
}
addTime(data)
{
  this.router.navigate(['./time',{outlets:{timechild:['emp_timesheet',{outlets:{timesheetchild:['timesheet']}}]}}])
  this.editdata=data;
  return this.editdata
}
//Here we are Authenticating the user request

createAuthenticationHeaders(){
   this.loadToken();
   return this.options = new RequestOptions({
     headers: new Headers({
       'Content-Type': 'application/json',
       'authorization': this.authToken
     })
   });
}

loadToken() {
  const token=localStorage.getItem('token');
  this.authToken= token;
  return this.authToken;
}
  registerUser(user){
    this.createAuthenticationHeaders();

  	return this.http.post(this.domain +'/authentication/register',user).map(res=> res.json());
}


  // Function to check if username is taken
  checkUsername(username) {
    return this.http.get(this.domain + '/authentication/checkUsername/' + username).map(res => res.json());
  }

  // Function to check if e-mail is taken
  checkEmail(email) {
    return this.http.get(this.domain + '/authentication/checkEmail/' + email).map(res => res.json());
  }
 
 login(user){
 	return this.http.post(this.domain + '/login',user).map(res => res.json());
 }
logout() {
    this.authToken = null; // Set token to null
    this.user = null; // Set user to null
    localStorage.clear(); // Clear local storage
  }

 storeUserData(token, user){

 	localStorage.setItem('token',token);
 	localStorage.setItem('user',JSON.stringify(user));
 	this.authToken=token;
 	this.user=user;

 }
   loggedIn(){
        return tokenNotExpired();

   }

getProfile() {
this.createAuthenticationHeaders();
console.log("dsvd")
console.log(this.options)
const token=localStorage.getItem('user');
console.log(token)
var jso=JSON.parse(token)
    console.log(jso)
return this.http.get(this.domain + '/profile',jso).map(res => res.json());
}

siteconfig(site){
  return this.http.post(this.domain+ '/site',site).map(res => res.json())
}

siteget(){
  return this.http.get(this.domain+ '/authentication/siteconfig').map(res => res.json())
}

businessunt(business){
  return this.http.post(this.domain+ '/authentication/Business',business).map(res => res.json())
}
getbusiness(){
  return this.http.get(this.domain+ '/authentication/Business').map(res => res.json())
}

service(servicereq){
  return this.http.post(this.domain+ '/authentication/servicereq',servicereq).map(res => res.json())
}

serviceget(){
  return this.http.get(this.domain+ '/authentication/servicereq').map(res => res.json())
}

organization(org){
  return this.http.post(this.domain+ '/authentication/organization',org).map(res => res.json())
}
organizationget(){
  return this.http.get(this.domain+ '/authentication/organization').map(res => res.json())
}
configuration(org){
  return this.http.post(this.domain+ '/authentication/configuration',org).map(res => res.json())
}

configurationget(){
  return this.http.get(this.domain+ '/authentication/configuration').map(res => res.json()) 
}





}
