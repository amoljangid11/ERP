import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs/observable/empty';

import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import {MdChipsModule} from '@angular/material';
import {UserService } from '../../../user.service';
import { Restangular } from 'ngx-restangular';
import { Router} from '@angular/router';
import { Md2Dialog } from 'md2';
import { ReactiveFormsModule } from '@angular/forms';




@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit {
  
  contacttype2=[
    {name:"Primary"},
    {name:"Secondary"}
  ];
  contacttype3=[
    {name:"Agency User"},
    {name:"akshay"}
   
  ];

  constructor(private userservice:UserService,private restangular: Restangular,private router:Router,private formBuilder: FormBuilder){ this.group=this }
  public urlForm: FormGroup;

  general={identitycodes:[{}]};
  bunits={agenciesunits:[{}]};
  cons={countr:[{}]};
  stas={stat:[{}]};
  citys={cit:[{}]};
  updatebutton = false;
  bunit;
  messageClass
  message
  deleted = false;
  edited=false;
  external;
  today: number = Date.now();
  group;
  datas;
  countryunit;
  agenciesunit;
  agencyname:any;
  url: any;
  primaryphone:any;
  secondaryphone:any;
  address:any;
  firstname:any;
  lastname:any;
  phone:any;
  email:any;
  location:any;
  country={}
  site_t;
  state={}
  city:any;
  contacttype:any;
  contacttype1:any;


  countryname:any;
  countrycode:any;
  
  statename:any;
  cityname:any;
  bun;
  screentype;
  description;
  buni;
  dat;
  datass;
  cityunit;
  ci;
  stateunit;
  sta;

  dialogHeader: string = 'Lorum Ipsum';


  open(dialog: Md2Dialog) {
dialog.open();
}

close(dialog: any) {
dialog.close();
}

selectbusiness(b,bunits,screeningtypes)
{
  bunits.agenciesunits[0].screeningtypes_id=b._id
  bunits.agenciesunits[0].screeningtypes=b.screeningtype[0].screentype
  console.log(bunits)

}

//fetch the countryall value in dropdownlist
selectcounfetch(b,cons,countries)
{
  cons.agenciesunits[0].countries_id=b._id
  cons.agenciesunits[0].countries=b.countr[0].countryname
  console.log(cons)

}

//fetch the stateall value in dropdownlist
selectstatefetch(s,stas,states)
{
  stas.agenciesunits[0].states_id=s._id
  stas.agenciesunits[0].states=s.stat[0].statename
  console.log(stas)
}

//fetch the cityall value in dropdownlist
selectcityfetch(c,citys,cityes)
{
  citys.agenciesunits[0].cityes_id=c._id
  citys.agenciesunits[0].cityes=c.cit[0].cityname
  console.log(citys)

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
  var msg=this.group
  var create=this.restangular.one('configuration')
  create.agenciesunits=[];
  //create.countr=[]
  create.screeningtypes_id=obj.agenciesunits[0].screeningtypes_id;
  create.agenciesunits.push(obj.agenciesunits[0])
  create.agenciesunits[0].startedon=this.today;
  //create.countr.push(obj.countr[0])
  create.save().toPromise().then(res=>{
 console.log(res)
 this.restangular.all('configuration').getList()
                 .subscribe(data=>{this.datas=data.filter(res=>res.agenciesunits)})
                 console.log(this.datas)
  //this.restangular.all('configuration').getList()
                // .subscribe(data=>{this.datas=data.filter(res=>res.countr)})
                 //console.log(this.datas)

 msg.savemsg('Added Succesfully','alert alert-info');
 })
 this.agenciesunit={agenciesunits:[{}]}; 
 //this.cons={countr:[{}]};
 this.ngOnInit();
}



 save1(obj){
   var msg=this.group
   var create=this.restangular.one('countryall')
   create.countr=[]
   create.countries_id=obj.countr[0].countries_id;
   create.countr.push(obj.countr[0])
   create.save().toPromise().then(res=>{
   console.log(res)
   this.restangular.all('countryall').getList()
                 .subscribe(data=>{this.datas=data.filter(res=>res.countr)})
                 console.log(this.datas)

  msg.savemsg('Added Succesfully','alert alert-info');
  })
 
  this.countryunit={countr:[{}]}; 
  this.ngOnInit();
 }


 save2(obj){
   var msg=this.group
   var create=this.restangular.one('stateall')
   create.stat=[]
   create.states_id=obj.stat[0].states_id;
   create.stat.push(obj.stat[0])
   create.save().toPromise().then(res=>{
   console.log(res)
   this.restangular.all('stateall').getList()
                 .subscribe(data=>{this.datas=data.filter(res=>res.stat)})
                 console.log(this.datas)

  msg.savemsg('Added Succesfully','alert alert-info');
  })
  this.stateunit={stat:[{}]}; 
  this.ngOnInit();
 }

 save3(obj){
   var msg=this.group
   var create=this.restangular.one('cityall')
   create.cit=[]
   create.cityes_id=obj.cit[0].cityes_id;
   create.cit.push(obj.cit[0])
   create.save().toPromise().then(res=>{
   console.log(res)
   this.restangular.all('cityall').getList()
                 .subscribe(data=>{this.datas=data.filter(res=>res.cit)})
                 console.log(this.datas)

  msg.savemsg('Added Succesfully','alert alert-info');
  })
  this.cityunit={cit:[{}]}; 
  this.ngOnInit();
 }

 cancel(){
  this.bunits={agenciesunits:[{}]};
}

edit(emp) {
    this.updatebutton = true;
    this.bunits= emp
}

view(work){
  // this.updates=true;
  this.bunits=work
}

update(busunit)
{
   var the=this
   console.log(busunit)
   busunit.save().toPromise().then(function(resp) {
   console.log(resp)
   the.restangular.all('configuration').getList({"agenciesunits":resp._id}).subscribe(res=>{
     console.log(res)
     res.forEach(data=>{
       console.log(busunit.agenciesunits[0].name)
       data.department[0].agenciesunit=busunit.agenciesunits[0].name
       console.log(data)
       data.save();
     })
     

   })
  })
  this.bunits={agenciesunits:[{}]};
   
}

deletemsg()
{
  console.log(this.deleted)
    this.deleted=true;
    this.messageClass='alert alert-danger ';
    // this.message="Deleted Successfully";
    this.deletemsg()
    alert("Are you sure! you want to delete this data");
    setTimeout(function() {
       this.deleted = false;
       console.log(this.deleted);
   }.bind(this), 1500);
}
delete(bu,i){
  bu.remove().toPromise().then(function(resp,err) {
      console.log(resp)
    })
  this.bunit.splice(i,1);
      }
  


  screeningtype=[];
  savechngscreen(){
    const servicereq={
    screentype:this.screentype,
    description:this.description
    }
    this.screeningtype.push(this.screentype);
    this.userservice.service(servicereq).subscribe(data=>{
      if(!data){
        console.log("err");
      } else{
        console.log(data);
      }
    })
    
    this.screentype="";
    this.description="";
    
  }


//countr=["India"];
  // savechng(){
  //   const servicereq={
  //   countryname:this.countryname,
  //   countrycode:this.countrycode
  //   }
  //   this.countr.push(this.countryname);
  

    
  //   this.userservice.service(servicereq).subscribe(data=>{
  //     if(!data){
  //       console.log("err");
  //     } else{
  //       console.log(data);
  //     }
  //   })
    
  //   this.countryname="";
  //   this.countrycode="";
    
  // }


//  states=["Maharashtra","Zarkhand"];
//   savechange(){
//     const servicereq={
//     statename:this.statename
//     }
//     this.states.push(this.statename);
  

    
//     this.userservice.service(servicereq).subscribe(data=>{
//       if(!data){
//         console.log("err");
//       } else{
//         console.log(data);
//       }
//     })
    
//     this.statename="";
    
//   }

  //cities=["Amravati","Nagpur"];
  // savechanges(){
  //   const servicereq={
  //   cityname:this.cityname
  //   }
  //   this.cities.push(this.cityname);
  

    
  //   this.userservice.service(servicereq).subscribe(data=>{
  //     if(!data){
  //       console.log("err");
  //     } else{
  //       console.log(data);
  //     }
  //   })
    
  //   this.cityname="";
    
  // }
  // refresh(): void {
  //   this.router.navigateByUrl('your_path');
  // }

  

  ngOnInit() {

    
    let baseHolidaygroup = this.restangular.all('configuration');
    baseHolidaygroup.getList().subscribe(data => {
    this.bunit = data.filter(res=>res.agenciesunits);
    console.log(this.bunit)
    return this.bunit;
  
  });

  let baseContact = this.restangular.all('contacts');
  baseContact.getList().subscribe(data => {
  this.external = data.filter(res=>res.externalusers);
  console.log(this.external)
  });
 


        
       let basecoun= this.restangular.all('countryall');
       basecoun.getList().subscribe(data => {
       this.dat =data.filter(res=>res.countr);
       return this.dat;
  
        });

        let basesta= this.restangular.all('stateall');
       basesta.getList().subscribe(data => {
       this.sta =data.filter(res=>res.stat);
       return this.sta;
  
        });

        let basecit= this.restangular.all('cityall');
       basecit.getList().subscribe(data => {
       this.ci =data.filter(res=>res.cit);
       return this.ci;
  
        });


        let baseBusiness= this.restangular.all('configuration');
        baseBusiness.getList().subscribe(data => {
        this.bun =data.filter(res=>res.screeningtype);
        return this.bun;
          
          });

          this.userservice.serviceget().subscribe(data=>{
          this.datas= data.servicereq;
          
          for(var i=0;i<this.datas.length;i++){
          
            var scree= this.datas[i].screentype;
            if(scree!=null){
                this.screeningtype.push(scree);
                }
            }
            
          });






  // this.userservice.serviceget().subscribe(data=>{
  //   this.datass= data.servicereq;
  
  // for(var i=0;i<this.datass.length;i++){
  
  //   var hey= this.datass[i].countryname;
  //   if(hey!=null){
  //       this.countr.push(hey);
  //       }
  //   }
    
  // });
  
 
    // this.userservice.serviceget().subscribe(data=>{
    //   this.datas= data.servicereq;
    
    // for(var i=0;i<this.datas.length;i++){
    
    //   var hey1= this.datas[i].statename;
    //   if(hey1!=null){
    //       this.states.push(hey1);
    //       }
    //   }
      
    // });
    
    // this.userservice.serviceget().subscribe(data=>{
    //   this.datas= data.servicereq;
    
    // for(var i=0;i<this.datas.length;i++){
    
    //   var hey2= this.datas[i].cityname;
    //   if(hey2!=null){
    //       this.states.push(hey2);
    //       }
    //   }
      
    // });
        }
      }