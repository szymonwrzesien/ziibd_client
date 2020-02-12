import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../model/Employee';
import {Job} from '../model/Job';

const url = 'http://localhost:8080';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}

 getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(url + '/employees');
 }

 getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(url + '/jobs' );
 }
}
