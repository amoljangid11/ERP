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

@Component({
  selector: 'app-grprole',
  templateUrl: './grprole.component.html',
  styleUrls: ['./grprole.component.css']

})
export class GrproleComponent implements OnInit {

  constructor(private router:Router,private service:UserService,private restangular: Restangular,private formBuilder: FormBuilder) { }


    source
    margins
    specialElementHandlers
    downloadPDF() {
      var pdf = new jsPDF('l', 'pt', 'a3');
      this.source = $('#grproles')[0];
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
          pdf.save('GroupRoles.pdf');
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
    roledata;
  ngOnInit() 
  {
          let baseRole= this.restangular.all('rolesprivileges');
          baseRole.getList().subscribe(data => {
          console.log(data)
          this.roledata =data.filter(res=>res.role);
          return this.roledata;
          });
  }

}
