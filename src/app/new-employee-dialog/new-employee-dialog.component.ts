import {Component, OnInit} from '@angular/core';
import {Employee} from '../model/Employee';
import {DataService} from '../services/data.service';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-employee-dialog',
  templateUrl: './new-employee-dialog.component.html',
  styleUrls: ['./new-employee-dialog.component.scss']
})
export class NewEmployeeDialogComponent implements OnInit {
  newEmployee: Employee;
  // disabled = true;


  constructor(private dataService: DataService, public dialogRef: MatDialogRef<NewEmployeeDialogComponent>) {}

  ngOnInit() {
    this.newEmployee = new Employee();
  }

  Add() {
    this.dataService.saveNewEmployee(this.newEmployee).subscribe();
    this.dialogRef.close();
  }

/*  checkValue() {
    if (this.newEmployee.firstName !== null && this.newEmployee.email !== null) {
      this.disabled = false;
    }
  }*/
  triggerJobId() {

  }
}
