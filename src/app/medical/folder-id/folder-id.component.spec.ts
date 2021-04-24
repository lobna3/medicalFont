import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FolderIdComponent } from './folder-id.component';

describe('FolderIdComponent', () => {
  let component: FolderIdComponent;
  let fixture: ComponentFixture<FolderIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FolderIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FolderIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
