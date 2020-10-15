import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';


@Component({
  selector: 'app-jobhistory',
  templateUrl: './jobhistory.component.html',
  styleUrls: ['./jobhistory.component.css']
})
export class JobhistoryComponent implements OnInit {


 
 editRowId;
 jobs;
pos;
client;
dunit;

  constructor(private restangular:Restangular) { }

  ngOnInit() {
  	 let base = this.restangular.all('jobtitle');

    // This will query /geo and return a observable.
    base.getList().subscribe(data => {
      this.jobs = data;
     console.log(this.jobs)
       return this.jobs;
    });
    	let basePosition = this.restangular.all('position');

    // This will query /geo and return a observable.
    basePosition.getList().subscribe(data => {
      this.pos = data;
     
       return this.pos;
    });

  	let baseClient = this.restangular.all('client');

    // This will query and return a observable.
    baseClient.getList().subscribe(data => {
      this.client = data;
     
       return this.client;
    });
    let baseDepartent = this.restangular.all('departments');

    // This will query /geo and return a observable.
    baseDepartent.getList().subscribe(data => {
      this.dunit = data;
     
       return this.dunit;
       
    });
  }

}
