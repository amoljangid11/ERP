import { Component, OnInit } from '@angular/core';
import {MdSelectModule} from '@angular/material';
import {Restangular } from 'ngx-restangular';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})


export class CountriesComponent implements OnInit {


constructor(private restangular: Restangular) { 
 this.count=this
}

count;
selectedValue: string;
codevalue;
datas;
code;
codeva;
editRowId;

cnts;
try;
all;

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


save(){
  var msg=this.count
  const countryval = {
  countryvalue:this.selectedValue,
  codevalue:this.codevalue
  }
  console.log(this.datas);
  this.datas.post(countryval).toPromise().then(resep=>{
  this.datas.push(resep);
    msg.savemsg('Added Succesfully','alert alert-info');
  });
  this.selectedValue="";
  this.codevalue="";
}

toggle(id){
  this.editRowId = id;
}

select(i,gy){
  this.codevalue=gy[i].code;
  console.log(this.codevalue,'here');
};


delete(cntryval,i){
  var delmsg=this.count;
  cntryval.remove();
  this.datas.splice(i,1);
  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
}


  ngOnInit() {


    this.cnts=[
    {code:'hf', name: 'Australia'},
    {code: 'AUT', name: 'Austria'},
    {code: 'BRA', name: 'Brazil'},
     {code: 'CHN', name: 'China'},
      {code: 'IND', name: 'India'},
  ];



this.try={"country":[{"cname":"india","code":"IND","_id":"1",

"states":[{"tn":["trichy","trichy1"]},{"andra":["bb"]}]},
{"cname":"china","code":"CHI","states":[{"huya":["trichy","trichy1"]},
{"kaimui":["bb"]}]}]};

/*console.log(this.try[0].country[0].cname,'jjjjjjjj')*/


var countryal=this.restangular.all('countryall')
countryal.getList().subscribe(data=>{
this.all=data;


})



var country1=this.restangular.all('countries');

console.log(country1)

country1.getList().subscribe(data=>{

this.datas=data;

});


return this.datas;

  }


}
