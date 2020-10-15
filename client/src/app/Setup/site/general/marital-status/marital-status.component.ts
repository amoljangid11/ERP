import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-marital-status',
  templateUrl: './marital-status.component.html',
  styleUrls: ['./marital-status.component.css']
})
export class MaritalStatusComponent implements OnInit {



constructor(private userservice:UserService,private restangular: Restangular) {
  this.status=this
 }

status;
editRowId;
datas;
maritals={marital:[{}]}
updatebutton=false;

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


save(data){ 
  var msg=this.status
  var create=this.restangular.one('general')
  create.marital=[]
  create.marital=data.marital
  create.save().toPromise().then((res)=> {
  console.log(res);
  this.restangular.all('general').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.marital);})
    msg.savemsg('Added Succesfully','alert alert-info');
  });
  this.maritals={marital:[{}]}
}

cancel(){
  this.maritals={marital:[{}]}
}

update(mstatus){
  mstatus.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.maritals={marital:[{}]}
}

edit(status){
  this.updatebutton=true;
  this.maritals=status

}


view(work){
  // this.updates=true;
  this.maritals=work

}
delete(status,i){
  var delmsg=this.status
  status.remove();
  this.datas.splice(i,1);
  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
}

ngOnInit() { 

  let base1 = this.restangular.all('general');
  base1.getList().subscribe(data => {
  this.datas = data.filter(res=>res.marital);
  console.log(this.datas)
  })
  	
  }

}
