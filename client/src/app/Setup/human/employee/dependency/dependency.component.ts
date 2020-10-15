import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { Md2Dialog } from 'md2';


@Component({
  selector: 'app-dependency',
  templateUrl: './dependency.component.html',
  styleUrls: ['./dependency.component.css']
})
export class DependencyComponent implements OnInit {

open(dialog: Md2Dialog) {
    dialog.open();
  }
 
  close(dialog: any) {
    dialog.close();
  }

rel = [
    { viewValue: 'Brother'},
    { viewValue: 'Child'},
    { viewValue: 'Ex-Spouse'},
    { viewValue: 'Father'},
    { viewValue: 'Grand Daughter'},
    { viewValue: 'Grand Father'},
    { viewValue: 'Grand Mother'},
    { viewValue: 'Grand Son'},       
    { viewValue: 'LifePartner Mother'},
    { viewValue: 'Sister'},
    { viewValue: 'Spouse'}
  ];

  custody = [
    { viewValue: 'Both Parents'},
    { viewValue: 'Former Spouse'},
    { viewValue: 'Subscriber Only'},
    { viewValue: 'Other Or Unknown'}
];

  constructor(private restangular:Restangular) { }

  ngOnInit() {
  } 

}
