import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesItemComponent } from './profile-item.component';

describe('ProfileItemComponent', () => {
  let component: ProfilesItemComponent;
  let fixture: ComponentFixture<ProfilesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilesItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
