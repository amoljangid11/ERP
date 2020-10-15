import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../user.service';
import { FromObservable } from 'rxjs/observable/FromObservable';
import { FromEventPatternObservable } from 'rxjs/observable/FromEventPatternObservable';
import { Md2Dialog } from 'md2';
@Component({
  selector: 'app-myincident',
  templateUrl: './myincident.component.html',
  styleUrls: ['./myincident.component.css']
})
export class MyincidentComponent implements OnInit {

  constructor(private restangular:Restangular,  public service: UserService,private formBuilder: FormBuilder) { }
  form: FormGroup;
  raise={raiseincident:[{}]}
  updatebutton = false;
  edited=false;
  datas;
  formControl = new FormControl('hello', Validators.required);
  open(dialog: Md2Dialog) {
    dialog.open();
    }
  
  
    close(dialog: any) {
    dialog.close();
    }
    edit(emp) {
      this.updatebutton = true;
      this.raise= emp
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
