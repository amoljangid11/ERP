import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-exit-setting',
  templateUrl: './exit-setting.component.html',
  styleUrls: ['./exit-setting.component.css']
})
export class ExitSettingComponent implements OnInit {

business:any;
sysadmin:any;
depart:any;
gadmin:any;
hr:any;
finance:any;
l2manage:any;
notice:any;

editRowId;
datas;

formControl = new FormControl('hello', Validators.required);


  constructor() { }

  ngOnInit() {
  	
  }

}
