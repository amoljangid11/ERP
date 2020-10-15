import { Component, OnInit } from '@angular/core';
import {FormControl, Validators } from '@angular/forms';
import {MdChipsModule } from '@angular/material';
import {UserService } from '../../../user.service';
import {Restangular} from 'ngx-restangular';
import {Pipe, PipeTransform } from '@angular/core';
import { data } from 'jquery';
@Pipe ({
  name: 'filter'
})
@Component({
  selector: 'app-selfappraisal',
  templateUrl: './selfappraisal.component.html',
  styleUrls: ['./selfappraisal.component.css']
})
export class SelfAppraisalComponent implements OnInit {
  formControl = new FormControl('hello', Validators.required);

  constructor(private userservice: UserService, private restangular: Restangular) {
    this.group = this;
   }
   group;
   selfappraisal = {selfappraisals: [{}]}
   datas;
   dataset;
   updatebutton = false;
   updates=false;
   selfappraisals=[];

   messageClass;
   message;
   deleted=false;
   edited=false;
   savemsg(msg,msgcls) {
     this.edited=true;
     this.messageClass=msgcls;
     this.message=msg;
     setTimeout(function(){
       this.edited=false
       console.log(this.edited)
     }.bind(this),1500)

   }
   save(obj) {
     var msg = this.group
     var create = this.restangular.one('appraisal')
     create.selfappraisals=[]
     create.selfappraisals.push(obj.selfappraisals[0])
     create.save().toPromise().then(res=>{
       console.log(res)
       this.restangular.all('appraisal').getList().subsribe(data=>{this.dataset=data.filter(res=>res.selfappraisals)})
       console.log(this.dataset)
       msg.savemsg('Added Successfully', 'alert alert-info')
     })
     this.selfappraisal = {selfappraisals:[{}]}
   }
   edit(que){
     this.updatebutton = true
     this.selfappraisal = que
   }
   update(qtype){
     qtype.save().toPromise().then(function(resp){
       console.log(resp)
     })
     this.selfappraisal = {selfappraisals:[{}]}
   }
   cancel(){
     this.selfappraisal = {selfappraisals:[{}]}

   }
   delete(qt,i){
     var delmsg = this.group
     qt.remove().toPromise().then(function(resp,err){
       console.log(resp)
     })
     this.dataset.splice(i,1)
     delmsg.savemsg('Deleted Successfully', 'alert alert-danger')
   }


  ngOnInit() {
    let baseSelfAppraisal = this.restangular.all('appraisal')
    baseSelfAppraisal.getList().subsribe(data => {
      this.datas = data.filter(res => res.datas)
      return this.datas
    })
  }

}