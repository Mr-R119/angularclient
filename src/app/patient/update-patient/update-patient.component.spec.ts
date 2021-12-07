import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePatientComponent } from './update-patient.component';

describe('UpdateDoctorComponent', () => {
  let component: UpdatePatientComponent;
  let fixture: ComponentFixture<UpdatePatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
