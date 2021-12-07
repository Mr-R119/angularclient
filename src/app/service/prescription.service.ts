import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  private baseUrl = 'http://localhost:8080/prescriptions';

  constructor(private http: HttpClient) { }

  getPrescription(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/find/${id}`);
  }

  createPrescription(prescription: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/create`, prescription);
  }

  updatePrescription(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }

  deletePrescription(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  getPrescriptionsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list`);
  }
}
