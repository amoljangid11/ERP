import { Component, OnInit } from '@angular/core';
import { Restangular } from 'ngx-restangular';
import { FormGroup, FormControl, Validators,FormsModule ,ReactiveFormsModule} from '@angular/forms';
@Component({
selector: 'app-default-tasks',
templateUrl: './default-tasks.component.html',
styleUrls: ['./default-tasks.component.css']
})
export class DefaultTasksComponent implements OnInit {
constructor(private restangular:Restangular,) { }
task;
tasks={};
datas;
show=false;
editRowId=false;
loginForm: FormGroup;



private createForm() {
this.loginForm = new FormGroup({
// tslint:disable-next-line
tname: new FormControl('', [Validators.required]),
});
}



public login() {
console.log(this.loginForm.value);
}



save(task)
{
	task.status=false;
this.dtasks.post(task).toPromise().then(res=>{
this.dtasks.push(res);
});

task={}
}





delete(d,i): void
{
console.log('inside remove and id = ' + i);

d.remove();
this.ngOnInit();
this.task.splice(i, 1);
console.log(this.task)

}

toggle(id)
{
this.editRowId = id;
}


edit(id)
{
this.editRowId=id;
}


update(d)
{
this.editRowId=false;
console.log(d)
d.save();
}

dtasks;

ngOnInit() {
this.createForm();
var baseDetail= this.restangular.all('defaulttask');
baseDetail.getList().subscribe(data=>{
	
this.dtasks=data
console.log(this.dtasks)

return this.dtasks;
});
}
}