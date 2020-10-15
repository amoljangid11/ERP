import { Component, OnInit } from '@angular/core';
import { RestangularModule, Restangular} from 'ngx-restangular';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.css']
})
export class AnnouncementsComponent implements OnInit {

constructor(private restangular:Restangular) {
  this.announce=this
   }

announce;
datas;
departunit;
bunits;
departs;
announcements={announcement:[{}]};
updatebutton = false;
dd;
dptoptions=[];

messageClass
message
edited=false;
deleted=false;

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


save(anno,sstatus){
  var msg=this.announce
  var create=this.restangular.one('organizations')
  create.announcement=[]

  create.announcement.push(anno.announcement[0])
  create.announcement[0].status=sstatus;
  create.save().toPromise().then(res=>{
   console.log(res)
   this.restangular.all('organizations').getList()
                   .subscribe(data=>{this.datas=data.filter(res=>res.announcement)})
 
  msg.savemsg('Added Succesfully','alert alert-info');
  })
  this.announcements={announcement:[{}]};
}

delete(ann,i){
  var delmsg=this.announce
  ann.remove();
  this.datas.splice(i,1);

  delmsg.savemsg('Deleted Succesfully','alert alert-danger');
}



select(cou){
  console.log(cou )
  var depart=[];
  depart=this.departunit.filter(data =>data.department[0].businessunit == cou);
  console.log(depart)
  this.dptoptions= depart
 
}

cancel(){
  this.announcements={announcement:[{}]};
}

edit(emp) {
    this.updatebutton = true;
    this.announcements= emp
}

update(announc,sstatus)
{
  announc.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.announcements={announcement:[{}]}; 
}


ngOnInit() {

  let baseAnnoun= this.restangular.all('organizations');
  baseAnnoun.getList().subscribe(data => {
  console.log(data)
  this.datas =data.filter(res=>res.announcement);
  return this.datas;

  });
  let baseDepart= this.restangular.all('organizations');
  baseDepart.getList().subscribe(data => {
  console.log(data)
  this.departunit =data.filter(res=>res.department);
  return this.departunit;

  });
  let baseBusiness= this.restangular.all('organizations');
  baseBusiness.getList().subscribe(data => {
  console.log(data)
  this.bunits =data.filter(res=>res.businessunits);
  return this.bunits;

  });

  }

}
