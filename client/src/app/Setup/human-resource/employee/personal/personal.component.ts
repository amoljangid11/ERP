import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {EmployeeComponent } from '../employee.component';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../../user.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


import { Md2Dialog } from 'md2';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {


lanlevel = [{value:'Read'},{value:'Write'},{value:'Speak'}];

open(dialog: Md2Dialog) {
    dialog.open();
  } 
 
  close(dialog: any) {
    dialog.close();
  }
  persdata;



constructor(private router:Router,private restangular:Restangular,public service:UserService,private formBuilder: FormBuilder) {
   this.personal=this
  
   }
   form: FormGroup;
   form1: FormGroup;
   form2: FormGroup;
   form3: FormGroup;
   form4: FormGroup;
   form5: FormGroup;
   form6: FormGroup;

   idendoc;
   totallangcompl=[];
   bloodgroup=[
    {value:"AB+"},
    {value:"AB-"},
    {value:"A+"},
    {value:"A-"},
    {value:"B+"},
    {value:"B-"},
    {value:"O+"},
    {value:"O-"},
  ];
  identdoc;
  placeholder;
  personal;
  employeedata;
  employee = { personal: [{}] };
  genders={gender:[{}]};
  pass={passdetails:[{}]};
  comlang={complanguage:[{}]};
  ethnics={ ethnic:[{}]};
  maritaltype={marital:[{}]};
  nationalitytype={nationalities:[{}]};
  racetype={race:[{}]};

  // empl={personal:[{}]};
  lang;
  emp = {};

  selectedItems = [];
  settings = {};

  langcomplevel=[];
  languages={language:[{}]};
  edatas;
  mart;
  nation;
  gen;
  i=0;

  language;
  messageClass
  messagess;
  edited=false;
  rc;
   alllang=[];
  view(data) 
  {
  
    this.service.viewpersonal(data);
  }
  viewperson(data){

    this.service.editpersonal(data);
    this.router.navigate(['./setuproot',{outlets:{thirdchild:['mydetails',{outlets:{fourthchild:['personal']}}]}}])  
  }

  savemsg(msg,msgcls)
{

  this.edited=true;
  this.messageClass=msgcls;
  this.messagess=msg;
  setTimeout(function() {
  this.edited = false;
  console.log(this.edited);
  }.bind(this), 1500);
}



  comlevel=[];languagech;

  langcheck(lang)
  {
   console.log(lang);
   this.languagech=lang;
  }
  
  fetch(data)
  {
    console.log(data);
    var abc=[];
    // data.forEach(res => {
    //   if(res.complanguage)
    //   {
    //      abc.push(res.complanguage);
    //   }    
    // });
    // (obj=>obj.personal[0].complanguage);
    console.log(abc);
  }
  complevel1=[];
  // complevel(langcomp)
  // {
  //   console.log(langcomp);
  //   console.log(this.languagech);
  //   for(var i=0;i<this.lang.length;i++)
  //   {
  //     if(this.lang[i].language[0].language==this.languagech)
  //     {
  //       this.comlevel.push({complevel:langcomp,language:this.languagech});
  //     }
  //   }  
  
  //   var count=0; 
  //   var start=false;
  //   console.log(this.comlevel.length)
  
  //   for(let i=0;i<this.comlevel.length;i++)
  //   {
  //     for(let j=0;j<this.complevel1.length;j++)
  //     {
  //       if(this.comlevel[i].complevel==this.complevel1[j].complevel && this.comlevel[i].language==this.complevel1[j].language)
  //       {
  //         console.log("same")
  //         start=true;
  //       }
  //     }
  //     count++;
  //     if(count==1 && start==false)
  //     {
  //       console.log("not same")
  //       this.complevel1.push(this.comlevel[i]); 
  //       console.log(this.complevel1)
  //    } 
  //    start = false; 
  //    count = 0; 
  //   }
    
  //   console.log(this.complevel1);
  // }
  




adhar=false;pan=false;

 save(employee) {
  var msg=this.personal
 var create =this.service.editdata; 

 console.log(employee)
 console.log(this.ac)
// if(this.ac==true)
// {
// alert("Please enter valid adharcard number");
// }
// else if(this.panc==true)
// {
// alert("Please enter valid pancard number");
// }
// else if(this.dl==true)
// {
// alert("Please enter valid driving licence number");
// }
// else if(this.pasp==true)
// {
// alert("Please enter valid passport number");
// }
// else if(this.vid==true)
// {
// alert("Please enter valid voterid number");
// }

if(this.dl && this.pasp && this.vid && this.elebil)
{
  alert("Please enter driving licence number\nPlease enter passport number\nPlease enter voter id\nPlease enter electric bill number\nThis is mandatory fields");
}
else if(this.pasp && this.vid && this.elebil)
{
  alert("Please enter passport number\nPlease enter voter id\nPlease enter electric bill number\nThis is mandatory fields");
}
else if(this.dl && this.pasp && this.elebil)
{
  alert("Please enter driving licence number\nPlease enter passport number\nPlease enter electric bill number\nThis is mandatory fields");
}
else if(this.dl && this.vid && this.elebil)
{
  alert("Please enter driving licence number\n Please enter voter id\nPlease enter electric bill number\nThis is mandatory fields");
}
else if(this.dl && this.pasp && this.vid)
{
  alert("Please enter driving licence number\nPlease enter passport number\nPlease enter voter id\nThis is mandatory fields");
}
else if(this.pasp && this.elebil)
{
  alert("Please enter passport number\nPlease enter electric bill number\nThis is mandatory fields");
}
else if(this.dl && this.elebil)
{
  alert("Please enter driving licence number\nPlease enter electric bill number\nThis is mandatory fields");
}
else if( this.vid && this.elebil)
{
  alert(" Please enter voter id\nPlease enter electric bill number\nThis is mandatory fields");
}
else if(this.pasp){
  alert("Please enter passport number\nThis is mandatory field");
}
else if(this.dl){
  alert("Please enter driving licence number\nThis is mandatory field");
}
else if(this.vid)
{
  alert("Please enter voter id\nThis is mandatory field");
}
else if(this.elebil)
{
  alert("Please enter electric bill number\nThis is mandatory field");
}
else{
      if(employee.personal[0].passport!=undefined)
      {
      employee.passdetails=[];
      employee.passdetails.push({"Passport":employee.personal[0].passport,"Passportexpdate":employee.personal[0].passportexpdate})
      console.log(employee.passdetails)
      }
  if(undefined==create.personal)
   { 
    create.personal=[];
    create.personal.push(employee.personal[0])
    if(employee.passdetails!=undefined)
    {
      console.log("NOT NULL PASSDETAILS")
    create.personal[0].passdetails=employee.passdetails
    }
    create.personal[0].complanguage=this.complevel1;
    create.save().toPromise().then(function(resp) {
    console.log(resp)
    msg.savemsg('Added Succesfully','alert alert-info');
    
    })
  }else{
    console.log(this.employee.personal[0])
    this.employeedata.personal[0]=this.employee.personal[0]
    
    // this.employeedata.personal[0].passdetails[0]=employee.passdetails
    if(this.employeedata.personal[0].complanguage==undefined)
    {
      console.log("a");
      this.employeedata.personal[0].complanguage=this.complevel1;
    }
    else
    {
      console.log("b");
      console.log(this.employeedata.personal[0].complanguage)
      this.employeedata.personal[0].complanguage=this.employeedata.personal[0].complanguage
      console.log(  this.employeedata.personal[0].complanguage)
      // for(let k=0;k<this.complevel1.length;k++)
      // {
      //   console.log("ABCABAVBAV")
      //   console.log(this.complevel1.length)
      //   this.employeedata.personal[0].complanguage.push({"Languagename":this.complevel1[k].Languagename,"Complevel":this.complevel1[k].Complevel});
      // }
      // console.log(this.employeedata.personal[0].complanguage);
    }
    this.employeedata.save().toPromise().then(function(res) {
    console.log(res)
    msg.savemsg('Updated Succesfully','alert alert-info');
  })
}
   }
}

savepass(employee){
  var msg=this.personal;
   console.log(employee);
   console.log(employee.personal[0].gendername);
   console.log(employee.personal[0].passdetails);
   console.log(this.Passport)
   console.log(this.Passportexpdate)
  //  if(employee.personal[0].passdetails!=undefined)
   this.employeedata.personal[0].passdetails.push({"Passport":this.Passport,"Passportexpdate":this.Passportexpdate})
   console.log(employee.personal[0].passdetails)
   this.employeedata.save().toPromise().then(function(res) {
    console.log(res)
    // this.restangular.all('employeeconfiguration').getList()
    // .subscribe(data=>{this.lang=data.filter(res=>res.language)})
    })

  this.Passport="";
  this.Passportexpdate="";

  this.pass={passdetails:[{}]};
  // employee = { personal: [{}] };
}

savegender(obj){
  var create=this.restangular.one('general')
  create.gender=[]
  create.gender.push(obj.gender[0])
  create.save().toPromise().then((res)=>{
  this.restangular.all('general').getList()
  .subscribe(data=>{this.gen=data.filter(res=>res.gender)})
  });
  this.genders={gender:[{}]};
}

saveethnic(et){
  var create=this.restangular.one('general')
  create.ethnic=[]
  create.ethnic.push(et.ethnic[0])
  create.save().toPromise().then((resp)=>{
  this.restangular.all('general').getList()
  .subscribe(data=>{this.edatas=data.filter(res=>res.ethnic)})
  });
  this.ethnics={ ethnic:[{}]};

}


savemarital(mt){ 
  var create=this.restangular.one('general')
  create.marital=[]
  create.marital.push(mt.marital[0])
  create.save().toPromise().then((res)=>{
     this.restangular.all('general').getList()
                   .subscribe(data=>{this.mart=data.filter(res=>res.marital)})
  });
  this.maritaltype={marital:[{}]};
}


saverace(r){ 
  var create=this.restangular.one('general')
  create.race=[]
  create.race.push(r.race[0])
  create.save().toPromise().then((res)=>{
     this.restangular.all('general').getList()
                   .subscribe(data=>{this.rc=data.filter(res=>res.race)})
  });
  this.racetype={race:[{}]};
}


savenation(na){
  var create=this.restangular.one('general')
  create.nationalities=[]
  create.nationalities.push(na.nationalities[0])
  create.save().toPromise().then((res)=>{
   // this.nation.push(res)
      this.restangular.all('general').getList()
                   .subscribe(data=>{this.nation=data.filter(res=>res.nationalities)})
  });
  console.log(create)
  this.nationalitytype={nationalities:[{}]};
}
Passport;
Passportexpdate;




savenlanguage(languages){
  var create= this.restangular.one('employeeconfiguration');
  create.language=[];
  create.language.push(languages.language[0])
  create.save().toPromise().then(res=>{
   console.log(res)
  this.restangular.all('employeeconfiguration').getList()
                   .subscribe(data=>{this.lang=data.filter(res=>res.language)})
  })
  this.languages={language:[{}]};
}


// check(name)
// {
//   console.log(this.identdoc);
//   console.log(name)
// }

ac=false;
panc=false;
dl=false;
pasp=false;
vid=false;
elebil=false;

checkman(employee)
{
  console.log(this.identdoc);
  for(let i=0;i<this.identdoc.length;i++)
  {
    if(this.identdoc[i].identitydocument[0].documentname=='Adhar Card')
    {
      console.log(employee.personal[0].adharcard)
      if(employee.personal[0].adharcard==undefined)
      {
        console.log("adhar card not defined");
        this.ac=true;
      }
      else{
        this.ac=false;
      }
    }
    else if(this.identdoc[i].identitydocument[0].documentname=='Pan Card')
    {
      if(employee.personal[0].pancard==undefined)
      {
        console.log("pan card not defined");
        this.panc=true;
      }
      else{
        this.panc=false;
      }
    }
    else if(this.identdoc[i].identitydocument[0].documentname=='Voter ID')
    {
      if(employee.personal[0].voterid==undefined)
      {
        console.log("voter id not defined");
        this.vid=true;
      }
      else{
        this.vid=false;
      }
    }
    else if(this.identdoc[i].identitydocument[0].documentname=='Passport')
    {
      if(employee.personal[0].passport==undefined)
      {
        console.log("passport not defined");
        this.pasp=true;
      }
      else{
        this.pasp=false;
      }
    }
    else if(this.identdoc[i].identitydocument[0].documentname=='Driving Licence')
    { 
      if(employee.personal[0].drivinglic==undefined)
      {
        console.log("driving lic not defined");
        this.dl=true;
      }
      else
      {
        this.dl=false;
      }
    }
    else if(this.identdoc[i].identitydocument[0].documentname=='Electricity Bill')
    {
      if(employee.personal[0].electricbill==undefined)
      {
        console.log("electric bill not defined");
        this.elebil=true;
      }
      else
      {
        this.elebil=false;
      }
    }
  }
}
abc=[];
xyz(aa,bb,emp)
{
  console.log(aa);
  console.log(bb);
  console.log(emp.personal[0].complanguage);
  if(emp.personal[0].complanguage==undefined)
   {
  for(let i=0;i<bb.length;i++)
  {
    this.totallangcompl.push({"Languagename":aa,"Complevel":bb[i].itemName});
    console.log(this.totallangcompl);
  }
  var count=0; 
  var start=false;

  for(let i=0;i<this.totallangcompl.length;i++)
  {
    for(let j=0;j<this.complevel1.length;j++)
    {
      if(this.totallangcompl[i].Languagename==this.complevel1[j].Languagename && this.totallangcompl[i].Complevel==this.complevel1[j].Complevel )
      {
        console.log("same")
        start=true;
      }
    }
    count++;
    if(count==1 && start==false)
    {
      console.log("not same")
      this.complevel1.push(this.totallangcompl[i]); 
      console.log(this.complevel1)
     } 
     console.log(this.complevel1)
   start = false; 
   count = 0; 
  }

 }
 else
 {
  for(let i=0;i<bb.length;i++)
  {
    this.totallangcompl.push({"Languagename":aa,"Complevel":bb[i].itemName});
    console.log(this.totallangcompl);
  }
  var count=0; 
  var start=false;

  for(let i=0;i<this.totallangcompl.length;i++)
  {
    for(let j=0;j<emp.personal[0].complanguage.length;j++)
    {
      if(this.totallangcompl[i].Languagename==emp.personal[0].complanguage[j].Languagename && this.totallangcompl[i].Complevel==emp.personal[0].complanguage[j].Complevel )
      {
        console.log("same")
        start=true;
      }
    }
    count++;
    if(count==1 && start==false)
    {
      console.log("not same")
      emp.personal[0].complanguage.push(this.totallangcompl[i]); 
      console.log(emp.personal[0].complanguage)
      this.abc.push(this.totallangcompl[i])
     } 
    this.complevel1=this.abc;
    console.log(this.complevel1);
   start = false; 
   count = 0; 
    }
 }
  this.language="";
  this.langcomplevel=[];
}

 passview=[];
 alllangs=[];
 langview=[];
 compl;
  ngOnInit() {

    if(undefined!=this.service.editdata.personal)
    {
       console.log(this.service.editdata.personal);
       this.employeedata=this.service.editdata;
       this.employee.personal[0]=this.service.editdata.personal[0];
       console.log(this.service.editdata.personal[0].passdetails)
  
       this.fetch(this.employee);
       console.log(this.employee);
       if(this.service.editdata.personal[0].passdetails!=undefined)
       {
         for(let i=0;i<this.service.editdata.personal[0].passdetails.length;i++)
         {
         this.passview.push(this.service.editdata.personal[0].passdetails[i])
         console.log(this.passview)
         }
       }
       for(let i=0;i<this.service.editdata.personal[0].complanguage.length;i++)
       {
        this.alllangs.push({"Languagename":this.service.editdata.personal[0].complanguage[i].Languagename,"Complevel":this.service.editdata.personal[0].complanguage[i].Complevel})
        console.log(this.alllangs)
       }
       var count=0; 
        var start=false;

  for(let i=0;i<this.alllangs.length;i++)
  {
    for(let j=0;j<this.langview.length;j++)
    {
      if(this.alllangs[i].Languagename==this.langview[j].Languagename)
      {
        console.log("same")
        start=true;
      }
    }
    count++;
    if(count==1 && start==false)
    {
      console.log("not same")
      this.langview.push(this.alllangs[i]); 
      console.log(this.langview)
     } 

   start = false; 
   count = 0; 
    }
    }
  	
    var baseNation= this.restangular.all('general');
    baseNation.getList().subscribe(datas=>{  
    this.nation=datas.filter(res=>res.nationalities);
    return this.nation;
    });

    var baseGender= this.restangular.all('general');
    baseGender.getList().subscribe(item=>{  
    this.gen=item.filter(res=>res.gender);
    return this.gen;

    });
    var baseEthnic= this.restangular.all('general');
    baseEthnic.getList().subscribe(data=>{  
    this.edatas=data.filter(resp=>resp.ethnic);
    return this.edatas;
    });

    var baseMarital= this.restangular.all('general');
    baseMarital.getList().subscribe(data=>{  
    this.mart=data.filter(res=>res.marital);
    return this.mart;
    });

    var baserace= this.restangular.all('general');
    baserace.getList().subscribe(data=>{  
    this.rc=data.filter(res=>res.race);
    return this.rc;
    });

    let person = this.restangular.all('createemployee');
    person.getList().subscribe(data => {
    this.persdata = data.filter(res=>res.personal);
    console.log(this.persdata);
    console.log(this.persdata.complanguage);
    });
    
    let baseLang = this.restangular.all('employeeconfiguration');
    baseLang.getList().subscribe(data => {
    this.lang = data.filter(res=>res.language);
    console.log(this.lang)
    for(var i=0;i<this.lang.length;i++)
    {
     this.alllang.push({"id":i,"itemName":this.lang[i].language[0].language});
     console.log(this.alllang);
    }  
    });


    let baseCompLev = this.restangular.all('employeeconfiguration');
    baseCompLev.getList().subscribe(data => {
    this.compl = data.filter(res=>res.competencylevel);
    console.log(this.compl)
     
    for(let i=0;i<this.compl.length;i++)
    {
      this.comlevel.push({"id":i,"itemName":this.compl[i].competencylevel[0].competencylevel});
      console.log(this.comlevel);
    }
    });


    let basedoc = this.restangular.all('employeeconfiguration');
    basedoc.getList().subscribe(data => {
    this.idendoc = data.filter(res=>res.identitydocument);
    console.log(this.idendoc)
    this.identdoc=this.idendoc.filter(obj=>obj.identitydocument[0].mandatory=='Yes')
    console.log(this.identdoc)
 

    });

    this.form =this.formBuilder.group({
      gen:[null, Validators.required],
      ethcode:[null, Validators],
      bloodgr:[null,Validators],
      aadhar:[null,Validators.required],

      marital:[null, Validators],
      racecode:[null, Validators],
      lang:[null,Validators],
      comlel:[null,Validators],
      national:[null,Validators.required],
      dob:[null,Validators.required],
      pan:[null,Validators.required],
      voter:[null,Validators],
      elebill:[null,Validators],
      drivlic:[null,Validators],
      drivlicexp:[null,Validators],
      passexp:[null,Validators],
      passnum:[null,Validators],

      // if(ac)
      // {
      //   aadhar:[null,Validators.required]
      // }
    });


    this.form1 =this.formBuilder.group({
      gendC1:[null, Validators.required],
      gend1:[null, Validators.required],
      desc:[null, Validators]
    });

    this.form2 =this.formBuilder.group({
      ethcd1:[null, Validators.required],
      ethscd1:[null, Validators.required],
      desc2:[null, Validators]
    });

    this.form3 =this.formBuilder.group({
      marc1:[null, Validators.required],
      marst1:[null, Validators.required],
      desc3:[null,Validators]
    });

    this.form4 =this.formBuilder.group({
      lang1:[null, Validators.required],
      desc4:[null,Validators]
    });
    this.form5 =this.formBuilder.group({
      natio1:[null, Validators.required],
      desc5:[null,Validators]
    });
    this.form6 =this.formBuilder.group({
      pass:[null, Validators.required],
      passexp:[null,Validators]
    });
   
    this.settings = {
      text: "Select Competency Level",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      classes: "myclass inputField"
    };

  }

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
    // document.getElementById('competency').style.display='block';
    }
    OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems);
    // document.getElementById('competency').style.display='none';
    }
    onSelectAll(items: any) {
    console.log(items);
    // document.getElementById('competency').style.display='block';
    }
    onDeSelectAll(items: any) {
    console.log(items);
    // document.getElementById('competency').style.display='none';
    }

}
