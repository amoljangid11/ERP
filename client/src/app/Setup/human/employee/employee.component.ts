import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { MaterialModule } from '@angular/material';
import { Router } from '@angular/router';
import { RestangularModule, Restangular } from 'ngx-restangular';
/*import { OfficialComponent } from './official/official.component';
*/import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { Pipe, PipeTransform } from '@angular/core';
import { UserService } from '../../../user.service';

@Component({
  selector: 'app-employee', 
  templateUrl: './employee.component.html',
  providers: [CreateEmployeeComponent],
  styleUrls: ['./employee.component.css'/*,"../../../../../node_modules/mdbootstrap/css/bootstrap.css" */]
})


export class EmployeeComponent implements OnInit {
  private
  constructor(public userservice: UserService, private router: Router,
    private restangular: Restangular) { }

  officiald;
  employees;

 
  tesyt

  edit(data) {
    console.log(data)
    this.userservice.editfun(data);

  }
  add(data) {
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
  ngOnInit() {


    var baseOfficial = this.restangular.all('createemployee');
    baseOfficial.getList().subscribe(data => {
      this.officiald = data
      console.log(this.officiald)
      
      return this.officiald;
    });
  }

}
