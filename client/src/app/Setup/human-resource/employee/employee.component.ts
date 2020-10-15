import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { MaterialModule } from '@angular/material';
import { Router } from '@angular/router';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { OfficialComponent } from './official/official.component';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-employee', 
  templateUrl: './employee.component.html',
  providers: [CreateEmployeeComponent,OfficialComponent],
  styleUrls: ['./employee.component.css'/*,"../../../../../node_modules/mdbootstrap/css/bootstrap.css" */]
})


export class EmployeeComponent implements OnInit {
  private
  constructor(public userservice: UserService, private router: Router,
    private restangular: Restangular, public official:OfficialComponent) { }



  officiald;
  employees;
visible:boolean;
invisible:boolean;
 getuser;
 leavemanagement;
  tesyt

  

  edit(data) {
    console.log(data)
    this.userservice.editfun(data);
  }

  view(data) {
    // console.log(data)
    this.userservice.viewfun(data);
    // document.getElementById('CreateEmployeeComponent.')
  }


  add(data) {
    alert("Please Add Employee Configuration");
    this.userservice.addfun(data);
   }
  

filterItem(value)
{
  value=value.toLowerCase();
  if(!value)
  {console.log("else")
    const val=this.restangular.all('createemployee');
    val.getList().subscribe(data => {
     
      console.log(data)
      this.officiald=data;
      return data
    });
    }
  else{
           this.officiald= this.officiald.filter(
      function (el: any) {
                return el.official[0].firstname.toLowerCase().indexOf(value) > -1 ||  el.official[0].lastname.toLowerCase().indexOf(value) > -1 ;
            }
      )
    console.log("searchfd")
    console.log(this.officiald)        
  }
 }


 managerfetch(){
  this.official.fetchmanager(this.officiald)
 }
btnhd=false;
showAdd()
{
  if(this.getuser.utype=="admin" || this.getuser.utype=="HR" || this.getuser.utype=="Executive Director"){
    this.btnhd=true;
  }
  else{
    this.btnhd=false;
  }
}

  ngOnInit() {
    this.getuser=JSON.parse(localStorage.getItem('user'));
    console.log(this.getuser)
    
    this.showAdd();

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

    var baseOfficial = this.restangular.all('createemployee');
    baseOfficial.getList().subscribe(data => {   
      this.officiald = data
      console.log(this.officiald)
      return this.officiald;
    });
  }
}
