import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {EmployeeComponent } from '../employee.component';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../../user.service';
import { Md2Dialog } from 'md2';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-medicalclaims',
  templateUrl: './medicalclaims.component.html',
  styleUrls: ['./medicalclaims.component.css']
})
export class MedicalclaimsComponent implements OnInit {
constructor(private router:Router,private restangular:Restangular,public service:UserService,private formBuilder: FormBuilder) {
 this.medical=this
   }
form: FormGroup;
medical;
official;
i=0;
employee={medicalclaim:[{}]}
updatebutton = false;
haveclaim=false;
medicalclaim={};
options;
claim:any;
show;
status=true;
disability=false;;
injury=false;
messageClass
message
edited=false;
distype = [
 {"name":"Learning Disabilities"},
 {"name":"Mental illness or emotional disturbances"},
 {"name":"Mobility or Orthopedic Impairments"},
 {"name":"Other iompairments"},
 {"name":"Speech or language impairments"} 
 ];

 temparray = [
 {"name":"Local Insurance"},
 {"name":"Life Insurance"},
 {"name":"Work Permit Insurance"}
 ];

 age = [{"name":"Major"},{"name":"Minor"}];

 open(dialog: Md2Dialog) 
 {
  dialog.open();
}

close(dialog: any) 
{
  dialog.close();
}

changeval(val,medical){
  console.log(val,this.status)
  if(""!=val)
  {
    console.log("hhh")
    console.log(medical)
    this.status=false;
  if('Disability'==val)
  {
    this.disability=true;
    this.injury=false;
  }
  else if ('Injury'==val)
  {
    this.disability=false;
    this.injury=true;
  }else{
    this.disability=false;
    this.injury=false;
  }
  }else{
   console.log(medical)
  }
}


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
  var msg=this.medical
  if(undefined==create.medicalclaim)
  {
    create.medicalclaim=[]
    create.medicalclaim.push(employee.medicalclaim[0])
    create.save().toPromise().then(function(resp) {
    console.log(resp)

    msg.savemsg('Added Succesfully','alert alert-info');
    })
    this.employee={medicalclaim:[{}]};
    this.i=0;
  }
  else{
    create.medicalclaim.push(employee.medicalclaim[0])
    create.save().toPromise().then(function(resp) {
    console.log(resp)
    
    msg.savemsg('Added Succesfully','alert alert-info');
    })
    this.employee={medicalclaim:[{}]};
    this.i=0;
   }
  }

  edit(emp,datas,i) 
  {
    this.updatebutton = true;
    this.employee=  datas;
    this.i=i;
  }
view(emp,datas,i) 
{
  this.employee= datas;
  this.i=i;
}

updateclaim(empclaim)
{
   empclaim.save().toPromise().then(function(resp) {
   console.log(resp)
   })
   this.employee={medicalclaim:[{}]};
   this.i=0;
}

cancel(){
  this.i=0;
   this.employee={medicalclaim:[{}]};
   this.ngOnInit();
}

  ngOnInit() {

    
  console.log(this.status)
  if(this.claim ==""){
    this.status=true;
    console.log(this.status)
  }
  if(undefined!=this.service.editdata.medicalclaim)
  {
    this.official=this.service.editdata;
    this.haveclaim=true;
  }


  this.form =this.formBuilder.group({
    medClamtype:new FormControl('', [Validators.nullValidator]),
    joindate: new FormControl('', [Validators.nullValidator]),
    distype: new FormControl('', [Validators.nullValidator]),
    savrity:new FormControl('', [Validators.nullValidator]),
    Paternity: new FormControl('', [Validators.nullValidator]),
    Maternity:new FormControl('', [Validators.nullValidator]),
    medissure: new FormControl('', [Validators.nullValidator]),
    disability:new FormControl('', [Validators.nullValidator]),
    injury: new FormControl('', [Validators.nullValidator]),
    desc: new FormControl('', [Validators.nullValidator]),
    leavsd:new FormControl('', [Validators.nullValidator]),
    leaved :new FormControl('', [Validators.nullValidator]),
    noleave:new FormControl('', [Validators.nullValidator]),
    leavsd1:new FormControl('', [Validators.nullValidator]),
    leaved1 : new FormControl('', [Validators.nullValidator]),
    noleave1:new FormControl('', [Validators.nullValidator]),
    amoclam:new FormControl('', [Validators.nullValidator]),
    amoappr: new FormControl('', [Validators.nullValidator]),
    hosname: new FormControl('', [Validators.nullValidator]),
    nameofcon: new FormControl('', [Validators.nullValidator]),
    amocl1: new FormControl('', [Validators.nullValidator]),
    hosadd:new FormControl('', [Validators.nullValidator]),
    tretdet: new FormControl('', [Validators.nullValidator]),
    amoappr1: new FormControl('', [Validators.nullValidator]),
    roomno: new FormControl('', [Validators.nullValidator]),
    totcost:new FormControl('', [Validators.nullValidator])},

  
  { validator: Validators.compose([
    this.dateLessThan('leavsd', 'leaved'),
    this.dateLessThan1('leavsd1', 'leaved1')
    
  
  ])});
}

  dateLessThan(from1: string, to1: string) {
    return (group: FormGroup): {[key: string]: any} => {
     let f = group.controls[from1];
     let t = group.controls[to1];
     if (f.value > t.value) {
     
      document.getElementById("le")['value']=""

       return {
         dates: "Date from should be less than Date to"
       };
     }
    }
  }

  dateLessThan1(from1: string, to1: string) {
    return (group: FormGroup): {[key: string]: any} => {
     let f = group.controls[from1];
     let t = group.controls[to1];
     if (f.value > t.value) {
      
      document.getElementById("le1")['value']=""

       return {
         dates: "Date from should be less than Date to"
       };
     }
    }
  }

}
