import { Component, OnInit } from '@angular/core';
import {UserService } from '../../../user.service';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Restangular } from 'ngx-restangular';
import { Md2Dialog } from 'md2';


@Component({
  selector: 'app-request-type',
  templateUrl: './request-type.component.html',
  styleUrls: ['./request-type.component.css']
})
export class RequestTypeComponent implements OnInit {

  constructor(private userservice:UserService,private restangular: Restangular,private router:Router,private formBuilder: FormBuilder){ this.group=this,this.group1=this }

  group;
  group1;
 cat={categories:[{}]}
 requ={requesttype:[{}]}
 bunit
 reqq;
 datas;
 reqtype;
 deleted = false;
 edited=false;
 updatebutton = false;
 messageClass
 message
 form: FormGroup;
 form1: FormGroup;


 savemsg(msg,msgcls)
{

  this.edited=true;
  this.messageClass=msgcls;
  this.message=msg;
  setTimeout(function() {
  this.edited = false;
  console.log(this.edited);
  }.bind(this), 1500);
}

 savecategory(obj){
  var msg=this.group1
  var create=this.restangular.one('category')
  create.categories=[];
  create.categories.push(obj.categories[0])
  create.save().toPromise().then(res=>{
 console.log(res)
 this.restangular.all('category').getList()
                 .subscribe(data=>{this.datas=data.filter(res=>res.categories)})
                 console.log(this.datas)

 msg.savemsg('Added Succesfully','alert alert-info');
 })
 this.cat={categories:[{}]}; 
this.ngOnInit();
}
selectbusiness(b,requ,category)
{
  requ.requesttype[0].category_id=b._id
  console.log(requ.requesttype[0].category_id)
  requ.requesttype[0].categoryname=b.categories[0].category
  console.log(requ.requesttype[0].categoryname)
  console.log(requ)

}
save(obj){
  var msg=this.group
  var create=this.restangular.one('category')
  create.requesttype=[];
  create.category_id=obj.requesttype[0].category_id;
  create.requesttype.push(obj.requesttype[0])

  create.save().toPromise().then(res=>{
 console.log(res)
 this.restangular.all('category').getList()
                 .subscribe(data=>{this.datas=data.filter(res=>res.requesttype)})
                 console.log(this.datas)

 msg.savemsg('Added Succesfully','alert alert-info');
 })
 this.requ={requesttype:[{}]}; 
 this.ngOnInit();
}



edit(emp) {
  this.updatebutton = true;
  this.requ= emp
}

update(cot)
{
  var msg=this.group
cot.save().toPromise().then(function(resp) {
console.log(resp)
})
this.requ={requesttype:[{}]};
msg.savemsg('Updated Succesfully','alert alert-info');
}
open(dialog: Md2Dialog) {
  dialog.open();
}
close(dialog: any) {
  dialog.close();
}
view(dataall) {
  // this.updatebutton = true;
  this.requ= dataall
//   this.i=i;
}

delete(cat,i){
  if(confirm("Are you sure! you want to delete this data")){
    cat.remove().toPromise().then(function(resp,err) {
  console.log(resp)
  })
  this.reqtype.splice(i,1);
  this.deleted=true;
  this.messageClass='alert alert-danger ';
  this.message="Deleted Successfully";
  setTimeout(function() {
    this.deleted = false;
    console.log(this.deleted);
  }.bind(this), 1500);
}
else{
   this.cancel();
}
}

cancel(){
  this.requ = {requesttype:[{}]}
  this.ngOnInit();
}



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

  ngOnInit() {

    let baseCategory = this.restangular.all('category');
    baseCategory.getList().subscribe(data => {
    this.reqq = data.filter(res=>res.categories);
    console.log(this.reqq)
    return this.reqq;
  
  });
let baseRequest = this.restangular.all('category');
  baseRequest.getList().subscribe(data => {
  this.reqtype = data.filter(res=>res.requesttype);
  console.log(this.reqtype)
  return this.reqtype;

});


this.form = this.formBuilder.group({
  categori: [null, Validators.required],
  reqt: [null, Validators.required],
  descc: [null, Validators.nullValidator],
});

this.form1 = this.formBuilder.group({
  categori1: [null, Validators.required],
  descc: [null, Validators.nullValidator],
});

  }

}
