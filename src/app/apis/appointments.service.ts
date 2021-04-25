import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Appointment} from 'src/app/viewModels/appointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentsService {
  url="http://localhost/blog/public/api";
  user =JSON.parse(localStorage.getItem('user'))
  constructor(private httpclient:HttpClient) { }

create(body:Appointment){
    return this.httpclient.post(this.url+'/add-appointment',body)
}

update(body:Appointment){
  return this.httpclient.put(this.url+'/edit-appointment',body)
}

getAll(){
  return this.httpclient.get(this.url+'/appointments')
}
delete(id){
  return this.httpclient.delete(this.url+'/appointments/'+id)
}
getById(id){
  return this.httpclient.get(this.url+'/appointments/'+id)
}

getByIdD(){
  console.log(this.user.id)
  return this.httpclient.get(this.url+'/appointmentsd/'+this.user.id)
}

getByIdP(){
  console.log(this.user.id)
  return this.httpclient.get(this.url+'/appointmentsp/'+this.user.id)
}
}
