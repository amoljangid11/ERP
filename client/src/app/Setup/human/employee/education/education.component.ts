import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { Md2Dialog } from 'md2';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

educ;
educat;
open(dialog: Md2Dialog) {
    dialog.open();
  }
 
  close(dialog: any) {
    dialog.close();
}
  constructor(private restangular:Restangular) { }

  ngOnInit() {
    let baseEdu = this.restangular.all('educationlevel');

    // This will query /geo and return a observable.
    baseEdu.getList().subscribe(data => {
      this.educat = data;
     
       return this.educat;
    });
  	 
  }



}
