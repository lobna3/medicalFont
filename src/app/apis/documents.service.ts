import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Document } from '../viewModels/document';
@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  url="http://localhost/blog/public/api";
  constructor(private httpclient:HttpClient) { 

  }

  upload(body : FormData){
    console.log(body)
    return this.httpclient.post(this.url+'/uploadDocument' , body)
  }

  create(body:Document){
    return this.httpclient.post(this.url+'/add-document',body)
}

getById(id){
  return this.httpclient.get(this.url+'/document/'+id)
 }
 getAll(id){
  return this.httpclient.get(this.url+'/documents/'+id)
}
getAllPatient(id){
  return this.httpclient.get(this.url+'/documentsP/'+id)
}


update(body){
  return this.httpclient.put(this.url+'/edit-document',body)
}
delete(id){
  return this.httpclient.delete(this.url+'/documents/'+id)
}
}
