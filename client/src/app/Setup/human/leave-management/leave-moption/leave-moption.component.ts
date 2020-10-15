import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { RestangularModule, Restangular} from 'ngx-restangular';

@Component({
  selector: 'app-leave-moption',
  templateUrl: './leave-moption.component.html',
  styleUrls: ['./leave-moption.component.css']
})
export class LeaveMoptionComponent implements OnInit {

 whform = new FormControl('', [
     Validators.required]);

  constructor(private restangular:Restangular) { }

 datas;
 bunit;
week2;
sholiday;
dept;
whours;
hr;
month;
halfday;
desc;
week1;
altransfer;
editRowId;


checked = [
    { name: 'Yes' },
    { name: 'No' },
    
  ];
  transfer = [
    { name: 'Yes' },
    { name: 'No' },
    
  ];

  months = [
    {value: 'month-0', viewValue: 'January'},
    {value: 'month-1', viewValue: 'February'},
    {value: 'month-2', viewValue: 'March'},
    {value: 'month-3', viewValue: 'April'},
    {value: 'month-4', viewValue: 'May'},
    {value: 'month-5', viewValue: 'June'},
    {value: 'month-6', viewValue: 'July'},
    {value: 'month-7', viewValue: 'August'},
    {value: 'month-8', viewValue: 'September'},
    {value: 'month-9', viewValue: 'October'},
    {value: 'month-10', viewValue: 'November'},
    {value: 'month-11', viewValue: 'December'}
  ];
  wds1 = [
    { viewValue: 'Sunday'},
    { viewValue: 'Monday'},
    { viewValue: 'Tuesday'},
    { viewValue: 'Wednesday'},
    { viewValue: 'Thursday'},
    { viewValue: 'Friday'},
    { viewValue: 'Saturday'}
  ];
  wds2 = [
    {value: 'wds-0', viewValue: 'Sunday'},
    {value: 'wds-1', viewValue: 'Monday'},
    {value: 'wds-2', viewValue: 'Tuesday'},
    {value: 'wds-3', viewValue: 'Wednesday'},
    {value: 'wds-4', viewValue: 'Thursday'},
    {value: 'wds-5', viewValue: 'Friday'},
    {value: 'wds-6', viewValue: 'Saturday'}
  ];
 
 day = [
    {selected: 'day', viewValue: 'select'},
    {value: 'day0', viewValue: 'Yes'},
    {value: 'day1', viewValue: 'No'}
    ];

  holiday = [
    {selected: 'hday', viewValue: 'select'},
    {value: 'hday0', viewValue: 'Yes'},
    {value: 'hday1', viewValue: 'No'}
    ];

    save(){
  const data={
businessunit:this.bunit,
department:this.dept,
startmonth:this.month,
weekone:this.week1,
weektwo:this.week2,
whours:this.whours,
hdayrequest:this.halfday,
altransferable:this.altransfer,
skipholidays:this.sholiday,
hrmanager:this.hr,
description:this.desc

  };

  this.datas.post(data).toPromise().then(res=>{
    console.log(res);
          this.datas.push(data);
  });

this.bunit="";
this.week2="";
this.month="";
this.week1="";
this.week2="";
this.whours="";
this.halfday="";
this.altransfer="";
this.sholiday="";
this.hr="";
this.desc="";

}

remove(d,i): void {

    console.log('inside remove and id = ' + i);

    d.remove();
    this.datas.splice(i,1);
    
      
 }

toggle(id)
{
  this.editRowId = id;
 }

edit(id)
{
   this.editRowId=id;
 }

update(d)
{
   this.editRowId=false;
   console.log(d)

   d.save();

}


  selected = Object;
  ngOnInit() {

  var baseUnits=this.restangular.all('leavemanagementopts');
  baseUnits.getList().subscribe(data=>{
    this.datas=data;
    return this.datas;
  });

  }

}
