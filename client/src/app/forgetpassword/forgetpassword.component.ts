import { Component, OnInit } from '@angular/core';
import {UserService } from '../user.service';
import { Router} from '@angular/router';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  constructor(private userservice: UserService, private router: Router,private restangular:Restangular, private formBuilder: FormBuilder) { }
  newpassword;confirmpassword;
  messageClass;
  message;
  setval=false;answer1;answer2;answer3;
  questiondiv=false;
  passdiv=false;
  officiald;offdata;
  form: FormGroup;

  secquestion = [{value:'What is your Employee ID?'}];
  seqes=[{value:'What is your Designation?'}];
  seleque=[{value:'What is your Alternate Email ID?'}];
  selectque(ques)
  {
    console.log(ques);
  }

  filterquestion(que)
  {
    console.log(que);
  }

  filterquestion1(que)
  {
    console.log(que);
  }

  loginbtn()
  {
    this.router.navigate(['./login']);
  }

  submitQuestion()
  {
    console.log(this.answer1);
    console.log(this.answer2);
    console.log(this.answer3);
    var base=this.restangular.all('/checkuser')
    base.post({username:this.answer1,utype:this.answer2,alternateemail:this.answer3}).toPromise().then(res=>{
      console.log(res);
      console.log(res.value);
      if(res.value)
      {
        this.questiondiv=false;
        this.passdiv=true;
      }
      else{     
        console.log(res.succes); 
        this.answer1="";
        this.answer2="";
        this.answer3="";
        this.messageClass='alert alert-danger';
        this.message=res.msg;
        this.setval=true;
        setTimeout(() => {this.setval=false;},3000);
        }
     });
}

forgetSubmit()
 {
  console.log(this.newpassword);
  console.log(this.confirmpassword);
  if(this.newpassword!=this.confirmpassword)
   {
    alert('New Password & Confirm Password must be same.');
    this.confirmpassword="";
    this.newpassword="";
   }
  else{
    console.log("Password Match");
  
var base=this.restangular.all('/forgetpassword')
var username=this.answer1;
console.log(username);
base.post({username:this.answer1,password:this.confirmpassword}).toPromise().then(res=>{
console.log(res)
this.confirmpassword="";
this.newpassword="";
if(res.succes){
this.messageClass='alert alert-Success';
this.message=res.msg;
this.setval=true;
setTimeout(() => {this.setval=false;},3000);
}else{

this.messageClass='alert alert-danger';
this.message=res.msg;
this.setval=true;
setTimeout(() => {this.setval=false;},3000);
}
})
}
}

  ngOnInit() {

    this.questiondiv=true;

    var baseOfficial = this.restangular.all('createemployee');
    baseOfficial.getList().subscribe(data => {   
    this.officiald = data
    console.log(this.officiald);
    return this.officiald;
    });


    this.form = this.formBuilder.group({
      ans1: [null, Validators.required],
      ans2: [null, Validators.required],
      ans3: [null, Validators.required]    
    });

  }
}
