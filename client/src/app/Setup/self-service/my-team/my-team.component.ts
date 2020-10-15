import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {MaterialModule} from '@angular/material' 
import { Router} from '@angular/router';
import { FormBuilder, FormGroup,FormArray,Validators, FormControl } from '@angular/forms';
import {Inject, LOCALE_ID, Pipe, PipeTransform} from '@angular/core';
import {UserService } from '../../../user.service';
import * as jsPDF from 'jspdf'
import 'jspdf-autotable';
// import * as alasql from 'alasql';
import { auto } from 'async';
import { Md2Dialog, Item } from 'md2';



@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.component.html',
  styleUrls: ['./my-team.component.css']
})
export class MyTeamComponent implements OnInit {
 
  constructor(private router:Router,private service:UserService,private restangular: Restangular,private formBuilder: FormBuilder)
  {
    this.form = this.formBuilder.group({
      });
this.group=this;
    }
 
    
show;   
group
form:FormGroup;
datas;
getuser
leavemanagement
alldata
pendingcount
team=[];
boolean= false;
team1={teamm:[{}]};
teamine={selectteam:[{}]};
job={jobtitle:[{}]}
bunit
officialdata
positions={position:[{}]};
jobobj = {};
jdatas
officiald
dunitcoll
addbutton: boolean;
posit
extdata
jobtitl:FormGroup;
positionsdata
countall=0;
selectall:any;

tea;
name;
employeeid;
email;
jobtitle;
position;
status;
obje;
objee;
newteam;
id1;
id2;
initialstatus1;
// itemList:any;
myteam:{};
itemList = [];
selectedItems = [];
settings = {};
data=[];
Empteam=[];
tm
selected;
selectedAll: any;
setting: any;
item:any;
i=0;

user = [
  { value: 'Select User Status'},
  { value: 'Inactive'},
  { value: 'Active'},
  { value: 'Resigned'},
  { value: 'Left'},
  { value: 'Suspended'},

]

open(dialog: Md2Dialog) {
  dialog.open();
  }

  close(dialog: any) {
    // this.ngOnInit();
  dialog.close();
  }

  showreport(){
    if(document.getElementById('rep').innerHTML.valueOf)
   { 
     this.show = !this.show;
    document.getElementById('rep').style.display="block";
  }
  else{
    document.getElementById('rep').style.display="none";
  }
  }


adddata(data) 
  {
    if(document.getElementById('off').innerHTML.valueOf)
    { 
      this.show = !this.show;
     document.getElementById('off').style.display="block";
   }else{
    document.getElementById('off').style.display="none";
   }

    //  this.service.editfun2(data);
     this.service.addfun2(data);
  }

  edit(data) {
    console.log(data)
    this.service.editfun(data);
  }

  view(data) {
    this.service.viewfun(data);
    }

  cancel() {

    if(document.getElementById('off').innerHTML.valueOf)
    { 
      this.show = this.show;
     document.getElementById('off').style.display="none";
   }
  
      // this.router.navigate(['./setuproot', { outlets: { thirdchild: ['empteam'] } }])
  }

  back(){
     if(document.getElementById('rep').innerHTML.valueOf)
    { 
      this.show = this.show;
     document.getElementById('rep').style.display="none";
   }
  }
 
  

 

official(){

  this.router.navigate(['./setuproot',{outlets:{thirdchild:['empteam',{outlets:{fourthchild:['official']}}]}}])

}


personal()
{
if(this.service.editdata)
       { const key=Object.keys(this.service.editdata)
         if(key.length!=0)
         { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['empteam',{outlets:{fourthchild:['personal']}}]}}])

         }
         else { 	alert("Please Add New Employee")  }
       }

}
cont()
{
if(this.service.editdata)
       { const key=Object.keys(this.service.editdata)
         if(key.length!=0)
         { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['empteam',{outlets:{fourthchild:['contact']}}]}}])

         }
         else { 	alert("Please Add New Employee")  }
       }

}
skills(){
if(this.service.editdata)
       { const key=Object.keys(this.service.editdata)
         if(key.length!=0)
         { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['empteam',{outlets:{fourthchild:['skills']}}]}}])

         }
         else { 	alert("Please Add New Employee")  }
       }

}
jobHistory(){
if(this.service.editdata)
       { const key=Object.keys(this.service.editdata)
         if(key.length!=0)
         { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['empteam',{outlets:{fourthchild:['jobhistory']}}]}}])

         }
         else { 	alert("Please Add New Employee")  }
       }

}
experience(){
if(this.service.editdata)
       { const key=Object.keys(this.service.editdata)
         if(key.length!=0)
         { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['empteam',{outlets:{fourthchild:['experience']}}]}}])

         }
         else { 	alert("Please Add New Employee")  }
       }

}
education(){
if(this.service.editdata)
       { const key=Object.keys(this.service.editdata)
         if(key.length!=0)
         { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['empteam',{outlets:{fourthchild:['education']}}]}}])

         }
         else { 	alert("Please Add New Employee")  }
       }

}
trcer(){
	if(this.service.editdata)
         { const key=Object.keys(this.service.editdata)
           if(key.length!=0)
           { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['empteam',{outlets:{fourthchild:['trainingcertification']}}]}}])

           }
           else { 	alert("Please Add New Employee")  }
         }

}


