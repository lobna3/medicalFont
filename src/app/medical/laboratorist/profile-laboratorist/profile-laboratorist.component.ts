import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/apis/crud.service';
import { User } from 'src/app/viewModels/user';

@Component({
  selector: 'app-profile-laboratorist',
  templateUrl: './profile-laboratorist.component.html',
  styleUrls: ['./profile-laboratorist.component.css']
})
export class ProfileLaboratoristComponent implements OnInit {
  user:User= new User();
  laboratorist: User
  id=this.route.snapshot.params['id']

  constructor(private toastr: ToastrService, private router:Router,private api:CrudService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getIdLaboratorist(this.id)
  }
  server="http://localhost/blog/storage/app/"
  getIdLaboratorist(id){
    this.api.getByIdL(id)
    .subscribe((result : User)=>{
      this.laboratorist = result
      console.log(result) 
     
    },(error:any)=>{
      console.log(error)
      this.toastr.error(error.error.msg);
    })
  
  }

}
