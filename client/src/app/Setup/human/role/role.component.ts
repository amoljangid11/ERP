import { Component, OnInit,ViewChild } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../user.service';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css'],
})


export class RoleComponent implements OnInit {


constructor(private restangular: Restangular,private service:UserService){}
roles={role:[{}]}    
roledata;   
show;
view
number
array=[{head:"one"},{head:"two"},{head:"three"}]
jsn=[
     {"name":"Hr","add":false,"edit":false,"view":false,"delete":false,
       "module":[{"sm":"Employee","add":false,"edit":false,"view":false,"delete":false},
                  {"sm":"Roles","add":false,"edit":false,"view":false,"delete":false},
                  {"sm":"Holiday","add":false,"edit":false,"view":false,"delete":false,
                    "sube":[{"name":"HolidayGroup","add":false,"edit":false,"view":false,"delete":false}]},
                  {"sm":"Leave","add":false,"edit":false,"view":false,"delete":false,
                    "sube":[{"name":"LeaveOption","add":false,"edit":false,"view":false,"delete":false}]},
                  {"sm":"Exit","add":false,"edit":false,"view":false,"delete":false,"sube":[]},
                  {"sm":"Employee-Config","add":false,"edit":false,"view":false,"delete":false,"sube":[]},
                  {"sm":"Contacts","add":false,"edit":false,"view":false,"delete":false,"sube":[]}]
      },
     {"name":"Organization","add":false,"edit":false,"view":false,"delete":false,
       "module":[{"sm":"Organization","add":false,"edit":false,"view":false,"delete":false,"sube":[]},
                 {"sm":"BusinessUnits","add":false,"edit":false,"view":false,"delete":false,"sube":[]},
                 {"sm":"Departments","add":false,"edit":false,"view":false,"delete":false,"sube":[]},
                 {"sm":"Structure","add":false,"edit":false,"view":false,"delete":false,"sube":[]},
                 {"sm":"Hierarchy","add":false,"edit":false,"view":false,"delete":false,"sube":[]},
                 {"sm":"Announcements","add":false,"edit":false,"view":false,"delete":false,"sube":[]}]
     }
    ]

toggleNumber()
{
	this.number=true;
}
selecttab(val)
{
    this.view=val;

}




  ngOnInit() {
this.service.getConfiguration().subscribe((res)=>{
	console.log(res)
	},(error) => console.log("error : " + error));

  }

}
