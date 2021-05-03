import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/apis/auth.service';
import { OrganisationService } from 'src/app/apis/organisation.service';
import { Specialite } from 'src/app/viewModels/specialite';
import { User } from 'src/app/viewModels/user';
@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.css']
})
export class AddDoctorComponent implements OnInit {
  user:User= new User("doctor");
  specialite: Specialite[]
  form:FormGroup
  constructor(private toastr: ToastrService, private router:Router,private api:AuthService, private orgapi:OrganisationService) { }
 
  ngOnInit(): void {
    this.orgapi.getAll().subscribe((result:Specialite[])=>{
      this.specialite= result
    })
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
     
      
    });
  }
  addDoctor(){
  
    if(this.formData){
      this.api.upload(this.formData).subscribe((result : any)=>
        {
          console.log(result)
          this.user.image = result.path
          this.api.create(this.user)
          .subscribe((result : any)=>{
            console.log(result) 
            this.toastr.success('Create Doctor', 'Doctor Create!');
           this.router.navigate(['/medical/doctors']);
          },(error:any)=>{
            console.log(error)
            this.toastr.error(error.error.msg);
          }) 
        })
        
        
    }else{
      this.api.create(this.user)
      .subscribe((result : any)=>{
        console.log(result) 
        this.toastr.success('Create User', 'User Create!');
       this.router.navigate(['/medical/doctors']);
      },(error:any)=>{
        console.log(error)
        this.toastr.error(error.error.msg);
      }) 
    }
  
  
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
