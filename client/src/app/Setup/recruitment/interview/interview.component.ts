import { Component, OnInit } from '@angular/core';
import {MdChipsModule} from '@angular/material';
import {UserService } from '../../../user.service';
import { Restangular } from 'ngx-restangular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Md2Dialog } from 'md2';
import { DatePipe } from '@angular/common';
import { filter } from 'async';
// import {TimePickerComponent} from "angular2-timepicker/timepicker-component";
@Component({
  selector: 'app-interview',
  templateUrl: './interview.component.html',
  styleUrls: ['./interview.component.css'],
  providers:[DatePipe]
})
export class InterviewComponent implements OnInit {
  constructor(private userservice:UserService,private datepipe:DatePipe,private restangular: Restangular,private formBuilder: FormBuilder){
    this.exit=this
  }
  exit
  assu
  assu3
  getuser;
offemp1;
call;
citi;
i=0;
  country2
  sarray
  cityarry
  conall
  countri
  sall
  state
  assu1;
  form: FormGroup;
  formedit:FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  form4: FormGroup;
  formadd:FormGroup;
  formstatus:FormGroup;
   inter={interviews:[{}]}
   opening={openingpositions:[{}]}
   candidate={candidates:[{}]}
   employee = { official: [{}] };
updatebutton = false;
updatebutton1 = false;
datas;
messageClass
message
deleted = false;
edited=false;
offemp;

cons={countr:[{}]};
stas={stat:[{}]};
citys={cit:[{}]};

city2;
state2;
site_t;
selectedValue: string;
codevalue;
code;
codeva;
state1;
city3;
country1;
country3;
state3;
addst;
assci;
statearry:any;
candidat;
department_id;
department;
department_id1;
moe;
formControl = new FormControl('hello', Validators.required);
codes=[{value:"In Process"}];
codes1=[
  {value:"In person"},
  {value:"Phone"},
  {value:"Video conference"}
];

interviewstatus=
[
{value:"In process"},
{value:"Complete"},
{value:"On hold"}
];
roundstatus1=[
  {value:"Scheduled for next round"},
  {value:"Qualified"},
  {value:"Selected"},
  {value:"Disqualified"},
  {value:"Incompetent"},
  {value:"Ineligible"},
  {value:"Candidate no show"},
  {value:"Decicion pending"},
  {value:"On hold"}
]
candidatestatus=[];

open(dialog: Md2Dialog) {
  dialog.open();
  }

  interviewerstatus(em)
  {
    console.log(em)
    if(em=="In process")
    {
     this.candidatestatus=[{value:"Scheduled"}]
    }
   else if(em=="Complete")
    {
     this.candidatestatus=[{value:"Disqualified"},{value:"Shortlisted"}
    ]
    }
   else if(em=="On hold")
    {
     this.candidatestatus=[{value:"On hold"}]
    }
  }


