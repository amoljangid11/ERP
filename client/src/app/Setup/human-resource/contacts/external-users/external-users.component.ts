import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { Router} from '@angular/router';
import {UserService } from '../../../../user.service';
import { and } from '@angular/router/src/utils/collection';
import { Md2Dialog } from 'md2';


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-external-users',
  templateUrl: './external-users.component.html',
  styleUrls: ['./external-users.component.css']
})
export class ExternalUsersComponent implements OnInit {

 formControl = new FormControl('hello', Validators.required);

constructor(private restangular: Restangular, private router: Router, 
  	        public service: UserService,private formBuilder: FormBuilder) { }
datas;
form:FormGroup;
form1:FormGroup;
general={identitycodes:[{}]};
users;
roles;
type=[];
external;
messageClass
message
deleted = false;
edited=false;
user={externalusers:[{}]};
show=false;
updatebutton=false;
rname;
abc;




open(dialog: Md2Dialog) {
  dialog.open();
}
 
close(dialog: any) {
  dialog.close();
}
view(datas) {
  this.user= datas;

}

save(data)
{
  var create= this.restangular.one('contacts');
  create.externalusers=[];
  create.externalusers.push(data.externalusers[0])
  create.save().toPromise().then(res=>{
  console.log(res)
    this.restangular.all('contacts').getList()
    .subscribe(data=>{this.external=data.filter(res=>res.externalusers)})
      this.edited=true;
      this.messageClass='alert alert-info ';
      this.message="Added Successfully";
      setTimeout(function() {
      this.edited = false;
      console.log(this.edited);
      }.bind(this), 1500);
      })
      this.  user={externalusers:[{}]};
}

edit(ven){
  this.updatebutton=true;
  this.user=ven
}

update(contactExternal)
{
  contactExternal.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.  user={externalusers:[{}]};
}

delete(ext,i){
  if(confirm("Are you sure! you want to delete this data")){
  ext.remove().toPromise().then(function(resp,err) {
  console.log(resp)
  })
  this.external.splice(i,1);

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

savechanges(data) {
  console.log(data)
  data.save();
}

cancel(){
  this.user={externalusers:[{}]};
  this.ngOnInit();
}

select() {
  console.log("okkkk")
  var role = [];
  role = this.roles.filter(data => data.role[0].type == "External User")
  this.type = role;
  console.log(this.type)
}

ngOnInit() {

    let baseContact = this.restangular.all('contacts');
    baseContact.getList().subscribe(data => {
    this.external = data.filter(res=>res.externalusers);
    console.log(this.external)
    });

    var baseUnits = this.restangular.all('general' );
    console.log(baseUnits)
    baseUnits.getList().subscribe(data => {
    data =data.filter(res=>res.identitycodes);
    this.datas=data[0]
    console.log(this.datas)
    this.general=this.datas
    this.users = this.datas.identitycodes[0].users;
    /*this.backgroundagency = this.datas.identitycodes[0].background;
    this.users = this.datas.identitycodes[0].users;
    this.requisition = this.datas.identitycodes[0].requisition;*/
    return this.datas;
    });

    var baseUser= this.restangular.all('rolesprivileges')
   
    baseUser.getList().subscribe(datas=>{
    this.roles =datas.filter(res=>res.role );

    console.log(this.roles)
    return this.roles ;
     
    });
    // var baseRole= this.restangular.all('employeeconfiguration');
    // baseRole.getList().subscribe(data=>{
    // this.rname=data.filter(res=>res.employeeroles);
    // console.log(this.rname)
    // return this.rname;
    // });

    
  



    this.form = this.formBuilder.group({
      usertype: [null, Validators],
      email: [null, Validators.required],
      firstname: [null, Validators.required],
      assignrole: [null, Validators.required],
      lastname: [null, Validators.required],
      comment: [null, Validators],
      sta: [null, Validators],
      sta1: [null, Validators]


    });
    this.form1 = this.formBuilder.group({
     
      employee: [null, Validators.required],
      user: [null, Validators.required],
      agency: [null, Validators.required],
      requ: [null, Validators.required]

    });
}
}