import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {MaterialModule} from '@angular/material' 
import { Router} from '@angular/router';
import { FormBuilder, FormGroup,FormArray,Validators, FormControl } from '@angular/forms';
import {Inject, LOCALE_ID, Pipe, PipeTransform} from '@angular/core';
import {UserService } from '../../../user.service';
import * as jsPDF from 'jspdf'
import 'jspdf-autotable';
// import * as alasql from 'alasql';
import { auto } from 'async';
import { Md2Dialog, Item } from 'md2';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-backcheckagen',
  templateUrl: './backcheckagen.component.html',
  styleUrls: ['./backcheckagen.component.css'],
  providers:[DatePipe]
})
export class BackcheckagenComponent implements OnInit {

  constructor(private router:Router,private service:UserService,public datepipe:DatePipe,private restangular: Restangular,private formBuilder: FormBuilder) { }
  bunits={agenciesunits:[{}]};
  datas;
  team=[];
  add;
  
  open(dialog: Md2Dialog) {
    dialog.open();
    }
  
    close(dialog: any) {
      // this.ngOnInit();
    dialog.close();
    }
  

    save(data)
    {
      console.log(data)
    var create=this.restangular.one('selfservice')
    create.Empteam=[]
    for(let i=0;i<this.selectedItems.length;i++)
    {
    create.Empteam.push(data.Empteam[i]);
    console.log(create)
    }
    create.save().toPromise().then(res=> {
    
    this.restangular.all('selfservice').getList().subscribe(data=>{
      this.datas=data.filter(res=>res.Empteam);
      if(this.datas[0])
           {console.log("edit")
             this.team=this.datas[0]
             this.add=false
           }else{
             console.log("add")
            //  data.update();
           }})
            // data.update();
     });  
    }
    update1(obj)
    {
    console.log(obj)
    
    obj.save();
    // this.show = !this.show
    }


    cancel1(){
      document.getElementById('checkagen').style.display="none";
    }

    source
    margins
    specialElementHandlers
    downloadPDF() {
      var pdf = new jsPDF('l', 'pt', 'a3');
      this.source = $('#agencies')[0];
      this.specialElementHandlers = {
          '#bypassme': function (element, renderer) { 
              return true
          }
      };
      this.margins = {
          top:10,
          width:'1200'

      };
      
      pdf.fromHTML(
      this.source, 
      this.margins.left, 
      this.margins.top, { 
          'width': this.margins.width,
          'elementHandlers': this.specialElementHandlers
      },
      function (dispose) {
          pdf.save('BackgndAgencies.pdf');
      }
      )}

    downloadExcel(table, employeedata){
      let uri = 'data:application/vnd.ms-excel;base64,'
      , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>'
      , base64 = function(s) { return window.btoa(decodeURIComponent(encodeURIComponent(s))) }
      , format = function(s,c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
      if (!table.nodeType) table = document.getElementById(table)
      var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
      window.location.href = uri + base64(format(template, ctx))
      }

      screeningtypes;
      agencyname;
      url;
      primaryphone;
    reset(){
      this.screeningtypes=""
      this.agencyname=""
      this.url=""
      this.primaryphone=""
    }    
    displaybox(){
      if(document.getElementById('checkagen').innerHTML.valueOf)
      {
        document.getElementById('checkagen').style.display="block";
      }
    }
    selectedItems=[];
    settings={};
    itemList = [];
    emps;
    perbackcheckagen()
    {
        this.emps=this.backagen.find(obj => obj.agenciesunits[0].screeningtypes==this.screeningtypes)
        console.log("aaaabbbbbbbbbcccccccc")
        console.log(this.emps)
        this.screeningtypes = this.emps.agenciesunits[0].screeningtypes
        this.agencyname = this.emps.agenciesunits[0].agencyname
        this.url = this.emps.agenciesunits[0].url
        this.primaryphone = this.emps.agenciesunits[0].primaryphone
       
    }

    backagen
  ngOnInit() {
    let baseHolidaygroup = this.restangular.all('configuration');
    baseHolidaygroup.getList().subscribe(data => {
    this.backagen = data.filter(res=>res.agenciesunits);
    console.log(this.backagen)
    return this.backagen;
  });

  this.itemList = [
    { "id": 1, "itemName": "Agency"},
    { "id": 2, "itemName": "Website Url ID" },
    { "id": 3, "itemName": "Primary Phone"},
    { "id": 4, "itemName": "Secondary Phone"},
    { "id": 5, "itemName": "Address"},
    { "id": 6, "itemName": "Screening Type"}

  ];
  this.settings = {
    text: "Background Check Agencies",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    classes: "myclass inputField"
  };
}
onItemSelect(item: any) {
  console.log(item);
  console.log(item.itemName);
  this.selectedItems.push(item);
  console.log(this.selectedItems)
  console.log(this.selectedItems[0].itemName);
  }
  OnItemDeSelect(item: any) {
  console.log(item);
  this.selectedItems.pop()
  console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
  this.selectedItems.push(items);
  console.log(items);
  }
  onDeSelectAll(items: any) {
  console.log(items);
  this.selectedItems.pop()
  }

}
