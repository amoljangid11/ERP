import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router} from '@angular/router';
import {MdInputModule} from '@angular/material';
import {MdGridListModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';
import { CommonModule} from '@angular/common';
import { Http } from '@angular/http';
import {Input}from '@angular/core';
import {UserService } from '../user.service';
import {MdSidenavModule} from '@angular/material';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

 @Component({
  selector: 'app-wizard-config',
  templateUrl: './wizard-config.component.html',
  styleUrls: ['./wizard-config.component.css'],
    encapsulation: ViewEncapsulation.None,
   
})
export class WizardConfigComponent implements OnInit {




  constructor(private router:Router,private user:UserService) { }

  ngOnInit() {

    $("li").click(function(e) {
    console.log(e)
        e.preventDefault();
        console.log(e.preventDefault())
        $("li").addClass("inactive");
        $(this).removeClass("inactive");
        
        
        
    });
  }

site(){
   
  this.router.navigate(['./wizard',{outlets:{frstchild:['site']}}])
};
module(){
  this.router.navigate(['./wizard',{outlets:{frstchild:['module']}}])
};
organization(){
  this.router.navigate(['./wizard',{outlets:{frstchild:['organization']}}])
};
business(){
  this.router.navigate(['./wizard',{outlets:{frstchild:['business_unit']}}])
};
service(){
  this.router.navigate(['./wizard',{outlets:{frstchild:['service_req']}}])
};
}
