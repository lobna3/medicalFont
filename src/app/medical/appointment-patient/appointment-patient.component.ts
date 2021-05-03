import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppointmentsService } from 'src/app/apis/appointments.service';
import { Appointment} from 'src/app/viewModels/appointment';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-appointment-patient',
  templateUrl: './appointment-patient.component.html',
  styleUrls: ['./appointment-patient.component.css']
})
export class AppointmentPatientComponent implements OnInit {
  appointment: Appointment = new Appointment();
  appointments: Appointment[]
  constructor(private toastr: ToastrService, private router: Router, private api:AppointmentsService ) { }

  ngOnInit(): void {
    this.allAppointments();
  }
  server="http://localhost/blog/storage/app/"
  allAppointments() {
    this.api.getByIdP()
      .subscribe((result: Appointment[]) => {
        this.appointments= result.sort((a,b)=> new Date(a.appointment_date) < new Date(b.appointment_date) ? 0 : -1)
        console.log(result)
      }, (error: any) => {
        console.log(error)
        this.toastr.error(error.error.msg);
      })

  }

  deleteAppointment(id) {
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
            this.allAppointments()
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
