import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { Md2Dialog } from 'md2';
@Component({
  selector: 'app-disabilty',
  templateUrl: './disabilty.component.html',
  styleUrls: ['./disabilty.component.css']
})
export class DisabiltyComponent implements OnInit {

  constructor(private restangular:Restangular) { 
}
datas;
disability;
other;

show;


open(dialog: Md2Dialog) {
    dialog.open();
  }
  close(dialog: any) {
    dialog.close();
  }

  selectval(data,eve){
     console.log(data)
     console.log(eve)
}
  savedisablity(dialog)
  {
  	 var obj={
  	 	disabilities:this.other
  	 }
     this.datas.post(obj).toPromise().then(res=>{
          console.log(res)
          this.datas.push(res)
          dialog.close();
     });
     
  }

  ngOnInit() {


  	var baseJob= this.restangular.all('disability');
   baseJob.getList().subscribe(data=>{
   this.datas=data;

    console.log(this.datas)
    
     return this.datas;

    });
  }

}
