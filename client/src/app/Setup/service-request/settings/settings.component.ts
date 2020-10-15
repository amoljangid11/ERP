import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {MdChipsModule} from '@angular/material';
import {UserService } from '../../../user.service';
import { Restangular } from 'ngx-restangular';
import { Router} from '@angular/router';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private userservice:UserService,private restangular: Restangular,private router:Router,private formBuilder: FormBuilder) { this.group=this;}


  sett = {settings : [{}]};
setting
bunits={ businessunits:[{}] }
bunita;
dunits={department:[{}]};
group
datas;
updatebutton = false;
reqq;
offf;
seti;
deleted = false;
messageClass
message
edited=false;
departunit;
form: FormGroup;

  request = [
    {name : 'Service'},
    {name : 'Asset'}
  ];

  attach = [
    {value : 'Yes'},
    {value : 'No'}
  ];


  reportman;
  repomanager;
  dd=[];


  select1(b,sett,selected1)
{
  sett.settings[0].selected1_id=b._id
  console.log(sett.settings[0].selected1_id)
}
select2(b,sett,selected2)
{
  sett.settings[0].selected2_id=b._id
  console.log(sett.settings[0].selected2_id)
}
select3(b,sett,selected3)
{
  sett.settings[0].selected3_id=b._id
  console.log(sett.settings[0].selected3_id)
}

  selectdept(report,dpt) {
    console.log(dpt)
    console.log(report)
    // report.settings[0].department=dpt._id
    var rmanage = [];
    rmanage = this.offf.filter(datas => 
                           (datas.official[0].department==dpt._id && datas.official[0].role=='Executive Director' ))
    console.log(rmanage)
    this.repomanager = rmanage;
  }

  selectreport(off,bu)
  {
    console.log(off )
    console.log(bu) 
    var offic=[];
  
     offic=this.offf.filter(data =>data.official[0].businessunits == bu._id && data.official[0].role=='Executive Director');
     var dp3 = [];
    dp3 = this.departunit.filter(data => data.department[0].businessunit_id == bu._id  )
    this.dd = dp3;
    this.repomanager= offic
  }
  
  naearr=[];
  seletreport(sett,r)
  {  
    console.log(r)
    this.naearr.push(r._id);
    sett.settings[0].executors_id=this.naearr
    console.log(sett.settings[0].executors_id)
    console.log(this.naearr)
  }


  open(dialog: Md2Dialog) {
    dialog.open();
  }
  close(dialog: any) {
    dialog.close();
  }
  view(dataall) {
    // this.updatebutton = true;
    this.sett= dataall
  //   this.i=i;
  }
  




  edit(emp) {
   
    this.updatebutton=true;
    // if (this.updatebutton==true) {
      this.moe=true
        // }
        // else if (this.updatebutton==false) {
        //   this.moe=false
        //     }
    this.sett= emp
  }

  update(cot)
{
   var msg=this.group
cot.save().toPromise().then(function(resp) {
console.log(resp)
})
this.sett={settings:[{}]};
 msg.savemsg('Updated Succesfully','alert alert-info');
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

  save(obj){
    // this.moe=false
    var msg=this.group
    var create=this.restangular.one('category')
    create.settings=[];
    create.settings.push(obj.settings[0])
    create.save().toPromise().then(res=>{
   console.log(res)
   this.restangular.all('category').getList()
                   .subscribe(data=>{this.datas=data.filter(res=>res.settings)})
                   console.log(this.datas)
  
   msg.savemsg('Added Succesfully','alert alert-info');
   })
   this.sett={settings:[{}]}; 
   this.ngOnInit();
  }

  cancel(){
    this.moe=false;
    this.sett = {settings:[{}]};
    this.ngOnInit();
  }

  delete(cat,i){
    if(confirm("Are you sure! you want to delete this data")){
      cat.remove().toPromise().then(function(resp,err) {
    console.log(resp)
    })
    this.seti.splice(i,1);
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

    rdoChange(this){
      if(this.checked==true){
        alert('You Select Department Wise')
      }
    }


    emmmfm;
    emmmfm1
    off1;
    selectep;
 selectemp(employee){
   this.selectep= employee.official[0].firstname+ " "+employee.official[0].lastname;
   console.log(this.selectep)
 }

 filterempFm(employee)
 {
   console.log(employee)
   // console.log(r)
  this.emmmfm = employee.official[0].firstname+ " "+employee.official[0].lastname;
  console.log(this.emmmfm)
  console.log(this.selectep)
 
  this.off1 = this.repomanager.filter(obj=>obj.official[0].firstname+" "+obj.official[0].lastname!=this.selectep)

 }
 off2;
 off3;
 off5;
 emmmfm2
    filterempFm1(employee)
    {
      console.log(employee)
      console.log(this.selectep)
     console.log(this.emmmfm)
     this.emmmfm1 = employee.official[0].firstname+ " "+employee.official[0].lastname;

     this.off2 = this.off1.filter(obj=>obj.official[0].firstname+" "+obj.official[0].lastname!=this.selectep && obj.official[0].firstname+" "+obj.official[0].lastname!=this.emmmfm)
    }


    filterempFm2(employee)
    {
      this.emmmfm2 = employee.official[0].firstname+ " "+employee.official[0].lastname;
     this.off3 = this.offf.filter(obj=>obj.official[0].role!='Executive Director') 
    }
    filterempFm3(employee)
    {
      this.emmmfm2 = employee.official[0].firstname+ " "+employee.official[0].lastname;
     this.off5 = this.offf.filter(obj=>obj.official[0].firstname+" "+obj.official[0].lastname!=this.emmmfm2 && obj.official[0].role!='Executive Director') 
    }


    newarr=[];
    newarr1;

selectreqview=[];
selectreqview1=[]
    selectemp1(employee)
    {
      console.log(employee.official[0].firstname+ " "+employee.official[0].lastname)
      // this.selectreqview= [employee.official[0].firstname+ " "+employee.official[0].lastname];
      this.selectreqview.push(employee.official[0].firstname+ " "+employee.official[0].lastname)
      console.log(this.selectreqview)
      // this.selectreqview.pop()
      console.log(this.offf.length)




      var neww=this.offf.filter(obj=>obj.official[0])
      console.log(neww)
      for(var i=0;i<this.offf.length;i++){
      console.log(neww[i].official[0].firstname+" "+neww[i].official[0].lastname)
        
      // var newarr1=this.offf.filter(neww=>neww[i].official[0].firstname+" "+neww[i].official[0].lastname!=employee.official[0].firstname+ " "+employee.official[0].lastname)
      // console.log(newarr1)
      }

    //  for(var i=0;i<this.offf.length;i++)
    //   {
    //     if(employee.official[i].firstname+" "+employee.official[i].lastname===this.selectreqview[i])
    //     console.log(this.offf.length)
    //     this.off3 = this.offf.filter(obj=>(obj.official[i].firstname+" "+obj.official[i].lastname)!=this.selectreqview[i] )
    //     console.log(this.selectreqview[i])        
    //    console.log(this.off3)
    // }
//     for(var i=0;i<this.offf.length;i++){
// this.newarr.push(this.offf[i].official[0].firstname+ " "+this.offf[i].official[0].lastname)
// console.log(this.newarr)
// // return this.newarr;
// // this.newarr1=this.selectreqview.concat(this.newarr)
// //     console.log(this.newarr1)
//   }
//   console.log(this.newarr)

//     var newconarr = new Array();
// newconarr=this.newarr1.filter(obj=>obj!==employee.official[0].firstname+ " "+employee.official[0].lastname)
// console.log(newconarr)

  // var neww=this.offf.filter(obj=>obj.official[0])
  // console.log(neww)
  // for(var i=0;i<this.offf.length;i++){
  // console.log(neww[i].official[0].firstname+" "+neww[i].official[0].lastname)
  // // var p = new Array();
  // //  p.push(neww[i].official[0].firstname+" "+neww[i].official[0].lastname)
  // //  console.log(p)
  // }


      // this.off3 = this.offf.filter(obj=>[obj.official[0].firstname+" "+obj.official[0].lastname]!=this.selectreqview)
      // this.selectreqview1.pop()
      // console.log(this.selectreqview1)
      //  console.log(this.off3)
    }
    // off3;
  //   filterempFm2(employee)
  //   {
  //     console.log(employee)
  //     // console.log(r)
  //   //  this.emmmfm2 = [employee.official[0].firstname+ " "+employee.official[0].lastname];
  //   this.emmmfm2.push(employee.official[0].firstname+ " "+employee.official[0].lastname)

  //    console.log(this.emmmfm2)
  //    console.log(this.selectreqview)
    
  //    this.off3 = this.offf.filter(obj=>this.emmmfm2!=this.selectreqview)
  //  console.log(this.off3)
  //   }







    
catt
category;
pp



selectcategory(b,sett,category)
{
  sett.settings[0].category_id=b._id
  console.log(sett.settings[0].category_id)
  sett.settings[0].category=b.categories[0].category
  console.log(sett.settings[0].categoryname)
  console.log(sett)

}
selectcategory1(sett){
 console.log(sett.settings[0].category)
 console.log(sett.settings[0].businessunit)
 this.catt=this.seti.filter(obj=>obj.settings[0].category && obj.settings[0].businessunit)
 console.log(this.catt)
for(let i=0;i<this.seti.length;i++){
 console.log(this.catt[i].settings[0].category)
 console.log(this.catt[i].settings[0].businessunit)
 if(sett.settings[0].category==this.catt[i].settings[0].category && sett.settings[0].businessunit==this.catt[i].settings[0].businessunit && sett.settings[0].departmentname==this.catt[i].settings[0].departmentname)
 {
   alert("Already configured.Please select a different category.")
   return false;
 }
}
}

// abc(p){
//   console.log(p)
 
//   for(let i=0;i<=this.seti.length;i++){
//     this.catt=this.seti.filter(obj=>obj.settings[0].category)
//     console.log(this.catt)
//     this.pp= this.catt[i].settings[0].category
//   console.log(this.catt[i].settings[0].category)
//   if(p==this.pp){
//     alert("Already configured.Please select a different category.")
//     // this.sett={settings:[{}]}; 
//   // return p
//   // this.ngOnInit();
// // return false;
//   }
// }
  
// }



moe;
  ngOnInit() {
 
      
    let baseBusiness = this.restangular.all('businessunit');
    baseBusiness.getList().subscribe(data => {
    this.bunita =data.filter(res=>res.businessunits);
    console.log(this.bunita)
    return this.bunita;
    });
    let baseDepart= this.restangular.all('departments');
    baseDepart.getList().subscribe(data => {    
    this.departunit =data.filter(res=>res.department);
    console.log(this.departunit)
    return this.departunit; 
    });
    let baseCategory = this.restangular.all('category');
    baseCategory.getList().subscribe(data => {
    this.reqq = data.filter(res=>res.categories);
    console.log(this.reqq)
    return this.reqq;
  });
    let baseOff= this.restangular.all('createemployee');
    baseOff.getList().subscribe(data => {
      this.offf = data.filter(res=>res.official);
      console.log(this.offf)
      return this.offf;
    });

    let baseset= this.restangular.all('category');
    baseset.getList().subscribe(data => {
      this.seti = data.filter(res=>res.settings);
      console.log(this.seti)
      return this.seti;
    });




this.form = this.formBuilder.group({
  busunit: [null, Validators.nullValidator],
  applic: [null, Validators.nullValidator],
  reqqfor: [null, Validators.nullValidator],
  noofapp: [null, Validators.nullValidator],
  depts: [null, Validators.nullValidator],

  app1: [null, Validators.nullValidator],
  app2: [null, Validators.nullValidator],
  app3: [null, Validators.nullValidator],

  attac: [null, Validators.nullValidator],
  desc1: [null, Validators.nullValidator],
  app31: [null, Validators.nullValidator],
  attac1: [null, Validators.nullValidator],
  desc2: [null, Validators.nullValidator],

  catte: [null, Validators.nullValidator],
  exe: [null, Validators.nullValidator],
  reqqvieww: [null, Validators.nullValidator],
  reqqvieww1: [null, Validators.nullValidator],
  exe1: [null, Validators.nullValidator]












});



  }

}
