import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-external-users',
  templateUrl: './external-users.component.html',
  styleUrls: ['./external-users.component.css']
})
export class ExternalUsersComponent implements OnInit {

 formControl = new FormControl('hello', Validators.required);

  constructor() { }

  ngOnInit() {
  }

}
