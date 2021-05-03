import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  auth=JSON.parse(localStorage.getItem('user'))
  appointment: Appointment =new Appointment();
 
  user: User[]
  users: User[]
  sector: Sector[]
  form:FormGroup
  constructor(private toastr: ToastrService, private router:Router,private api:AppointmentsService, 
    private orgapi:OrganisationService,private apii:AuthService,private apiii:CrudService,private route:ActivatedRoute) { }
    id=this.route.snapshot.params['id']
  ngOnInit(): void {
    console.log(this.id)
   
    if(this.id){
      this.api.getById(this.id).subscribe((res: Appointment)=>{

        this.form.patchValue(res)
        console.log(res)
      })
    }
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
    
      'doctor_id': new FormControl(this.auth.id,Validators.required),
      'patient_id': new FormControl('',Validators.required),
      
      'note': new FormControl(''),
       
      'phone': new FormControl(''),
      'id': new FormControl(''),
      
     
      
    });

  }

  addA(){
    if(this.id){
      this.api.update(this.form.value)
    .subscribe((result : any)=>{
      console.log(result) 
      this.toastr.success('Hello world!', 'Appointments updated!');
     this.router.navigate(['/medical/appointments']);
    },(error:any)=>{
      console.log(error)
      this.toastr.error(error.error.msg);
    })
    }
    else{
      this.api.create(this.form.value)
      .subscribe((result : any)=>{
        console.log(result) 
        this.toastr.success('Hello world!', 'Appointments Create!');
       this.router.navigate(['/medical/appointments']);
      },(error:any)=>{
        console.log(error)
        this.toastr.error(error.error.msg);
      })
    }
   
  
  }
  selectPatient(event){
    let id= event.target.value;
    let patient= this.users.find((p)=>p.id==id)
    console.log(patient)
    if(patient){
   
      this.appointment.phone=patient.phone
      this.form.get('phone').setValue(patient.phone)
      console.log(this.form.value);
      
    }
  }

}
