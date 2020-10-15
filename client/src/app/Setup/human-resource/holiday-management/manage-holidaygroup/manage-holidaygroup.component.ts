import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, Validators, FormBuilder,} from '@angular/forms';
import {MdChipsModule} from '@angular/material';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';
import { Pipe, PipeTransform } from '@angular/core';
import { Md2Dialog } from 'md2';
@Pipe({
  name: 'filter'
})

@Component({
  selector: 'app-manage-holidaygroup',
  templateUrl: './manage-holidaygroup.component.html',
  styleUrls: ['./manage-holidaygroup.component.css']
})
export class ManageHolidaygroupComponent implements OnInit {

formControl = new FormControl('hello', Validators.required);
 
constructor(private userservice:UserService,private restangular: Restangular,private formBuilder: FormBuilder) { 
 this.group=this
}

group;
form:FormGroup;
holidays={manageholiday:[{}]};
locations={worklocation:[{}]};
datas;
data1;
updatebutton = false;
updates=false;
holidayoptions=[];


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



save(obj){
  var msg=this.group
 var create= this.restangular.one('management');
 create.worklocation=[];
 create.worklocation.push(obj.worklocation[0])
 create.save().toPromise().then(res=>{
 console.log(res)
 this.restangular.all('management').getList()
                 .subscribe(data=>{this.datas=data.filter(res=>res.worklocation)})
                 console.log(this.datas)

 msg.savemsg('Added Succesfully','alert alert-info');
 })
 this.locations={worklocation:[{}]}; 

}

view(data) {
  // this.updatebutton = true;
  this.locations=  data}


edit(data) {
  this.updatebutton = true;
  this.locations=  data
  var manage=[];
  manage=this.data1.filter(datas =>datas.manageholiday[0].locationname == data.worklocation[0].locationname);
  console.log(manage)
  this.holidayoptions= manage
  console.log(this.holidayoptions)
}

updatehgroup(hgroup,options,value)
{
  hgroup.save().toPromise().then(function(resp) {
  console.log(resp)
  console.log(options)
  options.forEach(res=>{
  res.manageholiday[0].locationname=value;
  res.save();
  })
  })
  this.locations={worklocation:[{}]};
}

cancel(){
  this.locations={worklocation:[{}]};
  this.ngOnInit();
}
multiloc=[];
locview=[];
sameloc=[];

delete(hg,i){
  this.multiloc=[];
  this.locview=[];
  for(let i=0;i<this.data1.length;i++)
  {
    for(let j=0;j<this.data1[i].manageholiday[0].locationname.length;j++)
    {
      this.multiloc.push({"locname":this.data1[i].manageholiday[0].locationname[j].itemName});
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
      if(this.multiloc[m].locname==this.locview[n].locname)
      {
        console.log("Same");
        locstart=true;
      }
    }
    loccount++;
 
    if(loccount==1 && locstart==false)
    {
      console.log("Not Same");
      this.locview.push(this.multiloc[m])
      console.log(this.locview);
    }
    locstart=false;
    loccount=0;

    // for(let k=0;)
  }
   
  for(let l=0;l<this.locview.length;l++)
  {
    if(hg.worklocation[0].locationname==this.locview[l].locname)
    {
      console.log("same");
      this.sameloc.push({"locname":this.locview[l].locname});
    }
  }
   console.log(this.sameloc.length)

   if(this.sameloc.length!=0)
   {
   if(hg.worklocation[0].locationname==this.sameloc[0].locname)
   {
     console.log("a")
     alert("You can't delete work location data it is currently using in Manage holiday");
   }
   }
   else
   {
      if(confirm("Are you sure! you want to delete this data"))
      {
         var delmsg=this.group
         hg.remove().toPromise().then(function(resp,err) {
         console.log(resp)
         })
         this.datas.splice(i,1);
         delmsg.savemsg('Deleted Succesfully','alert alert-danger');
      }
      else
      {
         this.cancel();
      }
   }
  
  // if(confirm("Are you sure! you want to delete this data")){
  // var delmsg=this.group
  // hg.remove().toPromise().then(function(resp,err) {
  // console.log(resp)
  // })
  // this.datas.splice(i,1);
  
  // delmsg.savemsg('Deleted Succesfully','alert alert-danger');
  // }
  // else{
  //   this.cancel();
  // }
  
}


/*editholiday(data){
  console.log(data)
this.holidaygroups={holidaygroup:[{}]};
    this.updates = true;
    this.holidays=  data

   

}
updateholiday(hgroup)
{
   hgroup.save().toPromise().then(function(resp) {
   console.log(resp)
  })
   this.holidays={manageholiday:[{}]};
}

delete1(hi,i){
  hi.remove();
  console.log(hi)
  this.datas.splice(i,1);
}



savechanges(holiday){
 var create= this.restangular.one('management');
 create.manageholiday=[];
 create.manageholiday.push(holiday.manageholiday[0])
 create.save().toPromise().then(res=>{
 console.log(res)
 this.restangular.all('management').getList()
                 .subscribe(data=>{this.data1=data.filter(res=>res.manageholiday)})
                 console.log(this.data1)
})
 this.holidays={manageholiday:[{}]};
}


*/


  ngOnInit() {

    let baseHolidaygroup = this.restangular.all('management');
    baseHolidaygroup.getList().subscribe(data => {
    this.datas = data.filter(res=>res.worklocation);
    return this.datas;
    });
    
    let baseHoliday = this.restangular.all('management');
    baseHoliday.getList().subscribe(data => {
    this.data1 = data.filter(res=>res.manageholiday)
    /*this.data1=this.datas.filter(res=> this.data1.groupname == res.groupname)*/
    console.log(this.data1)
    return this.data1;
    });
    this.form = this.formBuilder.group({
      groupname: [null, Validators.required],
      desc: [null, Validators],
    });

  }

} 
