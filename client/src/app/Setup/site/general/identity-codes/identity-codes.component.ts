import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormGroupName } from '@angular/forms';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-identity-codes',
  templateUrl: './identity-codes.component.html',
  styleUrls: ['./identity-codes.component.css']
})
export class IdentityCodesComponent implements OnInit {
  constructor(private userservice:UserService,private restangular: Restangular,private formBuilder: FormBuilder) { 
    this.codes=this
  }

general={identitycodes:[{}]}
datas
codes;
add;
show;
updatebutton=false;

abc:FormGroup;

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

edit(editdata)
{
  console.log(editdata)
  this.updatebutton=true;
  this.general=editdata;
  console.log(this.general)
}
// save(data)
// {
//   console.log(data)
// var create=this.restangular.one('general')
// create.identitycodes=[]
// create.identitycodes.push(data.identitycodes[0]);
// console.log(create)
// create.save().toPromise().then(res=> {

// this.restangular.all('general').getList().subscribe(data=>{
//   this.datas=data.filter(res=>res.identitycodes);
//   if(this.datas[0])
//        {console.log("edit")
//          this.general=this.datas[0]
//          this.add=false
//        }else{
//          console.log("add")
//        }})
//  });  
// this.general={identitycodes:[{}]};

// }

delete(ab,i)
{
  if(confirm("Are you sure! you want to delete this data")){
    var delmsg=this.codes
    ab.remove().toPromise().then(function(resp,err) {
    console.log(resp)
    })
    this.datas.splice(i,1);
    delmsg.savemsg('Deleted Succesfully','alert alert-danger');
  }
  else{
    this.cancel();
  }
}

cancel()
{
  this.general={identitycodes:[{}]};
}

view(ab)
{
this.general=ab;
console.log(this.general)
}

update(code)
{
console.log(code);
code.save().toPromise().then(function(res)
{
  console.log(res);
})
this.general={identitycodes:[{}]};
}


save(empcode)
{
var msg=this.codes;
console.log(empcode);
var create=this.restangular.one('general');
create.identitycodes=[];
create.identitycodes.push(empcode.identitycodes[0]);
console.log(create)

create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('general').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.identitycodes)})
  msg.savemsg('Added Succesfully','alert alert-info');
})
this.general={identitycodes:[{}]};
}

// update(obj)
// {

// console.log(obj)

// obj.save();
// this.show = !this.show
/*var create=this.restangular.one('general')
create.identitycodes=[]
create.identitycodes.push(obj);
create.save().toPromise().then(res=> {

this.restangular.all('general').getList().subscribe(data=>{this.datas=data.filter(res=>res.identitycodes)})
 });  
this.general={identity:[{}]};*/


// }


  ngOnInit() {

    // let baselicense = this.restangular.all('general');
    // // GET /data
    // baselicense.getList().subscribe(item => {
    //    item =item.filter(res=>res.identitycodes);
    //   //  this.datas=item[0]
    //   //  console.log(this.datas)
      
    //   //  if(this.datas)
    //   //  {console.log("edit")

    //   //   this.general=item[0]
    //   //    console.log(this.general)
    //   //  }else{
    //   //    console.log("add")
    //   //    this.add=true;
    //   //  }
   
    //    });  

    let baseGender = this.restangular.all('general');
    baseGender.getList().subscribe(data => {
    this.datas = data.filter(res=>res.identitycodes);
    console.log(this.datas)
    });

    this.abc = new FormGroup({
      // tslint:disable-next-line
      ecode:new FormControl('', [Validators.required]),
      backg:new FormControl('', [Validators.nullValidator]),
      reqc:new FormControl('', [Validators.nullValidator]),
      usrs:new FormControl('', [Validators.nullValidator]),
      desc:new FormControl('', [Validators.nullValidator])
    });
  }
  }


