import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import Swal from 'sweetalert2';
import { OrganisationService } from 'src/app/apis/organisation.service';
import { Specialite } from 'src/app/viewModels/specialite';
@Component({
  selector: 'app-specialites',
  templateUrl: './specialites.component.html',
  styleUrls: ['./specialites.component.css']
})
export class SpecialitesComponent implements OnInit {
  specialite: Specialite = new Specialite();
  specialites: Specialite[]
  constructor(private toastr: ToastrService, private router: Router, private api: OrganisationService) { }

  ngOnInit(): void {
    this.allSpecialites();
  }

  allSpecialites() {
    this.api.getAll()
      .subscribe((result: Specialite[]) => {
        this.specialites = result
        console.log(result)
      }, (error: any) => {
        console.log(error)
        this.toastr.error(error.error.msg);
      })

  }

  deleteSpecialites(id) {
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
            this.allSpecialites()
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
