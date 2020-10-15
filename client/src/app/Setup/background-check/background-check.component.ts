import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-background-check',
  templateUrl: './background-check.component.html',
  styleUrls: ['./background-check.component.css']
})
export class BackgroundCheckComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
configuration(){
	 this.router.navigate(['./setuproot',{outlets:{thirdchild:['configuration_bg']}}])
};
screening_type(){
	 this.router.navigate(['./setuproot',{outlets:{thirdchild:['screening_type']}}])
};
agencies(){
	 this.router.navigate(['./setuproot',{outlets:{thirdchild:['agencies']}}])
};
screening(){
	 this.router.navigate(['./setuproot',{outlets:{thirdchild:['screening']}}])
};
employee_candidate(){
	 this.router.navigate(['./setuproot',{outlets:{thirdchild:['employee-candidate']}}])
}
}
