import { Component, OnInit ,ViewChild } from '@angular/core';
import { Router} from '@angular/router';
import { UserService } from 'app/user.service';
import { RestangularModule, Restangular} from 'ngx-restangular';
@Component({
  selector: 'app-self-service',
  templateUrl: './self-service.component.html',
  styleUrls: ['./self-service.component.css']
})
export class SelfServiceComponent implements OnInit {

  constructor(private router:Router,private service:UserService,private restangular:Restangular) { }
  getuser;
  leavemanagement;
  viewoff(data) 
  {
    this.service.official(data);
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
     
    
     
     }
    
  }
leaves(){
 /*this.router.navigate(['./setuproot',{outlets:{thirdchild:['create_employee',{outlets:{fourthchild:['official']}}]}}])*/
 this.router.navigate(['./setuproot',{outlets:{thirdchild:['leavereq']}}])
};
details(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['mydetails']}}])
};
calender(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['holidaycalender']}}])
};
team(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['empteam']}}])
};
myleave(){
this.router.navigate(['./setuproot',{outlets:{ thirdchild:['empleave']}}])
}
empleave(){
	 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['myleave']}}])
}

}
