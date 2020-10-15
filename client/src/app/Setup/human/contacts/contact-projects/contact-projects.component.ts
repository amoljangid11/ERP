import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-projects',
  templateUrl: './contact-projects.component.html',
  styleUrls: ['./contact-projects.component.css']
})
export class ContactProjectsComponent implements OnInit {

formControl = new FormControl('hello', Validators.required);





  constructor() { }

  ngOnInit() {
  }

}
