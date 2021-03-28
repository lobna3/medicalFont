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
  selector: 'app-add-appointment',
  templateUrl: './add-appointment.component.html',
  styleUrls: ['./add-appointment.component.css']
})
export class AddAppointmentComponent implements OnInit {
  appointment: Appointment =new Appointment();
  user: User[]
  users: User[]
  sector: Sector[]
  form:FormGroup
  constructor(private toastr: ToastrService, private router:Router,private api:AppointmentsService, 
    private orgapi:OrganisationService,private apii:AuthService,private apiii:CrudService) { }

  ngOnInit(): void {
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

      'appointment_time': new FormControl(Validators.required),
      'appointment_date': new FormControl(),
    
      'doctor_id': new FormControl(Validators.required),
      'patient_id': new FormControl(Validators.required),
      
      'sector_id': new FormControl(),
      'id': new FormControl(),
      
     
      
    });
  }

  addA(){
    this.api.create(this.appointment)
    .subscribe((result : any)=>{
      console.log(result) 
      this.toastr.success('Hello world!', 'Appointments Create!');
     this.router.navigate(['/medical']);
    },(error:any)=>{
      console.log(error)
      this.toastr.error(error.error.msg);
    })
  
  }

}
