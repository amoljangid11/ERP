import { Component, OnInit } from '@angular/core';
import {MdChipsModule} from '@angular/material';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {MdInputModule} from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Md2Dialog } from 'md2';


@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {

formControl = new FormControl('hello', Validators.required);

constructor(private restangular:Restangular,private formBuilder: FormBuilder) 
{ 
  this.vends=this
}
form: FormGroup;
form1: FormGroup;
form2: FormGroup;
form3: FormGroup;


vendor={vendors:[{}]};
show=false;
updatebutton=false;
messageClass
message
deleted = false;
edited=false;

vend;
vends;
statearry;
state2;
datas2;
cityarry;
datas1;
cit;
datas3;
country:any;
countrycode:any;
countryvalue:any;
statename:any;
countries:any;
cityname:any;
statevalue:any;
i=0;
status=[
  {name:'Active'},
  {name:'InActive'}
];


searchrelt=[{value:"Select Option"},{value:"Vendor Name"},{value:"Contact Person"}];
vn=false;
cp=false;

searchSelect(data)
{
  console.log(data);
 if(data.value=="Vendor Name")
 {
   this.vn=true;
   this.cp=false;
 }
 else if(data.value=="Contact Person")
 {
  this.vn=false;
  this.cp=true;
 }
 else if(data.value=="Select Option")
 {
  this.vn=false;
  this.cp=false; 
  this.ngOnInit();
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

filterItem(value)
{
  value=value.toLowerCase();
  if(!value)
  {console.log("else")
    const val=this.restangular.all('contacts');
    val.getList().subscribe(data => {
     
      console.log(data)
      this.vend=data;
      return data
    });
    }
  else{
    if(this.vn)
    {      
      this.vend= this.vend.filter(
      function (el: any) {
                return el.vendors[0].name.toLowerCase().indexOf(value) > -1;
        }
      )
    }
    else if(this.cp)
    {
      this.vend= this.vend.filter(
        function (el: any) {
                  return el.vendors[0].contact_person.toLowerCase().indexOf(value) > -1;
          }
        )
    }
    console.log("searchfd")
    console.log(this.vend)        
  }
 }
save(data)
{
  var msg=this.vends
  var create= this.restangular.one('contacts');
  create.vendors=[];
  create.vendors.push(data.vendors[0])
  create.save().toPromise().then(res=>{
  console.log(res)
    this.restangular.all('contacts').getList()
    .subscribe(data=>{this.vend=data.filter(res=>res.vendors)})
    msg.savemsg('Added Successfully','alert alert-info')
      })
      this. vendor={vendors:[{}]};
}

cancel(){
  this. vendor={vendors:[{}]};
  this.ngOnInit();
}

edit(ven){
  this.updatebutton=true;
  this.vendor=ven
}

update(contactvendor)
{
  var msg=this.vends
contactvendor.save().toPromise().then(function(resp) {
console.log(resp)
msg.savemsg('Updated Successfully','alert alert-info')
})
this. vendor={vendors:[{}]};
}

delete(ven,i){
  var msg=this.vends
  if(confirm("Are you sure! you want to delete this data")){
  ven.remove().toPromise().then(function(resp,err) {
  console.log(resp)
  })
 
  this.vend.splice(i,1);
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

savecountry(){
  const countryval = {
  countryal:this.country,
  code:this.countrycode
  }
  console.log(this.datas1);
    this.datas1.post(countryval).toPromise().then(resep=>{
    this.datas1.push(resep);
    });
      this.country="";
      this.countrycode="";
}

savestate(){
  const country1 = {
  countryallid:this.countryvalue,
  statename:this.statename
  }
  console.log(this.datas2);
    this.datas2.post(country1).toPromise().then(resp=>{
    this.datas2.push(resp);
    });
      this.countryvalue="";
      this.statename="";
}

savecity(){
  const country1 = {
  countryallid:this.countries,
  stateallid:this.statevalue,
  cityname:this.cityname
  }
  console.log(this.datas3);
    this.datas3.post(country1).toPromise().then(resp=>{
    this.datas3.push(resp);
    });
     this.countries="";
     this.statevalue="";
     this.cityname="";
}

selectcountry(cou){

  this.restangular.all('stateall').getList({"countryallid":cou}).subscribe(res=>
  {
  this.statearry=res,console.log(cou)
  })
  return this.statearry;
}

selectstate(st){
  this.restangular.all('cityall').getList({"stateallid":st}).subscribe(res=>
  {
  this.cityarry=res,console.log(st)
  })
  return this.cityarry;
}

open(dialog: Md2Dialog) {
  dialog.open();
}
 
close(dialog: any) {
  dialog.close();
}
view(datas) {
  this.vendor= datas;

}

ngOnInit() {

    let baseStatus = this.restangular.all('contacts');
    baseStatus.getList().subscribe(data => {
    this.vend = data.filter(res=>res.vendors);
    console.log(this.vend)
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

    var city=this.restangular.all('cityall')
    city.getList().subscribe(data=>{
    this.datas3=data;
    return this.datas3;
});
this.form = this.formBuilder.group({
  name: [null, Validators.required],
  seconphone: [null, Validators],
  contperson: [null, Validators.required],
  address: [null, Validators],
  priphone: [null, Validators.required],
  loc:[null, Validators.required],
  stat:[null, Validators.required],
  maill:[null, Validators.required],
});
}
}