import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {DataService} from '../../services/data.service';
import {NewEmployeeDialogComponent} from '../../new-employee-dialog/new-employee-dialog.component';
import {MatDialog} from '@angular/material';
import {SelectionModel} from '@angular/cdk/collections';
import {Employee} from '../../model/Employee';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table-employees.component.html',
  styleUrls: ['./data-table-employees.component.scss']
})
export class DataTableEmployeesComponent implements OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  dataSource: MatTableDataSource<any>;
  selectedRow: Employee;
  buttonDisabled = true;
  selection: SelectionModel<Employee>;
  isSelected = false;
  displayedColumns = [
    'employeeId',
    'firstName',
    'lastName',
    'email',
    'jobId',
    'salary',
    'phoneNumber'];
  employeesArray: Employee[] = [];

  constructor(private dataService: DataService, public dialog: MatDialog) {}

  ngOnInit() {
    this.dataService.getEmployees().subscribe(data => {
      this.saveDataFromServer(data);

    });
  }

  saveDataFromServer(data: any) {
    this.employeesArray = data;
    this.dataSource = new MatTableDataSource(this.employeesArray);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.selection = new SelectionModel<Employee>(false);
  }

  AddNewEmployee() {
    this.openDialog(false);
  }

  openDialog(isUpdate: boolean): void {
    if (isUpdate) {
      const dialogRef = this.dialog.open(NewEmployeeDialogComponent, {
        data: {
          value: this.selectedRow,
          update: true
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.dataService.getEmployees().subscribe(data => this.saveDataFromServer(data));
      });
    } else {
      const dialogRef = this.dialog.open(NewEmployeeDialogComponent, {
        data: {
          value: new Employee(),
          update: false
        }
      });
      dialogRef.afterClosed().subscribe(result => {
        this.dataService.getEmployees().subscribe(data => this.saveDataFromServer(data));
      });
    }

  }

  selectRecord(row: any) {
    this.selection.toggle(row);
    if (this.isSelected && row === this.selectedRow) {
      this.buttonDisabled = true;
      this.isSelected = !this.isSelected;
    } else if (!this.isSelected) {
      this.buttonDisabled = false;
      this.isSelected = !this.isSelected;
    }
    this.selectedRow = row;
  }

  deleteEmployee() {
    this.dataService.deleteEmployee(this.selectedRow).subscribe(data => this.saveDataFromServer(data));
  }

  updateEmployee() {
    this.openDialog(true);
  }


}
