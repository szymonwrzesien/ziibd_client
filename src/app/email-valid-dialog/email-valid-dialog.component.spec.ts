import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailValidDialogComponent } from './email-valid-dialog.component';

describe('EmailValidDialogComponent', () => {
  let component: EmailValidDialogComponent;
  let fixture: ComponentFixture<EmailValidDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailValidDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailValidDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
