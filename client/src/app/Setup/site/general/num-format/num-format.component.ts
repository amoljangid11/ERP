import { Component, OnInit } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-num-format',
  templateUrl: './num-format.component.html',
  styleUrls: ['./num-format.component.css']
})
export class NumFormatComponent implements OnInit {

  constructor(private userservice:UserService,private restangular: Restangular) { 
   this.format=this
  }

format;
number={numberformats:[{}]}
alldata;
show=false;
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

save(obj){
  var msg=this.format
  var create=this.restangular.one('general')
  create.numberformats=[]
  create.numberformats.push(obj.numberformats[0]);
  create.save().toPromise().then(res=> {

  this.restangular.all('general').getList().subscribe(data=>{this.alldata=data.filter(res=>res.numberformats)})
    msg.savemsg('Added Succesfully','alert alert-info');
   });  
  this.number={numberformats:[{}]}
}

delete(num,i){
  var delmsg=this.format;
  num.remove();
  this.alldata.splice(i,1);
  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
}

cancel(){
  this.number={numberformats:[{}]}
}

edit(num){
  this.updatebutton=true;
  this.number=num
}

view(work){
  // this.updates=true;
  this.number=work
}

update(numbers)
{
  numbers.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.number={numberformats:[{}]}
}

ngOnInit() {

  let baseNum = this.restangular.all('general');
  baseNum.getList().subscribe(numb => {
  this.alldata = numb.filter(data=>data.numberformats);
  console.log(this.alldata)
  });
    
  }

}
