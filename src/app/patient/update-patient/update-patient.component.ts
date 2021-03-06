import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../service/patient.service';
import { Patient } from '../model/patient';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit{

  id: number;
  patient: Patient;
  submitted: false;

  constructor(private route: ActivatedRoute,private router: Router,
              private patientService: PatientService) { }

  ngOnInit() {
    this.patient = new Patient();

    this.id = this.route.snapshot.params['id'];

    this.patientService.getPatient(this.id)
      .subscribe((data: Patient) => {
        console.log(data)
        this.patient = data;
      }, error => console.log(error));
  }

  updatePatient() {
    this.patientService.updatePatient(this.id, this.patient)
      .subscribe(data => console.log(data),
          error => console.log(error));
    this.patient = new Patient();
    this.gotoList();
  }

  onSubmit() {
    this.updatePatient();
  }

  gotoList() {
    this.router.navigate(['/patients']);
  }
}
