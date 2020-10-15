import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import {UserService } from '../../../user.service';
import { Router} from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Md2Dialog } from 'md2';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(private userservice:UserService,private restangular: Restangular,private router:Router,private formBuilder: FormBuilder){ this.group=this }

cat = {categories:[{}]}
datas;
catt;
messageClass
message
deleted = false;
edited=false;
updatebutton = false;
form: FormGroup;
group;



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
  var create=this.restangular.one('category')
  create.categories=[];
  create.categories.push(obj.categories[0])
  create.save().toPromise().then(res=>{
 console.log(res)
 this.restangular.all('category').getList()
                 .subscribe(data=>{this.datas=data.filter(res=>res.categories)})
                 console.log(this.datas)

 msg.savemsg('Added Succesfully','alert alert-info');
 })
 this.cat={categories:[{}]}; 
 this.ngOnInit();
}


edit(emp) {
  this.updatebutton = true;
  this.cat= emp
}

update(cot)
{
  var msg=this.group
cot.save().toPromise().then(function(resp) {
console.log(resp)
})
this.cat={categories:[{}]};
msg.savemsg('Updated Succesfully','alert alert-info');
}


delete(cat,i){
  if(confirm("Are you sure! you want to delete this data")){
    cat.remove().toPromise().then(function(resp,err) {
  console.log(resp)
  })
  this.catt.splice(i,1);
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






cancel(){
  this.cat = {categories:[{}]}
  this.ngOnInit();
}


open(dialog: Md2Dialog) {
  dialog.open();
}
close(dialog: any) {
  dialog.close();
}
view(dataall) {
  // this.updatebutton = true;
  this.cat= dataall
//   this.i=i;
}

  ngOnInit() {

    let basecategries = this.restangular.all('category');
    basecategries.getList().subscribe(data => {
    this.catt = data.filter(res=>res.categories);
    console.log(this.catt)
    return this.catt;
  
  });

  this.form = this.formBuilder.group({
    categori: [null, Validators.required],
    descc: [null, Validators.nullValidator],
  });
  }

}
