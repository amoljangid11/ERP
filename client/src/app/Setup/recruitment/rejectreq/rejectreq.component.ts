import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../user.service';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-rejectreq',
  templateUrl: './rejectreq.component.html',
  styleUrls: ['./rejectreq.component.css']
})
export class RejectreqComponent implements OnInit {

  constructor(private restangular:Restangular,  public service: UserService) {}
  getuser;
  openarr;
  openapp1;
  openapp2;
  openapp3;
  emp={openings:[{}]}
   empp;
   app1;
   app2;
   app3;


  viewvalue()
  {
    console.log(this.openarr)
    console.log(this.openapp1)
    console.log(this.openapp2)
    console.log(this.openapp3)

      if(this.openarr!=null)
      {
      this.empp=this.openarr.filter(obj=>obj.openings[0].approver1status=='Rejected'|| obj.openings[0].approver2status=='Rejected' || obj.openings[0].approver3status=='Rejected')
      console.log(this.empp)
      }
      if(this.openapp1!=null)
      {
      this.app1=this.openapp1.filter(obj=>obj.openings[0].approver1status=='Rejected' || obj.openings[0].approver2status=='Rejected' || obj.openings[0].approver3status=='Rejected')
      console.log(this.app1)
      }
      if(this.openapp2!=null)
      {
      this.app2=this.openapp2.filter(obj=>obj.openings[0].approver1status=='Rejected' || obj.openings[0].approver2status=='Rejected' || obj.openings[0].approver3status=='Rejected')
      console.log(this.app2)
      }
      if(this.openapp3!=null)
      {
      this.app3=this.openapp3.filter(obj=>obj.openings[0].approver1status=='Rejected' || obj.openings[0].approver2status=='Rejected' || obj.openings[0].approver3status=='Rejected')
      console.log(this.app3)
      }
  }
  open(dialog: Md2Dialog) {
    dialog.open();
  }
  view(work){
    // this.updates=true;
    this.emp=work
  
  }

  ngOnInit() {


    this.getuser=JSON.parse(localStorage.getItem('user'));
    console.log(this.getuser)
  
    let baserec = this.restangular.all('recruitment');
    baserec.getList({employee_id:this.getuser.employee_OId}).subscribe(data => {
  this.openarr = data.filter(res=>res.openings);
  console.log(this.openarr)
  this.viewvalue();
  });
  let basespp1= this.restangular.all('recruitment');
  basespp1.getList({approver1_id:this.getuser.employee_OId}).subscribe(data => {
  this.openapp1 = data.filter(res=>res.openings);
  console.log(this.openapp1)
  this.viewvalue();
  });
  let basespp2= this.restangular.all('recruitment');
  basespp2.getList({approver2_id:this.getuser.employee_OId}).subscribe(data => {
  this.openapp2 = data.filter(res=>res.openings);
  console.log(this.openapp2)
  this.viewvalue();
  // this.checkkapp();
  });
  let basespp3= this.restangular.all('recruitment');
  basespp3.getList({approver3_id:this.getuser.employee_OId}).subscribe(data => {
  this.openapp3 = data.filter(res=>res.openings);
  console.log(this.openapp3)
  this.viewvalue();
  });
  }

}
