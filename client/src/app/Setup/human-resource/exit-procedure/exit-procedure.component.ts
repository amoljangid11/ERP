import { Component, OnInit } from '@angular/core';
import { RestangularModule,Restangular } from 'ngx-restangular';
import {UserService } from '../../../user.service';
import { Md2Dialog } from 'md2';


@Component({
  selector: 'app-all-exit-procedures',
  templateUrl: './all-exit-procedures.component.html',
  styleUrls: ['./all-exit-procedures.component.css']
})
export class AllExitProceduresComponent implements OnInit {

  constructor(private restangular:Restangular, public service: UserService ) { this.procedure=this, this.object=this;
  this.interview=this}

  object;
  officialdata
  procedure
  updatebutton = false;
  exitprocedure = {allexitprocedures:[{}]};
  exit = {exitinterviewquestion:[{}]};
  initialstatus = {initiatecheckstatus:[{}]};
  allexitprocedures=[]
  interview;
  selectedAll:any;
  selected;
  reportingmanager;
  pending=[]
 countall=0;
 pendingcount=0;
 cancelcount=0;
 approvedcount=0;
 rejectedcount=0;
 datas;
 view='yes';
 alldata=[]
canceldata;
getuser;
leavemanagement;
employee;
data

status = [
  {value: 'Approved', viewValue: 'Approve'},
  {value: 'Rejected', viewValue: 'Reject'},
  {value: 'Cancelled', viewValue: 'Cancel'}
];

open(dialog: Md2Dialog) {
  dialog.open();
  }

  close(dialog: any) {
  dialog.close();
  }

reqcancel(text){
 console.log("Yes")
 console.log(this.canceldata)
 this.canceldata.initiatecheckstatus.status=text;
 this.canceldata.initiatecheckstatus.rstatus="Exit Request has been Approved by " + this.canceldata.username
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
        
 	}else{
 		this.alldata.forEach(resp=>{
        if(resp.initiatecheckstatus.status==text)
 		{
 			array.push(resp)
 		}
        })
 	}
      
    return this.allexitprocedures=array;
 }



 save(service)
  {
  	var obj=this.object
    /*console.log(service)  
    console.log(service.event.title.substring(0,service.event.title.length-3))
    console.log(service.event.title)*/
    if('Approved'==service.initiatecheckstatus.status)
      {
        service.event.title=service.event.title.substring(0,service.event.title.length-3) + "(A)"
        service.initiatecheckstatus.rstatus="Exit Request has been Approved by " + this.reportingmanager.official[0].username
        service.save().toPromise().then(function(resp) {
          console.log(resp)
          obj.service={initiatecheckstatus:{}}
        })
      }else if('Rejected'==service.initiatecheckstatus.status)
        {
           service.event.title=service.event.title.substring(0,service.event.title.length-3) + "(R)"
           service.initiatecheckstatus.rstatus="Exit Request has been Rejected by " + this.reportingmanager.official[0].username
           service.save().toPromise().then(function(resp) {
              console.log(resp)
              obj.service={initiatecheckstatus:{}}
            })
        }else if('Cancelled'==service.initiatecheckstatus.status){
               service.event.title=service.event.title.substring(0,service.event.title.length-3) + "(C)"
               service.initiatecheckstatus.rstatus="Exit Request has been Cancelled by " + this.reportingmanager.official[0].username
               service.save().toPromise().then(function(resp) {
                console.log(resp)
                obj.service={initiatecheckstatus:{}}
              })
        }
    
     
  }


 start()
 {
 	this.getuser=JSON.parse(localStorage.getItem('user'));
console.log(this.getuser)
 var id="5a704cb4ca8b97227478b4a9"
if(this.getuser.employee_OId && this.getuser.employee_OId!=''){
	 this.restangular.all('exitprocedure').getList({employee_id:this.getuser.employee_OId}).subscribe(res=>{
 	this.alldata=res;
console.log(this.alldata)
 	res.forEach(data=>{
 		this.countall++;
 		if(data.initiatecheckstatus.status=="Pending for approval")
 		{
 			this.allexitprocedures.push(data)
 			this.pendingcount++;
 		}else if(data.initiatecheckstatus.status=="Approved"){  this.approvedcount++ }
 		 else if(data.initiatecheckstatus.status=="Rejected"){ this.rejectedcount++ }
 		 	else if(data.initiatecheckstatus.status=="Cancelled"){  this.cancelcount++}
 	})


 });
}

 }



 saveque(ext){
  var msg=this.interview
  var create=this.restangular.one('exitprocedure')
  create.exitinterviewquestion=[]
  create.exitinterviewquestion.push(ext.exitinterviewquestion[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('exitprocedure').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.exitinterviewquestion)})

  msg.savemsg('Added Succesfully','alert alert-info');
  })
  this.exit={exitinterviewquestion:[{}]};
}
 
  edit(emp) {
    if(document.getElementById('statusedit'))
  {  
    // document.getElementById('statusedit').style.display='block'  
    // document.getElementById('question').style.display='none'
    this.updatebutton = true;
    this.exitprocedure = emp
    this.ngOnInit();
  }
  }


  cancel1(){
    document.getElementById('question').style.display='none';
    this.procedure={allexitprocedures:[{}]};
    this.ngOnInit();
  }
  cancel(){
    document.getElementById('statusedit').style.display='none';
    // document.getElementById('question').style.display='none';
    this.procedure={allexitprocedures:[{}]};
    this.ngOnInit();
  }
  

  selectAll() {
    for (var i = 0; i < this.datas.length; i++) {
      this.datas[i].selected = this.selectedAll;
    }
    this.datas.save();
    }
    checkIfAllSelected() {
    this.selectedAll = this.datas.every(function(item:any) {
      return item.selected == true;
    })
    }
  

  update(procedure)
  {
    procedure.save().toPromise().then(function(resp) {
    console.log(resp)
    })
    this.procedure={allexitprocedures:[{}]}
  }
  
  delete(ann,i){
    if(confirm('Are you want to delete???')){
    ann.remove();
    console.log(ann)
    this.officialdata.splice(i,1);
    }
    else{
      this.cancel();
    }
  }

  ngOnInit() {
    this.start();

    // this.dataSource.paginator = this.paginator;
   let baseOfficial= this.restangular.all('createemployee');
    baseOfficial.getList().subscribe(data => { 
    this.officialdata =data.filter(res=>res.official);
    return this.officialdata;    
    });

    let baseQUS = this.restangular.all('exitprocedure');
    baseQUS.getList().subscribe(data => {
    this.datas =data.filter(res=>res.exitinterviewquestion);
    console.log(this.datas)
    return this.datas;
    });

    this.getuser=JSON.parse(localStorage.getItem('user'));
    console.log(this.getuser)
    if(this.getuser.employee_OId && this.getuser.employee_OId!='')
     {
     this.restangular.all('createemployee').getList({_id:this.getuser.employee_OId}).subscribe(res=>{
      console.log(res)
      this.reportingmanager=res[0]
      this.restangular.all('exitprocedure').getList({reportingmanager:res[0]._id}).subscribe(res=>{
        this.leavemanagement=res
        console.log(this.leavemanagement)    
     });
     });
    }
  }
}

