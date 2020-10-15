import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../../user.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Md2Dialog } from 'md2';
import {EmployeeComponent } from '../employee.component';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css'],
  providers:[DatePipe]
})
export class LeaveComponent implements OnInit {

constructor(private router:Router,private restangular:Restangular,public datepipe:DatePipe,public service:UserService,private formBuilder: FormBuilder) { 
  this.service=service;
  this.leaves=this
}
form: FormGroup;

leaves;
year = new Date().getFullYear();
employee={leave:[{}]};
official={leave:[{}]};
employee1={official:[{}]};

editRowId=false;
leave;
employeedata;

messageClass
message
added=false;

leavereq;
getuser;

objrep
officiald;
no_days;
datas;
i=0;
edu=false;
datas1;
updatebutton = false;
edited=false;
moe;
offdatas;




// leavetype = [
//   {name : 'Casual Leave'},
//   {name : 'Sick Leave'},
//   {name : 'Privilege leave'},
//   {name : 'Mandatory Leave'},
//   {name : 'Maternity Leave'},
//   {name : 'Paternity Leave'},
//   {name : 'Leave Without Pay'}
// ];


// leavebalancedd(){

  
//   this.objrep = this.leavereq.find(obj=>obj.employee_id==this.service.editdata._id);
// this.no_days=this.objrep.leaverequest.no_days


// }


// toggle(id)
// {
//   console.log(id)
//   this.editRowId = id;
//  }

