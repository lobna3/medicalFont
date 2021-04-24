import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { CrudService } from 'src/app/apis/crud.service';
import { User } from 'src/app/viewModels/user';
@Component({
  selector: 'app-folder-id',
  templateUrl: './folder-id.component.html',
  styleUrls: ['./folder-id.component.css']
})
export class FolderIdComponent implements OnInit {
  user: User = new User();
  patients: User
  id=this.route.snapshot.params['id']
  constructor(private route:ActivatedRoute,private toastr: ToastrService, private router: Router, private api: CrudService) { }
  server="http://localhost/blog/storage/app/"
  ngOnInit(): void {
    this.getIdDocors(this.id);
  }
  getIdDocors(id){
    this.api.getByIdP(id)
    .subscribe((result : User)=>{
      this.patients = result
      console.log(result) 
     
    },(error:any)=>{
      console.log(error)
      this.toastr.error(error.error.msg);
    })
  
  }
}
