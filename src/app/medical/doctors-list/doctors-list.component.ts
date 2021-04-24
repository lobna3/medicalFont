import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/apis/auth.service';
import { User } from 'src/app/viewModels/user';

import { OrganisationService } from 'src/app/apis/organisation.service';
import { Specialite } from 'src/app/viewModels/specialite';
@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css']
})
export class DoctorsListComponent implements OnInit {
  user: User = new User();
  doctors: User[]
  specialite: Specialite[]
  constructor(private toastr: ToastrService, private router: Router, private api: AuthService,private orgapi:OrganisationService) { }

  ngOnInit(): void {
    this.orgapi.getAll().subscribe((result:Specialite[])=>{
      this.specialite= result
    })
    this.allDocors();
  }
  server="http://localhost/blog/storage/app/"

  allDocors() {
    this.api.getAll()
      .subscribe((result: User[]) => {
        this.doctors = result
        console.log(result)
      }, (error: any) => {
        console.log(error)
        this.toastr.error(error.error.msg);
      })

  }
}
