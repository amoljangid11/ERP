import { Component, OnInit } from '@angular/core';
import {MdInputModule} from '@angular/material';
import {MdTabsModule} from '@angular/material';
import {MdToolbarModule} from '@angular/material';
import { Router} from '@angular/router';
import {UserService } from '../user.service';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { FormBuilder, FormGroup, Validators, FormControl, PatternValidator } from '@angular/forms';
import { Md2Dialog } from 'md2';
import { ValueTransformer } from '@angular/compiler/src/util';
@Component({
  selector: 'app-business-unit',
  templateUrl: './business-unit.component.html',
  styleUrls: ['./business-unit.component.css']
})
export class BusinessUnitComponent implements OnInit {
form: FormGroup;
form1: FormGroup;
form2: FormGroup;
units:any;
streetadd:any;
department:any;
name;
scope;
dunitcoll;
streetad;
datas;
  dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};

    bunits={businessunits:[{}]};
    bunit;
    dunits={department:[{}]};
    dunits1={department:[{}]};
    dunits2={department:[{}]};
    dunits3={department:[{}]};
    dunits4={department:[{}]};
    dunits5={department:[{}]};
    dunit;

    busi=[];

    open(dialog: Md2Dialog) {
      dialog.open();
      }


selectbusiness(b,dunits,businessunit)
{
  dunits.department[0].businessunit_id=b._id
  dunits.department[0].businessunit=b.businessunits[0].name
  console.log(dunits)

}

// save(data){
  
//   var create=this.restangular.one('departments')
//   console.log(create)
//   var scp=this.scope
//   create.department=[];
//   create.businessunit_id=data.department[0].businessunit_id;
//    create.department.push(data.department[0])
//     // create.department[0].departmentname=this.dunits1;
//     create.save().toPromise().then(res=>{
//    console.log(res)
//    this.restangular.all('departments').getList()
//     .subscribe(data=>{this.dunitcoll=data.filter(res=>res.department);})
  
//     scp.alertmsg("alert alert-info","Added Successfully")
                    
//   })
//   this.dunits={department:[{}]};
//   this.ngOnInit();
// }
save(data){
	
  var create=this.restangular.one('departments')
  create.department=[];
  create.businessunit_id=data.department[0].businessunit_id;
  create.department.push(data.department[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('departments').getList()
                .subscribe(data=>{this.datas=data.filter(res=>res.department)})
                console.log(this.datas)
 })
 this.dunits={department:[{}]};
 this.ngOnInit();
}

  
    savechange(obj){
    
       var create=this.restangular.one('businessunit')
       create.businessunits=[]
       create.businessunits.push(obj.businessunits[0])
       create.save().toPromise().then(res=>{
       console.log(res)
       this.restangular.all('businessunit').getList()
                     .subscribe(data=>{this.datas=data.filter(res=>res.businessunits)})
                     console.log(this.datas)
      })
     
      this.bunits={businessunits:[{}]}; 
    this.ngOnInit();
     }
  
 constructor(private router:Router,private restangular:Restangular, private userservice: UserService,private formBuilder: FormBuilder) { this.scope=this }


 showDiv() {
	// let i=1
	document.getElementById('welcomeDiv').style.display = "block";
	console.log("hhh11111111111")
	

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
	alert("You can add only 5 departments at a time.")
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
	document.getElementById('ab5').style.display = "block";
 }



  ngOnInit() {
             
    let baseBusiness= this.restangular.all('businessunit');
    baseBusiness.getList().subscribe(data => {
    console.log(data)
    this.bunit =data.filter(res=>res.businessunits);
    return this.bunit;

    });

		let basecit1= this.restangular.all('departments');
		basecit1.getList().subscribe(data => {
      console.log(data)
		this.dunitcoll =data.filter(res=>res.department);
		return this.dunitcoll;

     });

     this.form = this.formBuilder.group({
      business: [null, Validators.required],
      department: [null, Validators.required],
      street: [null, Validators.required],
      department1: [null, Validators],
      street1: [null, Validators],
      department2: [null, Validators],
      street2: [null, Validators],
      department3: [null, Validators],
      street3: [null, Validators],
      department4: [null, Validators],
      street4: [null, Validators],
      department5: [null, Validators],
      street5: [null, Validators],
      
      
     
    });

    this.form1 = this.formBuilder.group({
      business: [null, Validators.required],
      street: [null, Validators.required],
     
    });

    // this.form2 = this.formBuilder.group({
    //   department: [null, Validators.required],
    //   street: [null, Validators.required],
     
    // });
  


   this.userservice.getbusiness().subscribe(data=>{

  		console.log(data);
      this.datas=data.business;
      console.log(this.datas);


for(var i=0;i<this.datas.length;i++){

  var hey= this.datas[i].name;

  if(hey!=null){
      this.busi.push(hey);
      }
  }

  	})
 



    this.dropdownList = [
                              {"id":1,"itemName":"India"},
                              {"id":2,"itemName":"Singapore"},
                              {"id":3,"itemName":"Australia"},
                              {"id":4,"itemName":"Canada"},
                              {"id":5,"itemName":"South Korea"},
                              {"id":6,"itemName":"Germany"},
                              {"id":7,"itemName":"France"},
                              {"id":8,"itemName":"Russia"},
                              {"id":9,"itemName":"Italy"},
                              {"id":10,"itemName":"Sweden"}
                            ];
        this.selectedItems = [
                                
                            ];
        this.dropdownSettings = { 
                                  singleSelection: false, 
                                  text:"Select Countries",
                                  selectAllText:'Select All',
                                  unSelectAllText:'UnSelect All',
                                  enableSearchFilter: true
                                };            
    }
    onItemSelect(item){
        console.log('Selected Item:');
        console.log(item);
    }
    OnItemDeSelect(item){
        console.log('De-Selected Item:');
        console.log(item);

return this.datas;



  }

 
  human(){
    this.router.navigate(['./setuproot',{outlets:{secondchild:['human-resource'], thirdchild:['employee']}}])
    this.ngOnInit();
  };
  site(){
   this.router.navigate(['./wizard',{outlets:{frstchild:['site']}}])
   this.ngOnInit();
  };
  organization(){
    this.router.navigate(['./wizard',{outlets:{frstchild:['organization']}}])
    this.ngOnInit();
  };
 
}
