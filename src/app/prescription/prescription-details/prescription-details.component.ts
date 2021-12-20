import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrescriptionService } from '../../service/prescription.service';
import { Prescription } from '../model/prescription';
import {Doctor} from "../../doctor/model/doctor";
import {Patient} from "../../patient/model/patient";
import {DoctorService} from "../../service/doctor.service";
import {PatientService} from "../../service/patient.service";

@Component({
  selector: 'app-prescription-details',
  templateUrl: './prescription-details.component.html',
  styleUrls: ['./prescription-details.component.css']
})
export class PrescriptionDetailsComponent implements OnInit {

  id: number;
  prescription: Prescription;
  doctor: Doctor;
  patient: Patient;

  constructor(private route: ActivatedRoute,private router: Router,
              private prescriptionService: PrescriptionService,
              private doctorService: DoctorService,
              private patientService: PatientService) { }

  ngOnInit() {
    this.prescription = new Prescription();

    this.id = this.route.snapshot.params['id'];

    this.prescriptionService.getPrescription(this.id)
      .subscribe(data => {
        console.log(data)
        this.prescription = data;
        this.doctorService.getDoctor(data.doctorId)
          .subscribe(doctor => {
            this.doctor = doctor;
          });
        this.patientService.getPatient(data.patientId)
          .subscribe(patient => {
            this.patient = patient;
          })
      }, error => console.log(error));
  }


  list(){
    this.router.navigate(['prescriptions']);
  }
}
