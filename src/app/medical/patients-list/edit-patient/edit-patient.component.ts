import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/apis/crud.service';
import { User } from 'src/app/viewModels/user';
@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  
  user:User= JSON.parse(localStorage.getItem('user'));
  patient: User =new User();
  form:FormGroup
  constructor(private toastr: ToastrService, private router:Router,private api:CrudService,private route:ActivatedRoute) { }
  id=this.route.snapshot.params['id']
  ngOnInit(): void {
    console.log(this.id)
   
    if(this.id){
      this.api.getByIdP(this.id).subscribe((res: User)=>{

        this.form.patchValue(res)
        console.log(res)
      })
    }
   
    this.form=new FormGroup({
      'firstname': new FormControl(Validators.required),
      'lastname': new FormControl(),
    
      'email': new FormControl(Validators.required,Validators.email),
      'password': new FormControl(Validators.required,Validators.minLength(8)),
      
      'datenaissance': new FormControl(),
      'genre': new FormControl(),
      'adress': new FormControl(),
      
      'phone': new FormControl(),
      'image': new FormControl(),
     
      'n_cnss': new FormControl(),
      'role': new FormControl(),
     'patient_id':new FormControl(),
      
    });
  
  }

  editPatient(){
    if(this.id){
    this.api.updateP(this.user)
    .subscribe((result : any)=>{
      console.log(result) 
      this.toastr.success(' Update Patient ', 'Patient Update!');
      
    },(error:any)=>{
      console.log(error)
      this.toastr.error(error.error.msg);
    })
  }
  
  }

 

}
