import {Component, Inject, OnInit} from '@angular/core';
import {Employee} from '../model/Employee';
import {DataService} from '../services/data.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-new-employee-dialog',
  templateUrl: './new-employee-dialog.component.html',
  styleUrls: ['./new-employee-dialog.component.scss']
})
export class NewEmployeeDialogComponent implements OnInit {
  newEmployee: Employee;



  constructor(private dataService: DataService, @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<NewEmployeeDialogComponent>) {}

  ngOnInit() {
    this.newEmployee = new Employee();
    // this.newEmployee = this.data;
  }

  Add() {
    this.dataService.saveNewEmployee(this.newEmployee).subscribe();
    this.dialogRef.close();
  }

  validEmail() {

  }
}
