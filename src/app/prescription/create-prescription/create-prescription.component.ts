import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrescriptionService } from '../../service/prescription.service';
import { Prescription } from '../model/prescription';
import {DoctorService} from "../../service/doctor.service";
import {PatientService} from "../../service/patient.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-create-prescription',
  templateUrl: './create-prescription.component.html',
  styleUrls: ['./create-prescription.component.css']
})
export class CreatePrescriptionComponent implements OnInit{

  doctorService: DoctorService;
  patientService: PatientService;
  prescriptionForm: FormGroup;


  prescription: Prescription = {
    description: '',
    createDate: new Date(),
    expirationDate: new Date,
    priority:''
  };
  submitted = false;


  constructor(private prescriptionService: PrescriptionService,
              private router: Router, private fb:FormBuilder) { }

  ngOnInit() {
    this.prescriptionForm = this.fb.group({
      patient: [null],
      doctor: [null]
    });
  }


  save(): void {
    const data = {
      description: this.prescription.description,
      createDate: this.prescription.createDate,
      expirationDate: this.prescription.expirationDate,
      priority: this.prescription.priority,
    };

    this.prescriptionService.createPrescription(data)
      .subscribe(
        data => {
          console.log(data);
          this.submitted = true;
          this.gotoList()
        },
        error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
  }

  gotoList() {
    this.router.navigate(['/prescriptions']);
  }
}
