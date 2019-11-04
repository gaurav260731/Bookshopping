import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenbookComponent } from './childrenbook.component';

describe('ChildrenbookComponent', () => {
  let component: ChildrenbookComponent;
  let fixture: ComponentFixture<ChildrenbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
