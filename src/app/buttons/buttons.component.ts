import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material';
import {NewEmployeeDialogComponent} from '../new-employee-dialog/new-employee-dialog.component';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
  buttonDisabled = true;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }


  AddNewEmployee() {
    this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewEmployeeDialogComponent, {

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }
}
