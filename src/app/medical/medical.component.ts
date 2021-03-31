import { Component, OnInit } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css']
})
export class MedicalComponent implements OnInit {

  constructor() { }

  user =JSON.parse(localStorage.getItem('user'))
  menu 
  ngOnInit(): void {
    if(this.user.role == 'doctor'){
   
     this.menu=this.menu_doctor
     this.menu=this.menu_scretary
     this.menu=this.menu_patient
     this.menu=this.menu_appointment
     this.menu=this.menu_folder
    
   
    }else if( this.user.role == 'patient'){
      this.menu = this.menu_patient;
     
    } else if( this.user.role == 'secretary'){
      this.menu = this.menu_scretary;
    
    }
    else if( this.user.role == 'laboratorist'){
      this.menu = this.menu_laboratorist;
     
      
    } else{
      this.menu = this.menu_admin;
      this.menu = this.menu_appointment;
      this.menu = this.menu_specialite;
      this.menu = this.menu_folder;
      this.menu = this.menu_email;
      this.menu = this.menu_chat;
    }
 
  }

  menu_admin = [
    {
      nom :  'Dashboard',
      icon : 'fa fa-dashboard',
      route : '/medical'
    }
  ]
  menu_doctor = [
    {
      nom :  'Doctors',
      icon : 'fa fa-user-md',
      route : '/medical/doctors'
    }
  ]

  menu_laboratorist = [
    {
      nom :  'Laboratorist',
      icon : 'fa fa-user',
      route : '/medical/laboratorist'
    }
  ]
  menu_scretary = [
    {
      nom :  'Secretary',
      icon : 'fa fa-user',
      route : '/medical/scretarys'
    }
  ]

  menu_patient = [
    {
      nom :  'Patients',
      icon : 'fa fa-wheelchair',
      route : '/medical/patients'
    }
  ]

  menu_specialite = [
    {
      nom :  'Specialites',
      icon : 'fa fa-cube',
      route : '/medical/specialites'
    }
  ]

  menu_folder = [
    {
      nom :  'Folders',
      icon : 'fa fa-cube',
      route : '/medical/folders'
    }
  ]

  menu_appointment = [
    {
      nom :  'Appointments',
      icon : 'fa fa-calendar',
      route : '/medical/appointments'
    }
  ]

  menu_sector = [
    {
      nom :  'Sectors',
      icon : 'fa fa-hospital-o',
      route : '/medical/appointments'
    }
  ]
  menu_email = [
    {
      nom :  'Email',
      icon : 'fa fa-envelope',
      route : '/medical/email'
    }
  ]

  menu_chat = [
    {
      nom :  'Chat',
      icon : 'fa fa-comments',
      route : '/medical/chat'
    }
  ]

}
