import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';
import { Observable, of } from 'rxjs';
import { AppSettings } from '../shared/app.settings';
import { EMPLOYEES, EMPLOYEES_ERR } from './mock-employees';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http : HttpClient) { }

  private baseUrl: string = AppSettings.BASE_URL;

  getValidEmployeeRecords() : Observable<Employee[]>{
     return this.getValidRecordsFromBootApp();
     // return this.getValidRecordsFromMock();
  }

  getErroredEmployeeRecords() : Observable<Employee[]>{
     return this.getErroredRecordsFromBootApp();
    // return this.getErroredRecordsFromMock();
  }

  private getValidRecordsFromBootApp(){
    return this.http.get<Employee[]>(this.baseUrl + "/employees?erroredRecord=false"); 
  }

  private getValidRecordsFromMock(){
    return of(EMPLOYEES); 
  }

  private getErroredRecordsFromBootApp(){
    return this.http.get<Employee[]>(this.baseUrl + "/employees?erroredRecord=true"); 
  }

  private getErroredRecordsFromMock(){
    return of(EMPLOYEES_ERR); 
  }
}
