import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService} from 'src/app/apis/crud.service';
import { User } from 'src/app/viewModels/user';
@Component({
  selector: 'app-add-scretary',
  templateUrl: './add-scretary.component.html',
  styleUrls: ['./add-scretary.component.css']
})
export class AddScretaryComponent implements OnInit {
  user:User= new User("scretary");
 
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

  addScretaryy(){
    this.api.createS(this.user)
    .subscribe((result : any)=>{
      console.log(result) 
      this.toastr.success('Create Scretary', 'Scretary Create!');
     this.router.navigate(['/medical']);
    },(error:any)=>{
      console.log(error)
      this.toastr.error(error.error.msg);
    })
  
  }
  addScretary(){
  
    if(this.formData){
      this.api.upload(this.formData).subscribe((result : any)=>
        {
          console.log(result)
          this.user.image = result.path
          this.api.createS(this.user)
          .subscribe((result : any)=>{
            console.log(result) 
            this.toastr.success('Create Scretary', 'Scretary Created!');
           this.router.navigate(['/medical/doctors']);
          },(error:any)=>{
            console.log(error)
            this.toastr.error(error.error.msg);
          }) 
        })
        
        
    }else{
      this.api.createS(this.user)
      .subscribe((result : any)=>{
        console.log(result) 
        this.toastr.success('Create Scretary', 'Scretary Create!');
        
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
