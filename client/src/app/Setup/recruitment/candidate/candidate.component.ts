import { Component, OnInit ,ElementRef} from '@angular/core';
import {MdChipsModule} from '@angular/material';
import {UserService } from '../../../user.service';
import { Restangular } from 'ngx-restangular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Md2Dialog } from 'md2';
import { DatePipe } from '@angular/common';
import { FileUploader } from 'ng2-file-upload';
import { Http, Response } from '@angular/http';
import { Router} from '@angular/router';

const URL = 'http://localhost:4200';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css'],
  providers:[DatePipe]
})
export class CandidateComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
  filesToUpload: Array<File> = [];

  constructor(private router:Router,private http: Http, private el: ElementRef,private userservice:UserService,private restangular: Restangular, public datepipe:DatePipe,private formBuilder: FormBuilder){
    this.exit=this
  }
  exit
  assu
  openings 
  today = Date.now();
  form: FormGroup;
  form2: FormGroup;
  form3: FormGroup;
  form4: FormGroup;
  candidate={candidates:[{}]};
  inter={interviews:[{}]};
  opening={openingpositions:[{}]}
  cons={countr:[{}]};
  stas={stat:[{}]};
  citys={cit:[{}]};
  dat;
  sta;

  cityunit;
  ci;
  stateunit;
  countryunit
   
updatebutton = false;
datas;
messageClass
message
deleted = false;
edited=false;

ste;
statearry:any;
cty;
cityarry;
city2;
country2;
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
state;
sarray;
countri;
sall;
s2;
citi;
conall;
call;
addst;
assci;
product

formControl = new FormControl('hello', Validators.required);
codes=[{value:"Not Scheduled"}
        
        
       ];
       codes1=[{value:"Vendor"},
       {value:"Website"},
       {value:"Referral"}
        
        
       ];

open(dialog: Md2Dialog) {
  dialog.open();
  }


  close(dialog: any) {
  dialog.close();
  }

  showadd=false;
  addshow()
  {
    this.showadd=true;
    this.show=false;
    this.show1=false;
    this.updatebutton=false;
    
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
  viewvalue()
  {
    if(!this.assu.approver2_id)
    {
      this.reqvalue= this.assu.filter(obj=>(obj.openings[0].approver1status=='Approved') &&   ((!obj.openings[0].approvereqstatus)||(obj.openings[0].approvereqstatus=='In process')||(obj.openings[0].approvereqstatus=='Approved')))
      console.log("app2not")
    }
    else if(!this.assu.approver3_id)
    {
      this.reqvalue= this.assu.filter(obj=>(obj.openings[0].approver2status=='Approved') &&   ((!obj.openings[0].approvereqstatus)||(obj.openings[0].approvereqstatus=='In process')||(obj.openings[0].approvereqstatus=='Approved')))
      console.log("app3not")
    }
    else if(this.assu.approver3_id)
    {
      this.reqvalue= this.assu.filter(obj=>(obj.openings[0].approver3status=='Approved') &&   ((!obj.openings[0].approvereqstatus)||(obj.openings[0].approvereqstatus=='In process')||(obj.openings[0].approvereqstatus=='Approved')))
      console.log("app3present")
    }
  //  this.reqvalue= this.assu.filter(obj=>(obj.openings[0].approvereqstatus=='In process')||(obj.openings[0].approvereqstatus=='Approved'))
  console.log(this.reqvalue)
  }
  department_id;
  save(ext){
    var msg=this.exit
    var create=this.restangular.one('recruitment')
    create.candidateid;
    console.log("")
    create.cand_id=this.getuser.employee_OId;
    console.log(create.cand_id)
    create.candidates=[]
    create.candidates.push(ext.candidates[0])
    // create.candidates[0].status="selected"
    this.department_id=this.assu.filter(obj=>obj.openings[0].requisitioncode==ext.candidates[0].requisition)
    console.log(this.department_id)
    create.candidates[0].addedby=this.offemp1[0].official[0].firstname +" " + this.offemp1[0].official[0].lastname
    ext.candidates[0].jobtitle=this.department_id[0].openings[0].jobtitle
    // ext.candidates[0].skillset=this.department_id[0].openings[0].reqskill
    ext.candidates[0].addmsg="Candidate:"+" "+ext.candidates[0].fname+" "+ext.candidates[0].lname+" "+ "has been added to Requisition:"+" " +ext.candidates[0].requisition+" "+"by"+" "+create.candidates[0].addedby;
    ext.candidates[0].addcanddate= this.today;
    
    create.save().toPromise().then(res=>{
    console.log(res)
    this.restangular.all('recruitment').getList()
    .subscribe(data=>{this.datas=data.filter(res=>res.candidates)})
  
    msg.savemsg('Added Succesfully','alert alert-info');
    })
    this.candidate={candidates:[{}]};
  }

cancel(){
this.updatebutton = false;
this.showadd=false;
this.show1=false;
// this.show=true;
this.candidate={candidates:[{}]};
this.router.navigate(['./setuproot',{outlets:{thirdchild:['candidates']}}])
}

closewin()
{
 this.showadd=false;
this.show1=false;
this.show=true;
}

edit(emp) {
  this.updatebutton = true;
  this.showadd=true;
  this.show=false;
  this.show1=false;
  this.candidate= emp
}
viewbutton=false;
show1=false;
show=false;
view(emp) {
  // this.updatebutton = false;
  this.viewbutton=true;
  this.show1=true;
  this.show=false;
  this.showadd=false;
  // this.show1=true;
  this.candidate= emp
  this.inter=emp
  console.log(emp)
}

update(etype)
{
  var msg=this.exit;
  etype.save().toPromise().then(function(resp) {
    msg.savemsg('Updated Succesfully','alert alert-info');
  console.log(resp)
  })
  this.candidate={candidates:[{}]};
}

delete(et,i){
  if(confirm('Are you sure! You want to delete this data?')){
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


fileChangeEvent(fileInput: any) 
{
  this.filesToUpload = <Array<File>>fileInput.target.files;
  console.log(this.filesToUpload)
  console.log(fileInput.target.files)
  this.product= fileInput.target.files[0]['name'];
  console.log(this.product)
}

link()
{
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['interviews']}}])
}

