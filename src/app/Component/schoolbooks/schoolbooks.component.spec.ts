import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolbooksComponent } from './schoolbooks.component';

describe('SchoolbooksComponent', () => {
  let component: SchoolbooksComponent;
  let fixture: ComponentFixture<SchoolbooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
