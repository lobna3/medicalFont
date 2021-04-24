import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../apis/auth.service';
import { User } from '../viewModels/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 user:User= new User("patient");
 form:FormGroup
  constructor(private toastr: ToastrService, private router:Router,private api:AuthService) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      'firstname': new FormControl(Validators.required),
      'lastname': new FormControl(),
      'email': new FormControl(Validators.required,Validators.email),
      'password': new FormControl(Validators.required,Validators.minLength(8)),
      'phone': new FormControl(),
      'genre': new FormControl(),
      'role': new FormControl(),
      'adress': new FormControl(),
      'datenaissance': new FormControl(),
    });
  }
  signup(){
    this.api.register(this.user)
    .subscribe((result : any)=>{
      console.log(result) 
      this.toastr.success('Hello world!', 'Login fun!');
     this.router.navigate(['/login']);
    },(error:any)=>{
      console.log(error)
      this.toastr.error(error.error.msg);
    })
  
  }
 
}
