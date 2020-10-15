import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Md2Dialog } from 'md2';



@Component({
  selector: 'app-configuration-time',
  templateUrl: './configuration-time.component.html',
  styleUrls: ['./configuration-time.component.css']
})
export class ConfigurationTimeComponent implements OnInit {
  constructor(private restangular:Restangular,private formBuilder: FormBuilder){
    this.empstatus=this
  }
  form: FormGroup;
  empstatus;
  wcode;
status={configtime:[{}]};
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
  codes=[{value:"Monday"},
  {value:"Tuesday"},
  {value:"Wednesday"},
  {value:"Thrusday"},
  {value:"Friday"},
  {value:"Saturday"},
  {value:"Sunday"}
  
 ];
 codes1=[{value1:"1st - End of month"},
  {value1:"26th previous month - 25th next month"}
  
  
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
  var create= this.restangular.one('configuration');
  var msg=this.empstatus;
  create.configtime=[];
  create.configtime.push(data.configtime[0])
  create.save().toPromise().then(res=>{
    console.log(res)
    this.restangular.all('configuration').getList()
    .subscribe(data=>{this.wcode=data.filter(res=>res.configtime)})
    msg.savemsg('Added Succesfully','alert alert-info');
  })
  this.status={configtime:[{}]};
 }
 edit(est){
  this.updatebutton=true;
  this.status=est

}
cancel(){
  this.status={configtime:[{}]};  
  this.ngOnInit();
}
updatestatus(empstatus)
{
  empstatus.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.status={configtime:[{}]};
}
  ngOnInit()
  {
    let baseStatus = this.restangular.all('configuration');
    baseStatus.getList().subscribe(data =>{
      this.wcode = data.filter(res=>res.configtime);
      console.log(this.wcode)
    })
    this.form = this.formBuilder.group({
      Workcode: [null, Validators.required],
      Workcode1: [null, Validators.required]
     
    })

  }
}