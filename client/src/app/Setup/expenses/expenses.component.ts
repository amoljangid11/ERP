import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.css']
})
export class ExpensesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  category(){
    this.router.navigate(['./setuproot',{outlets:{thirdchild:['category']}}])
  }
  paymode()
  {
    this.router.navigate(['./setuproot',{outlets:{thirdchild:['paymode']}}])
  }
  receipts()
  {
    this.router.navigate(['./setuproot',{outlets:{thirdchild:['receipts']}}])
  }
  trips()
  {
    this.router.navigate(['./setuproot',{outlets:{thirdchild:['trips']}}])
  }
  myadvances()
  {
    this.router.navigate(['./setuproot',{outlets:{thirdchild:['myadvances']}}])

  }
  employeeadvances()
  {
    this.router.navigate(['./setuproot',{outlets:{thirdchild:['employeeadvances']}}])
  }
  myempexpense()
  {
    this.router.navigate(['./setuproot',{outlets:{thirdchild:['myempexpenses']}}])
  }
 
}


