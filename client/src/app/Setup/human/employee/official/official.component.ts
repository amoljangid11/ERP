import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';
import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Md2Dialog } from 'md2';
import { Router} from '@angular/router';
import {EmployeeComponent } from '../employee.component';
import {UserService } from '../../../../user.service';

@Component({
  selector: 'app-official',
  templateUrl: './official.component.html',
  styleUrls: ['./official.component.css'],

})
export class OfficialComponent implements OnInit {

  private employeecomp: EmployeeComponent
  constructor(private restangular: Restangular, private router: Router, public service: UserService,) {
    console.log("disp")
    console.log(service.editdata)
    this.service = service;
    this.usr=this
  }

  officialForm: FormGroup;
  private createForm() {
    this.officialForm = new FormGroup({
      // tslint:disable-next-line
    });
  }
  general={identitycodes:[{}]}
  baseOfficial;
  updatebutton = false;
  emp = {};
  jobobj = {};
  positions = {};
  codes = [
    { viewValue: 'Contract' },
    { viewValue: 'Deputation' },
    { viewValue: 'Full Time' },
    { viewValue: 'Left' },
    { viewValue: 'Part Time' },
    { viewValue: 'Permanent' },
    { viewValue: 'Probationary' },
    { viewValue: 'Resigned' },
    { viewValue: 'Suspended' },
    { viewValue: 'Temporary' }
  ];

  mode = [
    { viewValue: 'Direct' },
    { viewValue: 'Interview' },
    { viewValue: 'Reference' },
    { viewValue: 'Other' }
  ];




  employee = { official: [{}] };
  prefix={}


  //var create =

  datas;
  editRowId;
  ste;
  dd;
  jdatas;
  createNE = { official: { type: Object } };

  dpt;
  rname;
  man;
  pos;
  wcode;
  pre;
  bsunit;
  pays;
  job;
  da;
  empcode;
  bga;
  usr;
  requi;
  jobstit;
  wrkcode: any;
  wshortcode: any;
  workdes: any;
  employeecode;
  backgroundagency;
  users;
  requisition;
  selecttype;
  just() {
    this.emp = { id: "001", prefix: "Mr", firstname: "Adam", lastname: "J", businessunits: "RND" }

  }
  open(dialog: Md2Dialog) {
    dialog.open();

  }
  cancel() {
    console.log("dfgdfhdh")
    this.router.navigate(['./setuproot', { outlets: { thirdchild: ['employee'] } }])
  }
  close(dialog: any) {
    dialog.close();
  }

  roletype(val)
  {
    console.log(val)
    this.selecttype=val

  }
  select(i, ddt) {

    console.log(ddt)
    console.log(this.dpt)
    var dp3 = [];
    dp3 = this.dpt.filter(data => data.businessunit == ddt)
    console.log(dp3)

    this.dd = dp3;

    return this.dd;
  }

  /*select(i,dpb){

    var dp2=[];
    console.log(dpb,'jjj');
    this.db=dpb[i].businessname;
    console.log(this.db,'llllpoo');
  for(var i:any=0;i<this.dpt.length;i++){

    console.log(i)

  if(this.db==this.dpt[i].businessunit){
    console.log('jfqjkfhjasf')

  dp2.push(this.dpt[i].departmentname);

    console.log(dp2);
  }


  }
    this.dpt= dp2;

  return this.dpt;
  }*/

  save(employee) {

    console.log(employee)
    employee.official[0].code = this.employeecode;
    employee.official[0].roletype=this.selecttype;
    var service = this.service;
    var create = this.restangular.one('createemployee');
    var usrfun=this.usr
    create.official = [];

    create.official.push(employee.official[0])

    create.save().toPromise().then(function(resp) {
      console.log(resp)
      service.editfun(resp)
      usrfun.createuser(resp);
    })

  }
createuser(resp)
{
  console.log(resp)
  var create=this.restangular.one('register')
  console.log(resp.official[0].code + resp.official[0].id)
  create.employee_id=resp.official[0].code + resp.official[0].id
  create.username=resp.official[0].username
  create.email=resp.official[0].email
  create.password="welcome"
  create.employee_OId=resp._id
  console.log(create)
  create.save();
  //this.restangular.post()
}
  update(ofi) {
    this.editRowId = false;
    ofi.save();
  }

  edit(id) {
    this.editRowId = id;
  }

  delete(ofi, i) {
    ofi.remove();
    console.log(ofi)
    /*this.official.splice(i,1);*/
  }
  updateEmployee(emp) {
    emp.official[0].code = this.employeecode;
    emp.official[0].roletype=this.selecttype;
    console.log(emp.official[0].code)
    emp.save().toPromise().then(function(resp) {
      console.log(resp)

    })
  }


