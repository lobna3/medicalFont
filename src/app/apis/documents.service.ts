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
    return this.httpclient.post(this.url+'/uploadDocument' , body)
  }

  create(body:Document){
    return this.httpclient.post(this.url+'/add-document',body)
}

getById(id){
  return this.httpclient.get(this.url+'/documents/'+id)
 }
 getAll(){
  return this.httpclient.get(this.url+'/documents')
}

}
