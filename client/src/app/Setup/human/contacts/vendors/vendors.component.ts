import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MdChipsModule} from '@angular/material';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {MdInputModule} from '@angular/material';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {

formControl = new FormControl('hello', Validators.required);

  constructor() { }

  ngOnInit() {
  }

}
