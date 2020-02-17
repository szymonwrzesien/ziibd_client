import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MenuComponent } from './menu/menu.component';
import {
  MatIconModule,
  MatMenuModule,
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { DataTableJobsComponent } from './data-table/jobs/data-table-jobs.component';
import { NewEmployeeDialogComponent } from './new-employee-dialog/new-employee-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    routingComponents,
    DataTableJobsComponent,
    NewEmployeeDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    NewEmployeeDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

