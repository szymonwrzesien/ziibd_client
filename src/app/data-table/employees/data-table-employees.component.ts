import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'app-data-table',
  templateUrl: './data-table-employees.component.html',
  styleUrls: ['./data-table-employees.component.scss']
})
export class DataTableEmployeesComponent implements  OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  dataSource: MatTableDataSource<any>;

  // buttonDisabled = true; //?
 // selectedRowIndex = -1; //?
  constructor(private dataService: DataService) {}
  displayedColumns = [
    'employeeId',
    'firstName',
    'lastName',
    'email',
    'jobId',
    'salary',
    'phoneNumber'];

  ngOnInit() {
    this.dataService.getEmployees().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
  }
// w którym komponencie? //jak zmienic tło w zaznaczonym wierszu
  selectRow(row) {
    console.log(row);
   // this.buttonDisabled = false;
   // this.selectedRowIndex = row.id;
  }

}
