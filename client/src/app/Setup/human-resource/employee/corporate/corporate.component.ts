import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {EmployeeComponent } from '../employee.component';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../../user.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-corporate',
  templateUrl: './corporate.component.html',
  styleUrls: ['./corporate.component.css']
})
export class CorporateComponent implements OnInit {

constructor(private router:Router,private restangular:Restangular,public service:UserService,private formBuilder: FormBuilder) 
{ this.corporate=this }
corporate;
form: FormGroup;
employeedata;
employee = { corporatecard: [{}] };
emp = {};
messageClass
message
edited=false;

open(dialog: Md2Dialog) {
  dialog.open();
}

close(dialog: any) {
  dialog.close();
}

viewcorpcard(data) {
  this.service.editcorpcard(data);
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['corporatecard']}}]}}])
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
  console.log(employee)
  var msg=this.corporate
  var create =this.service.editdata;
  if(undefined==create.corporatecard)
  {
    create.corporatecard=[];
    create.corporatecard.push(employee.corporatecard[0])
    create.save().toPromise().then(function(resp) {
    console.log(resp)
    msg.savemsg('Added Succesfully','alert alert-info');


    })
  }else{
    console.log(this.employee.corporatecard[0])
    this.employeedata.corporatecard[0]=this.employee.corporatecard[0]
    this.employeedata.save().toPromise().then(function(res) {
    console.log(res)
    msg.savemsg('Added Succesfully','alert alert-info');
    })
  }
}

ngOnInit() {
  	
if(undefined!=this.service.editdata.corporatecard)
    {
     console.log(this.service.editdata.corporatecard)
     this.employeedata=this.service.editdata;
     this.employee.corporatecard[0]=this.service.editdata.corporatecard[0];
     console.log(this.employee)
     
    }

      //form submit validation
      this.form = this.formBuilder.group({
        cardtype: [null, Validators],
        expirydate: [null, Validators],
        cardno: [null, Validators],
        cardissue: [null, Validators],
        name: [null, Validators],
        cardcode: [null, Validators],
       
      });
  }

}
