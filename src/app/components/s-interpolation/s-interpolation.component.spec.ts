import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SInterpolationComponent } from './s-interpolation.component';

describe('SInterpolationComponent', () => {
  let component: SInterpolationComponent;
  let fixture: ComponentFixture<SInterpolationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SInterpolationComponent]
    });
    fixture = TestBed.createComponent(SInterpolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
