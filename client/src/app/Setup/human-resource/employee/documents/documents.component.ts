import { Component, OnInit,ElementRef } from '@angular/core';
import {BrowserModule, DomSanitizer,SafeResourceUrl} from '@angular/platform-browser'
import { FileUploader } from 'ng2-file-upload';
import { Http, Response } from '@angular/http';
import { RestangularModule, Restangular} from 'ngx-restangular';
import {UserService } from '../../../../user.service';
import { Md2Dialog } from 'md2';
import {Router} from '@angular/router';


const URL = 'http://localhost:4200';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],

})
export class DocumentsComponent implements OnInit {
public uploader:FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});
filesToUpload: Array<File> = [];
constructor(private http: Http, private el: ElementRef,private restangular:Restangular,private router: Router,private service:UserService) 
{
       this.service = service;
       this.docum=this;
 }
employee={documents:[{}]}
documents={};
updatebutton = false;
show=true;
official;
imageSrc
loaded
docum
doc
url
docname
modelview
employeedata;
pdfSrc=[];
imageArr=[];;
detail;
product
docu=false;
i=0;
view(val)
{
  console.log(val)
}
open1(){
    this.show=false;
}



open(dialog: Md2Dialog) {
    dialog.open();

  }
close(dialog: any) {
    dialog.close();
  }

  edited
  messageClass
  message
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



save(employee) {
  var create =this.service.editdata;
  let temp=false;
  if(undefined==create.documents)
  {
    create.documents=[]
    create.documents.push(employee.documents[0])
     create.documents.push(employee.documents[0].path=this.path)
    create.save().toPromise().then(function(resp) {
    console.log(resp)
    temp=true;
    })
    this.employee={documents:[{}]};
    this.i=0;
  }
  else{
    create.documents.push(employee.documents[0])
     create.documents.push(employee.documents[0].path=this.path)
    create.save().toPromise().then(function(resp) {
    console.log(resp)
    temp=true;
    })
    this.employee={documents:[{}]};
    this.i=0;
  }
    setTimeout(function() {
    console.log("one");
    if(temp)
    {
     this.savemsg('Added Succesfully','alert alert-info')
    }
    }.bind(this), 100);
    this.ngOnInit()
  }

  edit(emp,doc,i) {
    this.updatebutton = true;
    this.employee=  doc;
    this.i=i;
  }

  update(employee)
{
  var msg=this.documents;
  employee.save().toPromise().then(function(resp) {
    // msg.savemsg('Updated Succesfully','alert alert-info');
  console.log(resp)
  })
  this.employee={documents:[{}]};
}







  delete(dc,i){
    // var delmsg=this.group
    dc.remove().toPromise().then(function(resp,err) {
    console.log(resp)
    })
    this.doc.splice(i,1);
    
    // delmsg.savemsg('Deleted Succesfully','alert alert-danger');
    
  }

// handleFileSelect(){
//   var l=document.getElementById('fileinput')
//   console.log(l) 
// }

cancel(){
	this.show=true;
}


path
filename
upload() {
    const formData: any = new FormData();
    const files: Array<File> = this.filesToUpload;

    formData.append("uploads[]", files[0], files[0]['name']);
    
    this.http.post('http://localhost:3000/upload', formData)
      .map(files => files.json())
      .subscribe(files => console.log('files', files,this.path=files[0].path))
      console.log(this.path)
      console.log(this.filename)

      
  }

  fileChangeEvent(fileInput: any) {


    this.filesToUpload = <Array<File>>fileInput.target.files;
    this.product= fileInput.target.files[0]['name'];

    var files = fileInput.target.files;
     var file = files[0];

    if (files && file) {
    var reader = new FileReader();

    reader.onload =this._handleReaderLoaded.bind(this);

    reader.readAsBinaryString(file);
}

  }

  binaryString
_handleReaderLoaded(readerEvt) {
 this.binaryString = readerEvt.target.result;
        this.documents= btoa(this.binaryString);
        console.log(btoa(this.binaryString));

      
}



download(){

console.log(btoa(this.binaryString))
var base64Str =(btoa(this.binaryString))
console.log(base64Str)
var elem = window.document.createElement('a');
        elem.href = "data:application/zip;base64,"+base64Str
        elem.download = "my.zip";        
        document.body.appendChild(elem);
        elem.click();        
        document.body.removeChild(elem);
        console.log(elem)
        

}


  
  sanitizer
  fileUrl
ngOnInit() {

 
if(undefined!=this.service.editdata.documents)
{
  this.official=this.service.editdata;
  this.docu=true;
}

let baseDocuments= this.restangular.all('employeeconfiguration');
baseDocuments.getList().subscribe(data => {
this.doc = data.filter(res=>res.documents);
console.log(this.doc)
});
  

//for download

// const data = 'some text';
// const blob = new Blob([data], { type: 'application/octet-stream' });

// this.fileUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));


  
  }
  
  
}
