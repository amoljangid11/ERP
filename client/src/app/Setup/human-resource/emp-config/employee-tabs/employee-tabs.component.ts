import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {MaterialModule} from '@angular/material' 
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {Inject, LOCALE_ID, Pipe, PipeTransform} from '@angular/core';
import {UserService } from '../../../../user.service';

@Component({
  selector: 'app-employee-tabs',
  templateUrl: './employee-tabs.component.html',
  styleUrls: ['./employee-tabs.component.css']
})
export class EmployeeTabsComponent implements OnInit {

  

   constructor(private userservice:UserService,private restangular: Restangular,private formBuilder: FormBuilder)
    {
      this.group=this;
    this.emp = [
      {name:'Employee Documents',checked: false},{name:'Employee Leaves',checked: false},{name:'Employee Holidays',checked: false},{name:'Salary Details',checked: false},{name:'Personal Details',checked: false},
      {name:'Contact Details',checked: false},{name:'Employee Skills',checked: false},{name:'Employee Job History',checked: false},{name:'Experience Details',checked: false},{name:'Education  Details',checked: false},
      {name:'Training & Certification  Details',checked: false},{name:'Medical Claims',checked: false},{name:'Disability Details',checked: false},{name:'Dependency Details',checked: false},{name:'Visa and Immigration Details',checked: false},
      {name:'Corporate Card Details',checked: false},{name:'Work Eligibility Details',checked: false},{name:'Additional Details',checked: false},{name:'Pay Slips',checked: false},{name:'Benefits',checked: false},
      {name:'Remuneration Details',checked: false},{name:'Security Credentials',checked: false},{name:'Asset Details',checked: false}
    ];
      }

     
group
form:FormGroup;
datas;
selectall:any;
employee = {employeetabs:[{}]};
employeetab;
selected
selectedAll: any;
emp : any;
item:any;
add;
employeetabs:{};
// today: number = Date.now();


// checkAll(element: HTMLInputElement): void {
//   this.log += `${element.checked ? 'true' : 'false'}`;
// }

selectAll() {
  for (var i = 0; i < this.emp.length; i++) {
    this.emp[i].selected = this.selectedAll;
  }
  this.emp.save();
  }
  checkIfAllSelected() {
  this.selectedAll = this.emp.every(function(item:any) {
    return item.selected == true;
	})
  }

  messageClass
  message
  deleted = false;
  edited=false;
  
  savemsg(msg,msgcls)
  {
  
	this.edited=true;
	this.messageClass=msgcls;
	this.message=msg;
	setTimeout(function() {
	this.edited = false;
	console.log(this.edited);
	}.bind(this), 1500);
  }

  save()
  {
    console.log(this.datas.length)
    var data=this.datas.find(obj=>obj)
    console.log(data);
    if(this.datas.length==0)
    {
      var create= this.restangular.one('employeeconfiguration');
      create.employeetabs=[];
      for(let i=0;i<this.emp.length;i++)
      {
      create.employeetabs[i]=this.emp[i]
      }
      console.log(create);
      create.save().toPromise().then(res=>{
           console.log(res)
           this.restangular.all('employeeconfiguration').getList()
        				   .subscribe(data=>{
                     this.datas=data.filter(res=>res.employeetabs);
                   console.log(this.datas)
            })
          });
      }
      else
      {
        console.log("else part")
        for(let i=0;i<this.emp.length;i++)
        {
        data.employeetabs[i]=this.emp[i]
        }
        console.log(data);
        data.save().toPromise().then(res=>{
          console.log(res)
          this.restangular.all('employeeconfiguration').getList()
                  .subscribe(data=>{
                    this.datas=data.filter(res=>res.employeetabs);
                  console.log(this.datas)
           })
         });
      }

  }
  
// save(){
//   console.log(this.datas);
//   console.log(this.emp);
//   this.datas[0].employeetabs[0]=this.emp
//   console.log(this.datas[0].employeetabs)

//    var create= this.restangular.one('employeeconfiguration');
//    create.employeetabs=[];
//    create.employeetabs.push(this.datas[0].employeetabs[0])
//    console.log(create);
//    create.save().toPromise().then(res=>{
//    console.log(res)
//    this.restangular.all('employeeconfiguration').getList()
// 				   .subscribe(data=>{
//              this.datas=data.filter(res=>res.employeetabs);
// 				   console.log(this.datas)
  
//            if(this.datas[0])
//            {
//              console.log("edit")
//              this.employee=this.datas[0]
//              this.add=false
//            }
//            else
//            {
//              console.log("add")
//             //  data.update();
//            }
//           })
//             // data.update();
//      }); 
//    this.employee={employeetabs:[{}]}; 
//   }

  
cancel(){
    this.employee = {employeetabs:[{}]};
    this.ngOnInit();
	}
  finddata;
  dats;
ngOnInit() {

	var baseUnits= this.restangular.all('employeeconfiguration');
	console.log(baseUnits)
	baseUnits.getList().subscribe(data=>{
  this.datas=data.filter(obj=>obj.employeetabs);
  console.log(this.datas)
  this.dats=this.datas[0]
  console.log(this.dats)
  if(this.datas.length!=0)
  {
       this.finddata=this.datas[0].employeetabs
       console.log(this.finddata)
  }

  if(this.dats)
  {console.log("edit1")

   this.employee=data[0]
    console.log(this.employee)
  }else{
    console.log("add1")
    this.add=true;
  }
	// return this.datas;
  });
  
  this.form = this.formBuilder.group({
    checkone: [null, Validators.required],
    checkall: [null, Validators]
  });
}
}