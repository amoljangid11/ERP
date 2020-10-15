import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {MdChipsModule} from '@angular/material';
import {UserService } from '../../../user.service';
import { Restangular } from 'ngx-restangular';
import { Router} from '@angular/router';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-employeestatus',
  templateUrl: './employeestatus.component.html',
  styleUrls: ['./employeestatus.component.css']
})
export class EmployeeStatusComponent implements OnInit {

  constructor(private userservice:UserService,private restangular: Restangular,private router:Router,private formBuilder: FormBuilder) { }

  bunits={businessunits:[{}]}
  dunits={department:[{}]};
  parameters={parameter:[{}]};
  bunit;
  dunit;
  datas;
  dunitcoll;

  ngOnInit() {
    
    let baseBusiness = this.restangular.all('organizations');
    baseBusiness.getList().subscribe(data => {
    this.bunit =data.filter(res=>res.businessunits);
    console.log(this.bunit)
    return this.bunit;
       });

      
       let baseDepart= this.restangular.all('departments');
       baseDepart.getList().subscribe(data => {
        this.dunitcoll =data.filter(res=>res.department);
       console.log(this.dunitcoll)
       return this.dunitcoll;
       
      });


          let baseHolidaygroup = this.restangular.all('appraisal');
          baseHolidaygroup.getList().subscribe(data => {
          this.datas = data.filter(res=>res.parameter);
          console.log(this.datas)
          return this.datas;
          });
          

  }

}
