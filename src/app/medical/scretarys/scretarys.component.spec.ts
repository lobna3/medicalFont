import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScretarysComponent } from './scretarys.component';

describe('ScretarysComponent', () => {
  let component: ScretarysComponent;
  let fixture: ComponentFixture<ScretarysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScretarysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScretarysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
