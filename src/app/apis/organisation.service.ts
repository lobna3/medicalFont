import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Specialite } from '../viewModels/specialite';
import {Sector}from '../viewModels/sector';
@Injectable({
  providedIn: 'root'
})
export class OrganisationService {
  url="http://localhost/blog/public/api";
  constructor(private httpclient:HttpClient) { }
//Specialites
  create(body:Specialite){
    return this.httpclient.post(this.url+'/add-specialite',body)
}


update(body:Specialite){
  return this.httpclient.put(this.url+'/edit-specialite/',body)
}

delete(id){
  return this.httpclient.delete(this.url+'/specialites/'+id)
}

getAll(){
  return this.httpclient.get(this.url+'/specialites')
}


getById(id){
 return this.httpclient.get(this.url+'/specialites/'+id)
}

//Sectors
createS(body:Sector){
  return this.httpclient.post(this.url+'/add-sector',body);
 }

 updateS(body:Sector){
  return this.httpclient.put(this.url+'/edit-sector/',body);
 }

 deleteS(id){
  return this.httpclient.delete(this.url+'/sectors/'+id)
}

getAllS(){
  return this.httpclient.get(this.url+'/sectors')
}


getByIdS(id){
  return this.httpclient.get(this.url+'/sectors/'+id)
}
}
