import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { Router} from '@angular/router';

@Component({
  selector: 'app-official',
  templateUrl: './official.component.html',
  styleUrls: ['./official.component.css']
})
export class OfficialComponent implements OnInit {

  constructor(private restangular:Restangular,private router:Router) { }

  datas;
  official;
  bunit;
/*employeecode=this.datas.employeecode;
bagency=this.datas.backgroundagency;
users=this.datas.users;
requisition=this.datas.requisition;*/
/*ecode=this.datas.employeecode;
*/
empcode;
bga;
usr;
requi;
employeecode;
backgroundagency;
users;
requisition;

fname
role
dept
doleaving
extension
yoe
empid
lname
email
rmanager
position
estatus
fax
prefix
moemp
businessunit
jtitle
doj
wtnumber
savechanges(){

	this.datas.empcode=this.empcode;
	this.datas.backgroundagency=this.bga;
  this.datas.users=this.usr;
  this.datas.requisition=this.requi;  





  

	this.datas.save().toPromise().then(res=>{
			console.log(this.datas)

	});
  this.employeecode=this.empcode;

}

cancel()
{
 this.router.navigate(['./setuproot',{outlets:{ thirdchild:['employee']}}])
}	

save()
{
  var newemp={
     employeecode:this.employeecode,
     employeeid:this.empid,
     prefix:this.prefix,
firstname:this.fname,
lastname:this.lname,
email:this.email,
role:this.role,
mode_of_employment:this.moemp,
businessunit:this.businessunit,
department:this.dept,
reporting_manager:this.rmanager,
jobtitle:this.jtitle,
position:this.position,
empstatus:this.estatus,
date_of_joining:this.doj,
date_of_leaving:this.doleaving,
experience:this.yoe,
phonenumber:this.wtnumber,
extension:this.extension,
efax  :this.fax

  }

  this.bunit.post(newemp).toPromise().then(res=>{
        this.bunit.save();
        console.log(this.bunit);
  });

this.empid="";
this.prefix="";
this.fname="";
this.lname=""
this.email=""
this.role=""
this.moemp=""
this.businessunit=""
this.dept=""
this.rmanager=""
this.jtitle=""
this.position=""
this.estatus=""
this.doj=""
this.doleaving=""
this.yoe=""
this.wtnumber=""
this.extension=""
this.fax=""


}
ngOnInit() {


 var baseUnits= this.restangular.all('identitycodes',);

 baseUnits.getList().subscribe( data=>{
   this.datas=data[0];
   console.log(this.datas)
    
this.employeecode=this.datas.empcode;
this.backgroundagency=this.datas.backgroundagency;

this.users=this.datas.users;
this.requisition=this.datas.requisition;
     return this.datas;
    });


 var baseemployee= this.restangular.all('createemployee');
  baseemployee.getList().subscribe(data=>{
   this.official=data;
    console.log(this.official)
    
     return this.official;

    });
  let baseBusiness = this.restangular.all('businessunit');
          // This will query /geo and return a observable.
          baseBusiness.getList().subscribe(data => {
          this.bunit = data;
              console.log(this.bunit)

          return this.bunit;
          
          });
 
  }

}