adetails(){
if(this.service.editdata)
       { const key=Object.keys(this.service.editdata)
         if(key.length!=0)
         { 	  this.router.navigate(['./setuproot',{outlets:{thirdchild:['empteam',{outlets:{fourthchild:['additionaldetails']}}]}}])

         }
         else { 	alert("Please Add New Employee")  }
       }

}

offemp
source
margins
specialElementHandlers


 downloadPDF() {
  var pdf = new jsPDF('p', 'pt', 'letter');
 
  this.source = $('#customers')[0];

  
  this.specialElementHandlers = {
      
      '#bypassme': function (element, renderer) {
         
          return true
      }
  };
  this.margins = {
      top:10,
      width:'auto'
  };
  
  pdf.fromHTML(
  this.source, 
  this.margins.left, 
  this.margins.top, { 
      'width': this.margins.width, 
      'elementHandlers': this.specialElementHandlers
  },


  function (dispose) {
      pdf.save('EmployeeReport.pdf');
  }
  )}


downloadExcel(table, employeedata){
  let uri = 'data:application/vnd.ms-excel;base64,'
  , template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--><meta http-equiv="content-type" content="text/plain; charset=UTF-8"/></head><body><table>{table}</table></body></html>'
  , base64 = function(s) { return window.btoa(decodeURIComponent(encodeURIComponent(s))) }
  , format = function(s,c) { return s.replace(/{(\w+)}/g, function(m, p) { return c[p]; }) }
  if (!table.nodeType) table = document.getElementById(table)
  var ctx = {worksheet: name || 'Worksheet', table: table.innerHTML}
  window.location.href = uri + base64(format(template, ctx))
  }

  
  savedata
  // checked() {
  //   console.log("Item : "+this.itemList)
  //   return this.itemList.filter(item => { this.savedata = item.checked
  //     //  this.savedata.save();
  //      return item.checked;
  //   });    
  //   }

update(config){
  config.save().toPromise().then(function(resp) {
  console.log(resp)
 })
this.job={jobtitle:[{}]}
}



offici
start()
{
var obje=this.officialdata.find(obj => obj.official[0].role == 'Manager' && this.getuser.utype=="Manager")
var id =obje._id;
  console.log("hhhhhhhhhhhhhhhh"+id)
this.getuser=JSON.parse(localStorage.getItem('user'));
console.log(this.getuser)
// var id="5a704cb4ca8b97227478b4a9"
if(this.getuser.employee_OId && this.getuser.employee_OId!=''){
  this.restangular.all('createemployee').getList({id:this.getuser.username}).subscribe(res=>{
  this.offici=res.filter(res=>res.official[0].reporting_mid ==id)
  console.log(this.offici)
  this.offici.forEach(res=>{
    this.countall++; 
   

  })
});
}
}

teamex(team){
console.log(team)
  this.tea=this.officialdata.find(obj => obj.official[0].username == this.employeeid)
  console.log("pjhhhwhdw"+this.tea)
  this.name = this.tea.official[0].firstname+' '+this.tea.official[0].lastname;
  this.email = this.tea.official[0].email;
  this.jobtitle = this.tea.official[0].jobtitle;
  this.position = this.tea.official[0].position;
  this.status = this.tea.official[0].status;
  console.log(this.name)
}

reset(){
  this.employeeid = "";
  this.name = "";
  this.email = "";
  this.jobtitle = "";
  this.position = "";
  this.status = "";
}
 
sal;
pay;
saldata;
fetchteam()
{
this.obje=this.officialdata.find(obj => obj.official[0].role == 'Manager' && this.getuser.utype=='Manager' )
this.objee=this.officialdata.filter(obj=> obj.official[0].reporting_mid == this.obje._id)
this.id1 = this.obje._id;
console.log("kkkkkkkkkkkkkkkkkkkkkkkk : "+this.obje)
console.log("kkkkkkkkkkkkkkkkkkkkkkkk : "+this.obje._id)
this.newteam = this.saldata.filter(res=>res.salary)
console.log("tttt "+this.newteam)
this.sal = this.newteam.salary[0].salary;
this.pay = this.newteam.salary[0].payfrequency;
console.log("Salary "+this.sal);
console.log("Payfreq "+this.pay);
}


cancel1(){
  document.getElementById('chkb').style.display="none";
}

  

  add;
  objj6;
  
  save(data)
{
  console.log(data)
var create=this.restangular.one('selfservice')
create.Empteam=[]
for(let i=0;i<this.selectedItems.length;i++)
{
create.Empteam.push(data.Empteam[i]);
console.log(create)
}
create.save().toPromise().then(res=> {

this.restangular.all('selfservice').getList().subscribe(data=>{
  this.datas=data.filter(res=>res.Empteam);
  if(this.datas[0])
       {console.log("edit")
         this.team=this.datas[0]
         this.add=false
       }else{
         console.log("add")
        //  data.update();
       }})
        // data.update();
 });  

}


