import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelcetedComponent } from './selceted.component';

describe('SelcetedComponent', () => {
  let component: SelcetedComponent;
  let fixture: ComponentFixture<SelcetedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelcetedComponent]
    });
    fixture = TestBed.createComponent(SelcetedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
