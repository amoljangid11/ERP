import { Component, OnInit } from '@angular/core';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrls: ['./license.component.css']
})
 
export class LicenseComponent implements OnInit {



constructor(private userservice:UserService,private restangular: Restangular) {

this.license=this
 //let removeitem = base.map(sitelicense => sitelicense[0]);{
 //  this.remove(removeitem);
// }
     }

license
alllicense;
data={licensetype:[{}]}
updatebutton=false;
editRowId;

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

save(obj)
{
  var msg=this.license
  var create=this.restangular.one('general')
  create.licensetype=[]
  create.licensetype.push(obj.licensetype[0]);
  create.save().toPromise().then(res=> {
  this.restangular.all('general').getList().subscribe(data=>{this.alllicense=data.filter(res=>res.licensetype)})
    
    msg.savemsg('Added Succesfully','alert alert-info');
  });
  this.data={licensetype:[{}]}
}

delete(lic,i){
 var delmsg=this.license
 this.alllicense.splice(i,1);
 lic.remove();
 delmsg.savemsg('Deleted Succesfully','alert alert-danger');

}

cancel(){
  this.data={licensetype:[{}]}
}

edit(lic){
  this.updatebutton=true;
  this.data=lic;
}

view(work){
  // this.updates=true;
  this.data=work
}

update(licences)
{
  licences.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.data={licensetype:[{}]}
}
  

ngOnInit() {

  let baselicense = this.restangular.all('general');
  baselicense.getList().subscribe(item => {
  console.log(item)
  this.alllicense =item.filter(res=>res.licensetype);
  console.log(this.alllicense)

  });

 }

}
