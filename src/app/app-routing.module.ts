import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { CreateDoctorComponent } from './doctor/create-doctor/create-doctor.component';
import { UpdateDoctorComponent } from './doctor/update-doctor/update-doctor.component';
import { DoctorDetailsComponent } from "./doctor/doctor-details/doctor-details.component";

import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { CreatePatientComponent } from './patient/create-patient/create-patient.component';
import { UpdatePatientComponent } from './patient/update-patient/update-patient.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';

import { PrescriptionListComponent } from './prescription/prescription-list/prescription-list.component';
import { CreatePrescriptionComponent } from './prescription/create-prescription/create-prescription.component';
import { UpdatePrescriptionComponent } from './prescription/update-prescription/update-prescription.component';
import { PrescriptionDetailsComponent } from './prescription/prescription-details/prescription-details.component';



const routes: Routes = [
  { path: '', redirectTo: 'doctors', pathMatch: 'full'},
  { path: 'doctors', component: DoctorListComponent },
  { path: 'doctors/add', component: CreateDoctorComponent },
  { path: 'doctors/update/:id', component: UpdateDoctorComponent },
  { path: 'doctors/details/:id', component: DoctorDetailsComponent },
  { path: 'patients', component: PatientListComponent },
  { path: 'patients/add', component: CreatePatientComponent },
  { path: 'patients/update/:id', component: UpdatePatientComponent },
  { path: 'patients/details/:id', component: PatientDetailsComponent },
  { path: 'prescriptions', component: PrescriptionListComponent },
  { path: 'prescriptions/add', component: CreatePrescriptionComponent },
  { path: 'prescriptions/update/:id', component: UpdatePrescriptionComponent },
  { path: 'prescriptions/details/:id', component: PrescriptionDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
