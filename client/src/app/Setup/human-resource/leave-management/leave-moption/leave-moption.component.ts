import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { FormBuilder, FormGroup, Validators, FormControl, PatternValidator } from '@angular/forms';
import { PATTERN_VALIDATOR } from '@angular/forms/src/directives/validators';
import { Md2Dialog } from 'md2';


@Component({
  selector: 'app-leave-moption',
  templateUrl: './leave-moption.component.html',
  styleUrls: ['./leave-moption.component.css']
})
export class LeaveMoptionComponent implements OnInit {

 whform = new FormControl('', [
     Validators.required]);

constructor(private restangular:Restangular,private formBuilder: FormBuilder) {
 this.leave=this
 }
 form: FormGroup;
leave;
datas;
editRowId;
bunit;
departunit;

officialdata;
dptoptions=[];
offdata=[];

leaveoptions={leavemanagementoption:[{}]};
updatebutton = false;

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

checked = [
  { name: 'Yes' },
  { name: 'No' },

];
transfer = [
  { name: 'Yes' },
  { name: 'No' },
];

months = [
  { viewValue: 'January'},
  { viewValue: 'February'},
  { viewValue: 'March'},
  { viewValue: 'April'},
  {viewValue: 'May'},
  { viewValue: 'June'},
  { viewValue: 'July'},
  {viewValue: 'August'},
  { viewValue: 'September'},
  { viewValue: 'October'},
  { viewValue: 'November'},
  { viewValue: 'December'}
];
wds1 = [
  { viewValue: 'Sunday' ,id:0},
  { viewValue: 'Monday',id:1},
  { viewValue: 'Tuesday' ,id:2},
  { viewValue: 'Wednesday',id:3},
  { viewValue: 'Thursday',id:4},
  { viewValue: 'Friday',id:5},
  { viewValue: 'Saturday',id:6}
];
wds2 = [
  { viewValue: 'Sunday' ,id:0},
  { viewValue: 'Monday',id:1},
  { viewValue: 'Tuesday' ,id:2},
  { viewValue: 'Wednesday',id:3},
  { viewValue: 'Thursday',id:4},
  { viewValue: 'Friday',id:5},
  { viewValue: 'Saturday',id:6}
];

day = [
  { viewValue: 'Yes'},
  {viewValue: 'No'}
];

holiday = [
  { viewValue: 'Yes'},
  { viewValue: 'No'}
];

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
  var msg=this.leave
  var create= this.restangular.one('management');
  create.leavemanagementoption=[];
  create.leavemanagementoption.push(obj.leavemanagementoption[0])

 var dp3 = this.wds1.find(data => data.id == obj.leavemanagementoption[0].week1Id )
 console.log(dp3.viewValue)
 var dp4 = this.wds2.find(data => data.id == obj.leavemanagementoption[0].week2Id )
 console.log(dp4.viewValue)
 create.leavemanagementoption[0].week1=dp3.viewValue

 create.leavemanagementoption[0].week2=dp4.viewValue

  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('management').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.leavemanagementoption)})
  console.log(this.datas)

  msg.savemsg('Added Succesfully','alert alert-info');
  })
  this.leaveoptions={leavemanagementoption:[{}]};

}

cancel(){
  this.leaveoptions={leavemanagementoption:[{}]}; 
  this.ngOnInit();
}

delete(lopts,i){
  if(confirm("Are you sure! you want to delete this data")){
  var delmsg=this.leave
  lopts.remove().toPromise().then(function(resp,err) {
  console.log(resp)
  })
  this.datas.splice(i,1);
  
  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
}
else{
  this.cancel();
}
}

toggle(id)
{
  this.editRowId = id;
}

edit(lev)
{
  this.updatebutton = true;
  this.leaveoptions=  lev
 }
 view(dataall) {
  // this.updatebutton = true;
  this.leaveoptions= dataall
//   this.i=i;
}

updatehgroup(leave)
{
  var msg=this.leave
  leave.save().toPromise().then(function(resp) {
  console.log(resp)
  msg.savemsg('Updated Succesfully','alert alert-info');
  })
  this.leaveoptions={leavemanagementoption:[{}]};
}

select(cou,bu){
  console.log(bu)
  var depart=[];
  depart=this.departunit.filter(data =>data.department[0].businessunit_id == bu._id);
  console.log(depart)
  this.dptoptions= depart
}


selecthr(off,bu){
  console.log(off )
  console.log(bu)
  var offic=[];
  offic=this.officialdata.filter(data =>(data.official[0].businessunits == bu._id && data.official[0].role == "HR Manager"));
  console.log(offic)
  this.offdata= offic
}

selected = Object;

  ngOnInit() {

    let baseHolidaygroup = this.restangular.all('management');
    baseHolidaygroup.getList().subscribe(data => {
    this.datas = data.filter(res=>res.leavemanagementoption);
    return this.datas;
    });

    let baseOfficial= this.restangular.all('createemployee');
    baseOfficial.getList().subscribe(data => { 
    this.officialdata =data.filter(res=>res.official);
    return this.officialdata;    
    });

    let baseDepart= this.restangular.all('departments');
    baseDepart.getList().subscribe(data => {    
    this.departunit =data.filter(res=>res.department);
    return this.departunit; 
    });

    let baseBusiness= this.restangular.all('businessunit');
    baseBusiness.getList().subscribe(data => {
    this.bunit =data.filter(res=>res.businessunits);
    return this.bunit;    
    });
    this.form = this.formBuilder.group({
      businessunit: [null, Validators],
      department: [null, Validators.required],
      weeday2: [null, Validators.required],
      skipholiday: [null, Validators.required],
      workhours: [null, Validators.required],
      hrmanager: [null, Validators],
      calenstartmonth: [null, Validators.required],
      halfdayreq: [null, Validators.required],
      weeday1: [null, Validators.required],
      allowLeaveTrans: [null, Validators.required],
      description: [null, Validators]
    });
  }

}
