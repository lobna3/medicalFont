import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  form:FormGroup
  constructor(private toastr: ToastrService, private router:Router,private api:CrudService) { }

  ngOnInit(): void {
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
     
      
    });
  
  }

  editPatient(){
    this.api.updateP(this.user)
    .subscribe((result : any)=>{
      console.log(result) 
      this.toastr.success(' Update Patient ', 'Patient Update!');
      localStorage.setItem('user' , JSON.stringify(result))
    
    },(error:any)=>{
      console.log(error)
      this.toastr.error(error.error.msg);
    })
  
  }

 

}