detailsshow()
{
  document.getElementById('resume').style.display='none';
  document.getElementById('canddetails').style.display='block';
}
resumeshow()
{
  document.getElementById('resume').style.display='block';
  document.getElementById('canddetails').style.display='none';
}

vend;
getuser;
offemp1
reqvalue;

  ngOnInit()
  {
    this.show=true;
    this.showadd=false;
    this.show1=false;

    let baseQUS = this.restangular.all('recruitment');
    baseQUS.getList().subscribe(data => {
    this.datas =data.filter(res=>res.candidates);
    console.log(this.datas)
    return this.datas;
    });

    let baseExit1 = this.restangular.all('recruitment');
    baseExit1.getList().subscribe(data => {
    this.assu =data.filter(res=>res.openings);
    console.log(this.assu)
    this.viewvalue();
    return this.assu;
    });

    let baseStatus = this.restangular.all('contacts');
    baseStatus.getList().subscribe(data => {
    this.vend = data.filter(res=>res.vendors);
    console.log(this.vend)
    });

    this.getuser=JSON.parse(localStorage.getItem('user'));
    console.log(this.getuser);
  
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
    // jobtitle: [null, Validators.required],
    status: [null, Validators],
    fname: [null, Validators.required],
    lname: [null, Validators.required],
    source: [null, Validators.required],
    email: [null, Validators.required],
    contact: [null, Validators.required],
    skills: [null, Validators.required],
    // resume: [null, Validators.required],
    qualification:[null, Validators.nullValidator],
    workexp: [null, Validators.nullValidator],
    educationsumm: [null, Validators.nullValidator],
    summary: [null, Validators.nullValidator],
    location: [null, Validators.nullValidator],
    country: [null, Validators.nullValidator],
    state: [null, Validators.nullValidator],
    city:[null, Validators.nullValidator],
    postalcode:[null, Validators.nullValidator],

    vendor: [null, Validators.nullValidator],
    refname: [null, Validators.nullValidator],
    website: [null, Validators.nullValidator],

    compname: [null, Validators.nullValidator],
    design: [null, Validators.nullValidator],
    from: [null, Validators.nullValidator],
    to:[null, Validators.nullValidator],
    contactnumber:[null, Validators.nullValidator],
    address:[null, Validators.nullValidator],

    resume:[null,Validators.nullValidator]
  })


  this.form2 = this.formBuilder.group({
    coun: [null, Validators.required],
    councd: [null, Validators]
  });

  this.form3 = this.formBuilder.group({
    coun1nm: [null, Validators.required],
    statnm: [null, Validators.required]
  });

  this.form4 = this.formBuilder.group({
    coun2nm: [null, Validators.required],
    citynm: [null, Validators.required],
    stat1nm: [null, Validators.required]
  });
}
}

