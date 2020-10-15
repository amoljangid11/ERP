import { Component, OnInit,ElementRef } from '@angular/core';
import {BrowserModule, DomSanitizer,SafeResourceUrl} from '@angular/platform-browser'
import { FileUploader } from 'ng2-file-upload';import { Http, Response } from '@angular/http';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../../user.service';
import { Md2Dialog } from 'md2';

const URL = 'http://localhost:4200';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],

})
export class DocumentsComponent implements OnInit {
public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

constructor(private http: Http, private el: ElementRef,private restangular:Restangular,private service:UserService) 
{
       this.service = service;
 }

employee={documents:[]}
show=true;
imageSrc
loaded
docname
modelview
pdfSrc=[];
imageArr=[];
view(val)
{
  console.log(val)
}
open1(){
    this.show=false;
}

imgfv(e)
{
  var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
  console.log(e)
  console.log(this)

  var reader = new FileReader();
  console.log(reader)
   reader.onload = this._handleReaderLoaded.bind(this);
   reader.readAsDataURL(file);
}
 _handleReaderLoaded(e) {
  console.log(e)
        var reader = e.target;
        this.imageSrc = this.modelview
        console.log(this.imageSrc)
           this.loaded = true;
        
    }

open(dialog: Md2Dialog) {
    dialog.open();

  }
close(dialog: any) {
    dialog.close();
  }
save(val)
{
  console.log(val)
 // this.pdfSrc.push({data:this.imageSrc,name:this.docname})
  var newfr=this.restangular.one('grid')
  var create=this.service.editdata
  console.log(newfr);
  
      newfr.file=[]
      var obj={name:"",data:{},contentType:"",parent:{}} 
      obj.name=this.docname
      obj.data=this.imageSrc
      obj.contentType="application/pdf"
      obj.parent={'metadata.user_id': 1}

      newfr.file.push(obj)

      newfr.save().toPromise().then(res=>{
        console.log(res)

        console.log(create)
        let obj={document_name:"",document_id:""}
        if(create.documents){
          
          obj.document_name=res.file.filename
          obj.document_id=res.file._id
          create.documents.push(obj)

          create.save().toPromise().then(resp=>{
            console.log(resp)
            })
        } else{
          
          obj.document_name=res.file.filename
          obj.document_id=res.file._id
          create.documents=[];
          create.documents.push(obj)

          create.save().toPromise().then(resp=>{
            console.log(resp)
            })

        }

        })
  console.log(this.pdfSrc)
  this.docname="";
}
handleFileSelect(){
  var l=document.getElementById('fileinput')
  console.log(l)

  
}
cancel(){
	this.show=true;
}
clickpdf(val)
{
 
  this.modelview=val.toString()
  console.log(this.modelview)
}
findImage(datas)
{
  var img=[] 
  var doc=this.restangular.all('grid')
  datas.documents.forEach(resp =>{
    console.log(resp)
    
    doc.get(resp.document_id).subscribe(function(res){
    console.log(res)
    img.push(res)
    console.log(img)
    })
        
    })
    return img
}

ngOnInit() {

if (this.service.editdata) {
      const key = Object.keys(this.service.editdata)
      if (key.length != 0) {
        console.log("Assign")
        this.employee = this.service.editdata;
        console.log(this.employee)
        if(this.service.editdata.documents){
          this.imageArr=this.findImage(this.service.editdata);
          console.log(this.imageArr)
        }
        //this.updatebutton = true;

      }
    }
  

   //Dms.one( $rootScope.modelpage_screen.screenref[0]._id).get().then(function(resp1) {
  
  }

}

 /* upload()
  {
    console.log("upload")
  }
     

imgfv(e)
{
  var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
  console.log(e)
  console.log(this)
  var reader = new FileReader();
   reader.onload = this._handleReaderLoaded.bind(this);
   reader.readAsDataURL(file);
}
 _handleReaderLoaded(e) {
  console.log(e)
        var reader = e.target;
        this.imageSrc = reader.result;
        console.log(this.imageSrc)
           this.loaded = true;
        
    }*/