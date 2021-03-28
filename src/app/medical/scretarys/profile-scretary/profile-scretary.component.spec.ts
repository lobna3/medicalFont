import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileScretaryComponent } from './profile-scretary.component';

describe('ProfileScretaryComponent', () => {
  let component: ProfileScretaryComponent;
  let fixture: ComponentFixture<ProfileScretaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileScretaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileScretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
