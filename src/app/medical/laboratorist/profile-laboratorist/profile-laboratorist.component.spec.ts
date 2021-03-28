import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLaboratoristComponent } from './profile-laboratorist.component';

describe('ProfileLaboratoristComponent', () => {
  let component: ProfileLaboratoristComponent;
  let fixture: ComponentFixture<ProfileLaboratoristComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileLaboratoristComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLaboratoristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
