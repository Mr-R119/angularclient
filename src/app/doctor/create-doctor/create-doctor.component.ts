import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DoctorService} from '../../service/doctor.service';
import {Doctor} from '../model/doctor';

@Component({
  selector: 'app-create-doctor',
  templateUrl: './create-doctor.component.html',
  styleUrls: ['./create-doctor.component.css']
})
export class CreateDoctorComponent implements OnInit {

  doctor: Doctor = {
    firstName: '',
    secondName: '',
    patronymic: '',
    specialization: ''
  };
  submitted = false;

  constructor(private doctorService: DoctorService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  save(): void {
    const data = {
      firstName: this.doctor.firstName,
      secondName: this.doctor.secondName,
      patronymic: this.doctor.patronymic,
      specialization: this.doctor.specialization,
    };

    this.doctorService.createDoctor(data)
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
    this.router.navigate(['/doctors']);
  }
}
