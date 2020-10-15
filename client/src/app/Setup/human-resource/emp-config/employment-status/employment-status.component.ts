import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Md2Dialog } from 'md2';


@Component({
  selector: 'app-employment-status',
  templateUrl: './employment-status.component.html',
  styleUrls: ['./employment-status.component.css']
})
export class EmploymentStatusComponent implements OnInit {

  constructor(private restangular:Restangular,private formBuilder: FormBuilder) { 
   this.empstatus=this
  }
  form: FormGroup;
  
empstatus;
wcode;
status={employmentstatus:[{}]};
show=false;
updatebutton=false;

messageClass
message
edited=false;

open(dialog: Md2Dialog) {
  dialog.open();
  }


  close(dialog: any) {
  dialog.close();
  }

 codes=[
        {value:"Suspended"},
        {value:"Resigned"},
        {value:"Probationary"},
        {value:"Permanent"},
        {value:"Relieved"},
        {value:"Deputation"},
        {value:"Part Time"},
        {value:"Full Time"},
        {value:"Contract"},
        {value:"Retired"},
        {value:"Terminated"},
        {value:"Absconded"},
        {value:"Transferred"}
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

save(data)
{
  var create= this.restangular.one('employeeconfiguration');
  var msg=this.empstatus;
  create.employmentstatus=[];
  create.employmentstatus.push(data.employmentstatus[0])
  create.save().toPromise().then(res=>{
  console.log(res)
    this.restangular.all('employeeconfiguration').getList()
    .subscribe(data=>{this.wcode=data.filter(res=>res.employmentstatus)})

    msg.savemsg('Added Succesfully','alert alert-info');

    })
  this.status={employmentstatus:[{}]};

}

delete(est,i){
  if(confirm('Are you want to delete???')){
   var delmsg=this.empstatus;
  est.remove().toPromise().then(function(resp,err) {
  console.log(resp)
  
  })
  this.wcode.splice(i,1);
  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
}
else{
  this.cancel();
}
}


cancel(){
  this.status={employmentstatus:[{}]};  
  this.ngOnInit();
}

edit(est){
  this.updatebutton=true;
  this.status=est

}

view(est){
  // this.updatebutton=true;
  this.status=est

}

updatestatus(empstatus)
{
  empstatus.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.status={employmentstatus:[{}]};
}



  ngOnInit() {

  	let baseStatus = this.restangular.all('employeeconfiguration');
    baseStatus.getList().subscribe(data => {
    this.wcode = data.filter(res=>res.employmentstatus);
    console.log(this.wcode)
    });

    this.form = this.formBuilder.group({
      Workcode: [null, Validators.required],
      Workshortcode: [null, Validators.required],
      description: [null, Validators]
    });
  }

}