 savemsg(msg,msgcls)
{

  this.added=true;
  this.messageClass=msgcls;
  this.message=msg;
  setTimeout(function() {
    this.added = false;
    console.log(this.added);
  }.bind(this), 1500);
}



open(dialog: Md2Dialog) {
  dialog.open();
}

close(dialog: any) {
  dialog.close();
}
middleof3moth;
middleof6moth;
middleof9moth;
middleof12moth;
fmiddleof3moth
fmiddleof6moth;
fmiddleof9moth;
fmiddleof12moth;

lastof3month;
lastof6month;
lastof9month;
lastof12month;

lastof3months;
lastof6months;
lastof9months;
lastof12months;

view(datas,i) {
  this.employee=  datas;
  // console.log(this.employee.leave[i].leavetype)
  this.i=i;

}
updateleave(empeducation,i)
{
 console.log(empeducation.leave[i].leavelimit);
console.log(empeducation.leave[i].leavebalance)
empeducation.leave[i].leavebalance=empeducation.leave[i].leavelimit;
empeducation.leave[i].usedleaves=0;
  empeducation.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.employee={leave:[{}]};
  this.i=0;
  // this.savemsg('Updated Succesfully','alert alert-info')

}

// save(employee)
// {
//   var msg=this.leaves
//   var create =this.service.editdata; 
//   // this.objrep = this.leavereq.find(obj=>obj.employee_id==this.service.editdata._id);
//   // console.log(this.objrep)
// //  console.log(employee.objrep.leaverequest.no_days)
//   if(undefined==create.leave)
//    { 
//     // employee.leave[0].empleavetype=employee.leave[0].empleavetype
//     employee.leave[0].leavelimit=this.leave;
//     employee.leave[0].usedleaves=0;
//     console.log(this.leave[0].usedleaves)
//     employee.leave[0].test=false;
//     employee.leave[0].year=this.year;


//     employee.leave[0].leavebalance=employee.leave[0].leavelimit - employee.leave[0].usedleaves;
    
//     create.leave=[];
//     create.leave.push(employee.leave[0])


//     create.save().toPromise().then(function(resp){
//        console.log(resp) 
//     msg.savemsg('Added Succesfully','alert alert-info');
//    })

//      this.leave=""; 
//   }else{ 
//     console.log(this.service.editdata.leave)
//     // employee.leave[0].empleavetype=employee.leave[0].empleavetype

//     this.leave=Number(employee.leave[0].leavelimit) + Number(this.leave);
//     employee.leave[0].leavelimit=this.leave;
//     // employee.leave[0].usedleaves=this.no_days;




//     if(!this.objrep && (this.service.editdata.leave[0].usedleaves==0 || this.service.editdata.leave[0].usedleaves==null)){
// console.log("lllllllllllllllllllllkkkkkk")

// // if(this.objrep.employee_id!=this.service.editdata._id){
//   console.log("lllllllllllllllllllllkkkkku777777777777777777777777777k")

//       employee.leave[0].usedleaves=0;
//       employee.leave[0].leavebalance=employee.leave[0].leavelimit - 0;
// console.log("iiiiiiiiiiiiiifffffffffffffffff")
//     }
//     // else if(this.objrep.employee_id){
//     //   this.leavebalancedd();
//     //   employee.leave[0].usedleaves=this.objrep.leaverequest.no_days;

  
//     //   employee.leave[0].leavebalance=employee.leave[0].leavelimit - this.no_days;
//     // }
    
//     else{
//       this.leavebalancedd();
//      this.ngOnInit();

//       employee.leave[0].usedleaves=this.service.editdata.leave[0].usedleaves;

  
//       employee.leave[0].leavebalance=employee.leave[0].leavelimit - employee.leave[0].usedleaves;
//       console.log("elseeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
//     }



//     employee.leave[0].test=false;
//     employee.leave[0].year=this.year;
   
//     this.employeedata.leave[0]=this.employee.leave[0]
//     this.employeedata.save().toPromise().then(function(res) {
//       console.log(res)



     
      
//     msg.savemsg('Added Succesfully','alert alert-info');
//     })
//      this.leave="";
//   }
// }

ltype(r){
  for(let i=0;i<this.service.editdata.leave.length;i++){
    console.log(this.service.editdata.leave.length)
    console.log(this.service.editdata.leave[i].leavetype)
     console.log(r)
  // console.log(employee.leave[i].leavetype)
      if(this.service.editdata.leave[i].leavetype==r){
        console.log("lllllllllll")
        document.getElementById('ss').style.display='none';

  
      }
      else{
        document.getElementById('ss').style.display='block';

      }
  }
}


save(employee) {
  var create =this.service.editdata;
  let temp=this.leaves;
  console.log(employee)
  var y=new Date();
  var year=y.getFullYear();
  console.log(year);
  
  if( (0 == year % 4) && (0 != year % 100) || (0 == year % 400) )
		{
      this.middleof3moth = new Date(new Date().getFullYear(), 1, 15);
      this.fmiddleof3moth=this.datepipe.transform(this.middleof3moth,'yyyy-MM-dd');
		}
		else
		{
      this.middleof3moth = new Date(new Date().getFullYear(), 1, 14);
      this.fmiddleof3moth=this.datepipe.transform(this.middleof3moth,'yyyy-MM-dd');
		}

    var dofj=this.datepipe.transform( this.offdatas[0].official[0].dateofjoing,'yyyy-MM-dd')
    console.log(dofj);
this.middleof6moth = new Date(new Date().getFullYear(), 4, 16);
this.fmiddleof6moth=this.datepipe.transform(this.middleof6moth,'yyyy-MM-dd');
this.middleof9moth = new Date(new Date().getFullYear(), 7, 15);
this.fmiddleof9moth=this.datepipe.transform(this.middleof9moth,'yyyy-MM-dd');
this.middleof12moth = new Date(new Date().getFullYear(), 10, 15);
this.fmiddleof12moth=this.datepipe.transform(this.middleof12moth,'yyyy-MM-dd');
console.log(this.fmiddleof3moth)
console.log(this.fmiddleof6moth)

console.log(this.fmiddleof9moth)
console.log(this.fmiddleof12moth)
this.lastof3month=new Date(new Date().getFullYear(), 2, 31);
this.lastof3months=this.datepipe.transform(this.lastof3month,'yyyy-MM-dd');
this.lastof6month=new Date(new Date().getFullYear(), 5, 30);
this.lastof6months=this.datepipe.transform(this.lastof6month,'yyyy-MM-dd');
this.lastof9month=new Date(new Date().getFullYear(), 8, 30);
this.lastof9months=this.datepipe.transform(this.lastof9month,'yyyy-MM-dd');
this.lastof12month=new Date(new Date().getFullYear(), 11, 31);
this.lastof12months=this.datepipe.transform(this.lastof12month,'yyyy-MM-dd');
  if(undefined==create.leave)
  {
    create.leave=[]
    if(employee.leave[this.i].leavelimit==12 && employee.leave[this.i].leavetype=="Privilege Leave" ){
      console.log("if")
      console.log(employee.leave[this.i].leavelimit)
      employee.leave[this.i].leavelimit1=0;
      employee.leave[this.i].leavebalance=employee.leave[this.i].leavelimit;  
    }
    else if(employee.leave[this.i].leavelimit>12 && employee.leave[this.i].leavetype=="Privilege Leave" )
    {
      console.log(employee.leave[this.i].leavelimit)
      console.log("else")
      employee.leave[this.i].leavebalance=employee.leave[this.i].leavelimit;
      console.log(employee.leave[this.i].leavebalance)
      employee.leave[this.i].leavelimit=12;
      var remain=employee.leave[this.i].leavebalance-12
      console.log(remain)
      employee.leave[this.i].leavelimit1=remain
    }
    // employee.leave[0].leavebalance=employee.leave[0].leavelimit;
    employee.leave[0].test=false;
    employee.leave[0].year=this.year;
    employee.leave[0].usedleaves=0;
    employee.leave[0].fresherleavesdate;
    employee.leave[0].cancelleavesdate;

    // employee.leave[0].child=1;
    if( employee.leave[this.i].leavetype!="Privilege Leave" ){
      employee.leave[0].leavebalance=employee.leave[0].leavelimit;
      }
  
    if(employee.leave[this.i].leavetype=="Casual Leave")
    {
if(dofj<=this.fmiddleof3moth && dofj<=this.lastof3months)
{
  console.log("a")
  employee.leave[0].fresherleaves=3;
}
else if(dofj>=this.fmiddleof3moth && dofj<=this.lastof3months)
{
  console.log("b")
  employee.leave[0].fresherleaves=1;
}
else if(dofj>=this.lastof3months && dofj<=this.fmiddleof6moth && dofj<=this.lastof6months)
{
  console.log("c")
  employee.leave[0].fresherleaves=3;
}
else if(dofj>=this.lastof3months && dofj>=this.fmiddleof6moth && dofj<=this.lastof6months)
{
  console.log("d")
  employee.leave[0].fresherleaves=1;
}
else if(dofj>=this.lastof6months && dofj<=this.fmiddleof9moth && dofj<=this.lastof9months)
{
  console.log("e")
  employee.leave[0].fresherleaves=3;
}
else if(dofj>=this.lastof6months && dofj>=this.fmiddleof9moth && dofj<=this.lastof9months)
{
  console.log("f")
  employee.leave[0].fresherleaves=1;
}
else if(dofj>=this.lastof9months && dofj<=this.fmiddleof12moth && dofj<=this.lastof12months)
{
  console.log("g")
  employee.leave[0].fresherleaves=3;
}
else if(dofj>=this.lastof9months && dofj>=this.fmiddleof12moth && dofj<=this.lastof12months)
{
  console.log("h")
  employee.leave[0].fresherleaves=1;
}
    }

    create.leave.push(employee.leave[0])
    
    create.save().toPromise().then(function(resp) {
    console.log(resp)
    // this.savemsg('Added Succesfully','alert alert-info');
    })
    this.employee={leave:[{}]};
    this.i=0;

    



  }
  else{

  
    if(employee.leave[this.i].leavelimit==12 && employee.leave[this.i].leavetype=="Privilege Leave" ){
      console.log("if")
      console.log(employee.leave[this.i].leavelimit)
      employee.leave[this.i].leavelimit1=0;
      employee.leave[this.i].leavebalance=employee.leave[this.i].leavelimit;  
    }
    else  if(employee.leave[this.i].leavelimit>12 && employee.leave[this.i].leavetype=="Privilege Leave" )
    {
      console.log(employee.leave[this.i].leavelimit)
      console.log("else")
      employee.leave[this.i].leavebalance=employee.leave[this.i].leavelimit;
      console.log(employee.leave[this.i].leavebalance)
      employee.leave[this.i].leavelimit=12;
      var remain=employee.leave[this.i].leavebalance-12
      console.log(remain)
      employee.leave[this.i].leavelimit1=remain
    }
    // employee.leave[0].leavebalance=employee.leave[0].leavelimit;
    employee.leave[0].test=false;
    employee.leave[0].year=this.year;
    employee.leave[0].usedleaves=0;
    employee.leave[0].fresherleavesdate;
    employee.leave[0].cancelleavesdate;
    // employee.leave[0].child=1;

    if( employee.leave[this.i].leavetype!="Privilege Leave" ){
      console.log("not privilege")
    employee.leave[0].leavebalance=employee.leave[0].leavelimit;
    }
    if(employee.leave[this.i].leavetype=="Casual Leave")
    {
        
    if(dofj<=this.fmiddleof3moth && dofj<=this.lastof3months)
    {
      console.log("a")
      employee.leave[0].fresherleaves=3;
    }
    else if(dofj>=this.fmiddleof3moth && dofj<=this.lastof3months)
    {
      console.log("b")
      employee.leave[0].fresherleaves=1;
    }
    else if(dofj>=this.lastof3months && dofj<=this.fmiddleof6moth && dofj<=this.lastof6months)
    {
      console.log("c")
      employee.leave[0].fresherleaves=3;
    }
    else if(dofj>=this.lastof3months && dofj>=this.fmiddleof6moth && dofj<=this.lastof6months)
    {
      console.log("d")
      employee.leave[0].fresherleaves=1;
    }
    else if(dofj>=this.lastof6months && dofj<=this.fmiddleof9moth && dofj<=this.lastof9months)
    {
      console.log("e")
      employee.leave[0].fresherleaves=3;
    }
    else if(dofj>=this.lastof6months && dofj>=this.fmiddleof9moth && dofj<=this.lastof9months)
    {
      console.log("f")
      employee.leave[0].fresherleaves=1;
    }
    else if(dofj>=this.lastof9months && dofj<=this.fmiddleof12moth && dofj<=this.lastof12months)
    {
      console.log("g")
      employee.leave[0].fresherleaves=3;
    }
    else if(dofj>=this.lastof9months && dofj>=this.fmiddleof12moth && dofj<=this.lastof12months)
    {
      console.log("h")
      employee.leave[0].fresherleaves=1;
    }
   }
    create.leave.push(employee.leave[0])
    }
    create.save().toPromise().then(function(resp)
     {
    console.log(resp)
    //  this.savemsg('Added Succesfully','alert alert-info');
    })
    
    this.employee={leave:[{}]};
    this.i=0;  
}

edit(emp,datas,i) {
  this.moe=true
  this.updatebutton = true;
  this.employee=  datas;
  console.log(datas)
  this.i=i;
}

back() {
  this.router.navigate(['./setuproot', { outlets: { thirdchild: ['employee'] } }])
}
cancel(){

  this.moe=false;
  this.i=0;

  this.employee={leave:[{}]};
  this.ngOnInit();
}

ngOnInit() {
  if(undefined!=this.service.editdata.leave)
  {
    this.official=this.service.editdata;
    this.edu=true;
  }
  this.getuser=JSON.parse(localStorage.getItem('user'));
  console.log(this.getuser)

  // if(undefined!=this.service.editdata.leave)
  // {
  //   this.employeedata=this.service.editdata;
  //   this.employee.leave[0]=this.service.editdata.leave[0];

  // }
 


  this.form = this.formBuilder.group({
    addleave: [null, Validators.required],
    year: [null, Validators],
    levetype:[null, Validators.required]
      
  });


 
  // let baseExitType = this.restangular.all('selfservice');
  // baseExitType.getList().subscribe(data => {
  // this.leavereq =data.filter(res=>res.leaverequest);
  // // this.leavebalancedd();

  // console.log(this.leavereq)
  // return this.leavereq;
  // });

  let baseLeave = this.restangular.all('employeeconfiguration');
  baseLeave.getList().subscribe(data => {
  this.datas = data.filter(res=>res.leavetype);
  console.log(this.datas)
  });

  let baseoff = this.restangular.all('createemployee');
  baseoff.getList({"_id":this.service.editdata._id}).subscribe(data => {
  this.offdatas = data.filter(res=>res.official);
  console.log(this.offdatas)
  });


  // var baseOfficial = this.restangular.all('createemployee');
  // baseOfficial.getList({"_id":this.service.editdata._id}).subscribe(data => {

 
  //   this.officiald = data
  //   console.log(this.officiald)

  //   return this.officiald;
  // });


  }

}
