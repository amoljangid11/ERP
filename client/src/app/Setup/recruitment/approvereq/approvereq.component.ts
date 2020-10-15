import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../user.service';
import { Md2Dialog } from 'md2';
import { Router} from '@angular/router';


@Component({
  selector: 'app-approvereq',
  templateUrl: './approvereq.component.html',
  styleUrls: ['./approvereq.component.css']
})
export class ApprovereqComponent implements OnInit {

  constructor(private restangular:Restangular,  public service: UserService,private router:Router) {}
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
   updatebutton = false;
   empp1;
   app11;
   app21;
   app31;
   stat = [
    { name: 'Approved'},
    { name: 'Closed'},
    { name: 'Complete'},
    { name: 'In process'},
    { name: 'On hold'}

        ];

        stat1 = [
          { name: 'Approved'},
          { name: 'Closed'},
          { name: 'Complete'},
          { name: 'On hold'}
      
              ];

        close(dialog: any) {
          dialog.close();
        }
  viewvalue()
  {
    console.log(this.openarr)
    console.log(this.openapp1)
    console.log(this.openapp2)
    console.log(this.openapp3)

    if(this.openarr!=null)
    {
    for(let i=0;i<this.openarr.length;i++)
    {
      console.log(this.openarr[i].approver1_id)
      if(!this.openarr[i].approver2_id)
      {
        console.log("approver 2not")
        this.empp=this.openarr.filter(obj=>obj.openings[0].approver1status=='Approved')
        console.log(this.empp)
        // return this.empp
      }
      else if(!this.openarr[i].approver3_id)
      {
        console.log("app3not")
        this.empp=this.openarr.filter(obj=>obj.openings[0].approver1status=='Approved' && obj.openings[0].approver2status=='Approved')
        console.log(this.empp)
        // return this.empp
      }
      else if(this.openarr[i].approver3_id)
      {
        console.log("app3present")
        this.empp=this.openarr.filter(obj=>obj.openings[0].approver1status=='Approved' && obj.openings[0].approver2status=='Approved' && obj.openings[0].approver3status=='Approved')
        console.log(this.empp)
        // return this.empp;
      }
    }
  }

    if(this.openapp1!=null)
    {
    for(let i=0;i<this.openapp1.length;i++)
    {
      console.log(this.openapp1[i].approver1_id)
      if(!this.openapp1[i].approver2_id)
      {
        console.log("approver 2not")
        this.app1=this.openapp1.filter(obj=>obj.openings[0].approver1status=='Approved')
        console.log(this.app1)
        // return this.app1;
      }
     else if(!this.openapp1[i].approver3_id)
      {
        console.log("app3not")
        this.app1=this.openapp1.filter(obj=>obj.openings[0].approver1status=='Approved' && obj.openings[0].approver2status=='Approved')
        console.log(this.app1)
        // return this.app1;
      }
     else if(this.openapp1[i].approver3_id)
      {
        console.log("app3present")
        this.app1=this.openapp1.filter(obj=>obj.openings[0].approver1status=='Approved' && obj.openings[0].approver2status=='Approved' && obj.openings[0].approver3status=='Approved')
        console.log(this.app1)
        // return this.app1;
      }
    }
  }

  if(this.openapp2!=null)
  {
   for(let i=0;i<this.openapp2.length;i++)
    {
      console.log(this.openapp2[i].approver1_id)
      if(!this.openapp2[i].approver2_id)
      {
        console.log("approver 2not")
        this.app2=this.openapp2.filter(obj=>obj.openings[0].approver1status=='Approved')
        console.log(this.app2)
        // return this.app2;
      }
      else if(!this.openapp2[i].approver3_id)
      {
        console.log("app3not")
        this.app2=this.openapp2.filter(obj=>obj.openings[0].approver1status=='Approved' && obj.openings[0].approver2status=='Approved')
        console.log(this.app2)
        // return this.app2;
      }
      else if(this.openapp2[i].approver3_id)
      {
        console.log("app3present")
        this.app2=this.openapp2.filter(obj=>obj.openings[0].approver1status=='Approved' && obj.openings[0].approver2status=='Approved' && obj.openings[0].approver3status=='Approved')
        console.log(this.app2)
        // return this.app2;

      }
    }
  }
 
    if(this.openapp3!=null)
    {
    for(let i=0;i<this.openapp3.length;i++)
    {
      console.log(this.openapp3[i].approver1_id)
      if(!this.openapp3[i].approver2_id)
      {
        console.log("approver 2not")
        this.app3=this.openapp3.filter(obj=>obj.openings[0].approver1status=='Approved')
        console.log(this.app3)
        // return this.app3;
      }
      else if(!this.openapp3[i].approver3_id)
      {
        console.log("app3not")
        this.app3=this.openapp3.filter(obj=>obj.openings[0].approver1status=='Approved' && obj.openings[0].approver2status=='Approved')
        console.log(this.app3)
        // return this.app3;
      }
      else if(this.openapp3[i].approver3_id)
      {
        console.log("app3present")
        this.app3=this.openapp3.filter(obj=>obj.openings[0].approver1status=='Approved' && obj.openings[0].approver2status=='Approved' && obj.openings[0].approver3status=='Approved')
        console.log(this.app3)
        // return this.app3;
      }
    }
  }

      // this.empp=this.openarr.filter(obj=>obj.openings[0].approver1status=='Approved' && obj.openings[0].approver2status=='Approved' && obj.openings[0].approver3status=='Approved')
      // console.log(this.empp)
  
      // this.app1=this.openapp1.filter(obj=>obj.openings[0].approver1status=='Approved' && obj.openings[0].approver2status=='Approved' && obj.openings[0].approver3status=='Approved')
      // console.log(this.app1)
  
      // // this.app2=this.openapp2.filter(obj=>obj.openings[0].approver1status=='Approved' && obj.openings[0].approver2status=='Approved' && obj.openings[0].approver3status=='Approved')
      // // console.log(this.app2)
   
      // this.app3=this.openapp3.filter(obj=>obj.openings[0].approver1status=='Approved' && obj.openings[0].approver2status=='Approved' && obj.openings[0].approver3status=='Approved')
      // console.log(this.app3)
  }
  open(dialog: Md2Dialog) {
    dialog.open();
  }

