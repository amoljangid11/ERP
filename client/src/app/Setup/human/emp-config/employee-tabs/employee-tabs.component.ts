import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {MaterialModule} from '@angular/material' 

@Component({
  selector: 'app-employee-tabs',
  templateUrl: './employee-tabs.component.html',
  styleUrls: ['./employee-tabs.component.css']
})
export class EmployeeTabsComponent implements OnInit {

  constructor(private restangular:Restangular) { }

datas;
chec:boolean =true;
sel;
config: boolean = true;
checked:boolean;
indeterminate: boolean = true;
showName: boolean = true;
selectall:any;
isChecked(data)
{

console.log(data)
data.save().toPromise().then(res=>{
console.log(this.datas.length);
/*  this.datas.forEach(ele=>{
if(!ele.checked){
this.selectall=false;
}
else{
this.selectall=true;
}
});*/

});
}

save(){
}
checkAll(even){
console.log(even)
if(even.checked)
{
this.datas.forEach(ele=>{
ele.checked=true;
console.log("-------",ele.checked)
ele.save();
});

}
else{
this.datas.forEach(ele=>{
ele.checked=false;
console.log(ele.checked)
ele.save();
});
}
}

ngOnInit() {


var baseUnits= this.restangular.all('employeetabopt');
console.log(baseUnits)
baseUnits.getList().subscribe(data=>{
this.datas=data;
console.log(this.datas[2].name)
return this.datas;
});
}
}