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


open(dialog: Md2Dialog) {
    dialog.open();
  } 
 
  close(dialog: any) {
    dialog.close();
  }




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



  personal;
  employeedata;
  employee = { personal: [{}] };
  genders={gender:[{}]};
  ethnics={ ethnic:[{}]};
  maritaltype={marital:[{}]};
  nationalitytype={nationalities:[{}]};
  racetype={race:[{}]};
  lang;
  emp = {};

  languages={language:[{}]};
  edatas;
  mart;
  nation;
  gen;


  messageClass
  message
  edited=false;
  rc;

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
      this.message=msg;
      setTimeout(function() {
       this.edited = false;
       console.log(this.edited);
      }.bind(this), 1500);
}

 save(employee) {

 var create =this.service.editdata; 
 var msg=this.personal
 if(undefined==create.personal)
   { 
    create.personal=[];
    create.personal.push(employee.personal[0])
    create.save().toPromise().then(function(resp) {
    console.log(resp)
    msg.savemsg('Added Succesfully','alert alert-info');
    
    })
  }else{
    console.log(this.employee.personal[0])
    this.employeedata.personal[0]=this.employee.personal[0]
    this.employeedata.save().toPromise().then(function(res) {
    console.log(res)
    msg.savemsg('Added Succesfully','alert alert-info');
  })
}
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

  ngOnInit() {

    if(undefined!=this.service.editdata.personal)
    {
       console.log(this.service.editdata.personal)
       this.employeedata=this.service.editdata;
       this.employee.personal[0]=this.service.editdata.personal[0];
       console.log(this.employee)
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

    
    let baseLang = this.restangular.all('employeeconfiguration');
    baseLang.getList().subscribe(data => {
    this.lang = data.filter(res=>res.language);
    console.log(this.lang)
    });

    this.form =this.formBuilder.group({
      gen:[null, Validators],
      ethcode:[null, Validators],
      bloodgr:[null,Validators],
      aadhar:[null,Validators],

      marital:[null, Validators],
      racecode:[null, Validators],
      lang:[null,Validators],
      national:[null,Validators],
      dob:[null,Validators],
      passpor:[null,Validators.required],
      pxd:[null,Validators.required],
      drivlic:[null,Validators.required],
      drivlicexp:[null,Validators.required]
     
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
      racecd1:[null, Validators.required],
      descripes1:[null,Validators],
      races1:[null, Validators.required]
    });
   
  }

}
