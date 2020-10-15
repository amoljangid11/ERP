import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { Router} from '@angular/router';
import {UserService } from '../../../../user.service';
import { Md2Dialog } from 'md2';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {


constructor(private userservice:UserService,private restangular: Restangular,private router:Router, private formBuilder: FormBuilder) 
{ 
  this.cli=this;
}

loginForm: FormGroup;
form: FormGroup;
statearry
cityarry
datas1
cit;
cli;
datas2
datas;
client={clients:[{}]};
show=false;
updatebutton=false;
messageClass
message
deleted = false;
edited=false;

open(dialog: Md2Dialog) {
  dialog.open();
}

close(dialog: any) {
  dialog.close();
}

clt=false;pocc=false;
statusss=[{value:"Active"},{value:"Inactive"}];

searchrelt=[{value:"Select Option"},{value:"Client"},{value:"Point of Contact"}];

searchSelect(data)
{
  console.log(data);
 if(data.value=="Client")
 {
   this.clt=true;
   this.pocc=false;
 }
 else if(data.value=="Point of Contact")
 {
  this.clt=false;
  this.pocc=true;
 }
 else if(data.value=="Select Option")
 {
  this.clt=false;
  this.pocc=false; 
  this.ngOnInit();
 }
}

filterItem(value)
{
  value=value.toLowerCase();
  if(!value)
  {console.log("else")
    const val=this.restangular.all('client');
    val.getList().subscribe(data => {
     
      console.log(data)
      this.datas=data;
      return data
    });
    }
  else{
    if(this.clt)
    {      
      this.datas= this.datas.filter(
      function (el: any) {
                return el.clients[0].client.toLowerCase().indexOf(value) > -1;
        }
      )
    }
    else if(this.pocc)
    {
      this.datas= this.datas.filter(
        function (el: any) {
                  return el.clients[0].point_of_contact.toLowerCase().indexOf(value) > -1;
          }
        )
    }
    console.log("searchfd")
    console.log(this.datas)        
  }
 }

 downloadExcel(table){
  let uri = 'data:application/vnd.ms-excel;base64,'
  , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>'
  , base64 = function(s) { return window.btoa(decodeURIComponent(encodeURIComponent(s))) }
  , format = function(s,c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
  if (!table.nodeType) table = document.getElementById(table)
  var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
  window.location.href = uri + base64(format(template, ctx))
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
  

save(data)
{
  var msg=this.cli;
  var create= this.restangular.one('client');
  create.clients=[];
  create.clients.push(data.clients[0])
  create.save().toPromise().then(res=>{
  console.log(res)
    this.restangular.all('client').getList()
    .subscribe(data=>{this.datas=data.filter(res=>res.clients)})
    msg.savemsg('Added Successfully','alert alert-info')
      })
  this.client={clients:[{}]};
}

cancel(){
  this.client={clients:[{}]};  
}

edit(cli){
  this.updatebutton=true;
  this.client=cli

}
 view(dataall) {
   // this.updatebutton = true;
   this.client= dataall
//   this.i=i;
 }

update(contactclient)
{
  var msg=this.cli
  contactclient.save().toPromise().then(function(resp) {
  console.log(resp)
  msg.savemsg('Updated Successfully','alert alert-info')
  })
  this.client={clients:[{}]};
}


delete(cli,i){
  var msg=this.cli
  if(confirm("Are you sure! you want to delete this data")){
  cli.remove().toPromise().then(function(resp,err) {
  console.log(resp)
  })
  this.datas.splice(i,1);
  msg.savemsg('Deleted Successfully','alert alert-danger')
}
else{
  this.cancel();
}
}

select(obj){
  this.restangular.all('stateall').getList({"countryallid":obj}).subscribe(res=>
  {
  this.statearry=res,console.log(obj)
  })
  return this.statearry;
}


select1(gt1){
  this.restangular.all('cityall').getList({"stateallid":gt1}).subscribe(res=>
  {
  this.cityarry=res,console.log(gt1)
  })
  return this.cityarry;
}


private createForm() {
  this.loginForm = new FormGroup({
  // tslint:disable-next-line
    clientname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    poc: new FormControl('', [Validators.required])
});
}


ngOnInit() {

  this.createForm();

    let baseStatus = this.restangular.all('client');
    baseStatus.getList().subscribe(data => {
    this.datas = data.filter(res=>res.clients);
    console.log(this.datas)
    });

    var sat=this.restangular.all('countryall');
    sat.getList().subscribe(data=>{
    this.datas1=data;
    return this.datas1;
    });
    
    this.cit=this.restangular.all('stateall');
    this.cit.getList().subscribe(data=>{
    this.datas2=data;
    return this.datas2;
    });

    //form submit validation
    this.form = this.formBuilder.group({
      client: [null, Validators.required],
      email: [null, Validators],
      address: [null, Validators],
      pno: [null, Validators.required],
      spno: [null, Validators],
      fax: [null, Validators],
      despoint: [null, Validators],
      point: [null, Validators.required],
      sts:[null,Validators]      
    });
}

}
