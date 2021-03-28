import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/apis/crud.service';
import { User } from 'src/app/viewModels/user';
@Component({
  selector: 'app-profile-scretary',
  templateUrl: './profile-scretary.component.html',
  styleUrls: ['./profile-scretary.component.css']
})
export class ProfileScretaryComponent implements OnInit {
  user:User= new User();
  scretary: User
  id=this.route.snapshot.params['id']
  constructor(private toastr: ToastrService, private router:Router,private api:CrudService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getIdScretary(this.id)
  }
  server="http://localhost/blog/storage/app/"

  getIdScretary(id){
    this.api.getByIdS(id)
    .subscribe((result : User)=>{
      this.scretary= result
      console.log(result) 
     
    },(error:any)=>{
      console.log(error)
      this.toastr.error(error.error.msg);
    })
  
  }

}
