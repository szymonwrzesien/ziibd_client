import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableJobsComponent } from './data-table-jobs.component';

describe('DataTableJobsComponent', () => {
  let component: DataTableJobsComponent;
  let fixture: ComponentFixture<DataTableJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
