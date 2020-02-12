import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DataTableEmployeesComponent} from './data-table/employees/data-table-employees.component';
import {DataTableJobsComponent} from './data-table/data-table-jobs/data-table-jobs.component';

const routes: Routes = [
  { path: 'employees', component: DataTableEmployeesComponent},
  {path: 'jobs', component: DataTableJobsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DataTableEmployeesComponent, DataTableJobsComponent ];
