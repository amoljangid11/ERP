import { Component, OnInit } from '@angular/core';
import {MdChipsModule} from '@angular/material';
import {UserService } from '../../../user.service';
import { Restangular } from 'ngx-restangular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-expenses1',
  templateUrl: './expenses1.component.html',
  styleUrls: ['./expenses1.component.css']
})
export class Expenses1Component implements OnInit {

  constructor(private userservice:UserService,private restangular: Restangular,private formBuilder: FormBuilder) {
    this.exit=this
   }
   exit
   types
   projecttimes
   trips
   pays
   clients
   days
   form: FormGroup;
   ex={expen:[{}]}
   type={categories:[{}]}
   projecttime={project:[{}]};
   pay={paymode:[{}]}
   trip={trips:[{}]}
   client={clients:[{}]};
   d = {currencies:[{}]}
updatebutton = false;
datas;
messageClass
message
deleted = false;
edited=false;

formControl = new FormControl('hello', Validators.required);

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

save(ext){
  
  var msg=this.exit
  var create=this.restangular.one('expense')
  
  console.log("")
  create.expen=[]
  create.expen.push(ext.expen[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('expense').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.expen)})

  msg.savemsg('Added Succesfully','alert alert-info');
  })
  this.ex={expen:[{}]};
}

cancel(){
this.ex={expen:[{}]};
this.ngOnInit();
}

edit(emp) {
  this.updatebutton = true;
  this.ex= emp
}
view(emp) {
  // this.updatebutton = true;
  this.ex= emp
}

update(etype)
{
  var msg=this.exit;
  etype.save().toPromise().then(function(resp) {
    msg.savemsg('Updated Succesfully','alert alert-info');
  console.log(resp)
  })
  this.ex={expen:[{}]};
}

delete(et,i){
  if(confirm('Are you want to delete???')){
  var delmsg=this.exit
  et.remove().toPromise().then(function(resp,err) {
  console.log(resp)
  })
  this.datas.splice(i,1);
  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
}
else{
  this.cancel()
}
}
submit()
{
  console.log("Submitted")
}
downloadExcel(table, employeedata){
  let uri = 'data:application/vnd.ms-excel;base64,'
  , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>'
  , base64 = function(s) { return window.btoa(decodeURIComponent(encodeURIComponent(s))) }
  , format = function(s,c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
  if (!table.nodeType) table = document.getElementById(table)
  var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
  window.location.href = uri + base64(format(template, ctx))
  }

  
  savedata
 



  ngOnInit() {
    let baseExit = this.restangular.all('expense');
  baseExit.getList().subscribe(data => {
  this.datas =data.filter(res=>res.expen);
  console.log(this.datas)
  return this.datas;
  });
  let baseExit1 = this.restangular.all('expense');
  baseExit1.getList().subscribe(data => {
  this.types =data.filter(res=>res.categories);
  console.log(this.types)
  return this.types;
  });
  let baseExit2 = this.restangular.all('project_time');
  baseExit2.getList().subscribe(data => {
  this.projecttimes =data.filter(res=>res.project);
  console.log(this.projecttimes)
  return this.projecttimes;
  });

  let baseExit3 = this.restangular.all('expense');
  baseExit3.getList().subscribe(data => {
  this.pays =data.filter(res=>res.paymode);
  console.log(this.pays)
  return this.pays;
  });
  let baseExit6 = this.restangular.all('general');
  baseExit6.getList().subscribe(data => {
  this.days =data.filter(res=>res.currencies);
  console.log(this.days)
  return this.days;
  });
  let baseExit4 = this.restangular.all('expense');
  baseExit4.getList().subscribe(data => {
  this.trips =data.filter(res=>res.trips);
  console.log(this.trips)
  return this.trips;
  });
  let baseExit5 = this.restangular.all('client');
  baseExit5.getList().subscribe(data => {
  this.clients =data.filter(res=>res.clients);
  console.log(this.clients)
  return this.clients;
  });
  this.form = this.formBuilder.group({
    expense: [null, Validators.required],
    cate: [null, Validators.required],
    project: [null, Validators],
    client: [null, Validators],
    expensedate: [null, Validators.required],
    amount: [null, Validators.required],
    reimbur: [null, Validators.required],
    paym: [null, Validators.required],
    payment: [null, Validators],
    trpname: [null, Validators],
    descri: [null, Validators]
   

  });
  }

}
