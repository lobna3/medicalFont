import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MedicalComponent } from './medical/medical.component';
import { DashboardComponent } from './medical/dashboard/dashboard.component';
import { AppointmentsComponent } from './medical/appointments/appointments.component';
import { PatientsListComponent } from './medical/patients-list/patients-list.component';
import { DoctorsComponent } from './medical/doctors/doctors.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {  HttpClientModule} from "@angular/common/http";
import { AddDoctorComponent } from './medical/doctors/add-doctor/add-doctor.component';
import { EditDoctorComponent } from './medical/doctors/edit-doctor/edit-doctor.component';
import { ProfileDoctorComponent } from './medical/doctors/profile-doctor/profile-doctor.component';
import { ChatComponent } from './medical/chat/chat.component';
import { AddPatientComponent } from './medical/patients-list/add-patient/add-patient.component';
import { EditPatientComponent } from './medical/patients-list/edit-patient/edit-patient.component';
import { AddAppointmentComponent } from './medical/appointments/add-appointment/add-appointment.component';
import { EditAppointmentComponent } from './medical/appointments/edit-appointment/edit-appointment.component';
import { SectorsComponent } from './medical/sectors/sectors.component';
import { AddSectorComponent } from './medical/sectors/add-sector/add-sector.component';
import { EditSectorComponent } from './medical/sectors/edit-sector/edit-sector.component';
import { LaboratoristComponent } from './medical/laboratorist/laboratorist.component';
import { AddLaboratoristComponent } from './medical/laboratorist/add-laboratorist/add-laboratorist.component';
import { EditLaboratoristComponent } from './medical/laboratorist/edit-laboratorist/edit-laboratorist.component';
import { ProfileLaboratoristComponent } from './medical/laboratorist/profile-laboratorist/profile-laboratorist.component';
import { SpecialitesComponent } from './medical/specialites/specialites.component';
import { AddSpecialiteComponent } from './medical/specialites/add-specialite/add-specialite.component';
import { EditSpecialiteComponent } from './medical/specialites/edit-specialite/edit-specialite.component';
import { ScretarysComponent } from './medical/scretarys/scretarys.component';
import { ProfileScretaryComponent } from './medical/scretarys/profile-scretary/profile-scretary.component';
import { AddScretaryComponent } from './medical/scretarys/add-scretary/add-scretary.component';
import { EditScretaryComponent } from './medical/scretarys/edit-scretary/edit-scretary.component';
import { EmailComponent } from './email/email.component';
import { ComposeComponent } from './email/compose/compose.component';
import { InboxComponent } from './email/inbox/inbox.component';
import { MailViewComponent } from './email/mail-view/mail-view.component';
import { FoldersComponent } from './medical/folders/folders.component';
import { SharedComponent } from './medical/shared/shared.component';
import { FolderPatientComponent } from './medical/folder-patient/folder-patient.component';
import { DoctorsListComponent } from './medical/doctors-list/doctors-list.component';
import { DoctorProfileComponent } from './medical/doctorsList/doctor-profile/doctor-profile.component';
import { FolderIdComponent } from './medical/folder-id/folder-id.component';
import { SchedulerModule } from '@progress/kendo-angular-scheduler';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { AppointmentPatientComponent } from './medical/appointment-patient/appointment-patient.component';
import { AddApComponent } from './medical/appointment-patient/add-ap/add-ap.component';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MedicalComponent,
    DashboardComponent,
    AppointmentsComponent,
    PatientsListComponent,
    DoctorsComponent,
    HomeComponent,
    AddDoctorComponent,
    EditDoctorComponent,
    ProfileDoctorComponent,
    ChatComponent,
    AddPatientComponent,
    EditPatientComponent,
    AddAppointmentComponent,
    EditAppointmentComponent,
    SectorsComponent,
    AddSectorComponent,
    EditSectorComponent,
    LaboratoristComponent,
    AddLaboratoristComponent,
    EditLaboratoristComponent,
    ProfileLaboratoristComponent,
    SpecialitesComponent,
    AddSpecialiteComponent,
    EditSpecialiteComponent,
    ScretarysComponent,
    ProfileScretaryComponent,
    AddScretaryComponent,
    EditScretaryComponent,
    EmailComponent,
    ComposeComponent,
    InboxComponent,
    MailViewComponent,
    FoldersComponent,
    SharedComponent,
    FolderPatientComponent,
    DoctorsListComponent,
    DoctorProfileComponent,
    FolderIdComponent,
    AppointmentPatientComponent,
    AddApComponent,
   
   
    
    
 
   
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), SchedulerModule, TreeViewModule, // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
