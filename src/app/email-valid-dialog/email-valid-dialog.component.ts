import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-email-valid-dialog',
  templateUrl: './email-valid-dialog.component.html',
  styleUrls: ['./email-valid-dialog.component.scss']
})
export class EmailValidDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EmailValidDialogComponent>) { }

  ngOnInit() {
  }

  Click() {
    this.dialogRef.close();
  }
}
