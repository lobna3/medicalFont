import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/apis/auth.service';
import { User } from 'src/app/viewModels/user';
@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {
  user: User = new User();
  doctors: User[]
  constructor(private toastr: ToastrService, private router: Router, private api: AuthService) { }

  ngOnInit(): void {
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
