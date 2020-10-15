import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../user.service';
import { FromObservable } from 'rxjs/observable/FromObservable';
import { FromEventPatternObservable } from 'rxjs/observable/FromEventPatternObservable';
import { Md2Dialog } from 'md2';
@Component({
  selector: 'app-assets1',
  templateUrl: './assets1.component.html',
  styleUrls: ['./assets1.component.css']
})
export class Assets1Component implements OnInit {

  constructor(private userservice:UserService,private restangular: Restangular,private formBuilder: FormBuilder) { 
this.exit=this
  }
  form: FormGroup
  assetcat={assetcategories:[{}]}
  types
  exit
  assu
ass={asset:[{}]}
bunits={businessunits:[{}]};
updatebutton = false;

deletemsg
datas;
messageClass
message: any
deleted = false;
edited=false;
assets;
datass;
bunit;

group;
screen;

formControl = new FormControl('hello', Validators.required);

open(dialog: Md2Dialog) {
  dialog.open();
  }


  close(dialog: any) {
  dialog.close();
  }
  assetclassification = [
    { viewValue: 'Department'},
    { viewValue: 'Business Unit'},
    { viewValue: 'Employee'}
    
  ];
  

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
  
  save(ext)
  {
    var msg=this.exit
  var create=this.restangular.one('asset')
  create.asset=[]
  create.asset.push(ext.asset[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('asset').getList().subscribe(data=>{this.datas=data.filter(res=>res.asset)})
  console.log(this.datas)

  msg.savemsg('Added Succesfully','alert alert-info');
  })
  this.ass={asset:[{}]};
}

cancel()
{
this.ass={asset:[{}]};
}

edit(emp) 
{
  this.updatebutton = true;
  this.ass= emp
}
view(emp)
{
  this.ass=emp
}

update(etype)
{
 etype.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.ass={asset:[{}]};
}

delete(et,i){
  var delmsg=this.exit
  et.remove().toPromise().then(function(resp,err) {
  console.log(resp)
  })
  this.datas.splice(i,1);
  delmsg.savemsg();
  alert("Are you sure! you want to delete this data");
}


  


  ngOnInit() {
    let baseExit = this.restangular.all('asset');
    baseExit.getList().subscribe(data => {
    this.datas =data.filter(res=>res.asset);
    console.log(this.datas)
    return this.datas;
    });
   
   let assunit = this.restangular.all('asset');
   assunit.getList().subscribe(data => {
   this.assu =data.filter(res=>res.assetcategories);
   console.log(this.assu)
   return this.assu;
   });
  
   let baseBusiness = this.restangular.all('businessunit');
   baseBusiness.getList().subscribe(data => {
   this.bunit =data.filter(res=>res.businessunits);
   console.log(this.bunit)
   return this.bunit;
            
   });
   this.form = this.formBuilder.group({
     cate: [null, Validators.required],
     subcate: [null, Validators],
     asscode: [null, Validators.required],
     assname: [null, Validators.required],
     bunits:[null, Validators.required],
     work: [null, Validators.required],
     
     classification: [null, Validators.required],
     purdate: [null, Validators],
     invoiceno: [null, Validators],
     manufac: [null, Validators],
     serialnumber: [null, Validators],
     war: [null, Validators.required],
     note: [null, Validators],
     image: [null, Validators]
   })
  
  }

}
