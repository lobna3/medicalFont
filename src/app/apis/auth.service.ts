import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../viewModels/user';
import { Sector} from '../viewModels/sector';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 url="http://localhost/blog/public/api";

  constructor(private httpclient:HttpClient) { }

  register(body:User){
   return this.httpclient.post(this.url+'/register',body);
  }

  login(body:User){
      return this.httpclient.post(this.url+'/login',body)
  }

  //Doctors

create(body:User){
    return this.httpclient.post(this.url+'/add-doctor',body)
}


update(body : User){
  return this.httpclient.put(this.url+'/edit-doctor' , body)
}

delete(id){
  return this.httpclient.delete(this.url+'/doctors/'+id)
}

getAll(){
  return this.httpclient.get(this.url+'/doctors')
}


getById(id){
 return this.httpclient.get(this.url+'/profile-doctor/'+id)
}



upload(body : FormData){
  return this.httpclient.post(this.url+'/upload' , body)
}


}
