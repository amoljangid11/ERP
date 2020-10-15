import { Component, OnInit } from '@angular/core';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core'; 
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';
import { Md2Dialog } from 'md2';
@Component({
  selector: 'app-nationalities',
  templateUrl: './nationalities.component.html',
  styleUrls: ['./nationalities.component.css']
})
export class NationalitiesComponent implements OnInit {

constructor(private userservice:UserService,private restangular: Restangular) { 
  this.national=this
}

national;
nation={nationalities:[{}]}
updatebutton=false;
datas;
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

 
save(obj){
  var msg=this.national
  var create=this.restangular.one('general')
  create.nationalities=[]
  create.nationalities.push(obj.nationalities[0]);
  create.save().toPromise().then(res=> {
  this.restangular.all('general').getList().subscribe(data=>{this.datas=data.filter(res=>res.nationalities)})
  
   msg.savemsg('Added Succesfully','alert alert-info'); 
  });  
  this.nation={nationalities:[{}]}
}

cancel(){
this.nation={nationalities:[{}]}
}

edit(est){
  this.updatebutton=true;
  this.nation=est
}

view(work){
  // this.updates=true;
  this.nation=work

}

update(nations)
{
  nations.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.nation={nationalities:[{}]}
}

delete(nationality,i){
  var delmsg=this.national
  nationality.remove();
  this.datas.splice(i,1);
  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
};


ngOnInit() {
   
  let baseNation = this.restangular.all('general');
  baseNation.getList().subscribe(data => {
  this.datas = data.filter(res=>res.nationalities);
  });
        
 }
 
}
