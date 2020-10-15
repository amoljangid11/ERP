import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators, FormBuilder,} from '@angular/forms';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';
import { Md2Dialog } from 'md2';
import { Router} from '@angular/router';

@Component({
  selector: 'app-manage-holiday',
  templateUrl: './manage-holiday.component.html',
  styleUrls: ['./manage-holiday.component.css']
})
export class ManageHolidayComponent implements OnInit {


constructor(private userservice:UserService,private router:Router,private restangular: Restangular,private formBuilder: FormBuilder) { 

 this.holiday=this
}

holiday;
form:FormGroup;
form1:FormGroup;
datas;
updates=false;
holidays={manageholiday:[{}]};
data1;
i=0;

multiloc=[];

messageClass
message
deleted = false;
edited=false;

itemlist = [];
loclist=[];
locview=[];
selectedItems = [];
settings = {};

hgroup;
locations={worklocation:[{}]};

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

save(holiday){
  var msg=this.holiday;
  var create= this.restangular.one('management');
  create.manageholiday=[];
  console.log(holiday.manageholiday[0])
  create.manageholiday.push(holiday.manageholiday[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('management').getList()
  .subscribe(data=>data.filter(res=>res.manageholiday));
  
    msg.savemsg('Added Succesfully','alert alert-info');
      })
  this.holidays={manageholiday:[{}]};
  this.ngOnInit();
}


update(updatrholiday){
  updatrholiday.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.holidays={manageholiday:[{}]};
  this.ngOnInit();
}

edit(data){
  this.updates=true;
  this.holidays = data;
}

view(data){
  // this.updates=true;
  this.holidays = data;
  console.log(this.holidays);
}

// edit(emp,dataall,i) {
//   this.updates = true;
//   this.holidays=  dataall
  
// }
// view(emp,dataall,i) {
//   // this.updatebutton = true;
//   this.holidays=  dataall

// }

delete(ho,i){
  if(confirm("Are you sure! you want to delete this data")){
  var delmsg=this.holiday
  ho.remove().toPromise().then(function(resp,err) {
  console.log(resp)
  })
  this.datas.splice(i,1);
  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
}
else{
  this.cancel();
}
  
}

cancel(){
  
  this.holidays={manageholiday:[{}]};
}




savechanges(obj){
  var create= this.restangular.one('management');
  create.worklocation=[];
  create.worklocation.push(obj.worklocation[0]);
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('management').getList()
  .subscribe(data=>{this.data1=data.filter(res=>res.worklocation)})
  })
  this.locations={worklocation:[{}]}
}

fetch()
{
  this.multiloc=[];
  this.locview=[];
  for(let i=0;i<this.datas.length;i++)
  {
    for(let j=0;j<this.datas[i].manageholiday[0].locationname.length;j++)
    {
      this.multiloc.push({"locname":this.datas[i].manageholiday[0].locationname[j].itemName,"holidayname":this.datas[i].manageholiday[0].holiday});
      // console.log(this.multiloc);
    }
  }
  console.log(this.multiloc);
  console.log(this.locview);
  var loccount=0; 
  var locstart=false;
  for(let m=0;m<this.multiloc.length;m++)
  {
    for(let n=0;n<this.locview.length;n++)
    {
      if(this.multiloc[m].locname==this.locview[n].locname && this.multiloc[m].holidayname==this.locview[n].holidayname)
      {
        console.log("Same");
        locstart=true;
      }
    }
    loccount++;
    console.log("abcdpqr")
    console.log(loccount)
    console.log(locstart)
    if(loccount==1 && locstart==false)
    {
      console.log("Not Same");
      this.locview.push(this.multiloc[m])
      console.log(this.locview);
    }
    locstart=false;
    loccount=0;
  }

}

ngOnInit() {


  let baseHolidayGroup = this.restangular.all('management');
  baseHolidayGroup.getList().subscribe(data => {
  this.data1 = data.filter(res=>res.worklocation);
  console.log(this.data1)
  console.log(this.data1.length)
  for(let i=0;i<this.data1.length;i++)
  {
    this.itemlist.push({"id":i,"itemName":this.data1[i].worklocation[0].locationname});
    // console.log(this.itemlist);
  }
  // console.log(this.itemlist);
  var count=0; 
  var start=false;
  console.log(this.itemlist.length)
  for(let i=0;i<this.itemlist.length;i++)
  {

    for(let j=0;j<this.loclist.length;j++)
    {
      if(this.itemlist[i].itemName==this.loclist[j].itemName)
      {
        console.log("same")
        start=true;
      }
    }
    count++;
    if(count==1 && start==false)
    {
      console.log("not same")
      this.loclist.push(this.itemlist[i]); 
      console.log(this.loclist)
   } 
   start = false; 
   count = 0; 
  }
  return this.data1;
  });

  let baseHoliday = this.restangular.all('management');
  baseHoliday.getList().subscribe(data => {
  this.datas = data.filter(res=>res.manageholiday);
  console.log(this.datas);
  this.fetch();
  return this.datas;
  });

  this.form = this.formBuilder.group({
    holiday: [null, Validators.required],
    groupname: [null, Validators],
    date: [null, Validators.required],
    desc: [null, Validators],
  });
  this.form1 = this.formBuilder.group({
    groupname1: [null, Validators.required],
    desc1: [null, Validators],
  });


  this.settings = {
    text: "Select Work Locations",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    classes: "myclass inputField"
  };

  }

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
    }
    OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
    }
    onSelectAll(items: any) {
    console.log(items);
    }
    onDeSelectAll(items: any) {
    console.log(items);
    }

}
