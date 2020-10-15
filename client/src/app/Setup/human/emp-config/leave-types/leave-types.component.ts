import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leave-types',
  templateUrl: './leave-types.component.html',
  styleUrls: ['./leave-types.component.css']
})
export class LeaveTypesComponent implements OnInit {

 deductible = [
    {value: '0', viewValue: 'Yes'},
    {value: '1', viewValue: 'No'}
    
  ];

  constructor() { }

  ngOnInit() {
  }

}
