import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaboratoristComponent } from './laboratorist.component';

describe('LaboratoristComponent', () => {
  let component: LaboratoristComponent;
  let fixture: ComponentFixture<LaboratoristComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaboratoristComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaboratoristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
