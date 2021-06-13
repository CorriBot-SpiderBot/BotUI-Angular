import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftcontrollerComponent } from './leftcontroller.component';

describe('LeftcontrollerComponent', () => {
  let component: LeftcontrollerComponent;
  let fixture: ComponentFixture<LeftcontrollerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftcontrollerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftcontrollerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
