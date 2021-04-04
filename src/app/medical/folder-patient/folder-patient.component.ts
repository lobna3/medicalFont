import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/apis/auth.service';
import { CrudService } from 'src/app/apis/crud.service';
import { User } from 'src/app/viewModels/user';
@Component({
  selector: 'app-folder-patient',
  templateUrl: './folder-patient.component.html',
  styleUrls: ['./folder-patient.component.css']
})
export class FolderPatientComponent implements OnInit {
  user: User = new User();
  doctors: User[]
  constructor(private toastr: ToastrService, private router: Router, private api: CrudService) { }

  ngOnInit(): void {
    this.allDocors();
  }
  server="http://localhost/blog/storage/app/"
  allDocors() {
    this.api.getAllP()
      .subscribe((result: User[]) => {
        this.doctors = result
        console.log(result)
      }, (error: any) => {
        console.log(error)
        this.toastr.error(error.error.msg);
      })

  }

}
