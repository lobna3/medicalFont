import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './medical/dashboard/dashboard.component';
import { MedicalComponent } from './medical/medical.component';
import { RegisterComponent } from './register/register.component';
import {DoctorsComponent} from './medical/doctors/doctors.component';
import{AppointmentsComponent} from './medical/appointments/appointments.component';
import  { PatientsListComponent } from './medical/patients-list/patients-list.component';
import { AuthGuard } from './apis/guard/auth.guard';
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


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'email',
    component:EmailComponent,
    children :[
      {
        path:'',
        component:ComposeComponent
      },
      {
        path:'inbox',
        component:InboxComponent
      },
      {
        path:'mail-view',
        component:MailViewComponent
      },
    ]
  },
  {
    path:'medical',
    component:MedicalComponent,
    canActivate:[AuthGuard],
    children :[
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'folders',
        component:FoldersComponent, 
      } ,
      {
        path:'shared/:type/:id',
        component:SharedComponent, 
      } ,
      {
        path:'doctors',
        component:DoctorsComponent, 
      } ,
        {
         path:'add-doctor',
         component:AddDoctorComponent, 
        },
         {
          path:'edit-doctor',
          component:EditDoctorComponent, 
         },
         {
          path:'profile-doctor/:id',
          component:ProfileDoctorComponent, 
         },
      {
        path:'patients',
        component: PatientsListComponent
      },
      {
      path:'add-patient',
      component: AddPatientComponent
       },
        {
       path:'edit-patient',
       component: EditPatientComponent
        },
      {
        path:'appointments',
        component: AppointmentsComponent
        
      },

      {
        path:'add-appointment',
        component: AddAppointmentComponent
        
      },

      {
        path:'edit-appointment',
        component: EditAppointmentComponent
        
      },
      {
        path:'chat',
        component:ChatComponent, 
       },

       {
        path:'sectors',
        component:SectorsComponent, 
       },
       {
        path:'add-sector',
        component:AddSectorComponent, 
       },
       {
        path:'edit-sector',
        component:EditSectorComponent, 
       },

       {
        path:'laboratorist',
        component:LaboratoristComponent, 
       },

      { path:'add-laboratorist',
       component:AddLaboratoristComponent, 
      },
      { path:'edit-laboratorist',
      component:EditLaboratoristComponent, 
     },

     { path:'profile-laboratorist/:id',
     component:ProfileLaboratoristComponent, 
    },

    { path:'specialites',
    component:SpecialitesComponent, 
   },

   { path:'add-specialite',
   component:AddSpecialiteComponent, 
  },
  { path:'edit-specialite',
  component:EditSpecialiteComponent, 
 },
     
        { 
          path:'scretarys',
          component:ScretarysComponent, 
         },
         { 
          path:'profile-scretary/:id',
          component:ProfileScretaryComponent, 
         },
         { 
          path:'add-scretary',
          component:AddScretaryComponent, 
         },
         { 
          path:'edit-scretary',
          component:EditScretaryComponent, 
         },
    
      
    ]
  },
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
