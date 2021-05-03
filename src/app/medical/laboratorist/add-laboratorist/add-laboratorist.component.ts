import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService} from 'src/app/apis/crud.service';
import { User } from 'src/app/viewModels/user';
@Component({
  selector: 'app-add-laboratorist',
  templateUrl: './add-laboratorist.component.html',
  styleUrls: ['./add-laboratorist.component.css']
})
export class AddLaboratoristComponent implements OnInit {
  user:User= new User("laboratorist");
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
      'role': new FormControl(),
     
      
    });
  }

 

    addLaboratorist(){
  
      if(this.formData){
        this.api.upload(this.formData).subscribe((result : any)=>
          {
            console.log(result)
            this.user.image = result.path
            this.api.createL(this.user)
            .subscribe((result : any)=>{
              console.log(result) 
              this.toastr.success('Create Laboratorist', 'Laboratorist Created!');
             this.router.navigate(['/medical/doctors']);
            },(error:any)=>{
              console.log(error)
              this.toastr.error(error.error.msg);
            }) 
          })
          
          
      }else{
        this.api.createL(this.user)
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
