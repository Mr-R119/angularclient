import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseUrl = 'http://localhost:8080/patients';

  constructor(private http: HttpClient) { }

  getPatient(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/find/${id}`);
  }

  createPatient(patient: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, patient);
  }

  updatePatient(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }

  deletePatient(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  getPatientsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list`);
  }
}
