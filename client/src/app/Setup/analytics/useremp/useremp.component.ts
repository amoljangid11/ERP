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
  selector: 'app-useremp',
  templateUrl: './useremp.component.html',
  styleUrls: ['./useremp.component.css'],
  providers:[DatePipe]
})
export class UserempComponent implements OnInit {

  constructor(private router:Router,private service:UserService,public datepipe:DatePipe,private restangular: Restangular,private formBuilder: FormBuilder) { }

  team=[];
  add;
  datas;
  
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
    document.getElementById('usrempp').style.display="none";
  }

  source
  margins
  specialElementHandlers
  downloadPDF() {
    var pdf = new jsPDF('l', 'pt', 'a3');
    this.source = $('#useremps')[0];
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
        pdf.save('User&Emp.pdf');
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
    
      utype;
      status;
      dateofcreate;
      dateoflogin;

    reset(){
     this.utype="";
     this.status="";
     this.dateofcreate="";
     this.dateoflogin="";
    }    
    displaybox(){
      if(document.getElementById('usrempp').innerHTML.valueOf)
      {
        document.getElementById('usrempp').style.display="block";
      }
    }
    selectedItems=[];
    settings={};
    itemList = [];
    emps;
    peremp()
    {
        this.emps=this.user.find(obj => obj.utype==this.utype)
        console.log("aaaabbbbbbbbbcccccccc")
        console.log(this.emps)
        // this.reportingmanager = this.emps.official[0].reportingmanager
        // this.businessunit = this.emps.official[0].businessunit
        // this.departments = this.emps.official[0].departments
        // this.role = this.emps.official[0].role
        // this.jobtitle = this.emps.official[0].jobtitle
        // this.position = this.emps.official[0].position
        // this.status = this.emps.official[0].status
        // this.dateofjoing = this.datepipe.transform(this.emps.official[0].dateofjoing ,'dd-MM-yyyy');
        // this.modeofemp = this.emps.official[0].modeofemp
    }
    user;
  
  ngOnInit() {
     
    // this.getuser=JSON.parse(localStorage.getItem('user'));
    // console.log(this.getuser)

    var baseOff= this.restangular.all('user');
    baseOff.getList().subscribe(datas=>{
    this.user =datas;
    console.log(this.user)
    return this.user;
    }); 
  
    this.itemList = [
      { "id": 1, "itemName": "Name"},
      { "id": 2, "itemName": "Role" },
      { "id": 3, "itemName": "Email"},
      { "id": 4, "itemName": "ID"},
      { "id": 5, "itemName": "Last Login"},
      { "id": 6, "itemName": "Status"},
      { "id": 7, "itemName": "Create On"}

    ];
    this.settings = {
      text: "Employees",
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
