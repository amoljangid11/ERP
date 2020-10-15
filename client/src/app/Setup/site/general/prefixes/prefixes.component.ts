import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Restangular } from 'ngx-restangular';
import {UserService } from '../../../../user.service';
import { Md2Dialog } from 'md2';



@Component({
  selector: 'app-prefixes',
  templateUrl: './prefixes.component.html',
  styleUrls: ['./prefixes.component.css']
})
export class PrefixesComponent implements OnInit {


  constructor(private userservice:UserService,private restangular: Restangular)  { 
   this.prefix=this
   }

prefix;
show=false;
obj={prefixes:[{}]};
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
  var msg=this.prefix
  var create=this.restangular.one('general')
  create.prefixes=[]
  create.prefixes.push(obj.prefixes[0])
  create.save().toPromise().then((resp)=> {
  console.log(resp);
  this.restangular.all('general').getList()
                   .subscribe(data=>{this.datas=data.filter(res=>res.prefixes);})
    msg.savemsg('Added Succesfully','alert alert-info');

  })

  this.obj={prefixes:[{}]};
}

delete(pre,i){
  var delmsg=this.prefix
  pre.remove();
  this.datas.splice(i,1);

  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
}


edit(pre){
 this.updatebutton=true;
 this.obj=pre
}
view(work){
  // this.updates=true;
  this.obj=work

}
update(pref){
  pref.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.obj={prefixes:[{}]};
}

cancel(){
  this.obj={prefixes:[{}]};
}


ngOnInit() {
    
  let base = this.restangular.all('general');
  base.getList().subscribe(data => {
  this.datas = data.filter(res=>res.prefixes);
  console.log( this.datas)
  });
  
  }

}
