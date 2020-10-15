import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router} from '@angular/router';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { Md2Dialog } from 'md2';
@Component({
  selector: 'app-project-task',
  templateUrl: './project-task.component.html',
  styleUrls: ['./project-task.component.css']
})
export class ProjectTaskComponent implements OnInit {

  constructor(private restangular: Restangular,private router:Router,private http: Http) { }
tadatas;
pro;

type:any;
task:any;
check:any;
editRowId;

open(dialog: Md2Dialog) {
dialog.open();
}

close(dialog: any) {
dialog.close();
}

savetask(){
const test={
  gendercode:this.type,
  gender:this.task,
  description:this.check,
  
}

this.tadatas.post(test).toPromise().then((res)=> {
this.tadatas.push(res);
});
this.type="";
this.task="";
this.check="";
}

/*savetask(){
	const tk={
	tasksname:this.task,
	tasktype:this.type,
	checktask:this.check,  
	}

this.tadatas.post(tk).toPromise().then((resp)=> {
this.tadatas.push(resp);
});

this.task="";
this.type="";
this.check="";

}

update(pt){
this.editRowId = false;
 pt.save();
}


delete(pt,i){

  pt.remove();
  console.log(pt)
  this.pro.splice(i,1);
}
*/
  ngOnInit() {
      /*let baseClient = this.restangular.all('defaulttask');

    // This will query and return a observable.
    baseClient.getList().subscribe(data => {
      this.tadatas = data;
     
       return this.tadatas;
});

     var basePro=this.restangular.all('projects');
    basePro.getList().subscribe( sub=>{

    this.pro=sub;
    return this.pro;
 });
    */
  }
  project_time(){
  this.router.navigate(['./time',{outlets:{timechild:['project_time']}}])
}


}
