import { TestBed } from '@angular/core/testing';

import { PrivacyInterceptor } from './privacy.interceptor';

describe('PrivacyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      PrivacyInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: PrivacyInterceptor = TestBed.inject(PrivacyInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
