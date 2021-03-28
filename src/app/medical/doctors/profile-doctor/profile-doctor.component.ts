import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/apis/auth.service';
import { User } from 'src/app/viewModels/user';
import { Specialite } from 'src/app/viewModels/specialite';
@Component({
  selector: 'app-profile-doctor',
  templateUrl: './profile-doctor.component.html',
  styleUrls: ['./profile-doctor.component.css']
})
export class ProfileDoctorComponent implements OnInit {
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
