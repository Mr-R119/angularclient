import {Component, OnInit} from '@angular/core';

import {Doctor} from '../model/doctor';
import {DoctorService} from '../../service/doctor.service';
import {Observable} from "rxjs";
import {Router} from '@angular/router';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit {

  doctors: Doctor[];

  constructor(private doctorService: DoctorService, private router: Router) {

  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.doctorService.getDoctorsList()
      .subscribe((data: Doctor[]) => {
        this.doctors = data;
      });
  }

  createDoctor(){
    this.router.navigate(['doctors/add']);
  }

  deleteDoctor(id: number) {
    this.doctorService.deleteDoctor(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  doctorDetails(id: number) {
    this.router.navigate(['doctors/details', id]);
  }

  updateDoctor(id: number){
    this.router.navigate(['doctors/update', id])
  }
}
