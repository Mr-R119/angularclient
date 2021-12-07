import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseUrl = 'http://localhost:8080/doctors';

  constructor(private http: HttpClient) { }

  getDoctor(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/find/${id}`);
  }

  createDoctor(doctor: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/create`, doctor);
  }

  updateDoctor(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/update/${id}`, value);
  }

  deleteDoctor(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete/${id}`, { responseType: 'text' });
  }

  getDoctorsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/list`);
  }
}
