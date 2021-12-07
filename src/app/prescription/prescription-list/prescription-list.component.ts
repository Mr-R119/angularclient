import {Component, OnInit} from '@angular/core';

import {Prescription} from '../model/prescription';
import {PrescriptionService} from '../../service/prescription.service';
import {Observable} from "rxjs";
import {Router} from '@angular/router';

@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.css']
})
export class PrescriptionListComponent implements OnInit {

  prescriptions: Observable<Prescription[]>;

  constructor(private prescriptionService: PrescriptionService, private router: Router) {

  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.prescriptions = this.prescriptionService.getPrescriptionsList();
  }

  createPrescription(){
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
}
