import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-summary',
  templateUrl: './emp-summary.component.html',
  styleUrls: ['./emp-summary.component.css']
})
export class EmpSummaryComponent implements OnInit {

  constructor() { }

stat = [
    {value:'1',name: 'Approved' },
    {value:'2', name: 'Cancelled' },
    {value:'3', name: 'Pending for approval' },
    {value:'4', name: 'Rejected' },
    
  ];
  ngOnInit() {
  }

}
