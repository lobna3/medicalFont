import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from 'src/app/apis/crud.service';
import { User } from 'src/app/viewModels/user';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-laboratorist',
  templateUrl: './laboratorist.component.html',
  styleUrls: ['./laboratorist.component.css']
})
export class LaboratoristComponent implements OnInit {
  user: User = new User();
  laboratorists: User[]
  constructor(private toastr: ToastrService, private router: Router, private api: CrudService) { }

  ngOnInit(): void {
    this.allLaboratorists();
  }
  server="http://localhost/blog/storage/app/"

  allLaboratorists() {
    this.api.getAllL()
      .subscribe((result: User[]) => {
        this.laboratorists = result
        console.log(result)
      }, (error: any) => {
        console.log(error)
        this.toastr.error(error.error.msg);
      })

  }


  deleteLaboratorist(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.api.delete(id)
          .subscribe((result: any) => {
            console.log(result)
            this.allLaboratorists()
            Swal.fire(
              'Deleted!',
              'Your imaginary file has been deleted.',
              'success'
            )
          }, (error: any) => {
            console.log(error)
            this.toastr.error(error.error.msg);
          })
       
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })


  }

}
