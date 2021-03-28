import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/apis/auth.service';
import { User } from 'src/app/viewModels/user';
@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {
  user:User= JSON.parse(localStorage.getItem('user'));
  doctor: User
  form:FormGroup
  constructor(private toastr: ToastrService, private router:Router,private api:AuthService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      'firstname': new FormControl(Validators.required),
      'lastname': new FormControl(),
    
      'email': new FormControl(Validators.required,Validators.email),
      'password': new FormControl(Validators.required,Validators.minLength(8)),
      
      'datenaissance': new FormControl(),
      'genre': new FormControl(),
      'adress': new FormControl(),
      'country': new FormControl(),
      'city':new FormControl(),
      'state': new FormControl(),
      'codePostal': new FormControl(),
      'phone': new FormControl(),
      'image': new FormControl(),
      'shortBiography': new FormControl(),
     
      'role': new FormControl(),
    })
  }
  server="http://localhost/blog/storage/app/"
  updateDoctor(){
    this.api.update(this.user)
    .subscribe((result : any)=>{
      console.log(result) 
      this.toastr.success('Update Doctor!', 'Doctor fun!');
      localStorage.setItem('user' , JSON.stringify(result))
     
    },(error:any)=>{
      console.log(error)
      this.toastr.error(error.error.msg);
    })
  }

  formData = new FormData()
  upload(event){
  let files = event.target.files
    if(files && files.length >0){
      let file= files[0];
      
      this.formData.append('avatar' , file , file.name)
     
    }
  }
}
