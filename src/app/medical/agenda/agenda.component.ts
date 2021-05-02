import { Component, OnInit } from '@angular/core';
import { SchedulerEvent } from '@progress/kendo-angular-scheduler';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AppointmentsService } from 'src/app/apis/appointments.service';
import { Appointment} from 'src/app/viewModels/appointment';
@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  appointment: Appointment = new Appointment();
  appointments: Appointment[]
  constructor(private toastr: ToastrService, private router: Router, private api:AppointmentsService) { }
  public selectedDate: Date = new Date();
  public events: SchedulerEvent[];
  ngOnInit(): void {
    this.allAppointments();
  }

  allAppointments() {
    this.api.getByIdD()
      .subscribe((result: any[]) => {

        console.log(result)
        this.events=[]
      result.map(e=>{
        let ligne ={
          id: e.id,
      title: (e.patient? e.patient.user.firstname : '' ) + ' '+ (e.patient? e.patient.user.lastname : '' ),
      start: new Date(e.appointment_date+'T'+e.appointment_time),
      end: new Date(e.appointment_date+'T'+e.appointment_time),
      
        }

        this.events.push(ligne)
      })
        console.log(result)
      }, (error: any) => {
        console.log(error)
        this.toastr.error(error.error.msg);
      })

  }

}
