import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-recruitment',
  templateUrl: './recruitment.component.html',
  styleUrls: ['./recruitment.component.css']
})
export class RecruitmentComponent implements OnInit {

  constructor(private router:Router) { }
  getuser;
  ngOnInit() {
    this.getuser=JSON.parse(localStorage.getItem('user'));
    console.log(this.getuser)
  }
  opening(){
    this.router.navigate(['./setuproot',{outlets:{thirdchild:['openingposition']}}])
  }
  approved(){
    this.router.navigate(['./setuproot',{outlets:{thirdchild:['approved']}}])
  }
  rejected()
  {
    this.router.navigate(['./setuproot',{outlets:{thirdchild:['rejected']}}])
  }
  candidates()
  {
    this.router.navigate(['./setuproot',{outlets:{thirdchild:['candidates']}}])
  }
  interviews()
  {
    this.router.navigate(['./setuproot',{outlets:{thirdchild:['interviews']}}])
  }
  shortlisted()
  {
    this.router.navigate(['./setuproot',{outlets:{thirdchild:['shortlisted']}}])
  }

}
