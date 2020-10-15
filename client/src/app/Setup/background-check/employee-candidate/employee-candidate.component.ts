
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {MdChipsModule} from '@angular/material';
import {UserService } from '../../../user.service';
import { Restangular } from 'ngx-restangular';
import { Router} from '@angular/router';
import { Md2Dialog } from 'md2';
import { OfficialComponent } from 'app/Setup/human/employee/official1/official.component';



@Component({
  selector: 'app-employee-candidate',
  templateUrl: './employee-candidate.component.html',
  styleUrls: ['./employee-candidate.component.css']
})
export class EmployeeCandidateComponent implements OnInit {
  

  constructor(private userservice:UserService,private restangular: Restangular,private router:Router,private formBuilder: FormBuilder) {
    this.employeecandidate=this
   }

  
public urlForm: FormGroup;

employees= { official: [{}] };
// official;
employeecandidate;
bunits={agenciesunits:[{}]};
bunit;
empcans={employeecandidate:[{}]};
screen={screeningtype:[{}]};
hgroup;
bun;
job={jobtitle:[{}]};
jobt;
status={employmentstatus:[{}]};
updatebutton = false;
empcan;
employeecandidates;
data1;
_id;
service
scrn;


mergedata=Object.assign(this.bunits, this.job);


messageClass
message
deleted = false;
edited=false;

datas;
group;
name_val;
status_val;
job_val;
mail;
sat;
user


officiald;

 off = [];
official = [];
selectedDeviceObj = this.official[1];




onChangeObj(obj) {
  console.log(obj);
  this.selectedDeviceObj = obj;
  console.log(this.official)
  for (var i = 0; i <= this.official.length; i++)
      {
        console.log(this.official[i].official[0].id)
        
        if (this.official[i].official[0].firstname && this.official[i].official[0].lastname == obj) {
          console.log("once it is coming")

          // this.official.map(item=>{return {
          //   firstname : item.official[i].firstname,
          //   lastname : item.official[i].lastname,
          //   email : item.official[i].email,
          //   status : item.official[i].status

          // }}).forEach(item => this.off.push(item));
         // this.off.push.apply(this.off[i],this.official[i]);

          for(var i=0;i<this.official[i].length;i++)
          {
            this.off[i] = this.official[i];
          }
          this.off = this.official[1];
       }

      
      }
  // ... do other stuff here ...
 }



savechanges(obj){
  var create= this.restangular.one('configuration');
  create.employeecandidate=[];
  create.employeecandidate.push(obj.employeecandidate[0]);
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('configuration').getList()
  .subscribe(data=>{this.data1=data.filter(res=>res.employeecandidate)})
  })
  this.employeecandidates={employeecandidate:[{}]}
}


save(obj){
  var msg=this.employeecandidate
 var create= this.restangular.one('configuration');
 create.employeecandidate=[];
 create.screeningtypes_id=obj.employeecandidate[0].screeningtypes_id;
 create.employeecandidate.push(obj.employeecandidate[0])
 create.save().toPromise().then(res=>{
 console.log(res)
 this.restangular.all('configuration').getList()
                 .subscribe(data=>{this.datas=data.filter(res=>res.employeecandidate)})
                 console.log(this.datas)
                 this.edited=true;
                       this.messageClass='alert alert-info ';
                       this.message="Added Successfully";
 })
 this.employeecandidates={employeecandidate:[{}]}; 
}
  

cancel(){
  this.empcans={employeecandidate:[{}]};
}



// $scope.onChange = function($scope)
// {
//    for(var i=0 ; i <  $scope.official.length; i++)
//             {
//                 $scope.official[i]._id  = $scope.selbox
//             }

// }

getName(nam)
{
  var the=this
  console.log(nam)
  var baseemployee= this.restangular.all('createemployee');
  the.restangular.all('createemployee').getList({"official_id":nam._id}).subscribe(data=>{
   this.official=data;
    console.log(this.official)
    return this.official;
   });
  
   
  // this.empcans={employeecandidate:[{}]};
   
}

edit(emp) {
  this.updatebutton = true;
  this.empcans= emp
}

