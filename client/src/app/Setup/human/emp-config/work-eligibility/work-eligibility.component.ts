import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-eligibility',
  templateUrl: './work-eligibility.component.html',
  styleUrls: ['./work-eligibility.component.css']
})
export class WorkEligibilityComponent implements OnInit {

auth = [
    {value: '0', viewValue: 'Country'},
    {value: '1', viewValue: 'State'},
    {value: '2', viewValue: 'City'},

  ];

  constructor() { }

  ngOnInit() {
  }

}
