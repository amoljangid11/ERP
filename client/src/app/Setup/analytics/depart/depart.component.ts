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
  selector: 'app-depart',
  templateUrl: './depart.component.html',
  styleUrls: ['./depart.component.css'],
  providers:[DatePipe]
})
export class DepartComponent implements OnInit {

  constructor(private router:Router,private service:UserService,public datepipe:DatePipe,private restangular: Restangular,private formBuilder: FormBuilder) { }
  dunits={department:[{}]};
  dunit;

  open(dialog: Md2Dialog) {
    dialog.open();
    }
  
    close(dialog: any) {
      // this.ngOnInit();
    dialog.close();
    }
    datas;
    team=[];
    add;
    show;   

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
    
    }

    cancel1(){
      document.getElementById('dunit').style.display="none";
    }

    offemp
    source
    margins
    specialElementHandlers
    downloadPDF() {
      var pdf = new jsPDF('l', 'pt', 'a3');
      this.source = $('#departments')[0];
      this.specialElementHandlers = {
          '#bypassme': function (element, renderer) { 
              return true
          }
      };
      this.margins = {
          top:10,
          width:'auto'

      };
      
      pdf.fromHTML(
      this.source, 
      this.margins.left, 
      this.margins.top, { 
          'width': this.margins.width,
          'elementHandlers': this.specialElementHandlers
      },
      function (dispose) {
          pdf.save('Departments.pdf');
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

      downloadExcel1(table, employeedata){
        let uri = 'data:application/vnd.ms-excel;base64,'
        , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>'
        , base64 = function(s) { return window.btoa(decodeURIComponent(encodeURIComponent(s))) }
        , format = function(s,c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
        if (!table.nodeType) table = document.getElementById(table)
        var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
        window.location.href = uri + base64(format(template, ctx))
        }
      
        departmentname;
        departmentcode;
        businessunit
      country;
      starton
      reset(){
         this.departmentname="";
         this.departmentcode="";
         this.businessunit="";
         this.country="";
         this.starton="";
      }    
      displaybox(){
        if(document.getElementById('dunit').innerHTML.valueOf)
        {
          document.getElementById('dunit').style.display="block";
        }
      }
      selectedItems=[];
      settings={};
      itemList = [];
      dept;
      perdept()
      {
          this.dept=this.dunit.find(obj => obj.department[0].departmentname==this.departmentname)
          console.log("aaaabbbbbbbbbcccccccc")
          console.log(this.dept)
          this.departmentname = this.dept.department[0].departmentname
          this.departmentcode = this.dept.department[0].departmentcode
          this.starton = this.datepipe.transform(this.dept.department[0].starton ,'dd-MM-yyyy');
          this.country = this.dept.department[0].country
          console.log(this.departmentname)
      }
      bureport


  ngOnInit() {
    let baseDepart= this.restangular.all('departments');
    baseDepart.getList().subscribe(data => {
    console.log(data)
    this.dunit =data.filter(res=>res.department);
    return this.dunit;
    });

    // let baseBusine = this.restangular.all('businessunit');
    // baseBusine.getList().subscribe(data => {
    // this.bureport =data.filter(res=>res.businessunits[0].name==this.name);
    // console.log(this.bureport)
    // return this.bureport;
    // });

    this.itemList = [
      { "id": 1, "itemName": "Department"},
      { "id": 2, "itemName": "Code" },
      { "id": 3, "itemName": "Business Unit"},
      { "id": 4, "itemName": "Started On"},
      { "id": 5, "itemName": "#Emp"},
      { "id": 6, "itemName": "Address"},
      { "id": 7, "itemName": "City"},
      { "id": 8, "itemName": "State"},
      { "id": 7, "itemName": "Country"}
      
    ];
    this.settings = {
      text: "Department",
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
