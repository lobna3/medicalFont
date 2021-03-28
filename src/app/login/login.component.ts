import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../apis/auth.service';
import { User } from '../viewModels/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User= new User();
  form:FormGroup
  constructor(private toastr: ToastrService,private router:Router,private api:AuthService) { }

  ngOnInit(): void {
    localStorage.clear()
    this.form=new FormGroup({
    
      'email': new FormControl(Validators.required,Validators.email),
      'password': new FormControl(Validators.required,Validators.minLength(8)),
    
    });
  }
  login(){
    this.api.login(this.user)
    .subscribe((result : any)=>{
      console.log(result) 
      localStorage.setItem("user", JSON.stringify(result))
      this.toastr.success('Hello world!', 'Toastr fun!');
     this.router.navigate(['/medical']);
    },(error:any)=>{
      console.log(error)
      this.toastr.error(error.error.msg);
  })}
}
