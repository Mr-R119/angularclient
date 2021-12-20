import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrescriptionService } from '../../service/prescription.service';
import { Prescription } from '../model/prescription';
import {DoctorService} from "../../service/doctor.service";
import {PatientService} from "../../service/patient.service";
import {Doctor} from "../../doctor/model/doctor";
import {Patient} from "../../patient/model/patient";
import * as moment from 'moment-timezone';
import {UiPrescription} from "../model/uiPrescription";

@Component({
  selector: 'app-create-prescription',
  templateUrl: './create-prescription.component.html',
  styleUrls: ['./create-prescription.component.css']
})
export class CreatePrescriptionComponent implements OnInit{

  doctors: Doctor[];
  patients: Patient[];

  selectedPatient: Patient;
  selectedDoctor: Doctor;

  prescription: UiPrescription = {
    doctor: new Doctor(),
    patient: new Patient(),
    createDate:'',
    expirationDate:'',
    description: '',
    priority:''
  };
  submitted = false;


  constructor(private prescriptionService: PrescriptionService, private patientService: PatientService,
              private doctorService: DoctorService, private router: Router) { }

  ngOnInit() {
    this.getPatients();
    this.getDoctors();
  }

  save(): void {
    const prescription = {
      patientId: this.selectedPatient.id,
      doctorId: this.selectedDoctor.id,
      description: this.prescription.description,
      createDate: this.prescription.createDate,
      expirationDate: this.prescription.expirationDate,
      priority: this.prescription.priority,
    };

    this.prescriptionService.createPrescription(prescription)
      .subscribe(data => {
          console.log(data);
          this.submitted = true;
          this.gotoList()
        }, error => console.log(error));
  }

  getPatients(){
   this.patientService.getPatientsList()
     .subscribe(data => {
       this.patients = data;
     });
  }

  getDoctors(){
    this.doctorService.getDoctorsList()
      .subscribe(data => {
        this.doctors = data;
      });
  }

  onSubmit() {
    this.submitted = true;
  }

  gotoList() {
    this.router.navigate(['/prescriptions']);
  }
}