update1(obj)
{
console.log(obj)

obj.save();
this.show = !this.show
}

// i=[];

displaybox(){
    if(document.getElementById('chkb').innerHTML.valueOf)
    {
      document.getElementById('chkb').style.display="block";
    }
    // this.i=this.selectedItems;
  }
  teammm;
  empid;ename;role;
  datass;
  objj7;


  ngOnInit() {
   

    this.getuser=JSON.parse(localStorage.getItem('user'));

    let baseOfficial= this.restangular.all('createemployee');
    baseOfficial.getList().subscribe(data => { 
    this.officialdata =data.filter(res=>res.official);
    this.start();
    this.fetchteam();
    return this.officialdata;    
    });

    let baseselfs= this.restangular.all('selfservice');
    baseselfs.getList().subscribe(data => { 
    console.log(data)
    this.datass =data.filter(res=>res.Empteam);
    console.log(this.datass);
    this.objj6=this.datass.find(obj=>obj.Empteam)
    console.log(this.objj6);
    for(this.i; this.i<=this.objj6.Empteam.length;this.i++)
    {
      console.log(this.objj6.Empteam[this.i].itemName)
      if(this.objj6.Empteam[this.i].itemName==this.itemList[this.i].itemName)
      {
        console.log("ABBBBBBBBBVVVVVVVVVVVVVMMMMMMMMMMHHHHHHHHHHH")
      }
    }
    return this.datas;    
    });

    let baseself = this.restangular.all('selfservice');
    baseself.getList().subscribe(data => {
    data = data.filter(res=>res.Empteam);
    console.log(this.team)
    this.datas=data[0]
    console.log(this.datas)
   
    if(this.datas)
    {console.log("edit1")

     this.team=data[0]
      console.log(this.team)
    }else{
      console.log("add1")
      this.add=true;
    }

    });

   

   
    let baseJob = this.restangular.all('employeeconfiguration');
    baseJob.getList().subscribe(data => {
    this.jdatas = data.filter(res=>res.jobtitle);
    return this.jdatas;
    });


    let basePosition = this.restangular.all('employeeconfiguration');
    basePosition.getList().subscribe(data => {
    this.positionsdata = data.filter(res=>res.position);
    return this.positionsdata;
    });

    
    let baseSalary = this.restangular.all('createemployee');
    baseSalary.getList().subscribe(data => {
    this.saldata = data.filter(res=>res.salary);
    return this.saldata;
    });

    var baseOfficial1 = this.restangular.all('exitprocedure');
    baseOfficial1.getList().subscribe(data => {
      this.initialstatus1 =data.filter(res=>res.initiatecheckstatus);
      console.log(this.initialstatus1)
      return this.initialstatus1;  
    });

  

  this.itemList = [
    { "id": 1, "itemName": "Employee ID"},
    { "id": 2, "itemName": "Employee" },
    { "id": 3, "itemName": "Email"},
    { "id": 4, "itemName": "Mobile"},
    { "id": 5, "itemName": "Role"},
    { "id": 6, "itemName": "Date of Joining"},
    { "id": 7, "itemName": "Mode of Employment"},
    { "id": 8, "itemName": "Job Title"},
    { "id": 9, "itemName": "Position"},
    { "id": 10, "itemName": "Business Unit"},
    { "id": 11, "itemName": "Department"},
    { "id": 12, "itemName": "Employment Status"},
    { "id": 13, "itemName": "Date of Leaving"},
    { "id": 14, "itemName": "Years of Experience"},
    { "id": 15, "itemName": "Holiday Group"},
    { "id": 16, "itemName": "Work Phone"},
    { "id": 17, "itemName": "Extension Number"},
    { "id": 18, "itemName": "Background Check Status"},
    { "id": 19, "itemName": "Mode of Entry(Other)"},
    { "id": 20, "itemName": "Pay Frequency"},
    { "id": 21, "itemName": "Salary"},
    { "id": 22, "itemName": "Referred By"},
    { "id": 23, "itemName": "User Status"},
    
  ];
  
  
  
  this.settings = {
    text: "Employees",
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    classes: "myclass inputField"
  };

  }

  onItemSelect(item: any) {
  console.log(item);
  console.log(item.itemName);
  this.selectedItems.push(item);
  console.log(this.selectedItems)
  console.log(this.selectedItems[0].itemName);
  }
  OnItemDeSelect(item: any) {
  console.log(item);
  this.selectedItems.pop()
  console.log(this.selectedItems);
  }
  onSelectAll(items: any) {
  this.selectedItems.push(items);
  console.log(items);
  }
  onDeSelectAll(items: any) {
  console.log(items);
  this.selectedItems.pop()
  }
  
  }
    
  
  // details(){
  //   this.router.navigate(['./setuproot',{outlets:{ thirdchild:['mydetails']}}])
  //  };

  
  

