import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/apis/auth.service';
import { User } from 'src/app/viewModels/user';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css']
})
export class MedicalComponent implements OnInit {

  constructor() { }
  server="http://localhost/blog/storage/app/"
  user =JSON.parse(localStorage.getItem('user'))
  menu 
  ngOnInit(): void {
    if(this.user.role == 'doctor'){
   
     this.menu=this.menu_doctor
    
   
    }else if( this.user.role == 'patient'){
      this.menu = this.menu_patient;
     
    } else if( this.user.role == 'secretary'){
      this.menu = this.menu_scretary;
    
    }
    else if( this.user.role == 'laboratorist'){
      this.menu = this.menu_laboratorist;
     
      
    } else{
      this.menu = this.menu_admin;
    }
 
  }

  menu_admin = [
    {
      nom :  'Dashboard',
      icon : 'fa fa-dashboard',
      route : '/medical'
    },
    {
      nom :  'Doctors',
      icon : 'fa fa-user-md',
      route : '/medical/doctors'
    },
    {
      nom :  'Laboratorist',
      icon : 'fa fa-user',
      route : '/medical/laboratorist'
    },

    {
      nom :  'Secretary',
      icon : 'fa fa-user',
      route : '/medical/scretarys'
    },
    {
      nom :  'Patients',
      icon : 'fa fa-wheelchair',
      route : '/medical/patients'
    }, 
     {
      nom :  'Specialites',
      icon : 'fa fa-cube',
      route : '/medical/specialites'
    },  {
      nom :  'Folders',
      icon : 'fa fa-cube',
      route : '/medical/folders'
    },  {
      nom :  'Appointments',
      icon : 'fa fa-calendar',
      route : '/medical/appointments'
    }, {
      nom :  'Sectors',
      icon : 'fa fa-hospital-o',
      route : '/medical/sectors'
    },   {
      nom :  'Email',
      icon : 'fa fa-envelope',
      route : '/email/inbox'
    },{
      nom :  'Chat',
      icon : 'fa fa-comments',
      route : '/medical/chat'
    }
  ]
  menu_doctor = [
    {
      nom :  'Dashboard',
      icon : 'fa fa-dashboard',
      route : '/medical'
    },  {
      nom :  'Folders',
      icon : 'fa fa-cube',
      route : '/medical/folder-patient'
    },  {
      nom :  'Appointments',
      icon : 'fa fa-calendar',
      route : '/medical/appointments'
    },   {
      nom :  'Email',
      icon : 'fa fa-envelope',
      route : '/email/inbox'
    },{
      nom :  'Chat',
      icon : 'fa fa-comments',
      route : '/medical/chat'
    }
  ]

  menu_laboratorist = [
    {
      nom :  'Dashboard',
      icon : 'fa fa-dashboard',
      route : '/medical'
    },  {
      nom :  'Folders',
      icon : 'fa fa-cube',
      route : '/medical/folders'
    },   {
      nom :  'Email',
      icon : 'fa fa-envelope',
      route : '/email/inbox'
    },{
      nom :  'Chat',
      icon : 'fa fa-comments',
      route : '/medical/chat'
    }
  ]
  menu_scretary = [
    {
      nom :  'Dashboard',
      icon : 'fa fa-dashboard',
      route : '/medical'
    },  {
      nom :  'Folders',
      icon : 'fa fa-cube',
      route : '/medical/folders'
    },  {
      nom :  'Appointments',
      icon : 'fa fa-calendar',
      route : '/medical/appointments'
    },   {
      nom :  'Email',
      icon : 'fa fa-envelope',
      route : '/email/inbox'
    },{
      nom :  'Chat',
      icon : 'fa fa-comments',
      route : '/medical/chat'
    }
  ]

  menu_patient = [
    {
      nom :  'Dashboard',
      icon : 'fa fa-dashboard',
      route : '/medical'
    },
    {
      nom :  'Doctor',
      icon : 'fa fa-user-md',
      route : '/medical/doctors-list'
    },
     
    {
      nom :  'Folders',
      icon : 'fa fa-cube',
      route : '/medical/folder-id/'+this.user.id
    },  {
      nom :  'Appointments',
      icon : 'fa fa-calendar',
      route : '/medical/appointments'
    }, 
    {
      nom :  'Email',
      icon : 'fa fa-envelope',
      route : '/email/inbox'
    },{
      nom :  'Chat',
      icon : 'fa fa-comments',
      route : '/medical/chat'
    },
    
  ]




}
