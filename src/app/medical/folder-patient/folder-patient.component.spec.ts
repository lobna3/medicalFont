import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderPatientComponent } from './folder-patient.component';

describe('FolderPatientComponent', () => {
  let component: FolderPatientComponent;
  let fixture: ComponentFixture<FolderPatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderPatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
