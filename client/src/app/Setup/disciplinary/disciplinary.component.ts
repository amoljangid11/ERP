import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-disciplinary',
  templateUrl: './disciplinary.component.html',
  styleUrls: ['./disciplinary.component.css']
})
export class DisciplinaryComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  raiseincident()
  {
    this.router.navigate(['./setuproot',{outlets:{thirdchild:['raiseincident']}}])
  }
  myincident()
  {
    this.router.navigate(['./setuproot',{outlets:{thirdchild:['myincident']}}])
  }
  teamincident()
  {
    this.router.navigate(['./setuproot',{outlets:{thirdchild:['teamincident']}}])
  }
  allincident()
  {
    this.router.navigate(['./setuproot',{outlets:{thirdchild:['allincident']}}])
  }

}
