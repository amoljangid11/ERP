import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {EmployeeComponent } from '../employee.component';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../../user.service';

import { Md2Dialog } from 'md2';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.css']
})
export class SalaryComponent implements OnInit {


  constructor(private router:Router,private restangular:Restangular,public service:UserService,private formBuilder: FormBuilder) {
this.saly=this
   }
   form: FormGroup;
   form1:FormGroup;
   form2:FormGroup;
   form3:FormGroup;
   form4:FormGroup;


   saly;
bank={bankaccounttype:[{}]};
pay={payfrequency:[{}]};
pays;
accounts
currencyall;
account;
allAccounts;
salaries;
employeedata;
employee = { salary: [{}] };
currency={ currencies: [{}] };
accountclasstype={ acc_classtype:[{}] };
emp = {};

editbn=false;
addbn=true;
editbn1=false;
editbn2=false;
addbn1=true;
addbn2=true;

messageClass
messagess
edited=false;

open(dialog: Md2Dialog) {
  dialog.open();
}

close(dialog: any) {
  dialog.close();
}

view(data) 
{

  this.service.viewsalary(data);
}

savemsg(mssg,msgcls)
{
  this.edited=true;
  this.messageClass=msgcls;
  this.messagess=mssg;
  console.log(this.messagess)
  setTimeout(function() {
    this.edited = false;
    console.log(this.edited);
  }.bind(this), 1500);
}


 save(employee) {
  var msg=this.saly
  var create =this.service.editdata;
  // console.log(employee.salary[0].ifsccode);
  if(undefined==create.salary)
  {
    create.salary=[];
    create.salary.push(employee.salary[0])

    create.save().toPromise().then(function(resp) {
    console.log(resp)
    msg.savemsg('Added Succesfully','alert alert-info');

    })
  }else{
    console.log(this.employee.salary[0])
    this.employeedata.salary[0]=this.employee.salary[0];
    // this.employeedata.salary[0].ifsccode=this.ifsccode;
    this.employeedata.save().toPromise().then(function(res) {
    console.log(res)
    msg.savemsg('Updated Succesfully','alert alert-info');

    })
  }
  }

savecur(obj){
  var create=this.restangular.one('general')
  create.currencies=[]
  create.currencies.push(obj.currencies[0])
  create.save().toPromise().then((res)=>{
  //this.currencyall.push(res)
  this.restangular.all('general').getList()
                 .subscribe(data=>{this.currencyall=data.filter(res=>res.currencies)})
  });
  this.currency={currencies:[{}]}
}

saveclass(bk){
  var create=this.restangular.one('general')
  create.acc_classtype=[]
  create.acc_classtype.push(bk.acc_classtype[0])
  create.save().toPromise().then((res)=>{
   // this.allAccounts.push(res)
   this.restangular.all('general').getList()
                   .subscribe(data=>{this.allAccounts=data.filter(res=>res.acc_classtype)})

  });
  console.log(create)
      
  this.accountclasstype={acc_classtype:[{}]}
}





savepay(obj){
  var create= this.restangular.one('employeeconfiguration');
  create.payfrequency=[];
  create.payfrequency.push(obj.payfrequency[0])
  create.save().toPromise().then(res=>{
   console.log(res)
   this.restangular.all('employeeconfiguration').getList()
                   .subscribe(data=>{this.pays=data.filter(res=>res.payfrequency)})
  })
  this.pay={payfrequency:[{}]};

}


savetype(bank){
  var create= this.restangular.one('employeeconfiguration');
  create.bankaccounttype=[];
  create.bankaccounttype.push(bank.bankaccounttype[0])
  create.save().toPromise().then(res=>{
   console.log(res)
  this.restangular.all('employeeconfiguration').getList()
   .subscribe(data=>{this.accounts=data.filter(res=>res.bankaccounttype)})
  })
  this.bank={bankaccounttype:[{}]};
}

branches;ifsccode;bankname;
selectedBankName(bank)
{
  console.log(bank);
  console.log(bank.bankaccounttype[0].bankname);
  this.branches = this.accounts.filter(obj=>obj.bankaccounttype[0].bankname==bank.bankaccounttype[0].bankname);
  this.bankname = bank.bankaccounttype[0].bankname;
  console.log(this.branches);

  this.editbn=false;
  this.addbn=true;
}

selectBranch(branch)
{
  console.log(branch);
  var ifsc=this.accounts.find(obj=>obj.bankaccounttype[0].branchname==branch.bankaccounttype[0].branchname && obj.bankaccounttype[0].bankname==this.bankname);
  console.log(ifsc.bankaccounttype[0].ifsccode);
  this.ifsccode=ifsc.bankaccounttype[0].ifsccode;
  console.log(this.ifsccode);
}

edittoaddconvert()
{
  this.editbn1=false;
  this.addbn1=true;
}
edittoaddconvert1()
{
  this.editbn2=false;
  this.addbn2=true;
}
branchname;
ngOnInit() {

  console.log(this.service.editdata.salary)
  if(undefined!=this.service.editdata.salary)
  {
    console.log(this.service.editdata.salary)
    this.employeedata=this.service.editdata;
    this.employee.salary[0]=this.service.editdata.salary[0];
    // =this.service.editdata.salary[0].bankbranch
    this.ifsccode=this.service.editdata.salary[0].ifsccode
    console.log(this.employee)
    this.editbn=true;
    this.addbn=false;
    this.editbn1=true;
    this.editbn2=true;
    this.addbn1=false;
    this.addbn2=false;
  }

  	let baseAccount = this.restangular.all('employeeconfiguration');
    baseAccount.getList().subscribe(data => {
    this.accounts = data.filter(res=>res.bankaccounttype);
    console.log(this.accounts);
    return this.accounts;
    });

    let basePay = this.restangular.all('employeeconfiguration');
    basePay.getList().subscribe(data => {
    this.pays = data.filter(res=>res.payfrequency);
    console.log(this.pays)
    });

    var basecurrency= this.restangular.all('general');
    basecurrency.getList().subscribe(data=>{  
    this.currencyall=data.filter(res=>res.currencies);;
    return this.currencyall;

    });
    
    var baseaccount= this.restangular.all('general');
    baseaccount.getList().subscribe(data=>{  
    this.allAccounts=data.filter(res=>res.acc_classtype);;
    return this.allAccounts;

    });


    this.form = this.formBuilder.group({
      currname: [null, Validators],
      bankname: [null, Validators],
      branch:[null,Validators],
      ifsccode:[null,Validators],
      accCtype: [null, Validators],
      payfreq: [null, Validators],
      accHname: [null, Validators],
      acctype: [null, Validators],
      salary: [null, Validators],
      accH: [null, Validators],
      accNo: [null, Validators]
    });
    
    
    this.form1 =this.formBuilder.group({
      curre:[null, Validators.required],
      curreCode:[null, Validators.required],
      desc:[null, Validators]
    });
    
    this.form2 =this.formBuilder.group({
      accCtype1:[null, Validators.required],
      desc1:[null, Validators]
     
    });

    this.form3 =this.formBuilder.group({
      payFreq:[null, Validators.required],
      shoCode:[null, Validators.required],
      descs:[null, Validators]
     
    });

    this.form4 =this.formBuilder.group({
      accType1:[null, Validators.required],
      descs:[null, Validators]
     
    });
  }

}
