import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobStartComponent } from './job-start.component';

describe('JobStartComponent', () => {
  let component: JobStartComponent;
  let fixture: ComponentFixture<JobStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
