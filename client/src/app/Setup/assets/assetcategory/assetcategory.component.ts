import { Component, OnInit } from '@angular/core';
import {MdChipsModule} from '@angular/material';
import {UserService } from '../../../user.service';
import { Restangular } from 'ngx-restangular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Md2Dialog } from 'md2';
@Component({
  selector: 'app-assetcategory',
  templateUrl: './assetcategory.component.html',
  styleUrls: ['./assetcategory.component.css']
})
export class AssetcategoryComponent implements OnInit {

  constructor(private userservice:UserService,private restangular: Restangular,private formBuilder: FormBuilder) { 
    this.exit=this
  }
  exit
  form: FormGroup;
   assetcat={assetcategories:[{}]}
updatebutton = false;
datas;
messageClass
message
deleted = false;
edited=false;

formControl = new FormControl('hello', Validators.required);

open(dialog: Md2Dialog) {
  dialog.open();
  }


  close(dialog: any) {
  dialog.close();
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

save(ext){
  var msg=this.exit
  var create=this.restangular.one('asset')
  create.assetcatid;
  console.log("")
  create.assetcategories=[]
  create.assetcategories.push(ext.assetcategories[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('asset').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.assetcategories)})

  msg.savemsg('Added Succesfully','alert alert-info');
  })
  this.assetcat={assetcategories:[{}]};
}

cancel(){
this.assetcat={assetcategories:[{}]};
this.ngOnInit();
}

edit(emp) {
  this.updatebutton = true;
  this.assetcat= emp
}
view(emp) {
  // this.updatebutton = true;
  this.assetcat= emp
}

update(etype)
{
  var msg=this.exit;
  etype.save().toPromise().then(function(resp) {
    msg.savemsg('Updated Succesfully','alert alert-info');
  console.log(resp)
  })
  this.assetcat={assetcategories:[{}]};
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





  ngOnInit() {
    let baseExit = this.restangular.all('asset');
  baseExit.getList().subscribe(data => {
  this.datas =data.filter(res=>res.assetcategories);
  console.log(this.datas)
  return this.datas;
  });
  this.form = this.formBuilder.group({
    cate: [null, Validators.required],
    subcate: [null, Validators]
    

  });
  }

}
