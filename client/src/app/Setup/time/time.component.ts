import {ViewChild, Component,OnChanges, SimpleChanges, OnInit,AfterViewChecked } from '@angular/core';
import { Router} from '@angular/router';
declare var $:any
@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.css']
})

export class TimeComponent implements OnInit {

  constructor(private router:Router) { }
  
  getuser;
  mflag=false;
  eflag=false;
  aflag=false

  start(){
    if(this.getuser.utype=="admin" || this.getuser.utype=="Executive Director")
    {
      this.aflag=true;
      console.log(this.aflag)
    }
    else if(this.getuser.utype=="Manager" || this.getuser.utype=="HR" || this.getuser.utype=="Hr" || this.getuser.utype=="Senior Test Manager" || this.getuser.utype=="Senior Project Manager" || this.getuser.utype=="Associate Vice President")
    {
        this.mflag=true;
        console.log(this.mflag)
    }
    else
    //  if(this.getuser.utype=="Employee")
    {
      this.eflag=true;
      console.log(this.eflag)
    }
  }

  ngOnInit() {
    this.getuser=JSON.parse(localStorage.getItem('user'));
    console.log(this.getuser)

    this.start();

     $("li").click(function(e) {
    console.log(e)
        e.preventDefault();
        $("li").removeClass("active");
        $(this).addClass("active");        
        
    });

    


  }

  dash(){
  this.router.navigate(['./setuproot',{outlets:{secondchild:['dashboard']}}])
};

timesheet()
{
	  this.router.navigate(['./time',{outlets:{timechild:['timesheet']}}])
}

emptime()
{
	  this.router.navigate(['./time',{outlets:{timechild:['emp_timesheet']}}])
}

emptime1()
{
	  this.router.navigate(['./time',{outlets:{timechild:['employeetimesheet']}}])
}

clients()
{
	  this.router.navigate(['./time',{outlets:{timechild:['client_time']}}])

}
deftask()
{
	  this.router.navigate(['./time',{outlets:{timechild:['default-task']}}])

}
proj()
{
	  this.router.navigate(['./time',{outlets:{timechild:['projects']}}])

}
config()
{
	  this.router.navigate(['./time',{outlets:{timechild:['configuration_time']}}])

}

}



/*
<!-- <router-outlet name="timechild"></router-outlet> -->
<!-- <li class="nav-item nav-link" (click)="timesheet()" >TimeSheet</li>
      <li class="nav-item nav-link" (click)="emptime()" >Employee TimeSheet</li>
      <li class="nav-item nav-link" (click)="clients()" >Clients</li>
      <li class="nav-item nav-link" (click)="deftask()" >Default Tasks</li>
      <li class="nav-item nav-link" (click)="proj()" >Projects</li>
      <li class="nav-item nav-link" (click)="config()" >Configuration</li> -->
*/