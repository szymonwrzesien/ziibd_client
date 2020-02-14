import { Component, OnInit } from '@angular/core';
import {Employee} from '../model/Employee';

@Component({
  selector: 'app-new-employee-dialog',
  templateUrl: './new-employee-dialog.component.html',
  styleUrls: ['./new-employee-dialog.component.scss']
})
export class NewEmployeeDialogComponent implements OnInit {
  newEmployee: Employee;
  employeeId: number;
  firstName: string;
  lastName: string;
  email: string;
  jobId: string;
  salary: string;
  commissionPct: string;
  managerId: string;
  phoneNumber: string[];

  constructor() { }

  ngOnInit() {
  }

  Add() {
     this.newEmployee = new Employee();
     this.newEmployee.firstName = this.firstName;
  }
}
