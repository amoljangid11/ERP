import { Component, OnInit } from '@angular/core';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-education-levels',
  templateUrl: './education-levels.component.html',
  styleUrls: ['./education-levels.component.css']
})
export class EducationLevelsComponent implements OnInit {

  constructor(private userservice:UserService,private restangular: Restangular,private formBuilder: FormBuilder) { 
this.levels=this
  }
  form: FormGroup;
levels
level={educationlevel:[{}]};
cors={courses:[{}]};

datas;
updates=false;

messageClass
message
edited=false;
deleted=false;

loclist=[];
locview=[];
selectedItems = [];
settings = {};

allcourse;

open(dialog: Md2Dialog) {
  dialog.open();
  }


  close(dialog: any) {
  dialog.close();
  }

  e1=true;
  v1=false;

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

save(el){
var msg=this.levels
  var create= this.restangular.one('employeeconfiguration');
  create.educationlevel=[];
  create.educationlevel.push(el.educationlevel[0])
  create.save().toPromise().then(res=>{
  console.log(res)
  this.restangular.all('employeeconfiguration').getList()
  .subscribe(data=>{this.datas=data.filter(res=>res.educationlevel)})
   
  msg.savemsg('Added Succesfully','alert alert-info');

  })
  
  this.level={educationlevel:[{}]};
  this.ngOnInit();
}
viewedulevel(level)
{
  console.log(level);
  level.educationlevel[0].educationlevel=level.educationlevel[0].educationlevel
  console.log(level.educationlevel[0].educationlevel);
  level.educationlevel[0].description=level.educationlevel[0].description
  console.log(level.educationlevel[0].description);
  this.e1=false;
  this.v1=true;
}

abc()
{
  console.log("ABC METHOD CALL")
  this.ngOnInit();
}
savecourse(a1)
{
  var msg=this.levels
  var create=this.restangular.one('employeeconfiguration');
  create.courses=[];
  create.courses.push(a1.courses[0])
  create.save().toPromise().then(res=>{
    console.log(res);
    this.restangular.all('employeeconfiguration').getList()
    .subscribe(data=>{this.datas=data.filter(res=>res.courses)})
    msg.savemsg('Added Succesfully','alert alert-info');
  })
  this.cors={courses:[{}]};
  this.ngOnInit();
}

cancel(){
  this.level={educationlevel:[{}]};
  this.ngOnInit();
}

edit(elevel){
  this.updates = true;
  this.level=  elevel
  
}

view(elevel){
  // this.updates = true;
  this.level=  elevel
  
}

update(empconfig){
	empconfig.save().toPromise().then(resp=>{
	console.log(resp)
	})
 this.level={educationlevel:[{}]};
 this.ngOnInit();
}

delete(el,i){
  if(confirm('Are you want to delete???')){
  var del=this.levels
  el.remove();
  this.datas.splice(i,1);
  del.savemsg('Deleted Succesfully','alert alert-danger');
  }
  else{
    this.cancel();
  }
    
}
multicos=[];
courseview=[];

fetch()
{
  this.multicos=[];
  this.courseview=[];
  for(let i=0;i<this.datas.length;i++)
  {
    for(let j=0;j<this.datas[i].educationlevel[0].course.length;j++)
    {
      this.multicos.push({"coursename":this.datas[i].educationlevel[0].course[j].itemName,"educationlevel":this.datas[i].educationlevel[0].educationlevel});
      // console.log(this.multiloc);
    }
  }
  console.log(this.multicos);
  console.log(this.courseview);
  var loccount=0; 
  var locstart=false;
  for(let m=0;m<this.multicos.length;m++)
  {
    for(let n=0;n<this.courseview.length;n++)
    {
      if(this.multicos[m].coursename==this.courseview[n].coursename && this.multicos[m].educationlevel==this.courseview[n].educationlevel)
      {
        console.log("Same");
        locstart=true;
      }
    }
    loccount++;
    console.log("abcdpqr")
    console.log(loccount)
    console.log(locstart)
    if(loccount==1 && locstart==false)
    {
      console.log("Not Same");
      this.courseview.push(this.multicos[m])
      console.log(this.courseview);
    }
    locstart=false;
    loccount=0;
  }

}
itemlist=[];
coslist=[];

fetch1()
{
  console.log(this.allcourse)
  for(let i=0;i<this.allcourse.length;i++)
  {
    this.itemlist.push({"id":i,"itemName":this.allcourse[i].courses[0].coursename});
    // console.log(this.itemlist);
  }
  // console.log(this.itemlist);
  var count=0; 
  var start=false;
  console.log(this.itemlist.length)
  for(let i=0;i<this.itemlist.length;i++)
  {
    for(let j=0;j<this.coslist.length;j++)
    {
      if(this.itemlist[i].itemName==this.coslist[j].itemName)
      {
        console.log("same")
        start=true;
      }
    }
    count++;
    if(count==1 && start==false)
    {
      console.log("not same")
      this.coslist.push(this.itemlist[i]); 
      console.log(this.coslist)
   } 
   start = false; 
   count = 0; 
  }
}
  ngOnInit() {
    
    let basecourse = this.restangular.all('employeeconfiguration');
    basecourse.getList().subscribe(data => {
    this.allcourse = data.filter(res=>res.courses);
    console.log(this.allcourse)
    this.fetch1();
    return this.allcourse;
    });

  	let baseEducation = this.restangular.all('employeeconfiguration');
    baseEducation.getList().subscribe(data => {
    this.datas = data.filter(res=>res.educationlevel);
    console.log(this.datas)
    console.log(this.level.educationlevel[0])
    this.fetch();
    });

  

    this.form = this.formBuilder.group({
      educationlevel: [null, Validators.required],
      courses: [null, Validators.required],
      description: [null, Validators]
    });
  
  this.settings = {
    text: "Select Courses",
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
