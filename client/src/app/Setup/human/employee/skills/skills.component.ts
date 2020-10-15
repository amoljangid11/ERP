import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

editRowId;
skills;
comp;



  constructor(private restangular:Restangular) { }

  ngOnInit() {
  	let baseLevel = this.restangular.all('competency');

    // This will query /geo and return a observable.
    baseLevel.getList().subscribe(data => {
      this.comp = data;
     
       return this.comp;
    });
  }

} 
