import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,FormsModule ,ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {


  constructor() { }
loginForm: FormGroup;



private createForm() {
this.loginForm = new FormGroup({
// tslint:disable-next-line
clientname: new FormControl('', [Validators.required]),
email: new FormControl('', [Validators.required]),
poc: new FormControl('', [Validators.required])
});
}

  ngOnInit() {

this.createForm();


}

}
