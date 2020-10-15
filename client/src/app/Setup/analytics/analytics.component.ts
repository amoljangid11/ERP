import {ViewChild, Component,OnChanges, SimpleChanges, OnInit,AfterViewChecked } from '@angular/core';
import { Router} from '@angular/router';
declare var $:any
@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  constructor(private router:Router) { }
getuser;
mouseEnter(div : string){
  console.log("mouse enter : " + div);
}

mouseLeave(div : string){
 console.log('mouse leave :' + div);
}

  ngOnInit() {
    this.getuser=JSON.parse(localStorage.getItem('user'));
    console.log(this.getuser)

    // this.start();

     $("li").click(function(e) {
    console.log(e)
        e.preventDefault();
        $("li").removeClass("active");
        $(this).addClass("active");        
        
    });
  }

businessunit(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['analytics',{outlets:{fourthchild:['busiunit']}}]}}])
 };
 department(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['analytics',{outlets:{fourthchild:['depart']}}]}}])
 };
 grprole(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['analytics',{outlets:{fourthchild:['grprole']}}]}}])
 };
 grproleemp(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['analytics',{outlets:{fourthchild:['grproleemp']}}]}}])
 };
 usersemp(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['analytics',{outlets:{fourthchild:['useremp']}}]}}])
 }
 employee(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['analytics',{outlets:{fourthchild:['emp']}}]}}])
};
recruit(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['analytics',{outlets:{fourthchild:['recruit']}}]}}])
};
candidetails(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['analytics',{outlets:{fourthchild:['canddetails']}}]}}])
};
scheduleinter(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['analytics',{outlets:{fourthchild:['schedinterview']}}]}}])
};
empleave(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['analytics',{outlets:{fourthchild:['empleavesum']}}]}}])
}
leavemanopt(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['analytics',{outlets:{fourthchild:['leavemanopt']}}]}}])
};
holigrp(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['analytics',{outlets:{fourthchild:['holigrpholi']}}]}}])
};
backcheckagen(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['analytics',{outlets:{fourthchild:['backcheckagen']}}]}}])
};
empcandscren(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['analytics',{outlets:{fourthchild:['empcandscreen']}}]}}])
};
uselog(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['analytics',{outlets:{fourthchild:['uselog']}}]}}])
}
activelog(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['analytics',{outlets:{fourthchild:['activtlog']}}]}}])
};
servreq(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['analytics',{outlets:{fourthchild:['servreq']}}]}}])
  // document.getElementById('servreqs').style.display='block';
  // document.getElementById('analy').style.display='none';
};
empapprai(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['analytics',{outlets:{fourthchild:['empapprai']}}]}}])
};
time(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['analytics',{outlets:{fourthchild:['timemananaly']}}]}}])
};

}
