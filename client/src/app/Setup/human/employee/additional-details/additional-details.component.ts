 import { Component, OnInit } from '@angular/core';
 import { RestangularModule, Restangular} from 'ngx-restangular';


@Component({
  selector: 'app-additional-details',
  templateUrl: './additional-details.component.html',
  styleUrls: ['./additional-details.component.css']
})
export class AdditionalDetailsComponent implements OnInit {



  serve = [
    { viewValue: 'Yes'},
    { viewValue: 'No'}
   
];

  status = [
    { viewValue: 'Honorable'},
    { viewValue: 'Medical'}
   
];

  constructor(private restangular:Restangular) { }
country;
mil;
veteran;

  ngOnInit() {
  	  var baseCountry= this.restangular.all('countryall');
   baseCountry.getList().subscribe(data=>{
   this.country=data;

    console.log(this.country)
    
     return this.country;

    });

   var baseMilitary= this.restangular.all('militaryservice');
   baseMilitary.getList().subscribe(data=>{
   this.mil=data;

    console.log(this.mil)
    
     return this.mil;

    });

   var baseVeteran= this.restangular.all('veteran');
   baseVeteran.getList().subscribe(data=>{
   this.veteran=data;

    console.log(this.veteran)
    
     return this.veteran;

    });

  }

}
