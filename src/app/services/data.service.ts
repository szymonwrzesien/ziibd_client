import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../model/Employee';
import {Job} from '../model/Job';

const URL = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<Employee[]> {

    return this.http.get<Employee[]>(URL + '/employees');
  }

  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(URL + '/jobs');
  }

  saveNewEmployee(employee: Employee) {
    return this.http.post(URL + '/saveNewEmployee', employee);
  }

  deleteEmployee(employee: Employee): Observable <Employee[]> {
    return this.http.post<Employee[]>(URL + '/deleteEmployee', employee);
  }

  updateEmployee(employee: Employee) {
    return this.http.post(URL + '/updateEmployee', employee);
  }
}
