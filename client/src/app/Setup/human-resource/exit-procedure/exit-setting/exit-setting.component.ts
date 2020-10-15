import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../../user.service';
import { FromObservable } from 'rxjs/observable/FromObservable';
import { FromEventPatternObservable } from 'rxjs/observable/FromEventPatternObservable';
// import { FormGroup, FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-exit-setting',
  templateUrl: './exit-setting.component.html',
  styleUrls: ['./exit-setting.component.css']
})
export class ExitSettingComponent implements OnInit {

formControl = new FormControl('hello', Validators.required);

constructor(private restangular:Restangular,  public service: UserService,private formBuilder: FormBuilder) {  this.exit=this; this.service = service;}


officialForm: FormGroup;
form:FormGroup;
setting={exitsetting:[{}]};
roles={role:[{}]};
updatebutton = false;
exit
datas;
departunit;
bunits;
emprole
officialdata;
officialdataga;
officialdatafm;
officialdatasa;
officialdatal2;
admin = {employeeroles:[{}]};
offdata=[];
dptoptions=[];
dpt;
dd = [];

emp=false;
emmm
offic=[]
frmdsss;
trry=false;


compare(setting){
  var hrid = document.getElementById('hr')['value'];
  var syadm = document.getElementById('sa')['value'];
  var lm = document.getElementById('lm')['value'];
  if(hrid==setting){
     
  }
}

hrid(setting,i){
  console.log(i)
  setting.exitsetting[0].hr_id=i._id;
  console.log(setting)
}

l2id(setting,i){
  console.log(i)
  setting.exitsetting[0].l2_id=i._id;
  console.log(setting)
}

financeid(setting,i){
  console.log(i)
  setting.exitsetting[0].fm_id=i._id;
  console.log(setting)
}

systemAdminId(setting,i){
  console.log(i)
  setting.exitsetting[0].sa_id=i._id;
  console.log(setting)
}

generalAdminId(setting,i)
{
  console.log(i);
  setting.exitsetting[0].ga_id=i._id;
}

select(ddt,bunitobj,setting) {
  console.log(ddt)
  setting.official[0].businessunits=bunitobj._id
  console.log(setting.official[0].businessunits)
  console.log(this.setting)
  var dp3 = [];
  dp3 = this.dpt.filter(data => data.businessunit_id == bunitobj._id)
  this.dd = dp3;
}

dptoptionss;
selectdept(cou){
  console.log(cou )
  var depart=[];
  depart=this.dptoptions.filter(data =>data.department[0].businessunit == cou);
  console.log(depart)
  this.dptoptionss= depart
}

//................HR......................
selecteppp(employee){
  this.hremp=employee.official[0].firstname+ " "+employee.official[0].lastname;
  console.log(employee)
  console.log(this.hremp)
}

hremp;
selecthr(off,bu){
  console.log(off )
  console.log(bu)
  console.log(bu._id)
  var offic=[];
  offic=this.officialdata.filter(data =>data.official[0].department == bu._id && data.official[0].role == "HR" || data.official[0].role == "Hr");
  console.log(offic)
  this.offdata= offic
}

//................L2 Manager......................

selectL2(off,bu){ 
  console.log(off )
  console.log(bu)
  var offic=[];
  offic=this.officialdata.filter(data =>data.official[0].businessunits == bu._id)
  this.officialdatal2= offic
  console.log(this.officialdatal2)
  }
  filteremp(employee)
  {
   this.emmm = employee.official[0].firstname+ " "+employee.official[0].lastname;
   console.log(this.emmm)
   console.log(this.hremp)    
   if(this.emmm==this.hremp){
    this.officialdatal2 = this.officialdatal2.filter(obj=>obj.official[0].firstname+" "+obj.official[0].lastname!=this.emmm && obj.official[0].firstname+" "+obj.official[0].lastname!=this.hremp )
    return this.emmm;  
  }
  }

 // ............................System Admin......................
    emmmsa;
    
    selectSa(off,bu){
      console.log(off )
      console.log(bu)
      var offic=[];
      offic=this.officialdata.filter(data =>data.official[0].businessunits == bu._id);
      console.log(offic)
      this.officialdatasa= offic
    }

    filterempsa(employee)
    {
     this. emmmsa=employee.official[0].firstname+ " "+employee.official[0].lastname;
     console.log(this.emmm)
     console.log(this.hremp)    
      this.officialdatasa = this.officialdatal2.filter(obj=>obj.official[0].firstname+" "+obj.official[0].lastname!=this.emmm && obj.official[0].firstname+" "+obj.official[0].lastname!=this.emmm && obj.official[0].firstname+" "+obj.official[0].lastname!=this.hremp )

    }
  
