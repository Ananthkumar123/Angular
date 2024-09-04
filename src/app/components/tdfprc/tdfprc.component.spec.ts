import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TDFPRCComponent } from './tdfprc.component';

describe('TDFPRCComponent', () => {
  let component: TDFPRCComponent;
  let fixture: ComponentFixture<TDFPRCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TDFPRCComponent]
    });
    fixture = TestBed.createComponent(TDFPRCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
