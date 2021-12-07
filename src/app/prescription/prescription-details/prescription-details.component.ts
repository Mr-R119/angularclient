import { Component, OnInit, Input  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrescriptionService } from '../../service/prescription.service';
import { Prescription } from '../model/prescription';

@Component({
  selector: 'app-prescription-details',
  templateUrl: './prescription-details.component.html',
  styleUrls: ['./prescription-details.component.css']
})
export class PrescriptionDetailsComponent implements OnInit {

  id: number;
  prescription: Prescription;

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

  update(){
    this.router.navigate(['prescriptions/update',this.id])
  }

  list(){
    this.router.navigate(['prescriptions']);
  }
}
