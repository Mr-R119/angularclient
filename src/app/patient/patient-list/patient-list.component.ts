import {Component, OnInit} from '@angular/core';

import {Patient} from '../model/patient';
import {PatientService} from '../../service/patient.service';
import {Observable} from "rxjs";
import {Router} from '@angular/router';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients: Observable<Patient[]>;

  constructor(private patientService: PatientService, private router: Router) {

  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.patients = this.patientService.getPatientsList();
  }

  createPatient(){
    this.router.navigate(['patients/add']);
  }

  deletePatient(id: number) {
    this.patientService.deletePatient(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  patientDetails(id: number) {
    this.router.navigate(['patients/details', id]);
  }
}
