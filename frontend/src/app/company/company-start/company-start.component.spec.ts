import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyStartComponent } from './company-start.component';

describe('CompanyStartComponent', () => {
  let component: CompanyStartComponent;
  let fixture: ComponentFixture<CompanyStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyStartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