  edit(work) {
    console.log(work)
    this.updatebutton=true;
    // document.getElementById('vieww').style.display='block'
    this.emp= work;
  }

  view(work){
    this.updatebutton=false;
    this.emp=work
  
  }
  all(text)  
{
  console.log(text)
  if(text=="Approved")
{
console.log(this.app2)
console.log(this.app1)
// document.getElementById('addemp').style.display='block';
if(this.empp!=null)
    {
    this.empp1 = this.empp.filter(obj => (obj.openings[0].approvereqstatus == "Approved") ||( !obj.openings[0].approvereqstatus) );
    // this.ngOnInit();
    }
    if(this.app1!=null)
    {
    this.app11=this.app1.filter(obj=>(!obj.openings[0].approvereqstatus) || (obj.openings[0].approvereqstatus=='Approved'))
    // this.ngOnInit();
    console.log(this.app11)
    }
    if(this.app2!=null)
    {
      console.log(this.app2)
    this.app21=this.app2.filter(obj=>(obj.openings[0].approvereqstatus=='Approved') || (!obj.openings[0].approvereqstatus) )
    console.log(this.app21)
    // this.ngOnInit();
    }
    if(this.app3!=null)
    { 
    this.app31=this.app3.filter(obj=>(obj.openings[0].approvereqstatus=='Approved') || (!obj.openings[0].approvereqstatus))
    // this.ngOnInit();
    }
  // document.getElementById("addemp").style.display="block";
    // document.getElementById("editemp").style.display="block";


  }
  if(text=="Closed")
  {
    if(this.empp!=null)
    {
    this.empp1= this.empp.filter(obj => obj.openings[0].approvereqstatus == "Closed" );
    }
    if(this.app1!=null)
    {
   this.app11=this.app1.filter(obj=>obj.openings[0].approvereqstatus=='Closed' )
    }      
    if(this.app2!=null)
    {
    this.app21=this.app2.filter(obj=>obj.openings[0].approvereqstatus=='Closed')
   }
    if(this.app3!=null)
    {
    this.app31=this.app3.filter(obj=>obj.openings[0].approvereqstatus=='Closed' )
    }

  }
  if(text=="Complete")
  {
    if(this.empp!=null)
    {
    this.empp1= this.empp.filter(obj => obj.openings[0].approvereqstatus == "Complete" );
    }
    if(this.app1!=null)
    {
   this.app11=this.app1.filter(obj=>obj.openings[0].approvereqstatus=='Complete' )
    }      
    if(this.app2!=null)
    {
    this.app21=this.app2.filter(obj=>obj.openings[0].approvereqstatus=='Complete')
   }
    if(this.app3!=null)
    {
    this.app31=this.app3.filter(obj=>obj.openings[0].approvereqstatus=='Complete' )
    }
    // this.empp = this.empp.filter(obj => obj.openings[0].approvereqstatus == "Complete");
    // this.app1=this.app1.filter(obj=>obj.openings[0].approvereqstatus=='Complete' )
    // this.app2=this.app2.filter(obj=>obj.openings[0].approvereqstatus=='Complete' )
    // this.app3=this.app3.filter(obj=>obj.openings[0].approvereqstatus=='Complete' )
    // document.getElementById('addemp').style.display='none';
    // document.getElementById('edidemp').style.display='none';
  }
  if(text=="In process")
  {
    // document.getElementById("addemp").style.display='block';
    if(this.empp!=null)
    {
    this.empp1= this.empp.filter(obj => obj.openings[0].approvereqstatus == "In process" );
    }
    if(this.app1!=null)
    {
   this.app11=this.app1.filter(obj=>obj.openings[0].approvereqstatus=='In process' )
    }      
    if(this.app2!=null)
    {
    this.app21=this.app2.filter(obj=>obj.openings[0].approvereqstatus=='In process')
   }
    if(this.app3!=null)
    {
    this.app31=this.app3.filter(obj=>obj.openings[0].approvereqstatus=='In process' )
    }
    // this.empp = this.empp.filter(obj => obj.openings[0].approvereqstatus == "In process");
    // this.app1=this.app1.filter(obj=>obj.openings[0].approvereqstatus=='In process' )
    // this.app2=this.app2.filter(obj=>obj.openings[0].approvereqstatus=='In process' )
    // this.app3=this.app3.filter(obj=>obj.openings[0].approvereqstatus=='In process' )
    // document.getElementById('addemp').style.display='block';
    // document.getElementById('editemp').style.display='block';
  }
  if(text=="On hold")
  {
    
    if(this.empp!=null)
    {
    this.empp1= this.empp.filter(obj => obj.openings[0].approvereqstatus == "On hold" );
    }
    if(this.app1!=null)
    {
   this.app11=this.app1.filter(obj=>obj.openings[0].approvereqstatus=='On hold' )
    }      
    if(this.app2!=null)
    {
    console.log(this.app2)
    this.app21=this.app2.filter(obj=>obj.openings[0].approvereqstatus=='On hold')
    console.log("kkkkkkkkkkkkkkk")
   }
    if(this.app3!=null)
    {
    this.app31=this.app3.filter(obj=>obj.openings[0].approvereqstatus=='On hold' )
    }
    // this.empp = this.empp.filter(obj => obj.openings[0].approvereqstatus == "On hold");
    // this.app1=this.app1.filter(obj=>obj.openings[0].approvereqstatus=='On hold' )
    // this.app2=this.app2.filter(obj=>obj.openings[0].approvereqstatus=='On hold' )
    // this.app3=this.app3.filter(obj=>obj.openings[0].approvereqstatus=='On hold' )
    // document.getElementById('addemp').style.display='block';
    // document.getElementById('editemp').style.display='block';
  }
}
update(cot)
{
cot.save().toPromise().then(function(resp) {
console.log(resp)
})
this.emp={openings:[{}]};
}
link()
{
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['candidates']}}])
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
  // let allbasespp3= this.restangular.all('recruitment');
  // allbasespp3.getList().subscribe(data => {
  // this.allopenapp = data.filter(res=>res.openings);
  // console.log(this.allopenapp)
  // this.viewvalue();
  // });
  }

}

