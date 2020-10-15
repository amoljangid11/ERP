import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';

@Component({
  selector: 'app-employment-status',
  templateUrl: './employment-status.component.html',
  styleUrls: ['./employment-status.component.css']
})
export class EmploymentStatusComponent implements OnInit {

  constructor(private restangular:Restangular) { }
  
   codes=[{value:"Temporary"},{value:"Suspended"},{value:"Resigned"},{value:"Probationary"},{value:"Permanent"}
          ,{value:"Left"},{value:"Deputation"},{value:"Part Time"},{value:"Full Time"},{value:"Contract"}];
editRowId;
 wcode;
 workobj={};
 show;
save(data)
{
	console.log(data)
	this.wcode.post(data).toPromise().then((res)=>{
        this.wcode.push(res);

        
	});

}
update(g){
this.editRowId = false;
 g.save();
}

edit(id){
  this.editRowId = id;
 // g.save()
}

delete(g,i){
console.log(i)
  g.remove();
  console.log(g)
  console.log(this.wcode)
  this.wcode.splice(i,1);
}
  ngOnInit() {

  	  var baseEmploy= this.restangular.all('employmentstatus');
   baseEmploy.getList().subscribe(data=>{
   this.wcode=data;

    console.log(this.wcode)
    
     return this.wcode;

    });
  }

}