  //...............................General Admin..................
  emmmga
  filteremp2(employee)
  {   
   this.emmmga = employee.official[0].firstname+" "+employee.official[0].lastname;
   console.log(this.emmmsa)
   console.log(this.emmm)
   console.log(this.hremp)     
   this.officialdataga = this.officialdatasa.filter(obj=>obj.official[0].firstname+" "+obj.official[0].lastname!=this.emmmsa && obj.official[0].firstname+" "+obj.official[0].lastname!=this.emmm  && obj.official[0].firstname+" "+obj.official[0].lastname!=this.hremp)
  }

selectGa(off,bu)
{
console.log(bu)
var offic=[];
offic=this.officialdata.filter(data =>data.official[0].businessunits == bu._id);
console.log(offic)
this.officialdataga= offic
}

//.................Finance Admin....................
  selectFm(off,bu){
    console.log(off )
    console.log(bu)
    var offic=[];
    offic=this.officialdata.filter(data =>data.official[0].businessunits == bu._id);
    console.log(offic)
    this.officialdatafm= offic
    }

  emmmfm
  filterempFm(employee)
  {
   
   this.emmmfm = employee.official[0].firstname+ " "+employee.official[0].lastname;
   console.log(this.emmmfm)
   console.log(this.emmm)
   console.log(this.hremp)     
   this.officialdatafm = this.officialdataga.filter(obj=>obj.official[0].firstname+" "+obj.official[0].lastname!=this.emmmga &&  obj.official[0].firstname+" "+obj.official[0].lastname!=this.emmmsa && obj.official[0].firstname+" "+obj.official[0].lastname!=this.emmm  && obj.official[0].firstname+" "+obj.official[0].lastname!=this.hremp)
  }



messageClass;
message;
edited=false;
savemsg(msg,msgcls)
{

  this.edited=true;
  this.messageClass=msgcls;
  this.message=msg;
  setTimeout(function() {
  this.edited = false;
  console.log(this.edited);
  }.bind(this), 1500);
}
  
msg1=false

save(anno,sstatus){
  var msg=this.exit
 
    this.msg1=false;
  var create=this.restangular.one('exitprocedure')
  create.exitsetting=[]
  create.exitsetting.push(anno.exitsetting[0])
  create.exitsetting[0].status=sstatus;
  create.save().toPromise().then(res=>{
   console.log(res)
   this.restangular.all('exitprocedure').getList()
   .subscribe(data=>{this.datas=data.filter(res=>res.exitsetting)})
   msg.savemsg('Added Succesfully','alert alert-info');
  //  document.getElementById('abc').style.display='none';
  })
  this.setting={exitsetting:[{}]}
  this.ngOnInit();
}

cancel(){
  this.setting={exitsetting:[{}]}
  this.ngOnInit();
  // document.getElementById('abc').style.display='none';
}

edit(emp) {
  this.updatebutton = true;
  this.setting = emp
}

update(exit)
{
  var msg = this.exit;
  exit.save().toPromise().then(function(resp) {
    msg.savemsg('Updated Succesfully','alert alert-info');
  console.log(resp)
  // document.getElementById('abc').style.display='none';
  })
  this.setting={exitsetting:[{}]}
  this.ngOnInit();
}

delete(ann,i){
  var msg = this.exit;
  if(confirm('Are you want to delete???')){
  ann.remove();
  console.log(ann)
  this.datas.splice(i,1);
  // document.getElementById('abc').style.display='block';
  msg.savemsg('Deleted Succesfully','alert alert-info');
  }
  else{
    this.cancel();
  }
}


ngOnInit() {
  
    let baseDepart= this.restangular.all('departments');
    baseDepart.getList().subscribe(data => {
    console.log(data)
    this.dptoptions =data.filter(res=>res.department);
    return this.dptoptions;
    });

    let baseBusiness= this.restangular.all('businessunit');
    baseBusiness.getList().subscribe(data => {
    console.log(data)
    this.bunits =data.filter(res=>res.businessunits);
    return this.bunits;
    });

    let baseExit = this.restangular.all('exitprocedure');
    baseExit.getList().subscribe(data => {
    this.datas = data.filter(res=>res.exitsetting);
    // this.abcd();
    console.log(this.datas)
    });

    let baseOfficial= this.restangular.all('createemployee');
    baseOfficial.getList().subscribe(data => { 
    this.officialdata =data.filter(res=>res.official);
    return this.officialdata;    
    });

    let baseRole= this.restangular.all('rolesprivileges');
    baseRole.getList().subscribe(data => {
      console.log(data)
    this.admin =data.filter(res=>res.role);
    return this.admin;
   });
    
    this.form = this.formBuilder.group({
      setting: [null, Validators],
      hr_manager: [null, Validators.required],
      l2_manager: [null, Validators.required],
      department: [null, Validators.required],
      businessunit: [null, Validators.required],
      period: [null,Validators.required],
      sa :[null,Validators],
      fm :[null,Validators],
      ga :[null,Validators]
      
    });
  }
}
