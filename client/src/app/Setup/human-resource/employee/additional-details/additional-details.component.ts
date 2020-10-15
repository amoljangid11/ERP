import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {EmployeeComponent } from '../employee.component';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../../user.service';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Md2Dialog } from 'md2';


@Component({
  selector: 'app-additional-details',
  templateUrl: './additional-details.component.html',
  styleUrls: ['./additional-details.component.css']
})
export class AdditionalDetailsComponent implements OnInit {


constructor(private router:Router,private restangular:Restangular,private formBuilder: FormBuilder,public service:UserService) {

this.detail=this

 }

detail
country;
mil;
veteran;
additional={additionaldetail:[{}]};
i=0;
employee={additionaldetail:[{}]};
updatebutton = false;
haveskill=false;
messageClass
message
edited=false;
frm:FormGroup;

open(dialog: Md2Dialog) {
  dialog.open();
}

close(dialog: any) {
  dialog.close();
}



serve = [
  { viewValue: 'Yes'},
  { viewValue: 'No'}

];

status = [
  { viewValue: 'Honorable'},
  { viewValue: 'Medical'}
];

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

save(employee) {
  var create =this.service.editdata;
  var msg=this.detail
  if(undefined==create.additionaldetail)
  {
    create.additionaldetail=[]
    create.additionaldetail.push(employee.additionaldetail[0])
    create.save().toPromise().then(function(resp) {
    console.log(resp)
    msg.savemsg('Added Succesfully','alert alert-info');
    })
    this.employee={additionaldetail:[{}]};
    this.i=0;
  }
  else{
    create.additionaldetail.push(employee.additionaldetail[0])
    create.save().toPromise().then(function(resp) {
    console.log(resp)
    msg.savemsg('Added Succesfully','alert alert-info');
    })
    this.employee={additionaldetail:[{}]};
    this.i=0;
   }
   
}


edit(emp,datas,i) {
  this.updatebutton = true;
  this.employee= datas;
  this.i=i;
}
view(emp,datas,i) {

  this.employee= datas;
  this.i=i;
}

updateadditional(empadditional)
{
   empadditional.save().toPromise().then(function(resp) {
   console.log(resp)
   })
    this.employee={additionaldetail:[{}]};
    this.i=0;
}



cancel(){
  this.i=0;
  this.employee={additionaldetail:[{}]};
  this.ngOnInit();
}


ngOnInit() {
 

if(undefined!=this.service.editdata.experience)
{
  this.additional=this.service.editdata;
  this.haveskill=true;
}
  var baseCountry= this.restangular.all('countryall');
  baseCountry.getList().subscribe(data=>{
  this.country=data;
  console.log(this.country)

  return this.country;
});


    let base = this.restangular.all('employeeconfiguration');
    base.getList().subscribe(data => {
    this.veteran = data.filter(res=>res.veteranstatus);
    console.log(this.veteran)
    });

    let baseMilitary = this.restangular.all('employeeconfiguration');
    baseMilitary.getList().subscribe(data => {
    this.mil = data.filter(res=>res.militaryservice);
    console.log(this.mil)
    });

    this.frm =this.formBuilder.group({
    
      miltservice: new FormControl('', [Validators.nullValidator]),
      rankach: new FormControl('', [Validators.nullValidator]),
      sptrain: new FormControl('', [Validators.nullValidator]),
      milsno: new FormControl('', [Validators.nullValidator]),
      milstype: new FormControl('', [Validators.nullValidator]),
      counser: new FormControl('', [Validators.nullValidator]),
      award: new FormControl('', [Validators.nullValidator]),
      currrank: new FormControl('', [Validators.nullValidator]),
      vetstat: new FormControl('', [Validators.nullValidator]),
      branchser: new FormControl('', [Validators.nullValidator]),
      statdis: new FormControl('', [Validators.nullValidator]),
      milvrep: new FormControl('', [Validators.nullValidator]),
      from: new FormControl('', [Validators.nullValidator]),
      to: new FormControl('', [Validators.nullValidator])},
      {validator: this.dateLessThan('from', 'to')});
    }
    
    dateLessThan(from1: string, to1: string) 
    {
      return (group: FormGroup): {[key: string]: any} => {
       let f = group.controls[from1];
       let t = group.controls[to1];
       if (f.value > t.value) {
        document.getElementById("ToDate")['value']=""
    
         return {
           dates: ""
         };
       }
       return {};
      }
    }
  

}
