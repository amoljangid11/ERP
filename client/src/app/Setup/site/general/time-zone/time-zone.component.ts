import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-time-zone',
  templateUrl: './time-zone.component.html',
  styleUrls: ['./time-zone.component.css']
})
export class TimeZoneComponent implements OnInit {



  constructor(private userservice:UserService,private restangular: Restangular) {
   this.zone=this
   }

zone;
time={timezone:[{}]};
updatebutton=false;
zones;
datas;

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


save(obj){
  var msg=this.zone
  var create=this.restangular.one('general')
  create.timezone=[]
  create.timezone.push(obj.timezone[0]);
  create.save().toPromise().then(res=> {
  this.restangular.all('general').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.timezone)})
  msg.savemsg('Added Succesfully','alert alert-info');
  });
  this.time={timezone:[{}]};
}

cancel(){
  this.time={timezone:[{}]}; 
}

edit(tzone){
  this.updatebutton=true;
  this.time=tzone
}

view(work){
  // this.updates=true;
  this.time=work
}


update(zones)
{
  zones.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.time={timezone:[{}]};
}

delete(tzone,i){
  var delmsg=this.zone
  tzone.remove();
  this.datas.splice(i,1);

  delmsg.savemsg('Deleted Succesfully','alert alert-danger');

}


ngOnInit() {
  
  let baseAccount = this.restangular.all('general');
  baseAccount.getList().subscribe(data => {
  this.datas = data.filter(res=>res.timezone);
  });

  let base = this.restangular.all('timeall');
  base.getList().subscribe(data => {
  this.zones = data;
    console.log(this.zones)
    return this.zones;
    }, () => {
    alert( "Oops error from server.." );
  });

 } 	
}
  

