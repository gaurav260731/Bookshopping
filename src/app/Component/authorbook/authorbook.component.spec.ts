import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorbookComponent } from './authorbook.component';

describe('AuthorbookComponent', () => {
  let component: AuthorbookComponent;
  let fixture: ComponentFixture<AuthorbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
