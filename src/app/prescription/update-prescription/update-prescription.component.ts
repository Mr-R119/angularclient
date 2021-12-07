import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrescriptionService } from '../../service/prescription.service';
import { Prescription } from '../model/prescription';

@Component({
  selector: 'app-update-prescription',
  templateUrl: './update-prescription.component.html',
  styleUrls: ['./update-prescription.component.css']
})
export class UpdatePrescriptionComponent implements OnInit{

  id: number;
  prescription: Prescription;
  submitted: false;

  constructor(private route: ActivatedRoute,private router: Router,
              private prescriptionService: PrescriptionService) { }

  ngOnInit() {
    this.prescription = new Prescription();

    this.id = this.route.snapshot.params['id'];

    this.prescriptionService.getPrescription(this.id)
      .subscribe(data => {
        console.log(data)
        this.prescription = data;
      }, error => console.log(error));
  }

  updatePrescription() {
    this.prescriptionService.updatePrescription(this.id, this.prescription)
      .subscribe(data => console.log(data), error => console.log(error));
    this.prescription = new Prescription();
    this.gotoList();
  }

  onSubmit() {
    this.updatePrescription();
  }

  gotoList() {
    this.router.navigate(['/prescriptions']);
  }
}
