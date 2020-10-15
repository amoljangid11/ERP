import { Component, OnInit } from '@angular/core';
import {Restangular } from 'ngx-restangular';

@Component({
  selector: 'app-site-preference',
  templateUrl: './site-preference.component.html',
  styleUrls: ['./site-preference.component.css']
})
export class SitePreferenceComponent implements OnInit {
	datas;


  constructor(private restangular: Restangular) { }




  ngOnInit() {
var pre=this.restangular.all('siteconfig')
console.log(pre);
pre.getList().subscribe(data=>{

	this.datas=data;
console.log(data)
});


  }






}
