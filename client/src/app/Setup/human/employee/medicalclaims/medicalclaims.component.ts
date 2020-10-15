import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicalclaims',
  templateUrl: './medicalclaims.component.html',
  styleUrls: ['./medicalclaims.component.css']
})
export class MedicalclaimsComponent implements OnInit {

options;
claim:any;
show;
status=true;
 temparray = [{"name":"Disability"},{"name":"Injury"},{"name":"Paternity"},{"name":"Maternity"} ];

 age = [{"name":"Major"},{"name":"Minor"}];
changeval(){
	if(""!=this.claim)
	{
this.status=false;
}
}


  constructor() { }

  ngOnInit() {
  	console.log(this.status)
 if(this.claim ==""){
  this.status=true; 
  console.log(this.status) 
 }

  }

}
