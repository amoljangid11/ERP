import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-role',
  templateUrl: './employee-role.component.html',
  styleUrls: ['./employee-role.component.css']
})
export class EmployeeRoleComponent implements OnInit {

  constructor() { }
messageClass
message
edited=false;
  save()
  {
    this.edited=true;
    this.messageClass='alert alert-info ';
    this.message="Added Successfully";
    setTimeout(function() {
       this.edited = false;
       console.log(this.edited);
   }.bind(this), 1500);
  
  }
 /* nodes = [
    {
      id: 1,
      name: 'Hr',
      children: [
        { id: 2, name: 'Employee' ,children:[ { id:3,name:'employeeconfig'}, { id:4,name:'employeelev'} ]},
        { id: 5, name: 'Role' }
      ]
    },
    {
      id: 6,
      name: 'root2',
      children: [
        { id: 7, name: 'child2.1' },
        {
          id: 8,
          name: 'child2.2',
          children: [
            { id: 9, name: 'subsub' }
          ]
        }
      ]
    }
  ];
  options = [];*/
  ngOnInit() {
  }

}
