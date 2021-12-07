import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { DoctorListComponent } from './doctor/doctor-list/doctor-list.component';
import { CreateDoctorComponent } from './doctor/create-doctor/create-doctor.component';
import { UpdateDoctorComponent } from './doctor/update-doctor/update-doctor.component';
import { DoctorDetailsComponent } from './doctor/doctor-details/doctor-details.component';
import { DoctorService } from './service/doctor.service';

import { PatientListComponent } from './patient/patient-list/patient-list.component';
import { CreatePatientComponent } from './patient/create-patient/create-patient.component';
import { UpdatePatientComponent } from './patient/update-patient/update-patient.component';
import { PatientDetailsComponent } from './patient/patient-details/patient-details.component';
import { PatientService } from './service/patient.service';

import { PrescriptionListComponent } from './prescription/prescription-list/prescription-list.component';
import { CreatePrescriptionComponent } from './prescription/create-prescription/create-prescription.component';
import { UpdatePrescriptionComponent } from './prescription/update-prescription/update-prescription.component';
import { PrescriptionDetailsComponent } from './prescription/prescription-details/prescription-details.component';
import { PrescriptionService } from './service/prescription.service';

@NgModule({
  declarations: [
    AppComponent,
    DoctorListComponent,
    CreateDoctorComponent,
    UpdateDoctorComponent,
    DoctorDetailsComponent,
    PatientListComponent,
    CreatePatientComponent,
    UpdatePatientComponent,
    PatientDetailsComponent,
    PrescriptionListComponent,
    CreatePrescriptionComponent,
    UpdatePrescriptionComponent,
    PrescriptionDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DoctorService, PatientService, PrescriptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
