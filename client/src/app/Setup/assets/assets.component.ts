import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  assetcategory(){
    this.router.navigate(['./setuproot',{outlets:{thirdchild:['assetcategory']}}])
  }
}
