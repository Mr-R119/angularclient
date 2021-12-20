import {Component, OnInit} from '@angular/core';

import {Prescription} from '../model/prescription';
import {PrescriptionService} from '../../service/prescription.service';
import {Router} from '@angular/router';
import {PatientService} from "../../service/patient.service";
import {Doctor} from "../../doctor/model/doctor";
import {Patient} from "../../patient/model/patient";
import {DoctorService} from "../../service/doctor.service";
import {UiPrescription} from "../model/uiPrescription";

@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.css']
})
export class PrescriptionListComponent implements OnInit {

  prescriptions: Prescription[] = [];
  uiPrescriptions: UiPrescription[] = [];
  uiPrescription: UiPrescription;
  doctor: Doctor = new Doctor();


  constructor(private prescriptionService: PrescriptionService,
              private patientService: PatientService,
              private doctorService: DoctorService,
              private router: Router) {
  }

  ngOnInit() {
    this.reloadData().then((res) => console.log(this.uiPrescriptions));
  }

  async getUiPrescription(element: Prescription): Promise<UiPrescription> {
    this.uiPrescription = new UiPrescription();
    this.patientService.getPatient(element.patientId)
      .subscribe((data: Patient) =>
        this.uiPrescription.patient = data);
    this.doctorService.getDoctor(element.doctorId)
      .subscribe((data) =>
        this.uiPrescription.doctor = data)
    return this.uiPrescription;
  }


  async reloadData() {
    this.prescriptionService.getPrescriptionsList()
      .subscribe((data: any) => {
        data.forEach(async (element: Prescription) => {
          let prescription = new UiPrescription();
          prescription.id = element.id;
          prescription.createDate = element.createDate;
          prescription.expirationDate = element.expirationDate;
          prescription.priority = element.priority;
          prescription.description = element.description;
          this.doctorService.getDoctor(element.doctorId).subscribe((data: Doctor) => {
            prescription.doctor = data;
            this.patientService.getPatient(element.patientId).subscribe((patient: Patient) => {
              prescription.patient = patient;
              this.uiPrescriptions.push(prescription);
            });
          });
        });
      });
  }

  createPrescription() {
    this.router.navigate(['prescriptions/add']);
  }

  deletePrescription(id: number) {
    this.prescriptionService.deletePrescription(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  prescriptionDetails(id: number) {
    this.router.navigate(['prescriptions/details', id]);
  }

  updatePrescription(id: number) {
    this.router.navigate(['prescriptions/update', id])
  }
}
