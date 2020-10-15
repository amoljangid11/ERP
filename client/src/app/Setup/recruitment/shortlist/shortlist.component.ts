import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../user.service';
import { DatePipe } from '@angular/common';
import {Router} from '@angular/router';
@Component({
  selector: 'app-shortlist',
  templateUrl: './shortlist.component.html',
  styleUrls: ['./shortlist.component.css'],
  providers:[DatePipe]
})
export class ShortlistComponent implements OnInit {

  constructor(private restangular:Restangular, public datepipe:DatePipe, public service: UserService,private formBuilder: FormBuilder, private router:Router) 
  {this.group=this;}
  group;

  alldata=[];
  recruitmentmanagement=[];


  getuser;
  openarr;
  openarr1;
  updatebutton = false;
  candidate={candidates:[{}]};
  inter={interviews:[{}]};
  status=[
    {value:"Selected"},
    {value:"Rejected"}
  ];
  allcand=0
  shortlistcand=0;
  selectcand=0;
  rejectcand=0;
  datas1;
  datas2;
  datas3;
  datas;
  datass;
  datass1;
  i=0;
  form: FormGroup;
  roundno; 
  arr=[];
findno(e)
{
  console.log(e)
  console.log(e[0])
  console.log(this.inter)
  for(let n=0;n<this.inter.interviews.length;n++)
  {
    
    if(n==e[0])
    {
      this.roundno=this.inter.interviews[e[0]]
      // this.roundno= [this.inter.interviews[e[0]]]
      console.log(this.roundno)
      // return this.roundno;
    }
    // this.roundno=(this.inter.interviews.filter(obj=>n==e[0]))
    // console.log(this.roundno)

  }
}
  clickall(text)
  {
    var array=[]
    if('All'==text)
    {
      console.log(text)
      this.datas=this.alldata.filter(obj=>obj.candidates)
      console.log(this.datas)
      for(let i=0;i<this.datas.length;i++)
      {
        this.datass=this.datas.filter(obj=>obj.candidates[0].status=="Shortlisted" || obj.candidates[0].status=="Selected" || obj.candidates[0].status=="Rejected")
        console.log(this.datass)
      }
      this.datass.forEach(resp=>{
      array.push(resp)
      console.log(array)
     })  
   }
   else
   {
      // this.alldata.forEach(resp=>{
      //   console.log(resp)
      this.datas=this.alldata.filter(obj=>obj.candidates)
      console.log(this.datas)
      for(let i=0;i<this.datas.length;i++)
      {
        this.datass=this.datas.filter(obj=>obj.candidates[0].status=="Shortlisted" || obj.candidates[0].status=="Selected" || obj.candidates[0].status=="Rejected")
       
        console.log(this.datass)
      }
      this.datass.forEach(resp=>{
          console.log(resp)
      if(resp.candidates[0].status==text)
      {
     
        array.push(resp)
        console.log(array)
      }
  
     })
    }
   return this.recruitmentmanagement=array;  
  }

  start()
  {
    this.getuser=JSON.parse(localStorage.getItem('user'));
  console.log(this.getuser)
  // var id="5a704cb4ca8b97227478b4a9"
  if(this.getuser.employee_OId && this.getuser.employee_OId!=''){
    this.restangular.all('recruitment').getList().subscribe(res=>{
    this.alldata=res;
  console.log(this.alldata)
 
      this.datas=this.alldata.filter(obj=>obj.candidates)
      console.log(this.datas)
      this.datas.forEach(data=>{
        console.log(data)

      if(data.candidates[0].status=="Shortlisted" || data.candidates[0].status=="Selected" || data.candidates[0].status=="Rejected")
      {
        this.recruitmentmanagement.push(data)
        console.log(this.recruitmentmanagement)
        this.allcand++;
      }
      if(data.candidates[0].status=="Shortlisted")
      {  

        this.shortlistcand++ 
      }
       if(data.candidates[0].status=="Selected")
       {  

        this.selectcand++ 
      }
        if(data.candidates[0].status=="Rejected")
       { 

        this.rejectcand++   
      }
    })

  });
  }
  
  }

  shortlistedcandidate()
  {
    this.openarr1=this.openarr.filter(obj=>obj.candidates[0].status=='Shortlisted')
    console.log(this.openarr1)
  }
  edit(emp) {
    this.updatebutton = true;
    this.candidate= emp
    console.log(this.candidate)
    this.inter= emp
    console.log(this.inter)
    console.log(this.inter.interviews.length)
    
    for(let q=0;q<this.inter.interviews.length;q++)
    {
     this.arr.push([q])
     console.log(this.arr)
     this.roundno='';
    }
  }
  viewbutton=false;
  moe;

  view(emp,i) {
    this.moe=true;
    this.viewbutton = true;
    this.candidate=emp
    this.inter= emp
    console.log(this.inter)
    this.i=i;

    for(let q=0;q<this.inter.interviews.length;q++)
    {
     this.arr.push([q])
     console.log(this.arr)
     this.roundno='';
    }
  }
  
  cancel(){
    this.moe=false;
  this.candidate={candidates:[{}]};
  this.ngOnInit();
  }
  update(etype)
{
 etype.save().toPromise().then(function(resp) {
  console.log(resp)
  })
  this.candidate={candidates:[{}]};
}

link()
{
  this.router.navigate(['./setuproot', { outlets: { thirdchild: ['employee'] } }])
}

  ngOnInit() {
    this.start();
    this.getuser=JSON.parse(localStorage.getItem('user'));
    console.log(this.getuser)

    let baserec = this.restangular.all('recruitment');
    baserec.getList().subscribe(data => {
    this.openarr = data.filter(res=>res.candidates);
    console.log(this.openarr)
   
    return this.openarr;  
    });

    this.form = this.formBuilder.group({
      status: [null, Validators.required]
    });
  }

}
