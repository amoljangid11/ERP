import { Component, OnInit } from '@angular/core';
import {DragDropModule} from 'primeng/primeng';
import {MdInputModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';
import { Router} from '@angular/router';
import {MdToolbarModule} from '@angular/material';
import {UserService } from '../user.service';
import { Restangular } from 'ngx-restangular';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
@Component({
  selector: 'app-service-req',
  templateUrl: './service-req.component.html',
  styleUrls: ['./service-req.component.css']
})
export class ServiceReqComponent implements OnInit {
datas;
category:any;
description:any;
requesttype:any;
categoryvalue;
descriptionval;
cats
cat={categories:[{}]};
site1={site:[{}]};
sii;
sii1;
fakeArray = new Array(12);
// catgry=[];


	constructor(private router:Router, private userservice:UserService,private restangular: Restangular, private formBuilder: FormBuilder ) { }
	
	form: FormGroup;
	form1: FormGroup;
	save(obj){
	
		var create=this.restangular.one('siteconfig')
		create.site=[]
	 //  create.sitecat_id=obj.sitecat[0].sitecat_id;
		create.site.push(obj.site[0])
		create.save().toPromise().then(res=>{
		console.log(res)
		this.restangular.all('siteconfig').getList()
									.subscribe(data=>{this.datas=data.filter(res=>res.site)})
									console.log(this.datas)
	 })
	
	 this.site1={site:[{}]}; 
 
	}

	savechange(obj){
	
		 var create=this.restangular.one('category')
		 create.categories=[]
		//  create.sitecat_id=obj.sitecat[0].sitecat_id;
		 create.categories.push(obj.categories[0])
		 create.save().toPromise().then(res=>{
		 console.log(res)
		 this.restangular.all('category').getList()
									 .subscribe(data=>{this.datas=data.filter(res=>res.categories)})
									 console.log(this.datas)
		})
	 
		this.cat={categories:[{}]}; 
	
	 }



// 	 aaqqq()
// {
// 	// let n=1;
// 	for(let i=1;i<=5;i++)
// 	document.getElementById('a');
// 	console.log("nnnn")
// }

 showDiv() {
	// let i=1
	document.getElementById('welcomeDiv').style.display = "block";
	// document.getElementById('welcomeDiv1').style.display = "block";
	// document.getElementById('welcomeDiv').style.display = "block";
	// 	document.getElementById('welcomeDiv').style.display = "block";
	// console.log("hhh11111111111")
	

 }
 showDiv1() {
	document.getElementById('welcomeDiv1').style.display = "block";

 }
 
 showDiv2() {
	document.getElementById('welcomeDiv2').style.display = "block";

 }
 showDiv3() {
	document.getElementById('welcomeDiv3').style.display = "block";

 }
 showDiv4() {
	document.getElementById('welcomeDiv4').style.display = "block";
 }
 showDiv5() {
	alert("You can add only 5 service request at a time")
 }
	

hide() {
	document.getElementById("ab1").style.display = "none";
	
}
hide1() {
	document.getElementById("ab2").style.display = "none";

}
hide2() {
	document.getElementById("ab3").style.display = "none";
}
hide3() {
	document.getElementById("ab4").style.display = "none";
}
hide4() {
	document.getElementById("ab5").style.display = "none";
}

a(){
	document.getElementById('ab1').style.display = "block";
 }
 b(){
	document.getElementById('ab2').style.display = "block";
	// this.a1();
 }
 c(){
	document.getElementById('ab3').style.display = "block";
 }
 d(){
	document.getElementById('ab4').style.display = "block";
 }
 e(){
	document.getElementById('ab4').style.display = "block";
 }
 
//  a1()
//  {
// 	document.getElementById('ab1').style.display = "none";
//  }
 

  ngOnInit() {
	
	let basecategries = this.restangular.all('category');
    basecategries.getList().subscribe(data => {
    this.cats = data.filter(res=>res.categories);
    console.log(this.cats)
    return this.cats;
  
  });
		 
		let basecit1= this.restangular.all('siteconfig');
		basecit1.getList().subscribe(data => {
		this.sii1 =data.filter(res=>res.site);
		return this.sii1;

		 });

		 //form submit validation
        this.form = this.formBuilder.group({
		category: [null, Validators.required],
		reqtype: [null, Validators.required],
				desc: [null, Validators],
				onee: [null, Validators.nullValidator],
				two: [null, Validators],
				three: [null, Validators.nullValidator],
				four: [null, Validators],
				five: [null, Validators.nullValidator],
				six: [null, Validators],
				seven: [null, Validators.nullValidator],
				eight: [null, Validators]
		 });
		 
		 //form1 submit validation
		 this.form1 = this.formBuilder.group({
		category1: [null, Validators.required],
		desc1: [null, Validators],
		 });

	}
	human(){
    this.router.navigate(['./setuproot',{outlets:{secondchild:['human-resource'], thirdchild:['employee']}}])
    this.ngOnInit();
  };

  prev(){
		this.router.navigate(['./wizard',{outlets:{frstchild:['organization']}}])
		this.ngOnInit();
	 };
 
}