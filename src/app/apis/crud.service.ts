import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { User } from '../viewModels/user';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  url="http://localhost/blog/public/api";
  constructor(private httpclient:HttpClient) { }

// Laboratorist
  createL(body:User){
    return this.httpclient.post(this.url+'/add-laboratorist',body)
}


update(body:User){
  return this.httpclient.put(this.url+'/edit-laboratorist/',body)
}

delete(id){
  return this.httpclient.delete(this.url+'/laboratorist/'+id)
}

getAllL(){
  return this.httpclient.get(this.url+'/laboratorist')
}


getByIdL(id){
  return this.httpclient.get(this.url+'/profile-laboratorist/'+id)
}


//secretary
createS(body:User){
  return this.httpclient.post(this.url+'/add-scretary',body)
}


updateS(body:User){
return this.httpclient.put(this.url+'/edit-scretary/',body)
}

deleteS(id){
return this.httpclient.delete(this.url+'/scretarys/'+id)
}

getAllS(){
return this.httpclient.get(this.url+'/scretarys')
}


getByIdS(id){
return this.httpclient.get(this.url+'/profile-scretarys/'+id)
}

//Patients

createP(body:User){
  return this.httpclient.post(this.url+'/add-patient',body)
}


updateP(body:User){
  return this.httpclient.put(this.url+'/edit-patient/',body)
}

deleteP(id){
  return this.httpclient.delete(this.url+'/patients-list/'+id)
}

getAllP(){
  return this.httpclient.get(this.url+'/patients-list')
}


getByIdP(id){
  return this.httpclient.get(this.url+'/patients-list/'+id)
}

upload(body : FormData){
  return this.httpclient.post(this.url+'/upload' , body)
}



}



