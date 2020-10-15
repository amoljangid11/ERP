import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-appraisal',
  templateUrl: './appraisal.component.html',
  styleUrls: ['./appraisal.component.css']
})
export class AppraisalComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
configuration(){
	 this.router.navigate(['./setuproot',{outlets:{thirdchild:['appraisalback']}}])
};
parameter(){
	 this.router.navigate(['./setuproot',{outlets:{thirdchild:['parameter']}}])
};
question(){
	 this.router.navigate(['./setuproot',{outlets:{thirdchild:['question']}}])
};
skill(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['skill']}}])

};
rating(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['rating']}}])

};
initializeappraisal(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['initializeappraisal']}}])

};
managerappraisal(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['managerappraisal']}}])

};
managerstatus(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['managerstatus']}}])

};
employeestatus(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['employeestatus']}}])

};
selfappraisal(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['selfappraisal']}}])

};
myteamappraisal(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['myteamappraisal']}}])

};
}

