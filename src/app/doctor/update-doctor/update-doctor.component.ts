import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoctorService } from '../../service/doctor.service';
import { Doctor } from '../model/doctor';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent implements OnInit{

  id: number;
  doctor: Doctor;
  submitted: false;

  constructor(private route: ActivatedRoute,private router: Router,
              private doctorService: DoctorService) { }

  ngOnInit() {
    this.doctor = new Doctor();

    this.id = this.route.snapshot.params['id'];

    this.doctorService.getDoctor(this.id)
      .subscribe(data => {
        console.log(data)
        this.doctor = data;
      }, error => console.log(error));
  }

  updateDoctor() {
    this.doctorService.updateDoctor(this.id, this.doctor)
      .subscribe(data => console.log(data), error => console.log(error));
    this.doctor = new Doctor();
    this.gotoList();
  }

  onSubmit() {
    this.updateDoctor();
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
}
