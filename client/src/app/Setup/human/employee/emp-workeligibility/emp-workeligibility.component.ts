import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { Md2Dialog } from 'md2';


@Component({
  selector: 'app-emp-workeligibility',
  templateUrl: './emp-workeligibility.component.html',
  styleUrls: ['./emp-workeligibility.component.css']
})
export class EmpWorkeligibilityComponent implements OnInit {

  constructor(private restangular:Restangular) { }
   document={};
   datas;
 work={};

type
authority
authoritystate
issueddate
postalcode
authoritycity
expirydate
authoritycountry
   Authority=[{name:"Country"},{name:"State"},{name:"City"}]
   open(dialog: Md2Dialog) {
    dialog.open();
  }
 
  close(dialog: any) {
    dialog.close();
  }

savedocument(dialog,data)
{
	const obj={
		documenttype:data
	}
	this.datas.post(obj).toPromise().then(res=>{
		console.log(res)
     this.datas.push(obj)
	});
	dialog.close();


}

selecttype(datas)
{
   console.log(datas)
   console.log(this.work)
}
  ngOnInit() {

  	 var baseOfficial= this.restangular.all('emp_documenttype');
    baseOfficial.getList().subscribe(data=>{
    this.datas=data;
    console.log(this.datas)
    
     return this.datas;

    });
  }

}
