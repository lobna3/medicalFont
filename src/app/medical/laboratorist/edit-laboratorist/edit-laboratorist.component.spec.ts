import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLaboratoristComponent } from './edit-laboratorist.component';

describe('EditLaboratoristComponent', () => {
  let component: EditLaboratoristComponent;
  let fixture: ComponentFixture<EditLaboratoristComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditLaboratoristComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditLaboratoristComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
