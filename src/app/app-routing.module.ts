import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DataTableComponent} from './data-table/data-table.component';

const routes: Routes = [
  { path: 'employees', component: DataTableComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DataTableComponent];