  close(dialog: any) {
  dialog.close();
  }
  selectcoun(cou){

    console.log(this.country2)
      this.restangular.all('states').getList({"country1":cou}).subscribe(res=>
      {
        this.sarray=res,console.log(this.sarray)
      })
    return this.sarray;
    }
    select1(gt1){
      this.restangular.all('city').getList({"state2":gt1}).subscribe(res=>
        {
          this.cityarry=res,console.log(gt1)
        })
      return this.cityarry;
      }
  
  
  

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
requisition
candidatename
interviewermatch
interviewerid;
interid;

select(emp)
{
  this.interid=emp.id
  console.log(this.interid)
}

statusadd=false;
editshow=false;
outputArray1=[];
datas2=[];
newinterview1()
      {
        var p=this.datas1.filter(obj=>obj.interviews)
        console.log(p)
        for(let k=0;k<p.length;k++)
        {
        console.log(p[k].interviews)
        console.log((p[k].interviews).length)
        var lengthoflastarray=((p[k].interviews).length)-1
        console.log(lengthoflastarray)
        console.log(p[k].interviews[lengthoflastarray])
        for(let j=0;j<p[k].interviews.length;j++)
        {
          console.log(p[k].interviews[j].interviewerid)
          console.log(this.getuser.employee_OId)

            if(p[k].interviews[j].interviewerid==this.getuser.employee_OId || (this.getuser.utype=="admin" || this.getuser.utype=="HR" || this.getuser.utype=="Management"))
            {
              console.log("Same id present")
              console.log(p[k].interviews[j].interviewerid)
              
              this.datas2.push(p[k])
              console.log(this.datas2)

            }
            else{
              console.log("No same id present")
            }

        }
       
        }     
        var count = 0; 
        var start = false; 
        for (let j = 0; j < this.datas2.length; j++) { 
          console.log(this.outputArray1.length)
          for (let k = 0; k < this.outputArray1.length; k++) { 
              if ( this.datas2[j] == this.outputArray1[k] ) { 
                  start = true; 
              } 
          } 
          count++; 
          if (count == 1 && start == false) { 
            this.outputArray1.push(this.datas2[j]); 
          } 
          start = false; 
          count = 0; 
      }
      console.log(this.outputArray1)

      
       
      }
newinterview()
      {
        var p=this.assu1.filter(obj=>obj.interviews)
        console.log(p)
        for(let k=0;k<p.length;k++)
        {
        console.log(p[k].interviews)
        console.log((p[k].interviews).length)
        var lengthoflastarray=((p[k].interviews).length)-1
        console.log(lengthoflastarray)
        console.log(this.candidat)
        console.log(p[k].interviews[lengthoflastarray].requisition)
          console.log(this.candidat)
        // if(this.candidat[0].candidates[0].requisition==p[k].interviews[lengthoflastarray].requisition)
        // {
        // if(!p[k].interviews[lengthoflastarray].status || (p[k].interviews[lengthoflastarray].status=='Schedule for next round' && (this.getuser.utype=='admin' || this.getuser.utype=='HR' || this.getuser.utype=='Management' )) )
        // {
        //   console.log("block")
        //   // document.getElementById("ad").style.display="block";
        //   this.statusadd=true
        // }
        // else
        // {
        //   // document.getElementById("ad").style.display="none";
        //   this.statusadd=false
        // }
        // }

        }
      }
      candidat1;
      interviewround;
save1(candidate)
{
  this.updatebutton = false;
  var msg=this.exit
 console.log(this.candidat1)

  console.log(this.candidat1[0].candidates[0].requisition)
  this.requisition=this.assu1.find(obj=>(obj.candidates[0].requisition==this.candidat1[0].candidates[0].requisition && (obj.candidates[0].fname+" "+obj.candidates[0].lname)==(this.candidat1[0].candidates[0].fname+" "+this.candidat1[0].candidates[0].lname)))
  console.log(this.requisition)
  console.log(this.requisition.interviews)
  console.log(this.requisition.interviews.length)
  var intround=this.requisition.interviews.length-1


  console.log(candidate.candidates[0].interviewer)
  console.log(this.offemp)
  // console.log(this.interviewround)
  candidate.candidates[0].interviewround=parseInt(this.requisition.interviews[intround].interviewround)+1
  console.log(candidate.candidates[0].interviewround)
  candidate.candidates[0].interviewerid=this.interid
  candidate.candidates[0].requisition=this.candidat1[0].candidates[0].requisition
  this.requisition.interviews.push(candidate.candidates[0])
  this.requisition.save().toPromise().then(res=>{
    console.log(res)
    this.restangular.all('recruitment').getList()
    .subscribe(data=>{this.datas=data.filter(res=>res.interviews)})
  
    msg.savemsg('Added Succesfully','alert alert-info');
     })

}



save(candidate)
{
  this.updatebutton = false;
//  console.log(assu1);
 console.log(candidate);
  var msg=this.exit
  this.requisition=this.assu1.find(obj=>(obj.candidates[0].requisition==candidate.candidates[0].requisition && obj.candidates[0].fname+" "+obj.candidates[0].lname==candidate.candidates[0].candidatename))
  console.log(this.requisition)
  console.log(candidate.candidates[0].candidatestatus)

  if(this.requisition.interviews==undefined)
  {    
    this.requisition.interviews=[]
    this.department_id=this.assu.filter(obj=>obj.openings[0].requisitioncode==candidate.candidates[0].requisition)
    console.log(this.department_id)
    candidate.candidates[0].jobtitle=this.department_id[0].openings[0].jobtitle
    this.department_id1=this.assu1.filter(obj=>(obj.candidates[0].fname+" "+obj.candidates[0].lname)==candidate.candidates[0].candidatename)
    console.log(this.department_id1)
    candidate.candidates[0].interviewround="1"
    candidate.candidates[0].email=this.department_id1[0].candidates[0].email
    candidate.candidates[0].contact=this.department_id1[0].candidates[0].contact
    candidate.candidates[0].interviewerid=this.interid
    console.log(candidate.candidates[0].interviewerid)
    this.requisition.interviews.push(candidate.candidates[0])
    this.requisition.candidates[0].status='Scheduled'
    this.requisition.save().toPromise().then(res=>{
      console.log(res)
      this.restangular.all('recruitment').getList()
      .subscribe(data=>{this.datas=data.filter(res=>res.interviews)})
    
      msg.savemsg('Added Succesfully','alert alert-info');
       })
  }
  else
  {
    this.department_id=this.assu.filter(obj=>obj.openings[0].requisitioncode==candidate.candidates[0].requisition)
    console.log(this.department_id)
    candidate.candidates[0].jobtitle=this.department_id[0].openings[0].jobtitle
    this.department_id1=this.assu1.filter(obj=>(obj.candidates[0].fname+" "+obj.candidates[0].lname)==candidate.candidates[0].candidatename)
    console.log(this.department_id1)
    candidate.candidates[0].email=this.department_id1[0].candidates[0].email
    candidate.candidates[0].contact=this.department_id1[0].candidates[0].contact
    candidate.candidates[0].interviewerid=this.interid
    candidate.candidates[0].requisition=candidate.candidates[0].requisition
    console.log(candidate.candidates[0].interviewerid)
    this.requisition.save().toPromise().then(res=>{
      console.log(res)
      this.restangular.all('recruitment').getList()
      .subscribe(data=>{this.datas=data.filter(res=>res.interviews)})
    
      msg.savemsg('Added Succesfully','alert alert-info');
       })
  }
  this.candidate={candidates:[{}]};
}

cancel(){
  this.moe=false;
this.inter={interviews:[{}]};
this.ngOnInit();
}

abc
edit1(emp,datas,i) {
  console.log(emp)
  this.updatebutton1 = true;
  this.moe=false;
  this.inter= datas;
  console.log(this.inter)
  // for(let j=0;j<=datas.interviews.length;j++)
  // {
  console.log(datas.interviews[i].interviewfeedback)
  
  if(!datas.interviews[i].interviewname && !datas.interviews[i].interviewfeedback && !datas.interviews[i].interviewcomment && !datas.interviews[i].roundstatus)
  {
    this.moe=false;
  }
  else if(datas.interviews[i].interviewname && datas.interviews[i].interviewfeedback && datas.interviews[i].interviewcomment && datas.interviews[i].roundstatus)
  {
    this.moe=true;  
  }
// }
  this.i=i;
}

edit(emp) {
  this.updatebutton = true;
  this.inter= emp
  console.log(this.inter)
}
view(emp) {
  // this.updatebutton = true;
  this.moe=true;
  console.log(emp)
  this.inter= emp
  this.candidate=emp
}
inter1;
view1(emp,i)
{
  console.log(emp);
  // this.inter1= emp.interviews.filter();
  this.inter=emp
  console.log(this.inter)
  this.i=i;
  console.log(i)
}
update(etype)
{
  var msg=this.exit;
  etype.save().toPromise().then(function(resp) {
    msg.savemsg('Updated Succesfully','alert alert-info');
  console.log(resp)
  })
  this.inter={interviews:[{}]};
}
update1(aa)
{
  console.log(aa.interviews[0].candidatestatus)
  aa.candidates[0].candidatestatus=aa.interviews[0].interviewstatus
  aa.candidates[0].status=aa.interviews[0].candidatestatus

  aa.save().toPromise().then(function(resp) {
  console.log(resp)
  })

  this.candidate={candidates:[{}]}; 
  this.inter={interviews:[{}]}; 

}

delete(et,i){
  if(confirm('Are you want to delete???')){
  var delmsg=this.exit
  et.remove().toPromise().then(function(resp,err) {
  console.log(resp)
  })
  this.datas.splice(i,1);
  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
}
else{
  this.cancel()
}
}

saves(){

  const countryval = {
  
  countryvalue:this.selectedValue,
  codevalue:this.codevalue
  }
  console.log(this.countri);
  
  this.countri.post(countryval).toPromise().then(resep=>{
  
  this.countri.push(resep);
  
  });
  
  this.selectedValue="";
  this.codevalue="";
  }
     selectstate(){
  
    var state3=[];
    state3=this.sall.filter(data=> data.countryallid == this.country1)
    console.log(state3,'jjj'); 
  /*  this.ste=dts[i].countryvalue;
    console.log(this.ste,'llllpoo');*/
    this.statearry= state3;
     return this.statearry;
  }
  savestate(){
  
  const sa={
  country1:this.country1,
  state1:this.state1
  }
  
   this.state.post(sa).toPromise().then(resep=>{
  
    console.log(resep,'hwdf')
    //this.save();
  this.state.push(resep);
  });
  this.country1="";
  this.state1="";
  /*window.location.reload();*/
  }
  
