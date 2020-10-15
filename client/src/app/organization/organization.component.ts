import { Component, OnInit } from '@angular/core';

import {UserService } from '../user.service';
import { RestangularModule, Restangular} from 'ngx-restangular';

import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import{Router} from '@angular/router'
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.css'],
  providers: [ UserService ]
})
export class OrganizationComponent implements OnInit {
  //  formControl = new FormControl('hello', Validators.nullValidator);


  constructor(private restangular:Restangular,private formBuilder: FormBuilder,private router:Router,public service:UserService)
   { this.orgg=this;
    this.service=service; }
  

  form: FormGroup;
  form1: FormGroup;
form2: FormGroup;
form3: FormGroup;
 orgs={organiz:[{}]};
 orgn;
datas;
 statearry;
 state2;
 datas2;
 cityarry;
 datas1;
 cit;
 datas3;
 country:any;
 countrycode:any;
 countryvalue:any;
 statename:any;
 countries:any;
 cityname:any;
 statevalue:any;
 fvalue;
 orgsdata;
//  organization:{};
 messageClass
message
edited=false;
orgg
organiz:{};
edu=false;
i=0;
add;
show;



itemList = [];
selectedItems = [];
settings = {};

 totempp = [
  { value: '20-50'},
  { value: '51-100'},
  { value: '101-500'},
  { value: '501-1000'},
  { value: '>1000'},

]





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



save(data)
{
  console.log(data)
var create=this.restangular.one('organization')
create.organiz=[]
create.organiz.push(data.organiz[0]);
console.log(create)
create.save().toPromise().then(res=> {

this.restangular.all('organization').getList().subscribe(data=>{
  this.datas=data.filter(res=>res.organiz);
  if(this.datas[0])
       {console.log("edit")
         this.orgs=this.datas[0]
         this.add=false
       }else{
         console.log("add")
        //  data.update();
       }})
        // data.update();
 });  
this.orgs={organiz:[{}]};

}

update(obj)
{

console.log(obj)

obj.save();
this.show = !this.show


}




	human(){
    this.router.navigate(['./setuproot',{outlets:{secondchild:['human-resource'], thirdchild:['employee']}}])
    this.ngOnInit();
  };

  prev(){
		this.router.navigate(['./wizard',{outlets:{frstchild:['business_unit']}}])
		this.ngOnInit();
   };
   

   next(){
		this.router.navigate(['./wizard',{outlets:{frstchild:['service_req']}}])
		this.ngOnInit();
	 };


select(obj){
  this.restangular.all('stateall').getList({"countryallid":obj}).subscribe(res=>
  {
  this.statearry=res,console.log(obj)
  })
  return this.statearry;
}

select1(gt1){
  this.restangular.all('cityall').getList({"stateallid":gt1}).subscribe(res=>
  {
  this.cityarry=res,console.log(gt1)
  })
  return this.cityarry;
}

savecountry(){
  const countryval = {
  countryal:this.country,
  code:this.countrycode
  }
  console.log(this.datas1);
    this.datas1.post(countryval).toPromise().then(resep=>{
    this.datas1.push(resep);
    });
      this.country="";
      this.countrycode="";
}

savestate(){
  const country1 = {
  countryallid:this.countryvalue,
  statename:this.statename
  }
  console.log(this.datas2);
    this.datas2.post(country1).toPromise().then(resp=>{
    this.datas2.push(resp);
    });
      this.countryvalue="";
      this.statename="";
}

savecity(){
  const country1 = {
  countryallid:this.countries,
  stateallid:this.statevalue,
  cityname:this.cityname
  }
  console.log(this.datas3);
    this.datas3.post(country1).toPromise().then(resp=>{
    this.datas3.push(resp);
    });
     this.countries="";
     this.statevalue="";
     this.cityname="";
}

selectcountry(cou){

  this.restangular.all('stateall').getList({"countryallid":cou}).subscribe(res=>
  {
  this.statearry=res,console.log(cou)
  })
  return this.statearry;
}

selectstate(st){
  this.restangular.all('cityall').getList({"stateallid":st}).subscribe(res=>
  {
  this.cityarry=res,console.log(st)
  })
  return this.cityarry;
}

edit(data) {
  console.log(data)
  this.service.editfun(data);


}



