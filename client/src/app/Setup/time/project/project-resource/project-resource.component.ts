import { Component, OnInit } from '@angular/core';
import {UserService } from '../../../../user.service';
import { Router} from '@angular/router';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { Md2Dialog } from 'md2';
@Component({
  selector: 'app-project-resource',
  templateUrl: './project-resource.component.html',
  styleUrls: ['./project-resource.component.css']
})
export class ProjectResourceComponent implements OnInit {

  constructor(private userservice:UserService,private restangular: Restangular,private router:Router) { }
pro;
res;

open(dialog: Md2Dialog) {
dialog.open();
}

close(dialog: any) {
dialog.close();
}

rol = [
    {viewValue: 'All'},
    {viewValue: 'Employee'},
    {viewValue: 'Manager'}
  ];
 project_time(){
  this.router.navigate(['./time',{outlets:{timechild:['project_time']}}])
}
  ngOnInit() {
  }

}
