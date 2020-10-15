import { Component, OnInit } from '@angular/core';
import { Md2Dialog } from 'md2';
import { RestangularModule, Restangular} from 'ngx-restangular';

@Component({
  selector: 'app-holidays',
  templateUrl: './holidays.component.html',
  styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent implements OnInit {


group:any;
gname:any;
groups:any;
hdes:any;
hgroup;
datas;

save(){
const manage={
  
  groupname:this.gname,
 
}

this.datas.post(manage).toPromise().then((res)=> {
this.datas.push(res);
});

this.gname="";

}

savegroup(){
const grps={
 
  groupname:this.groups,
  description:this.hdes,
 }

this.hgroup.post(grps).toPromise().then((res)=> {
this.hgroup.push(res);
});

this.groups="";
this.hdes="";
}

constructor(private restangular: Restangular) { }

open(dialog: Md2Dialog) {
dialog.open();
}

close(dialog: any) {
dialog.close();
}

  ngOnInit() {

 let baseM = this.restangular.all('manageholiday');

    // This will query and return a observable.
    baseM.getList().subscribe(data => {
      this.datas = data;
     
       return this.datas;
    });
let baseH = this.restangular.all('holidaygroup');

    // This will query  and return a observable.
    baseH.getList().subscribe(data => {
      this.hgroup = data;
     
       return this.hgroup;
    });

  }

}