  selectst(){
  var state4=[];
  state4=this.state.filter(data=> data.country1 == this.country3)
  console.log(state4)
  this.addst=state4;
  
  return this.addst
  }
  
  selectcity(){
  var city04=[];
  city04=this.call.filter(data => data.stateallid == this.state3)
  
  /*this.cty=gtd1[i];
  console.log(this.cty)
  */
  console.log(city04)
  console.log(this.state3)
  console.log(this.call)
  
  this.assci=city04;
  
  return this.assci;
  
  }
  saveci(){
  const citys={
  country2:this.country3,
  state2:this.state3,
  city2:this.city3,
  }
  
   this.citi.post(citys).toPromise().then(resep=>{
  this.citi.push(resep);
  });
   this.country3=" ";
   this.state3=" ";
   this.city3=" ";
  }

  checkcandidate(em,em1)
  {
    console.log(em)
    console.log(em1)
    this.candidat=this.assu1.filter(obj=>obj.candidates[0].requisition==em  && obj.candidates[0].status=='Not Scheduled'  )
    console.log(this.candidat)
    this.candidat1=this.assu1.filter(obj=>obj.candidates[0].requisition==em  && obj.candidates[0].fname+" "+obj.candidates[0].lname==em1  )
// console.log(this.candidat)
// console.log(this.candidat1[0].candidates[0].requisition)
// console.log(this.candidat1[0].candidates[0].fname)

this.department_id=this.assu.filter(obj=>obj.openings[0].requisitioncode==em)
console.log(this.department_id)
console.log(this.department_id[0].openings[0].department_id)

this.department=this.offemp.filter(obj=>obj.official[0].department==this.department_id[0].openings[0].department_id)
console.log(this.department)

this.newinterview()
// this.interviewer=this.offemp.filter(obj=>obj.official[0].department==)
  }
  intt;
  datas1

