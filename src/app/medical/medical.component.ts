import { Component, OnInit } from '@angular/core';

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

    }else if( this.user.role == 'patient'){
     
    } else if( this.user.role == ''){
     
    } else{
      this.menu = this.menu_admin;
    }
 
  }

  menu_admin = [
    {
      nom :  'Dashboard',
      icon : 'fa fa-dashboard',
      route : '/medical'
    }
  ]

}
