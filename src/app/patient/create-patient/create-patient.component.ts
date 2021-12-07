import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PatientService} from '../../service/patient.service';
import {Patient} from '../model/patient';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  patient: Patient = {
    firstName: '',
    secondName: '',
    patronymic: '',
    phone: ''
  };
  submitted = false;

  constructor(private patientService: PatientService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  save(): void {
    const data = {
      firstName: this.patient.firstName,
      secondName: this.patient.secondName,
      patronymic: this.patient.patronymic,
      phone: this.patient.phone,
    };

    this.patientService.createPatient(data)
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
    this.router.navigate(['/patients']);
  }
}
