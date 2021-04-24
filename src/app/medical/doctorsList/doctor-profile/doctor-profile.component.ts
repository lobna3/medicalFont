import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/apis/auth.service';
import { User } from 'src/app/viewModels/user';
@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {
  user:User= new User();
  doctor: User
  id=this.route.snapshot.params['id']
  constructor(private toastr: ToastrService, private router:Router,private api:AuthService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getIdDocors(this.id)
  }
  server="http://localhost/blog/storage/app/"

  getIdDocors(id){
      this.api.getById(id)
      .subscribe((result : User)=>{
        this.doctor = result
        console.log(result) 
       
      },(error:any)=>{
        console.log(error)
        this.toastr.error(error.error.msg);
      })
    
    }
}
