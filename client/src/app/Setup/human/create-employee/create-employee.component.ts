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

  ngOnInit() {
 
  	
 $("a").click(function(e) {
    console.log(e)
        e.preventDefault();
        $("a").removeClass("active");
        $(this).addClass("active");
        
        
        
    });

  }

}
