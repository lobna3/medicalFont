import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddScretaryComponent } from './add-scretary.component';

describe('AddScretaryComponent', () => {
  let component: AddScretaryComponent;
  let fixture: ComponentFixture<AddScretaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddScretaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddScretaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
