import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MdInputModule} from '@angular/material';
import {MdToolbarModule,MdTooltipModule,MdSelectModule,MdAutocompleteModule} from '@angular/material';
import { Pipe, PipeTransform } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Restangular } from 'ngx-restangular';

@Component({
  selector: 'app-exit-interviewquestion',
  templateUrl: './exit-interviewquestion.component.html',
  styleUrls: ['./exit-interviewquestion.component.css']
})
export class ExitInterviewquestionComponent implements OnInit {

questionControl:any;
exittype:any;
quesdes:any;

editRowId;
datas;
inter;

save(){
const q={
	exittype:this.exittype,
	question:this.questionControl,
	description:this.quesdes,  
}

this.datas.post(q).toPromise().then((res)=> {
this.datas.push(res);
});
this.questionControl="";
this.exittype="";
this.quesdes="";
}

update(qus){
this.editRowId = false;
 qus.save();
}

edit(id){
  this.editRowId = id;
}

delete(qus,i){
  qus.remove();
  console.log(qus)
  this.datas.splice(i,1);
}

savechanges(){
const qu={
	exittype:this.exittype,
	description:this.quesdes,  
}

this.inter.post(qu).toPromise().then((res)=> {
this.inter.push(res);
});
this.exittype="";
this.quesdes="";
}

  constructor(private userservice:UserService,private restangular: Restangular) { }

  ngOnInit() {
  	let baseTime = this.restangular.all('interviewquestion');

    // This will query /geo and return a observable.
    baseTime.getList().subscribe(data => {
      this.datas = data;
     
       return this.datas;
    });


    let base = this.restangular.all('exittype');

    // This will query /geo and return a observable.
    base.getList().subscribe(data => {
      this.inter = data;
     console.log(this.inter)
       return this.inter;
    });
  }

}
