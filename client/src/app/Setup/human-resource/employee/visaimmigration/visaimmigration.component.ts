import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {EmployeeComponent } from '../employee.component';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../../user.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Md2Dialog } from 'md2';
import { and } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-visaimmigration',
  templateUrl: './visaimmigration.component.html',
  styleUrls: ['./visaimmigration.component.css']
})
export class VisaimmigrationComponent implements OnInit {

constructor(private router:Router,private restangular:Restangular,public service:UserService,private formBuilder: FormBuilder) {
 this.migration=this
 }
form: FormGroup;
form1: FormGroup;
migration;
passvisa={visa:[{}]};
visa={};
i=0;
havevisa=false;
employee={visa:[{}]}
updatebutton = false;

messageClass
message
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

save(employee) {
  var create =this.service.editdata;
  var msg=this.migration;
  if(undefined==create.visa)
  {
    create.visa=[]
    create.visa.push(employee.visa[0])
    create.save().toPromise().then(function(resp) {
    console.log(resp)
    msg.savemsg('Added Succesfully','alert alert-info');
    })
    this.employee={visa:[{}]};
    this.i=0;
  }
  else{
    create.visa.push(employee.visa[0])
    create.save().toPromise().then(function(resp) {
    console.log(resp)
    msg.savemsg('Added Succesfully','alert alert-info');
    })
    this.employee={visa:[{}]};
    this.i=0;
  }
  
}
open(dialog: Md2Dialog) {
  dialog.open();
}

close(dialog: any) {
  dialog.close();
}
view(emp,datas,i) {
  
  this.employee=  datas
  this.i=i;
}


cancel(){
  this.i=0;
  this.employee={visa:[{}]};
  this.ngOnInit();
  }

 edit(emp,datas,i) {
  this.updatebutton = true;
  this.employee= datas;
  this.i=i;
}


updatevisa(empvisa)
{
  empvisa.save().toPromise().then(function(resp) {
  console.log(resp)

  })
  this.employee={visa:[{}]};
  this.i=0;

}



  ngOnInit() {
  if(undefined!=this.service.editdata.visa)
  {
    this.passvisa=this.service.editdata;
    this.havevisa=true;
  }
   //form submit validation
   this.form = this.formBuilder.group({
    passno: [null, Validators],
    visacode: [null, Validators],
    visaexpdate: [null, Validators],
    issauth: [null, Validators],
    issdate: [null, Validators],
    visanum: [null, Validators],
    i9s: [null, Validators],
    i94s: [null, Validators],
    expdate: [null, Validators],
    visadate: [null, Validators],
    i94reviewd: [null, Validators],
    i94re: [null, Validators]},

    // validators:[ this.dateLessThan('visadate', 'visaexpdate') &&  this.dateLessThan1('issdate', 'expdate')]
    // &&  this.dateLessThan1('issdate', 'expdate')
//  {validator: this.dateLessThan('visadate', 'visaexpdate') });

//  this.form1 = this.formBuilder.group({
//  },
//   {validator:this.dateLessThan1('issdate', 'expdate')}

//  );

{ validator: Validators.compose([
  this.dateLessThan('visadate', 'visaexpdate'),
  this.dateLessThan1('issdate', 'expdate'),
  this.dateLessThan2('i94reviewd', 'i94re'),

])});
  
}
 
  dateLessThan(from1: string, to1: string) {
    return (group: FormGroup): {[key: string]: any} => {
     let f = group.controls[from1];
     let t = group.controls[to1];
     if (f.value > t.value) {
     
      document.getElementById("visaexpydate")['value']=""

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
  
      document.getElementById("exppdatee")['value']=""

       return {
         dates: "Date from should be less than Date to"
       };
     }
    }
  }


  dateLessThan2(from1: string, to1: string) {
    return (group: FormGroup): {[key: string]: any} => {
     let f = group.controls[from1];
     let t = group.controls[to1];
     if (f.value > t.value) {
      
      document.getElementById("i94")['value']=""

       return {
         dates: "Date from should be less than Date to"
       };
     }
    }
  }


  //  dateLessThanpass(passis: string, passexp: string) {
  //   return (group: FormGroup): {[key: string]: any} => {
  //    let p = group.controls[passis];
  //    let e = group.controls[passexp];
  //    if (p.value > e.value) {
  //     alert("End date should be greater than Start dateeeeeeeeeeeeeeeeeeeeeeeeees");
  //     document.getElementById("exppdate1")['value']=""
      

  //      return {
  //        dates: "Date from should be less than Date to"
  //      };
  //    }
  //   }
  // }
}
  
  