update(empcan)
{
 var the=this
 console.log(empcan)
 empcan.save().toPromise().then(function(resp) {
 console.log(resp)
 the.restangular.all('configuration').getList({"employeecandidate_id":resp._id}).subscribe(res=>{
   console.log(res)
   res.forEach(data=>{
     console.log(empcan.employeecandidate[0].name)
     data.department[0].employeecandidates=empcan.employeecandidate[0].name
     console.log(data)
     data.save();
   })
   

 })
})
 this.empcans={employeecandidate:[{}]};
 
}

deletemsg()
{
console.log(this.deleted)
  this.deleted=true;
  this.messageClass='alert alert-danger ';
  this.message="Deleted Successfully";
  setTimeout(function() {
     this.deleted = false;
     console.log(this.deleted);
 }.bind(this), 1500);
}


delete(bu,i){
bu.remove().toPromise().then(function(resp,err) {
  console.log(resp)
})
this.empcan.splice(i,1);
this.deletemsg()
alert("Are you sure! you want to delete this data");
}

selectbusiness(b,screens,screeningtype){
  screens.employeecandidate[0].screeningtypes_id=b._id
  screens.employmentstatus[0].screeningtypes=b.screeningtype[0].screentype
  console.log(screens)
}

selectjob(b,jobs,jobtitle){
  jobs.employeecandidate[0].jobtitles_id=b._id
  jobs.employmentstatus[0].jobtitles=b.jobtitle[0].jobtitle
  console.log(jobs)
}


empcnd = [
  { name: 'Employee' },
  { name: 'Candidate' }
];

dataset = [
  { name: 'Employee' },
  { name: 'Candidate' }
];

scrnary = [

];



filterItem(value)
{
  value=value.toLowerCase();
  if(!value)
  {console.log("else")
    const val=this.restangular.all('configuration');
    val.getList().subscribe(data => {
     
      console.log(data)
      this.officiald=data;
      return data
    });
  }
  else{
           this.officiald= this.officiald.filter(
      function (el: any) {
                return el.employeecandidate[0].firstname.toLowerCase().indexOf(value) > -1 ;
            }
      )
    console.log("searchfd")
    console.log(this.officiald)        
  }
  
 }



ngOnInit() {


    //  $("a").click(function(e) {
    //   console.log(e)
    //       e.preventDefault();
    //       $("a").removeClass("active");
    //       $(this).addClass("active");
    //   });
    // var baseOfficial = this.restangular.all('createemployee');
    // baseOfficial.getList({"_id":this.service.editdata._id}).subscribe(data => {
    // console.log(data)
    // this.officiald = data.filter(res=>res.official);
    // console.log(this.officiald)
    // return this.officiald;
    // });
    // let baseBusiness = this.restangular.all('user');
    // baseBusiness.getList().subscribe(data => {
    // this.user =data;
    // console.log(this.user)
    // return this.user;
    // });
  

    let baseBusiness1 = this.restangular.all('configuration');
    baseBusiness1.getList().subscribe(data => {
    this.empcan =data.filter(res=>res.employeecandidate);
    console.log(this.empcan)
    return this.empcan;

});
  // Fetching Email & Agency Name
    let baseHolidaygroup = this.restangular.all('configuration');
    baseHolidaygroup.getList().subscribe(data => {
    this.bunit = data.filter(res=>res.agenciesunits);
    console.log(this.bunit)
    return this.bunit;
  });

    let base = this.restangular.all('configuration');
    base.getList().subscribe(data => {
    this.screen = data.filter(res=>res.screeningtype);
    console.log(this.screen)
    return this.screen;
  });
    let base1 = this.restangular.all('configuration');
    base1.getList().subscribe(data => {
    this.scrn = data.filter(res=>res.screeningtype);
    console.log(this.screen)
    return this.scrn;
    });
 
  // Feching Job Title
    let baseJob = this.restangular.all('employeeconfiguration');
    baseJob.getList().subscribe(data => {
    this.jobt = data.filter(res=>res.jobtitle);
    console.log(this.jobt)
    return this.jobt;
    });

  //Feching Employee Data
    var baseemployee= this.restangular.all('createemployee');
    baseemployee.getList().subscribe(data=>{
    this.official=data;
    console.log(this.official)
    return this.official;
   });
    this.official = [];
  }
}