import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-emp-summary',
  templateUrl: './emp-summary.component.html',
  styleUrls: ['./emp-summary.component.css']
})
export class EmpSummaryComponent implements OnInit {

constructor(private restangular:Restangular) { }

status;
employee1 = { official: [{}] };
service = { leaverequest:{} };
leave = { leaverequest:{} };
leavemanagement=[];
leave1=[];

open(dialog: Md2Dialog) {
  dialog.open();
  }
  
  close(dialog: any) {
  dialog.close();
  }

  view1(eleave){
    // this.updates=true;
    this.service=eleave;
  }
  
 stat = [
    { name: 'Approved'},
    { name: 'Cancelled'},
    { name: 'Pending for approval'},
    { name: 'Rejected'}
        ];
        selectedValue: string = this.stat[0].name;

 alldata;        
 officialdata;    
 officialdata1;   
 getuser   
 employee   
 holidaygroups   
 countall=0;  
 pendingcount=0;   
 cancelcount=0;   
 approvedcount=0;   
 rejectedcount=0;   


//  onChange(deviceValue) {
//   var i= document.getElementById('selectid')
//   var c=i.innerHTML
//   console.log(deviceValue);
// }
 action(eleave){  
  console.log("kkkkkkkk243")
  this.service=eleave;
  console.log(this.service)
 }

leave2()
{
  console.log("leave")
}

edits(addemp,e)
{
  this.employee1=addemp;
}
obj;


abc(val){
console.log(val)
}
all(text)  
{

 
  //  var array=[]
   if(text=="Approved"){
     this.obj = this.leavemanagement.filter(obj => obj.leaverequest.status == "Approved");
}
else if(text=="Cancelled") {
  this.obj = this.leavemanagement.filter(obj => obj.leaverequest.status == "Cancelled");
}
else if(text=="Pending for approval") {
  this.obj = this.leavemanagement.filter(obj => obj.leaverequest.status == "Pending for approval");
}
else if(text=="Rejected") {
  this.obj = this.leavemanagement.filter(obj => obj.leaverequest.status == "Rejected");
}
 }

 start()   
 {   
 	this.getuser=JSON.parse(localStorage.getItem('user'));  
  console.log(this.getuser)  
  var id="5a704cb4ca8b97227478b4a9"   
  if(this.getuser.employee_OId && this.getuser.employee_OId!=''){
	this.restangular.all('selfservice').getList({employee_id:this.getuser.employee_OId}).subscribe(res=>{
 	this.alldata=res;  
  console.log(this.alldata)  
 	res.forEach(data=>{  
     this.countall++;    
     if(data.leaverequest[0].status=="Pending for approval")      
 		{   
       this.leave1.push(data)   
       this.pendingcount++;
       console.log("Pending for approval")   
     }
       else if(data.leaverequest[0].status=="Approved") 
               { this.approvedcount++ 
                console.log("Approved")  
              } 
       else if(data.leaverequest[0].status=="Rejected") 
               { this.rejectedcount++
                console.log("Rejected")   
              } 
       else if(data.leaverequest.status=="Cancelled")
              { this.cancelcount++ 
                console.log("Cancelled")
              } 
   })  
 });  
}  
}  

 view(data) {
  // this.updatebutton = true;
  this.holidaygroups = data}

  ngOnInit()
  {
    this.getuser=JSON.parse(localStorage.getItem('user'));
    console.log(this.getuser)  
    let baseExit = this.restangular.all('selfservice');
    baseExit.getList().subscribe(data => {
    this.leavemanagement = data.filter(res=>res.leaverequest);
    
    return this.leavemanagement;
    
  });

    

    // if(this.getuser.employee_OId && this.getuser.employee_OId!=''){
    //   this.restangular.all('selfservice').getList({employee_id:this.getuser.employee_OId}).subscribe(res=>{
    //    this.leavemanagement=res
    //    console.log(this.leavemanagement)
    //     res.forEach(data=>{
    //       console.log(data.event);
    //       data.push(data.event)
    //     })
    //   });
     
      //console.log(this.datepipe.transform( new Date(),'yyyy-MM-dd'))
      this.restangular.all('createemployee').getList({_id:this.getuser.employee_OId}).subscribe(res=>{
         console.log(res)
     this.employee=res[0]
     if(res[0].official[0].reporting_mid=="" || res[0].official[0].reporting_mid==undefined)
     {
      //  this.msg1=true;
      //  console.log(this.msg1)
     }
     })
    }
  }
