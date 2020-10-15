import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {EmployeeComponent } from './employee/employee.component';

@Component({
  selector: 'app-human-resource',
  templateUrl: './human-resource.component.html',
  styleUrls: ['./human-resource.component.css']
})
export class HumanResourceComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {


  }
 
employee(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['employee']}}])
 
};
role(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['role']}}])
};
user(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['user_manage']}}])
};
holiday_manage(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['holiday_manage']}}])
};
leave_manage(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['leave_manage']}}])
};


employee_config(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['employee_manage']}}])
};
manage_holidaygroup(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['manage_holidaygroup']}}])
};
manage_holiday(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['manage_holiday']}}])
};
leave_manageoption(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['leave_manageoption']}}])
};
employee_summary(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['employee_summary']}}])
};
add_empleave(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['add_empleave']}}])
};
exit_type(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['exit_type']}}])
};
exit_interview(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['exit_interview']}}])
};
exit_setting(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['exit_setting']}}])
};
initiate_check(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['initiate_check']}}])
};
all_exit_procedure(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['all_exit_procedure']}}])
};
employee_tabs(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['employee_tabs']}}])
};
employment_status(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['employment_status']}}])
};
employment_role(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['employment_role']}}])
}
pay_frequency(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['pay_frequency']}}])
};
remuneration(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['remuneration']}}])
};
job_title(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['job_title']}}])
};
position(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['position']}}])
};
competency_level(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['competency_level']}}])
};
education_level(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['education_level']}}])
};
language(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['language']}}])
};
leave_types(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['leave_types']}}])
};
attendance(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['attendance']}}])
};
bank_account(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['bank_account']}}])
};
identity(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['identity']}}])
};
eeoc(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['eeoc']}}])
};
work_eligibility(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['work_eligibility']}}])
};
veteran(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['veteran']}}])
};
military_service(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['military_service']}}])
};
external_users(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['external_users']}}])
};
vendors(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['vendors']}}])
};
contact_clients(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['contact_clients']}}])
};
contact_projects(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['contact_projects']}}])
};




}



