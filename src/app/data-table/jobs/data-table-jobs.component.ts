import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-data-table-jobs',
  templateUrl: './data-table-jobs.component.html',
  styleUrls: ['./data-table-jobs.component.scss']
})
export class DataTableJobsComponent implements OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;


  dataSource: MatTableDataSource<any>;

  constructor(private dataService: DataService) {}

  displayedColumns = [
    'jobId',
    'jobTitle',
    'minSalary',
    'maxSalary',
  ];

  ngOnInit() {
    this.dataService.getJobs().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });

  }
}