  ngOnInit() {



    let baseWork = this.restangular.all('organization');
    baseWork.getList().subscribe(data => {
    data = data.filter(res=>res.organiz);
    console.log(this.orgn)
    this.datas=data[0]
    console.log(this.datas)
   
    if(this.datas)
    {console.log("edit1")

     this.orgs=data[0]
      console.log(this.orgs)
    }else{
      console.log("add1")
      this.add=true;
    }

    });




    // if(undefined!=this.service.editdata)
    // {
    //  console.log(this.service.editdata)
    //  console.log("hi")
    // this.orgsdata=this.service.editdata;
    //  this.orgs.organiz[0]=this.service.editdata;
    //  console.log(this.orgs)
    //  this.select(this.service.editdata.organiz.country)
    //  this.select1(this.service.editdata.organiz.state)
    //  return this.orgsdata;
    //      }


    // let baseWork2 = this.restangular.all('organization');
    // baseWork2.getList().subscribe(data => {
    // this.datas = data.filter(res=>res.organiz);
    // console.log(this.datas)
    // });

    // if(undefined!=this.service.editdata.organiz )
    // {
    //  console.log(this.service.editdata.organiz)
    //  this.orgsdata=this.service.editdata;
    //  this.orgs.organiz[0]=this.service.editdata.organiz[0];
    //  console.log(this.orgs)
     
    // }


    // if(undefined!=this.service.editdata.organiz)
    // {
    //   console.log("abc")
    //  console.log(this.service.editdata.organiz)
    // //  this.orgsdata=this.service.editdata;
    // //  this.orgs.organiz[0]=this.service.editdata.organiz[0];
    // //  console.log(this.orgs)
     
    // }
    // else{
    //   console.log("abc1")
    // }




//     if(undefined!=this.service.editdata.organiz)
// {
//   console.log(this.service.editdata.organiz)
//   this.orgsdata=this.service.editdata;
//   this.orgsdata.organiz[0]=this.service.editdata.organiz[0];


//   console.log(this.orgs)
// }

    // if(undefined!=this.service.editdata.organiz)
    // {
    // console.log(this.service.editdata.organiz)
    // this.orgsdata=this.service.editdata;
    // this.orgs.organiz[0]=this.service.editdata.organiz[0];
    // console.log(this.orgs)
    // this.select(this.service.editdata.organiz.country)
    // this.select1(this.service.editdata.organiz.state)

    
     
     
    
    //  //this.doctype(this.service.editdata.workeligibility)
    // }

    
    // let baseWork = this.restangular.all('organization');
    // baseWork.getList().subscribe(data => {
    // this.orgn = data.filter(res=>res.organiz);
    // console.log(this.orgn)
    // });





    var sat=this.restangular.all('countryall');
    sat.getList().subscribe(data=>{
    this.datas1=data;
    return this.datas1;
    });

    this.cit=this.restangular.all('stateall');
    this.cit.getList().subscribe(data=>{
    this.datas2=data;
    return this.datas2;
    });

    var city=this.restangular.all('cityall')
    city.getList().subscribe(data=>{
    this.datas3=data;
    return this.datas3;
});



// let baseorg= this.restangular.all('organization');
// baseorg.getList().subscribe(data => {
// this.orgn =data.filter(rse=>res.organization);
// return this.orgn;

//  });




 this.form = this.formBuilder.group({
  orgp: [null, Validators.required],
  priphone: [null, Validators],
  state: [null, Validators.required],
  add2: [null, Validators],
  frm: [null, Validators],

  website: [null, Validators.required],
  secphno: [null, Validators],
  cityy: [null, Validators.required],
  orgdesc: [null, Validators],

  orgstart: [null, Validators],
  faxno: [null, Validators],
  mainbadd: [null, Validators],
  busdomain: [null, Validators],

  totemp: [null, Validators],
  count: [null, Validators.required],
  add1: [null, Validators]
  
});
this.form1 = this.formBuilder.group({
  coun: [null, Validators.required],
  councode: [null, Validators.required]
});
this.form2 = this.formBuilder.group({
  count: [null, Validators.required],
  state: [null, Validators.required]
});
this.form3 = this.formBuilder.group({
  countr: [null, Validators],
  stat: [null, Validators.required],
  cit: [null, Validators.required]
});



 this.itemList = [
  {  "id": 1, "itemName": "Automotive"},
  {  "id": 2, "itemName": "Construction"},
  { "id": 3, "itemName": "Consulting"},
  { "id": 4, "itemName": "Education"},
  { "id": 5, "itemName": "Engineering"},
  { "id": 6, "itemName": "Govertment"},
  { "id": 7, "itemName": "Healthcare"},
  { "id": 8, "itemName": "Hospility"},
  { "id": 9, "itemName": " Insurance/Finance"},
  { "id": 10, "itemName": "Manufacturing"},
  { "id": 11, "itemName": "Marketing/PR"},
  { "id": 12, "itemName": "Media"},
  { "id": 13, "itemName": "Not for profit"},
  { "id": 14, "itemName": "Oil/Gas/Utilities"},
  { "id": 15, "itemName": "Pharmaceutical"},
  { "id": 16, "itemName": "Real Estate"},
  { "id": 17, "itemName": "Retail and Consumer"},
  { "id": 18, "itemName": "Technology"},
  { "id": 19, "itemName": "Telecommunication"},
  { "id": 20, "itemName": "Travel and Leisure"},
  { "id": 21, "itemName": "Other"}

];



this.settings = {
  text: "Select Countries",
  selectAllText: 'Select All',
  unSelectAllText: 'UnSelect All',
  classes: "myclass inputField"
};
}
onItemSelect(item: any) {
console.log(item);
console.log(this.selectedItems);
}
OnItemDeSelect(item: any) {
console.log(item);
console.log(this.selectedItems);
}
onSelectAll(items: any) {
console.log(items);
}
onDeSelectAll(items: any) {
console.log(items);
}

}
