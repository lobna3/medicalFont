import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AppointmentsService } from 'src/app/apis/appointments.service';
import { Appointment} from 'src/app/viewModels/appointment';
import{Sector} from 'src/app/viewModels/sector';
import { User } from 'src/app/viewModels/user';
import { OrganisationService } from 'src/app/apis/organisation.service';
import { AuthService } from 'src/app/apis/auth.service';
import { CrudService } from 'src/app/apis/crud.service';
@Component({
  selector: 'app-add-ap',
  templateUrl: './add-ap.component.html',
  styleUrls: ['./add-ap.component.css']
})
export class AddApComponent implements OnInit {
  auth=JSON.parse(localStorage.getItem('user'))
  appointment: Appointment =new Appointment();
  user: User[]
  users: User[]
  sector: Sector[]
  form:FormGroup
  constructor(private toastr: ToastrService, private router:Router,private api:AppointmentsService, 
    private orgapi:OrganisationService,private apii:AuthService,private apiii:CrudService) { }

  ngOnInit(): void {
    this.appointment.doctor_id=this.auth.id;
    this.orgapi.getAllS().subscribe((result:Sector[])=>{
      this.sector= result
    })
    this.apii.getAll().subscribe((result:User[])=>{
      this.user= result
    })
    this.apiii.getAllP().subscribe((result:User[])=>{
      this.users= result
    })

    this.form=new FormGroup({
    
      'appointment_time': new FormControl('',Validators.required),
      'appointment_date': new FormControl(''),
    
      'doctor_id': new FormControl('',Validators.required),
      'patient_id': new FormControl(this.auth.id,Validators.required),
      
      'note': new FormControl(''),
       
      'phone': new FormControl(''),
      'id': new FormControl(''),
      
     
      
    });
  }

  addA(){
    this.api.create(this.form.value)
    .subscribe((result : any)=>{
      console.log(result) 
      this.toastr.success('Hello world!', 'Appointments Create!');
     this.router.navigate(['/medical/appointment-patient']);
    },(error:any)=>{
      console.log(error)
      this.toastr.error(error.error.msg);
    })
  
  }
  selectPatient(event){
    let id= event.target.value;
    let patient= this.user.find((p)=>p.id==id)
    console.log(patient)
    if(patient){
   
      this.appointment.phone=patient.phone
      this.form.get('phone').setValue(patient.phone)
      console.log(this.form.value);
      
    }
  }


}
