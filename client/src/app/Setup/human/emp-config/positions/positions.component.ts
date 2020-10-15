import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-positions',
  templateUrl: './positions.component.html',
  styleUrls: ['./positions.component.css']
})
export class PositionsComponent implements OnInit {

  constructor(private restangular:Restangular) { }

positionsdata;
positions={};
jobobj={};
jdatas;
paydata;
editRowId;


open(dialog: Md2Dialog) {
    dialog.open();
  }
  close(dialog: any) {
    dialog.close();
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
  console.log(this.positionsdata)
  this.positionsdata.splice(i,1);
}
savejobtitle(obj){
const data={

  jobobj:obj

}

this.jdatas.post(data).toPromise().then((res)=> {
  console.log(res)
this.jdatas.push(res);
});

this.jobobj={};
}


saveposition(pos){
const data={
  positions:pos
}

this.positionsdata.post(data).toPromise().then((res)=> {
  console.log(res.positions)
this.positionsdata.push(res);

});

this.positions={};
}

  ngOnInit() {

  var basePosition= this.restangular.all('position');
  basePosition.getList().subscribe(data=>{
   this.positionsdata=data;

    console.log(this.positionsdata)
    
     return this.positionsdata;

    });

   var baseJob= this.restangular.all('jobtitle');
   baseJob.getList().subscribe(data=>{
   this.jdatas=data;

    console.log(this.jdatas)
    
     return this.jdatas;

    });

   var baseJob= this.restangular.all('payfrequency');
   baseJob.getList().subscribe(data=>{
   this.paydata=data;

    console.log(this.paydata)
    
     return this.paydata;

    });
  }

}