  saves() {
    const jts = {

      jobobj: this.jobobj

    }

    this.jdatas.post(jts).toPromise().then((res) => {
      console.log(res)
      this.jdatas.push(res);
    });

    this.jobobj = {};
  }




  saveposition(pos) {
    const obj = {
      positions: pos
    }

    this.pos.post(obj).toPromise().then((res) => {
      console.log(res)
      this.pos.push(res);

    });

    this.positions = {};
  }




  savework() {
    const es = {
      workcode: this.wrkcode,
      workshortcode: this.wshortcode,
      description: this.workdes,
    }

    this.wcode.post(es).toPromise().then((res) => {
      this.wcode.push(res);
    });


    this.wrkcode = "";
    this.wshortcode = "";
    this.workdes = "";
  }



  saveprefix(obj) {

var create=this.restangular.one('general')
create.prefixes=[]
create.prefixes.push(obj)
create.save().toPromise().then((res)=>{
  this.pre.push(res)
});
console.log(create)

this.prefix={}
  }

  savechanges(data) {
    console.log(data)
   data.save();
    /*this.datas.empcode = this.empcode;
    this.datas.backgroundagency = this.bga;
    this.datas.users = this.usr;
    this.datas.requisition = this.requi;

    this.employeecode = this.empcode;
    this.datas.save().toPromise().then(res => {
      console.log(this.datas)

    });
*/
  }


  ngOnInit() {

    this.createForm();
    console.log(this.service)
    if (this.service.editdata) {
      const key = Object.keys(this.service.editdata)
      if (key.length != 0) {
        console.log("Assign")
        this.employee = this.service.editdata;
        console.log(this.emp)
        this.updatebutton = true;

      }
    }

    var baseUnits = this.restangular.all('general', );
    console.log(baseUnits,"314")
    baseUnits.getList().subscribe(data => {
      console.log(data,"316")
      data =data.filter(res=>res.identitycodes);
      this.datas=data[0]
      console.log(this.datas,"319")
      this.general=this.datas

      this.employeecode = this.datas.identitycodes[0].employee;
      /*this.backgroundagency = this.datas.identitycodes[0].background;

      this.users = this.datas.identitycodes[0].users;
      this.requisition = this.datas.identitycodes[0].requisition;*/
      return this.datas;
    });


    this.baseOfficial = this.restangular.all('createemployee');

    this.baseOfficial.getList().subscribe(data => {
      this.createNE = data;
      console.log(this.createNE)
/*      console.log(data.filter(res=> res._id==this.id));
*/
    });
    var baseDepart = this.restangular.all('departments');
    baseDepart.getList().subscribe(data => {

      this.dpt = data;
      console.log(this.dpt)

      return this.dpt;

    });
    var baseRole= this.restangular.all('rolesprivileges');
    baseRole.getList().subscribe(data=>{
     this.rname=data;
      console.log(this.rname)

       return this.rname;

      });



    var basePosition = this.restangular.all('position');
    basePosition.getList().subscribe(data => {
      this.pos = data;

      console.log(this.pos)

      return this.pos;

    });

    var baseEmploy = this.restangular.all('employmentstatus');
    baseEmploy.getList().subscribe(data => {
      this.wcode = data;

      console.log(this.wcode)

      return this.wcode;

    });
    var basePre = this.restangular.all('general');
    basePre.getList().subscribe(data => {
      console.log(data)
      this.pre = data.filter(res=>res.prefixes);

      console.log(this.pre)

      return this.pre;

    });
    var baseBus = this.restangular.all('businessunit');
    baseBus.getList().subscribe(data => {
      this.bsunit = data;

      console.log(this.bsunit)

      return this.bsunit;

    });
    var baseJob = this.restangular.all('jobtitle');
    baseJob.getList().subscribe(data => {
      this.jdatas = data;

      console.log(this.jdatas)

      return this.jdatas;

    });
    var baseJob = this.restangular.all('payfrequency');
    baseJob.getList().subscribe(data => {
      this.pays = data;

      console.log(this.pays)

      return this.pays;

    });

  }

  ngOnDestroy() {
    /*console.log("Destroy")

  if(this.service.editdata)
           {

             const key=Object.keys(this.service.editdata)
             if(key.length!=0)
             {
             console.log(this.service.editdata)
             }
             else{
                  console.log(this.service.editdata={});
           }
           }*/


  }


}
