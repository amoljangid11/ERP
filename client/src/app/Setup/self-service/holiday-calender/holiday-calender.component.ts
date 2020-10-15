import { Component, OnInit } from '@angular/core';
import { UserService } from 'app/user.service';
import { Restangular } from 'ngx-restangular';
import { FormControl, Validators } from '@angular/forms';
import { Md2Dialog } from 'md2';
@Component({
  selector: 'app-holiday-calender',
  templateUrl: './holiday-calender.component.html',
  styleUrls: ['./holiday-calender.component.css']
})
export class HolidayCalenderComponent implements OnInit {

  constructor(private userservice:UserService,private restangular: Restangular) { 
    this.exit=this;
    this.userservice=userservice

  }
 
  exit;
type={holiday:[{}]}
holidays={manageholiday:[{}]};
//holidaygroups={holidaygroup:[{}]};
updatebutton = false;
datas;
messageClass
message
deleted = false;
edited=false;
holiday;


group;
screen;
//screentypes;

open(dialog: Md2Dialog) {
  dialog.open();
  }
  
  close(dialog: any) {
  dialog.close();
  }
  
view(work){
  // this.updates=true;
  this.holidays=work

}

formControl = new FormControl('hello', Validators.required);

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

save(ext){
  var msg=this.exit
  var create=this.restangular.one('holy')
  create.holiday=[]
  create.holiday.push(ext.holiday[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('holy').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.holiday)})

  msg.savemsg('Added Succesfully','alert alert-info');
  })
  this.type={holiday:[{}]};
}

cancel(){
this.type={holiday:[{}]};
}

edit(emp) {
  this.updatebutton = true;
  this.type= emp
}

update(etype)
{
 etype.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.type={holiday:[{}]};
}

deletemsg()
{
  console.log(this.deleted)
    this.deleted=true;
    this.messageClass='alert alert-danger ';
    this.message="Deleted Successfully";
    setTimeout(function() {
       this.deleted = false;
       console.log(this.deleted);
   }.bind(this), 1500);
}
query;
// delete(et,i)
// {
//   //var delmsg=this.exit
//    confirm("Do you want to cancel this holiday detail? ");
//   // console.log(et);
//   // console.log(et.holiday);
//   // var create =this.userservice.editdata;
//   // console.log(create)
//   // et.splice(et.holiday[0])
//   // console.log(et.holiday)
//   // et.remove().toPromise().then(function(resp,err) {
//   // console.log(resp)
//   // })
//   // et.holiday.splice(i,1);
//   // this.deletemsg()
//   // // delmsg.savemsg('Deleted Succesfully','alert alert-danger');
//   console.log(et.holiday[0]);
//   et.holiday[0].splice(1,1)
//   console.log("aaaaaaaaaaa");
//   // holiday.findOneAndUpdate(query, {$pull: {address: addressId}}, function(err, data){
//   //   if(err) {
//   //     return res.status(500).json({'error' : 'error in deleting address'});
//   //   }

//   //   res.json(data);

//   // });

// }


offemp;
getuser;
ngOnInit() {
  this.getuser=JSON.parse(localStorage.getItem('user'));
  console.log(this.getuser)

  let baseHoliday = this.restangular.all('management');
  baseHoliday.getList().subscribe(data => {
  this.datas = data.filter(res=>res.manageholiday);
  return this.datas;
  });

   var baseOff= this.restangular.all('createemployee');
   baseOff.getList({_id:this.getuser.employee_OId}).subscribe(datas=>{
   this.offemp =datas.filter(res=>res.holiday);
   console.log(this.offemp)
   return this.offemp;
   });
  }

}

