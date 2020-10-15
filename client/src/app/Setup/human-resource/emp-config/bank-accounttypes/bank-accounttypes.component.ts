import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';
import { Router} from '@angular/router';
import { Md2Dialog } from 'md2';


@Component({
  selector: 'app-bank-accounttypes',
  templateUrl: './bank-accounttypes.component.html',
  styleUrls: ['./bank-accounttypes.component.css']
})
export class BankAccounttypesComponent implements OnInit {

constructor(private userservice:UserService,private restangular: Restangular,private router:Router, private formBuilder: FormBuilder) {
  this.account=this
   }
form: FormGroup;
account;
bank={bankaccounttype:[{}]};
datas;
updates=false;
messageClass
message
edited=false;
deleted=false;

open(dialog: Md2Dialog) {
  dialog.open();
  }


  close(dialog: any) {
  dialog.close();
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


save(bank){
  var msg=this.account;
  var create= this.restangular.one('employeeconfiguration');
  create.bankaccounttype=[];
  create.bankaccounttype.push(bank.bankaccounttype[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('employeeconfiguration').getList()
    .subscribe(data=>{this.datas=data.filter(res=>res.bankaccounttype)})

  msg.savemsg('Added Succesfully','alert alert-info');
    })
  this.bank={bankaccounttype:[{}]};
}

// delete(baccount,i){
//   if(confirm('Are you want to delete???')){
//   var delmsg=this.account;
//   baccount.remove();
//   this.datas.splice(i,1);
//   delmsg.savemsg('Deleted Succesfully','alert alert-danger');
//   }
//   else{
//     this.cancel();
//   }
// }

cancel(){
  this.bank={bankaccounttype:[{}]}; 
  this.ngOnInit();
}

delete(clevel,i){
  if(confirm('Are you want to delete???')){
  var delmsg=this.account;
  clevel.remove();
  this.datas.splice(i,1);
  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
  }
  else{
    this.cancel();
  }

}


edit(baccount){
	this.updates=true;
	this.bank=baccount
}

view(baccount){
	// this.updates=true;
	this.bank=baccount
}

update(config){
   config.save().toPromise().then(function(resp) {
   console.log(resp)

 })
 this.bank={bankaccounttype:[{}]};

}




  ngOnInit() {
  	let baseAccount = this.restangular.all('employeeconfiguration');
    baseAccount.getList().subscribe(data => {
    this.datas = data.filter(res=>res.bankaccounttype);
    console.log(this.datas)
    });

    //form submit validation
    this.form = this.formBuilder.group({
      bank: [null, Validators.required],
      bankname: [null, Validators.required],
      branch: [null, Validators.required],
      ifsc: [null, Validators.nullValidator],
      desc: [null, Validators],
      
    });
  }

}
