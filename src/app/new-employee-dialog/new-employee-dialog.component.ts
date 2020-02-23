import {Component, Inject, OnInit} from '@angular/core';
import {Employee} from '../model/Employee';
import {DataService} from '../services/data.service';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialog} from '@angular/material';
import {EmailValidDialogComponent} from '../email-valid-dialog/email-valid-dialog.component';

@Component({
  selector: 'app-new-employee-dialog',
  templateUrl: './new-employee-dialog.component.html',
  styleUrls: ['./new-employee-dialog.component.scss']
})
export class NewEmployeeDialogComponent implements OnInit {
  newEmployee: Employee;
  update: boolean;


  constructor(private dataService: DataService, @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<NewEmployeeDialogComponent>, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.newEmployee = this.data.value;
    this.update = this.data.update;
  }

  Add() {

if (this.validEmail() === true) {
 this.openDialog();

} else if (this.update) {
      this.dataService.updateEmployee(this.newEmployee).subscribe();
      this.dialogRef.close();
    } else {
      this.dataService.saveNewEmployee(this.newEmployee).subscribe();
      this.dialogRef.close();
    }
  }

  validEmail(): boolean {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.data.array.length; i++) {
      if (this.newEmployee.email === this.data.array[i].email
        && this.newEmployee.employeeId !== this.data.array[i].employeeId) {
        return true;
      }
    }
    return false;
  }


  openDialog(): void {
    const validEmailDialog = this.dialog.open(EmailValidDialogComponent, {
      width: '250px',
    });

/*    validEmailDialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });*/
  }

}