  assu11=[];
fetch()
{
  var datt = this.datas1.filter(obj=>obj);
  console.log(datt);
  var dattta = this.datas1.filter(obj=>obj.interviews);
  console.log(dattta);
  var newdata=[];
  console.log(this.getuser.employee_OId);
  for(var j=0;j<dattta.length;j++)
   {
     console.log(dattta[j].interviews[0].interviewerid);
     console.log(dattta[j].interviews);
     
    }

 console.log(newdata);
}

reqnotsame1;
datas11=[];
datas12=[];
offe
offemps
  ngOnInit()
  {

    this.getuser=JSON.parse(localStorage.getItem('user'));
    console.log(this.getuser);

    var baseOff= this.restangular.all('createemployee');
    baseOff.getList().subscribe(datas=>{
    this.offemp =datas.filter(res=>res.official);
    console.log(this.offemp)
    return this.offemp;
    });

    var baseOff= this.restangular.all('createemployee');
    baseOff.getList({"_id":this.getuser.employee_OId}).subscribe(datas=>{
    this.offemps =datas.filter(res=>res.official);
    console.log(this.offemps)
    return this.offemps;
    });

    let baseQUS = this.restangular.all('recruitment');
    baseQUS.getList().subscribe(data => {
    this.datas1 =data.filter(res=>res.interviews);
    console.log(this.datas1)
    // this.datas=this.datas1.filter(obj=>obj.interviews[0].interviewerid==this.getuser.employee_OId || (this.getuser.utype=='admin' || this.getuser.utype=='HR' || this.getuser.utype=='Management' ))
    // console.log(this.datas);

    return this.datas1;
    });

    let baseExit1 = this.restangular.all('recruitment');
  baseExit1.getList().subscribe(data => {
  this.assu =data.filter(res=>res.openings);
  
  console.log(this.assu)
  return this.assu;
  });
  let baseExit11 = this.restangular.all('recruitment');
  baseExit11.getList().subscribe(data => {
  this.assu1 =data.filter(res=>res.candidates);
  console.log(this.assu1)
  this.newinterview1();
  return this.assu1;
  });

  let baseExit2 = this.restangular.all('recruitment');
  baseExit2.getList().subscribe(data => {
  this.assu11 =data.filter(res=>res.candidates);
  console.log(this.assu11)
 
  var outputArray = []; 
  var count = 0; 
  var start = false; 
  for (let j = 0; j < this.assu11.length; j++) { 
    console.log(outputArray.length)
    for (let k = 0; k < outputArray.length; k++) { 
        if ( this.assu11[j].candidates[0].requisition == outputArray[k] ) { 
            start = true; 
        } 
    } 
    count++; 
    if (count == 1 && start == false) { 
        outputArray.push(this.assu11[j].candidates[0].requisition); 
    } 
    start = false; 
    count = 0; 
}
console.log(outputArray)

  this.assu11=outputArray;
  console.log(this.assu11)
  return this.assu11;
  });
  
 

  var baseOff1= this.restangular.all('createemployee');
  baseOff1.getList({_id:this.getuser.employee_OId}).subscribe(datas=>{
  this.offemp1 =datas.filter(res=>res.official);
  console.log(this.offemp1)
  return this.offemp1;
  });

  var basecountryal=this.restangular.all('countryall')
  basecountryal.getList().subscribe(data=>{
  this.conall=data;
  
  
  })
  
   var basecon=this.restangular.all('countries');
  basecon.getList().subscribe(data=>{
  
    this.countri=data;
    return this.countri; 
  });
   
  
  
  var sat_al=this.restangular.all('stateall');
  sat_al.getList().subscribe( data1=>{
  
  this.sall=data1;
  console.log(this.sall,'aaaaaa')
  return this.sall;
  });
  
  var basesat=this.restangular.all('states');
  basesat.getList().subscribe(data=>{
    this.state=data;
    console.log(this.state,'hjeqh')
    return this.state;
  });
  
  var basecit=this.restangular.all('cityall');
  basecit.getList().subscribe(data=>{
    this.call=data;
  
    console.log(this.call,'hjeqh')
    return this.call;
   
  });
  
  var basecity=this.restangular.all('city')
  basecity.getList().subscribe(data=>{
  
  this.citi=data;
  return this.citi;
  
  });
  

  this.form = this.formBuilder.group({
    requisition: [null, Validators.required],
    candidatename:[null,Validators.required],
    interviewstatus:[null,Validators.nullValidator],
    interviewername: [null, Validators.required],

    location: [null, Validators.required],
    country: [null, Validators.required],
    state: [null, Validators.required],
    city: [null, Validators.required],
    interviewtype: [null, Validators.required],
    interviewdate: [null, Validators.required],
    interviewtime: [null, Validators.required],
    interviewname: [null, Validators.required]
  })

  this.formedit = this.formBuilder.group({
    interviewername: [null, Validators.required],
    location: [null, Validators.required],
    country: [null, Validators.required],
    state: [null, Validators.required],
    city: [null, Validators.required],
    interviewtype: [null, Validators.required],
    interviewdate: [null, Validators.required],
    interviewtime: [null, Validators.required],
    interviewname: [null, Validators.required],
    interviewfeedback: [null, Validators.required],
    interviewcomment: [null, Validators.required],
    roundstatus: [null, Validators.required]
  })
  this.formadd = this.formBuilder.group({
    interviewername: [null, Validators.required],
    location: [null, Validators.required],
    country: [null, Validators.required],
    state: [null, Validators.required],
    city: [null, Validators.required],
    interviewtype: [null, Validators.required],
    interviewdate: [null, Validators.required],
    interviewtime: [null, Validators.required]
  })
  this.formstatus= this.formBuilder.group({
    interviewstatus: [null, Validators.required],
    candidatestatus: [null, Validators.required],
 })
  this.form2 = this.formBuilder.group({
    coun: [null, Validators.required],
    councd: [null, Validators]
  });

  this.form3 = this.formBuilder.group({
    coun1nm: [null, Validators.required],
    statnm: [null, Validators.required]
  });

this.form4=this.formBuilder.group({
    coun2nm: [null, Validators.required],
    citynm: [null, Validators.required],
    stat1nm: [null, Validators.required]
  });
  }
}