import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditScretaryComponent } from './edit-scretary.component';

describe('EditScretaryComponent', () => {
  let component: EditScretaryComponent;
  let fixture: ComponentFixture<EditScretaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditScretaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditScretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
