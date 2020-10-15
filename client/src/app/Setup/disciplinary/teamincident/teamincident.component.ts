import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../user.service';
import { FromObservable } from 'rxjs/observable/FromObservable';
import { FromEventPatternObservable } from 'rxjs/observable/FromEventPatternObservable';
import { Md2Dialog } from 'md2';
@Component({
  selector: 'app-teamincident',
  templateUrl: './teamincident.component.html',
  styleUrls: ['./teamincident.component.css']
})
export class TeamincidentComponent implements OnInit {

  constructor(private restangular:Restangular,  public service: UserService,private formBuilder: FormBuilder) { }
  form: FormGroup;
  raise={raiseincident:[{}]}
  datas
  formControl = new FormControl('hello', Validators.required);

open(dialog: Md2Dialog) {
  dialog.open();
  }


  close(dialog: any) {
  dialog.close();
  }
  view(emp) {
    // this.updatebutton = true;
    this.raise= emp
  }
  ngOnInit() {
    let baseQUS = this.restangular.all('disciplinary');
  baseQUS.getList().subscribe(data => {
  this.datas =data.filter(res=>res.raiseincident);
  console.log(this.datas)
  return this.datas;
  });
  }

}
