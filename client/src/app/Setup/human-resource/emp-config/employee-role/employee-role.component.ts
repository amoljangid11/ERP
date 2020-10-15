import { Component, OnInit } from '@angular/core';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Md2Dialog } from 'md2';


@Component({
  selector: 'app-employee-role',
  templateUrl: './employee-role.component.html',
  styleUrls: ['./employee-role.component.css']
})
export class EmployeeRoleComponent implements OnInit {

constructor(private restangular:Restangular,private formBuilder: FormBuilder) { 
this.emprole=this
}
form: FormGroup;

emprole;
datas;
employee={employeeroles:[{}]}
updates=false;

messageClass
message
edited=false;
deleted=false;

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

save(obj)
{

  var create= this.restangular.one('employeeconfiguration');
  var msg=this.emprole;
  create.employeeroles=[];
  create.employeeroles.push(obj.employeeroles[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('employeeconfiguration').getList()
                 .subscribe(data=>{this.datas=data.filter(res=>res.employeeroles)})

   msg.savemsg('Added Succesfully','alert alert-info');
  })
  this.employee={employeeroles:[{}]}
  }
  
delete(erole,i){
  if(confirm('Are you want to delete???')){
  var delmsg=this.emprole;
  erole.remove().toPromise().then(function(resp,err) {
  console.log(resp)
  })
  this.datas.splice(i,1);

   delmsg.savemsg('Deleted Succesfully','alert alert-danger');
}
else{
  this.cancel();
}
}


cancel(){ 
  this.employee={employeeroles:[{}]}  
  this.ngOnInit();
}

edit(erole){
  this.updates=true;
  this.employee=erole;
}

view(erole){
  // this.updates=true;
  this.employee=erole;
}

update(roles){
   roles.save().toPromise().then(function(resp) {
   console.log(resp)
   })
  this.employee={employeeroles:[{}]}
}



 /* nodes = [
    {
      id: 1,
      name: 'Hr',
      children: [
        { id: 2, name: 'Employee' ,children:[ { id:3,name:'employeeconfig'}, { id:4,name:'employeelev'} ]},
        { id: 5, name: 'Role' }
      ]
    },
    {
      id: 6,
      name: 'root2',
      children: [
        { id: 7, name: 'child2.1' },
        {
          id: 8,
          name: 'child2.2',
          children: [
            { id: 9, name: 'subsub' }
          ]
        }
      ]
    }
  ];
  options = [];*/

  ngOnInit() {

    let baseRole = this.restangular.all('employeeconfiguration');
    baseRole.getList().subscribe(data => {
    this.datas = data.filter(res=>res.employeeroles);
    console.log(this.datas)
    });
   
    this.form = this.formBuilder.group({
      rolename: [null, Validators.required],
      description: [null, Validators]
    });

  }

}
