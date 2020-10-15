import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

orginfo(){
	console.log("info")
	this.router.navigate(['./setuproot',{outlets:{ thirdchild:['organization-info']}}])
}
businessunit(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['businessunit']}}])
};
departments(){
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['departments']}}])
};
announce()
{
	 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['announce']}}])
}
}
