import {Component, Inject, OnInit} from '@angular/core';
import {Employee} from '../model/Employee';
import {DataService} from '../services/data.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-new-employee-dialog',
  templateUrl: './new-employee-dialog.component.html',
  styleUrls: ['./new-employee-dialog.component.scss']
})
export class NewEmployeeDialogComponent implements OnInit {
  newEmployee: Employee;
  update: boolean;


  constructor(private dataService: DataService, @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<NewEmployeeDialogComponent>) {
  }

  ngOnInit() {
    this.newEmployee = this.data.value;
    this.update = this.data.update;
  }

  Add() {
    if (this.update) {
      this.dataService.updateEmployee(this.newEmployee).subscribe();
    } else {
      this.dataService.saveNewEmployee(this.newEmployee).subscribe();
    }

    this.dialogRef.close();
  }

  validEmail() {//.email ===

  }
}
