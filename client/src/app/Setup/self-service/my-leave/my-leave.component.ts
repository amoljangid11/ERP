import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { Md2Dialog } from 'md2';
@Component({
  selector: 'app-my-leave',
  templateUrl: './my-leave.component.html',
  styleUrls: ['./my-leave.component.css']
})
export class MyLeaveComponent implements OnInit {

 constructor(private restangular:Restangular) { 
	}
 leave={leaverequest:{}}
 leavemanagement=[];
 today: number = Date.now();
 view='yes';
 employee;
 pending=[]
 countall=0;
 pendingcount=0;
 cancelcount=0;
 approvedcount=0;
 rejectedcount=0;
/* pending=[];
 cancel=[];
 Approved=[];
 rejected=[];*/
alldata=[]
canceldata;
getuser

open(dialog: Md2Dialog) {
	dialog.open();
	}
	
close(dialog: any) {
	dialog.close();
	}
  
view1(work){
	  // this.updates=true;
	  this.leave=work
	
	}


reqcancel(text){
 console.log("Yes")
 console.log(this.canceldata)
 this.canceldata.leaverequest.status=text;
 this.canceldata.leaverequest.cancelstatus="Leave Request has been Cancelled by " + this.employee.official[0].firstname+" "+this.employee.official[0].lastname
 this.canceldata.leaverequest.cancelled_on=this.today;
 this.canceldata.event.title=this.canceldata.event.title.substring(0,this.canceldata.event.title.length-3) + "(C)"

        this.canceldata.save().toPromise().then(function(resp) {
          console.log(resp)
           this.start();
         
        })
}
 all(text)
 {
 	var array=[]
 	if('All'==text)
 	{
         this.alldata.forEach(resp=>{
        
			 array.push(resp)
		})  
	}
	else
	{
 		this.alldata.forEach(resp=>{
        if(resp.leaverequest.status==text)
 		{
			 array.push(resp)
		 }

		})
 	}
	return this.leavemanagement=array;
    
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
 		if(data.leaverequest.status=="Pending for approval")
 		{
 			this.leavemanagement.push(data)
 			this.pendingcount++;
 		}else if(data.leaverequest.status=="Approved"){  this.approvedcount++ }
 		 else if(data.leaverequest.status=="Rejected"){ this.rejectedcount++ }
 		 	else if(data.leaverequest.status=="Cancelled"){  this.cancelcount++}
 	})


 });
}

 }
  ngOnInit() {
 this.start();
 this.getuser=JSON.parse(localStorage.getItem('user'));
  console.log(this.getuser)

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


 
