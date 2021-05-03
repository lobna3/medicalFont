import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrganisationService } from 'src/app/apis/organisation.service';
import { Sector } from 'src/app/viewModels/sector';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sectors',
  templateUrl: './sectors.component.html',
  styleUrls: ['./sectors.component.css']
})
export class SectorsComponent implements OnInit {
  sector:Sector= new Sector();
  sectors:Sector[]
  constructor(private toastr: ToastrService, private router:Router,private api:OrganisationService) { }

  ngOnInit(): void {
    this.allSSectors();}

  allSSectors() {
    this.api.getAllS()
      .subscribe((result: Sector[]) => {
        this.sectors = result
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
        this.api.deleteS(id)
          .subscribe((result: any) => {
            console.log(result)
            this.allSSectors()
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
