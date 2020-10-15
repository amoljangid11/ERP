import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

siteprf(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['site_preference']}}])
}
gender(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['gender']}}])
}
identity_codes(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['identity_codes']}}])
}
marital(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['marital']}}])
}
ethinic(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['ethnic-code']}}])
}
country(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['countries']}}])
}
state(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['states']}}])
}
city(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['city']}}])
}
geo(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['geo']}}])
}
number(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['number-format']}}])
}

currency(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['currencies']}}])
}

conversion(){
  this.router.navigate(['./setuproot',{outlets:{thirdchild:['currency-con']}}])
}
time_zone(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['time_zone']}}])
};
prefix(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['prefix']}}])
};
 
nationality(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['nationality']}}])
};

license(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['license']}}])
};
ncontext(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['ncontext']}}])
};

account(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['account']}}])
};

email(){
  this.router.navigate(['./setuproot',{outlets:{ thirdchild:['email']}}])
};


}
