import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { Md2Dialog } from 'md2';


@Component({
  selector: 'app-trainingcertification',
  templateUrl: './trainingcertification.component.html',
  styleUrls: ['./trainingcertification.component.css']
})
export class TrainingcertificationComponent implements OnInit {

open(dialog: Md2Dialog) {
    dialog.open();
  }
 
  close(dialog: any) {
    dialog.close();
  }
  
  constructor(private restangular:Restangular) { }

  ngOnInit() {
  }

}
