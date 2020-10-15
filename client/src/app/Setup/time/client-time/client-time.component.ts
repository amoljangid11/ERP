import { Component, OnInit } from '@angular/core';
import {UserService } from '../../../user.service';
import { Restangular } from 'ngx-restangular';
import { FormControl,ReactiveFormsModule} from '@angular/forms';
import { Editor } from 'primeng/primeng';


@Component({
  selector: 'app-client-time',
  templateUrl: './client-time.component.html',
  styleUrls: ['./client-time.component.css']
})
export class ClientTimeComponent implements OnInit {
constructor(private userservice:UserService,private restangular: Restangular) { 
  
 }
email:any;
address:any;
phone_num:any;
country1:any;
state1:any;
contact:any;
show=false;
ste;
statearry;
client={clients:[{}]};
messageClass
message
deleted = false;
edited=false;

datas;
datas1;
datas2;
cli;
editRowId;





select(){

  var state3=[];
  state3=this.datas1.filter(data=> data.countryallid===this.country1)
  console.log(state3,'jjj');
  /*this.ste=dt[i].countryvalue;
  console.log(this.ste,'llllpoo');
for(var i:any=0;i<this.datas1.length;i++){

  console.log(i)

if(this.ste==this.datas1[i].countryallid){
  console.log('jfqjkfhjasf')

state3.push(this.datas1[i].statename);

  console.log(state3);
}

 
}*/
  this.statearry= state3;

return this.statearry;
}
// save(){
// const cs={
// 	clientname:this.client,
// 	cemail:this.email,
// 	caddress:this.address,  
// 	Phone_number:this.phone_num,
// 	country:this.country1,
// 	state:this.state1,  
// 	Point_of_contact:this.contact,  
// }

// this.cli.post(cs).toPromise().then((resp)=> {
// this.cli.push(resp);
// });


// this.client="";
// this.email="";
// this.address="";
// this.phone_num="";
// this.country1="";
// this.state1="";
// this.contact="";

// }

save(data)
{
  var create= this.restangular.one('client');
  create.clients=[];
  create.clients.push(data.clients[0])
  create.save().toPromise().then(res=>{
  console.log(res)
    this.restangular.all('client').getList()
    .subscribe(data=>{this.datas=data.filter(res=>res.clients)})
      this.edited=true;
      this.messageClass='alert alert-info ';
      this.message="Added Successfully";
      setTimeout(function() {
        this.edited = false;
        console.log(this.edited);
      }.bind(this), 1500);
      })
  this.client={clients:[{}]};
  this.ngOnInit();
}
 
update(cl){
this.editRowId = false;
 cl.save();
}

edit(id){
  this.editRowId = id;
}

delete(cl,i){
  cl.remove();
  this.ngOnInit();
  this.cli.splice(i,1);


}

  

  ngOnInit() {

  	let baseClient = this.restangular.all('client');
    // This will query and return a observable.
    baseClient.getList().subscribe(data => {
    this.cli = data;
    return this.cli;
    });

    var sat=this.restangular.all('countryall');
sat.getList().subscribe(data=>{

  this.datas=data; 
});
 
/* var sats=this.restangular.all('states');
 sats.getList().subscribe(data=>{
this.datas2=data;
console.log(this.datas2,'aaaaaa')
 })
*/
var sat_al=this.restangular.all('stateall');
sat_al.getList().subscribe( data1=>{

this.datas1=data1;
console.log(this.datas1,'aaaaaa')
})


return this.datas1;

  
  }

}
