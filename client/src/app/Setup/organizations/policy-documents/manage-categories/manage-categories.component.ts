 import { Component, OnInit } from '@angular/core';
 import { RestangularModule, Restangular} from 'ngx-restangular';
 import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-manage-categories',
  templateUrl: './manage-categories.component.html',
  styleUrls: ['./manage-categories.component.css']
})
export class ManageCategoriesComponent implements OnInit {


  open(dialog: Md2Dialog) {
    dialog.open();
  }
 
  close(dialog: any) {
    dialog.close();
  }
 


constructor(private restangular:Restangular) { 
 this.manages=this 
}

manages
category;
policy;
document={policydocument:[{}]}
editRowId;
manage={managecategory:[{}]}
updatebutton = false;


categories:any;
catdes:any;

messageClass
message
edited=false;


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
  var msg=this.manages
  var create=this.restangular.one('organizations')
  create.managecategory=[]
  create.managecategory.push(obj.managecategory[0])
  create.save().toPromise().then(res=>{
   console.log(res)
   this.restangular.all('organizations').getList()
                   .subscribe(data=>{this.category=data.filter(res=>res.managecategory)})
   
   msg.savemsg('Added Succesfully','alert alert-info');
  })

  this.manage={managecategory:[{}]}

}

saves(obj){

console.log(obj)
var create=this.restangular.one('organizations')
create.policydocument=[]
create.policydocument.push(obj.policydocument[0])
create.save().toPromise().then(res=>{
 console.log(res)
this.restangular.all('organizations').getList()
                 .subscribe(data=>{this.policy=data.filter(res=>res.policydocument)})

})

this.document={policydocument:[{}]}

}


delete(cat,i){
  var delmsg=this.manages
  cat.remove().toPromise().then(function(resp,err) {
  console.log(resp)
  })
  this.category.splice(i,1)
  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
}

cancel(){
  this.manage={managecategory:[{}]}
}

edit(cat) {
  this.updatebutton = true;
  this.manage= cat
}

savechanges(){
  const ts={
  categoryname:this.categories,
  description:this.catdes,
  }
  this.category.post(ts).toPromise().then((res)=> {
  this.category.push(res);
  });
  this.categories="";
  this.catdes="";

}


Updatecategory(mcategory)
{
  mcategory.save().toPromise().then(function(resp) {
   console.log(resp)
  })
  this.manage={managecategory:[{}]}
   
}

ngOnInit() {
    
  let baseManage = this.restangular.all('organizations');
  baseManage.getList().subscribe(data => {
  this.category =data.filter(res=>res.managecategory);
  console.log(this.category)

  return this.category;
  });
  let basePolicy = this.restangular.all('organizations');
  basePolicy.getList().subscribe(data => {
  this.policy =data.filter(res=>res.managecategory);
  console.log(this.policy)

  return this.policy;
  });
  }

}
